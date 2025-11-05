<script setup>
    import ListaRegistrosHisto from './ListaRegistrosHisto.vue';
    import SolicitudHistorialView from './Solicitud-Historial-View.vue';
    import SearchIcon from '../assets/icons/Search-icon.vue';
</script>

<template>
    <main class="flex gap-8 p-1 h-[99%] overflow-hidden">
        <div id="buscador" class="flex flex-col gap-4 w-[30%] overflow-y-auto p-2 [direction:rtl]">
            <div id="barra-buscadora" class="relative w-full max-w-md" >
                <input
                    type="text"
                    v-model="searchQuery"
                    placeholder="BÚSQUEDA..."
                    class="p-2 border rounded-2xl [direction:ltr]"
                    icon-component = "<SearchIcon/>"
                 />
                 <SearchIcon class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer" />
            </div>
            
            <div id="card-histo">
                <ListaRegistrosHisto class="[direction:ltr]"/>
            </div>            
        </div>

        <div id="detalles-title" class="flex-1 overflow-y-auto">
            <h1 class="text-center mb-6">HISTORIAL DE SOLICITUDES</h1>
            <div id="detalles-content" class="p-4 border rounded-lg bg-[#F7F7F7] ">
                <SolicitudHistorialView />
            </div>
        </div>
    </main>
</template>