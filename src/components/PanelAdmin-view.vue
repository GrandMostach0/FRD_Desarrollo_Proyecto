<script setup>
import menuOpcionesAdministrador from './menuAdministrador.vue';
import ListaRegistrosCards from './ListaRegistros-cards.vue';
import SolicitudView from './Solicitud-View.vue';
import Formulario from './Formulario.vue';
import { RouterView } from 'vue-router';
  
</script>

<template>
  <main class="flex items-center gap-5 px-16 py-8">

    <div class="flex-1 rounded-2xl h-[80vh] bg-white shadow-sm">
        <menuOpcionesAdministrador />
    </div>
    
    <div class="flex-3 bg-white rounded-2xl h-[90vh] p-5 overflow-y-scroll">
      <RouterView />
    </div>

  </main>
</template>
