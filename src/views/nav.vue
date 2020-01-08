<!-- 导航 -->
<template>
  <div>
      <!-- pc -->
    <div  v-if="!isMobile" class="nav">
      <div class="nav-content">
        <el-row :gutter="20">
          <el-col :span="3">
            <router-link to="/">
              <img class="logo"
                   src="http://www.gdbylm.com/yangwei/09/young.jpg"
                   alt="yangfuweishao">
            </router-link>
          </el-col>
          <el-col :span="16">
            <el-menu :router="true"
                     :default-active="activeIndex"
                     active-text-color="#409eff"
                     class="el-menu-demo"
                     mode="horizontal"
                     @select="handleSelect">
              <el-menuItem :route="list.path"
                           :index="list.index"
                           v-for="list in list"
                           :key="list.index">
                {{list.name}}
              </el-menuItem>
            </el-menu>
          </el-col>
          <!-- 登陆用户显示 判断是否登陆了，登陆后显示用户名-->
              <el-col v-if="isMobile"
                  :span="5">
            <div class="nav-right">
              <el-dropdown >
                <span class="el-dropdown-link">
                  如果登陆了，就显示用户名
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <!-- 有头像显示头像 -->
                <img class="user-img"
                     src="http://www.gdbylm.com/yangwei/09/young.jpg"
                     alt="yangfuweishao">
                <img class="user-img"
                     alt="yangfuweishao">
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="logout">登 出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
          <!--没有登陆-->
          <el-col v-else>
            <div class="nav-right">
              <el-button size="small"
                         type="primary"
                         @click="handleClick('login')"
                         >登录</el-button>
              <el-button size="small"
                         type="danger"
                         @click="handleClick('register')">
                         注册</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- mobile -->
    <div v-else class="nav">
      <div class="nav-mobile">
        <div class="nav-mobile-logo">
          <router-link to="/">
            <img class="logo fl"
                 src="http://www.gdbylm.com/yangwei/09/young.jpg"
                     alt="yangfuweishao">
          </router-link>
        </div>
        <div class="title">{{title}}</div>
        <div class="menu" @click="handleMenu"><i class="el-icon-menu"></i></div>
      </div>
      <div v-if="isShow"
           class="nav-mobile-content"
           :class="{'enter-slideUp': enterSlideUp,'leave-slideDown': leaveSlideDown}">
        <div class="list">
          <div @click="handleClickMenu" 
          class="item">
            <router-link to="/">首 页</router-link>
          </div>
          <div  @click="handleClickMenu('/articles')" class="item">
            <router-link to="/articles">文 章</router-link>
          </div>
          <div @click="handleClickMenu('/archive')" class="item">
            <router-link to="/archive">归 档</router-link>
          </div>
          <div @click="handleClickMenu('/project')"
          class="item">
            <router-link to="/project">项 目</router-link>
          </div>
          <div @click="handleClickMenu('/timeline')" class="item">
            <router-link to="/timeline">历 程</router-link>
          </div>
          <div @click="handleClickMenu('/message')"
          class="item">
            <router-link to="/message">留 言</router-link>
          </div>
          <div @click="handleClickMenu('/about')" class="item">
            <router-link to="/about">关 于</router-link>
          </div>
          <div class="item">
            <span v-if="false">登陆后的用户名</span>
            <span v-else
            @click="handleClickMenu('/login')"
            >登 录</span>
          </div>
          <div v-if="true" 
          @click="handleClickMenu('/register')"
          class="item">
            注 册
          </div>
          <div v-if="true"
          @click="handleClickMenu('/logout')"
               class="item">
            登 出
          </div>
        </div>
      </div>
     </div>
    <div v-if="isShow"
         class="mask"
         :class="{'mask-fade-out': leaveSlideDown}"
         @click="handleHideMenu"></div>
        
    <RegisterAndLogin :visible="visible"
                      :isMobile="isMobile"
                      :handleFlag="handleFlag"
                      @ok="handleOk"
                      @cancel="handleCancel"></RegisterAndLogin>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {isMobileOrPc, getQueryStringByName} from './../utils/utils'
