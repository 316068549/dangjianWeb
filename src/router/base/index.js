import Loginlayout from '../../views/layout/Loginlayout'
import login from '../../views/login/Login'


export default {
  path: '/',
  redirect: '/login',
  component:Loginlayout,
  children:[
    {
      path: 'login',
      title: '登录',
      component: login,
      hidden: true
    },
  ]
}
