<template>
  <div :class="className">
    <Swiper
      resistance="100%"
      resistance-ratio="0"
      observer="true"
      observe-parents="true"
      slides-per-view="auto"
      watch-overflow="true"
      free-mode="true"
      touch-ratio="0.3"
      all-touch-move="true"
      touch-start-force-prevent-default="true"
      touch-release-on-edgeds="true"
      :space-between="props.type === 'bar' ? 0 : props.gap"
    >
      <slot/>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'line' | 'bar';
  gap? : number;
}>(), {
  gap: 6
});

const className = computed(() => {
  let cNm = 'swiper-auto';
  if( props.type ) cNm += '-' + props.type;
  cNm += '-wrap';
  return cNm;
});

</script>

<style lang="scss" scoped>
@import url('/assets/css/components/swiper.scss');
</style>
