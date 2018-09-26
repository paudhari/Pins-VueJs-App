import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AllBoards from './views/AllBoards'
import AllPins from './views/AllPins'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/allboards',
      name: 'boards',
      component: AllBoards
    },
    {
      path: '/boards/:id',
      name: 'pins',
      component: AllPins
    }
  ]
})
