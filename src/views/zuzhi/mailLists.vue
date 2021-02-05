<template>
    <div class="main">
        <div class="container">
            <div class="box">
                <div class="big_nav text-left">当前位置：
                    <router-link to='/home' style="margin-top: -16px;">
                        <a class="daohang">网站首页</a>&gt;&nbsp;
                    </router-link>
                    <router-link to='/home/maillist' style="margin-top: -16px;">
                        <a class="daohang">书记信箱</a>
                    </router-link>
                </div>
                <div class="ht5"></div>
                <div class="newsbox" style="text-align: left;overflow: auto;">
                    <div class="news_name"><h1>书记信箱</h1></div>
                    <div class="col-xs-3 catemenu-box">
                        <ul class="catmenu-ul">
                            <h3 style="font-size: 20px;">组织生活
                                <!--<router-link to='/home' >-->
                                    <!--<a class="daohang">制度建设</a>-->
                                <!--</router-link>-->
                            </h3>
                            <li >
                                <router-link to='/home/sanhui' >
                                    <a class="daohang">三会一课</a>
                                </router-link>
                                </li>
                            <li  >
                                <router-link to='/home/liangxue' >
                                    <a class="daohang">党建专题</a>
                                </router-link>
                            </li>
                            <li>
                                <router-link to='/home/minzhu' >
                                    <a class="daohang">民主生活会</a>
                                </router-link>
                            </li>
                            <li >
                                <router-link to='/home/xuanju' >
                                    <a class="daohang">民主选举</a>
                                </router-link>
                            </li>
                            <li >
                                <router-link to='/home/juankuan' >
                                    <a class="daohang">捐款捐物</a>
                                </router-link>
                            </li><li class="cactive">
                                <router-link to='/home/mailbox' >
                                    <a class="daohang">书记信箱</a>
                                </router-link>
                            </li><li>
                                <router-link to='/home/plan' >
                                    <a class="daohang">计划总结</a>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <section class="col-xs-9">
                        <section class="hot" style="margin-top: 40px">
                            <el-col :span="24" class="warp-main">
                                <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
                                    <el-form :inline="true" :model="filters">
                                        <el-form-item>
                                            <el-input v-model="filters.name" placeholder="标题" style="width: 240px;"></el-input>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button type="danger" size="small" v-on:click="getProductPage" icon="search">查询</el-button>
                                        </el-form-item>
                                        <el-form-item >
                                            <el-button type="danger" size="small" @click="addHandle" icon="plus">写信</el-button>
                                        </el-form-item>
                                    </el-form>
                                </el-col>
                                <el-table :data="datas" highlight-current-row v-loading="datasLoading" @selection-change="selsChange" border>
                                    <!--<el-table-column type="selection" align="center"></el-table-column>-->
                                    <!--<el-table-column type="index" align="center"></el-table-column>-->

                                    <el-table-column prop="id" label="信件编码" align="center"></el-table-column>
                                    <el-table-column prop="name" label="写信人" align="center"></el-table-column>
                                    <el-table-column prop="title" label="信件标题" align="center"></el-table-column>
                                    <!--<el-table-column prop="content" label="信件内容" align="center"></el-table-column>-->
                                    <el-table-column prop="createTime" label="来信时间" align="center" width="200"></el-table-column>
                                    <!--<el-table-column prop="status" label="处理状态" align="center"></el-table-column>-->
                                    <el-table-column label="操作" align="center"  width="100">
                                        <template slot-scope="scope">
                                            <el-button size="small" @click="goV(scope.$index,scope.row)">查看</el-button>
                                            <!--<el-button size="small" @click="$router.push({path: '/administrator/product/edit/'+scope.row.id})">编辑</el-button>-->
                                            <!--<el-button type="danger" @click="del(scope.$index,scope.row)" size="small">删除</el-button>-->
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <el-col class="toolbar table-footer" style="margin-top: 30px">
                                    <el-pagination
                                            @size-change="handleSizeChange"
                                            @current-change="handleCurrentChange"
                                            :page-sizes=[10,15,20,25,50]
                                            :page-size="pageSize"
                                            layout="total, sizes, prev, pager, next, jumper"
                                            :total="total" style="float:right;">
                                    </el-pagination>
                                </el-col>
                                <el-dialog title="写信" :visible.sync="addFormVisible" width="50%" :close-on-click-modal="false" @open="open('addDialog')">
                                    <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
                                        <el-form-item label="姓名" prop="name">
                                            <el-input v-model="addForm.name" placeholder="请输入姓名"></el-input>
                                        </el-form-item>
                                        <el-form-item label="电话" prop="mobile" >
                                            <el-input v-model="addForm.mobile"  placeholder="请输入电话" ></el-input>
                                        </el-form-item>
                                        <el-form-item label="信件标题" prop="title">
                                            <el-input v-model="addForm.title" placeholder="信件标题"></el-input>
                                        </el-form-item>
                                        <el-form-item label="信件内容" prop="content">
                                            <el-input v-model="addForm.content" type="textarea" auto-complete="off" placeholder="信件内容"></el-input>
                                        </el-form-item>
                                    </el-form>
                                    <div slot="footer" class="dialog-footer">
                                        <el-button @click.native="addFormVisible = false">取消</el-button>
                                        <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
                                    </div>
                                </el-dialog>
                                <el-dialog title="信件标题" :visible.sync="viewVisible" width="50%" :close-on-click-modal="false">
                                    <el-form :model="viewForm" label-width="80px"  ref="viewForm">
                                        <el-form-item label="姓名" prop="name">
                                            <p>{{viewForm.name}}</p>
                                        </el-form-item>
                                        <el-form-item label="电话" prop="mobile" >
                                            <p>{{viewForm.mobile}}</p>
                                        </el-form-item>
                                        <el-form-item label="信件标题" prop="title">
                                            <p>{{viewForm.title}}</p>
                                            <!--<el-input v-model="addForm.title" placeholder="信件标题"></el-input>-->
                                        </el-form-item>
                                        <el-form-item label="信件内容" prop="content">
                                            <p>{{viewForm.content}}</p>
                                            <!--<el-input v-model="addForm.content" type="textarea" auto-complete="off" placeholder="信件内容"></el-input>-->
                                        </el-form-item>
                                    </el-form>
                                    <div slot="footer" class="dialog-footer" align="center">
                                        <el-button @click.native="viewVisible = false">关闭</el-button>
                                    </div>
                                </el-dialog>



                            </el-col>

                            <!--<ul class="hdNews">-->
                                <!--<li v-for="(item,index) in newslist"  >-->
                                    <!--<div class="newslist" @click="gotoDetail(item.id)">-->
                                        <!--<p class="title">-->
                                            <!--<a href="javascript:;">-->
                                                <!--{{item.title}}<br>-->
                                                <!--<i class="el-icon-user" v-if="item.author"></i>{{item.author}}-->

                                            <!--</a>-->
                                        <!--</p>-->
                                        <!--&lt;!&ndash; <p class="desc"><a target="_blank" class="more_link" href="/index.php/home/content/index/aid/1771.html">[详情]</a></p> &ndash;&gt;-->
                                        <!--&lt;!&ndash;<span class="new_time">2020-02-24</span>&ndash;&gt;-->

                                        <!--<span class="new_time"><div class="green">{{item.status}}</div> <span style="padding-top: 10px">{{item.time}}</span></span>-->
                                    <!--</div>-->
                                    <!--<div class="clear"></div>-->
                                <!--</li>-->
                            <!--</ul>-->

                            <!--<ul class="hdNews">-->
                                <!--<li v-for="(item,index) in newslist"  >-->
                                    <!--<div class="newslist" @click="gotoDetail(item.id)">-->
                                        <!--<p class="title">-->
                                            <!--<a href="javascript:;">-->
                                                <!--{{item.title}}—{{item.author}}-->
                                            <!--</a>-->
                                        <!--</p>-->
                                        <!--<span class="new_time">{{item.time}}</span>-->
                                    <!--</div>-->
                                    <!--<div class="clear"></div>-->
                                <!--</li>-->
                            <!--</ul>-->




                        </section>
                    </section>
                </div>
                <!--<div class="fanye" style="text-align:center;margin-top: 40px">-->
                    <!--<el-pagination class="tc mb30"-->
                                   <!--@size-change="handleSizeChange"-->
                                   <!--prev-text="上一页"-->
                                   <!--next-text="下一页"-->
                                   <!--@current-change="handleCurrentChange"-->
                                   <!--background-->
                                   <!--:page-size="pageSize"-->
                                   <!--layout="total, prev, pager, next"-->
                                   <!--:total="total" >-->
                    <!--</el-pagination>-->
                <!--</div>-->
        </div>
        </div>
    </div>


