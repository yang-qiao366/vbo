import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import hone from '@/components/hone'
import archiveDetail from '@/components/archiveDetail'
import nav from '@/views/nav'
import articles from '@/components/articles'
import archive from '@/components/archive'
import project from '@/components/project'
import timeline from '@/components/timeline'
import message from '@/components/message'
import about from '@/components/about'


Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/articles',
    name: 'articles',
    component: articles
    },
    {
    path: '/archive',
    name: 'archive',
    component: archive
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
     },
    {
    path: '/archiveDetail',
    name: 'archiveDetail',
     component: archiveDetail
    },
      {
      path: '/project',
      name: 'project',
      component: project
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: timeline
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
    path: '/',
    name: 'hone',
    component: hone
    }
  
  ]
})
