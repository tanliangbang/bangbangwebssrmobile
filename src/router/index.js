import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var routers = [
  {
    path: '/',
    redirect: {name: 'home'}
  },
  {
    path: '/home',
    name: 'home',
    component: (resolve) => require(['src/page/Index'], resolve)
  },
  {
    path: '/articleList',
    name: 'articleList',
    component: (resolve) => require(['src/page/article/ArticleList'], resolve)
  },
  {
    path: '/articleDetail/:id',
    name: 'articleDetail',
    component: (resolve) => require(['src/page/article/ArticleDetail'], resolve)
  },
  {
    path: '/myProduction',
    name: 'myProduction',
    component: (resolve) => require(['src/page/production/MyProduction'], resolve)
  },
  {
    path: '/community',
    name: 'community',
    component: (resolve) => require(['src/page/community/Community'], resolve)
  },
  {
    path: '/publishArticle',
    name: 'publishArticle',
    component: (resolve) => require(['src/page/community/PublishArticle'], resolve)
  },
  {
    path: '/support',
    name: 'support',
    component: (resolve) => require(['src/page/support/Support'], resolve)
  },
  {
    path: '/userCenter',
    name: 'userCenter',
    component: (resolve) => require(['src/page/user/UserCenter'], resolve)
  }

]

export default new Router({
  mode: 'history',
  routes: routers
})
