// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'hui/dist/css/hui.min.css';
// import HUI from 'hui';
import Vue from 'vue';
//import fastClick from 'fastclick'
import VueRouter from 'vue-router';
import Navigation from 'vue-navigation';
import 'babel-polyfill';
import main from './main.vue';
import routes from './router';
import Vant from 'vant';
import 'vant/lib/index.css';
import { _setTitle } from '../../utils/setTitle'
Vue.prototype.$setTitle = _setTitle
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(Vant);
// import store from './store';

import M from 'moment'
Vue.prototype.M = M

import vConsole from '../../utils/vconsole'

Vue.config.productionTip = false;
//fastClick.attach(document.body);
VueRouter.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1);
};
// Vue.directive('title', {
//   inserted: function (el, binding) {
//     document.title = el.dataset.title
//   }
// })
const router = new VueRouter({
  mode: 'hash',   // 强制使用hash模式进行导航，不能指望服务器支持history
  routes
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

Vue.use(VueRouter);
Vue.use(Navigation, { router });
// Vue.use(HUI);
/* eslint-disable no-new */
new Vue({
  render: h => h(main),
  router,
}).$mount('#app');
!function(n){
  var  e=n.document,
    t=e.documentElement,
    i=375,
    d=i/100,
    o="orientationchange"in n?"orientationchange":"resize",
    a=function(){
      var n=t.clientWidth||320;n>720&&(n=720);
      t.style.fontSize=n/d+"px"
    };
  e.addEventListener&&(n.addEventListener(o,a,!1),e.addEventListener("DOMContentLoaded",a,!1))
}(window);
