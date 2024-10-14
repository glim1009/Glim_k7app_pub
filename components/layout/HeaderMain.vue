<template>
  <div class="header-wrapper header-main" :style="nativeCustomStyle" :class="{ 'type-white': isHeaderTypeWhite }">
    <div class="header-box">
      <div class="header-left">
        <div class="addr-info">
          <ETBtn class="btn-addr" @click="popSettingAddress.open = true">
            <span class="text">주소를 설정해주세요</span>
            <EIco name="arw-right" color="gray" size="sm" />
          </ETBtn>
        </div>
      </div>
      <div class="header-right">
        <NuxtLink class="btn-header-util">
          <EIco name="chat" />
        </NuxtLink>
        <NuxtLink tag="a" to="/main/alarm" class="btn-header-util">
          <EIco name="alarm" />
          <span v-if="true" class="new" />
        </NuxtLink>
        <NuxtLink tag="a" to="/cart" class="btn-header-util cart">
          <EIco name="cart" />
          <span class="count">99</span>
        </NuxtLink>
      </div>
    </div>

    <Transition name="bubble">
      <div v-if="isHeaderAddrBubble" class="bubble-box">
        <span class="text">해당 주소가 맞는지 확인해 주세요!</span>
        <button class="btn-close" @click="isHeaderAddrBubble = false">
          <EIco name="close" color="white" size="sm" />
        </button>
      </div>
    </Transition>
  </div>
  <!-- pop : 주소설정 팝업 -->
  <PopCommSettingAddress v-model:sta="popSettingAddress" />
<!-- pop : 주소설정 팝업 -->
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  barHeight?: number | string;
}>(), {
  barHeight: 0,
});
const popSettingAddress = ref({ open: false });
const isHeaderAddrBubble = ref(false);

const isHeaderTypeWhite = ref(false);
onMounted(() => {
  // header 주소 말풍선 open
  isHeaderAddrBubble.value = true;
  window.addEventListener("scroll", headerMainChangeType);
});

onUnmounted(() => {
  window.removeEventListener("scroll", headerMainChangeType);
});

function headerMainChangeType() {
  isHeaderTypeWhite.value = getScrollPosition() > 55;
}

const nativeCustomStyle = computed(() => {
  return {
    "--native-bar-height": `${props.barHeight}px`,
  };
});
</script>

<style lang="scss" scoped>
@import url('@/assets/css/layout/header.scss');
</style>
