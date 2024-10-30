<template>
  <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[550px]">
      <form>
        <!-- Búsqueda por cédula -->
        <div class="mb-5">
          <label for="cedula" class="mb-3 block text-base font-medium">
            Búsqueda del pasante por cédula
          </label>
          <input type="text" name="cedula" id="cedula" placeholder="Ingrese cédula"
            class="w-full rounded-md border py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md" />
        </div>

        <!-- Clasificación -->
        <div class="mb-5">
          <label for="classification" class="mb-3 block text-base font-medium text-[#07074D]">
            Clasificación
          </label>
          <select name="classification" id="classification"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
            <option value="" disabled selected>Seleccione una opción</option>
            <option value="verde" class="bg-green-200 uppercase">Verde</option>
            <option value="amarillo" class="bg-yellow-200 uppercase">Amarillo</option>
            <option value="rojo" class="bg-red-200 uppercase">Rojo</option>
          </select>
        </div>

        <!-- Comentarios -->
        <div class="mb-5">
          <label for="comments" class="mb-3 block text-base font-medium text-[#07074D]">
            Comentarios
          </label>
          <textarea name="comments" id="comments" rows="4" placeholder="Escribe comentarios aquí..."
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            maxlength="450"></textarea>
        </div>

        <!-- Botón de envío -->
        <div>
          <button
            class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
            Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>