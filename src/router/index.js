import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../modules/home/HomeView.vue')
  },
  {
    path: '/registro-placa',
    name: 'registro_placa',
    component: () => import(/* webpackChunkName: "registro_placa" */ '../modules/registro-placa/RegistroPlaca.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
