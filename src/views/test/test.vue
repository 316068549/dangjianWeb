<template>
    <div class="main">
        <div class="container">
            <div class="box">
                <div class="big_nav text-left">当前位置：
                    <router-link to='/home' style="margin-top: -16px;">
                        <a class="daohang">网站首页</a>&gt;&nbsp;
                    </router-link>
                    <router-link to='/home/guide' style="margin-top: -16px;">
                        <a class="daohang">办事指南</a>
                    </router-link>
                </div>
                <!-- 导航栏 -->
                <nav class="navbar navbar-expand-lg navbar-dark bg-success mb-5">
                    <a class="navbar-brand" href="#">{{title}}</a>
<!--                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"-->
<!--                            data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"-->
<!--                            aria-label="Toggle navigation">-->
<!--                        <span class="navbar-toggler-icon"></span>-->
<!--                    </button>-->
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0" style="line-height: 50px;">
                            <!-- <li class="nav-item active">
                            <a class="nav-link" href="#">Home</span></a>
                        </li> -->
                            <!-- 菜单 -->
                            <li v-for="(menu, index) in  menus" :key="index" class="nav-item">
                                <a class="nav-link" :class="{active:index==0}" href="#">{{menu}}</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false">关于</a>
                                <div class="dropdown-menu" aria-labelledby="dropdownId">
                                    <a v-for="(about, index) in abouts" :key="index" class="dropdown-item"
                                       href="#">{{about}}</a>

                                </div>
                            </li>
                        </ul>
<!--                        <form class="form-inline my-2 my-lg-0">-->
<!--                            <input class="form-control mr-sm-2" type="text" placeholder="搜索题目.用户">-->
<!--                            <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">搜索</button>-->
<!--                        </form>-->
                    </div>
                </nav>
                <!-- 答题区域 -->

                <div v-if="!isFinish" class="container ">
                    <!-- 进度条 -->
                    <div class="progress mb-3">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar"
                             :style="progressStyle" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{progressBar}}
                        </div>
                    </div>
                    <div class="jumbotron text-left">

                        <h2 class="display-4"><span class="badge badge-dark mr-3">{{question.id}}</span>{{question.title}}</h2>

                        <hr class="my-2">
                        <!-- 选项 -->
                        <div v-for="(item, i) in question.items" :key="i" class="form-check my-3">
                            <label class="form-check-label">
                                <input @change="setAnswer(question.id)" v-model="answer" type="radio" class="form-check-input"
                                       name="item" id="" value="checkedValue" :value="itemIndexs[i]">
                                <span class="badge badge-pill badge-danger mr-2">{{itemIndexs[i]}}</span>
                                {{item}}
                            </label>
                        </div>

                        <!-- 按钮 -->
                        <!-- h行 -->
                        <div class="row">
                            <div class="col-lg-6 col-sm-12">
<!--                                <el-button v-if="progress==0" type="danger" @click="del(scope.$index,scope.row)" size="mini">上一题</el-button>-->
<!--                                <el-button v-if="progress==0" type="danger" @click="del(scope.$index,scope.row)" size="mini">上一题</el-button>-->
                                <button v-if="progress==0" disabled type="button"  class="btn btn-danger btn-block disabled">上一题
                                </button>
                                <button v-else @click="prev()" type="button" class="btn btn-danger btn-block">上一题</button>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <button v-if="isLast"
                                        @click="submit()"
                                        type="button" class="btn btn-primary btn-block mt-sm-3 mt-lg-0 ">提交</button>
                                <button v-else @click="next()" type="button"
                                        class="btn btn-success btn-block mt-sm-3 mt-lg-0">下一题</button>
                            </div>
                        </div>



                    </div>
                    <!-- 题目的按钮 -->
                    <span v-for="(item, index) in questionList" :key="index" style="margin-right: 10px">
               <button @click="skip(index)" v-if="answers.has(index+1)" type="button" class="btn btn-primary">{{index+1}}</button>
               <button @click="skip(index)" v-else type="button" class="btn btn-danger">{{index+1}}</button>
           </span>
                </div>



                <!-- 显示答案 -->
                <div v-else class="container">
                    <div class="jumbotron">
                        <h1 class="display-3 text-center">答案与成绩</h1>

                        <hr class="my-2">
                        <table class="table table-bordered table-striped">
                            <thead class="thead-dark text-center">
                            <tr>
                                <th>序号</th>
                                <th>答案</th>
                                <th>正确答案</th>
                                <th>得分</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr  v-for="([k,v], index) in answers" :key="index">
                                <td>{{k}}</td>
                                <td><span v-if="v===correct(k)" class="badge badge-pill badge-danger">{{v}}</span>
                                    <span v-else class="badge badge-pill badge-primary">{{v}}</span>


                                </td>
                                <!-- 根据id获取正确答案 -->
                                <td><span class="badge badge-pill badge-danger">{{correct(k)}}</span></td>

                                <!-- 根据索引获取正确答案 -->
                                <!-- <td><span class="badge badge-pill badge-danger">{{questionList[index].answer}}</span></td> -->
                                <td>
                                    {{v===correct(k)?20:0}}
                                </td>
                            </tr>

                            <!-- 总计 -->
                            <tr
                                    class="text-center h3 ">
                                <td colspan="3">总成绩</td>
                                <td > {{score}}</td>

                            </tr>

                            </tbody>
                        </table>

                    </div>

                </div>



            </div>
        </div>
    </div>


