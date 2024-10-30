<template>
  <header class="header bg-white shadow p-4 flex justify-between items-center">
    <!-- Menú de navegación izquierda -->
    <nav class="flex gap-4 items-center">
      <a href="#" class="text-lg font-semibold text-gray-700 hover:text-purple-500 transition">Inicio</a>
      <a href="#" class="text-lg font-semibold text-gray-700 hover:text-purple-500 transition">Reportes</a>
    </nav>

    <!-- Título central con nombre de la empresa -->
    <div class="flex-1 text-center">
      <h1 class="text-2xl font-bold text-fuchsia-950 uppercase tracking-widest">Empresa</h1>
    </div>

    <!-- Logo en el lado derecho, más grande -->
    <div class="flex items-center">
      <img src="/assets/img/logonegro.png" alt="Logo" class="h-16 w-auto object-contain" />
    </div>
  </header>
</template>