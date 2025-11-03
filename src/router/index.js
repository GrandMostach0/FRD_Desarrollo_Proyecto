import { createRouter, createWebHistory } from "vue-router";
import OperadorView from '../components/Operador-Ventana.vue';
import AdiosTap from "../components/Administrador-Ventana.vue";
import Formulario from "../components/Formulario.vue";
import InputView from "../components/Input-view.vue";
import NotFoundView from "../components/NotFound-View.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'operador',
            component: OperadorView,
            children: [
                { path: 'solicitud', component: Formulario},
                { path: 'VistaPin', component: InputView}
            ]
        },
        {
            path: '/adios',
            name: 'Adios',
            component: AdiosTap
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFoundView
        }
    ]
})

export default router;