<template>
  <div class="bon">
    <a href="list.asp?cid=99" target="_blank" class="xxzl"><img height="300px" src="../../assets/img/222222.jpg"></a>
    <div style="overflow: hidden;">
      <div id="index">
        <!--<swiper :options="swiperOption">-->
        <!--<swiper-slide v-if="Excellentemberslist" v-for="slide of Excellentemberslist" :key="slide.id">-->
        <!--<img :src="slide.imgUrl" width="100%" class="imgHeight"/>-->
        <!--</swiper-slide>-->
        <!--<div class="swiper-pagination" slot="pagination"></div>-->
        <!--</swiper>-->
        <!--<img :src="require('../../assets/images/banner1.jpg')" alt="">-->
        <!--<img src="http://192.168.1.151:8081/file/downloadFile/3cf28226-2bb3-4c6c-a0ba-b84fa5100279.jpg" alt="">-->
        <swiper :options="swiperOption" ref="mySwiper" class="swiperBox">
          <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" >
            <a href="javascript:;" @click="goPage(index)">
              <img :src="SERVER_HOST+slide.fimg_src"  >
              <div class="jieshao">{{slide.flink}}</div>
            </a>
            <!--<img :src="SERVER_HOST+'/file/downloadFile/'+slide.image" >-->
          </swiper-slide>
          <!--<div class="swiper-pagination "  slot="pagination"></div>-->
          <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-black" slot="button-next"></div>

        </swiper>
        <!--<div>-->
        <!--<swiper :options="swiperOption" ref="mySwiper" class="visible-sm">-->
        <!--<swiper-slide v-for="(slide, index) in swiperSlides2" :key="index" >-->
        <!--<img :src="slide.image" >-->
        <!--&lt;!&ndash;<img :src="SERVER_HOST+'/file/downloadFile/'+slide.image" >&ndash;&gt;-->
        <!--</swiper-slide>-->
        <!--<div class="swiper-pagination "  slot="pagination"></div>-->
        <!--</swiper>-->
        <!--</div>-->
      </div>
      <!--右侧新闻和动态模块-->
      <div class="tab_new_box">
        <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i>党建要闻  </span>
            <div class="new_container" style="display: block;">
              <ul>
                <li v-for="(item,index) in newslist">
                  <router-link :to="{path:'/home/detail/'+item.id, query: { type: 'newslist' }}" >
                    <a >{{item.title}}</a>
                  </router-link>
                  <!--<a href="/index.php/home/content/index/aid/2441.html">-->
                                    <!--{{item.title}}</a>-->
                </li>
                           </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="通知公告">
            <div class="new_container" style="display: block;">
             <ul>
                <li v-for="(item,index) in newslist2">
                  <router-link :to="{path:'/home/detail/'+item.id, query: { type: 'notices' }}" >
                    <a >{{item.title}}</a>
                  </router-link>
                </li>
                           </ul>
            </div>
          </el-tab-pane>
          <!--<el-tab-pane label="角色管理">角色管理</el-tab-pane>-->
          <!--<el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>-->
        </el-tabs>
      </div>
      <!--右侧新闻和动态模块-->
    </div>
    <!--新闻模块1-->
    <div class="ht20"></div>
    <div class="box">
      <div class="new_list">
        <div class="new_tit">
          <h3><i class="icon iconfont icon-danghui-copy"></i>党务公开</h3>
          <span class="more">
            <router-link to='/home/gongshi' >
                        <a >更多</a>
                    </router-link>
            <!--<a href="/index.php/home/list/index/sid/19.html">更多</a>-->
          </span>
          <div class="clear"></div>
        </div>
        <ul>
          <li v-for="item in newslist3">
            <router-link :to="{path:'/home/detail/'+item.id, query: { type: 'gongshi' }}" >
              <a >{{item.title}}</a>
            </router-link>
          </li>
        
          	</ul>
      </div>
      <div class="new_list">
        <div class="new_tit">
          <h3><i class="icon iconfont icon-danghui-copy"></i>办事指南</h3>
          <span class="more">   <router-link to='/home/guide' >
                        <a >更多</a>
                    </router-link></span>
          <div class="clear"></div>
        </div>
        <ul>
           <li v-for="item in newslist4">
             <router-link :to="{path:'/home/detail/'+item.id, query: { type: 'guide' }}" >
               <a >{{item.title}}</a>
             </router-link>
          </li>
        	
        </ul>
      </div>
      <div class="new_list no_mar">
        <div class="new_tit">
          <h3><i class="icon iconfont icon-danghui-copy"></i>党规党纪</h3>
          <span class="more">   <router-link to='/home/danggui' >
                        <a >更多</a>
                    </router-link></span>
          <div class="clear"></div>
        </div>
        <ul>
           <li v-for="item in newslist4">
             <router-link :to="{path:'/home/detail/'+item.id, query: { type: 'danggui' }}" >
               <a >{{item.title}}</a>
             </router-link>
          </li>
        	
        </ul>
      </div>
      <div class="clear"></div>
    </div>
    <!--新闻模块2-->
    <div class="ht"></div>
    <!--<div class="box">-->
      <!--<div class="banner_img">-->
        <!--<a href="http://www.jzdj.org/" target="_blank">-->
          <!--<img src="../../assets/img/5d565aca5c170.jpg">-->
        <!--</a>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="ht20"></div>-->
    <!--<div class="box">-->
      <!--<div class="new_list">-->
        <!--<div class="new_tit">-->
          <!--<h3><i class="icon iconfont icon-danghui-copy"></i>公务员工作</h3>-->
          <!--<span class="more"><a href="/index.php/home/list/index/sid/22.html">更多</a></span>-->
          <!--<div class="clear"></div>-->
        <!--</div>-->
        <!--<ul>-->
          <!--<li>-->
            <!--<a href="http://www.wsbm.jzrsks.com/cjcx/2020/202/Default.aspx" target="_blank">	                    	                    河南省2020年统一考试录用公务员焦作市...</a>-->
          <!--</li><li>-->
          <!--<a href="http://www.scs.gov.cn/zcfg/202003/t20200313_16203.html" target="_blank">	                    	                    公务员范围规定</a>-->
        <!--</li><li>-->
          <!--<a href="http://www.scs.gov.cn/zcfg/202003/t20200313_16204.html" target="_blank">	                    	                    公务员登记办法</a>-->
        <!--</li><li>-->
          <!--<a href="http://www.scs.gov.cn/zcfg/202003/t20200313_16205.html" target="_blank">	                    	                    公务员职务、职级与级别管理办法</a>-->
        <!--</li><li>-->
          <!--<a href="http://www.scs.gov.cn/zcfg/202003/t20200313_16206.html" target="_blank">	                    	                    参照《中华人民共和国公务员法》管理的单位...</a>-->
        <!--</li><li>-->
          <!--<a href="http://www.scs.gov.cn/zcfg/202001/t20200108_16198.html" target="_blank">	                    	                    公务员录用规定</a>-->
        <!--</li>			</ul>-->
      <!--</div>-->
      <!--<div class="new_list">-->
        <!--<div class="new_tit">-->
          <!--<h3><i class="icon iconfont icon-danghui-copy"></i>党员教育</h3>-->
          <!--<span class="more"><a href="/index.php/home/list/index/sid/30.html">更多</a></span>-->
          <!--<div class="clear"></div>-->
        <!--</div>-->
        <!--<ul>-->
          <!--<li>-->
            <!--<a href="/index.php/home/content/index/aid/1771.html">-->
              <!--2019年12月焦作市党员干部远程教育学...</a>-->
          <!--</li><li>-->
          <!--<a href="/index.php/home/content/index/aid/1770.html">-->
            <!--2019年11月焦作市党员干部远程教育学...</a>-->
        <!--</li><li>-->
          <!--<a href="/index.php/home/content/index/aid/1769.html">-->
            <!--2019年10月焦作市党员干部远程教育学...</a>-->
        <!--</li><li>-->
          <!--<a href="/index.php/home/content/index/aid/1228.html">-->
            <!--2019年9月焦作市党员干部远程教育学习...</a>-->
        <!--</li><li>-->
          <!--<a href="/index.php/home/content/index/aid/1088.html">-->
            <!--2019年8月焦作市党员干部远程教育学习...</a>-->
        <!--</li><li>-->
          <!--<a href="/index.php/home/content/index/aid/1087.html">-->
            <!--2019年7月焦作市党员干部远程教育学习...</a>-->
        <!--</li>			</ul>-->
      <!--</div>-->
      <!--<div class="new_list no_mar">-->
        <!--<div class="new_tit">-->
          <!--<h3><i class="icon iconfont icon-danghui-copy"></i>廉政之窗</h3>-->
          <!--<span class="more"><a href="/index.php/home/list/index/sid/27.html">更多</a></span>-->
          <!--<div class="clear"></div>-->
        <!--</div>-->
        <!--<ul>-->
          <!--<li>-->
            <!--<a href="http://www.12371.cn/2019/01/06/ARTI1546779927287206.shtml" target="_blank">	                    	                    中共中央办公厅印发《中国共产党纪律检查机...</a>-->
          <!--</li><li>-->
          <!--<a href="http://news.12371.cn/2016/11/02/ARTI1478087905680175.shtml" target="_blank">	                    	                    中国共产党党内监督条例（全文）</a>-->
        <!--</li><li>-->
          <!--<a href="http://www.12371.cn/2018/08/27/ARTI1535321516261382.shtml" target="_blank">	                    	                    中共中央印发《中国共产党纪律处分条例》</a>-->
        <!--</li><li>-->
          <!--<a href="http://news.12371.cn/2015/10/22/ARTI1445481444215144.shtml" target="_blank">	                    	                    中国共产党廉洁自律准则</a>-->
        <!--</li><li>-->
          <!--<a href="http://www.12371.cn/2019/09/04/ARTI1567597631554709.shtml" target="_blank">	                    	                    《中国共产党问责条例》修订前后对照表</a>-->
        <!--</li><li>-->
          <!--<a href="http://www.12371.cn/2019/09/04/ARTI1567592644876586.shtml" target="_blank">	                    	                    中共中央印发《中国共产党问责条例》</a>-->
        <!--</li>			</ul>-->
      <!--</div>-->
      <!--<div class="clear"></div>-->
    <!--</div>-->
    <div class="ht20"></div>
    <div class="box">
      <!--<el-carousel :interval="114000" type="card" height="300px" indicator-position="none" autoplay="false">-->
        <!--<el-carousel-item v-for="item in 6" :key="item">-->
          <!--<h3 class="medium">{{ item }}</h3>-->
        <!--</el-carousel-item>-->
      <!--</el-carousel>-->
      <div class="video_tit_bg">
        <div class="new_tit">
          <h3><i class="icon iconfont icon-danghui-copy"></i>优秀党员风采</h3>
          <span class="more">   <router-link to='/home/elegant' >
                        <a >更多</a>
                    </router-link></span>
          <div class="clear"></div>
        </div>
      </div>
      <!-- <div class="video_4">
              <a href="http://www.hndyjyfw.gov.cn/courseDetail.html?id=367a6c24-e18f-4edb-b3fc-794fb9fa718c&amp;type=dfyj&amp;city=jiaozuo" target="_blank">
                  <img src="/Public/attached/2019/09/06/5d71ecf758522.jpg">
                                      <p>《先锋》电视栏目</p>
                  <div class="bg000"></div>
              </a>
              <div id="caseBlanche">
                  <a href="http://www.hndyjyfw.gov.cn/courseDetail.html?id=367a6c24-e18f-4edb-b3fc-794fb9fa718c&amp;type=dfyj&amp;city=jiaozuo" target="_blank">                        <div id="rond">
                          <div id="test"></div>
                      </div>
                      <div id="load"></div>
                  </a>
              </div>
          </div><div class="video_4">
              <a href="http://www.hndyjyfw.gov.cn/courseDetail.html?id=82d68411-6d16-4e4b-9b28-0ce9f0ac7e82&amp;type=dfyj&amp;city=jiaozuo" target="_blank">
                  <img src="/Public/attached/2019/09/06/5d72242895e65.jpg">
                                      <p>《“板凳局长”杨法谊》</p>
                  <div class="bg000"></div>
              </a>
              <div id="caseBlanche">
                  <a href="http://www.hndyjyfw.gov.cn/courseDetail.html?id=82d68411-6d16-4e4b-9b28-0ce9f0ac7e82&amp;type=dfyj&amp;city=jiaozuo" target="_blank">                        <div id="rond">
                          <div id="test"></div>
                      </div>
                      <div id="load"></div>
                  </a>
              </div>
          </div><div class="video_4">
              <a href="http://chuxin.people.cn/GB/428819/428859/index.html" target="_blank">
                  <img src="/Public/attached/2019/09/06/5d71fc1d8f65b.jpg">
                                      <p>“不忘初心 牢记使命”主题教育微视频作品展示</p>
                  <div class="bg000"></div>
              </a>
              <div id="caseBlanche">
                  <a href="http://chuxin.people.cn/GB/428819/428859/index.html" target="_blank">                        <div id="rond">
                          <div id="test"></div>
                      </div>
                      <div id="load"></div>
                  </a>
              </div>
          </div><div class="video_4">
              <a href="http://www.hndyjyfw.gov.cn/courseDetail.html?id=399f978c-e4a7-4771-ab42-4afe85379a3f&amp;type=hnyj&amp;idx1=0&amp;idx2=0" target="_blank">
                  <img src="/Public/attached/2019/09/06/5d71f95729d16.jpg">
                                      <p>我是援疆人</p>
                  <div class="bg000"></div>
              </a>
              <div id="caseBlanche">
                  <a href="http://www.hndyjyfw.gov.cn/courseDetail.html?id=399f978c-e4a7-4771-ab42-4afe85379a3f&amp;type=hnyj&amp;idx1=0&amp;idx2=0" target="_blank">                        <div id="rond">
                          <div id="test"></div>
                      </div>
                      <div id="load"></div>
                  </a>
              </div>
          </div><div class="video_4">
              <a href="http://www.hndyjyfw.gov.cn/courseDetail.html?id=27f96705-2889-49c8-81d1-2e711a2f2838&amp;type=dfyj" target="_blank">
                  <img src="/Public/attached/2019/09/06/5d71ef8961580.jpg">
                                      <p>支部规范化—换届选举</p>
                  <div class="bg000"></div>
              </a>
              <div id="caseBlanche">
                  <a href="http://www.hndyjyfw.gov.cn/courseDetail.html?id=27f96705-2889-49c8-81d1-2e711a2f2838&amp;type=dfyj" target="_blank">                        <div id="rond">
                          <div id="test"></div>
                      </div>
                      <div id="load"></div>
                  </a>
              </div>
          </div><div class="video_4">
              <a href="http://www.hndyjyfw.gov.cn/epg_dfyj.html?city=jiaozuo" target="_blank">
                  <img src="/Public/attached/2019/09/06/5d71f70d13547.jpg">
                                      <p>焦作市远程教育平台课件专题</p>
                  <div class="bg000"></div>
              </a>
              <div id="caseBlanche">
                  <a href="http://www.hndyjyfw.gov.cn/epg_dfyj.html?city=jiaozuo" target="_blank">                        <div id="rond">
                          <div id="test"></div>
                      </div>
                      <div id="load"></div>
                  </a>
              </div>
          </div><div class="video_4">
              <a href="http://www.hndyjyfw.gov.cn/courseDetail.html?id=aca1fa15-27c1-4a1f-be81-984e9bdf932f&amp;type=dfyj&amp;city=jiaozuo" target="_blank">
                  <img src="/edit/uploadfile/2018726103442704.jpg">
                                      <p>“不忘初心 牢记使命”焦作市庆祝建党98周年表彰晚会一堂用艺...</p>
                  <div class="bg000"></div>
              </a>
              <div id="caseBlanche">
                  <a href="http://www.hndyjyfw.gov.cn/courseDetail.html?id=aca1fa15-27c1-4a1f-be81-984e9bdf932f&amp;type=dfyj&amp;city=jiaozuo" target="_blank">                        <div id="rond">
                          <div id="test"></div>
                      </div>
                      <div id="load"></div>
                  </a>
              </div>
          </div> -->
      <div id="marquee1" class="marqueeleft">
        <!--<div style="width:8000px;">-->
        <div style="width:3000px;">
          <ul id="marquee1_1"  ref="con1a" :class="{anim:animate==true}" @mouseenter="mEnter" @mouseleave="mLeave" >
            <div class="video_4" v-for='item in items'>
              <router-link :to="{path:'/home/detail/'+item.id, query: { type: 'elegant' }}" >
                <a href="javascript:;" target="_blank">
                  <img :src="SERVER_HOST+item.litpic">
                  <p class="text-center">{{item.title}}</p>
                  <div class="bg000"></div>
                </a>
              </router-link>
              <!---->
              <!--<a href="http://www.hndyjyfw.gov.cn/courseDetail.html?id=367a6c24-e18f-4edb-b3fc-794fb9fa718c&amp;type=dfyj&amp;city=jiaozuo" target="_blank">-->
                <!--<img :src="SERVER_HOST+item.litpic">-->
                <!--<p class="text-center">{{item.title}}</p>-->
                <!--<div class="bg000"></div>-->
              <!--</a>-->
              <!--<div id="caseBlanche">-->
                <!--<a href="http://www.hndyjyfw.gov.cn/courseDetail.html?id=367a6c24-e18f-4edb-b3fc-794fb9fa718c&amp;type=dfyj&amp;city=jiaozuo" target="_blank">			                        <div id="rond">-->
                  <!--<div id="test"></div>-->
                <!--</div>-->
                  <!--<div id="load"></div>-->
                <!--</a>-->
              <!--</div>-->
            </div>
          </ul>
        </div>
      </div>



      <div class="clear"></div>
    </div>
    <div  style="height: 50px"></div>
  <!--<div class="aaaa">-->
    <!--<div class="xxxxx">-->
      <!--<el-carousel height="850px">-->
        <!--<el-carousel-item v-for="item in 4" :key="item">-->
          <!--<img src="../../assets/images/band.jpg"/>-->
        <!--</el-carousel-item>-->
      <!--</el-carousel>-->
    <!--</div>-->
  <!--</div>-->
  </div>
