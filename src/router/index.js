import { createRouter, createWebHistory } from 'vue-router';
import LoginRegisterPage from '@/views/LoginRegisterPage.vue';
import Home from '@/views/Home.vue';

const routes = [
    { path: '/', name: 'LoginRegister', component: LoginRegisterPage },
    { path: '/home', name: 'Home', component: Home },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;