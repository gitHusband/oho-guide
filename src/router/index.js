import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Mine from '../components/Mine.vue'

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/mine', component: Mine },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'active'
})

export default router