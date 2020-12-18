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
import Elegants from '../../views/home/elegants'
import Eelegantdetail from '../../views/home/elegantdetail'
import guide from '../../views/home/guide'
import danggui from '../../views/rules/dangGui'
import dangZhang from '../../views/rules/dangZhang'
import fanFu from '../../views/rules/fanFu'
import guidedetail from '../../views/home/guidedetail'
import Detail from '../../views/rules/detail'
import shuju from '../../views/home/shuju'
import bigdata from '../../views/home/bigData'


export default {
  path: '*',
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
            {path: 'gongshi', component: Gongshi},
            {path: 'question', component: Question},
            {path: 'birthlist', component: Birthlist},
            {path: 'newslist', component: NewsList},
            {path: 'pictures', component: Pictures},
            {path: 'elegant', component: Elegants},
            {path: 'elegantdetail', component: Eelegantdetail},
            {path: 'guide', component: guide},
            {path: 'guidedetail/:id', component: guidedetail},
            {path: 'detail/:id', component: Detail},
            {path: 'shuju', component: shuju},
            {path: 'bigdata', component: bigdata},
            {path: 'danggui', component: danggui},
            {path: 'dangzhang', component: dangZhang},
            {path: 'fanfu', component: fanFu},
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
