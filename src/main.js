import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css';
import filter from './common/filter'
import util from './common/util'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
// import echarts from 'echarts'
Vue.use(preview)
// import 'swiper/dist/css/swiper.css';
var  echarts = require('echarts');

Vue.prototype.echarts = echarts

import {
    Swiper as SwiperClass,
    Pagination,   //使用那个组件就在这里面添加
    Mousewheel,
    Autoplay,
    Navigation,
    EffectFade,
} from "swiper/core";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
import 'swiper/swiper-bundle.css'
//这里面对应上面进行添加
SwiperClass.use([Pagination, Mousewheel, Autoplay,Navigation,EffectFade]);
Vue.use(getAwesomeSwiper(SwiperClass));
Vue.use(ElementUI);

// 全局导入过滤器
Object.keys(filter).forEach(key => Vue.filter(key, filter[key]))
//查看页面日期格式化
Vue.filter("date_from_unix", unixTime => {
    if(unixTime){
        unixTime = unixTime.replace(/-/g,"/");
        unixTime = unixTime.replace('T',' ');
        unixTime = unixTime.substring(0,19);
        return util.formatDate.format(new Date((unixTime)), 'yyyy-MM-dd')
    }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
