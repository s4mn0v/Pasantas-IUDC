<template>
  <div class="mt-4">
    <!-- Barra de búsqueda -->
    <div class="mb-4">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Buscar pasante por nombre..."
        class="w-full p-2 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>

    <!-- Carrusel de pasantes -->
    <div class="overflow-x-auto flex gap-4 pb-4 scrollbar-hide">
      <div
        v-for="pasante in filteredPasantes"
        :key="pasante.id"
        class="flex-shrink-0 w-64 bg-white p-4 rounded-lg shadow-md mr-4"
      >
        <h4 class="text-lg font-bold text-gray-800">{{ pasante.nombre }}</h4>
        <p class="text-gray-600">Carrera: {{ pasante.carrera }}</p>
        <p class="text-gray-600">Semestre: {{ pasante.semestre }}</p>
        <p class="text-gray-600">Horas trabajadas: {{ pasante.horas_trabajadas }}</p>
        <button class="mt-2 flex items-center text-purple-600">
          <Icon name="uil:incoming-call" class="mr-2" />
          Telefono: {{ pasante.telefono }}
        </button>
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
    horas_trabajadas: 20,
    telefono: 12345,
  },
{
  id: 2,
  nombre: "Pasante 2",
  carrera: "Administración",
  semestre: 4,
  horas_trabajadas: 15,
  telefono: 54321,
},
{
  id: 3,
  nombre: "Pasante 3",
  carrera: "Derecho",
  semestre: 3,
  horas_trabajadas: 10,
  telefono: 98760,
},
{
  id: 4,
  nombre: "Pasante 4",
  carrera: "Ingeniería",
  semestre: 7,
  horas_trabajadas: 25,
  telefono: 87656,
},
{
  id: 5,
  nombre: "Pasante 5",
  carrera: "Psicología",
  semestre: 6,
  horas_trabajadas: 18,
  telefono: 67253,
},
{
  id: 6,
  nombre: "Pasante 6",
  carrera: "Psicología",
  semestre: 6,
  horas_trabajadas: 18,
  telefono: 67253,
},
{
  id: 7,
  nombre: "Pasante 7",
  carrera: "Psicología",
  semestre: 6,
  horas_trabajadas: 18,
  telefono: 67253,
},
{
  id: 8,
  nombre: "Pasante 8",
  carrera: "Psicología",
  semestre: 6,
  horas_trabajadas: 18,
  telefono: 67253,
},
{
  id: 9,
  nombre: "Pasante 9",
  carrera: "Psicología",
  semestre: 6,
  horas_trabajadas: 18,
  telefono: 67253,
},
{
  id: 10,
  nombre: "Pasante 10",
  carrera: "Psicología",
  semestre: 6,
  horas_trabajadas: 18,
  telefono: 67253,
},
  // Agrega más pasantes según necesites
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
/* Ocultar scrollbar para una experiencia más fluida en el carrusel */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
