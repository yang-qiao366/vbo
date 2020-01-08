<!-- 经历 -->
<template>
  <div class="timeline left">
    <el-timeline>
      <el-timeline-item v-for="l in list"
                        :key="l._id"
                        :color="l.state === 1 ? 'green' : l.state === 3 ? 'red' : ''"
                        placement="top"
                        hide-timestamp>
        <el-card>
          <h3>{{l.title}}</h3>
          <p>{{l.title}}</p>
          <p>
            <span>
              {{l.update_time_formatted}}--
            </span>
            <span>
              {{l.update_time_formatted}}
            </span>
          </p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    list: [],
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
.timeline {
  padding: 40px 0;
  .year {
    font-size: 34px;
    font-weight: bold;
    color: #000;
  }
  a {
    text-decoration: none;
  }

  .title {
    color: #333;
    &:hover {
      color: #1890ff;
    }
  }
}
</style>
