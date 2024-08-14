<template>
  <i :class="className">
    <slot />
  </i>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  color?: string; // Todo. 디자인 추가 스타일 나올시 사용할 예정 -> 없을시 삭제
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

