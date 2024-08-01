<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: 'zero' | 'xs' | 'sm' | 'md' | 'lg'; // zero - 0, xs - 10px, sm - 16px, md - 24px, lg - 30px
}>(), {
  size: 'md',
});

const className = computed(() => {
  let cNm = 'cont';
  cNm += '-' + props.size;
  cNm += '-box';
  return cNm;
});
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/contBox.scss');
</style>
