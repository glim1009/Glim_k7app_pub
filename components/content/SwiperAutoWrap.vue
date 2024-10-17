<template>
  <div ref="swiperRef" :class="className">
    <Swiper
      :resistance="true"
      :resistance-ratio="0"
      :observer="true"
      :observe-parents="true"
      slides-per-view="auto"
      :watch-overflow="true"
      :touch-ratio="0.3"
      :all-touch-move="true"
      :touch-start-force-prevent-default="true"
      :touch-release-on-edgeds="true"
      :space-between="(props.type !== 'tab' && props.type) ? 0 : props.gap"
      @swiper="onSwiper"
    >
      <slot />
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { Swiper as SwiperType } from "swiper";

const props = withDefaults(defineProps<{
  type?: "line" | "bar" | "tab";
  gap?: number | string;
}>(), {
  gap: 6,
});

const emit = defineEmits(["swiper"]);

const className = computed(() => {
  let cNm = "swiper-auto";
  if (props.type)
    cNm += `-${props.type}`;
  cNm += "-wrap";
  return cNm;
});

const swiperInstance = ref<SwiperType | null>(null);

const onSwiper = (swiper: SwiperType) => {
  swiperInstance.value = swiper;
  emit("swiper", swiper);
};

// Swiper 인스턴스를 외부로 노출
defineExpose({ swiperInstance });
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/swiper.scss');
</style>
