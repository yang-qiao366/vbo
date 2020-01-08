<!-- 标签云 -->
<template>
<div class="right slider">
    <img class="right-logo"
         src="http://www.gdbylm.com/yangwei/09/young.jpg"
         alt="">
    <div class="title">杨府威少</div>
    <div class="right-content">
      <div class="item">
        <div class="num">123</div>粉丝
      </div>
      <div class="item">
        <div class="num">123</div>文章
      </div>
      <div class="item">
        <div class="num">123</div>字数
      </div>
      <div class="item">
        <div class="num">123</div>收获喜欢
      </div>
    </div>
    <div class="tags">
      <div class="title">标签云</div>
      <router-link v-for="item in list"
                   class="item"
                   :key="item.l_id"
                   :to="`/articles?tag_id=${item.l_id}&tag_name=${item.name}&category_id=`">
        <span :key="item.l_id">{{item.name}}</span>
      </router-link>
    </div>
    <!-- <div class="introduce">
      <div class="title">技术以内的 BB</div>
      <div class="content">
        <img style="width:100%;"
             src="http://www.gdbylm.com/yangwei/09/young.jpg"
             alt="杨府威少" />
      </div>
    </div>
    <div class="introduce">
      <div class="title">技术以外的 BB</div>
      <div class="content">
        <img style="width:100%;"
             src="http://www.gdbylm.com/yangwei/09/young.jpg"
             alt="杨府威少" />
      </div>
    </div> -->
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
   total: 0,
   params:{
        keyword: "",
        pageNum: 1,
        pageSize: 100
   },
   list:[
     {
           l_id: '1',
           name:'vue.js'
       },
       {
           l_id: '2',
           name:'react.js'
       },
       {
           l_id: '3',
           name:'node.js'
       },
       {
           l_id: '4',
           name:'java'
       },
       {
           l_id: '5',
           name: '数据结构与算法'
       }
       ]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    //请求标签云
//   handleSearch(){
//       this.isLoading = true;
//       const data = this.$https.get(this.$urls.getTagList, {
//       params: this.params
//     });
//     this.isLoading =false;
//     this.list = [...this.list, ...data.list];
//     this.total = data.count;
//     this.params.pageNum++;
//     if (this.total === this.list.length) {
//       this.isLoadEnd = true;
//     }
//   }

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    //调用便签云
 //  this.handleSearch()
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
<style scoped lang="less">
.slider {
  padding-top: 50px;
}
.right {
  text-align: center;
  .right-logo {
    width: 130px;
    border-radius: 50%;
    animation: mylogo 3s;
    -moz-animation: mylogo 3s; /* Firefox */
    -webkit-animation: mylogo 3s; /* Safari and Chrome */
    -o-animation: mylogo 3s; /* Opera */
    animation-iteration-count: infinite;
  }
  .title {
    font-size: 25px;
    font-weight: bold;
  }
  .right-content {
    padding: 10px 0 20px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
    .item {
      display: inline-block;
      padding: 0 10px;
      color: #969696;
      border-right: 1px solid #eee;
      &:last-child {
        border-right: none;
      }
      .num {
        color: #333;
      }
    }
  }
  .introduce {
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
    .title {
      font-size: 14px;
      color: #969696;
    }
    .content {
      color: #333;
      line-height: 26px;
      text-align: left;
      padding: 20px 0;
    }
    .footer {
      padding-bottom: 10px;
    }
  }
  .tags {
    min-height: 200px;
    padding: 5px 0 20px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
    .title {
      font-size: 14px;
      color: #969696;
    }
    .item {
      display: inline-block;
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 5px;
      background-color: #eee;
      color: #333;
      margin: 10px 10px 0 0;
      text-decoration: none;
      &:hover {
        color: #409eff;
      }
    }
  }
  .classification {
    padding: 5px 0 20px 0;
    .title {
      font-size: 14px;
      color: #969696;
    }
    .item {
      text-align: center;
      padding: 10px;
      border-bottom: 1px solid #eee;
      color: #666;
      margin: 10px 10px 0 0;
    }
  }
}
@keyframes mylogo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

@-moz-keyframes mylogo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

@-webkit-keyframes mylogo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

@-o-keyframes mylogo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}
</style>
