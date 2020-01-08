<!-- 文章 -->
<template>
  <div class="left clearfix">
    <h3 v-if="false"
        class="left-title">相关的文章：</h3>
    <ul class="articles-list"
        id="list">
      <transition-group name="el-fade-in">
        <li 
            v-for="(article) in articlesList"
            :key="article.article_id"
            class="item">
          <a :href="href"
             target="_blank">
            <img class="wrap-img img-blur-done"
                 :data-src="article.img_url"
                 data-has-lazy-src="false"
                 src="http://www.gdbylm.com/yangwei/09/young.jpg"
                 alt="文章封面" />
            <div class="content">
              <h4 class="title">{{article.title}}</h4>
              <p class="abstract">{{article.title}}</p>
              <div class="meta">
                <span>查看 500</span>
                <span>评论 5000+</span>
                <span>赞 10000+</span>
                <span v-if="article.create_time"
                      class="time">
                  {{article.create_time_formatted}}
                </span>
              </div>
            </div>
          </a>
        </li>
      </transition-group>
    </ul>
<loadEnd/>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import loadEnd from '@/components/loadEnd.vue'

export default {
//import引入的组件需要注入到对象中才能使用
components: {
   loadEnd
  },
data() {
//这里存放数据
return {
   isLoadEnd: false,
   isloading: false,
   articlesList: [],
   total:0,
   href:"https://wc.gdbylm.com/test/"
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
//  ()=>console.log(this.$route, this.$route)
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
.left {
  .articles-list {
    margin: 0;
    padding: 0;
    list-style: none;
    .title {
      color: #333;
      margin: 7px 0 4px;
      display: inherit;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
    }
    .item > div {
      padding-right: 140px;
    }
    .item .wrap-img {
      position: absolute;
      top: 50%;
      margin-top: -50px;
      right: 0;
      width: 125px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
      }
    }
    li {
      line-height: 20px;
      position: relative;
      // width: 100%;
      padding: 15px 0px;
      padding-right: 150px;
      border-bottom: 1px solid #f0f0f0;
      word-wrap: break-word;
      cursor: pointer;
      &:hover {
        .title {
          color: #000;
        }
      }
      .abstract {
        min-height: 30px;
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #555;
      }
      .meta {
        padding-right: 0 !important;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        a {
          margin-right: 10px;
          color: #b4b4b4;
          &::hover {
            transition: 0.1s ease-in;
            -webkit-transition: 0.1s ease-in;
            -moz-transition: 0.1s ease-in;
            -o-transition: 0.1s ease-in;
            -ms-transition: 0.1s ease-in;
          }
        }
        span {
          margin-right: 10px;
          color: #666;
        }
      }
    }
  }
}
</style>