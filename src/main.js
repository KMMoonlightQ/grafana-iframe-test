import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import GrafanaApp from './GrafanaApp.vue'
import CustomTable from './CustomTable.vue'
import VueRouter from 'vue-router'

Vue.use(ElementUI)

const routes = [
  { path: '/', component: CustomTable },
  { path: '/grafana', component: GrafanaApp },
]

const router = new VueRouter({
  mode: 'history',
  routes, // (缩写) 相当于 routes: routes
})

Vue.use(VueRouter)

const app = new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
})
