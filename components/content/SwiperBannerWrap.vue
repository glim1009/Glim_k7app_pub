<template>
  <div :class="className">
    <Swiper
        :modules="[SwiperPagination, SwiperEffectFade]"
        :effect="effect"
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
        :loop="props.loop"
        :pagination="{
        type: pagination,
        el: swiperPagination,
        paginationPos: props.paginationPos,
      }"
        :auto-height="isAutoHeight"
    >
      <slot></slot>
      <div v-if="!paginationPos?.includes('out')" :class="[{ 'btn-more': addClick }, posClassName, 'swiper-pagination']"
           @click="addClick && $emit('click-emit')"></div>
    </Swiper>
    <div v-if="paginationPos?.includes('out')" :class="[{ 'btn-more': addClick }, posClassName, 'swiper-pagination']"
         @click="addClick && $emit('click-emit')"></div>
  </div>
</template>

<script setup lang="ts">
import {EffectFade, Pagination} from 'swiper/modules';

const props = withDefaults(defineProps<{
  type?: string;
  addClick?: boolean;
  pagination?: 'fraction' | 'bullets';
  paginationPos?: 'center' | 'out-center';
  loop?: boolean;
  effect?: string;
  isAutoHeight?: boolean;
}>(), {
  pagination: 'fraction',
  type: '',
  loop: false,
  effect: 'fade',
  isAutoHeight: false,
});
const swiperPagination = computed(() => {
  if (!props.paginationPos) {
    return '.swiper-pagination'
  } else {
    return '.swiper-pagination.pos-' + props.paginationPos
  }

});
const emit = defineEmits(['click-emit']);

const SwiperEffectFade = EffectFade;
const SwiperPagination = Pagination;

const className = computed(() => {
  let cNm = 'swiper-banner-';
  if (props.type)
    cNm += `${props.type}-`;
  cNm += 'wrap';
  return cNm;
});

const posClassName = computed(() => {
  if (!props.paginationPos) {
    return false;
  } else {
    return `pos-${props.paginationPos}`;
  }
});
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/swiperBanner.scss');
</style>
