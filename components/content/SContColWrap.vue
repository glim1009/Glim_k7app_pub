<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  gap?: 'zero' | 'xs' | 'sm' | 'md' | 'lg'; // zero - 0, xs - 10px, sm - 16px, md - 24px, lg - 30px
}>(), {
  gap: 'md',
});

const className = computed(() => {
  let cNm = 'scont-col';
  cNm += '-' + props.gap;
  cNm += '-wrap';
  return cNm;
});
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/sContLineBox.scss');
</style>
