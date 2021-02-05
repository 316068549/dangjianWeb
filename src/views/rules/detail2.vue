<template>
    <div class="main">
        <div class="container">
            <div class="box">
                <div class="big_nav text-left">当前位置：
                    <router-link to='/home' style="margin-top: -16px;">
                        <a class="daohang">网站首页</a>&gt;&nbsp;
                    </router-link>
                    <router-link :to="'/home/'+type" style="margin-top: -16px;">
                        <a class="daohang">{{title}}</a>
                    </router-link>
                </div>
                <div class="ht5"></div>
                <div class="content_box">
                    <div class="newtit">{{news.title}}</div>
                    <div class="newtime">
                        <span>{{news.writer}}</span>   |   <span>{{news.time|dateunix}}</span>
                        |   <span>阅读：{{news.click}}</span>
                    </div>
                    <div class="newcon">
                        <p v-html="news.content"></p>
                        <div id='reply' class="text-left">
                            <div v-for='(reply,index) in post.replies' class='replySec'>
                                <div class='replyUp'>
                                    <router-link :to='{name: "user_info",params:{name: reply.author.loginname}}'><img :src='reply.author.avatar_url'></router-link>
                                    <router-link :to='{name: "user_info",params:{name: reply.author.loginname}}'>{{reply.author.loginname}}</router-link>
                                    <span>
       			    	{{index + 1}}楼
       			    </span>
                                </div>
                                <section v-if='reply.ups.length > 0' class='thumbsClass'>
                                    <span>❤ </span>{{reply.ups.length}}
                                </section>
                                <p v-html='reply.content'></p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <!--留言板-->
                    <div id="messageboard" v-if="type=='juankuan'" style="width: 70%;margin: 0 auto;">
                        <h2 class="text-left" style="font-size: 15px;line-height: 30px;padding-left: 10px;">留言板</h2>
                        <br>
                        <el-form ref="form" label-width="10px">
                            <!--<el-form-item label="标题">-->
                                <!--<el-input v-model="title" placeholder="请输入标题"></el-input>-->
                            <!--</el-form-item>-->
                            <el-form-item label="" style="margin-bottom: 5px">
                                <el-input v-model="content" placeholder="请输入"></el-input>
                            </el-form-item>
                            <el-form-item class="text-right">
                                <el-button type="danger" @click="add()" size="mini">发表</el-button>
                                <!--<el-button @click="handleReset">重置</el-button>-->
                            </el-form-item>
                            <!--<el-table border :data="mydata">-->
                                <!--<el-table-column label="编号" inline-template :context="_self">-->
                                    <!--<span>{{$index+1}}</span>-->
                                <!--</el-table-column>-->
                                <!--<el-table-column prop="title" label="标题">-->
                                <!--</el-table-column>-->
                                <!--<el-table-column prop="content" label="内容">-->
                                <!--</el-table-column>-->
                                <!--<el-table-column label="操作" inline-template :context="_self">-->
                                    <!--<span><el-button size="small" @click="showDialog()">删除</el-button></span>-->
                                <!--</el-table-column>-->
                            <!--</el-table>-->
                            <!--<div style="text-align:right" v-show="mydata.length>0">-->
                                <!--<el-button size="small" @click="showDelallDialog()">全部删除</el-button>-->
                            <!--</div>-->
                        </el-form>
                        <div class="projectlistbox" style="margin: 0 10px;padding-bottom: 50px">
                            <div class="projectlist" v-for="(item,index) in projectmemoData" :key="index">
                                <div style="font-size:12px;font-weight:bold;"><span>{{item.createby}}</span>&nbsp;&nbsp;<span>{{item.createdate}}</span></div>
                                <p >{{item.content}}</p>
                                <!--<div v-show="item.isedit">-->
                                    <!--<Input type="textarea" :rows="3" v-model="projectmemoedit" placeholder="请输入"></Input>-->
                                <!--</div>-->
                                <!--<div class="createby-createdate">-->
                                    <!--<div></div>-->
                                    <!--<div>-->
                                        <!--<span v-show="!item.isedit" @click="editProjectMemo(item)" class="edit-delete-save">编辑</span>-->
                                        <!--<span v-show="!item.isedit" @click="deleteProjectMemo(item)" class="edit-delete-save">删除</span>-->
                                        <!--<span v-show="item.isedit" @click="saveeditProjectMemo(item)" class="edit-delete-save">保存</span>-->
                                    <!--</div>-->
                                </div>


                        <el-dialog title="提示" v-model="dialogVisible" size="tiny">
                            <span v-if="nowIndex==-2">删除全部条留言</span>
                            <span v-else>删除此条留言</span>
                            <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="del(nowIndex)" >确 定</el-button>
        </span>
                        </el-dialog>
                    </div>
                    <!--留言板end-->
                </div>
                <div class="clear"></div>
            </div>

        </div>
    </div>


