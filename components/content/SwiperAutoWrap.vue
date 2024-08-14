<template>
  <div :class="className">
    <Swiper
      :resistance="true"
      :resistance-ratio="0"
      :observer="true"
      :observe-parents="true"
      :slides-per-view="'auto'"
      :watch-overflow="true"
      :touch-ratio="0.3"
      :all-touch-move="true"
      :touch-start-force-prevent-default="true"
      :touch-release-on-edgeds="true"
      :space-between=" ( props.type !== 'tab' && props.type ) ? 0 : props.gap"
    >
      <slot/>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'line' | 'bar' | 'tab';
  gap? : number | string;
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



