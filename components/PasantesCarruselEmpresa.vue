<template>
  <div class="mt-4">
    <!-- Barra de búsqueda -->
    <div class="mb-4 max-w-lg overflow-hidden drop-shadow-md">
          <div
            class="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none"
          >
            <Icon name="uil:search" class="w-5 h-5" />
          </div>
          <input
            type="text"
            v-model="searchQuery"
            class="block w-full sm:w-80 h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            placeholder="Buscar pasante"
          />
        </div>

    <!-- Carrusel de pasantes en una sola columna con datos al lado de la foto -->
    <div class="overflow-y-auto flex flex-col gap-4 h-screen pb-4 scrollbar-hide">
      <div v-for="pasante in filteredPasantes" :key="pasante.id"
        class="flex w-full bg-white p-4 rounded-lg shadow-md items-center space-x-4">
        <img class="h-24 w-24 rounded-full" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Pasante's Face" />
        <div class="space-y-2">
          <div>
            <p class="text-lg text-black font-semibold">{{ pasante.nombre }}</p>
            <p class="text-slate-500 font-medium">Carrera: {{ pasante.carrera }}</p>
            <p class="text-slate-500 font-medium">Semestre: {{ pasante.semestre }}</p>
          </div>
          <!-- Contenedor de botones de llamada y WhatsApp -->
          <div class="flex space-x-2">
            <!-- Botón de llamada -->
            <a class="flex items-center justify-center px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              :href="`tel:${pasante.telefono}`">
              <Icon name="uil:incoming-call" class="w-5 h-5" />
            </a>
            <!-- Botón de WhatsApp -->
            <a class="flex items-center justify-center px-4 py-1 text-sm text-green-600 font-semibold rounded-full border border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
              :href="`https://wa.me/${pasante.telefono}`" target="_blank">
              <Icon name="uil:whatsapp" class="w-5 h-5" />
            </a>
            <!-- Botón de Reportes -->
            <a class="flex items-center justify-center px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" target="_blank" href="./reportes">
              <Icon name="uil:file-plus-alt" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Lista de pasantes
const pasantes = ref([
  {
    id: 1,
    nombre: "Pasante 1",
    carrera: "Ingeniería",
    semestre: 5,
    telefono: 12345,
    correo: "test@test.com",
  },
  {
    id: 2,
    nombre: "Pasante 2",
    carrera: "Administración",
    semestre: 4,
    telefono: 54321,
    correo: "test@test.com",
  },
  {
    id: 3,
    nombre: "Pasante 3",
    carrera: "Derecho",
    semestre: 3,
    telefono: 98760,
    correo: "test@test.com",
  },
  {
    id: 4,
    nombre: "Pasante 4",
    carrera: "Ingeniería",
    semestre: 7,
    telefono: 87656,
    correo: "test@test.com",
  },
  {
    id: 5,
    nombre: "Pasante 5",
    carrera: "Psicología",
    semestre: 6,
    telefono: 67253,
    correo: "test@test.com",
  },
  {
    id: 6,
    nombre: "Pasante 6",
    carrera: "Psicología",
    semestre: 6,
    telefono: 67253,
    correo: "test@test.com",
  },
  {
    id: 7,
    nombre: "Pasante 7",
    carrera: "Psicología",
    semestre: 6,
    telefono: 67253,
    correo: "test@test.com",
  },
  {
    id: 8,
    nombre: "Pasante 8",
    carrera: "Psicología",
    semestre: 6,
    telefono: 67253,
    correo: "test@test.com",
  },
  {
    id: 9,
    nombre: "Pasante 9",
    carrera: "Psicología",
    semestre: 6,
    telefono: 67253,
    correo: "test@test.com",
  },
  {
    id: 10,
    nombre: "Pasante 10",
    carrera: "Psicología",
    semestre: 6,
    telefono: 67253,
    correo: "test@test.com",
  },
]);

// Búsqueda
const searchQuery = ref("");

// Filtrar pasantes según la búsqueda
const filteredPasantes = computed(() => {
  return pasantes.value.filter((pasante) =>
    pasante.nombre.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<style scoped>
/* Ocultar scrollbar para una experiencia más fluida */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
