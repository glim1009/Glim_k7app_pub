<template>
  <div class="tooltip" ref="tooltipRef">
    <ETooltipBtn @tooltip-toggle="toggle" />
    <div v-if="isOpen" class="tooltip-box" :style="tooltipStyle">
      <slot />
    </div>
  </div>
</template>


<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';

const isOpen = ref(false);

const tooltipRef = ref<HTMLElement | null>(null)
const { width } = useWindowSize()

const size = ref({
  left: 0,
  width: 0,
})

const toggle = () => isOpen.value = !isOpen.value;


const scrollbarWidth = ref(0)


onMounted(() => {
  updateScrollbarWidth();
  window.addEventListener('resize', updateScrollbarWidth);
  window.addEventListener('scroll', tooltipClose);
})


const updateScrollbarWidth = () => {
  scrollbarWidth.value = window.innerWidth - document.documentElement.clientWidth
}

const tooltipClose = () => {
  if( isOpen.value ) isOpen.value = !isOpen.value;
}

const updateSize = () => {
  if (tooltipRef.value) {
    const rect = tooltipRef.value.getBoundingClientRect()
    size.value = {
      left: -(rect.left - 20),
      width: width.value - 40 - scrollbarWidth.value, // 스크롤바 너비를 뺍니다
    }
  }
}

watch(tooltipRef, updateSize)
watch(width, updateSize)

const tooltipStyle = computed(() => ({
  width: `${size.value.width}px`,
  left: `${size.value.left}px`,
}))


onUnmounted(() => {
  window.removeEventListener('resize', updateScrollbarWidth);
  //window.addEventListener('scroll', tooltipClose);
})


</script>

<style lang="scss" scoped>
@import url('/assets/css/components/tooltip.scss');
</style>
