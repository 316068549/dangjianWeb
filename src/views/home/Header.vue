<template>
  <div class="header">
    <nav class ="navbar navbar-default" role = "navigation">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" @click="addItem()" data-toggle = "collapse"  data-target = "#target-menu">
          <span class="sr-only">qieh</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/"><img src="../../assets/img/logo4.png"></a>
      </div>
      <div class="collapse navbar-collapse" id = "target-menu">
        <ul class="nav navbar-nav" id = "menu2">
          <li v-for="item in navData" @click="addShow()" v-bind:class="{'dropdown':item.child,'active':changeActiv(item.link)}">
            <router-link v-if="!item.child" :to="item.link" >{{item.cate_name}}</router-link>
            <a v-else  class="dropdown-toggle" data-toggle = "dropdown"  href="javascript:void(0)">{{item.cate_name}}
              <!--<span class="caret"></span>-->
            </a>
            <ul v-if="item.child" class="dropdown-menu hiddit" id="drpmenu" >
              <li v-for="(sub,index) in item.child" v-bind:class="{'dropdown':sub.child,'active':changeActiv(sub.link)}">
                <router-link  :to="sub.link" @click="hideMenu()" >{{sub.cate_name}}
                  <a href="javascript:;"></a></router-link>
                   <!--三级菜单-->
                        <ul v-if="sub.child" class="dropdown-menu hiddit2" style="    top: 0;
    left: 160px;" >
                          <li v-for="sub2 in sub.child">
                            <router-link  :to="sub2.link" @click="hideMenu()" >{{sub2.cate_name}}
                              <a href="javascript:;"></a></router-link>

                          </li>
                        </ul>
                <!--三级菜单end-->
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
    // import $ from 'jquery';
    // import {SERVER_HOST} from '../../common/portConfig'
    import {findCates} from '../../api/web-api/cates-api'

    export default {
        data () {
            return {
                // SERVER_HOST:SERVER_HOST,
                pageNum: 1,
                pageSize: 50,
                navData : [
                    {
                        "link" : "/",
                        "name" : "首页",
                        "havesub" : false
                    },
                    {
                    "link" : "",
                    "cate_name" : "信息门户",
                    "havesub" : true,
                    "child" : [
                       {
                       "cate_name" : "党建要闻",
                       "link" : "/home/newslist",
                         "child" : [
                           {
                             "cate_name" : "党建要闻",
                             "link" : "/home/newslist"
                           },{
                             "cate_name" : "党建要闻",
                             "link" : "/home/newslist"
                           },{
                             "cate_name" : "党建要闻",
                             "link" : "/home/newslist"
                           }]
                       },
                      {
                       "cate_name" : "党建要闻",
                       "link" : "/home/newslist",
                        "child" : [
                          {
                            "cate_name" : "党建要闻",
                            "link" : "/home/newslist"
                          },{
                            "cate_name" : "党建要闻",
                            "link" : "/home/newslist"
                          },{
                            "cate_name" : "党建要闻",
                            "link" : "/home/newslist"
                          }]
                   },   {
                       "cate_name" : "党建要闻",
                       "link" : "/home/newslist"
                   },   {
                       "cate_name" : "党建要闻",
                       "link" : "/home/newslist"
                   },   {
                       "cate_name" : "党建要闻",
                       "link" : "/home/newslist"
                   },   {
                       "cate_name" : "党建要闻",
                       "link" : "/home/newslist"
                   },   {
                       "cate_name" : "党建要闻",
                       "link" : "/home/newslist"
                   },
                   //    {
                   //     "name" : "通知公告",
                   //     "subLink" : "/home/notices"
                   // },{
                   //          "name" : "党务公开",
                   //          "subLink" : "/home/gongshi"
                   //      },{
                   //          "name" : "党政生日",
                   //          "subLink" : "/home/birthlist"
                   //      },{
                   //          "name" : "党建相册",
                   //          "subLink" : "/home/pictures"
                   //      },{
                   //          "name" : "优秀党员风采",
                   //          "subLink" : "/home/elegant"
                   //      },{
                   //          "name" : "党员队伍",
                   //          "subLink" : "/home/shuju"
                   //      },{
                   //          "name" : "问卷调查",
                   //          "subLink" : "/home/question"
                   //      },{
                   //          "name" : "办事指南",
                   //          "subLink" : "/home/guide"
                   //      }
                    ]
                },
                    {
                    "link" : "/about",
                    "name" : "教育在线",
                        "havesub" : true,
                        "sub" : [
                            {
                                "name" : "学习管理",
                                "subLink" : ""
                            },{
                                "name" : "课程管理",
                                "subLink" : ""
                            },{
                                "name" : "在线学习",
                                "subLink" : ""
                            },{
                                "name" : "在线考试",
                                "subLink" : ""
                            },{
                                "name" : "在线统计",
                                "subLink" : ""
                            },{
                                "name" : "认证管理",
                                "subLink" : ""
                            },{
                                "name" : "历史党建馆",
                                "subLink" : ""
                            }
                        ]
                },{
                    "link" : "",
                    "name" : "制度建设",
                    "havesub" : true,
                        "sub" : [
                            {
                                "name" : "党章",
                                "subLink" : "/home/dangzhang"
                            },{
                                "name" : "党规党纪",
                                "subLink" : "/home/danggui"
                            },{
                                "name" : "学习文件",
                                "subLink" : "/home/study"
                            },{
                                "name" : "反腐倡廉",
                                "subLink" : "/home/fanfu"
                            },{
                                "name" : "统战群工",
                                "subLink" : "/home/tongzhan"
                            },{
                                "name" : "当时精粹",
                                "subLink" : "/home/jingcui"
                            },{
                                "name" : "党报要论",
                                "subLink" : "/home/yaolun"
                            },{
                                "name" : "主题党日",
                                "subLink" : "/home/zhuanti"
                            }
                        ]
                },{
                    "link" : "",
                    "name" : "组织生活",
                        "havesub" : true,
                        "sub" : [
                            {
                                "name" : "三会一课",
                                "subLink" : "/home/sanhui"
                            },{
                                "name" : "主题党日",
                                "subLink" : "/home/sanhui"
                            },{
                                "name" : "民主生活会",
                                "subLink" : "/home/sanhui"
                            },{
                                "name" : "换届选举",
                                "subLink" : "/home/xuanju"
                            },{
                                "name" : "捐款捐物",
                                "subLink" : "/home/juankuan"
                            },{
                                "name" : "书记信箱",
                                "subLink" : "/home/mailbox"
                            },{
                                "name" : "干部任用",
                                "subLink" : "/home/plan"
                            }
                        ]
                },{
                    "link" : "/home/bigdata",
                    "name" : "大数据中心",
                    "havesub" : false,
                        "sub" : [
                            {
                                "name" : "党员情况统计",
                                "subLink" : ""
                            },{
                                "name" : "党组织情况统计",
                                "subLink" : ""
                            },{
                                "name" : "党员缴费统计",
                                "subLink" : ""
                            },{
                                "name" : "党员3D画像",
                                "subLink" : ""
                            },{
                                "name" : "党组织党建地图",
                                "subLink" : ""
                            },{
                                "name" : "党建台账",
                                "subLink" : ""
                            },{
                                "name" : "公文阅览统计",
                                "subLink" : ""
                            },{
                                "name" : "进度排名",
                                "subLink" : ""
                            },{
                                "name" : "舆情分析",
                                "subLink" : ""
                            },
                        ]
                },{
                        "link" : "/home/bigdata",
                        "name" : "个人中心",
                        "havesub" : true,
                        "sub" : [
                            {
                                "name" : "修改密码",
                                "subLink" : "/home/changepwd"
                            },{
                                "name" : "修改个人信息",
                                "subLink" : "/home/profile"
                            }]
                    }
                ]
            }
        },
        methods:{
            changeActiv:function (url) {
                // if(this.$route.path!='/'&&this.$route.path.substr(1)==url)return true
            },
            getNav:function () {
                // let para = {
                // };
                var that = this;
                findCates().then(
                    (res) => {
                        console.log(res);
                        if(res.code===1){
                            // that.newslist = res.data.records;
                            // console.log(this.newslist)
                            if (res.data) {
                                // res.data.forEach(function (currentValue, index) {
                                //     currentValue.subLink = '/product/' + currentValue.id;
                                // })
                                // this.navData[0].sub = res.data.data.records;
                                this.navData = res.data;
                            }
                        }else {
                            that.$message({
                                message: res.data.msg,
                                type: 'error'
                            });
                        }
                    },
                    (error) => {
                        console.log(error);
                    }
                );
            },
            addShow:function(){
                  let aa = document.body.clientHeight;
                // if(aa<768){
                //     $('#target-menu').removeClass('show');
                // }
            },
            addItem:function () {
                var drpBox = document.getElementById('drpmenu');
                var drpBox2 = document.getElementById('menu2');
                drpBox.className='dropdown-menu show';
                drpBox2.getElementsByTagName('li')[0].classList.add("show"); //与第一个等价
//                var drpBox = document.getElementById('drpmenu');
            }
            ,hideMenu:function () {
                var drpBox = document.getElementById('drpmenu');
                if(drpBox.style.display=='block'){
                    drpBox.style.display='none';
                }
            }
        },
        created : function(){
            this.getNav();
            // console.log(this.$route)

        }


    }
