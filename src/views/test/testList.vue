<template>
    <div class="main">
        <div class="container">
            <div class="box">
                <div class="big_nav text-left">当前位置：
                    <router-link to='/home' style="margin-top: -16px;">
                        <a class="daohang">网站首页</a>&gt;&nbsp;
                    </router-link>
                    <!--<router-link to='/home/danggui' style="margin-top: -16px;">-->
                        <a class="daohang">在线考试</a>
                    <!--</router-link>-->
                </div>
                <div class="newsbox" style="text-align: left;overflow: auto;">
                    <section class="col-xs-12">
                        <section class="hot">
                            <div class="grid">
                                <ul class="news-list clearfix">
                                    <li v-for="(item,index) in newslist"><a href="javascript:;" @click="gotoDetail(index)" class="ns-item fade">
                                        <div class="ns-info">
                                            <h3 title="">{{item.title}}</h3>
                                        </div>
                                        <div class="ns-thumb tc">
                                            <!--<img :src="SERVER_HOST+'/file/downloadFile/'+item.image">  -->
                                            <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg">
                                        </div>
                                        <div class="ns-info">
                                            <!--<h3 title="">{{item.title}}</h3>-->
                                            <p v-html="item.content"></p>
                                        </div>
                                        <!--<p class="date">{{item.createTime|date_from_unix}}</p>-->
                                    </a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </section>

                </div>
        </div>
        </div>
    </div>


</template>

<script>
    import {findNews} from "../../api/web-api/companyNews-api";
    import {SERVER_HOST} from './../../common/portConfig'

    export default {
        data() {
            return {
                total: 0,
                pageNum: 1,
                pageSize: 10,
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                newslist:[
                    {
                        id:1,
                        title: '考试1',
                        content: '考试1内容',
                    },{
                        id:1,
                        title: '考试2',
                        content: '考试2内容',
                    },{
                        id:1,
                        title: '考试3',
                        content: '考试3内容',
                    },
                    {
                        id:1,
                        title: '考试1',
                        content: '考试1内容',
                    },{
                        id:1,
                        title: '考试2',
                        content: '考试2内容',
                    },{
                        id:1,
                        title: '考试3',
                        content: '考试3内容',
                    }

                ]
            };
        },
        mounted() {
            document.getElementById('web-content').style.backgroundColor='#EEE';
            // this.getAboutPage();
            // this.getLists();
        },
        methods: {
            getLists() {
                let para = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize
                };
                findNews(para).then((res) => {
                    let aa=[];
                    if (res.code===1) {
                        this.newslist=res.data.records;
                    }
                    else{
                        this.$message({
                            message: res.data.msg,
                            type: 'error'
                        });
                    }
                })
            },
            gotoDetail(id){
                console.log(id);
                // this.$router.push({path: '/home/sanhuilist'});
                this.$router.push({path: '/home/test/'+id});
                // $router.push({path: '/administrator/maintenance/view/'+scope.row.id})


            },
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
                };
                findPageNews(para).then(
                    (res) => {
                        console.log(res);
                        if(res.code===1){
                            that.total = res.data.total;
                            that.newslist = res.data.records;
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
        }
    }

</script>

<style scoped lang="scss">
    .pic{
        width: 23.5%;
        margin: 2% 2% 0 0;
    }
    .grid {
        width: 100%;
    }
    .news-list {
        padding-bottom: 60px;
    }
    .news-list li {
        float: left;
        width: 23.5%;
        margin: 2% 2% 0 0;
    }
    .news-list li:nth-child(4){
        margin-right:0 ;
    }
    .ns-item {
        display: block;
        img{
            width: 100%;
        }
        padding: 10px;
        border-radius: 2px;
        background: #fff;
        opacity:1;
    }
    .ns-thumb{
        overflow: hidden;
    }
    .fade {
        transition: color .3s linear,background .3s linear,box-shadow .2s linear,opacity .2s linear;
    }

    .ns-info {
        line-height: 25px;
        color: #666;
        font-size: 14px;
    }
    .ns-info h3 {
        font-size: 18px;
        line-height: 25px;
        padding: 5px 0 8px;
        margin-top: 10px;
        color: #333;
    }
    .ns-info p {
        height: 30px;
        overflow: hidden;
    }
    .ns-item .date {
        text-align: right;
        margin-top: 10px;
        font-size: 12px;
        color: #999;
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