</template>

<script>
    import {findNews} from "../../api/web-api/guide-api";
    import dayjs from 'dayjs'
    // import util from '../../../common/util'

    export default {
        data() {
            return {
                total: 0,
                score:0,
                title: '在线测试',
                menus: ['首页', '单选题', '多选题', '模拟测试'],
                abouts: ['联系我们', '加入我们', '其他信息'],
                isFinish: false,
                progress: 0,
                size: 0,

                answer: '',
                answers: new Map(),

                itemIndexs: ['A', 'B', 'C', 'D', 'E', 'F'],

                questionList: [
                    {
                        id: 1,
                        title: '测试?',
                        items: ['1', '2', '3', '4', '5'],
                        answer: 'A'
                    },
                    {
                        id: 2,
                        title: '最高级的数据库？',
                        items: ['Redit', 'MySQL', 'postgreSQL', 'MongDB'],
                        answer: 'C'
                    },
                    {
                        id: 3,
                        title: '开源数据是？',
                        items: ['DB2', 'Oracle', 'SQL Server', 'MySQL'],
                        answer: 'A'
                    },
                    {
                        id: 4,
                        title: '市值最高的公司？',
                        items: ['微软', '亚马逊', '苹果', '中国建行'],
                        answer: 'C'
                    },
                    {
                        id: 5,
                        title: '最好的前端框架？',
                        items: ['Angular', 'Vue', 'React', 'Java'],
                        answer: 'B'
                    }
                ],

                pageNum: 1,
                dayjs:dayjs,
                pageSize: 2,
                cateId: 30,
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            };
        },
        mounted() {
            // console.log(dayjs.unix(1609811854).format('{YYYY} MM-DDTHH:mm:ssZ[Z]'))
            console.log(this.dayjs.unix(1609811854).format('YYYY-MM-DD'))
            this.getAboutPage();
        },
        computed: {
            // 根据id去获取题目的正确答案
            correct(){
                return function (id) {
                    for(const i of this.questionList){
                        if(i.id==id){
                            return i.answer;
                        }
                    }

                }
            },


            // isFinish:function(){
            //     return this.size===this.questionList.length;
            // },
            question: function () {
                return this.questionList[this.progress];
            },
            isLast: function () {
                return this.progress == this.questionList.length - 1;
            },
            // progressStyle: function () {
            //     return `width:${this.progressChange}%;`;
            // },

            progressBar: function () {
                return Math.round(this.size / this.questionList.length * 100);
            },

            progressStyle: function () {
                return `width:${this.progressBar}%;`;
            }



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
                var that=this;
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
                this.$router.push({path: '/home/detail/'+id,query: { type: 'guide' }});
                // this.$router.push({path: '/home/guidedetail'});
            },
            submit:function(){
                // 答题完毕，提交答案
                this.isFinish=true;
                for (const q of this.questionList) {
                    if(q.answer===this.answers.get(q.id)){
                        this.score+=20;
                    }

                }

            },


            skip:function(i){
                this.progress=i;
                this.answer='';

            },

            setAnswer: function (id) {
                //判断是否重复的一道题
                if (!this.answers.has(id)) {
                    // 答题的数量
                    this.size++;
                }

                this.answers.set(id, this.answer);
                // console.log(this.answers);


            },
            next: function () {
                this.progress++;
                if (this.answers.has(this.progress)) {
                    this.answer = this.answers.get(this.progress + 1);
                } else {
                    this.answer = '';
                }


            },
            prev: function () {
                //获得上一题的答案并且复位
                this.answer = this.answers.get(this.progress);
                this.progress--;

            }

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
    .btn-block{
        width: 100px;
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
