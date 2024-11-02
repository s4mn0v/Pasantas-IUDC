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
               placeholder="Buscar pasante" />
      </div>

      <!-- Botón de Filtro -->
      <button
          class="flex items-center justify-center w-11 h-11 rounded-full border border-gray-300 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 transition-all duration-300">
        <Icon name="uil:filter" class="w-5 h-5 text-gray-500" />
      </button>
    </div>

    <!-- Grid de pasantes -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <div v-for="pasante in filteredPasantes" :key="pasante.id"
           @click="showPasanteDetails(pasante)"
           class="flex w-full bg-white p-4 rounded-lg shadow-md items-center space-x-4 cursor-pointer">
        <img class="h-24 w-24 rounded-full" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Pasante's Face" />
        <div class="space-y-2">
          <div>
            <p class="text-lg text-black font-semibold">{{ pasante.nombre }}</p>
            <p class="text-slate-500 font-medium">Carrera: {{ pasante.carrera }}</p>
            <p class="text-slate-500 font-medium">Semestre: {{ pasante.semestre }}</p>
            <p class="text-slate-500 font-medium">Empresa: {{ pasante.empresa }}</p>
          </div>
          <!-- Contenedor de botones de llamada y WhatsApp -->
          <div class="flex space-x-2">
            <!-- Botón de llamada -->
            <a class="flex items-center justify-center px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
               :href="`tel:${pasante.telefono}`">
              <Icon name="uil:incoming-call" class="w-5 h-5" />
            </a>
            <!-- Botón de WhatsApp -->
            <a class="flex items-center justify-center px-4 py-1 text-sm text-green-600 font-semibold rounded-full border border-green-200 hover:text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
               :href="`https://wa.me/${pasante.telefono}`" target="_blank">
              <Icon name="uil:whatsapp" class="w-5 h-5" />
            </a>
            <!-- Botón de Reportes -->
            <a class="flex items-center justify-center px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">
              <Icon name="uil:edit" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de Detalles de Pasante -->
    <div v-if="selectedPasante" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-lg w-11/12 md:w-2/3 lg:w-1/4 p-6 relative">
        <button @click="closeModal"
                class="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          <Icon name="uil:times" class="w-6 h-6" />
        </button>
        <h2 class="text-2xl font-bold mb-4">{{ selectedPasante.nombre }}</h2>
        <p class="text-slate-500 mb-2"><strong>Carrera:</strong> {{ selectedPasante.carrera }}</p>
        <p class="text-slate-500 mb-2"><strong>Semestre:</strong> {{ selectedPasante.semestre }}</p>
        <p class="text-slate-500 mb-2"><strong>Teléfono:</strong> {{ selectedPasante.telefono }}</p>
        <p class="text-slate-500 mb-2"><strong>Correo:</strong> {{ selectedPasante.correo }}</p>
        <p class="text-slate-500 mb-4"><strong>Empresa:</strong> {{ selectedPasante.empresa }}</p>

        <div class="flex space-x-2">
          <!-- Botón de llamada -->
          <a class="flex items-center justify-center px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
             :href="`tel:${selectedPasante.telefono}`">
            <Icon name="uil:phone" class="w-5 h-5" />
          </a>
          <!-- Botón de correo -->
          <a class="flex items-center justify-center px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
             :href="`mailto:${selectedPasante.correo}`">
            <Icon name="uil:envelope" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Lista de pasantes
const pasantes = ref([
  { id: 1, nombre: "Pasante 1", carrera: "Ingeniería", semestre: 5, telefono: 12345, correo: "test1@test.com", empresa: "IUDC" },
  { id: 2, nombre: "Pasante 2", carrera: "Administración", semestre: 4, telefono: 54321, correo: "test2@test.com", empresa: "IUDC" },
  { id: 3, nombre: "Pasante 3", carrera: "Diseño Gráfico", semestre: 6, telefono: 67890, correo: "test3@test.com", empresa: "IUDC" },
  { id: 4, nombre: "Pasante 4", carrera: "Ciencias de la Computación", semestre: 7, telefono: 11223, correo: "test4@test.com", empresa: "IUDC" },
  { id: 5, nombre: "Pasante 5", carrera: "Psicología", semestre: 3, telefono: 44556, correo: "test5@test.com", empresa: "IUDC" },
  { id: 6, nombre: "Pasante 6", carrera: "Contabilidad", semestre: 5, telefono: 77889, correo: "test6@test.com", empresa: "IUDC" },
  { id: 7, nombre: "Pasante 7", carrera: "Marketing", semestre: 4, telefono: 99000, correo: "test7@test.com", empresa: "IUDC" },
  { id: 8, nombre: "Pasante 8", carrera: "Biología", semestre: 6, telefono: 12321, correo: "test8@test.com", empresa: "IUDC" },
  { id: 9, nombre: "Pasante 9", carrera: "Ingeniería Industrial", semestre: 8, telefono: 45654, correo: "test9@test.com", empresa: "IUDC" },
  { id: 10, nombre: "Pasante 10", carrera: "Derecho", semestre: 5, telefono: 78978, correo: "test10@test.com", empresa: "IUDC" },
]);

const searchQuery = ref("");
const selectedPasante = ref(null);

const filteredPasantes = computed(() => {
  return pasantes.value.filter((pasante) =>
    pasante.nombre.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

function showPasanteDetails(pasante) {
  selectedPasante.value = pasante;
}

function closeModal() {
  selectedPasante.value = null;
}
</script>

<style scoped>
/* Ocultar scrollbar para una experiencia más fluida */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
