<template>
  <div class="h-screen">
    <VResizablePanelGroup id="rpg-1" direction="horizontal">
      <VResizablePanel 
      id="rpg-1-p-1"
      class="bg-gray-50 dark:bg-neutral-800"
      :min-size="20"
      :default-size="20"
      :max-size="25"
      >
        <Sidebar/>
      </VResizablePanel>
      <VResizableHandle id="rpg-1-h-1" class="dark:bg-neutral-900"/>
      <VResizablePanel 
      id="rpg-1-p-2"
      class="bg-white dark:bg-neutral-800"
      >
        <slot />
      </VResizablePanel>
    </VResizablePanelGroup>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>