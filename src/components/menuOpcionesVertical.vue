<script setup>
import listIcon from '../assets/icons/list-icon.vue';
import circlePlus from '../assets/icons/circle-plus.vue'
import passwordIcon from '../assets/icons/password-icon.vue'
</script>

<template>
    <p>
        <listIcon />
    </p>

    <div class="px-4">
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
    margin: 8px 0px;
    padding: 2px;
    gap: 5px;
    cursor: pointer;
}
</style>