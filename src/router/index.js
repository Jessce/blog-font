import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import post from '@/pages/post'
import Links from '@/pages/EssentialLinks'
import About from '@/pages/AboutMe'
import NotFound from '@/pages/NotFound'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name:'Index',
      component: Index
    },
    {
      path:'/post/:id',
      name:'post',
      props: true,
      component: post
    },
    {
      path:'/links',
      name:'EssentialLinks',
      component: Links
    },
    {
      path:'/about',
      name:'AboutMe',
      component: About
    },
    {
      path:'*',
      name:'404',
      meta:{pagename:'404错误！'},
      component: NotFound
    },
  ]
})
