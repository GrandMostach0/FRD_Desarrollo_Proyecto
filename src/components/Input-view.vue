<script setup>
import closeIcon from '../assets/icons/close-icon.vue';
</script>

<template>
    <div class="flex h-full items-center justify-center">
        <div id="modalPin" class="flex flex-col justify-around rounded-2xl h-[60%] w-[500px] text-center bg-[#F2F2F7] relative p-10">
            <div class="absolute top-4 right-5 cursor-pointer text-gray-500">
                <closeIcon/>
            </div>
            <h2 class="text-2xl font-bold text-gray-600">Para continuar se necesita PIN de autorización.</h2>
            <br>
            <input class="block text-4xl font-extrabold" maxlength="4" type="text" placeholder="1234">
            <br>
            <button>Confirmar</button>
        </div>
    </div>
</template>

<style scoped>

input{
    width: 100%;
    padding: 20px 0px;
    border: 1px solid rgba(128, 128, 128, .5);
    border-radius: 10px;
    text-transform: uppercase;
    text-align: center;
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