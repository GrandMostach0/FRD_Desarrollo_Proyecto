<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import CloseIcon from '../assets/icons/close-icon.vue';
import likeIcon from '../assets/icons/like-icon.vue';
import dislikeIcon from '../assets/icons/dislike-icon.vue';

const router = useRouter();
const mostrarModal = ref(false);
const tipoAccion = ref(''); // 'aprobar' o 'rechazar'

const aprobar = () => {
    tipoAccion.value = 'aprobar';
    mostrarModal.value = true;
    
    setTimeout(() => {
        mostrarModal.value = false;
    }, 1500);
};

const rechazar = () => {
    tipoAccion.value = 'rechazar';
    mostrarModal.value = true;
    
    setTimeout(() => {
        mostrarModal.value = false;
    }, 1500);
};

</script>

<template>
    <br>
    <h5 class="text-center uppercase text-xl">Solicitud de Sucursal</h5>
    <br>
    <form action="" class="px-5 py-2 relative">

        <div class="absolute -top-5 right-0 cursor-pointer">
            <CloseIcon />
        </div>

        <!-- MODAL OKEY -->
        <div v-show="mostrarModal" id="modalAceptacion" class="absolute w-full h-full flex items-center justify-center z-5">
            <div class="bg-[#F2F2F7] w-[50%] h-[50%] rounded-2xl flex items-center justify-around flex-col"
                 :class="tipoAccion === 'aprobar' ? 'text-[#00FF26]' : 'text-[#FF0000]'">
                <div class="border-8 p-3 rounded-full">
                    <likeIcon v-if="tipoAccion === 'aprobar'" tamanio="100"/>
                    <dislikeIcon v-else tamanio="100"/>
                </div>
                <h1 class="text-4xl text-gray-500 text-center">
                    Se ha 
                    <span class="uppercase font-bold" 
                          :class="tipoAccion === 'aprobar' ? 'text-[#00FF26]' : 'text-[#FF0000]'">
                        {{ tipoAccion === 'aprobar' ? 'aprobado' : 'rechazado' }}
                    </span> 
                    la solicitud
                </h1>
            </div>
        </div>
        
        <div class="flex gap-5">
            <div class="flex-1">
                <div class="containerInputs">
                    <label for="citricidad">Citricidad</label>
                    <input type="text" name="citricidad" id="citricidad" readonly value="Baja">
                </div>

                <div class="containerInputs">
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" readonly value="Juan Carlos">
                </div>

                <div class="containerInputs">
                    <label for="apellidoPaterno">apellido paterno</label>
                    <input type="text" name="apellidoPaterno" id="apellidoPaternoInput" readonly value="TORRES">
                </div>

                <div class="containerInputs">
                    <label for="apellidoMaterno">apellido materno</label>
                    <input type="text" name="apellidoMaterno" id="apellidoMaternoInput" readonly value="ÁLVARES">
                </div>

                <div class="containerInputs">
                    <label for="ine">ine (ocr)</label>
                    <input type="text" name="ine" id="ineInput" maxlength="13" readonly value="IINB78976">
                </div>
                
                <div class="containerInputs">
                    <label for="colaborador">Colaborador</label>
                    <input type="text" name="colaborador" id="colaboradorInput" readonly value="MARÍA MARTINEZ BARRERA">
                </div>
            </div>

            <div class="flex-1">
                <div class="containerInputs">
                    <label for="sucursal">ID Sucursal</label>
                    <input type="text" name="sucursal" id="sucursal" readonly value="sucursal paseo 60">
                </div>

                <div class="containerInputs">
                    <label for="caja">caja</label>
                    <input type="text" name="caja" id="cajaInput" readonly value="N01">
                </div>

                <div class="sin-flechitas containerInputs">
                    <label for="monto">monto</label>
                    <input type="text" name="monto" id="montoInput" readonly value="$100">
                </div>

                <div class="containerInputs">
                    <label for="tipoOperacion">tipo de operación</label>
                    <input type="text" name="tipoOperacion" id="tipoOperacion" readonly value="ALTA DE EMPEÑO">
                </div>

                <div class="containerInputs">
                    <label for="fechaSolicitud">Fecha De Solicitud</label>
                    <input type="text" name="fechaSolicitud" id="fechaSolicitud" value="31/10/2025">
                </div>

                <div class="containerInputs">
                    <label for="horarioSolicitud">Hora de Solicitud</label>
                    <input type="text" name="horarioSolicitud" id="horarioSolicitud" value="10:35 A.M">
                </div>
            </div>
        </div>

        
        <div class="flex items-center justify-center gap-50">
            <button type="button" @click="rechazar">Rechazar</button>
            <button type="button" @click="aprobar">Aprobar</button>
        </div>

    </form>
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
    border: none;
    outline: none;
    cursor: default;
}

button{
    padding: 8px 64px;
    background-color: #7A5CFA;
    border-radius: 10px;
    color: white;
    cursor: pointer;
}

#citricidad {
    font-size: 24px;
    font-weight: bold;
    color: #00FF26;
}

#modalAceptacion {
    background-color: rgba(128, 128, 128, .6);
}

</style>