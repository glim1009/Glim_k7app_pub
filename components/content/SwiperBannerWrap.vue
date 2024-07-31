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
import Swiper from 'swiper';
import { EffectFade } from 'swiper/modules';

const SwiperEffectFade = EffectFade;

</script>

<style lang="scss" scoped>
@import url('/assets/css/components/swiperBanner.scss');
</style>


