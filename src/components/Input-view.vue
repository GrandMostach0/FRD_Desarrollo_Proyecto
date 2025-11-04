<script setup>
import { ref } from 'vue'
import closeIcon from '../assets/icons/close-icon.vue';
import errorCircle from '../assets/icons/error-circle.vue';

import { useRouter } from 'vue-router';
const router = useRouter();

const pin = ref('')
const hasError = ref(false)
const errorMessage = ref('')

const validPins = ['1234', '5678', '9012']

const closeModal = () => {
    router.push('/');
}

const validatePin = () => {
    if (!pin.value) {
        hasError.value = true
        errorMessage.value = 'El PIN es requerido. Solicita uno nuevo para continuar'
        return
    }
    
    if (validPins.includes(pin.value)) {
        hasError.value = false
        errorMessage.value = ''
        alert('PIN válido. Continuando...')
        router.push('/')
    } else {
        hasError.value = true
        errorMessage.value = 'El PIN ha caducado. Solicita uno nuevo para continuar'
    }
}

const resetError = () => {
    hasError.value = false
    errorMessage.value = ''
    pin.value = ''
    router.push('/')
}

</script>

<template>
    <div class="flex h-full items-center justify-center">
        <div id="modalPin" class="flex flex-col justify-around rounded-2xl h-[60%] w-[500px] text-center bg-[#F2F2F7] relative p-10">
            <div @click="closeModal" class="absolute top-4 right-5 cursor-pointer text-gray-500">
                <closeIcon/>
            </div>
            <h2 class="text-2xl font-bold text-gray-600">Para continuar se necesita PIN de autorización.</h2>
            <br>
            <div class="relative">
                <input 
                    v-model="pin"
                    class="block text-4xl font-extrabold" 
                    :class="{ 'input-error': hasError }"
                    maxlength="4" 
                    type="text" 
                    placeholder="1234"
                    @input="hasError = false"
                >
                <div v-if="hasError" class="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                    <errorCircle />
                </div>
            </div>
            <p v-if="hasError" class="text-red-500 text-sm mt-1">{{ errorMessage }}</p>
            <br>
            <button v-if="!hasError" @click="validatePin">Confirmar</button>
            <button v-else @click="resetError" class="bg-[#7A5CFA]">Cerrar</button>
        </div>
    </div>
</template>

<style scoped>

input{
    width: 100%;
    padding: 20px 50px 20px 20px;
    border: 1px solid rgba(128, 128, 128, .5);
    border-radius: 10px;
    text-transform: uppercase;
    text-align: center;
}

input.input-error {
    border-color: #ef4444;
    color: #ef4444;
}

button{
    padding: 10px;
    background-color: #7A5CFA;
    border-radius: 10px;
    color: white;
    cursor: pointer;
}

input:focus{
    outline: 3px solid #7A5CFA;
}

#modalPin{
    border: none;
    box-shadow: -2px 2px 10px 1px rgba(0,0,0,0.25);
}
</style>