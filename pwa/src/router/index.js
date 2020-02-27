import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import GameList from "../views/GameList";

Vue.use(VueRouter)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/games',
    name: 'gameList',
    component: GameList
  },
  {
    path: '/game/:gameId',
    name: 'game',
    component: Game
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/new',
    name: 'new-game',
    component: () => import(/* webpackChunkName: "new-game" */ '../views/NewGame.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
