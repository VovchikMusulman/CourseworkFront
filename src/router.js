import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./pages/HomePage.vue')
    },
    {
        path: '/catalog',
        name: 'catalog',
        component: () => import('./pages/CatalogPage.vue')
    },
    {
        path: '/services',
        name: 'services',
        component: () => import('./pages/ServicesPage.vue')
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('./pages/ContactsPage.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/AuthPage.vue')
    },
    {
        path: '/delivery',
        name: 'delivery',
        component: () => import('./pages/DeliveryPage.vue')
    },
    {
        path: '/guarantees',
        name: 'guarantees',
        component: () => import('./pages/GuaranteesPage.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('./pages/404Page.vue')
    },
    {
        path: '/reviews',
        name: 'reviews',
        component: () => import('./pages/ReviewsPage.vue'),
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('./pages/ProfilePage.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/products/:slug',
        name: 'product',
        component: () => import('./pages/ProductsPage.vue'),
        props: true
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('./pages/CartPage.vue'),
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('token')

    if (to.meta.requiresAuth && !isAuthenticated) {
        // Если маршрут требует авторизации, а пользователь не авторизован
        next('/login')
    } else if (to.path === '/login' && isAuthenticated) {
        // Если пользователь авторизован и пытается попасть на страницу авторизации
        next('/profile')
    } else {
        // В остальных случаях разрешаем переход
        next()
    }
})

export default router