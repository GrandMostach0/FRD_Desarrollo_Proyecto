<script setup>
import MenuOpcionesVertical from './menuOpcionesVertical.vue';
import Formulario from './Formulario.vue';
</script>

<template>
  <main class="flex items-center gap-5 px-16 py-8">

    <div class="border-2 border-black flex-1 p-5 rounded-2xl">
      <MenuOpcionesVertical />
    </div>
    
    <div class="border-2 border-black flex-3">
      <Formulario />
    </div>

  </main>
</template>