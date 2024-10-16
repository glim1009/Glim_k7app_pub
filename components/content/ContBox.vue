<template>
  <div :class="[className, { 'deco-tline': deco === 't-line' }, { 'deco-tfline': deco === 'tf-line' }, gapClass]">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: "zero" | "xs" | "sm" | "md" | "lg"; // zero - 0, xs - 10px, sm - 16px, md - 24px, lg - 30px
  deco?: "t-line" | "tf-line";
  gap?: "sm" | "md"; // sm - 10px, md - 16px
}>(), {
  size: "md",
});

const gapClass = computed(() => {
  if (!props.gap) {
    return false;
  }
  else {
    return `gap-${props.gap}`;
  }
});

const className = computed(() => {
  let cNm = "cont";
  cNm += `-${props.size}`;
  cNm += "-box";
  return cNm;
});
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/contBox.scss');
</style>
