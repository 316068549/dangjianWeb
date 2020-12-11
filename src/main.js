import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import 'swiper/dist/css/swiper.css';
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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
