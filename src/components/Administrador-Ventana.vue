<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
    <h2>Adios</h2>
    <button @click="router.push('/')">Volver / back</button>
</template>