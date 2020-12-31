import Loginlayout from '../../views/layout/Loginlayout'
import login from '../../views/login/Login'
// import first from '../../views/test/first'


export default {
  path: '/login',
    redirect: '/login',
  component:Loginlayout,
  children:[
    {
      path: '/',
      title: '登录',
      component: login,
      // component: first,
      hidden: true
    },
  ]
}
