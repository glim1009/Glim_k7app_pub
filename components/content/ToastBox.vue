<template>
  <Transition name="toast">
    <div v-if="isToastOpen" class="toast-box" :class="[{ 'has-close': isClose }]">
      <EIco v-if="isClose" name="toast-notice" />
      <div class="toast-msg" :class="[{ 'ta-left': isClose }]" v-html="toastMsg" />
      <button v-if="isClose" class="btn-close" @click="closeToast">
        <EIco name="close" color="white" size="sm" />
      </button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useToast } from "~/composables/useFrontPub";

const { toastMsg, isToastOpen, isClose, closeToast } = useToast();
const router = useRouter();

// 페이지 이동 시 토스트 닫기
router.afterEach(() => {
  if (isToastOpen.value && isClose.value)
    closeToast();
});
</script>

<style lang="scss" scoped>
@import url('assets/css/components/toast.scss');
</style>