</template>

<script>
//    import {SERVER_HOST} from '../../common/portConfig'
      import {findPageNewsDetail} from "../../api/web-api/guide-api";
    export default {
        data() {
            return {
                title:'',
                content: '',
                mydata: [],
                dialogVisible: false,
                nowIndex: -100,
                projectmemoedit:'',
                post: {
                    author: {
                        loginname: 'temp',//设置默认值，防止Vue在axios未被调用前报错
                    },
                    replies: [
                        {
                            author: {
                                loginname: 'temp',//设置默认值，防止Vue在axios未被调用前报错
                            },
                            ups:10,
                            content:'河南省2020年统一考试录用公务员焦作市体检结果及进入考察人员名单公告'
                        },
                        {
                            author: {
                                loginname: 'temp',//设置默认值，防止Vue在axios未被调用前报错
                            },
                            content:'2222222222222'
                        }
                        ]
                },
                type:'',
                projectmemoData:[
                    // {
                    //     createby:'未知用户',
                    //     createdate:'2020-11-09',
                    //     content:'河南省2020年统一考试录用公务员焦作市体检结果及进入考察人员名单公告',
                    // }
                ],
                news:{
                    // title:'河南省2020年统一考试录用公务员焦作市体检结果及进入考察人员名单公告',
                    // content:'河南省2020年统一考试录用公务员焦作市体检结果及进入考察人员名单公告',
                    // author:'焦作市委组织部',
                    // createTime:'2020-11-09',
                }
            };
        },
        mounted() {
           this.getNews();
        },
        methods: {
            getNews() {
                console.log(this.$route)
                this.type = this.$route.query.type;
                let aa = {
                    contentId: this.$route.params.id
                }
                findPageNewsDetail(aa).then(
                    (res) => {
                        console.log(res);
                        if(res.code===1){
                      this.news=res.data;
                      console.log(this.news);
                        }else {
                            this.$message({
                                message:"查询失败",
                                type:'error',
                            });
                        }
                    },
                    (error) => {
                        console.log(error);
                    }
                );
                switch (this.type) {
                    case 'danggui':
                        this.title = '党规党纪'
                        findPageNewsDetail(aa).then((res) => {
                                if (res.code===1) {
                                    if(res.data){
                                        this.news=res.data;
                                        this.news.author='组织部'
                                        console.log(this.news)
                                    }
                                }else{
                                    this.$message({
                                        message: res.data.msg,
                                        type: 'error'
                                    });
                                }
                            },
                            (error) => {
                                console.log(error);
                            })
                        break;
                    case 'dangzhang':
                        this.title = '党章'
                        break;
                    case 'fanfu':
                        this.title = '反腐倡廉'
                        break;
                    case 'juankuan':
                    this.title = '捐款捐物'
                    break;
                    case 'notices':
                    this.title = '通知公告'
                    break;
                    case 'gongshi':
                    this.title = '党务公开'
                    break;
                    case 'guide':
                    this.title = '办事指南'
                    break;
                    case 'newslist':
                    this.title = '党建要闻'
                    break;
                    case 'elegant':
                    this.title = '党员风采'
                    break;
                    case 'planlist':
                    this.title = '计划总结'
                    break;
                    case 'yaolun':
                    this.title = '党报要论'
                    break;
                    case 'zhuanti':
                    this.title = '党建专题'
                    break;
                    case 'study':
                    this.title = '学习文件'
                    break;
                    case 'tongzhan':
                    this.title = '统战群工'
                    break;
                    case 'jingcui':
                    this.title = '当时精粹'
                    break;
                }

            },
            add() {
                if (this.title == '' || this.content == '') {
                    this.$message.error('请填写完整');
                } else {
                    this.projectmemoData.push({
                        title: this.title,
                        content: this.content,
                    });
                    this.title = '';
                    this.content = '';
                }
            },
            showDialog() {
                this.dialogVisible = true;
            },
            showDelallDialog() {
                this.dialogVisible = true;
                this.nowIndex = -2;
            },
            del(n) {
                if (n == -2) {
                    this.mydata = [];
                } else {
                    this.mydata.splice(n, 1);
                }
                this.nowIndex = -100;
                this.dialogVisible = false;
            },
            handleReset() {
                this.title = '';
                this.content = '';
            }
,
            // 项目留言板
            getProjectMemolist(aaa) {
                var params = {
                    projectid: aaa
                };
                // ProjectMemolist(params).then(res => {
                //     if (res.data.flag == 1) {
                //         if (res.data.success == 1) {
                //             this.projectmemoData = res.data.data;
                //             this.projectmemoData.forEach(item => {
                //                 item.isedit = false;
                //             })
                //         } else {
                //             popup.alert(this, "error", res.data.err.msg);
                //         }
                //     }
                // });
            },
            // 发布
            saveProjectMemo() {
                // var params = {
                //     projectmemo: this.projectmemo,
                //     projectid: this.projectid
                // };
                // saveProjectMemo(params).then(res => {
                //     if (res.data.flag == 1) {
                //         if (res.data.success == 1) {
                //             this.projectmemo = '';
                //             this.getProjectMemolist(this.projectid);
                //             popup.alert(this, "success", "保存成功");
                //         } else {
                //             popup.alert(this, "error", res.data.err.msg);
                //         }
                //     }
                // });
            },
            //编辑
            // editProjectMemo(obj) {
            //     this.projectmemoedit = obj.projectmemo;
            //     obj.isedit = true;
            // },
            saveeditProjectMemo(obj) {
                // obj.isedit = false;
                // var params = {
                //     projectmemoid: obj.projectmemoid,
                //     projectmemo: this.projectmemoedit
                // }
                // saveProjectMemo(params).then(res => {
                //     if (res.data.flag == 1) {
                //         if (res.data.success == 1) {
                //             this.getProjectMemolist(this.projectid);
                //             popup.alert(this, "success", "保存成功");
                //         } else {
                //             popup.alert(this, "error", res.data.err.msg);
                //         }
                //     }
                // });
            },
            //删除
            deleteProjectMemo(obj) {
                // var params = {
                //     projectmemoid: obj.projectmemoid
                // }
                // delProjectMemo(params).then(res => {
                //     if (res.data.flag == 1) {
                //         if (res.data.success == 1) {
                //             this.getProjectMemolist(this.projectid);
                //             popup.alert(this, "success", "删除成功");
                //         } else {
                //             popup.alert(this, "error", res.data.err.msg);
                //         }
                //     }
                // });
            }
        }
    }

