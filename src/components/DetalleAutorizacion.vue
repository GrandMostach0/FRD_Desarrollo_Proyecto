<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  notification: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

const getStatusColor = (status) => {
  switch(status) {
    case 'APROBADO':
      return 'text-[#7A5CFA]'
    case 'RECHAZADO':
      return 'text-[#9B8CD8]'
    default:
      return 'text-gray-600'
  }
}
</script>

<template>
  <div 
    class="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
    @click.self="closeModal"
  >
    <div class="bg-white rounded-lg p-10 max-w-xl w-full relative">
      <button 
        @click="closeModal"
        class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl cursor-pointer"
      >
        ×
      </button>

      <div class="border-2 border-gray-300 rounded-lg p-6">
        <div class="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
          
          <div v-if="notification.pin">
            <p class="text-gray-500 text-xs mb-1">PIN DE AUTORIZACIÓN</p>
            <p class="font-semibold text-lg">{{ notification.pin }}</p>
          </div>


          <div>
            <p class="text-gray-500 text-xs mb-1">ID SUCURSAL</p>
            <p class="font-semibold">{{ notification.idSucursal }}</p>
          </div>

          <div>
            <p class="text-gray-500 text-xs mb-1">NOMBRE</p>
            <p class="font-semibold">{{ notification.nombre }}</p>
          </div>

          <div>
            <p class="text-gray-500 text-xs mb-1">CAJA</p>
            <p class="font-semibold">{{ notification.caja }}</p>
          </div>

          <div>
            <p class="text-gray-500 text-xs mb-1">APELLIDO PATERNO</p>
            <p class="font-semibold">{{ notification.apellidoPaterno }}</p>
          </div>

          <div>
            <p class="text-gray-500 text-xs mb-1">MONTO</p>
            <p class="font-semibold">{{ notification.monto }}</p>
          </div>

          <div>
            <p class="text-gray-500 text-xs mb-1">APELLIDO MATERNO</p>
            <p class="font-semibold">{{ notification.apellidoMaterno }}</p>
          </div>

          <div>
            <p class="text-gray-500 text-xs mb-1">TIPO DE OPERACIÓN</p>
            <p class="font-semibold">{{ notification.tipoOperacion }}</p>
          </div>

          <div>
            <p class="text-gray-500 text-xs mb-1">INE (OCR)</p>
            <p class="font-semibold">{{ notification.ineOcr }}</p>
          </div>

          <div>
            <p class="text-gray-500 text-xs mb-1">FECHA DE SOLICITUD</p>
            <p class="font-semibold">{{ notification.fechaSolicitud }}</p>
          </div>

          <div>
            <p class="text-gray-500 text-xs mb-1">COLABORADOR</p>
            <p class="font-semibold">{{ notification.colaborador }}</p>
          </div>

          <div>
            <p class="text-gray-500 text-xs mb-1">HORARIO DE SOLICITUD</p>
            <p class="font-semibold">{{ notification.horarioSolicitud }}</p>
          </div>
        </div>

        <div class="mt-6 text-center">
          <p :class="['text-2xl font-bold', getStatusColor(notification.status)]">
            {{ notification.status }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
