<script setup>
import { ref } from 'vue'
import DetalleAutorizacion from './DetalleAutorizacion.vue'

const selectedNotification = ref(null)

const notifications = ref([
  {
    id: 1,
    date: '31/10/2025',
    time: '10:35 AM',
    type: 'Autorización de Cliente',
    person: 'JOSE EDUARDO',
    action: 'ALTA DE EMPEÑO',
    actionType: 'alta',
    pin: '1234',
    idSucursal: 'SUCURSAL LAS FLORES',
    nombre: 'JOSE EDUARDO',
    caja: 'N01',
    apellidoPaterno: 'BALAAM',
    monto: '$3,000.00',
    apellidoMaterno: 'VARGUEZ',
    tipoOperacion: 'ALTA DE EMPEÑO',
    ineOcr: 'ITNB23148',
    fechaSolicitud: '31/10/2025',
    colaborador: 'MARÍA MARTÍNEZ BARRERA',
    horarioSolicitud: '10:00 AM',
    status: 'APROBADO'
  },
  {
    id: 2,
    date: '01/11/2025',
    time: '12:00 PM',
    type: 'Autorización rechazada',
    person: 'GABRIELA CASTILLO CASTRO',
    action: 'ALTA DE EMPEÑO',
    actionType: 'alta',
    pin: '2205',
    idSucursal: 'SUCURSAL LAS FLORES',
    nombre: 'GABRIELA',
    caja: 'N01',
    apellidoPaterno: 'CASTILLO',
    monto: '$3,000.00',
    apellidoMaterno: 'CASTRO',
    tipoOperacion: 'ALTA DE EMPEÑO',
    ineOcr: 'IINB23148',
    fechaSolicitud: '31/10/2025',
    colaborador: 'MARÍA MARTÍNEZ BARRERA',
    horarioSolicitud: '11:59 AM',
    status: 'RECHAZADO'
  },
  {
    id: 3,
    date: '01/11/2025',
    time: '12:00 PM',
    type: 'Autorización de Cliente',
    person: 'MARIA ISABEL CASTRO GÓMEZ',
    action: 'BAJA DE EMPEÑO',
    actionType: 'baja',
    pin: '',
    idSucursal: 'SUCURSAL LAS FLORES',
    nombre: 'MARIA ISABEL',
    caja: 'N02',
    apellidoPaterno: 'CASTRO',
    monto: '$2,500.00',
    apellidoMaterno: 'GÓMEZ',
    tipoOperacion: 'BAJA DE EMPEÑO',
    ineOcr: 'MICG45678',
    fechaSolicitud: '01/11/2025',
    colaborador: 'CARLOS LÓPEZ RUIZ',
    horarioSolicitud: '11:45 AM',
    status: 'APROBADO'
  },
  {
    id: 4,
    date: '01/11/2025',
    time: '12:30 PM',
    type: 'Autorización de Cliente',
    person: 'PEDRO MUÑOZ LLANES',
    action: 'ALTA DE EMPEÑO',
    actionType: 'alta',
    pin: '4427',
    idSucursal: 'SUCURSAL CENTRO',
    nombre: 'PEDRO',
    caja: 'N03',
    apellidoPaterno: 'MUÑOZ',
    monto: '$4,200.00',
    apellidoMaterno: 'LLANES',
    tipoOperacion: 'ALTA DE EMPEÑO',
    ineOcr: 'PMUL78945',
    fechaSolicitud: '01/11/2025',
    colaborador: 'ANA RODRÍGUEZ PÉREZ',
    horarioSolicitud: '12:15 PM',
    status: 'APROBADO'
  }
])

const openDetail = (notification) => {
  selectedNotification.value = notification
}

const closeDetail = () => {
  selectedNotification.value = null
}

const showMore = () => {
  console.log('Ver más notificaciones...')
}
</script>

<template>
  <div class="h-full p-8 overflow-y-auto">
    <div class="max-w-4xl mx-auto">
      <div class="space-y-3">
        <div 
          v-for="notification in notifications" 
          :key="notification.id"
          @click="openDetail(notification)"
          class="border-2 border-[#7A5CFA] rounded-lg p-4 bg-white hover:shadow-md transition-shadow cursor-pointer"
        >
          <div class="flex justify-between items-start">
            <div class="flex gap-6">
              <div class="text-left">
                <p class="text-xs text-[#7A5CFA] font-semibold mb-1">{{ notification.date }}</p>
                <p class="text-xl font-bold text-gray-800">{{ notification.time }}</p>
              </div>

              <div class="flex-1">
                <p class="text-lg font-semibold text-gray-800 mb-1">{{ notification.type }}</p>
                <p class="text-sm text-gray-600">{{ notification.person }}</p>
              </div>
            </div>

            <div class="text-right">
              <p 
                class="text-sm font-bold whitespace-nowrap"
                :class="{
                  'text-[#7A5CFA]': notification.actionType === 'alta',
                  'text-[#9b8cd894]': notification.actionType === 'baja'
                }"
              >
                {{ notification.action }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-6">
        <button 
          @click="showMore"
          class="text-[#7A5CFA] font-semibold hover:text-[#6347d9] transition-colors"
        >
          Ver más...
        </button>
      </div>
    </div>

    <DetalleAutorizacion 
      v-if="selectedNotification"
      :notification="selectedNotification"
      @close="closeDetail"
    />
  </div>
</template>

<style scoped>
</style>
