<template>
  <div :class="className">
    <FoldHeader :class="{ 'is-active': isOpen }" @toggle-click="toggle">
      <slot name="header" />
    </FoldHeader>
    <FoldCont v-if="isOpen" ref="FoldContRef" :style="customStyle" :cont-color="contColor" :is-open="isOpen">
      <slot name="content" />
    </FoldCont>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: "scont" | "cont" | "box";
  color?: "line-light-gray"; // border
  contColor?: "light-gray"; // content
  open?: boolean;
}>(), {
  type: "box",
  open: false,
});

const className = computed(() => {
  let cNm = "fold";
  if (props.type !== "box")
    cNm += `-${props.type}`;
  if (props.type === "scont" && props.color)
    cNm += `-${props.color}`;
  cNm += "-box";
  return cNm;
});

const isOpen = ref(false);
const FoldContRef = ref<HTMLElement | null>(null);
const FoldContHeight = ref();

const toggle = () => isOpen.value = !isOpen.value;

function customStyle() {
  return {
    "--content-height": `${FoldContHeight.value}px`,
  };
}

onMounted(() => {
  if (props.open)
    isOpen.value = props.open;
});

// Swiper 인스턴스를 외부로 노출
defineExpose({ toggle });
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/fold.scss');
</style>
