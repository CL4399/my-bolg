import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


NProgress.configure({
  showSpinner: false
})
router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
});

router.afterEach(transition => {
  NProgress.done();
});
Vue.use(ElementUI);
Vue.config.productionTip = false
import VueParticles from 'vue-particles'

Vue.use(VueParticles)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')