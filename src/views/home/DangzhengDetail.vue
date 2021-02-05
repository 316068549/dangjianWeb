<template>
    <div class="main">
        <div class="container">
            <div class="box">
                <div class="big_nav text-left">当前位置：
                    <router-link to='/home' style="margin-top: -16px;">
                        <a class="daohang">网站首页</a>&gt;&nbsp;
                    </router-link>
                    <router-link to="/home/birthlist" style="margin-top: -16px;">
                        <a class="daohang">党政生日</a>
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
                    </div>
                    <!--留言板-->
                    <div id="messageboard"  style="width: 70%;margin: 0 auto;">
                        <h2 class="text-left" style="font-size: 15px;line-height: 30px;padding-left: 10px;">留言板&nbsp;&nbsp;  <span @click="handleReset" size="mini" style="color:cornflowerblue;cursor: pointer;font-size: 12px">选择表情</span></h2>
                        <br>
                        <el-form ref="form" label-width="10px">
                            <el-form-item label="" style="margin-bottom: 5px">
                                <p class="fff" ref='sxx' v-html="content3?content3.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi, emotion):''"   @keyup.delete="aa()" contenteditable></p>
                                <emotion v-if="isShowd" @emotion="handleEmotion" :height="200" ></emotion>
                                <!--<el-input v-model="content" placeholder="请输入"></el-input>-->
                            </el-form-item>
                            <el-form-item class="text-right">
                                <!--<p>文本输入框</p>-->
                                <p>{{bainma}}</p>
                                <el-button type="danger" @click="add()" size="mini">发表</el-button>

                            </el-form-item>
                        </el-form>
                        <div class="projectlistbox" style="margin: 0 10px;padding-bottom: 50px">
                            <div class="projectlist" v-for="(item,index) in projectmemoData" :key="index">
                                <div style="font-size:12px;font-weight:bold;"><span>{{item.user_id}}</span>&nbsp;&nbsp;<span>{{item.time|dateunix}}</span></div>
                                <p v-html="item.message?item.message.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi, emotion):''"></p>
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

                <div class="container" >
                    <!--<p>文本输入框</p>-->
                    <!--<p   >{{bainma}}</p>-->
                    <!--<textarea class="text" rows="5" v-html="content.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi, emotion)" ></textarea>-->
                    <!--<p>表情选择框</p>-->
                    <!--<emotion @emotion="handleEmotion" :height="200" ></emotion>-->
                    <!--<p>效果显示框</p>-->
                    <!--<div class="text-place"  >-->

                        <!-- /\#[\u4E00-\u9FA5]{1,3}\;/gi 匹配出含 #XXX; 的字段 -->
                        <!--<p ref='sxx'  v-html="content3.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi, emotion)" @keyup="aa" contenteditable></p>-->
                        <!--<p ref='sxx' v-html="content3.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi, emotion)"   @keyup="aa" contenteditable></p>-->
                    <!--</div>-->
                </div>
            </div>

        </div>
    </div>


</template>

<script>
     import Emotion from '../../components/Emotion/index'
     import {findPageNewsDetail} from "../../api/web-api/guide-api";
     import {message,messageQuery} from "../../api/web-api/companyNews-api";
     import $ from 'jquery'