</template>

<script>
    import {SERVER_HOST} from '../../common/portConfig'
    // import {bannerLists} from '../../api/web-api/index'
    import {findBanner} from "../../api/web-api/cates-api";
        import {findNews} from "@/api/web-api/companyNews-api";
//  import {$} from 'jquery'

   import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: 'app',
        data () {
            return {
                SERVER_HOST:SERVER_HOST,
                pageNum: 1,
                animate:false,
                items:[ //消息列表对应的数组
                    // {name:"马云"},
                    // {name:"雷军"},
                    // {name:"王勤1"},
                    // {name:"王勤2"},
                    // {name:"王勤3"},
                    // {name:"王勤4"},
                    // {name:"王勤5"},
                ],
                pageSize: 15,
                newslist:[],
                newslist2:[],
                newslist3:[],
                newslist4:[],
                newslist5:[],
                swiperOption: {
                    notNextTick: true,
                    //循环
                    loop:true,
                    //设定初始化时slide的索引
                    initialSlide:0,
                    //自动播放
                    autoplay:true,
                    // autoplay: {
                    //     delay: 3000,
                    //     stopOnLastSlide: false,
                    //     disableOnInteraction: true,
                    // },
                    // 设置轮播
//          effect : 'flip',
                    //滑动速度
                    speed:200,
                    //滑动方向
                    direction : 'horizontal',
                    //小手掌抓取滑动
                    // grabCursor : true,
                    //滑动之后回调函数
                    on: {
                        slideChangeTransitionEnd: function(){
                            // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
                        },
                    },
                    //左右点击
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    //分页器设置
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true
                    }
                },
                swiperSlides: [
                   // {
                   //     title:'我市举行第三季度基层党建拉练观摩，市委常委、...',
                   //     image:require('../../assets/img/banner1.jpg')
                   // },
                   // {
                   //     title:'我市举行第三季度基层党建拉练观摩，市委常委、...',
                   //     image:require('../../assets/img/banner2.jpg')
                   // },
                   // {
                   //     title:'我市举行第三季度基层党建拉练观摩，市委常委、...',
                   //     image:require('../../assets/img/banner3.jpg')
                   // }
                ],
                swiperSlides2:[

                ]
            }
        },
        methods: {
            getAboutPage() {
                let that=this;
                let para = {
                    pageNum: 1,
                    pageSize: 10,
                    cateId: 27,
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
             getAboutPage2() {
                let that=this;
                let para = {
                    pageNum: 1,
                    pageSize: 10,
                    cateId: 28,
                }; 
                findNews(para).then(
                    (res) => {
                        if(res.code===1){
                            that.total = res.count;
                            that.newslist2 = res.data;
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
              getAboutPage3() {
                let that=this;
                let para = {
                    pageNum: 1,
                    pageSize: 10,
                    cateId: 29,
                }; 
                findNews(para).then(
                    (res) => {
                        if(res.code===1){
                            that.total = res.count;
                            that.newslist3 = res.data;
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
               getAboutPage4() {
                let that=this;
                let para = {
                    pageNum: 1,
                    pageSize: 10,
                    cateId: 30,
                }; 
                findNews(para).then(
                    (res) => {
                        if(res.code===1){
                            that.total = res.count;
                            that.newslist4 = res.data;
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
             getAboutPage5() {
                let that=this;
                let para = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    cateId: 31,
                };
                findNews(para).then(
                    (res) => {
               
                        if(res.code===1){
                            that.items = res.data;
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
            scroll(){
                let con1 = this.$refs.con1a;
                if(con1) con1.style.marginLeft='-280px';
                this.animate=!this.animate;
                var that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
                setTimeout(()=>{
                      that.items.push(that.items[0]);
                    that.items.shift();
                    con1.style.marginLeft='0px';
                    that.animate=!that.animate; // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
                },1000)
            },
            mEnter () {
                clearInterval(this.timer1)
            },
            mLeave () {
                this.timer1= setInterval(this.scroll,2000)
            },
            goPage(index){
                console.log(index);
                this.$router.push({path: '/home/birthlist'})
            },
            getBanner() {
               let para = {
                   id: 11,
               };
                findBanner(para).then((res) => {
                    let aa=[];
                    let bb=[];
                    if (res.code===1) {
                        if (res.data.flash) {
                          this.swiperSlides=res.data.flash;
                           // bb = res.data.slice(-3);
                            //res.data.forEach(function (currentValue, index) {
                             //   if (index < 3) {
                              //      aa[index] = currentValue;
                              //  }
                           // })
                        }
                    }else{
                        this.$message({
                            message: res.data.msg,
                            type: 'error'
                        });
                    }
               
                   console.log(this.swiperSlides)
                     //this.swiperSlides2=bb;
                })
            },
        },
        mounted() {
            this.timer1= setInterval(this.scroll,2000)
             this.getBanner();
             this.getAboutPage();
             this.getAboutPage2();
             this.getAboutPage3();
             this.getAboutPage4();
             this.getAboutPage5();
        },
        beforeDestroy() {
            clearInterval(this.timer1)
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .anim{
    transition: all 1s;
  }
  .tab_new_box {
    float: left;
    width: 440px;
    background: #fff;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item is-active{
    transform: scale(0.83) !important;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .ht20 {
    height: 20px;
  }
  .box {
    width: 1100px;
    margin: 0 auto;
  }
  .new_list {
    width: 350px;
    float: left;
    margin-right: 24px;
  }
  .new_tit{height:50px;background:#eeeeee;line-height:50px;padding-left:10px;text-align: left;}
  .new_tit h3{border-left:3px solid #d50f10;display:inline;font-size:18px;font-weight:normal;padding-left:8px;color:#d50f10;}
  .new_tit h3 i{color:#d50f10;font-size:20px;margin-right:5px;}
  .more{float:right;margin-right:15px;}
  .more a{color:#666;font-size:14px;}
  .more a:hover{color:#d50f10;}
  .new_list ul{margin-top:10px;text-align: left;}
  .new_list ul li{height:32px;line-height:32px;
    /*background:url(../img/grayIcon.jpg) no-repeat left center;*/
    padding-left:18px;overflow:hidden;}
  /*.new_list ul li:hover{background:url(../img/redIcon.jpg) no-repeat left center;}*/
  .new_list ul li b{color:#d50f10;}
  .new_list ul li a{font-size:15px;color:#333;}
  .new_list ul li a:hover{color:#d50f10;}
  .video_tit_bg{height:43px;line-height:45px;border-bottom:2px solid #ccc;}
  .video_tit{width:114px;height:45px;}
  .video_4{width:260px;float:left;background:#fff;margin:0px 10px;height:190px;margin-top:15px;position:relative;}
  .video_4 img{height:150px;width:260px;}
  .video_4 p{font-size:14px;padding-top:5px;line-height:22px;}

  .video_4 .bg000{position:absolute;background:#000;  fliter: alpha(opacity=30); background:rgba(0,0,0,.3); display:none; top:0px; left:10; z-index:1;width:260px;height:150px;padding:0px;}
  .video_4 #caseBlanche #test{height:8px;width:8px;position:absolute;background-color:#fff;border-radius:50%;top:0px;left:10px; z-index:2;cursor:pointer;}
  .video_4 #caseBlanche #rond{height:60px;width:60px;border:1px solid #fff;border-radius:50%;position:absolute;top:45px;left:38%;animation:rond 2s infinite;-webkit-animation:rond 2s infinite; z-index:2;cursor:pointer;}
  @keyframes rond {
    0% {transform:rotate(0deg);}
    100% {transform:rotate(360deg);}
  }
  @-webkit-keyframes rond {
    0% {-webkit-transform:rotate(0deg);}
    100% {-webkit-transform:rotate(360deg);}
  }
  .video_4 #caseBlanche #load{height:62px;width:62px;position:absolute;top:45px;left:38%;
    z-index:2;cursor:pointer;}

  .video_4 #caseBlanche{display:none;}


  .video_4:hover .bg000{display:block;}
  .video_4:hover #caseBlanche{display:block;}

  .marqueeleft{
    height:190px;
    width:1100px;
    overflow:hidden;
    margin:0px auto;
    /*border: 1px solid black;*/
  }
  .marqueeleft ul{float:left;}
  .xxzl {
    display: block;
    width: 1100px;
    height: 300px;
    overflow: hidden;
    img{
      text-align: center;
    }
    margin: 0px auto;
    margin-bottom: 15px;
  }
  .new_container ul {
    li{
      height: 42px;
      font-size: 16px;
      line-height: 42px;
      text-align:left;
      /*background: url(../img/redIcon.jpg) no-repeat left center;*/
      overflow: hidden;
      a{
        font-size: 18px;
        margin: 0;
        padding: 0;
        text-decoration: none;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
        color: rgb(51,51,51);
      }
    }
  }

  @media (min-width: 768px){
    .swiper-slide,.swiper-slide img{
      width:100%;
      max-height: 100%;
    }
    .bon{
      width: 1100px;
      margin: 0 auto;
    }
    #index{

      width: 640px;
      height: 385px;
      float: left;
      margin-right: 20px;
      background: #fff;
    }
  }
  @media (max-width: 768px){
    #index{
      width: 100%;
      /*height: 100%;*/
      overflow: hidden;
      /*padding-top: 80px;*/
    }
    .visible-sm {
      display: block !important;
    }
    .swiperBox{
      display: none;
    }
    .swiper-button-prev, .swiper-button-next {
      display: none;
      width: 20px;
      height: 20px;
      margin-top: -15px;
    }
    #index{
      /*padding-bottom: 200px;*/
      height: auto;
    }
    .swiper-slide,.swiper-slide img{
      width:100%;
     /*height: 100%;*/
    }
  }
  .visible-sm{
    display: none;
  }

  #index h1, h2 {
    font-weight: normal;
  }
  #index ul {
    list-style-type: none;
    padding: 0;
  }
  #index li {
    display: inline-block;
    margin: 0 10px;
  }
  #index a {
    color: #42b983;
  }

  /*.swiper-button-prev.swiper-button-black, .swiper-container-rtl .swiper-button-next.swiper-button-black {*/
    /*background-image: url("../../assets/img/left.png");*/
  /*}*/
  /*.swiper-button-next.swiper-button-black, .swiper-container-rtl .swiper-button-prev.swiper-button-black {*/
    /*background-image: url("../../assets/img/right.png");*/
  /*}*/
  @media (max-width: 767px){
    .swiper-button-prev, .swiper-button-next{
      background-size: 15px;
    }

  }

  /*//左右点击*/
  /*navigation: {*/
  /*nextEl: '.swiper-button-next',*/
  /*prevEl: '.swiper-button-prev',*/
  /*},*/
  /*//分页器设置*/
  /*pagination: {*/
  /*el: '.swiper-pagination',*/
  /*clickable :true*/
  /*}*/

  /*.el-carousel__item:nth-child(2n) {*/
    /*background-color: #99a9bf;*/
  /*}*/

  /*.el-carousel__item:nth-child(2n+1) {*/
    /*background-color: #d3dce6;*/
  /*}*/

</style>

