<template>
  <div :class="className">
    <EIco :name="`${props.type}` + `-` + `${props.name}`" />
    <p v-if="props.type" :class="tyepInfo ? 'info-guide-desc' : 'no-data-desc'" v-html="desc"></p>
    <p v-if="props.subDesc" class="sub-desc" v-html="subDesc"></p>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'info-guide' | 'no-data';
  inTop?: 'zero';
  name?: string;
  desc?: string;
  subDesc?: string;
}>(), {
  type: 'info-guide',
});

// 타입 체크
const tyepInfo = computed(() => props.type === 'info-guide');

// 클래스 추가
const className = computed(() => {
  let cNm = 'info-guide';
  if( props.inTop ) cNm += '-' + props.inTop;
  cNm += '-wrap';
  return cNm;
});
</script>

<style lang="scss" scoped>
@import url("/assets/css/components/infoGuideWrap.scss");
</style>
