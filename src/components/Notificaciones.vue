<script setup>
import { ref } from 'vue'

const notifications = ref([
  {
    id: 1,
    date: '31/10/2025',
    time: '10:35 AM',
    type: 'Autorización de Cliente',
    person: 'JUAN CARLOS ARANA',
    action: 'ALTA DE EMPEÑO',
    actionType: 'alta'
  },
  {
    id: 2,
    date: '01/11/2025',
    time: '12:00 PM',
    type: 'Autorización rechazada',
    person: 'GABRIELA CASTILLO CASTRO',
    action: 'ALTA DE EMPEÑO',
    actionType: 'alta'
  },
  {
    id: 3,
    date: '01/11/2025',
    time: '12:00 PM',
    type: 'Autorización de Cliente',
    person: 'MARIA ISABEL CASTRO GÓMEZ',
    action: 'BAJA DE EMPEÑO',
    actionType: 'baja'
  },
  {
    id: 4,
    date: '01/11/2025',
    time: '12:30 PM',
    type: 'Autorización de Cliente',
    person: 'PEDRO MUÑOZ LLANES',
    action: 'ALTA DE EMPEÑO',
    actionType: 'alta'
  }
])

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
          class="border-2 border-[#7A5CFA] rounded-lg p-4 bg-white hover:shadow-md transition-shadow"
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
                  'text-[#9B8CD8]': notification.actionType === 'baja'
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
  </div>
</template>

<style scoped>
</style>
