<template>
  <header class="header bg-white shadow p-4 flex justify-between items-center">
    <!-- Menú de navegación izquierda -->
    <nav class="flex gap-8 items-center">
      <a href="#" class="text-lg font-semibold text-gray-700 hover:text-purple-500 transition">INICIO</a>
      <a href="#" class="text-lg font-semibold text-gray-700 hover:text-purple-500 transition">REPORTES</a>
    </nav>

    <!-- Título central con nombre de la empresa -->
    <div class="flex-1 text-center">
      <h1 class="text-2xl font-bold text-purple-500">EMPRESA</h1>
    </div>

    <!-- Logo en el lado derecho, más grande -->
    <div class="flex items-center">
      <img src="/assets/img/logonegro.png" alt="Logo" class="h-16 w-auto object-contain" />
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: #f9f9f9;
}
.header a {
  color: #6b7280;
}
.header a:hover {
  color: #7c3aed;
}
</style>
