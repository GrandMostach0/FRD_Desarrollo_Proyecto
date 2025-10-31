<script setup></script>

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
                    <input type="text" name="apellidoPaterno" id="apellidoPaterno" placeholder="TORRES">
                </div>

                <div class="containerInputs">
                    <label for="apellidoMaterno">apellido materno</label>
                    <input type="text" name="apellidoMaterno" id="apellidoMaterno" placeholder="ÁLVARES">
                </div>

                <div class="containerInputs">
                    <label for="nombre">ine (ocr)</label>
                    <input type="text" name="nombre" id="nombreInput" placeholder="">
                </div>
                
                <div class="containerInputs">
                    <label for="colaborador">Colaborador</label>
                    <input type="text" name="colaborador" id="colaborador" placeholder="MARÍA MARTINEZ BARRERA">
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
            <button>Cancelar</button>
        </div>

    </form>
</template>

<style scoped>

.containerInputs{
    margin-bottom: 15px;
}

label, input{
    display: block;
}

label{
    text-transform: uppercase;
    font-size: smaller;
}

input, select{
    width: 100%;
    padding: 8px;
    border: 1px solid gray;
    border-radius: 5px;
}

button{
    padding: 8px;
    background-color: blueviolet;
}

</style>