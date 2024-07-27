<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: 'zero' | 'sm' | 'md' | 'lg'; // 하단 여백 zero 0, sm 10px , md 16px, lg 24px
}>(), {
  size: 'md',
});

const className = computed(() => {
  let cNm = 'ctitle';
  cNm += '-' + props.size;
  cNm += '-wrap';
  return cNm;
});
</script>