<script setup>
import listIcon from '../assets/icons/list-icon.vue'
import circlePlus from '../assets/icons/circle-plus.vue'
import passwordIcon from '../assets/icons/password-icon.vue'

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeItem = ref('')

const navigate = (path, name) => {
  activeItem.value = name
  router.push(path)
}
</script>

<template>
  <p class="font-bold text-[#7A5CFA] p-5">
    <listIcon />
  </p>

  <div>
    <ol>
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
    </ol>
  </div>
</template>

<style scoped>
li {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 10px;
  gap: 5px;
  cursor: pointer;
  color: #b6b6b6;
  font-weight: bold;
}

li.activate {
  color: #7A5CFA;
  border-right: 4px solid #7A5CFA;
  background-color: #f3f0ff;
}
</style>