import RegisterAndLogin from "@/views/registerAndLogin.vue";
export default {
//import引入的组件需要注入到对象中才能使用
components: {RegisterAndLogin},
data() {
//这里存放数据
return {
    isMobile: isMobileOrPc(),
    visible : false,
    handleFlag : '',
    title: '文章',
    activeIndex :'0',
    enterSlideUp : false,
    leaveSlideUp : false,
    leaveSlideDown : false,
    isShow : false,
    list: [
    {
      index: "1",
      path: "/",
      name: "首页"
    },
    {
      index: "2",
      path: "/articles",
      name: "文章"
    },
    {
      index: "3",
      path: "/archive",
      name: "归档"
    },
    {
      index: "4",
      path: "/project",
      name: "项目"
    },
    {
      index: "5",
      path: "/timeline",
      name: "历程"
    },
    {
      index: "6",
      path: "/message",
      name: "留言"
    },
    {
      index: "7",
      path: "/about",
      name: "关于"
    }
  ],
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {
  '$route'(val,oldval){
    this.routeChange(val,oldval)
  }
},
//方法集合
methods: {
    handleCancel:data=>console.log(data),
    //传参
  handleSelect(val){
      this.activeIndex =val
  },
//mobile导航
handleMenu(){
    this.isShow = true;
    this.enterSlideUp = true;
},
//mobile的显示隐藏
handleHideMenu(){
  console.log('success')
    this.enterSlideUp = false;
    this.leaveSlideDown = true;
    setTimeout(() => {
      this.leaveSlideDown = false;
      this.isShow = false;
    }, 300);
  },
handleOk(value){
    this.visible = value;
},
handleCancel(value){
    this.visible = value;
  },
  handleClick(value){
    this.handleFlag = value;
    this.visible = true;
    console.log("success")
    },
    //mobile的注册登陆事件
    handleClickMenu(route){
        this.isShow = false;
        if (route === "/login") {
      this.handleFlag = "login";
      this.visible = true;
    }
    if (route === "/register") {
      this.handleFlag = "register";
      this.visible = true;
    }
    if (route === "/logout") {
      this.handleLogout();
    }
    },
    routeChange(val, oldVal) {
    for (let i = 0; i < this.list.length; i++) {
      const l = this.list[i];
      if (l.path === val.path) {
        this.activeIndex = i + 1 + "";
        this.title = l.name;
        break;
      }
    }
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  this.routeChange(this.$route, this.$route);
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
.nav-mobile {
  display: flex;
  line-height: 60px;
  .nav-mobile-logo {
    flex: 1;
    margin-top: 5px;
    margin-left: 10px;
  }
  .title {
    flex: 3;
    font-size: 24px;
  }
  .menu {
    flex: 1;
    font-size: 34px;
    color: #409eff;
  }
}
.nav-mobile-content {
  font-size: 0.3rem;
  height: 8.3rem !important;
  width: 100%;
  background-color: #fff;
  .list {
    .item {
      line-height: 0.8rem;
      color: #303133;
      border-bottom: 1px solid #eee;
      a {
        display: block;
        width: 100%;
        color: #409eff;
        text-decoration-line: none;
      }
    }
  }
}
.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  .nav-content {
    width: 1200px;
    margin: 0 auto;
  }
  .logo {
    height: 50px;
    margin: 0;
    border-radius: 50%;
    margin-top: 5px;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .el-menu--horizontal > .el-menu-item {
    cursor: pointer;
    color: #333;
  }
  .nav-right {
    position: relative;
    padding-top: 15px;
    text-align: right;
    .el-dropdown {
      cursor: pointer;
      padding-right: 60px;
    }
    .user-img {
      position: absolute;
      top: -15px;
      right: 0;
      width: 50px;
      border-radius: 50%;
    }
  }
}

.enter-slideUp,
.leave-slideDown {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10100;
}

.enter-slideUp {
  overflow: auto;
  visibility: visible;
  z-index: 1001;
  animation: slideUp 0.3s forwards;
}
.leave-slideDown {
  visibility: visible;
  z-index: 1001;
  animation: slideDown 0.3s forwards;
}
@keyframes slideUp {
  from {
    transform: translate3d(0, 100%, 0);
    opacity: 0.1;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes slideDown {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
}
.mask {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
}
.mask-fade-out {
  animation: maskFadeOut 0.4s forwards;
}
@keyframes maskFadeOut {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 0;
  }
}
.el-col-24{width: 20%}
</style>