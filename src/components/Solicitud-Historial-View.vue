<script setup>

</script>

<template >
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
    <h1 class="uppercase text-center text-[#00FF26] font-bold underline text-2xl">aprobado</h1>
</template>


<style scoped>
    .containerInputs{
        margin-bottom: 5px;
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
        padding: 10px;
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