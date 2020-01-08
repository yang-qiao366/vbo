<!-- 文章 -->
<template>
  <div class="archive left">
    <el-timeline>
      <el-timeline-item v-for="(l) in articlesList"
                        :key="l.years"
                        placement="top"
                        hide-timestamp>
        <h3 class="year">{{l.years}}</h3>

        <el-timeline-item v-for="(item) in l.data"
                          :key="item.article_id"
                          :color="item.state === 1 ? 'green' : item.state === 3 ? 'red' : ''"
                          placement="top"
                          hide-timestamp>
          <router-link :to="`/articleDetail?article_id=${item.article_id}`"
                       target="_blank">
            <h3 class="title">{{item.title}}</h3>
          </router-link>
          <p>{{item.update_time_formatted}}</p>
        </el-timeline-item>
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
   isLoadEnd: false,
   isLoading: false,
   articlesList: [],
   total: 0,
   params: {
       keyword: "",
      likes: "", // 是否是热门文章
      state: 1, // 文章发布状态 => 0 草稿，1 已发布,'' 代表所有文章
      article: 1,
      tag_id: "",
      category_id: "",
      pageNum: 1,
      pageSize: 10
   }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
   handleSearch(){
       this.$https.get('http://149.28.94.205:3000/mock/23/article/list',{
           params: this.params
       }).then(
           (res)=>this.articlesList = res.data.data
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
.archive {
  padding: 40px 0;
  .year {
    font-size: 30px;
    font-weight: bold;
    color: #000;
    margin-top: 0;
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

