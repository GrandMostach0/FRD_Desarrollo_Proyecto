<script setup>
    import SolicitudCardHistorial from './SolicitudCardHistorial.vue';
</script>

<template>
    <div class="">
        <a href="/panelAdmin/historialRegistros">
            <SolicitudCardHistorial  fecha="22/10/2025" hora="10:30 A.M" nombre-sucursal="Sucursal El Paso" status="APROBADO"/>
        </a>
        <SolicitudCardHistorial fecha="1/10/2025" hora="10:50 A.M" nombre-sucursal="Sucursal Las Flores "  status="RECHAZADO"/>
        <SolicitudCardHistorial fecha="22/10/2025" hora="10:30 A.M" nombre-sucursal="Sucursal Paseo 60"  status="APROBADO"/>
        <SolicitudCardHistorial fecha="22/10/2025" hora="10:30 A.M" nombre-sucursal="Sucursal Montejo"  status="APROBADO"/>
        <SolicitudCardHistorial fecha="22/10/2025" hora="10:30 A.M" nombre-sucursal="Sucursal Patito" status="RECHAZADO"/>
        <SolicitudCardHistorial fecha="22/10/2025" hora="10:30 A.M" nombre-sucursal="Sucursal Las Flores " status="RECHAZADO"/>
        <SolicitudCardHistorial fecha="22/10/2025" hora="10:30 A.M" nombre-sucursal="Sucursal Paseo 60"  status="APROBADO"/>
        <SolicitudCardHistorial fecha="22/10/2025" hora="10:30 A.M" nombre-sucursal="Sucursal Montejo" status="APROBADO"/>
        <SolicitudCardHistorial fecha="22/10/2025" hora="10:30 A.M" nombre-sucursal="Sucursal Patito"  status="APROBADO"/>
    </div>

</template>