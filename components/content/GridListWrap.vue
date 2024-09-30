<template>
  <div :class="WrapClassName">
    <ul :class="[ listClassName, gapClass ]">
      <slot></slot>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: 'xs' | 'sm' | 'md' | 'lg'; // xs - 10px, sm - 16px, md - 24px, lg - 30px
  gap?: 'sm' | 'lg' | 'xl' | 'prod' | 'all-menu'; // sm - 6px, md - 10px, lg - 16px, xl - 24px
  col?: number | string, // 4 ~ 6
}>(), {
  col: 4,
});

const gapClass = computed(() => {
  if( !props.gap )  return false;
  else {
    return 'gap-' + props.gap;
  }
});

const listClassName = computed(() => {
  let cNm = 'grid';
  if (props.gap !== 'prod')
    cNm += '-col' + props.col;
  cNm += '-list';
  return cNm;
});

const WrapClassName = computed(() => {
  let cNm = 'glist';
  if (props.size !== undefined)
    cNm += `-${props.size}`;
  cNm += '-wrap';
  return cNm;
});
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/gridListWrap.scss');
</style>
