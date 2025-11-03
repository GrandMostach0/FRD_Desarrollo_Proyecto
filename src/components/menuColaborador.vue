<script setup>
import homeIcon from '../assets/icons/home-icon.vue'
import circlePlus from '../assets/icons/circle-plus.vue'
import passwordIcon from '../assets/icons/password-icon.vue'
import bellIcon from '../assets/icons/bell-icon.vue'

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeItem = ref('inicio')

const navigate = (path, name) => {
  activeItem.value = name
  router.push(path)
}
</script>

<template>
  <div class="h-full flex flex-col p-5">
    <ol class="space-y-2">
      <li 
        :class="{ activate: activeItem === 'inicio' }"
        @click="navigate('/bienvenido', 'inicio')"
      >
        <homeIcon /> INICIO
      </li>

      <li 
        :class="{ activate: activeItem === 'solicitud' }"
        @click="navigate('/solicitud', 'solicitud')"
      >
        <circlePlus /> Nueva Solicitud
      </li>

      <li 
        :class="{ activate: activeItem === 'pin' }"
        @click="navigate('/VistaPin', 'pin')"
      >
        <passwordIcon /> PIN
      </li>

      <li 
        :class="{ activate: activeItem === 'notificaciones' }"
        @click="navigate('/notificaciones', 'notificaciones')"
      >
        <bellIcon /> NOTIFICACIONES
      </li>
    </ol>
  </div>
</template>

<style scoped>
li {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  margin-bottom: 8px;
  gap: 8px;
  cursor: pointer;
  color: #b6b6b6;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.2s;
  border-radius: 8px;
}

li:hover {
  background-color: #f9f8ff;
}

li.activate {
  color: #7A5CFA;
  border-left: 4px solid #7A5CFA;
  background-color: #f3f0ff;
  padding-left: 16px;
}
</style>
