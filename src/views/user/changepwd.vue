<template>
  <div class="main">
    <div class="container">
      <div class="box">
        <div class="big_nav text-left">当前位置：
          <router-link to='/home' style="margin-top: -16px;">
            <a class="daohang">网站首页</a>&gt;&nbsp;
          </router-link>
          <router-link to='/home/changepwd' style="margin-top: -16px;">
            <a class="daohang">修改密码</a>
          </router-link>
        </div>
        <div class="ht5"></div>
        <div class="content_box">
          <el-col :span="24" class="warp-main" >
            <el-form ref="form" :model="form" :rules="editFormRules" label-width="120px">
              <el-form-item label="原密码" prop="oldPwd">
                <el-input v-model="form.oldPwd" type="password"></el-input>
              </el-form-item>
              <el-form-item label="新密码" prop="newPwd">
                <el-input v-model="form.newPwd" type="password"></el-input>
              </el-form-item>
              <el-form-item label="确认新密码" prop="confirmPwd">
                <el-input v-model="form.confirmPwd" type="password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" @click="onSubmit">提交</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </div>
        <div class="clear"></div>
      </div>

    </div>
  </div>




</template>
<script>
  // import {reqUpdateAdminUserPwd} from '../../../../api/system-api';

  export default{
    data(){
      var checkPwd = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请再次输入新密码'));
        }
        var newPwd = (!this.form.newPwd || this.form.newPwd == '') ? null : this.form.newPwd;
        var confirmPwd = (!this.form.confirmPwd || this.form.confirmPwd == '') ? null : this.form.confirmPwd;
        if(newPwd != null && newPwd !== confirmPwd) {
          callback(new Error('两次密码不一致！'));
        } else {
          callback();
        }
      };
      return {
        token:'',
        editFormRules: {
          oldPwd: [
            {required: true, message: '请输入新密码', trigger: 'blur'},
          ],
          newPwd: [
            {required: true, message: '请输入新密码', trigger: 'blur'},
            {pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/, message:'密码由字母和数字组成6到16位',trigger: 'blur'},
          ],
          confirmPwd: [
            {required: true,validator: checkPwd, trigger: 'blur'},
          ],
        },
        form: {
          userId:0,
          oldPwd: '',
          newPwd: '',
          confirmPwd: ''
        }
      }
    },
    methods:{
      onSubmit() {
        let that=this;
        this.$refs.form.validate((valid) => {
          if (valid) {
            // reqUpdateAdminUserPwd({token:this.token,oldPwd:this.form.oldPwd,newPwd:this.form.newPwd,confirmPwd:this.form.confirmPwd}).then((res) => {
            //   if(res.data.code===7){
            //     this.$message({
            //       message: "原始密码输入不正确",
            //       type: 'warning'
            //     });
            //     this.form.oldPwd='';
            //   }else if(res.data.data===5){
            //     this.$message({
            //       message:"密码修改成功，请重新登录",
            //       type: 'success'
            //     });
            //     that.logout();
            //   }else if(res.data.code===2){
            //     this.$message({
            //       message:"重置的密码不能和原始密码一样",
            //       type: 'warning'
            //     });
            //     this.form.newPwd='';
            //     this.form.confirmPwd='';
            //   }else {
            //     this.$message({
            //       message: "密码修改失败",
            //       type: 'warning'
            //     });
            //     this.form.oldPwd='';
            //     this.form.newPwd='';
            //     this.form.confirmPwd='';
            //   }
            // });
          }
        });
      },
      logout(){
        var _this = this;
        sessionStorage.removeItem('Authorization');
        sessionStorage.removeItem('systemLogin');
        _this.$router.push('/systemLogin');
      },
    },
    mounted() {
      var token = sessionStorage.getItem('Authorization');
      if (token) {
       this.token=token;
      }
    }
  }
