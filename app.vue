<script setup lang="ts">
const layout = "logged";
</script>

<template>
  <!-- Nuxt Loader for suspense -->
  <NuxtLoadingIndicator />
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
  