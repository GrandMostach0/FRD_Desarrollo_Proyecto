<script setup>
import { ref } from 'vue'
import closeIcon from '../assets/icons/close-icon.vue';
import errorCircle from '../assets/icons/error-circle.vue';
import checkCircle from '../assets/icons/check-circle.vue';
import xCircle from '../assets/icons/x-circle.vue';

import { useRouter } from 'vue-router';
const router = useRouter();

const pin = ref('')
const validationState = ref('input')
const errorMessage = ref('')

const validPins = ['1234', '5678', '9012']
const expiredPins = ['0000', '1111', '2222', '3333']

const closeModal = () => {
    resetState()
    router.push('/VistaPin');
}

const validatePin = () => {
    if (!pin.value) {
        return
    }
    
    if (validPins.includes(pin.value)) {
        validationState.value = 'success'
        setTimeout(() => {
            resetState()
            router.push('/')
        }, 2500)
    } else if (expiredPins.includes(pin.value)) {
        validationState.value = 'expired'
        errorMessage.value = 'El PIN ha caducado. Solicita uno nuevo para continuar'
    } else {
        validationState.value = 'error'
        setTimeout(() => {
            resetState()
        }, 2500)
    }
}

const resetState = () => {
    validationState.value = 'input'
    pin.value = ''
    errorMessage.value = ''
}

const tryAgain = () => {
    resetState()
}

</script>

<template>
    <div class="flex h-full items-center justify-center">
        <div id="modalPin" class="flex flex-col justify-around rounded-2xl h-[60%] w-[500px] text-center bg-[#F2F2F7] relative p-10">
            <div @click="closeModal" class="absolute top-4 right-5 cursor-pointer text-gray-500">
                <closeIcon/>
            </div>

            <div v-if="validationState === 'input' || validationState === 'expired'" class="flex flex-col justify-around h-full">
                <h2 class="text-2xl font-bold text-gray-600">Para continuar se necesita PIN de autorización.</h2>
                <br>
                <div class="relative">
                    <input 
                        v-model="pin"
                        class="block text-4xl font-extrabold" 
                        :class="{ 'input-error': validationState === 'expired' }"
                        maxlength="4" 
                        type="text" 
                        placeholder="1234"
                        @keyup.enter="validatePin"
                        @input="validationState === 'expired' ? resetState() : null"
                    >
                    <div v-if="validationState === 'expired'" class="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                        <errorCircle />
                    </div>
                </div>
                <p v-if="validationState === 'expired'" class="text-red-500 text-sm mt-1">{{ errorMessage }}</p>
                <br>
                <button v-if="validationState === 'input'" @click="validatePin">Confirmar</button>
                <button v-else-if="validationState === 'expired'" @click="closeModal">Cerrar</button>
            </div>

            <div v-else-if="validationState === 'success'" class="flex flex-col items-center justify-center h-full gap-6">
                <div class="text-[#7A5CFA]">
                    <checkCircle />
                </div>
                <p class="text-xl text-gray-700">
                    El PIN es correcto. La<br>operación fue autorizada.
                </p>
            </div>

            <div v-else-if="validationState === 'error'" class="flex flex-col items-center justify-center h-full gap-6">
                <div class="text-[#7A5CFA]">
                    <xCircle />
                </div>
                <p class="text-xl text-gray-700">
                    El PIN es incorrecto.<br>Vuelva a intentarlo.
                </p>
            </div>
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