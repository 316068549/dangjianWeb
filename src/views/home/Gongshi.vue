<template>
    <div class="main">
        <div class="container">
            <div class="box">
                <div class="big_nav text-left">当前位置：
                    <router-link to='/home' style="margin-top: -16px;">
                        <a class="daohang">网站首页</a>&gt;&nbsp;
                    </router-link>
                    <router-link to='/home/gongshi' style="margin-top: -16px;">
                        <a class="daohang">党务公开</a>
                    </router-link>
                </div>
                <div class="ht5"></div>
                <div class="newsbox" style="text-align: left;overflow: auto;">
                    <div class="news_name"><h1>党务公开</h1></div>
                    <div class="col-xs-3 catemenu-box">
                        <ul class="catmenu-ul">
                            <h3 style="font-size: 20px;"> 信息门户
                            </h3>
                            <li>
                                <router-link to='/home/newslist' >
                                    <a class="daohang">党建要闻</a>
                                </router-link>
                            </li>
                            <li >
                                <router-link to='/home/notices' >
                                    <a class="daohang">通知公告</a>
                                </router-link>
                            </li>
                            <li class="cactive">
                                <router-link to='/home/gongshi' >
                                    <a class="daohang">党务公开</a>
                                </router-link>
                            </li>
<!--                            <li >-->
<!--                                <router-link to='/home/birthlist' >-->
<!--                                    <a class="daohang">党政生日</a>-->
<!--                                </router-link>-->
<!--                            </li>-->
                            <li >
                            <router-link to='/home/pictures' >
                                <a class="daohang">党建相册</a>
                            </router-link>
                        </li> <li >
                            <router-link to='/home/elegant' >
                                <a class="daohang">优秀党员风采</a>
                            </router-link>
                        </li> <li >
                            <router-link to='/home/shuju' >
                                <a class="daohang">党员队伍</a>
                            </router-link>
                        </li> <li >
                            <router-link to='/home/question' >
                                <a class="daohang">问卷调查</a>
                            </router-link>
                        </li> <li >
                            <router-link to='/home/guide' >
                                <a class="daohang">办事指南</a>
                            </router-link>
                        </li>
                        </ul>
                    </div>
                    <section class="col-xs-9">
                        <section class="hot">
                            <ul class="hdNews">
                                <li v-for="(item,index) in newslist"  >
                                    <div class="newslist" @click="gotoDetail(item.id)">
                                        <p class="title">
                                            <a href="javascript:;">
                                                {{item.title}}
                                            </a>
                                        </p>
                                        <!-- <p class="desc"><a target="_blank" class="more_link" href="/index.php/home/content/index/aid/1771.html">[详情]</a></p> -->
                                        <!--<span class="new_time">2020-02-24</span>-->
                                        <!--<span class="new_time">{{dayjs.unix(item.time).format('YYYY-MM-DD')}}</span>-->
                                        <span class="new_time">{{item.time|dateunix}}</span>
                                    </div>
                                    <div class="clear"></div>
                                </li>
                            </ul>
                        </section>
                    </section>
                </div>
                <div class="fanye" style="text-align:center;margin-top: 40px">
                    <el-pagination class="tc mb30"
                                   @size-change="handleSizeChange"
                                   prev-text="上一页"
                                   next-text="下一页"
                                   @current-change="handleCurrentChange"
                                   background
                                   :page-size="pageSize"
                                   layout="total, prev, pager, next"
                                   :total="total" >
                    </el-pagination>
                    <!--<div><ul class="pagination">  <li class="disabled"><a href="#">1</a></li><li><a href="/index.php/home/list/index/sid/30/p/2.html">2</a></li><li><a href="/index.php/home/list/index/sid/30/p/3.html">3</a></li> <li><a href="/index.php/home/list/index/sid/30/p/2.html">下一页</a></li> </ul></div>                <div class="clear"></div>-->
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import {findNews} from "../../api/web-api/guide-api";
    // import dayjs from 'dayjs'
    export default {
        data() {
            return {
                total: 0,
                pageNum: 1,
                // dayjs:dayjs,
                pageSize: 10,
                cateId: 29,
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                newslist:[

                ]
            };
        },
        mounted() {
            this.getAboutPage();
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
            getAboutPage() {
                let that=this;
                let para = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    cateId: this.cateId,
                };
                findNews(para).then(
                    (res) => {
                        console.log(res);
                        if(res.code===1){
                            that.total = res.count;
                            that.newslist = res.data;
                            // that.newslist[0].time = dayjs.unix(that.newslist[0].time).format('YYYY-MM-DD HH:mm:ss');
                            console.log(this.newslist)
                        }else {
                            that.$message({
                                message:"查询失败",
                                type:'error',
                            });
                        }
                    },
                    (error) => {
                        console.log(error);
                    }
                );
            },
            gotoDetail(id){
                console.log(id)
                // $router.push({path: '/administrator/maintenance/view/'+scope.row.id})
                this.$router.push({path: '/home/detail/'+id,query: { type: 'gongshi' }});
                // this.$router.push({path: '/home/guidedetail'});
            },
        }
    }

