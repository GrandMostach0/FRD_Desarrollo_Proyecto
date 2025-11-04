<script setup>

</script>

<template >
    <div class="flex gap-5">
            <div class="flex-1">
                <div class="containerInputs">
                    <label for="citricidad">CRITICIDAD</label>
                    <input type="text" name="citricidad" id="citricidad" readonly value="Baja">
                </div>

                <div class="containerInputs">
                    <label for="nombre">NOMBRE</label>
                    <input type="text" name="nombre" id="nombre" readonly value="Juan Carlos">
                </div>

                <div class="containerInputs">
                    <label for="apellidoPaterno">APELLIDO PATERNO</label>
                    <input type="text" name="apellidoPaterno" id="apellidoPaternoInput" readonly value="TORRES">
                </div>

                <div class="containerInputs">
                    <label for="apellidoMaterno">APELLIDO MATERNO</label>
                    <input type="text" name="apellidoMaterno" id="apellidoMaternoInput" readonly value="ÁLVARES">
                </div>

                <div class="containerInputs">
                    <label for="ine">INE (OCR)</label>
                    <input type="text" name="ine" id="ineInput" maxlength="13" readonly value="IINB78976">
                </div>
                
                <div class="containerInputs">
                    <label for="colaborador">COLABORADOR</label>
                    <input type="text" name="colaborador" id="colaboradorInput" readonly value="MARÍA MARTINEZ BARRERA">
                </div>
            </div>

            <div class="flex-1">
                <div class="containerInputs">
                    <label for="sucursal">ID SUCURSAL</label>
                    <input type="text" name="sucursal" id="sucursal" readonly value="sucursal paseo 60">
                </div>

                <div class="containerInputs">
                    <label for="caja">CAJA</label>
                    <input type="text" name="caja" id="cajaInput" readonly value="N01">
                </div>

                <div class="sin-flechitas containerInputs">
                    <label for="monto">MONTO</label>
                    <input type="text" name="monto" id="montoInput" readonly value="$100">
                </div>

                <div class="containerInputs">
                    <label for="tipoOperacion">TIPO DE OPERACIÓN</label>
                    <input type="text" name="tipoOperacion" id="tipoOperacion" readonly value="ALTA DE EMPEÑO">
                </div>

                <div class="containerInputs">
                    <label for="fechaSolicitud">FECHA DE SOLICITUD</label>
                    <input type="text" name="fechaSolicitud" id="fechaSolicitud" value="31/10/2025">
                </div>

                <div class="containerInputs">
                    <label for="horarioSolicitud">HORA DE SOLICITUD</label>
                    <input type="text" name="horarioSolicitud" id="horarioSolicitud" value="10:35 A.M">
                </div>
            </div>
    </div>
    <div class="flex items-center justify-center">
            <div class="containerInputs">
                    <input type="text" name="nombre" id="nombre" readonly value="APROBADO">
            </div>
    </div>
</template>