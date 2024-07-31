<template>
  <div class="fold-cont">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>();

</script>

<style lang="scss" scoped>

</style>