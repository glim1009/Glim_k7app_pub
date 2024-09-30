<template>
  <div class="fold-overflow-box">
    <Transition @enter="onEnter" name="fold">
      <FoldCont ref="foldContRef" :style="customStyle" :is-open="isOpen" :class="[{ 'is-active': isOpen }, { 'is-mini': isHeightMini }]">
        <div class="fold-cont-inner" ref="foldContInnerRef">
          <slot />
        </div>
      </FoldCont>
    </Transition>
    <div class="fold-header" v-if="isHeightMini">
      <EBtn color="light-gray" size="sm" :class="['btn-fold-toggle', { 'is-active': isOpen }]" @click="toggle">
        <span v-if="isOpen" class="text">접기</span>
        <span v-else class="text">펼치기</span>
        <EIco name="arw-down" color="gray" size="xs" />
      </EBtn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementSize } from '@vueuse/core';

const props = withDefaults(defineProps<{
  minHeight?: string
}>(), {
  minHeight: '0'
});

const isOpen = ref(false);
const isHeightMini = ref(false);
const foldContRef = ref<HTMLElement | null>(null);
const foldContInnerRef = ref<HTMLElement | null>(null);
const foldContHeight = ref(0);
const resizeObserver = ref<ResizeObserver | null>(null);

const customStyle = computed(() => ({
  '--content-min-height': `${props.minHeight}px`,
  '--content-height': `${foldContHeight.value}px`
}));

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const onEnter = (el: HTMLElement, done: () => void) => {
  const { height } = useElementSize(el);
  foldContHeight.value = height.value;
  //console.log('onEnter: ', foldContHeight.value);
  done();
};

const updateHeight = () => {
  if (foldContInnerRef.value) {
    const innerHeight = foldContInnerRef.value.scrollHeight;
    foldContHeight.value = innerHeight;
    isHeightMini.value = innerHeight > parseInt(props.minHeight);
    //console.log('Updated height:', foldContHeight.value);
  }
};

// 컨텐츠 변경 감지를 위한 watch
watch(() => foldContInnerRef.value?.innerHTML, () => {
  //console.log('inner html 변경 감지');
  updateHeight();
}, { deep: true });

// ResizeObserver 설정 함수
const setupResizeObserver = () => {
  if (resizeObserver.value) {
    resizeObserver.value.disconnect();
  }

  resizeObserver.value = new ResizeObserver(() => {
    // console.log('Size changed');
    updateHeight();
  });

  if (foldContInnerRef.value) {
    resizeObserver.value.observe(foldContInnerRef.value);
  }
};

onMounted(() => {
  setupResizeObserver();
});

// 클린업 함수
onUnmounted(() => {
  if (resizeObserver.value) {
    resizeObserver.value.disconnect();
  }
});

// foldContInnerRef가 변경될 때마다 ResizeObserver 다시 설정
watch(foldContInnerRef, () => {
  setupResizeObserver();
});

</script>

<style lang="scss" scoped>
@import url('/assets/css/components/fold.scss');
</style>
