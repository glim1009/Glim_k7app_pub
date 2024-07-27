<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: 'xs' | 'sm' | 'md' | 'lg'; // padding - xs: 10px, sm: 12px, md: 16px, lg: 20px
  color?: 'white' | 'light-gray' | 'line-light-gray';
}>(), {
  size: 'md',
});

const className = computed(() => {
  let cNm = props.color;
  cNm += '-' + props.size;
  cNm += '-box';
  return cNm;
});
</script>

<style lang="scss" scoped>

</style>
