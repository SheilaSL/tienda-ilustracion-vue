import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../layouts/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "tienda" */ '@/layouts/Shop.vue'),
  },
  {
    path: '/carritoCompra',
    name: 'CarritoCompra',
    component: () => import(/* webpackChunkName: "carritocompra" */ '../layouts/CarritoCompra.vue')
  },
  {
    path: '/formularioCompra',
    name: 'FormularioCompra',
    component: () => import(/* webpackChunkName: "formulariocompra" */ '@/layouts/FormularioCompra.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "registro" */ '@/layouts/Registro.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/layouts/Login.vue')
  },
  {
    path: '/compraconfirmacion',
    name: 'CompraConfirmacion',
    component: () => import(/* webpackChunkName: "login" */ '@/layouts/CompraConfirmacion.vue')
  },
  {
    path: '/miInformacion',
    name: 'AuthInfo',
    component: () => import(/* webpackChunkName: "login" */ '@/layouts/AuthInfo.vue')
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: () => import(/* webpackChunkName: "login" */ '@/layouts/Nosotros.vue')
  },
  {
    path: '/proceso',
    name: 'Proceso',
    component: () => import(/* webpackChunkName: "login" */ '@/layouts/Proceso.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
