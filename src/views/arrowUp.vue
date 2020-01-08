<!-- 回到顶部的按钮 -->
<template>
  <div>
    <i v-show="isShowBtn"
       @click="topFunction"
       class="el-icon-arrow-up"></i>
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
    isShowBtn: false,
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
   // 当网页向下滑动 20px 出现"返回顶部" 按钮
    window.onscroll = ()=> {
      if (
        window.document.body.scrollTop > 100 ||
        window.document.documentElement.scrollTop > 100
      ) {
        this.isShowBtn = true;
      } else {
        this.isShowBtn = false;
      }
    }
  // 点击按钮，返回顶部

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
<style scoped>
.el-icon-arrow-up {
  position: fixed;
  bottom: 50px;
  right: 40px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: rgb(119, 118, 118);
  cursor: pointer;
  padding: 15px;
  color: white;
  border-radius: 50%;
}
.el-icon-arrow-up:hover {
  background-color: #555;
}

</style>