</template>

<script>
    import {findNews} from "../../api/web-api/companyNews-api";
    import {findPageNews} from "../../api/web-api/guide-api";
    import {SERVER_HOST} from './../../common/portConfig'
    import {isvalidPhone} from '../../common/validate'
    import {isvalidTitle} from '../../common/validate'
    var validPhone=(rule, value,callback)=>{
        if (!value){
            callback(new Error('请输入手机号码'))
        }else  if (!isvalidPhone(value)){
            callback(new Error('请输入正确的11位手机号码'))
        }else {
            callback()
        }
    }
    var validTitle=(rule, value,callback)=>{
        if (!value){
            callback();
        }else
        if (!isvalidTitle(value)){
            callback(new Error('请输入正确的姓名'))
        }else {
            callback()
        }
    }
    export default {
        data() {
            return {
                total: 8,
                filters: {
                    name: '',
                },
                datas: [
                    {
                        id:1,
                        name: '测试',
                        title: '信件标题',
                        author: '测试',
                        mobile: '13898966666',
                        createTime: '2020-12-20 09:00',
                        status: '已结束',
                        content: '领导好，我是泾渭上城的业主，今年第一年住进来，发现各种问题，其他都能忍受，但是这个暖气的问题实在是不可以忍受，有老人有孩子，暖气费也交了，打电话给物业，物业推脱热力公司，给热力公司打，又说物业舍不得花钱做保温，到底是哪里的问题我们也不得而知，据我所知这个小区的暖气已经是个老大难，热力公司说是给政府建议，政府不整改，不批复，请你们核实清楚，尽快解决这个暖气问题，好让我们小区的广大居民过好一个冬天，同样的，人家小区家里20多度，我们家里冷冰冰，太寒心了！',
                    }
                ],
                total: 0,
                pageNum: 1,
                pageSize: 15,
                datasLoading: false,
                addLoading: false,
                addFormVisible: false,//新增界面是否显示
                viewVisible: false,//界面是否显示
                addFormRules: {
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur'},
                        {validator: validTitle,message: '姓名格式不正确', trigger: 'blur'},
                        { min: 1, max: 50, message: '不能超过50个字符', trigger: 'blur' },
                    ],
                    title: [
                        {required: true, message: '请输入信件标题', trigger: 'blur'},
                        { min: 1, max: 30, message: '不能超过30个字符', trigger: 'blur' },
                    ],
                    mobile: [
                        {required: true, validator: validPhone, trigger: 'blur'}
                    ],
                    content: [
                        {required: true, trigger: 'blur'}
                    ],
                },
                addForm: {
                    name: '',
                    mobile:'',
                    title:'',
                    content:'',
                },
                viewForm: {
                    name: '',
                    mobile:'',
                    title:'',
                    content:'',
                },
                sels: [],
                pageNum: 1,
                pageSize: 10,
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            };
        },
        mounted() {
            document.getElementById('web-content').style.backgroundColor='#EEE';
           // this.getAboutPage();
        },
        methods: {
            goV(a,b){
                console.log(a);
                console.log(b);
                this.viewVisible = true
                this.viewForm=b;
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
                // if (row.createTime) {
                //     row.createTime = row.createTime.replace(/-/g,"/");
                //     row.createTime = row.createTime.replace('T',' ');
                //     row.createTime = row.createTime.substring(0,19);
                //     return util.formatDate.format(new Date(cellValue), 'yyyy-MM-dd hh:mm:ss');
                // }
            },
            getProductPage() {
                let that=this;
                let para = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    name: this.filters.name,
                };
                // this.datasLoading = true;
                // reqProductPage(para).then((res) => {
                //     if(res.data.code===1){
                //         that.total = res.data.data.total;
                //         that.datas = res.data.data.records;
                //         that.datasLoading = false;
                //     }else {
                //         that.$message({
                //             message:"查询失败",
                //             type:'error',
                //         });
                //     }
                //
                // })
            },
            selsChange: function (sels) {
                this.sels = sels;
            },
            addHandle: function () {
                this.addFormVisible = true;
            },
            addSubmit: function () {
                this.$refs.addForm.validate((valid) => {
                    if (valid) {
                        this.addLoading = true;
                                this.$message({
                                    message: '提交成功',
                                    type: 'success'
                                });
                        this.addFormVisible = false;
                        // this.$refs['addForm'].resetFields();
                        let para = Object.assign({}, this.addForm);
                        console.log(para);
                        this.datas.push(para);
                        // reqAddUser(para).then((res) => {
                        //     this.addLoading = false;
                        //     if (res.data.code === 1) {
                        //         this.$refs['addForm'].resetFields();
                        //         this.addFormVisible = false;
                        //         this.getUsers();
                        //         this.$message({
                        //             message: '提交成功',
                        //             type: 'success'
                        //         });
                        //     }else{
                        //         this.$message({
                        //             message: res.data.msg,
                        //             type: 'error'
                        //         });
                        //     }
                        // });
                    }
                });
            },
            open:function(dialogType,obj){
            },
            //删除
            del: function (index, row) {
                this.$confirm('确认删除该记录吗?', '提示', {type: 'warning'}).then(() => {
                    this.datasLoading = true;
                    let para = {id: row.id};
                    // reqProductDel(para).then((res) => {
                    //     if (res.data.code===1) {
                    //         this.datasLoading = false;
                    //         this.$message({
                    //             message: '删除成功',
                    //             type: 'success'
                    //         });
                    //         this.getProductPage();
                    //     } else {
                    //         this.$message({
                    //             message: res.data.msg,
                    //             type: 'error'
                    //         });
                    //         this.getProductPage();
                    //     }
                    // });
                }).catch(() => {
                });
            },
            //批量删除
            batchDel: function () {
                var ids = this.sels.map(item => item.id).toString();
                this.$confirm('确认删除选中记录吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.datasLoading = true;
                    let para = {ids: ids};
                    // reqProductBatchDel(para).then((res) => {
                    //     if (res.data.code===1) {
                    //         this.datasLoading = false;
                    //         this.$message({
                    //             message: '批量删除成功',
                    //             type: 'success'
                    //         });
                    //         this.getProductPage();
                    //     } else {
                    //         this.$message({
                    //             message: '批量删除失败',
                    //             type: 'error'
                    //         });
                    //     }
                    // });
                }).catch(() => {
                });
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
            gotoDetail(id){
                console.log(id)
                // $router.push({path: '/administrator/maintenance/view/'+scope.row.id})
                this.$router.push({path: '/home/xuanjudetail/'+id,query: { type: 'danggui' }});
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
    .hdNews li span{font-size:14px;color:#555;float:right;}
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
