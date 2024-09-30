<template>
  <i :class="className">
    <slot />
  </i>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  color?: string;
  size?: 'sm' | 'xs';
}
const props = defineProps<Props>();

const className = computed(() => {
  let classNm = 'ico-' + props.name;
  if(props.color) classNm += '-' + props.color;
  if(props.size) classNm += '-' + props.size;
  return classNm;
});

</script>

