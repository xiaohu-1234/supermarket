import Vue from 'vue';
import App from './App.vue';
import ElmentUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import {getToken} from './apis/apis'
import store from './store';
import './assets/styles/main.css'
//echarts
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

Vue.use(ElmentUi)
Vue.config.productionTip = false
//路由拦截
router.beforeEach((to,from,next)=>{
  //拦截所有不是登录页面的路由
  if(to.path != '/'){
    getToken(localStorage.getItem('token')).then(res => {
      if(res.data.code == 1){
        next('/')
      }else{
        next()
      }
    }) 
  }else{
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

