<script setup>

const props = defineProps ({
    fecha: {
        type: String,
        default: '10/11/2025'
    }
})

</script>

<template>
    <div class="border flex items-center justify-between p-5 my-2 rounded-2xl">
        <div class="text-center">
            <p>{{ fecha }}</p>
            <h1 class="font-bold text-2xl text-gray-500">10:35 P.M</h1>
        </div>

        <h1 class="uppercase text-gray-500 font-bold text-3xl">sucursal el paso</h1>

        <p class="uppercase text-sm text-gray-500 ">Alta empeño</p>

        <h1 class="uppercase alta font-bold text-3xl">alta</h1>
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