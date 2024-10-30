<script setup lang="ts">
const layout = "logged";
</script>

<template>
  <!-- Nuxt Loader for suspense -->
  <NuxtLoadingIndicator color="red" />
  <Suspense>
    <NuxtLayout :name="layout">
      <div class="bg-gray-100 h-screen w-screen p-5">
        <NuxtPage />
      </div>
    </NuxtLayout>
  </Suspense>
</template>