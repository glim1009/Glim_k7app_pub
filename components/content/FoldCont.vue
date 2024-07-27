<template>
  <div class="fold-cont" v-if="isOpen">
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