<script setup>
import menuOpcionesAdministrador from './menuOpcionesAdministrador.vue';
import ListaRegistrosCards from './ListaRegistros-cards.vue';
</script>

<template>
  <main class="flex items-center gap-5 px-16 py-8">

    <div class="flex-1 rounded-2xl h-[500px] bg-white">
        <menuOpcionesAdministrador />
    </div>
    
    <div class="flex-3 bg-white rounded-2xl h-[90vh] p-5 overflow-y-scroll">
      <ListaRegistrosCards />
    </div>

  </main>
</template>
