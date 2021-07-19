import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import PasswordLogin from "../views/PasswordLogin";
import FaceLogin from "../views/FaceLogin";

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Login',
    component:Login,
    redirect:'/passwordLogin',
    children:[
      {
        path:'/passwordLogin',
        name:'passwordLogin',
        component:PasswordLogin
      },
      {
        path:'/faceLogin',
        name:'faceLogin',
        component: FaceLogin
      },
     ],
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
