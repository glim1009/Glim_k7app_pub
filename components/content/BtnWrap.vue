<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: "flex" | "auto" | "auto-right" | "auto-center" | "full";
  size?: "sm" | "md" | "lg" | "xl"; // mt | sm - 10px , md - 16px , lg - 24px , xl - 30px
}>(), {
  type: "flex",
});

const className = computed(() => {
  let cNm = "btn-";
  cNm += props.type;
  if (props.size)
    cNm += `-${props.size}`;
  cNm += "-wrap";
  return cNm;
});
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/button.scss');
</style>
