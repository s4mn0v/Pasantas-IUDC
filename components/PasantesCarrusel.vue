<template>
    <div class="mt-4">
      <!-- Barra de búsqueda -->
      <div class="mb-4">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Buscar pasante por nombre..."
          class="w-full p-2 border border-gray-300 rounded-lg shadow-sm outline-none"
        />
      </div>

      <!-- Carrusel de pasantes -->
      <div class="carousel-container">
        <div class="carousel">
          <div
            v-for="pasante in filteredPasantes"
            :key="pasante.id"
            class="flex-shrink-0 w-64 bg-gray-200 p-4 rounded-lg shadow-md mr-4"
          >
            <h4 class="text-lg font-bold">{{ pasante.nombre }}</h4>
            <p>Carrera: {{ pasante.carrera }}</p>
            <p>Semestre: {{ pasante.semestre }}</p>
            <p>Horas trabajadas: {{ pasante.horas_trabajadas }}</p>
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
    horas_trabajadas: 20,
  },
  {
    id: 2,
    nombre: "Pasante 2",
    carrera: "Administración",
    semestre: 4,
    horas_trabajadas: 15,
  },
  {
    id: 3,
    nombre: "Pasante 3",
    carrera: "Derecho",
    semestre: 3,
    horas_trabajadas: 10,
  },
  {
    id: 4,
    nombre: "Pasante 4",
    carrera: "Ingeniería",
    semestre: 7,
    horas_trabajadas: 25,
  },
  {
    id: 5,
    nombre: "Pasante 5",
    carrera: "Psicología",
    semestre: 6,
    horas_trabajadas: 18,
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
/* Contenedor del carrusel */
.carousel-container {
  overflow-x: auto;
  display: flex;
  -webkit-overflow-scrolling: touch;
}

.carousel {
  display: flex;
  gap: 1rem;
  padding-bottom: 1rem;
}

.carousel::-webkit-scrollbar {
  height: 8px;
}

.carousel::-webkit-scrollbar-thumb {
  background-color: #a855f7; /* Personaliza el color del scroll */
  border-radius: 4px;
}

.carousel::-webkit-scrollbar-track {
  background-color: #f3f4f6;
}
</style>
