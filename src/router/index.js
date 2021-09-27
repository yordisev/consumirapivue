import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard'
import Editar from '../views/Editar'
import Nuevo from '../views/Nuevo'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/editar/:id',
        name: 'Editar',
        component: Editar
    },
    {
        path: '/nuevo',
        name: 'Nuevo',
        component: Nuevo
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router