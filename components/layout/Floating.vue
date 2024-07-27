<template>
  <Transition name="floating">
    <div v-if="showFloating" class="floating-wrapper">
      <button type="button" class="btn-go-top">
        <EIco name="top"><span class="offscreen">최상위 화면으로</span></EIco>
      </button>
    </div>
  </Transition>

</template>

<script setup lang="ts">

const showFloating = ref(false);

const checkScroll = () => {
  if( window.pageYOffset > 57 ) {
    if ( !showFloating.value ) showFloating.value = true;
  } else {
    if ( showFloating.value ) showFloating.value = false;
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});


</script>

<style lang="scss" scoped>
@import url('@/assets/css/layout/floating.scss');

</style>
