<template>
    <div class="main">
        <div class="container">
            <div class="box">
                <div class="big_nav text-left">当前位置：
                    <router-link to='/home' style="margin-top: -16px;">
                        <a class="daohang">网站首页</a>&gt;&nbsp;
                    </router-link>
                    <router-link to='/home/Pictures' style="margin-top: -16px;">
                        <a class="daohang">党建相册</a>&gt;&nbsp;
                    </router-link>
                    <router-link to='/home/danggui' style="margin-top: -16px;">
                        <a class="daohang">111</a>
                    </router-link>
                </div>
            <section class="row">
                <h2 class="col-md-12 m-tit">
                    <em>111</em>
                </h2>
                <div class="col-md-12" style="padding-top: 20px">
                    <!--<img width="200" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" preview="1" preview-text="描述文字">-->
                    <!--<img width="200" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" preview="1" preview-text="描述文字">-->
                    <!--<img width="200" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" preview="2" preview-text="描述文字">-->
                    <!--<img width="200" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" preview="2" preview-text="描述文字">-->
                    <el-row>
                        <el-col :span="6" class="pic" v-for="(item,index) in newslist" :style="{marginRight: index==0||index%3?'2%':'0'}">
                            <div class="demo-image__placeholder">
                                <div class="block">
                                    <div  class="el-image">
                                        <img style=" width: 100%;
    height: 100%;position: relative;    vertical-align: top;
    display: inline-block;"  :src="item.src" preview="1" preview-text="描述文字">
                                    </div>
                              <!---->
                                    <!--<el-image :src="item.src" preview="1" preview-text="描述文字">-->
                                        <!--<div slot="placeholder" class="image-slot">-->
                                            <!--加载中<span class="dot">...</span>-->
                                        <!--</div>-->
                                    <!--</el-image>-->
                                    <span @click="like(item,index)" class="fl" style="padding-left: 5px" >
                                          <span class="el-icon-myaixin_shixin" v-if="item.islike"></span>
                                    <span class="el-icon-myaixin" v-if="!item.islike" ></span>
                                        <!--<span class="el-icon-myaixin" v-else ></span>-->
                                        <span style="font-size: 14px">&nbsp;{{item.likes}}</span>
                                    </span>
                                    <span class="demonstration text-center">自定义</span>
                                    <span class="coomment fr"   style="padding-right: 5px">
                                        <i class="el-icon-chat-line-round"  @click="show">评论</i>
                                        <i style="padding-left: 10px" class="el-icon-more" @click="show2"></i>
                                    </span>
                                    <div class="commentdec">
                                        <!--<b v-if="type">你回复&nbsp;{{name}}</b>\-->
                                        <div  v-if="msg">
                                                    <el-input type="textarea" v-model="newItem" v-on:keyup.enter="addNew"></el-input>
                                                    <el-button type="primary" size="mini" @click="addComment">发表</el-button>
                                                    <el-button size="mini" @click="canelComment">取消</el-button>

                                            <!--<textarea v-model="newItem" v-on:keyup.enter="addNew" />-->
                                            <!--<button class="btn" @click="addComment">发表</button>-->
                                            <!--<button class="btn" @click="canelComment">取消</button>-->
                                        </div>

                                        <ul v-if="msg2" class="huifu">
                                            <li
                                                    v-for="(item,index) in items"
                                                    v-bind:class="{finished: item.isFinished}"
                                                    v-on:click="toggleFinish(item)"
                                                    :key="index"
                                            >{{item.author}}：{{item.title}}</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </el-col>
                    </el-row>

                    <!--<el-pagination class="tc mb30"-->
                                   <!--@size-change="handleSizeChange"-->
                            <!--@current-change="handleCurrentChange"-->
                                   <!--background-->
                            <!--:page-size="pageSize"-->
                            <!--layout="total, prev, pager, next"-->
                            <!--:total="total" >-->
                    <!--</el-pagination>-->

                </div>
            </section>
            </div>
        </div>
    </div>


</template>

