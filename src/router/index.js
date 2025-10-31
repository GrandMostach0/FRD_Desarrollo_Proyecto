import { createRouter, createWebHistory } from "vue-router";
import Hello from '../components/Operador-Ventana.vue';
import AdiosTap from "../components/Administrador-Ventana.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/adios',
            name: 'Adios',
            component: AdiosTap
        }
    ]
})

export default router;