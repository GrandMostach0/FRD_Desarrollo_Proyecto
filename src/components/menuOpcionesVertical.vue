<script setup>
import listIcon from '../assets/icons/list-icon.vue';
import circlePlus from '../assets/icons/circle-plus.vue'
import passwordIcon from '../assets/icons/password-icon.vue'
</script>

<template>
    <p class="font-bold text-[#7A5CFA] p-5">
        <listIcon />
    </p>

    <div>
        <ol>
            <li>
                <circlePlus />Nueva Solicitud
            </li>
            <li>
                <passwordIcon />PIN
            </li>
        </ol>
    </div>

</template>

<style scoped>

li{
    display: flex;
    align-items: center;
    padding: 10px 20px;
    margin-bottom: 10px;
    gap: 5px;
    cursor: pointer;
    color: #7A5CFA;
    font-weight: bold;
}

li:hover{
    border-right: 3px solid #7A5CFA;
}
</style>