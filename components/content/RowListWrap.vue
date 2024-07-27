<template>
  <div :class="WrapClassName">
    <ul :class="listClassName">
      <slot></slot>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg'; // 2xs - 6px, xs - 10px, sm - 16px, md - 24px, lg - 30px
  gap?: 'line' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'; // sm - 6px, md - 10px, lg - 16px, xl - 24px
}>(), {
  gap: 'md',
});

const listClassName = computed(() => {
  let cNm = 'row-';
  cNm += props.gap;
  cNm += '-list';
  return cNm;
});

const WrapClassName = computed(() => {
  let cNm = 'rlist';
  if (props.size !== undefined)
    cNm += `-${props.size}`;
  cNm += '-wrap';
  return cNm;
});
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/rowListWrap.scss');
</style>
