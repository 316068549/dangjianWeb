<template>
    <div class="main">
        <div class="container">
            <div class="box">
                <div class="big_nav text-left">当前位置：
                    <router-link to='/home' style="margin-top: -16px;">
                        <a class="daohang">网站首页</a>&gt;&nbsp;
                    </router-link>
                    <router-link to='/home/shuju' style="margin-top: -16px;">
                        <a class="daohang">党员队伍</a>
                    </router-link>
                </div>
                <div class="ht5"></div>
                <el-row class="warp">
                    <el-col :span="24" class="warp-main">

                        <el-row class="first-row" :gutter="20">
                            <el-col :span="8">
                                <div id="business2" class="block">
                                    <equip-pie :pie-data="pieData3" :y-data="yData3" :num="pieTotal3" :name="pieName3" :type="1" v-if="pieTotal3"></equip-pie>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div id="projects222" class="block">
                                    <equip-pie :pie-data="pieData" :y-data="yData" :num="pieTotal" :name="pieName" :type="1" v-if="pieTotal"></equip-pie>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div id="projects22" class="block">
                                    <equip-pie :pie-data="pieData2" :y-data="yData2" :num="pieTotal2" :name="pieName2" :type="1" v-if="pieTotal2"></equip-pie>
                                </div>
                            </el-col>

                        </el-row>
                        <el-row class="first-row" :gutter="20">
                            <el-col :span="8">
                                <div id="business" class="block">
                                    <TreeChart :json="treeData" id="6"></TreeChart>
                                </div>
                            </el-col>
                        </el-row>


                    </el-col>

                </el-row>
        </div>
        </div>
    </div>
</template>

<script>
    import {piedata} from "../../api/web-api/companyNews-api";
    import BiLine from "../../components/echarts/bi-line";
    import BiHBar from "../../components/echarts/bi-h-bar";
    import EquipPie from "../../components/echarts/equip-pie";
   import TreeChart from '../../components/Treechart/tree.vue'

    export default{
        name: "bigData",
        components: {EquipPie,BiLine,BiHBar,TreeChart},
        data(){
            return{
                yData:[  "20岁-29岁", "30岁-39岁", "40岁+"],
                yData2:["高中及以下", "大专", "本科", "硕士", "博士及以上"],
                yData3:["男", "女"],
                pieData:[
                    // {value: 1, name: '0-9岁'},
                    // {value: 22, name: '10-19岁'},
                    {value: 0, name: '20岁-29岁'},
                    {value: 0, name: '30岁-39岁'},
                    {value: 0, name: '40岁+'},
                ],
                pieData2:[
                    {value: 0, name: '高中及以下'},
                    {value: 0, name: '大专'},
                    {value: 0, name: '本科'},
                    {value: 0, name: '硕士'},
                    {value: 0, name: '博士及以上'},
                ], pieData3:[
                    {value: 0, name: '男'},
                    {value: 0, name: '女'}
                ],
                pieTotal:0,
                pieTotal2:1,
                pieTotal3:1,
                pieName:'年龄分布',
                pieName2:'学历分布',
                pieName3:'性别分布',
                projects: 0,
                orders:0,
                business: 0,
                webUsers: 0,
                pieArray:[],
                ordersArray:[],
                businessArray:[],
                usersArray:[],
                treeData: {
                    partnerName: '陕煤集团党支部',
                    proportionShares: '100',
                    partnerType: 2,
                    id: 1,
                    childers: [{
                        partnerName: '陕西生态水泥有限公司党支部',
                        proportionShares: '50',
                        childers: [{
                            partnerName: '陕西智引科技有限公司党支部',
                            proportionShares: '50',
                            partnerType: 1,
                            id: 2,
                            partnerCode: 1
                        },{
                            partnerName: '陕西新汇华科技有限公司党支部',
                            proportionShares: '50',
                            partnerType: 1,
                            id: 2,
                            partnerCode: 1
                        },{
                            partnerName: '高陵生态水泥公司党支部',
                            proportionShares: '50',
                            partnerType: 1,
                            id: 2,
                            partnerCode: 1
                        },
                        ],
                        partnerType: 1,
                        id: 2,
                        partnerCode: 1
                    }
                    // , {
                    //     partnerName: '山西生态水泥有限公司党支部',
                    //     proportionShares: '20',
                    //     partnerType: 1,
                    //     id: 4,
                    //     partnerCode: 1
                    // }, {
                    //     partnerName: '西米子公司党支部',
                    //     proportionShares: '20',
                    //     partnerType: 2,
                    //     id: 5,
                    //     partnerCode: 1
                    // }, {
                    //     partnerName: '其他党支部',
                    //     proportionShares: '10',
                    //     partnerType: 3,
                    //     id: 6,
                    //     partnerCode: 1
                    // }
                    ]
                }
            }
        },
        methods:{
            init(){
                let that=this;
                piedata().then((res) => {
                    if(res){
                        that.pieArray = res;
                        console.log(this.pieArray)
                        this.pieArray.forEach((item,index)=>{
                            var count =0;
                            var keys=Object.keys(item);
                            // console.log(keys)
                            if(index==0){
                                this.pieData3.forEach(aa=>{
                                    keys.forEach(bb=>{
                                        count+=item[bb];
                                        // console.log(bb)
                                        // console.log(aa.name)
                                        if(aa.name=='男'&& bb=='man'){
                                            aa.value = item[bb]
                                        }
                                        if(aa.name=='女'&& bb=='woman'){
                                            aa.value = item[bb]
                                        }
                                        // if(bb==aa.name){
                                        //     aa.value = item[0][bb]
                                        // }
                                    })
                                })
                                // console.log(this.pieData3)
                                this.pieTotal3 = count;
                            }else if(index==1){
                                this.pieData.forEach(aa=>{
                                    keys.forEach(bb=>{
                                        // console.log(bb)
                                        // console.log(aa.name)
                                        count+=item[bb];
                                        if(bb==aa.name){
                                            aa.value = item[bb]
                                        }
                                    })
                                })
                                // console.log(this.pieData)
                                this.pieTotal = count;
                            }else{
                                this.pieData2.forEach(aa=>{
                                    keys.forEach(bb=>{
                                        // console.log(bb)
                                        // console.log(aa.name)
                                        count+=item[bb];
                                        if(bb=='高中'){
                                            aa.value = item[bb]
                                        }
                                        if(bb==aa.name){
                                            aa.value = item[bb]
                                        }
                                    })
                                })
                                this.pieTotal2 = count;
                            }
                        })
                    }else {
                        that.$message({
                            message:"查询失败",
                            type:'error',
                        });
                    }

                })
            },
        },
        mounted(){
            this.init();
        }
    }

</script>

<style scoped lang="scss">
    .block {
        margin-bottom: 20px;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
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
    .newsbox ul li{    padding: 15px 0px 5px 0px;border-bottom:1px dashed #c6c6c6}
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
