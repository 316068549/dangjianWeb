import Layout from '../../views/layout/Layout'
import homePage from '../../views/home/HomePage'
import Index from '../../views/home/Index'
import NewsDetail from '../../views/home/NewsDetail'
import Notice from '../../views/home/Notice'
import Gongshi from '../../views/home/Gongshi'
import Question from '../../views/home/questionnaire'
import NewsList from '../../views/home/NewsList'
import Birthlist from '../../views/home/BirthList'
import Pictures from '../../views/home/pictures'
import PictureDetail from '../../views/home/pictureDetail'
import Elegants from '../../views/home/elegants'
import Eelegantdetail from '../../views/home/elegantdetail'
import guide from '../../views/home/guideList'
import danggui from '../../views/rules/dangGui'
import dangZhang from '../../views/rules/dangZhang'
import fanFu from '../../views/rules/fanFu'
import study from '../../views/rules/study'
import jingcui from '../../views/rules/jingcui'
import yaolun from '../../views/rules/yaolun'
import zhuanti from '../../views/rules/zhuanti'
import tongzhan from '../../views/rules/tongzhan'
import guidedetail from '../../views/home/guidedetail'
import Detail from '../../views/rules/detail'
import Detail2 from '../../views/rules/detail2'
import shuju from '../../views/home/shuju'
import sanhui from '../../views/zuzhi/sanhui'
import sanhuilist from '../../views/zuzhi/sanhuiLists'
import liangxueLists from '../../views/zuzhi/liangxueLists'
import minzhuLists from '../../views/zuzhi/minzhuLists'
import xuanjuLists from '../../views/zuzhi/xuanjuLists'
import mailLists from '../../views/zuzhi/mailLists'
import juankuanLists from '../../views/zuzhi/juankuanLists'
import noticeList from '../../views/home/noticeList'
import planList from '../../views/zuzhi/planList'
import zuzhiDetail from '../../views/zuzhi/zuzhiDetail'
import xuanjuDetail from '../../views/zuzhi/xuanjuDetail'
import DangzhengDetail from '../../views/home/DangzhengDetail'
import bigdata from '../../views/home/bigData'
import changepwd from '../../views/user/changepwd'
import profile from '../../views/user/profile'
import tongxun from '../../views/home/tongxue'
import luntan from '../../views/home/luntans'
import test from '../../views/test/test'


export default {
  path: '*',
  //   path: '/home',
  redirect: '/home',
  component:Layout,
  children:[
    {
      path: 'home',
      title: '主页',
      meta: { role: ['Buyer'] },
      component: homePage,
        children: [
            {path: '', component: Index},
            {path: 'news', component: NewsDetail},
            {path: 'notice', component: Notice},
            {path: 'notices', component: noticeList},
            {path: 'gongshi', component: Gongshi},
            {path: 'question', component: Question},
            {path: 'birthlist', component: Birthlist},
            {path: 'birthdetail/:id', component: DangzhengDetail},
            {path: 'newslist', component: NewsList},
            {path: 'pictures', component: Pictures},
            {path: 'picdetail/:id', component: PictureDetail},
            {path: 'elegant', component: Elegants},
            {path: 'elegantdetail', component: Eelegantdetail},
            {path: 'guide', component: guide},
            {path: 'guidedetail/:id', component: guidedetail},
            {path: 'detail/:id', component: Detail},
            {path: 'detail2/:id', component: Detail2},
            {path: 'shuju', component: shuju},
            {path: 'bigdata', component: bigdata},
            {path: 'danggui', component: danggui},
            {path: 'dangzhang', component: dangZhang},
            {path: 'study', component: study},
            {path: 'tongzhan', component: tongzhan},
            {path: 'jingcui', component: jingcui},
            {path: 'yaolun', component: yaolun},
            {path: 'zhuanti', component: zhuanti},
            {path: 'dangzhang', component: dangZhang},
            {path: 'fanfu', component: fanFu},
            {path: 'sanhui', component: sanhui},
            {path: 'sanhuilist', component: sanhuilist},
            {path: 'minzhulist', component: minzhuLists},
            {path: 'liangxuelist', component: liangxueLists},
            {path: 'xuanjulist', component: xuanjuLists},
            {path: 'juankuanlist', component: juankuanLists},
            {path: 'maillist', component: mailLists},
            {path: 'zuzhidetail/:id', component: zuzhiDetail},
            {path: 'planlist', component: planList},
            {path: 'xuanjudetail/:id', component: xuanjuDetail},
            {path: 'liangxue', component: sanhui},
            {path: 'minzhu', component: sanhui},
            {path: 'xuanju', component: sanhui},
            {path: 'juankuan', component: sanhui},
            {path: 'mailbox', component: sanhui},
            {path: 'plan', component: sanhui},
            {path: 'changepwd', component: changepwd},
            {path: 'profile', component: profile},
            {path: 'tongxun', component: tongxun},
            {path: 'luntan', component: luntan},
            {path: 'test', component: test},
            ],
      hidden: true
    }
    // ,
    //   {
    //       path: 'rules',
    //       title: '主页',
    //       meta: {},
    //       component: homePage,
    //       children: [
    //           {path: 'danggui', component: guide},
    //       ],
    //       hidden: true
    //   },
  ]
    // children: [
    //     {path: '', component: Index},
    //     {path: '/about', component: About},
    //     {path: '/product/:id', component: Product},
    //     {path: '/service', component: Service},
    //     {path: '/company', component: companyNews},
    //     {path: '/repair', component:ApplyRepair },
    //     {path: '/mend', component: RepairHome,name: 'repair',
    //         children:[
    //             {path:'list/:mobile',component:RepairList},
    //             {path:'detail/:id',component:RepairDetail},
    //             {path:'query',component:RepairQuery}
    //         ]
    //     },
    //     {path: '/newslist', component: NewsList
    //         //     ,children:[
    //         //         {path:'newsdetail',component:NewsDetail}
    //         // ]
    //     },
    //     {path: '/newsdetail/:id', component: NewsDetail},
    //     {path:'/contact',component:Contact}
    //
    // ]
}
