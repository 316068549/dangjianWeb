import Layout from '../../views/layout/Layout'
import homePage from '../../views/home/HomePage'
import Index from '../../views/home/Index'
import NewsDetail from '../../views/home/NewsDetail'
import Notice from '../../views/home/Notice'
import Gongshi from '../../views/home/Gongshi'


export default {
  path: '/home',
  redirect: '/home/homePage',
  component:Layout,
  meta: { role: ['Buyer'] },
  children:[
    {
      path: 'homePage',
      title: '主页',
      meta: { role: ['Buyer'] },
      component: homePage,
        children: [
            {path: '', component: Index},
            {path: 'news', component: NewsDetail},
            {path: 'notice', component: Notice},
            {path: 'gongshi', component: Gongshi},
            ],
      hidden: true
    },
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
