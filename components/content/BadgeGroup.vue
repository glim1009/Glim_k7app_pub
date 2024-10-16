<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  gap?: "md"; // gap | md - 4px, lg - 6px 추가 예정
  size?: "md" | "lg" | "xl" | undefined; // 하단여백 md - 4px, lg - 6px, xl - 10px, 미지정 - 0
}>(), {
  gap: "md",
});

const className = computed(() => {
  let cNm = "badge-";
  cNm += props.gap;
  if (props.size !== undefined)
    cNm += `-b${props.size}`;
  cNm += "-group";
  return cNm;
});
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/badge.scss');
</style>
