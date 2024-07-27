<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  align?: 'start' | 'center' | 'end';
}>(), {
  align: 'center',
});

const className = computed(() => {
  let cNm = 'flex';
  cNm += '-' + props.align;
  cNm += '-group';
  return cNm;
});

</script>

<style lang="scss" scoped>
@import url('@/assets/css/components/flexGroup.scss');
</style>