import Loginlayout from '../../views/layout/Loginlayout'
import login from '../../views/login/Login'


export default {
  path: '/login',
    redirect: '/login',
  component:Loginlayout,
  children:[
    {
      path: '/',
      title: '登录',
      component: login,
      hidden: true
    },
  ]
}
