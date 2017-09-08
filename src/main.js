// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引用路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引用store from vuex
import store from './store'
import App from './App.vue'
import routes from './config/routes'

// 使用配置文件规则
const router = new VueRouter({
  // mode: 'history',
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // inject store to all children
  render: (h) => h(App)
})
