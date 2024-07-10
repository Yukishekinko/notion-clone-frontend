<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
  const colorMode = useColorMode();

  useSeoMeta({
    title: 'Notionly'
  })
</script>

<style>
</style>