</script>
<style scoped lang="scss">
  .box{
    width: 1100px;
    margin: 0 auto;
  }
  .content_box{
    width: 600px;
    margin: 0 auto;
  }
  .el-checkbox{
    width: 100% !important;
    text-align: left;
  }
  .ll{
    padding-top: 15px;width: 133.3px;text-align: center;font-size: 16px;
  }
  .shijian{
    width: 400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .shijian2{
    width: 500px;
    margin: 0 auto;
  }
  .time-boxx{
    width: 150px;
  }
  .aa{
    width: 12px;
    height: 12px;
    position: absolute;
    bottom:-6px;
    background-color: #E4E7ED;
    border-radius: 50%;
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
  }
  .bb {
    right: -5px;
  }
  .timel{
    position: relative;
    border-bottom: 1px solid #ddd;
    overflow: visible;
    margin-left: 14px;
  }
  .el-timeline-item {
    position: relative;
    padding-bottom: 0px !important;
    width: 100px;
    float: left;

  }
  .el-timeline li:first-child{
    border-bottom: 1px solid #ddd;
  }
  .newtit{text-align:center;font-size:20px;margin:20px 0px;font-weight:bold;}
  .big_nav{margin-bottom:10px;font-size:16px;}
  .news_name{height:40px;border-bottom:3px solid #e2e2e2;}
  .news_name h1{border-bottom:3px solid #d50f10;line-height:40px;display:inline-block;font-size:18px;color:#d50f10;}
  .newtime{text-align:center;font-size:16px;color:#999;margin:10px 0px;line-height:40px;border-bottom:dashed 1px #dfdfdf;padding-bottom:10px;}
  .newtime span{margin:0px 20px;}
  .newcon{line-height:28px;
    font-size:14px;
    p{
      text-indent: 2em;
    }
    margin:10px 0px;padding-top:10px;min-height: 300px}

  .newcon img{max-width:100%;text-align:center !important;}
  @media (min-width: 768px){
    .main {
      width: 750px;
      /*padding-top: 80px;*/
    }

    .returned-box, .main {
      margin: 40px auto;
      border-radius: 5px;
    }
    .re-query-box .form-control {
      width: 300px;
    }
    .re-query-box .form-verify {
      width: 150px;
    }
    /*p{*/
    /*min-height: 250px;*/
    /*padding-bottom: 30px;*/
    /*}*/
  }
  @media (min-width: 992px){
    .main {
      width: 970px;
    }
  }
  @media (min-width: 1200px){
    .main {
      width: 1170px;
    }
  }
  .el-upload__input {
    display: none !important;
  }
  h3{
    font-weight: bold;
    font-size: 18px;
    margin: 30px 0 30px 0;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
  }
  .el-input__inner{
    border: 1px solid #ccc;
  }
  .returned-box, .main {
    background: #fff;
  }
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .m-tit {
    width: 97%;
    line-height: 30px;
    font-size: 19px;
    margin: 15px 0 15px 25px;
    font-weight: 800;
  }
  .m-tit em {
    font-style: normal;
  }
  .bd-upon {
    border-top: 1px solid #ddd;
  }
  .wl-progress {
    width: 80%;
    min-width: 260px;
    height: 100px;
    margin: 20px auto 0;
    color: #999;
    list-style: none;
    padding: 0;
    overflow: visible !important;
  }
  .wl-progress li.wl-progress-1 {
    width: 15px;
  }
  .active-1 .wl-progress-1, .active-2 .wl-progress-1, .active-2 .wl-progress-2, .active-3 .wl-progress-1, .active-3 .wl-progress-2, .active-3 .wl-progress-3, .active-4 .wl-progress-1, .active-4 .wl-progress-2, .active-4 .wl-progress-3, .active-4 .wl-progress-4, .active-5 .wl-progress-1, .active-5 .wl-progress-2, .active-5 .wl-progress-3, .active-5 .wl-progress-4, .active-5 .wl-progress-5 {
    /* border-color: #338eff; */
    color: #333;
  }
  .wl-progress li.wl-progress-1 .point {
    right: -15px;
  }
  .active-1 .wl-progress-1 .point, .active-2 .wl-progress-1 .point, .active-2 .wl-progress-2 .point, .active-3 .wl-progress-1 .point, .active-3 .wl-progress-2 .point, .active-3 .wl-progress-3 .point, .active-4 .wl-progress-1 .point, .active-4 .wl-progress-2 .point, .active-4 .wl-progress-3 .point, .active-4 .wl-progress-4 .point, .active-5 .wl-progress-1 .point, .active-5 .wl-progress-2 .point, .active-5 .wl-progress-3 .point, .active-5 .wl-progress-4 .point, .active-5 .wl-progress-5 .point {
    background-color: #338eff;
  }
  .wl-progress .point {
    position: absolute;
    z-index: 1;
    right: -15px;
    top: -16px;
    display: block;
    width: 30px;
    height: 30px;
    background-color: #ddd;
    border-radius: 50%;
  }
  .wl-progress li {
    position: relative;
    float: left;
    width: 32%;
    margin-top: 14px;
    border-top: 2px solid #ddd;
    text-align: right;
    text-align: -3em;
  }
  .wl-progress li span {
    display: block;
    width: 70px;
    top: 25px;
    text-align: center;
    position: absolute;
    right: -35px;
  }
  .nr-up-img {
    position: relative;
    float: left;
    margin-right: 10px;
    width: 80px;
    height: 80px;
    overflow: hidden;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ddd;
    font-size: 14px;
    text-align: center;
    line-height: 80px;
    color: #999;
  }
  .nr-up-img img {
    position: absolute;
    left: 50%;
    top: 50%;
    display: inline-block;
    max-width: 100%;
    max-height: 100%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  .nr-up-img input {
    position: absolute;
    font-size: 100em;
    right: -10px;
    bottom: -10px;
    z-index: 1;
  }
  .nr-up-box{
    overflow: visible;
    margin-bottom: 10px;
  }
  .btn-default {
    color: #666;
  }
  .ml-sm {
    margin-left: 10px;
  }
  .re-query-box {
    padding: 50px 0;
    width: 280px;
    margin: 0 auto;
  }
  .mb-sm {
    margin-bottom: 10px;
  }
  .mt-sm {
    margin-top: 10px;
  }
  .text-red {
    color: red;
  }
  /*验证码*/
  .code {
    /*margin: 400px auto;*/
    width: 100px;
    height: 34px;
    display: inline-block;
    border: 1px solid #ddd;
    vertical-align: middle;
    margin-left: 15px;
  }

  @media (max-width: 768px){
    .grid, .page .grid {
      width: 100%;
    }
    img{
      width: 100% !important;
      height: auto !important;
    }
    .page-post {
      margin: 20px 20px 0;
      padding-bottom: 20px;
    }
    .page h2, .page h3 {
      margin: 1em 0 .6em;
    }
    .wl-progress {
      height: 60px;
    }
    .wl-progress li {
      width: 30%;
      font-size: 12px;
    }
  }
</style>