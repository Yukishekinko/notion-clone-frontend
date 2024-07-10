<template>
  <div class="h-full sticky top-0">
    <div class="flex flex-col h-full">
      <div class="border-b">
        <div class="py-2 flex gap-3 items-center">
          <Icon name="lucide:settings" size="1.5em"/>
          <span>
            Settings
          </span>
        </div>
      </div>
      <VScrollArea class="flex-1">
        <template v-for="index in 50">
          <p> {{ index }}</p>
        </template>
      </VScrollArea>
      <div class="border-t">
        bottom
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>