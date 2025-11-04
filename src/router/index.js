import { createRouter, createWebHistory } from "vue-router";
import OperadorView from '../components/Operador-Ventana.vue';
import AdministradorView from "../components/PanelAdmin-view.vue";
import Formulario from "../components/Formulario.vue";
import InputView from "../components/Input-view.vue";
import NotFoundView from "../components/NotFound-View.vue";
import InicioAdmView from "../components/InicioAdmView.vue";

// Vistas hijas de la parte de administrador
import ListaRegistrosCards from "../components/ListaRegistros-cards.vue";
import PanelAdminView from "../components/PanelAdmin-view.vue";

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
            path: '/MenuAdmin',
            name: 'menu-administrador',
            component: InicioAdmView
        },
        {
            path: '/panelAdmin',
            name: 'administrador',
            component: PanelAdminView,
            children: [
                { path: 'registrosSolicitud', component: ListaRegistrosCards}
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