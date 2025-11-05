<!-- Vista de Inicio  -->
<script setup>
    import paper from '../assets/icons/paper.vue';
    import historialSolicitud from '../assets/icons/historial-solicitud.vue';
    import { useRouter } from 'vue-router'
    const router = useRouter()

    function goToRecepcion() {
        router.push('/panelAdmin/registrosSolicitud')
    }
    function goToHistorial() {
        router.push('/panelAdmin/historialRegistros')
    }
</script>

<template>    
    <div  class="pl-15 mt-5">   
        <h1 class="text-3xl ">Ingresaste como <span class="admi">ADMINISTRADOR</span></h1>
    </div>
    <div class="flex items-center  justify-center gap-5 px-16 py-8">
            <h2 class="text-2xl ">¿A que vista quieres acceder?</h2>
    </div>
    <main class="flex items-center  justify-center gap-20 px-16 py-8">  
        <button @click="goToRecepcion" 
        class="p-10 border-4 border-transparent hover:border-[#8139df] bg-[#d2d1d3] rounded-[90px] transition-all duration-200 transform hover:scale-105"> 
            <paper class="w-80 h-80"/> 
            <span class="admi">Recepción de Solicitudes</span>
        </button>

        <button @click="goToHistorial"
        class="p-10 border-4 border-transparent hover:border-[#111111] bg-[#d2d1d3] rounded-[90px] transition-all duration-200 transform hover:scale-105"> 
            <historialSolicitud class="w-80 h-80 transform rotate-180"/> 
            <span class="" >Historial de Solicitudes</span>
        </button>
    </main>
    
</template>

<style scoped>
.admi {
  color: #8139df; 
  font-weight: bold;
}
</style>