</script>

<style scoped lang="scss">
    .box{
        width: 1100px;
        margin: 0 auto;
    }
    .projectlist{
        width: 100%;
        margin-bottom: 15px;
        font-size: 13px;
        p{
            font-size: 12px;
        }
        padding: 10px;
        color:RGB(73,80,96);
        text-align: left;
        line-height: 1.5;
        /*text-indent: 2em;*/
        min-height: 30px;
        border-radius: 5px;
        background: RGB(238,238,238);
    }
    .newtit{text-align:center;font-size:20px;margin:20px 0px;font-weight:bold;}
    .big_nav{margin-bottom:10px;font-size:16px;}
    .news_name{height:40px;border-bottom:3px solid #e2e2e2;}
    .news_name h1{border-bottom:3px solid #d50f10;line-height:40px;display:inline-block;font-size:18px;color:#d50f10;}
    .newtime{text-align:center;font-size:16px;color:#999;margin:10px 0px;line-height:40px;border-bottom:dashed 1px #dfdfdf;padding-bottom:10px;}
    .newtime span{margin:0px 20px;}
    .newcon{line-height:28px;font-size:16px;text-indent:2em;margin:10px 0px;padding-top:10px;margin-bottom: 50px}

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
    .replySec {
        box-sizing: border-box;
        border-bottom: 1px solid #C0CCDA;
        width: 100%;
        padding: 1rem;
        background: white;
    }
    #reply {
        display: flex;
        flex-direction: column;
    }
    .replyUp {
        display: inline-block;
    }
    .replyUp span {
        display: inline-block;
        vertical-align: top;
        margin-top: 7px;
        margin-left: 6px;
        font-size: 14px;
        color: #806767;
    }
    .thumbsClass {
        float: right;
    }
    .replyUp > a{
        color: black;
        text-decoration: none;
        font-weight: 600;
    }
    .replyUp a:nth-of-type(2) {
        margin-left: -14px;
        vertical-align: super;
    }
    .thumbsClass  {
        color: red;
    }
    .replySec > p {
        padding-left: 50px;
        clear: both;
    }
    .replySec img {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1rem;
    }
    .replySec p img {
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
</style>
