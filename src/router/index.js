import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Install from '../components/Install.vue'
import Develop from '../components/Develop.vue'
import Config from '../components/Config.vue'

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/install', component: Install },
    { path: '/develop', component: Develop },
    { path: '/config', component: Config },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
})

export default router