<template>
  <div class="mt-4">
    <!-- Barra de búsqueda -->
    <div class="mb-4 max-w-lg overflow-hidden drop-shadow-md">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Buscar pasante por nombre..."
        class="w-full py-3 px-4 rounded-lg outline-none"
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
        <a class="mt-2 flex items-center text-purple-600" href="tel:{{ pasante.telefono }}">
          <Icon name="uil:incoming-call" class="mr-2" />
          Telefono: {{ pasante.telefono }}
        </a>
        <a class="mt-2 flex items-center text-purple-600" href="mailto:{{ pasante.correo }}">
          <Icon name="uil:fast-mail" class="mr-2"/>
          Correo: {{ pasante.correo }}
        </a>
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
/* Ocultar scrollbar para una experiencia más fluida en el carrusel */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
