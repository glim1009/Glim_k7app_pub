<template>
  <div class="info-guide-wrap">
    <EIco :name="`${props.type}` + `-` + `${props.name}`" />
    <p v-if="props.type" :class="tyepInfo ? 'info-guide-desc' : 'no-data-desc'" v-html="desc"></p>
    <p v-if="props.subDesc" class="sub-desc" v-html="subDesc"></p>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'info-guide' | 'no-data';
  name?: string;
  desc?: string;
  subDesc?: string;
}>(), {
  type: 'info-guide',
});

// 타입 체크
const tyepInfo = computed(() => props.type === 'info-guide');
</script>

<style lang="scss" scoped>
@import url("/assets/css/components/infoGuideWrap.scss");
</style>
