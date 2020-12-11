<template>
  <footer id="ft" class="ft clearfix">
    <div class="yqlj">
      <select class="yqt" name="">
        <option value="###">--政府门户--</option>
        <option value="http://www.henan.gov.cn/">河南省人民政府</option><option value="http://www.jiaozuo.gov.cn/">焦作市人民政府</option>        </select>
      <select class="yqt" name="">
        <option value="###">--党建网群--</option>
        <option value="http://www.bjdj.gov.cn/index.html">北京党建网</option><option value="http://www.jcqzw.com/">湖北党建网</option><option value="http://www.tjzzb.gov.cn/">天津党建网</option><option value="http://www.hxw.gov.cn/">湖南党建网</option><option value="http://www.hebdj.gov.cn/template/site00_index.jsp">河北党建网</option><option value="http://www.sxdygbjy.gov.cn/">山西党建网</option><option value="http://www.bgxf.gov.cn/">广西党建网</option><option value="http://www.nmgdj.gov.cn/">内蒙古党建网</option><option value="http://www.hndyjyfw.gov.cn/">河南党建网</option>        </select>
      <select class="yqt" name="">
        <option value="###">--新闻媒体--</option>
        <option value="http://www.people.com.cn/">人民网</option><option value="http://www.xinhuanet.com/">新华网</option><option value="http://www.cctv.com/">央视网</option><option value="https://www.dahe.cn/">大河网</option><option value="http://www.jzrb.com/">焦作网</option>        </select>
      <select class="yqt no_mar" name="">
        <option value="###">--地方党报--</option>
        <option value="http://bjrb.bjd.com.cn/html/2019-08/23/node_1.htm">北京日报</option><option value="http://epaper.tianjinwe.com/tjrb/html/2019-08/23/node_1.htm?v=1">天津日报</option><option value="http://hbrb.hebnews.cn/pc/paper/layout/201908/23/node_01.html">河北日报</option><option value="http://epaper.sxrb.com/index_sxrb.shtml">山西日报</option><option value="http://szb.northnews.cn/nepaper/nmgrb/html/2017-04/27/node_2.htm">内蒙古日报</option><option value="http://jlrbszb.cnjiwang.com/pc/paper/layout/201908/23/node_01.html">吉林日报</option><option value="http://xh.xhby.net/mp3/pc/layout/201908/23/l1.html">新华日报</option>        </select>
    </div>

    <div class="ft-end2">
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            小绵羊智能科技
          </template>
          <ul class="under-nav-item">
            <li class=""><a href="/about" class="">关于我们</a></li>
            <li class=""><a href="/contact" class="">联系我们</a></li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="支持">
          <ul class="under-nav-item">
            <li class=""><a href="/service" >售后服务</a></li>
            <li class=""><a href="/service" class="">售后政策</a></li>
            <li class=""><a href="/repair" >产品维修</a></li>
            <li class=""><a href="/mend/query" >维修查询</a></li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="微信公众号">
          <div class="tc">
            <!--<img width="160" v-if="qrCodes[0]" :src="SERVER_HOST+'/file/downloadFile/'+qrCodes[0].image">-->
          </div>
        </el-collapse-item>
      </el-collapse>
      <div class="tc pt15">
        <span class="copyright">Copyright © 2017 Anyikang.com 版权所有</span>
      </div>
    </div>

    <section class="grid">
      <div class="ft-main">
        <div class="ft-col">
          <h3>智引科技</h3>
          <ul class="under-nav-item">
            <li class=""><a href="/about" class="">关于我们</a></li>
            <li class=""><a href="/contact" class="">联系我们</a></li>
          </ul>
        </div>

        <div class="ft-col">
          <h3>支持</h3>
          <ul class="under-nav-item">
            <li class=""><a href="/service" class="router-link-active">售后服务</a></li>
            <li class=""><a href="/service" class="">售后政策</a></li>
            <li class=""><a href="/repair" target="_blank">
              产品维修
            </a></li>
            <li class=""><a href="/mend/query" target="_blank">
              维修查询
            </a></li>
          </ul>
        </div>


        <div class="ft-col">
          <h3 class="caca">微信公众号</h3>
          <ul class="under-nav-item">
            <li class="wx-qr"><img v-if="qrCodes[0]" :src="SERVER_HOST+'/file/downloadFile/'+qrCodes[0].image"></li>
          </ul>
        </div>
      </div>
      <div class="ft-end">
        <span class="copyright">Copyright © 2017 Anyikang.com 版权所有</span>
        <span class="icp xs-hide"><a href="http://www.miitbeian.gov.cn/" target="_blank">
          ICP证：京B2-20080101</a></span>
        <span class="icp xs-hide fr"><a href="" target="_blank">
          京公网安备 11010102003616号</a></span>
      </div>
    </section>
  </footer>
