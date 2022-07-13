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
    path: '/form-placa',
    name: 'form_placa',
    component: () => import(/* webpackChunkName: "form_placa" */ '../modules/form-registro/FormPlaca.vue')
  },
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
