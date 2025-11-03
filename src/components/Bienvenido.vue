<script setup>
import { ref, onMounted } from 'vue'

const location = ref('Mérida, México')
const currentDate = ref('')
const currentTime = ref('')
const userRole = ref('COLABORADOR')

const updateDateTime = () => {
  const now = new Date()
  
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
  
  const dayName = days[now.getDay()]
  const day = now.getDate()
  const month = months[now.getMonth()]
  const year = now.getFullYear()
  
  currentDate.value = `${dayName}, ${day} de ${month} de ${year}`
  
  let hours = now.getHours()
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const ampm = hours >= 12 ? 'p.m.' : 'a.m.'
  hours = hours % 12 || 12
  
  currentTime.value = `${hours}:${minutes} ${ampm}`
}

onMounted(() => {
  updateDateTime()
  setInterval(updateDateTime, 60000)
})
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="p-6 text-right text-sm">
      <p class="font-semibold text-gray-800">{{ location }}</p>
      <p class="text-gray-600">{{ currentDate }} · {{ currentTime }}</p>
    </div>

    <div class="flex-1 flex flex-col items-center justify-center px-8">
      <h1 class="text-6xl font-bold text-[#7A5CFA] mb-8">
        BIENVENIDO
      </h1>
      
      <p class="text-2xl text-gray-800">
        Ingresaste como 
        <span class="text-[#9B8CD8] font-semibold ml-2">{{ userRole }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
