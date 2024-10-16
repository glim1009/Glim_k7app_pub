<template>
  <div ref="tooltipRef" class="tooltip">
    <button type="button" class="btn-tooltip" :class="[{ 'is-active': isOpen }]" @click="toggle">
      <EIco name="tooltip" />
    </button>
    <div v-if="isOpen" class="tooltip-box" :style="tooltipStyle">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";

const props = withDefaults(defineProps<{
  isOpen?: boolean;
}>(), {
  isOpen: false,
});
const emit = defineEmits<{
  (e: "openChange", value: boolean): void;
}>();
const isOpen = ref<boolean>(props.isOpen);

const tooltipRef = ref<HTMLElement | null>(null);
const { width } = useWindowSize();

const size = ref({
  left: 0,
  width: 0,
});

const toggle = () => isOpen.value = !isOpen.value;

const updateScrollbarWidth = computed(() => {
  return window.innerWidth - document.documentElement.clientWidth;
});

const tooltipClose = () => {
  if (isOpen.value)
    isOpen.value = !isOpen.value;
};

const updateSize = () => {
  if (tooltipRef.value) {
    const rect = tooltipRef.value.getBoundingClientRect();
    size.value = {
      left: -(rect.left - 20),
      width: width.value - 40 - updateScrollbarWidth.value, // 스크롤바 너비를 뺍니다
    };
  }
};

watch(tooltipRef, updateSize);
watch(width, updateSize);

watch(() => isOpen.value, (newValue) => {
  emit("openChange", isOpen.value);
});

const tooltipStyle = computed(() => ({
  width: `${size.value.width}px`,
  left: `${size.value.left}px`,
}));

onMounted(() => {
  window.addEventListener("scroll", tooltipClose);
});

onUnmounted(() => {
  // window.removeEventListener('resize', updateScrollbarWidth);
  window.addEventListener("scroll", tooltipClose);
});
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/tooltip.scss');
</style>
