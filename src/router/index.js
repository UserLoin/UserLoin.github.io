import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/views/homepage/HomePage.vue'
import ProductOperation from '@/views/productServices/productOperation/ProductOperation.vue'
import BrandOperation from '@/views/productServices/brandOperation/BrandOperation.vue'
import AnchorOperation from '@/views/productServices/anchorOperation/AnchorOperation.vue'
import ChannelServices from '@/views/channelServices/ChannelServices.vue'
import ContactUs from '@/views/contactUs/ContactUs.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/homepage',
    },
    {
      path: '/homepage',
      component: Homepage
    },
    {
      path: '/brandOperation',
      component: BrandOperation
    },
    {
      path: '/productOperation',
      component: ProductOperation
    },
    {
      path: '/anchorOperation',
      component: AnchorOperation
    },
    {
      path: '/channelServices',
      component: ChannelServices
    },
    {
      path: '/contactUs',
      component: ContactUs
    }
  ]
})

// 重写 Vue-router 原型对象上的 push 函数
let originPush =  Router.prototype.push;  //备份原push方法
Router.prototype.push = function (location, resolve, reject){
  if (resolve && reject) {    //如果传了回调函数，直接使用
      originPush.call(this, location, resolve, reject);
  } else {                     //如果没有传回调函数，手动添加
      originPush.call(this, location, ()=>{}, ()=>{});
  }
}
