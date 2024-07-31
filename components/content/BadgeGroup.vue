<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: 'sm' | 'md' // gap | sm - 2px , md - 4px
}>(), {
  size: 'md',
});

const className = computed(() => {
  let cNm = 'badge-';
  cNm += props.size;
  cNm += '-group';
  return cNm;
});
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/badge.scss');
</style>