//    import {SERVER_HOST} from '../../common/portConfig'
    export default {
        data() {
            return {
                title:'',
                id:'',
                content: '',
                bainma:'',
                touList:[],
                content3: '',
                comment: '',
                // content: '',
                mydata: [],
                dialogVisible: false,
                isShowd: false,
                nowIndex: -100,
                projectmemoedit:'',
                type:'',
                projectmemoData:[
                    {
                        createby:'未知用户',
                        createdate:'2020-11-09',
                        content:'河南省2020年统一考试录用公务员焦作市体检结果及进入考察人员名单公告',
                    }
                ],
                news:{
                    title:'河南省2020年统一考试录用公务员焦作市体检结果及进入考察人员名单公告',
                    content:'河南省2020年统一考试录用公务员焦作市体检结果及进入考察人员名单公告',
                    author:'焦作市委组织部',
                    createTime:'2020-11-09',
                }
            };
        },
        components: {
            Emotion
        },
        created(){
            // "path": "../../static/js/emotion/arclist/", //表情文件路径

        },
        mounted() {
            // $(document).ready(function(){
            //     setTimeout(function () {
            //         $('a').emotion();
            //     },2000)
            //
            // });


            console.log($('a'))
            console.log($('.clear'));
           this.getNews();
           this.getMsg();

        },
        methods: {
            aa(){
                console.log(3333333333)
                // this.content=this.$refs.sxx.innerHtml;
            },
            handleEmotion (i) {
                // console.log(this.$refs.sxx.innerHTML);
                console.log(i);
                this.touList.push(i);
                this.content=this.$refs.sxx.innerHTML;
                this.content3=this.$refs.sxx.innerHTML;
                // console.log(this.content);
                // this.content=this.$refs.sxx.innerHTML;
               // this.content=this.$refs.sxx.innerText;
                this.content += i;
                const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
                console.log(this.touList)
                this.content = this.content.replace(/<img src="https:\/\/res.wx.qq.com\/mpres\/htmledition\/images\/icon\/emotion\/([0-9]*).gif">/g, '#'+this.touList['$1']+';')
                var arr= this.content.split('#undefined;');
                console.log(arr)
                let dd='';
                if(arr){
                    arr.forEach( (val,index)=> {
                        if(index<arr.length-1){
                            dd+=arr[index]+this.touList[index];
                        }else{
                            dd+=arr[index];
                        }

                    })
                }

                console.log('编码'+dd)
                this.bainma = dd;
                this.content3 += i;
                this.handleReset();
                // console.log(this.content);
            },
            //将匹配结果替换表情图片
            emotion (res) {
                let word = res.replace(/\#|\;/gi,'')
                const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
                let index = list.indexOf(word)
                return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" >`
            },
            //将匹配结果替换文字
            emotion2 (res) {
                res.replace(/<img src="[\w]*\/([0-9]*).[\w]{3}">/g, '[em]');
                let word = res.replace(/\#|\;/gi,'')
                const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
                let index = list.indexOf(word)
                return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" >`
            },
            getMsg(){
                let aa = {
                    archivesId: this.id
                }
                messageQuery(aa).then(
                    (res) => {
                        console.log(res);
                        if(res.code===1){
                            this.projectmemoData=res.data;
                            console.log(this.projectmemoData);
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
            },
            getNews() {
                console.log(this.$route)
                this.id = this.$route.params.id;
                let aa = {
                    contentId: this.id
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
                }

            },
            add() {
                console.log(this.bainma)
                if(this.bainma){
                    this.content=this.bainma;
                }else{
                    this.content=this.$refs.sxx.innerHTML;
                }
                // this.content =this.bainma;
                // this.title =this.bainma;
                if (this.content == '') {
                    this.$message.error('请填写留言');
                } else {
                    let that = this;
                    that.formData=new FormData();
                    that.formData.append('message', this.content)
                    that.formData.append('archivesId', this.id)
                    that.formData.append('userId', this.id)
                    message(that.formData).then((res) => {
                        console.log( res);
                        if (res==1) {
                            that.$message({
                                message: '提交成功',
                                type: 'success'
                            });
                            this.content='';
                            this.content3='';
                            that.formData = new FormData();
                            this.getMsg();
                            // that.$refs.ruleForm.resetFields();
                        }  else {
                            that.$message({
                                message: '提交失败',
                                type: 'error'
                            });
                        }
                    })
                    // this.projectmemoData.push({
                    //     title: this.title,
                    //     content: this.content,
                    // });
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
                this.isShowd=!this.isShowd
                // this.title = '';
                // this.content = '';
            }
        }
    }

</script>

<style scoped lang="scss">
    /*@import '../../static/js/emotion/dist/emotion.css';*/

    .fff{
        border: 1px solid #C0C4CC;
        line-height: 40px;
        min-height: 40px;
        text-align: left;
        padding: 0 15px;
        border-radius: 5px;
    }
    .text {
        display: block;
        margin: 0 auto;
        margin-bottom: 10px;
        width: 400px;
        resize: none;
        box-sizing: border-box;
        padding: 5px 10px;
        border-radius: 8px;
    }
    .text-place {
        height: 80px;
        box-sizing: border-box;
        padding: 5px 10px;
        border-radius: 8px;
        background: #ddd5d5;
    }
    .text-place p {
        display: flex;
        align-items: center;
        margin: 0;
    }
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
</style>
