<script setup lang="ts">
const layout = "default";
</script>

<template>
  <NuxtLoadingIndicator color="red" />
  <Suspense>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </Suspense>
</template>
