<template>
    <div class="max-w-full mt-12 grid gap-5 lg:grid-cols-3">
        <!-- Columna izquierda ocupando 2/3 del ancho -->
        <div class="flex flex-col overflow-hidden lg:col-span-2 lg:border-r-2 lg:border-gray-200 lg:p-4">
            <ReportesEmpresa />
        </div>
        
        <!-- Columna derecha ocupando 1/3 del ancho -->
        <div class="flex flex-col overflow-hidden">
            <PasantesCarruselEmpresa />
        </div>
    </div>
</template>
