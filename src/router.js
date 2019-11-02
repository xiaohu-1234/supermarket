import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login';

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Login},
    {
      path: '/home',
      name :'home',
      component: ()=>import('./views/Home'),
      children:[
        {
          path:'/home/picman',
          name :'picman',
          component:()=>import('./views/picman/PicMan.vue')
        },
        {
          path:'/home/addpic',
          name :'addpic',
          component:()=>import('./views/picman/AddPic.vue')
        },
        {
          path:'/home/kuchuman',
          name :'kuchuman',
          component:()=>import('./views/kuchu/KuchuMan.vue')
        },
        {
          path:'/home/addkuchu',
          name :'addkuchu',
          component:()=>import('./views/kuchu/AddKuchu.vue')
        },
        {
          path:'/home/salelist',
          name :'salelist',
          component:()=>import('./views/shipment/SaleList.vue')
        },
        {
          path:'/home/shipment',
          name :'shipment',
          component:()=>import('./views/shipment/Shipment.vue')
        },
        {
          path:'/home/degeneration',
          name :'degeneration',
          component:()=>import('./views/shipment/Degeneration.vue')
        },
        {
          path:'/home/salestatistic',
          name :'salestatistic',
          component:()=>import('./views/statistics/Salestatistics.vue')
        },
        {
          path:'/home/incomingstatustic',
          name :'incomingstatustic',
          component:()=>import('./views/statistics/Incomingstatistics.vue')
        },
        {
          path:'/home/accountman',
          name :'accountman',
          component:()=>import('./views/account/AccountMan.vue')
        },
        {
          path:'/home/addaccount',
          name :'addaccount',
          component:()=>import('./views/account/AddAccount.vue')
        },
        {
          path:'/home/modifypwd',
          name :'modifypwd',
          component:()=>import('./views/account/ModifyPwd.vue')
        },
        {
          path:'/home/memberman',
          name :'memberman',
          component:()=>import('./views/member/MemberMan.vue')
        },
        {
          path:'/home/addmember',
          name :'addmember',
          component:()=>import('./views/member/AddMember.vue')
        },
        {
          path:'/home/upload',
          component:()=>import('./views/upload/Upload.vue')
        }
      ]
    },
    
  ]
})
