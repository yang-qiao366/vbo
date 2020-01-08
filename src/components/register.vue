<template>
  <div class="hellow">
    <h3>用户注册</h3>
    <mt-field label="昵称" :state="namestate" placeholder="请输入昵称" v-model="username" @blur.native.capture="uname"></mt-field>
    <mt-field label="邮箱" :state="emailstate" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
    <mt-field label="手机号" :state="phonestate" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday" :state="birthdaytate"></mt-field>
    <mt-field label="密码" :state="passwordstate" @blur.native.capture="yang" placeholder="六到十位含字母、数字的密码" type="password" v-model="password"></mt-field>
    <mt-field label="确认密码" placeholder="请输入确认密码" type="password" v-model="passwordtwo" :state="passwordtwostate"></mt-field>
<div class="registerBtn" @click = "register"><span class="regsizi">注&nbsp;&nbsp;册</span></div>
  </div>
</template>

<script>
export default {
data() {
//这里存放数据
return {
      username:'',
      phone : '',
      email : '',
      birthday : '',
      password : '',
      passwordtwo : '',
      namestate  :'',
      emailstate : '',
      phonestate :'',
      passwordstate : '',
      passwordtwostate : '',
      birthdaytate :'' ,
    };
  },
//监听属性 类似于data概念
computed: {
 
},
//监控data中的数据变化
watch: {
  //手机号码正则监听
phone : function (newusername, oldusername) {
     var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(newusername)) {  
              this.phonestate = 'error'
          } else {  
              this.phonestate = 'success'
              this.$toast('输入正确')
          }  
    },
    //email正则检测监听
    email (newemail,oldemail) {
       var  emailreg=/^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/
       if (!emailreg.test(newemail)) {  
              this.emailstate = 'error'
          } else {  
              this.emailstate = 'success'
          } 
    },
    //确认密码正则检测
   passwordtwo (newpass,oldpass) {
      if (newpass==this.password){
        this.passwordtwostate = 'success' 
      }else{
        this.passwordtwostate = 'error'
      }
   },
   birthday (newbi,oldbi) {
      if (newbi !=""){
        this.birthdaytate = 'success' 
      }
   }
},
//方法集合
methods: {
// 注册事件验证
//呢称验证
uname () {
    var p = /^[0-9]*$/;
    if (p.test(this.username)) {  
      console.log("1你就hao")
              this.$toast('输入正确昵称,不能为纯数字')
              this.namestate = 'error'
              return    
    }else{
      var b =/[\u4E00-\u9FA0]{2,4}|[A-Z0-9a-z]{3,10}$/
         if (b.test(this.username)){
        //   getname (url, this.username)   //调用getname（）验证昵称是否有人使用
        this.namestate = 'success'
        } else{
           console.log("1你就hao")
              this.$toast('输入正确昵称,不能为纯数字')
              this.namestate = 'error'
              return
         }
    }
    console.log("结束后")
  },
  //ajax，get请求验证昵称
  ajax_name () {
    
  },
  yang () {
       var a = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/;
       console.log("密码")
      if (!a.test(this.password)) {
        console.log("密码")
         this.passwordstate = 'error'
         this.$toast('请输入六到十位含字母、数字的密码')
       } else {
         this.passwordstate = 'success'
       }
    },
  getname (url, data){  
    this.$http.post('url', {nickname : this.username }).then((res) => {
        if (res.data == 1) {
            this.namestate = 'success'
        } else {
            this.$toast('该呢称已有人注册，请重新选择呢称')
            this.namestate = 'error'
       }
     }).catch(function (error) {
    console.log(error);  //请求错误
  });
   },
register () {
  console.log("注册验证")
//console.log("手机号码不对")
   if (this.namestate != 'success') {  
        this.$toast('昵称填写错误，请填写')
        this.namestate = 'error'
        return
  }
  if (this.emailstate != 'success') {  
        this.$toast('邮箱填写错误，请填写')
        this.emailstate = 'error'
        return
  }
  if (this.phonestate != 'success') {  
        this.$toast('手机号码填写错误，请填写')
        this.phonestate = 'error'
        return
  }
  if (this.birthday == '') {  
        this.$toast('请填写生日')
        this.birthdaytate = 'error'
        return
  }
  if (this.passwstate != 'success') {  
        this.$toast('密码格式填写错误，请填写')
        this.passwstate = 'error'
        return
  }
  if (this.passwtwosstate != 'success') {  
        this.$toast('密码不一致，请填写')
        this.passwtwostate = 'error'
        return
  }
// 对密码进行加密
    this.password = md5(this.password)

// 提交用户注册信息
    this.$http.post('url', {   //发送参数
      nickname : this.username ,  //账号
      password: this.password , //密码
      email : this.email ,      //邮箱
      mobile : this.phone ,      //手机号
    }).then((res) => {
      if (res.data == 1) {
           this.$toast('注册成功')
           setTimeout(("window.location.href='#'"),3000)   //3秒后跳转页面
          } else {
          this.$toast('注册失败')
        }
      }).catch(function (error) {
    console.log(error);  //请求错误
  });
    }
  }
 }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-cell{
  min-height: 68px;
  border-bottom: 1px solid;
}
.registerBtn{
  background: red;
  height: 50px;
  border-radius: 50%;
  border-radius: 10px;
  margin-top: 34px;
}
.regsizi{
  line-height: 2;
  font-size: x-large;
  font-weight: 500;
}
</style>

