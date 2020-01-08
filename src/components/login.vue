<template>
<div class="center">
<div class="cb41 cb41v0">
	<div class="cb41w1">
      <h2>VB账号登录</h2>
   <div id="signOnCreds">
      
        <input type="hidden" id="clientOffset" name="clientOffset" value="8">
        <input type="hidden" id="fk" name="fk" value="2977244_b2e6371be798b19b1c2c0fbe12182f778332b60ba5611a47a357025862922699">
        <ul class="credsList">
            <li>
                <div class="cb41w2" v-bind:class="{ cb41focus: isuser }">
                <label for="userid" v-bind:class="{ user_befor: isuser_befor }">用户名</label>
                <input type="text" id="userid" name="userid" tabindex="1" maxlength="80" v-model="userid"  @blur="yang" @click="click" class="textInput" title="输入用户名" value="" autocomplete="off">				
						
				</div>
            </li>
            <li>
                <div class="cb41w3" v-bind:class="{ cb41focus: ispass }" >
                <label for="pass" v-bind:class="{ pass_befor: ispass_befor }">密码</label>
                <input type="password" @blur="wei" @click="passclick" id="pass" name="pass" tabindex="2" maxlength="255" class="textInput" title="输入密码" value="" v-model="pass" autocomplete="off">
								
				</div>
            </li>
        </ul>			
            <div class="cb41w7">			
            <span id="required" ref="mybox" class="error-hide">
                <div class="cb41error">
                    请输入您的用户名和密码
                </div>
            </span>
            
			</div>
            <li>
			<div class="cb41w4">
                <span><input type="submit" id="signin_button" class="signin_button" tabindex="3" @click="login" value="登录"></span>
            </div>
			
            </li>
       
    </div>      
    </div>
	
	
	
	
		<div class="cb41w1">
		<h3>没有 VB 帐户？</h3>
		<div class="cb41w4 yang">
			<span class="register">
				<router-link to='/register' style=" text-decoration: none;color: black;">创建帐户</router-link>
			</span>
		</div>

    <div class="cb41w8">

      <!-- U17v0 -->
      <div id="u17" class="u17 u17v0" style="margin:15px">
        <div class="u17w1 cwidth">
          <ul>
            <li>© vb</li>
          </ul>
        </div>
      </div>
      <!-- /U17v0 -->
    </div>
    <!-- /CB41w8 -->
      </div>
      <!-- /CB41w1 -->
</div>
</div>
</template>
<script>
export default {
data() {
//这里存放数据
return {
     pass:'',
     userid: '',
     isuser : '',
     ispass : '' ,
     isuser_befor : '' ,
     ispass_befor : '' ,
    };
  },
methods: {
    login () {
        console.log("denglu")
        if(this.userid !='' && this.pass !=''){
    this.$http.post('url', {  //发送登陆用户信息
      user: this.userid,  // 账号参数 userid
      password: this.pass       // 密码参数 pass
  })
  .then(function (response) {
    console.log(response);   //返回值处理
  })
  .catch(function (error) {
    console.log(error);  //请求错误
  });
  }else{
      this.$toast('请输出您的用户名和密码')
      document.getElementById('required').style="display:block"
     // this.$refs.mybox.style.display='block'
     //$(#required).css('display','block')
  }

    },
    wei () {
        if(this.pass != ''){
            this.ispass_befor = 'ture'
        }else{
            this.ispass_befor = ''
        }
    this.ispass = ''
},
    passclick () {
    this.ispass = 'ture',
    this.ispass_befor = 'ture' 
},
    yang () {
    if(this.userid != ''){
            this.isuser_befor = 'ture'
        }else{
            this.isuser_befor = ''
        }
    this.isuser = ''
},
    click () {
     this.isuser = 'ture',
     this.isuser_befor = 'ture' 
    }
},

    
}
  
</script>
<style scoped>
      body {
        /* background-image: url(../assets/timg2.jpg); */
        padding: 0;
        margin: 0;
        color: #1A1816;
        background: #F1F0EB;
       
        line-height: 3.3;
        min-width: 280px;
        height: 100%;
        font-family: "Oracle Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif;
        font-weight: 300;
    }
    input{
        font-family: "Oracle Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif;
        font-weight: 300;
    }
    .cb41w1 {
    background: none;
    width: 100%;
   
    margin: 0 auto;
    box-sizing: border-box;
    animation: cb41FadeIn 0s 0s 1 ease forwards;
    padding: 30px;
 }
    .cb41 h2{
        text-align: center;
        font-weight: normal;
        margin: 0 0 10px 0;
        font-size: 1.5rem;
    }
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .cb41w2, .cb41w3 {
    border-bottom: 2px solid #CBC5BF;
    position: relative;
    padding: 0.4rem 0 1rem 0;
    height: 3.4rem;
}
.cb41w1 label {
    display: block;
    color: #70665E;   
    position: absolute;
    font-size: 1rem;
    bottom: 0.8rem;
    transition: font-size 0.2s cubic-bezier(0.4, 0, 0.2, 1),bottom 0.2s cubic-bezier(0.4, 0, 0.2, 1),opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.cb41w1 input[type="text"], .cb41w1 input[type="password"] {
    font-weight: 500;
    background: none;
    color: #3F3A36;
    width: 80%;
    border: none;
    height: 1.8em;
    position: absolute;
    left: 0%;
    outline: 0;
    font-size: 0.9rem;
    z-index: 3;
    bottom: 8px;
}
.cb41w7 {
    height: auto;
    padding: 0 20px;
    margin: 20px 0;
    width: 100%;
    box-sizing: border-box;
    float: left;
    text-align: center;
}
.error-hide {
    display: none;
}
.cb41error {
    position: relative;
    padding: 0;
    color: #C54A39;
}
.cb41 input[type="button"], .cb41 input[type="submit"]{
    background: #6A9D67;
    width: 100%;
    padding: 8px 16px;
    margin: 0;
    text-align: center;
    font-size: 1rem;
    color: #FFF;
    transition: background .15s ease, border .15s ease;
    cursor: pointer;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    border: 2px solid #6A9D67;
    border-radius: 4px;
    outline: 0;
}
.need-help {
    text-align: center;
    padding-top: 30px;
}
    .center {
        padding: 0;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        min-height: 100%;
        min-width: 320px;
        max-width: 400px;
        background:#F1F0EB;
        height: 100%;
        position: fixed;
        width: 100%;
        left: 0px;
        top: 0px;
    }
    .yang{
        margin-top: 33px;
        border: 1px solid;
        border-radius: 4px;
        font-size: 1rem;
        transition: background .15s ease, border .15s ease;
        line-height: 2.8rem;
    }

 .cb41 h3 {
    text-align: center;
    font-weight: normal;
    font-size: 1.4rem;
    margin: 0 0 0.7em 0;
}

 .cb41w1 .cb41focus,
 .cb41w3 .cb41focus
 {
     border-color:#6A9D67;
 }
 .cb41w1  .user_befor,
 .cb41w1  .pass_befor
 {
   bottom: 2.8rem;
 }


</style>


