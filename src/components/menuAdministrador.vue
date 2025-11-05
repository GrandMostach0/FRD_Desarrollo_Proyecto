<!-- Vista del Menú del administrador: Recepción de solicitudes y Historial de solicitudes-->
<script setup>
  import fileIcon from '../assets/icons/file-icon.vue'
  import filesIcons from '../assets/icons/files-icons.vue'

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
  <div class="h-full flex flex-col p-5">
    <ol class="space-y-2">
      <li 
        :class="{ activate: activeItem === 'registros' }"
        @click="navigate('/panelAdmin/registrosSolicitud', 'registros')"
      >
        <fileIcon /> Recepción de Solicitudes
      </li>

      <li 
        :class="{ activate: activeItem === 'historial' }"
        @click="navigate('/panelAdmin/historialRegistros', 'historial')"
      >
        <filesIcons /> Historial de Solicitudes
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
