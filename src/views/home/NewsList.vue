<template>
    <div class="main">
        <div class="container">
            <section class="row">
                <h2 class="col-md-12 m-tit">
                    <em>党建要闻</em>
                </h2>
                <div class="col-md-12" style="padding: 20px 0 50px 0">
                    <el-row>
                        <el-col :span="6" class="pic" v-for="(item,index) in newslist" :style="{marginRight: index==0||index%3?'2%':'0'}" >
                            <div class="demo-image__placeholder"  @click="gotoDetail(item.id)">
                                <div class="block">
                                    <!--<img src="../../assets/img/ren.jpg" alt="">-->
                                    <el-image :src="SERVER_HOST+item.litpic" style="width: 100%;height: 292.5px;">
                                        <div slot="placeholder" class="image-slot" style="min-height: 256px;">
                                            加载中<span class="dot">...</span>
                                        </div>
                                    </el-image>
                                    <span class="demonstration">{{item.title}}</span>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <!--<div class="col-md-12 bd-upon">-->
                    <!--<div class="group_buying">-->
                        <!--<ul>-->
                            <!--<li class="clearfix" v-for="item in newslist">-->
                                <!--<a href="javascript:;" @click="gotoDetail(item.id)">-->
                                    <!--<img :src="SERVER_HOST+item.litpic" alt=""/>-->
                                    <!--<div class="tit">-->
                                        <!--<h4>{{item.title}}</h4>-->
                                        <!--&lt;!&ndash;<p v-html="item.content">&ndash;&gt;-->
                                        <!--&lt;!&ndash;</p>&ndash;&gt;-->
                                        <!--{{item.writer}}<span class="date">{{item.time|dateunix}}</span>-->
                                    <!--</div>-->
                                <!--</a>-->

                            <!--</li>-->
                        <!--</ul>-->
                    <!--</div>-->

                    <!--<el-pagination class="tc mb30"-->
                                   <!--@size-change="handleSizeChange"-->
                                   <!--@current-change="handleCurrentChange"-->
                                   <!--background-->
                                   <!--:page-size="pageSize"-->
                                   <!--layout="total, prev, pager, next"-->
                                   <!--:total="total" >-->
                    <!--</el-pagination>-->

                <!--</div>-->
            </section>
        </div>
    </div>


</template>

<script>
    import {SERVER_HOST} from '../../common/portConfig'
    import util from '../../common/util'
    import {findNews} from "@/api/web-api/companyNews-api";
    export default {
        data() {
            return {
                total: 0,
                SERVER_HOST:SERVER_HOST,
                pageNum: 1,
                pageSize: 5,
                cateId: 27,
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
            //获取数据
            getAboutPage(searchData) {
                let that=this;
                let para = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    cateId: this.cateId,
                };
                // return new Promise((resolve, reject) => {
                //     findNews(para).then(response => {
                //        console.log(response)
                //         // resolve(response.data)
                //     }).catch(error =>{
                //         console.log(error)
                //         // reject(error)
                //     })
                // })
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
                this.$router.push({path: '/home/detail/'+id,query: { type: 'newslist' }});
            },
            // getAboutPage() {
            //     // findCompanyNews(para).then((res) => {
            //     //     if(res.data.code===1){
            //     //         that.total = res.data.data.total;
            //     //         that.newslist = res.data.data.records;
            //     //         console.log(this.newslist)
            //     //     }else {
            //     //         that.$message({
            //     //             message:"查询失败",
            //     //             type:'error',
            //     //         });
            //     //     }
            //     //
            //     // })
            // }
        }
    }

</script>

<style scoped lang="scss">
    @media (min-width: 768px){
        .pic{
            width:23.5% !important;
        }
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
    .demonstration{
        font-size: 13px;
        line-height: 1.1rem;
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
