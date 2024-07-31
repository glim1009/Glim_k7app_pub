<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: 'md'; // gap | md - 4px, lg 추가 예정
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
