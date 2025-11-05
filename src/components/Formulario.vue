<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import likeIcon from '../assets/icons/like-icon.vue';

const router = useRouter();

const mostrarModal = ref(false);
const aprobar = () => {
    mostrarModal.value = true;

    setTimeout(() => {
        mostrarModal.value = false;
        router.push('/');
    }, 1500)
}

</script>

<template>
    <div class="relative">
        <br>
        <h5 class="text-center uppercase text-xl">registro de solicitud</h5>
        <br>

        <div v-show="mostrarModal" id="modalAceptacion" class="absolute w-full h-[90%] flex items-center justify-center z-5 cursor-default">
            <div class="bg-[#F2F2F7] w-[50%] h-[50%] rounded-2xl flex items-center justify-around flex-col">
                <likeIcon class="text-[#7A5CFA]" tamanio="100"/>

                <h1 class="text-4xl text-center">
                    Se ha enviado la solicitud
                </h1>
            </div>
        </div>

        <form @submit.prevent="aprobar" action="" class="px-5 py-2 text-red">

            <div class="flex gap-5 ">
                <div class="flex-1">
                    <div class="containerInputs">
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombreInput" placeholder="" required>
                    </div>

                    <div class="containerInputs">
                        <label for="apellidoPaterno">apellido paterno</label>
                        <input type="text" name="apellidoPaterno" id="apellidoPaternoInput" placeholder="">
                    </div>

                    <div class="containerInputs">
                        <label for="apellidoMaterno">apellido materno</label>
                        <input type="text" name="apellidoMaterno" id="apellidoMaternoInput" placeholder="">
                    </div>

                    <div class="containerInputs">
                        <label for="ine">ine (ocr)</label>
                        <input type="text" name="ine" id="ineInput" maxlength="13" placeholder="">
                        <span class="text-xs text-[#EB5757]"></span>
                    </div>
                    
                    <div class="containerInputs">
                        <label for="colaborador">Colaborador</label>
                        <input type="text" name="colaborador" id="colaboradorInput" placeholder="">
                    </div>
                </div>

                <div class="flex-1">
                    <div class="containerInputs">
                        <label for="selectSucursal">nombre de la sucursal</label>
                        <select name="selectSucursal" id="selectSucursal" placeholder="BUSCAR">
                            <option value="2">Sucursal 1</option>
                            <option value="3">Sucursal 2</option>
                        </select>
                    </div>

                    <div class="containerInputs">
                        <label for="caja">caja</label>
                        <input type="text" name="caja" id="cajaInput" placeholder="">
                    </div>

                    <div class="sin-flechitas containerInputs">
                        <label for="monto">monto</label>
                        <input class="relative" type="number" name="monto" id="montoInput" placeholder="$">
                    </div>

                    <div class="containerInputs">
                        <label for="tipoOperacion">tipo de operación</label>
                        <select name="tipoOperacion" id="tipoOperacionSelect">
                            <option value="1">ALTA DE EMPEÑO</option>
                            <option value="2">BAJA DE EMPEÑO</option>
                        </select>
                    </div>
                </div>
            </div>

            
            <div class="flex items-center justify-center gap-50">
                <button type="submit">Solicitar</button>
                <button type="reset" @click="router.push('/')">Cancelar</button>
            </div>

        </form>
    </div>
</template>

<style scoped>

.containerInputs{
    margin-bottom: 20px;
}

label, input{
    display: block;
}

label{
    text-transform: uppercase;
    font-size: smaller;
    margin-bottom: 5px;
    color: gray;
}

input, select{
    width: 100%;
    padding: 12px;
    border: 1px solid rgba(128, 128, 128, .5);
    border-radius: 10px;
    text-transform: uppercase;
}

button{
    padding: 8px 64px;
    background-color: #7A5CFA;
    border-radius: 10px;
    color: white;
    cursor: pointer;
}

input:focus, select:focus{
    outline: 3px solid rgb(122, 92, 250);
}

#modalAceptacion {
    background-color: rgba(128, 128, 128, .6);
}
</style>