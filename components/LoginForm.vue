<template>
  <div class="bg-gradient-to-t from-fuchsia-950 to-purple-600 min-h-screen flex justify-center items-center px-4">
    <div class="bg-white rounded-lg p-8 max-w-4xl w-full drop-shadow-2xl flex flex-col md:flex-row">
      <!-- Columna de la imagen (visible solo en computadoras) -->
      <div class="hidden md:block w-1/2">
        <img src="" alt="Descripción de la imagen" class="object-cover w-full h-full rounded-r-lg">
      </div>

      <!-- Columna del formulario -->
      <div class="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h1 class="text-4xl font-bold text-center text-fuchsia-950 mb-8">BIENVENIDO</h1>
        <form class="space-y-6">
          <div>
            <label class="block text-gray-700 font-bold mb-2" for="email">Email</label>
            <input type="text" id="name" name="name" placeholder="Ingresa tu email"
              class="border border-gray-300 shadow p-3 w-full rounded mb- outline-none">
          </div>
          <div>
            <label class="block text-gray-700 font-bold mb-2" for="password">
              Password
            </label>
            <input id="password" name="name" class="border border-gray-300 shadow p-3 w-full rounded mb- outline-none"
              type="password" placeholder="••••••••">
          </div>
          <div>
            <button class="w-full bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-lg">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>