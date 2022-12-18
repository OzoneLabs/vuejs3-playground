import { createRouter, createWebHistory } from 'vue-router';
import LoginRegisterPage from '@/views/LoginRegisterPage.vue';

const routes = [
    { path: '/', name: 'LoginRegister', component: LoginRegisterPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;