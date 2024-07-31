<template>
  <div class="info-guide-wrap">
    <EIco :name="`${props.type}` + `-` + `${props.name}`" />
    <p v-if="props.type === 'info-guide'" class="stext-xl" v-html="desc"></p>
    <p v-if="props.type === 'info-guide'" class="stext" v-html="subDesc"></p>
    <p v-if="props.type === 'no-data'" class="stext-lg" v-html="subDesc"></p>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'info-guide' | 'no-data'; // info-guide h103 , no-data h64
  name?: string;
  desc?: string;
  subDesc?: string;
}>(), {
  type: 'info-guide',
});
</script>

<style lang="scss" scoped>
@import url("/assets/css/components/infoGuideWrap.scss");
</style>
