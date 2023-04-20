import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/newmission',
    name: 'newmission',
     //route level code-splitting
     //this generates a separate chunk (about.[hash].js) for this route
     //which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NewMission.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/UserSettings.vue')
  },
  {
    path: '/checkMissionData/:missionID',
    name: 'checkMissionData',
    component: () => import('../views/CheckMissionData.vue'),
    props: true
  },
  {
    path: '/missionDashboard/:missionID',
    name: 'missionDashboard',
    component: () => import('../views/MissionDashboard.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
