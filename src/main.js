// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueScrollTo from 'vue-scrollto';

import '@/common/style/base.css'
import '@/assets/font/font.css'

Vue.config.productionTip = false

// ja
// zh-CN
// en-US
if (!sessionStorage.getItem("currentLanguage")) {
  const currentLanguage = navigator.language || navigator.browserLanguage
  // sessionStorage.setItem("currentLanguage", currentLanguage)
  sessionStorage.setItem("currentLanguage", 'ja')

}

// 路由变化、滚动到最顶部
router.afterEach((to, from) => {
  let bodySrcollTop = document.body.scrollTop
  if (bodySrcollTop !== 0) {
    document.body.scrollTop = 0
    return
  }
  let docSrcollTop = document.documentElement.scrollTop
  if (docSrcollTop !== 0) {
    document.documentElement.scrollTop = 0
  }
})

// 监听路由变化、刷新跳转到首页
window.addEventListener('load', function () {
  // if (vue.$route.path !== '/') { // /date 表示日期选择路由
  //     vue.$router.replace('/') // 列表页面的路由
  // }
})

// 元素跳转数据配置
let scrollOptions = {
  container: "body", //滚动的容器
  duration: 500, //滚动时间
  easing: "ease", //缓动类型
  offset: -50, // 滚动时应应用的偏移量。此选项接受回调函数
  force: true, // 是否应执行滚动
  cancelable: true, // 用户是否可以取消滚动
  onStart: function(element) {
    // scrolling started
    // console.log('start',element)
  }, // 滚动开始时的钩子函数
  onDone: function(element) {
    // console.log('end',element)
    // scrolling is done
  }, // 滚动结束时候的钩子函数
  onCancel: false, // 用户取消滚动的钩子函数
  x: false, // 是否要在x轴上也滚动
  y: true    // 是否要在y轴上滚动
}
Vue.use(VueScrollTo, scrollOptions);

const vue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})