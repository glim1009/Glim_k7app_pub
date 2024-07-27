<template>
  <div :class="className">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'flex' | 'auto' | 'auto-right' | 'auto-center';
  size?: 'sm' | 'md' | 'lg' | 'xl'; // mt | sm - 10px , md - 16px , lg - 24px , xl - 30px
}>(), {
  type: 'flex',
  size: 'md', // 16px
});

const className = computed(() => {
  let cNm = 'btn-';
  cNm += props.type;
  cNm += '-wrap';
  cNm += '-' + props.size;
  return cNm;
});
</script>

<style lang="scss" scoped>

</style>
