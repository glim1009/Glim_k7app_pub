<template>
  <div class="swiper-banner-wrap">
    <Swiper
        :modules="[SwiperEffectFade]"
        :effect="'fade'"
        :slides-per-view="1"
        :resistance="true"
        :resistance-ratio="0"
        :observer="true"
        :observe-parents="true"
        :watch-overflow="true"
        :touch-ratio="0.3"
        :all-touch-move="true"
        :touch-start-force-prevent-default="true"
        :touch-release-on-edgeds="true"
    >
      <slot/>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { EffectFade } from 'swiper/modules';

const SwiperEffectFade = EffectFade;
/*
const props = withDefaults(defineProps<{
  type?: 'line' | 'bar';
  gap? : number;
}>(), {
  gap: 6
});
*/

/*const className = computed(() => {
  let cNm = 'swiper-auto';
  if( props.type ) cNm += '-' + props.type;
  cNm += '-wrap';
  return cNm;
});*/

</script>


