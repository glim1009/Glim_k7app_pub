<template>
  <component :is="tag" :class="className">
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  color?: 'green' | 'gray' | 'light-gray' | 'line-green' | 'line-orange' | 'line-gray' | 'line-light-gray';
  size?: 'lg' | 'md' | 'sm' | 'xs'; // height | lg - 54px , md - 44px , sm - 36px , xs - 30px
  tag?: 'button' | 'a';
  // MinW : ???? // shin. 별도 페이지 진행중 필요시 추가 예정
}>(), {
  size: 'md',
  color: 'green',
});

const tag = computed(() => props.tag || 'button');

const className = computed(() => {
  let cNm = 'btn';
  cNm += '-' + props.color;
  cNm += '-' + props.size;
  return cNm;
});

</script>

<style lang="scss" scoped>

</style>
