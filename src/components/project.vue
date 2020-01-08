<!-- 项目界面 -->
<template>
  <div class="project left">
    <el-row :gutter="20">
      <el-col class="el-col-pointer"
              :span="isMobileOrPc ? 24 : 12"
              v-for="l in list"
              :key="l._id"
              style="margin-bottom: 20px">
        <a :href="href"
           target="_blank"
           rel="noopener noreferrer">
          <el-card shadow="hover">
            <img :src="l.img"
                 class="image">
            <div style="padding: 14px;">
              <h4>{{l.title}}</h4>
              <div class="content">{{l.title}}</div>
              <span>
                {{l.update_time_formatted}}--
              </span>
              <span>
                {{l.update_time_formatted}}
              </span>
            </div>
          </el-card>
        </a>
      </el-col>
    </el-row>
    <LoadingCustom v-if="isLoading"></LoadingCustom>
    <LoadEnd v-if="isLoadEnd"></LoadEnd>
  </div>
</template>

<script>
import { isMobileOrPc } from '../utils/utils';
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
   reverse: true,
   isLoadEnd: false,
   isLoading: false,
   isMobileOrPc: isMobileOrPc(),
   list: [],
   params: {
       status: "1"
   },
   href: 'https://github.com/yang-qiao366'
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
   handleSearch(){
       this.$https.get('http://149.28.94.205:3000/mock/23/user/article/list',{
           params: this.params
       }).then(
           (res)=>this.list = res.data.data
        // (res)=>console.log(res.data.data)
       )
   }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  this.handleSearch();
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less" scoped>
.project {
  overflow: hidden;
  padding: 40px 0;
  .el-col-pointer {
    cursor: pointer;
  }
  .content {
    height: 70px;
    text-overflow: ellipsis;
  }
  .image {
    width: 100%;
    height: 250px;
  }
}
</style>