</script>
<style scoped>
  /*@import "../assets/css/reset.css";*/
  /*@import "../assets/css/style.css";*/
  /*@import "../assets/css/component.css";*/
  @import "../../styles/bootstrap/css/bootstrap.min.css";
  .header {
    /*position: fixed;*/
    z-index: 9;
    /*top: 0;*/
    /*left: 0;*/
    width: 100%;
    height: 50px;

  }

  .header,.navbar{
    /*background: #25aad6;*/

    border: none;
    height: 50px;
  }
  .header{
    background: #d50f10;
  }
  .navbar{
    background-color:transparent;
  }
  .navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {
    /*background-color: #63cbef;*/
    background: rgba(0,0,0,.3);
  }

  @media (max-width: 768px){
    .header,.navbar {
      height: 48px !important;
      padding-top: 0 !important;
      /*overflow: hidden;*/
    }
    .navbar-brand {
      height: 48px !important;
      padding-top: 9px !important;
      /*overflow: hidden;*/
    }
    .dropdown-menu>li>a {
      color: #ccc;
      font-size: 1rem;
    }
    .dropdown-menu>li{
      padding-top:10px ;
      padding-bottom: 10px;
    }
    .navbar-nav>li>a {
      padding-top: 11px;
      padding-bottom: 11px;
      line-height: 22px;
    }
    .navbar-default .navbar-collapse, .navbar-default .navbar-form {
      background: rgba(0,0,0,.7);
    }
  }
  .navbar-brand {
    /*padding: 15px 15px;   */
    padding: 0px 15px;
    margin-left: 45px;
    height: 50px;
  }

  .navbar-default .navbar-toggle {
    border:none;
  }
  .navbar-toggle {
    margin-top: 10px;
    /*margin-bottom: 24px;*/
  }
  .navbar-default .navbar-toggle .icon-bar {
    background-color: #fff;
  }

  .navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {
    color: #fff;
    /*background-color: #63cbef;*/
    /*background-color: #209fc9;*/
    background: rgba(0,0,0,.3);
  }
  .dropdown-menu>li>a {
    text-align: center;
    color: #fff;
  }
  .dropdown-menu {
    padding: 0;
    /*background-color: #63cbef;*/
    background: #d50f10;
  }
  .dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover {
    color: #fff;
    text-decoration: none;
    /*background-color: #209fc9;*/
    background: rgba(0,0,0,.3);
  }
  .dropdown-menu>li>a:hover  {
    color: #fff;
    text-decoration: none;
    /*background-color: #209fc9;*/
    background: rgba(0,0,0,.3);
  }
  .navbar-default .navbar-nav>li>a {
    color: #fff;
  }
  .navbar-default .navbar-collapse, .navbar-default .navbar-form {
    border:none;
    /*background-color: #25aad6;*/
    /*background: rgba(0,0,0,.7);*/
  }
  .navbar-default .navbar-nav>li>a:focus, .navbar-default .navbar-nav>li>a:hover {
    color:#fff;
    /*background-color: #63cbef;;*/
    background: rgba(0,0,0,.3);
  }
  .navbar-nav>li>.dropdown-menu {
    border: none;
  }
  .navbar-brand>img {
    vertical-align: middle;
  }
  @media (max-width: 767px){
    .navbar-brand>img {
      height: 30px;
    }
    .navbar-nav .show .dropdown-menu {
      position: static;
      float: none;
      width: auto;
      margin-top: 0;
      background-color: transparent;
      border: 0;
      -webkit-box-shadow: none;
      box-shadow: none;
    }
    .navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {
      color: #fff;
      /*background-color: #25aad6;*/
      background: rgba(0,0,0,.7);
    }
  }
  @media (min-width: 768px){
    .dropdown-menu2 {
      position: absolute;
      top: 0;
      left: 100%;
      margin-left: 15px;
      z-index: 1000;
      /* display: none; */
      float: left;
      min-width: 160px;
      padding: 5px 0;
      margin: 2px 0 0;
      font-size: 14px;
      text-align: left;
      list-style: none;
      background-color: #fff;
      -webkit-background-clip: padding-box;
      background-clip: padding-box;
      border: 1px solid #ccc;
      border: 1px solid rgba(0,0,0,.15);
      border-radius: 4px;
      box-shadow: 0 6px 12px rgba(0,0,0,.175);
    }
    .navbar-nav>li>a {
      height: 50px;
      line-height:50px;
      padding-top: 0px;
      padding-bottom: 0px;
      width: 100px;
      text-align: center;
      font-size: 14px;
    }
    .navbar-brand>img {
      height: 45px;
    }
    .navbar-default .navbar-collapse  {
      margin-left: 470px;
    }
    .navbar {
      width: 1200px;
      margin:0 auto;
    }
    .dropdown-menu>li>a {
      height: 58px;
      line-height: 58px;
      width: 156px;
    }
    .nav .dropdown:hover .hiddit {
      display: block !important;
    }
    .hiddit .dropdown:hover  .hiddit2 {
      display: block !important;
    }
  }
</style>
