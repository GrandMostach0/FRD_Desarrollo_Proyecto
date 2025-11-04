<script setup>
import MenuOpcionesVertical from './menuOpcionesVertical.vue';
import Formulario from './Formulario.vue';
import InputView from './Input-view.vue';
</script>

<template>
  <main class="flex items-center gap-5 px-16 py-8">

    <div class="flex-1 rounded-2xl h-[500px] bg-white">
      <MenuOpcionesVertical/>
      
    </div>
    
    <div class="flex-3 bg-white rounded-2xl h-[90vh]">
      <RouterView />
    </div>

  </main>
</template>