</script>

<style scoped lang="scss">
    .pic{
        width: 23.5%;
        margin: 2% 2% 0 0;
    }
    .box{
        width: 1100px;
        margin: 0 auto;
    }
    .demonstration{
        font-size: 14px;
    }
    .daohang{
        color: rgb(51,51,51);
    }
    .catemenu-box{
        margin-top: 33px;
        padding-left: 0;
        padding-right: 30px;
    }
    ul.catmenu-ul {border: 1px solid #ccc;border-radius: 5px;}
    ul.catmenu-ul h3 {font-weight: bolder;border-bottom: 1px solid #ccc;background: #fff3f3;border-top-left-radius:10px;border-top-right-radius:10px;line-height:60px;text-align:center;}
    ul.catmenu-ul h3 a{font-size: 20px;}
    ul.catmenu-ul li{ border-bottom:1px dotted #ccc;line-height:50px;text-align:center;}
    ul.catmenu-ul li a{font-size:18px;}
    ul.catmenu-ul li:last-child{ border-bottom:none;}
    ul.catmenu-ul li.cactive a{color:#ef3838;font-weight:bold;}
    .hdNews{ border-bottom:1px dotted #DCDCDC;margin-top:20px;}
    .hdNews li{font-size:18px;line-height:2.5;border-bottom:1px dashed #ddd; text-indent:10px;}
    .hdNews li a{color:#333}
    .hdNews li span{font-size:14px;color:#555;float:right;margin-top: 5px;}
    .hdNews p{ line-height:1.5; font-size:14px;}
    .hdNews h2{font-size:16px; line-height:1.5;}
    .hasPic{ height:101px; padding-top:8px; overflow:hidden;}
    .hasPic .pic{ float:left; height:80px; width:120px; margin-top:6px; overflow:hidden; margin-right:2.7%;}
    .hasPic h2{ padding-top:5px;}
    /*翻页样式*/
    .fanye{text-align:center;}
    .fanye .ac{background:#d50f10;color:#fff;}
    .fanye a{padding:10px;text-align:center;margin:5px;display:inline-block;border:1px solid #eee;}
    .fanye a:hover{background:#d50f10;color:#fff;}
    .newtit{text-align:center;font-size:20px;margin:20px 0px;font-weight:bold;}
    .big_nav{margin-bottom:10px;font-size:16px;}
    .news_name{height:40px;border-bottom:3px solid #e2e2e2;}
    .news_name h1{border-bottom:3px solid #d50f10;line-height:37px;display:inline-block;font-size:18px;color:#d50f10;}
    .newtime{text-align:center;font-size:16px;color:#999;margin:10px 0px;line-height:40px;border-bottom:dashed 1px #dfdfdf;padding-bottom:10px;}
    .newtime span{margin:0px 20px;}
    .newcon{line-height:28px;font-size:16px;text-indent:2em;margin:10px 0px;padding-top:10px;}
    .newsbox .hot ul li{    padding: 15px 0px 5px 0px;border-bottom:1px dashed #c6c6c6}
    .newslist{position:relative;}
    .new_time{position:absolute;right:0px;top:0px;font-size:16px;}
    .newslist .title{border-left:3px solid #d50f10;padding-left:10px;font-size:16px;margin-bottom:10px;}
    .newslist .title a{color:#000;}
    .newslist .title a:hover{color:#d50f10;}
    .newslist .title b{color:#d50f10;margin-right:5px;}
    .newslist .desc{margin-left: 15px;line-height: 26px;}
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
