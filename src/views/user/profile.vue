<template>
  <div class="main">
    <div class="container">
      <div class="box">
        <div class="big_nav text-left">当前位置：
          <router-link to='/home' style="margin-top: -16px;">
            <a class="daohang">网站首页</a>&gt;&nbsp;
          </router-link>
          <router-link to='/home/profile' style="margin-top: -16px;">
            <a class="daohang">修改个人信息</a>
          </router-link>
        </div>
        <div class="ht5"></div>
        <div class="content_box">
          <el-col :span="24" class="warp-main">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
              <el-form-item prop="useranme" label="用户名">
                <!--<el-input v-model="form.useranme" disabled></el-input>-->
                <el-input v-model="form.useranme" ></el-input>
              </el-form-item>
              <el-form-item prop="name" label="昵称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item prop="email" label="邮箱">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item label="头像" prop="image">
                <el-upload
                        class="upload-demo"
                        :action="uploadFileURL"
                        :before-remove="beforeRemove"
                        :on-remove="editHandleRemove"
                        :before-upload="beforeAvatarUpload"
                        :on-success="editHandleSuccess"
                        multiple
                        :limit="1"
                        :on-exceed="handleExceed"
                        :file-list="fileList"
                        list-type="picture">
                  <el-button size="small" type="danger">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
                  <!--<div slot="tip" class="el-upload__tip">注意：上传文件支持 .jpg, .png, .jpeg后缀文件格式，单个文件20M以内。</div>-->
                </el-upload>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" @click="onSubmit">修改并保存</el-button>
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
    // import {reqSaveUserProfile} from '../../../../api/system-api';
    // import {uploadFileURL,downloadFileURL} from '../../../api/system-api';
    export default {
        data() {
            return {
                form: {
                    useranme: '',
                    name: '',
                    email: '',
                    image:'',
                },
                rules: {
                    useranme: [
                        {required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    name: [
                        {required: true, message: '请输入昵称', trigger: 'blur'}
                    ],
                    email: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'},
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                    ]
                },
                fileList: [],
                uploadFileURL: '',
                // uploadFileURL: uploadFileURL,
                // downloadFileURL: downloadFileURL,
                downloadFileURL: '',
            }
        },
        methods: {
            onSubmit() {
                var that = this;
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        var args = {name: this.form.name, email: this.form.email};
                        // reqSaveUserProfile(args).then(function (data) {
                        //     let {msg, code, user} = data;
                        //     if (code !== 200) {
                        //         that.$message({
                        //             message: msg,
                        //             type: 'error'
                        //         });
                        //     } else {
                        //         sessionStorage.setItem('access-user', JSON.stringify(user));
                        //         that.$message({
                        //             message: "修改成功！",
                        //             type: 'success',
                        //             duration: 2000 //默认3s太长
                        //         });
                        //     }
                        // })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            editHandleSuccess(response, file, fileList) {
                let that=this;
                if(response.code===1){
                    that.form.image=response.data;

                }
            },
            beforeAvatarUpload(file) {
                const isValidType = (file.type === 'image/jpeg' || file.type === 'image/png'
                    || file.type === 'image/jpg' || file.type === 'image/gif');
                const isLt20M = file.size / 1024 / 1024 < 20;
                if (!isValidType) {
                    this.$message.error('不支持该类型的文件上传。');
                    return false;
                }
                if (!isLt20M) {
                    this.$message.error('上传文件大小不能超过 20MB!');
                    return false;
                }
                return true;
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
            editHandleRemove(file, fileList) {
                if(file.status==='success'){
                    this.fileList=fileList;
                    this.form.image='';
                }
            },
        },
        mounted() {
            var user = sessionStorage.getItem('access-user');
            if (user) {
                user = JSON.parse(user);
                this.form.useranme = user.username;
                this.form.name = user.name || '';
                this.form.email = user.email || '';
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