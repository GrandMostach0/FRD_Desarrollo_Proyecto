import { createRouter, createWebHistory } from "vue-router";
import OperadorView from '../components/Operador-Ventana.vue';
import AdministradorView from "../components/PanelAdmin-view.vue";
import Formulario from "../components/Formulario.vue";
import InputView from "../components/Input-view.vue";
import NotFoundView from "../components/NotFound-View.vue";

// Vistas hijas de la parte de administrador
import ListaRegistrosCards from "../components/ListaRegistros-cards.vue";
import SolicitudView from "../components/Solicitud-View.vue";

import HistorialRegistros from "../components/HistorialRegistros.vue";

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
            path: '/panelAdmin',
            name: 'administrador',
            component: AdministradorView,
            children: [
                { path: 'registrosSolicitud', component: ListaRegistrosCards},
                { path: 'detallesSolicitud', component: SolicitudView},
                { path: 'historialRegistros', component: HistorialRegistros}
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFoundView
        }
    ]
})

export default router;