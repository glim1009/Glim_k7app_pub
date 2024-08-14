<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  gap?: 'md'; // md - 10px
}>(), {
  gap: 'md',
});

const className = computed(() => {
  let cNm = 'ui-col';
  if (props.gap !== undefined)
    cNm += `-${props.gap}`;
  cNm += '-group';
  return cNm;
});

</script>

<style lang="scss" scoped>
@import url('/assets/css/components/formElements.scss');
</style>
