import Dashboard from '@/views/Dashboard.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import Register from '@/views/auth/Register.vue'
import Login from '@/views/auth/Login.vue'
import StudentLayout from '@/layouts/StudentLayout.vue'
import StudentArea from '@/views/student/StudentArea.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth.ts'

const HomeView = () => import('@/views/HomeView.vue')

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: MainLayout,
            children: [
                { path: '', name: 'Home', component: HomeView }
            ]
        },
        {
            path: '/auth',
            component: AuthLayout,
            children: [
                {
                    path: 'register',
                    name: 'Register',
                    component: Register,
                    meta: { requiresGuest: true }
                },
                {
                    path: 'login',
                    name: 'Login',
                    component: Login,
                    meta: { requiresGuest: true }
                }
            ]
        },
        {
            path: '/student',
            component: StudentLayout,
            meta: { requiresAuth: true },
            children: [
                { path: 'dashboard', name: 'Dashboard', component: Dashboard },
                { path: 'courses', name: 'StudentCourses', component: StudentArea }
            ]
        },
        { path: '/404', name: '404', component: () => import('@/views/404.vue') },
        { path: '/500', name: '500', component: () => import('@/views/500.vue') },
        { path: '/:pathMatch(.*)*', redirect: '/404' }
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