<script>
    import {SERVER_HOST} from '../../common/portConfig'
    import {findCompanyNews} from '../../api/web-api/companyNews-api'
    export default {
        data() {
            return {
                SERVER_HOST:SERVER_HOST,
                total: 0,
                pageNum: 1,
                pageSize: 5,
                likes: 5,
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                msg: false,
                msg2: false,
                items: [],
                newItem: "",
                newslist:[
                    {
                        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                        title: '标题1',
                        likes: 0,
                    }
                    ,{
                        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                        title: '标题1',
                        likes: 0,
                    },{
                        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                        title: '标题1',
                        likes: 1,
                    },{
                        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                        title: '标题1',
                        likes: 2,
                    },{
                        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                        title: '标题1',
                        likes: 3,
                    },{
                        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                        title: '标题1',
                        likes: 110,
                    }
                ]
                ,items:[
                    {
                        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                        title: '好看',
                        author: '大虾',
                        likes: 0,
                    }
                    ,{
                        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                        title: '非常好，666',
                        author: '大师',
                        likes: 0,
                    }
                ]
            };
        },
        mounted() {
            // this.getAboutPage();
        },
        methods: {
            handleCurrentChange(val) {
                this.pageNum = val;
                this.getAboutPage();
            },
            handleSizeChange(val) {
                this.pageSize = val;
                this.getAboutPage();
            },
            createTimeFormat: function (row, colnm,cellValue, index) {
                if (row.createTime) {
                    return util.formatDate.format(new Date(cellValue), 'yyyy-MM-dd hh:mm:ss');
                }
            },
            addComment: function() {
                this.$emit("submit",this.commentText);
                this.commentText = "";
            },
            canelComment: function() {
                this.$emit("canel");
                this.commentText = "";
            },
            like(item,index){
                if(!item.islike){
                    item.likes++;
                }else{
                    item.likes--;
                }
                this.$set(item,'islike',!item.islike)
                //     //delete this.namelist.name;//js方法,无法触发更新视图，
                //     this.$delete (this.images[index],"color")//vue方法，可以更新视图
            },
            toggleFinish(item) {
                item.isFinished = !item.isFinished;
            },
            addNew() {
                // axios
                //     .post("接口地址", 传参)
                //     .then(res => {});
                // this.items.push({
                //     label: this.newItem,
                //     isFinished: false
                // });
                this.newItem = "";
                this.msg = false;
            },
            show() {
                this.msg = !this.msg;
            },
            show2() {
                this.msg2 = !this.msg2;
            },
            getAboutPage() {
                let that=this;
                let para = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                };
                findCompanyNews(para).then((res) => {
                    if(res.data.code===1){
                        that.total = res.data.data.total;
                        that.newslist = res.data.data.records;
                        console.log(this.newslist)
                    }else {
                        that.$message({
                            message:"查询失败",
                            type:'error',
                        });
                    }

                })
            }
        }
    }

</script>

<style scoped lang="scss">
    .pic{
        width: 23.5%;
        margin: 2% 2% 0 0;
    }
    .huifu{
    background: #ddd;
        li{
            text-align: left;
            padding-left: 10px;
            font-size: 12px;
        }
    border-radius: 5px;
    }
    .el-icon-chat-line-round:before {
        font-size: 14px;
    }
    .el-icon-myaixin_shixin{
        color: red;
    }
    .block{
        min-height: 200px;
    }
    .big_nav{margin-bottom:10px;font-size:16px;}
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
    .box{
        width: 1100px;
        margin: 0 auto;
    }
    .group_buying{
        padding: 50px 25px 5px 25px;
    }
    .el-upload__input {
        display: none !important;
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
    .group_buying ul li{
        padding: 20px;
        background: #ebebeb;
        border-radius: 12px;
        margin-bottom: 30px;
    }

    .group_buying ul li a {
        display: inline-block;
        width: 100%;
        position: relative;
    }
    .group_buying ul li:hover{
        background: #fff;
        box-shadow: 5px 10px 10px #CACACA;
    }
    .group_buying ul li a:hover{

    }
    .group_buying ul li a img{
        width: 25%;
        float: left;
        max-height: 190px;
    }
    .group_buying ul li a .tit{
        width: 70%;
        float: right;
    }
    .tit h4{
        font-size: 24px;
        padding: 30px 0;
        text-indent: 12px;
        color:#333;
    }
    .tit p{
        font-size: 20px;
       line-height: 30px;
        text-indent: 12px;
        max-height: 64px;
        overflow: hidden;
        color:#333;
        margin-bottom: 20px;
    }
    .tit span{
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 14px;
        color:#333;

    }
    @media (max-width: 768px){
        .grid, .page .grid {
            width: 100%;
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
        /*.main{*/
            /*margin-left: 15px !important;*/
            /*margin-right: 15px !important;*/
        /*}*/
        .group_buying{
            padding: 15px 0;
        }

        .m-tit{
        margin-left: 1px !important;
        }
        .group_buying ul li{
            padding: 10px 0 5px 0;
            background: #ebebeb;
            border-radius: 12px;
            margin-bottom: 15px;
        }
        .group_buying ul li img{
            width: 40%;
            float: left;
            padding-left: 10px;
        }
        .group_buying ul li .tit{
            width: 60%;
            float: left;
        }
        .tit h4 {
            font-size: 15px;
            line-height: 25px;
             padding: 0;
             text-indent: 0;
            width: 100%;
            white-space: nowrap;
            padding-right: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .tit p {
            font-size: 13px;
           line-height: 18px;
            overflow: hidden;
            text-indent: 0;
            max-height: 34px;
        }
        .tit span,.el-pagination {
            display: none;
        }

    }
</style>
