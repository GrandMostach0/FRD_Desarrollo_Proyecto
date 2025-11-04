<script setup>
import menuColaborador from './menuColaborador.vue';
</script>

<template>
  <main class="flex items-center gap-5 px-16 py-8">

    <div class="flex-1 rounded-2xl h-[80vh] bg-white shadow-sm">
      <menuColaborador />
    </div>
    
    <div class="flex-3 bg-white rounded-2xl h-[90vh] shadow-sm">
      <RouterView />
    </div>

  </main>
</template>
