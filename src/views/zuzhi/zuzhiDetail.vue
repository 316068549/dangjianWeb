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
                        <span>{{news.type}}</span>   |   <span>{{news.org}}</span>   |   <span>{{news.createTime}}</span>
                        <!--|   <span>阅读：2587</span>-->
                    </div>
                    <div class="newcon">
                        <div>
                            <div class="block">
                                <div class="shijian">
                                    <div style="padding-top: 15px">
                                        <span>2020-12-21</span>
                                        <br>
                                        <span class="hong"><b>09:00</b></span>
                                        <br>
                                        <span>开始时间</span>
                                    </div>

                                    <div class="time-boxx">
                                        <div style="overflow: auto;width: 166px;">
                                            <span class="fl">大约</span>
                                            3.0
                                            <span class="fr text-left">小时</span>
                                        </div>
                                        <div class="timel">
                                            <div class="aa" style="  left:-5px;"></div>
                                            <div class="aa bb" ></div>
                                        </div>
                                    </div>

                                    <div style="padding-top: 15px">
                                        <span>2020-12-21</span>
                                        <br>
                                        <span  class="hong"><b>11:00</b></span>
                                        <br>
                                        <span>结束时间</span>
                                    </div>
                                </div>
                                <div class="shijian" style="margin-top: 15px">
                                    <div class="ll" style="border-right: 1px solid #ddd;">
                                        <span>应到</span>
                                        <br>
                                        <span class="green"><b>11</b></span>
                                    </div>

                                    <div class="ll" style="border-right: 1px solid #ddd;">
                                        <span>到会</span>
                                        <br>
                                        <span class="green"><b>11</b></span>
                                    </div>

                                    <div class="ll">
                                        <span>请假</span>
                                        <br>
                                        <span class="hong"><b>0</b></span>
                                    </div>
                                </div>
                                <div class="shijian2" style="margin-top: 25px">
                                    <el-form ref="form" :model="form" label-width="150px">
                                        <el-form-item label="负责人">
                                            <el-input v-model="form.name"></el-input>
                                        </el-form-item>
                                        <el-form-item label="记录人" >
                                            <el-input v-model="form.name2"></el-input>
                                        </el-form-item>
                                        <el-form-item label="主持人">
                                            <el-input v-model="form.name3"></el-input>
                                        </el-form-item>
                                        <el-form-item label="主讲人及身份" >
                                            <el-input v-model="form.name4"></el-input>
                                        </el-form-item>
                                        <el-form-item label="到会指导人员" >
                                            <el-input v-model="form.name5"></el-input>
                                        </el-form-item>
                                        <el-form-item label="活动地点">
                                            <el-input v-model="form.name6"></el-input>
                                        </el-form-item>
                                        <el-form-item label="活动内容" >
                                            <el-input type="textarea" v-model="form.desc"></el-input>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button type="danger" @click="onSubmit">保存</el-button>
                                            <!--<el-button>取消</el-button>-->
                                        </el-form-item>
                                    </el-form>
                                </div>

                                <div>
                            </div>
                                <!--<ul class="el-timeline is-reverse">-->
                                    <!--<li class="el-timeline-item">-->
                                        <!--<div class="el-timeline-item__tail"></div>-->
                                        <!--<div class="el-timeline-item__node el-timeline-item__node&#45;&#45;normal el-timeline-item__node&#45;&#45;">&lt;!&ndash;&ndash;&gt;</div>-->
                                        <!--&lt;!&ndash;&ndash;&gt;<div class="el-timeline-item__wrapper">&lt;!&ndash;&ndash;&gt;<div class="el-timeline-item__content">-->
                                <!--</div>-->
                                        <!--<div class="el-timeline-item__timestamp is-bottom">-->
                                <!--</div></div>-->
                                    <!--</li>-->
                                    <!--<li class="el-timeline-item">-->
                                        <!--<div class="el-timeline-item__tail"></div>-->
                                        <!--<div class="el-timeline-item__node el-timeline-item__node&#45;&#45;normal el-timeline-item__node&#45;&#45;">&lt;!&ndash;&ndash;&gt;</div>-->
                                        <!--&lt;!&ndash;&ndash;&gt;<div class="el-timeline-item__wrapper">&lt;!&ndash;&ndash;&gt;<div class="el-timeline-item__content">-->

                                <!--</div>-->
                                        <!--<div class="el-timeline-item__timestamp is-bottom">-->
                                <!--</div></div>-->
                                    <!--</li>-->

                                <!--</ul>-->
                            </div>
                        </div>
                        <!--<p v-html="news.content"></p>-->
                    </div>
                </div>
                <div class="clear"></div>
            </div>

        </div>
    </div>


</template>

<script>
//    import {SERVER_HOST} from '../../common/portConfig'
      import {findPageNewsDetail} from "../../api/web-api/rules-api";
    export default {
        data() {
            return {
                title:'三会一课',
                type:'三会一课',
                form: {
                    name: '王晓',
                    name2: '王晓',
                    name3: '王晓',
                    name4: '王晓',
                    name5: '王晓',
                    name6: '第一党支部会议室',
                    desc: '第一党支部民主生活会',
                },
                news:{
                    title: '第一党支部民主生活会',
                    type: '民主生活会',
                    org: '第一党小组',
                    author: '张晓',
                    startTime: '2020-12-21 09:00',
                    endTime: '2020-12-21 11:00',
                    status: '已结束',
                    content: '三会一课',
                    createTime:'2020-11-09',
                },
                reverse: true,
                activities: [{
                    content: '活动按期开始',
                    timestamp: '2018-04-15'
                }, {
                    content: '通过审核',
                    timestamp: '2018-04-13'
                }, {
                    content: '创建成功',
                    timestamp: '2018-04-11'
                }]
            };
        },
        mounted() {
           // this.getNews();
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            getNews() {
                console.log(this.$route)
                this.type = this.$route.query.type;
                let aa = {
                    id: this.$route.params.id
                }
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
                }

            }
        }
    }

</script>

<style scoped lang="scss">
    .box{
        width: 1100px;
        margin: 0 auto;
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
    .newcon{line-height:28px;font-size:14px;margin:10px 0px;padding-top:10px;min-height: 300px}

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
