<template>
  <component :is="tag" :class="className" v-html="infoText" />
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'dot'; // 필요한 경우 타입 추가 예정 ex) dash,,
  color?: 'green'; // 필요한 경우 컬러 추가 예정 ex) black, red ,,,
  size?: 'sm'; // font size | default 13px, sm 12px
  tag?: 'p' | 'li'; // 단일 사용 - p / 리스트 내 사용 - li
  infoText?: string;
}>(), {
  type: 'dot',
});

const tag = computed(() => props.tag || 'li');

const className = computed(() => {
  let cNm = `${props.type}-text`;
  if (props.size)
    cNm += `-${props.size}`;
  if (props.color)
    cNm += `-${props.color}`;
  return cNm;
});
</script>
