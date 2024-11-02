<template>
  <div class="mt-4">
    <!-- Barra de búsqueda -->
    <div class="flex items-center space-x-2 mb-4 max-w-lg drop-shadow-md">
      <!-- Contenedor del Buscador -->
      <div class="relative w-full sm:w-80">
        <div class="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
          <Icon name="uil:search" class="w-5 h-5 text-gray-500" />
        </div>
        <input type="text"
               v-model="searchQuery"
               class="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
               placeholder="Buscar empresa" />
      </div>

      <!-- Botón de Filtro -->
      <button
          class="flex items-center justify-center w-11 h-11 rounded-full border border-gray-300 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 transition-all duration-300">
        <Icon name="uil:filter" class="w-5 h-5 text-gray-500" />
      </button>
    </div>

    <!-- Grid de empresas -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <div v-for="empresa in filteredEmpresas" :key="empresa.id"
           @click="showEmpresaDetails(empresa)"
           class="cursor-pointer bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <p class="text-lg text-black font-semibold">{{ empresa.nombre }}</p>
        <p class="text-slate-500 font-medium">Teléfono: {{ empresa.telefono }}</p>
        <p class="text-slate-500 font-medium">Ubicación: {{ empresa.ubicacion }}</p>
        <p class="text-slate-500 font-medium">Pasantes: {{ empresa.pasantes.join(", ") }}</p>
      </div>
    </div>

    <!-- Modal de Detalles de Empresa -->
    <div v-if="selectedEmpresa" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-lg w-11/12 md:w-2/3 lg:w-1/4 p-6 relative">
        <button @click="closeModal"
                class="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          <Icon name="uil:times" class="w-6 h-6" />
        </button>
        <h2 class="text-2xl font-bold mb-4">{{ selectedEmpresa.nombre }}</h2>
        <p class="text-slate-500 mb-2"><strong>Teléfono:</strong> {{ selectedEmpresa.telefono }}</p>
        <p class="text-slate-500 mb-2"><strong>Correo:</strong> {{ selectedEmpresa.correo }}</p>
        <p class="text-slate-500 mb-2"><strong>Ubicación:</strong> {{ selectedEmpresa.ubicacion }}</p>
        <p class="text-slate-500 mb-4"><strong>Pasantes:</strong> {{ selectedEmpresa.pasantes.join(", ") }}</p>
        
        <div class="flex space-x-2">
          <!-- Botón de llamada -->
          <a class="flex items-center justify-center px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
             :href="`tel:${selectedEmpresa.telefono}`">
            <Icon name="uil:phone" class="w-5 h-5" />
          </a>
          <!-- Botón de correo -->
          <a class="flex items-center justify-center px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
             :href="`mailto:${selectedEmpresa.correo}`">
            <Icon name="uil:envelope" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const empresas = ref([
  {
    id: 1,
    nombre: "Empresa 1",
    telefono: 123456789,
    correo: "empresa1@test.com",
    pasantes: ["Pasante 1", "Pasante 2"],
    ubicacion: "Ciudad A"
  },
  {
    id: 2,
    nombre: "Empresa 2",
    telefono: 987654321,
    correo: "empresa2@test.com",
    pasantes: ["Pasante 3", "Pasante 4"],
    ubicacion: "Ciudad B"
  },
  {
    id: 3,
    nombre: "Empresa 3",
    telefono: 555555555,
    correo: "empresa3@test.com",
    pasantes: ["Pasante 5"],
    ubicacion: "Ciudad C"
  },
  {
    id: 4,
    nombre: "Empresa 4",
    telefono: 444444444,
    correo: "empresa4@test.com",
    pasantes: ["Pasante 6", "Pasante 7"],
    ubicacion: "Ciudad D"
  },
  {
    id: 5,
    nombre: "Empresa 5",
    telefono: 333333333,
    correo: "empresa5@test.com",
    pasantes: ["Pasante 8"],
    ubicacion: "Ciudad E"
  },
  {
    id: 6,
    nombre: "Empresa 6",
    telefono: 222222222,
    correo: "empresa6@test.com",
    pasantes: ["Pasante 9"],
    ubicacion: "Ciudad F"
  },
  {
    id: 7,
    nombre: "Empresa 7",
    telefono: 111111111,
    correo: "empresa7@test.com",
    pasantes: ["Pasante 10", "Pasante 11"],
    ubicacion: "Ciudad G"
  },
  {
    id: 8,
    nombre: "Empresa 8",
    telefono: 666666666,
    correo: "empresa8@test.com",
    pasantes: [],
    ubicacion: "Ciudad H"
  },
  {
    id: 9,
    nombre: "Empresa 9",
    telefono: 777777777,
    correo: "empresa9@test.com",
    pasantes: ["Pasante 1", "Pasante 3"],
    ubicacion: "Ciudad I"
  },
  {
    id: 10,
    nombre: "Empresa 10",
    telefono: 888888888,
    correo: "empresa10@test.com",
    pasantes: ["Pasante 2", "Pasante 4", "Pasante 5"],
    ubicacion: "Ciudad J"
  }
]);


const searchQuery = ref("");
const selectedEmpresa = ref(null);

const filteredEmpresas = computed(() => {
  return empresas.value.filter((empresa) =>
    empresa.nombre.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

function showEmpresaDetails(empresa) {
  selectedEmpresa.value = empresa;
}

function closeModal() {
  selectedEmpresa.value = null;
}
</script>

<style scoped>
/* Ocultar scrollbar para una experiencia más fluida */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
