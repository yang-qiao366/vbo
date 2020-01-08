<template>
  <div id="app" class="container">
    <Nav v-if="isShowNav" />
    <div class=" layout">
    <router-view/>
    <Slider v-if="isShowSlider"></Slider>
  </div>
  <ArrowUp></ArrowUp>
  <Footer v-show="isShowNav"></Footer>
  </div>
</template>
 
<script>
import Slider from '@/views/slider'
import  Nav from '@/views/nav'
import ArrowUp from '@/views/arrowUp'
import { Route } from "vue-router";
import { isMobileOrPc } from "@/utils/utils";
// 移动端 rem 单位适配
if (isMobileOrPc()) {
  // width * 100 / 750 = width / 7.5
  // 1rem = 100px
  var width = window.screen.width;
  window.document.getElementsByTagName("html")[0].style.fontSize =
    width / 7.5 + "px";
}
export default {
  components:{
    Slider,
    Nav,
    ArrowUp
  },
  data(){
    return {
      isShowNav: false,
      isShowSlider: false,
    }
  },
  name: 'App',
  watch:{
        '$route'(val,oldval){
           this.routeChange(val,oldval)
        }
    },
 methods: {
 showToast () {
 this.$toast('我是弹出消息')
 },
   routeChange(val,oldval) {
    const referrer= document.getElementById("referrer");
    if (val.path === "/") {
      this.isShowNav = false;
     // referrer.setAttribute("content", "always");
    } else {
      this.isShowNav = true;
    //  referrer.setAttribute("content", "never");
    }
    if (
      val.path === "/articles" ||
      val.path === "/archive" ||
      val.path === "/project" ||
      val.path === "/timeline" ||
      val.path === "/message"
    ) {
      this.isShowSlider = true;
    } else {
      this.isShowSlider = false;
    }
    if (isMobileOrPc()) {
      this.isShowSlider = false;
    }
  }
 },
 mounted(){
   this.routeChange(this.$route, this.$route)
  }
}
</script>

<style lang="less">
@import url('./less/index.less');
@import url('./less/mobile.less');
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  width: 1200px;
  margin: 0 auto;
  padding-top: 61px;
}
img {
  vertical-align: bottom;
}
</style>