</template>
<script>
    // import {SERVER_HOST} from '../../common/portConfig'
    // import {qrCodeLists} from '../../api/web-api/index'
    export default {
        components:{
        },
        data(){
            return{
                // SERVER_HOST:SERVER_HOST,
                qrCodes:[],
                pageNum: 1,
                pageSize: 15,
            }
        },
        // methods: {
        //     getQrCode() {
        //         let para = {
        //             pageNum: this.pageNum,
        //             pageSize: this.pageSize
        //         };
        //         var $this = this;
        //         qrCodeLists(para).then((res) => {
        //         if (res.data.code===1) {
        //             if (res.data.data.records) {
        //                 $this.qrCodes = res.data.data.records;
        //             }
        //         }
        //         else{
        //                 that.$message({
        //                     message: res.data.msg,
        //                     type: 'error'
        //                 });
        //             }
        //             console.log($this.qrCodes)
        //         })
        //     },
        // },
        // created() {
        //     this.getQrCode();
        // }
    }
</script>
<style scoped>
  /*@import "../assets/css/reset.css";*/
  /*@import "../assets/css/style.css";*/
  /*@import "../assets/css/component.css";*/

  .ft{width: 100%;
    min-width: 1200px;
    background: #AD0C1D;
    /*background-color: #252525;*/
    /*margin-top: 50px;*/
    /*padding: 0 50px;*/
    box-sizing: border-box;
  }

  .yqlj .yqt{width:250px;margin-right:28px;background:#fafafa;border:1px solid #e8e8e8;padding:6px 8px;margin-top: 20px}

  .foot{background:#AD0C1D;color:#fff;padding-bottom:10px;padding-top:20px;}
  .foot a{color:rgb(211, 211, 211);text-decoration:none}
  .foot a:hover{color:#fff}
  /*@media screen and (min-width:375px) and (max-width:413px){*/
   /*.ft{*/
     /*padding-bottom: 74px;*/
   /*}*/
  /*}*/
  /*@media (min-height: 736px) {*/
    /*.ft{*/
      /*padding-bottom: 74px;*/
    /*}*/
  /*}*/
  /*@media (min-height: 812px) {*/
    /*.ft{*/
      /*padding-bottom: 100px;*/
    /*}*/
  /*}*/
  @media (max-width: 768px) {
    .ft{
      padding-bottom: 74px;
    }
    .banr, .ft, .hd, .page {
      min-width: 320px;
      /*padding: 0;*/
    }
    .icp{
      display: none;
    }
    .grid {
      display: none;
    }
    .el-collapse {
      border-top: none;
      border-bottom: 1px solid #fff;
    }
    .under-nav-item li a{
      color: #fff;
    }
  }
  @media (min-width: 768px){
    .ft-main .ft-col:last-child{
      text-align: right;
    }
    .ft-main .ft-col:nth-child(2){
      text-align: center;
    }
    .ft-end span:nth-child(2){
      margin-left: 270px;
    }
    .caca{
      padding-right: 45px !important;
    }
    .ft-end2,.el-collapse{
      display: none;
    }
  }
  .grid {
    width: 1190px;
    margin: 0 auto;
  }
  .zh .ft-main {
    font-size: 1.35rem;
    color: #fff;
    padding: 30px 0;
    line-height: 2em;
  }
  .ft-col {
    float: left;
    width: 33.33%;
    padding: 0 10px;
  }
  .ft-main h3 {
    color: #fff;
    font-size: 1.5rem;
    padding: 30px 0 0 0px;
    margin-bottom: 25px;
  }
  .ft-main a {
    color: #fff;
  }
  .ft-main ul li{
    margin-bottom: 20px;
  }
  .ft-main ul li a{
    color: #cfe8f3;
  }
  .ft-end,.ft-end2 {
    clear: both;
    padding: 15px 15px 20px 10px;
    font-size: 1.1rem;
    color: #fff;
    border-top: 1px solid #fff;
  }
  .icp {
    margin-left: 30px;
  }
  .icp{
    margin-left: 30px;
  }

  .icp a{
    color: #dff0f7;
  }
  .wx-qr img {
    width: 160px;
  }

</style>
