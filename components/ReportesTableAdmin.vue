<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto">
      <div class="inline-block min-w-full align-middle m-4">
        <div class="flex items-center space-x-2 mb-4 max-w-lg drop-shadow-md">
          <!-- Contenedor del Buscador -->
          <div class="relative w-full sm:w-80">
            <div class="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
              <Icon name="uil:search" class="w-5 h-5 text-gray-500" />
            </div>
            <input type="text"
              class="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
              placeholder="Buscar pasante" />
          </div>

          <!-- Botón de Filtro -->
          <button
            class="flex items-center justify-center w-11 h-11 rounded-full border border-gray-300 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 transition-all duration-300">
            <Icon name="uil:filter" class="w-5 h-5 text-gray-500" />
          </button>
        </div>


        <div class="overflow-x-auto w-full">
          <table class="min-w-full table-auto rounded-xl border border-gray-200">
            <thead>
              <tr class="bg-gray-50">
                <th></th>
                <th scope="col"
                  class="p-3 sm:p-5 text-left text-xs sm:text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">
                  Pasante
                </th>
                <th scope="col"
                  class="p-3 sm:p-5 text-left text-xs sm:text-sm leading-6 font-semibold text-gray-900 capitalize">
                  Urgencia
                </th>
                <th scope="col"
                  class="p-3 sm:p-5 text-left text-xs sm:text-sm leading-6 font-semibold text-gray-900 capitalize">
                  Fecha
                </th>
                <th scope="col"
                  class="p-3 sm:p-5 text-left text-xs sm:text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-300">
              <tr class="bg-white transition-all duration-500 hover:bg-gray-50">
                <td class="p-3 sm:p-5 text-xs sm:text-sm leading-6 font-medium text-gray-900 text-center">
                  <label class="inline-flex items-center" for="redCheckBox">
                    <input id="redCheckBox" type="checkbox" class="w-4 h-4 accent-red-600" checked>
                  </label>
                </td>
                <td class="p-3 sm:p-5 whitespace-nowrap text-xs sm:text-sm leading-6 font-medium text-gray-900">
                  Louis Vuitton
                </td>
                <td class="p-3 sm:p-5 whitespace-nowrap text-xs sm:text-sm leading-6 font-medium text-gray-900">
                  Customer
                </td>
                <td class="p-3 sm:p-5 whitespace-nowrap text-xs sm:text-sm leading-6 font-medium text-gray-900">
                  Accessories
                </td>
                <td class="p-3 sm:p-5">
                  <button class="p-2 rounded-full group transition-all duration-500 flex items-center">
                    <Icon name="uil:trash-alt" class="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
