<!-- 登陆注册模块 "handleFlag === 'register'?'登录' : '注册' "-->
<template>
  <el-dialog :title="loginorregister ? '注册' : '登录'"
             :width="isMobile ? '90%' : '50%'"
             :visible="dialogVisible"
             @close="cancel">
    <el-form>
      <el-formItem label="邮箱"
                   :label-width="formLabelWidth">
        <el-input v-model="params.email"
                  placeholder="邮箱"
                  autocomplete="off">
        </el-input>
      </el-formItem>
   
      <el-formItem v-if="handleFlag === 'register'"
                   label="昵称"
                   :label-width="formLabelWidth">
        <el-input v-model="params.nickname"
                  placeholder="用户名或昵称"
                  autocomplete="off"></el-input>
      </el-formItem>
      <el-formItem v-if="handleFlag === 'register'"
                   label="手机"
                   :label-width="formLabelWidth">
        <el-input v-model="params.mobile"
                  placeholder="手机号"
                  autocomplete="off"></el-input>
      </el-formItem>
         <el-formItem label="密码"
                   :label-width="formLabelWidth">
        <el-input type="password"
                  placeholder="密码"
                  v-model="params.password"
                  autocomplete="off"></el-input>
      </el-formItem>
      <el-formItem v-if="handleFlag === 'register'"
                   label="密码"
                   :label-width="formLabelWidth">
        <el-input type="password"
                  v-model="params.confirm_password"
                  placeholder="确认密码"
                  autocomplete="off"></el-input>
      </el-formItem>
    </el-form>
    <div slot="footer"
         class="dialog-footer">
      <!-- <el-button type="success"
                 @click="handleOAuth">github 授权登录</el-button> -->
      <el-button v-if="handleFlag === 'login'"
                 :loading="btnLoading"
                 type="primary"
                 @click="handleOk('login')">登 录</el-button>
      <el-button v-if="handleFlag === 'register'"
                 :loading="btnLoading"
                 type="primary"
                 @click="handleOk('register')">注 册</el-button>
    </div>
  </el-dialog>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
//父组件传来的参数
props:{
    visible: Boolean,
    handleFlag: {
        type: String,
        default: false 
    },
    isMobile: {
        type: Boolean,
        default: false 
    }
},
data() {
//这里存放数据
return {
    btnLoading: false,
    loading: false,
    formLabelWidth: this.isMobile ? "40px" : "60px",
    params: {
       email: "",
       nickname: "",
       password: "",
       mobile: "",
       confirm_password: ""
    }
};
},
//监听属性 类似于data概念
computed: {
    loginorregister(){
      if(this.handleFlag!= 'register'){
         return false;
      }else{
          return true;
      }
    },
    dialogVisible(){
    return this.visible;
  }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  cancel(){
       this.$emit('cancel',false)
  },
  //正则验证
  handleOk(value) {
    const reg = new RegExp(
      "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
    ); //正则表达式
    if (!this.params.email) {
      // Message.warning("邮箱不能为空！");
      this.$message({
        message: "邮箱不能为空！",
        type: "warning"
      });
      return;
    } else if (!reg.test(this.params.email)) {
      this.$message({
        message: "请输入格式正确的邮箱！",
        type: "warning"
      });
      return;
    }
    if (this.handleFlag === "register") {
      if (!this.params.password) {
        this.$message({
          message: "密码不能为空！",
          type: "warning"
        });
        return;
      } else if (this.params.password!=this.params.confirm_password) {
        this.$message({
          message: "密码不一致！",
          type: "warning"
        });
        return;
      }else if (!this.params.nickname) {
        this.$message({
          message: "用户名不能为空！",
          type: "warning"
        });
        return;
      }
      const re = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      if (this.params.mobile && !re.test(this.params.mobile)) {
        this.$message({
          message: "请输入正确的手机号!",
          type: "warning"
        });
        return;
      }
    }
    this.submit();
  },
  submit(){
     
     this.btnLoading = true;
      if (this.handleFlag === "register") {
      this.$https.post('http://149.28.94.205:3000/mock/23/user/register', this.params).then((res)=>{
          this.$message('注册成功'), 
          this.$emit('ok',false)
          }).catch((err)=>{
              this.$message('找不到服务器')
          });
    } else {
      this.$https.post('http://149.28.94.205:3000/mock/23/user/login', this.params).then((res)=>{
         this.$message('注册成功'),
          this.$emit('ok',false)
          }).catch((err)=>{
              this.$message('找不到服务器')
      });
    }
    this.btnLoading = false;
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

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


</style>