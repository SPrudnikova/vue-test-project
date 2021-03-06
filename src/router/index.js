import Vue from 'vue'
import Router from 'vue-router'
import UserListPage from '@/routes/UserListPage'
import NotFoundPage from '@/routes/NotFoundPage'
import UserAddPage from '@/routes/UserPage/UserAddPage'
import UserProfilePage from '@/routes/UserPage/UserProfilePage'
import WelcomePage from '@/routes/WelcomePage'
import DashboardPage from '@/routes/DashboardPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: WelcomePage},
    {path: '/users-list', component: UserListPage},
    {path: '/dashboard', component: DashboardPage},
    {
      path: '/user',
      component: { template: '<router-view/>' },
      children:
      [
        {path: '', redirect: 'add'},
        {path: 'add', component: UserAddPage},
        {path: ':id', component: UserProfilePage, props: true}
      ]
    },
    {path: '*', component: NotFoundPage}
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
