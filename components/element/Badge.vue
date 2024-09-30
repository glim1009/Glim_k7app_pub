<template>
  <span :class="className">
    <span class="text">{{ badgeText }}</span>
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  color?:
    'green' | 'light-green' | 'line-green' // green
    | 'orange' | 'light-orange' | 'line-orange' // orange
    | 'red' | 'light-red' | 'line-red' // red
    | 'gray' | 'light-gray' | 'line-gray'; // gray
  size?: 'lg' | 'md' | 'sm'; // lg - H24 , md - H22 , sm - H18
  badgeText?: string;
}>(), {
  size: 'md',
  color: 'green',
});

const className = computed(() => {
  let cNm = 'badge';
  if(props.color) cNm += '-' + props.color;
  if(props.size) cNm += '-' + props.size;
  return cNm;
});

</script>

