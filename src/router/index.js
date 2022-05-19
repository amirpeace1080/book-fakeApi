import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActivityView from '../views/ActivityView.vue'
import AuthorView from '../views/AuthorView.vue'
import BookView from '../views/BookView.vue'
import CoverView from '../views/CoverView.vue'
import UserView from '../views/UserView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/activity',
    name: 'activity',
    component: ActivityView
  },
  {
    path: '/author',
    name: 'author',
    component: AuthorView
  },
  {
    path: '/book',
    name: 'book',
    component: BookView
  },
  {
    path: '/coverView',
    name: 'converView',
    component: CoverView
  },
  {
    path: '/users',
    name: 'users',
    component: UserView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
