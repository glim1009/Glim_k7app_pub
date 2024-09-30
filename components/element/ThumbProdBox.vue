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
  size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'auto'; // 2xl : 120px, xl: 100px, lg : 80px, md : 60px
  dim?: '19' | string;
}>(), {
  size: 'auto',
});

const className = computed(() => {
  let classNm = 'thumb-prod';
  if(props.size !== 'auto') classNm += '-' + props.size;
  classNm += '-box';
  return classNm;
});

const dimClass = computed(() => {
  if (!props.dim) return '';
  if (props.dim.includes('19')) {
    return 'label-19';
  }
  /*else if (props.dim.includes('soldOut')) {
    if (['2xl', 'xl', 'auto'].includes(props.size)) return 'label-soldout';
  }
  else if (props.dim.includes('preparing')) {
    if (['2xl', 'xl', 'auto'].includes(props.size)) return 'label-preparing';
  }*/
  else {
    return '';
  }
});

const dimText = computed(() => {
  if (!props.dim) return '';

  if (props.dim.includes('19')) {
    if (['2xl', 'xl', 'auto'].includes(props.size)) return '19세 미만 불가';
    else return '';
  }
  /*else if (props.dim.includes('soldOut')) {
    return 'SOLD OUT';
  }
  else if (props.dim.includes('preparing')) {
    return '준비중';
  }*/
  else {
    return props.dim;
  }
});
</script>
