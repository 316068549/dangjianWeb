<template>
  <div>
    <div class="login_header">
      <div class="header_center clearfix">
        <div class="myfl">
          <a href="/"><img src="../../assets/img/logo2.png" style="height: 59px;margin-top: 10px"/></a>
          <span>欢迎登陆</span>
        </div>
        <div class="myfr">
          <router-link to='/home'>
            <a >返回首页</a>
          </router-link>
          <!--<span></span>-->
          <!--<a href="javascript:;" class="collection_web">收藏网站</a>-->
        </div>
      </div>
    </div>
    <div class="login_content clearfix">
      <div class="login_box myfr">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick" :stretch="true">
          <el-tab-pane label=" 登 录" name="0"></el-tab-pane>
          <!--<el-tab-pane label="商家登录" name="1"></el-tab-pane>-->
        </el-tabs>
        <el-form ref="loginForm" :model="form" label-width="7px" style="margin-top: 5px" :rules="rules">
          <el-form-item prop="account">
            <el-input v-model="form.account" placeholder="手机号/用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" placeholder="登录密码"></el-input>
          </el-form-item>
          <el-form-item prop="" label-width="255px" style="margin-top: -20px">
            <!--<router-link to='/' style="margin-top: -16px;">-->
              <!--<span style="color: rgb(153,153,153)">忘记密码？</span>-->
            <!--</router-link>-->
            <br>
          </el-form-item>
          <el-form-item prop="">
            <el-button type="primary"
                       @click="onSubmit('loginForm')"
                       style="font-size: 18px;background-color: #d50f10;width: 310px;height: 48px;;color: white;border: none;margin-left: 13px;margin-top: -10px "
            >立即登录</el-button>
          </el-form-item>
          <el-form-item>
            <!--<p class="entry_mode clearfix">-->
              <!--<span class="myfl">你也可以用以下方式登录:</span>-->
              <!--<router-link to='/register' style="margin-top: -16px;">-->
                <!--<a class="myfr">-->
                  <!--<em></em>-->
                  <!--<i>快速注册</i>-->
                <!--</a>-->
              <!--</router-link>-->
            <!--</p>-->
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!--<div class="register_bottom" style="margin-top: 196px">2020年 &nbsp; 吹牛逼有限公司 &nbsp;&nbsp;粤ICP17003883号-1 &nbsp;&nbsp;版权所有</div> -->
  </div>
</template>


<script>

  import {mapGetters,mapActions,mapState} from 'vuex'
  import {startLoading} from "../../utils/common";

  export default {
    name:'login',
    data(){
      return {
        activeName: 'first',
        form:{
          account:'',
          password:'',
          loginSign:'0',
        },
        rules:{
          account:[
            { required: true, message: '请输入手机号/用户名', trigger: 'blur' },
          ],
          password:[
            { required: true, message: '请输入登录密码', trigger: 'blur' },
          ]
        }
      }
    },
    methods:{
      handleClick(tab, event) {
        console.log(tab, event);
        this.form.loginSign= tab.name
      },
      onSubmit(formName){
        this.$refs[formName].validate(valid =>{
          if (valid){
              // this.$router.push({ path: '/home/homePage' });
           let loading =  startLoading({app:this,text:'登陆中........'});
              this.$router.push({ path: '/home/homePage' });
              loading.close()
              this.$store.dispatch('getUserInfo', this.form)
            // this.$store.dispatch('Login',this.form).then(() =>{
            //   this.$router.push({ path: '/home/homePage' });
            //   loading.close()
            // }).catch(error =>{
            //   this.$router.push({ path: '/' })
            // })
          }else{
            return false;
          }
        });


      }
    }
  }


</script>

<style  >
/*左浮动*/
.myfl{float: left;}
/*右浮动*/
.myfr{float: right;}
/*登录注册页面的公用头部样式*/
.login_header,.register_header{width: 100%;min-width: 1200px;background: #fafafa;height: 100px;}
.login_header .header_center,.register_header .header_center{width: 1200px;margin: auto;}
.login_header .myfl img,.register_header .header_center img{margin-top: 20px;}
.login_header .myfl span,.register_header .header_center .myfl span{height: 40px;line-height: 40px;border-left: 1px solid #eaeaea;color: #999;font-size: 18px;display: inline-block;margin: 30px 0 0 30px;padding-left: 30px;}
/*登录头部样式*/
.login_header .myfr {margin-top: 40px;}
.login_header .myfr span{height: 12px;width: 1px;background: #bfbfbf;margin: 0 16px;}
.login_header .myfr a{font-size: 12px;color: #999;}
/*登录内容区*/
/*.login_content{width: 1200px;height: 500px;padding-top: 100px;margin: auto;background: url("../../static/img/login_bag.png?v=11") no-repeat 38px 178px;}*/
.login_content{width: 351px;height: 500px;padding-top: 100px;margin: auto;}
.login_content .login_box{width: 351px;height: 388px;border: 1px solid #ccc;border-radius: 4px;}
.login_content .login_box .tabchange em{display: inline-block;width: 1px;height: 52px;background: #ccc;}
.login_content .login_box .tabchange span{display: inline-block;width: 174px;height: 51px;line-height: 51px;text-align: center;font-size: 16px;color: #666;cursor: pointer;}
.login_content .login_box .tabchange .bor_bottom{border-bottom: 1px solid #ccc;background: #f2f3f7;}
.login_content .login_box .tabchange .sign_select{color: #ff366f;}
.login_content .login_box .system_error{height: 26px;line-height: 26px;padding: 0 20px;color: red;}
.login_content .login_box input{width: 298px;height: 46px;border: 1px solid #ccc;border-radius: 4px;outline: none;padding-left: 10px;line-height: 46px;}
.login_content .login_box .username_error,.login_content .login_box .password_error{height: 18px;line-height: 18px;color: red;margin: 0 20px;}
.login_content .login_box .username_error span,.login_content .login_box .password_error span{padding-left: 16px;background: url("../../static/img/advert/login_error_icon.png") no-repeat 0 center;display: none;}
.login_content .login_box .forget_password a{display: inline-block;margin-right: 20px;color: #999999;line-height: 24px;}
.login_content .login_box .submit_btn{border: none;padding-left: 0;width: 310px;height: 48px;background: #ff366f;color: white;margin: 20px;cursor: pointer;font-size: 18px;}
.login_content .login_box .entry_mode{margin: 0 20px;color: #999;}
.login_content .entry_mode a{color: #999;}
.login_content .entry_mode span{line-height: 66px;}
.login_content .entry_mode a em{width: 34px;height: 34px;display: block;background: url("../../static/img/advert/login_entry_icon1.png") no-repeat center;margin-left: 10px;}
.login_content .entry_mode a:hover em{background: url("../../static/img/advert/login_entry_icon2.png") no-repeat center;}
/*登录底部*/
.login_bottom{width: 1200px;margin: auto;text-align: center;color: #999999;margin-top: 200px;}
</style>
