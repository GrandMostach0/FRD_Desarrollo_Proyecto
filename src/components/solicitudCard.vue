<script setup>

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
    tipoOperacion: {
        type: String,
        default: 'tipoOperacion'
    },
    criticidad: {
        type: String,
        default: 'criticidad'
    }
})

</script>

<template>
    <div class="border border-[#7A5CFA] flex items-center justify-between p-5 my-2 rounded-2xl cursor-pointer">
        <div class="text-center">
            <p class="text-[#7A5CFA] font-bold text-xs">{{ fecha }}</p>
            <h1 class="font-bold text-xl text-gray-500">{{ hora }}</h1>
        </div>

        <h1 class="uppercase text-gray-500 font-bold text-3xl">{{ nombreSucursal }}</h1>

        <p class="uppercase text-sm text-gray-700 ">{{ tipoOperacion }}</p>

        <h1
            :class="criticidad === 'alta' ? 'alta' : criticidad === 'media' ? 'media' : 'baja'"
            class="uppercase font-bold text-3xl"
        >
            {{ criticidad }}
        </h1>
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
    color: #00FF00;
}
</style>