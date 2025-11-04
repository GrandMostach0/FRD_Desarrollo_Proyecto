<script setup>
import iconBuild from '../assets/icons/icon-build.vue';
    
const props = defineProps ({
    fecha: {
        type: String,
        default: 'fecha'
    },
    hora: {
        type: String,
        default: 'hora'
    },
    nombreSucursal: {
        type: String,
        default: 'nombreSucursal'
    },
    status: {
        type: String,
        default: 'status'
    }
})

</script>

<template>
    <div id="Card-principal" class="flex border rounded-xl mb-2 hover:border-[#8139df] hover:text-[#8139df]  transition-colors duration-300">
        <div class="flex items-center justify-center">
            <icon-build class="w-20 h-20"/>
        </div> 
        
        <div id="Card-datos" class="" >
            
            <h1 class="text-[90%]">{{ nombreSucursal }}</h1>
            <div>
                <p class="text-[70%]">{{ fecha }} {{ hora }}</p>
            </div>
            <h1
                :class="status === 'RECHAZADO' ? 'alta'  : 'baja'"
                class="uppercase font-bold"
            >{{ status }}</h1>
        </div>
    </div>
</template>

<style scoped>

.alta {
    color: #FF0000;
}

.media{
    color: #FFBB00;
}

.baja{
    color: #15f715;
}
</style>