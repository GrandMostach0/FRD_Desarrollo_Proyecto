<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
    <br>
    <h5 class="text-center uppercase text-xl">registro de solicitud</h5>
    <br>
    <form action="" class="px-5 py-2">
        <div class="flex gap-5 ">
            <div class="flex-1">
                <div class="containerInputs">
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombreInput" placeholder="JUAN CARLOS">
                </div>

                <div class="containerInputs">
                    <label for="apellidoPaterno">apellido paterno</label>
                    <input type="text" name="apellidoPaterno" id="apellidoPaternoInput" placeholder="TORRES">
                </div>

                <div class="containerInputs">
                    <label for="apellidoMaterno">apellido materno</label>
                    <input type="text" name="apellidoMaterno" id="apellidoMaternoInput" placeholder="ÁLVARES">
                </div>

                <div class="containerInputs">
                    <label for="ine">ine (ocr)</label>
                    <input type="text" name="ine" id="ineInput" placeholder="IINB78976">
                </div>
                
                <div class="containerInputs">
                    <label for="colaborador">Colaborador</label>
                    <input type="text" name="colaborador" id="colaboradorInput" placeholder="MARÍA MARTINEZ BARRERA">
                </div>
            </div>

            <div class="flex-1">
                <div class="containerInputs">
                    <label for="selectSucursal">nombre de la sucursal</label>
                    <select name="selectSucursal" id="selectSucursal">
                        <option value="1">Buscar</option>
                        <option value="2">Sucursal 1</option>
                        <option value="3">Sucursal 2</option>
                    </select>
                </div>

                <div class="containerInputs">
                    <label for="caja">caja</label>
                    <input type="text" name="caja" id="cajaInput" placeholder="N01">
                </div>

                <div class="containerInputs">
                    <label for="monto">monto</label>
                    <input type="number" name="monto" id="montoInput" placeholder="$">
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
            <button>Solicitar</button>
            <button @click="router.push('/')">Cancelar</button>
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
}

button{
    padding: 8px 64px;
    background-color: #7A5CFA;
    border-radius: 10px;
    color: white;
    cursor: pointer;
}

input:focus, select:focus{
    outline: 3px solid #7A5CFA;
}

</style>