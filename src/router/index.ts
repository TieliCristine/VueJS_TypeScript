import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/auth.ts'
import Register from '@/views/auth/Register.vue'
import Login from '@/views/auth/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import AboutView from '@/views/AboutView.vue'
import Courses from '@/views/Courses.vue'
import Student from '@/views/Student.vue'
import Faq from '@/views/Faq.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'About',
            component: AboutView,
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
            meta: { requiresGuest: true },
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: { requiresGuest: true },
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            meta: { requiresAuth: true },
        },
        {
            path: '/courses',
            name: 'Cursos',
            component: Courses,
        },
        {
            path: '/student',
            name: 'Student',
            component: Student,
        },
        {
            path: '/faq',
            name: 'Faq',
            component: Faq,
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact,
        },
        {
            path: '/404',
            name: '404',
            component: () => import('@/views/404.vue'),
        },
        {
            path: '/500',
            name: '500',
            component: () => import('@/views/500.vue'),
        },
    ],
})

router.beforeEach((to, from, next) => {
    const auth = useAuthStore()
    if (to.matched.some((record) => record.meta.requiresAuth) && !auth.isLoggedIn)
        next({ name: 'Login' })
    else if (to.matched.some((record) => record.meta.requiresGuest) && auth.isLoggedIn)
        next({ name: 'Dashboard' })
    else next()
})

export default router
