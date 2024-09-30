<template>
  <div :class="className">
    <slot />
    <div class="thumb">
      <slot name="thumb" />
    </div>
    <div v-if="dim" class="dim-group"><div :class="['text-dim', dimClass]">{{ dimText }}</div></div>
  </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  size?: 'auto' | string; // Todo. 임시 추가 ( 이후 사이즈 없는 경우 삭제 예정 )
  dim?: 'close' | 'earlyClose' | '19' | string;
}>(), {
  size: 'auto',
});

const className = computed(() => {
  let classNm = 'thumb-event';
  if(props.size !== 'auto') classNm += '-' + props.size;
  classNm += '-box';
  return classNm;
});

const dimClass = computed(() => {
  if (!props.dim) return '';
  if (props.dim.includes('19')) {
    return 'label-19';
  }
  else if (props.dim.includes('close')) {
    return 'label-close';
  }
  else if (props.dim.includes('earlyClose')) {
    return 'label-earlyClose';
  }
  else {
    return '';
  }
});

const dimText = computed(() => {
  if (!props.dim) return '';
  if (props.dim.includes('earlyClose')) {
    return '이벤트가 조기종료 되었습니다.';
  }
  else {
    return '';
  }
});
</script>
