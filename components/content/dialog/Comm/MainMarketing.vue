<template>
  <ContDialog v-model="isOpen" :content-class="isBottom ? 'ui-dialog-bottom' : 'ui-dialog'" :not-footer-gradient="isBottom" not-header>
    <template #body>
      <ContWrap type="white" in-top="zero" in-bottom="zero" class="side-zero">
        <SwiperBannerWrap type="marketing" loop>
          <swiper-slide>
            <div class="thumb-box">
              <img src="/assets/images/temp/temp_banner_service_1.png" alt="메인 마케팅 배너 이미지">
            </div>
            <NuxtLink class="btn-link" to="javascript:">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </swiper-slide>
          <swiper-slide>
            <div class="thumb-box">
              <img src="/assets/images/temp/temp_banner_service_2.png" alt="메인 마케팅 배너 이미지">
            </div>
            <NuxtLink class="btn-link" to="javascript:">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </swiper-slide>
          <swiper-slide>
            <div class="thumb-box">
              <img src="/assets/images/temp/temp_banner_service_1.png" alt="메인 마케팅 배너 이미지">
            </div>
            <NuxtLink class="btn-link" to="javascript:">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </swiper-slide>
          <swiper-slide>
            <div class="thumb-box">
              <img src="/assets/images/temp/temp_banner_service_2.png" alt="메인 마케팅 배너 이미지">
            </div>
            <NuxtLink class="btn-link" to="javascript:">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </swiper-slide>
          <swiper-slide>
            <div class="thumb-box">
              <img src="/assets/images/temp/temp_banner_service_1.png" alt="메인 마케팅 배너 이미지">
            </div>
            <NuxtLink class="btn-link" to="javascript:">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </swiper-slide>
          <swiper-slide>
            <div class="thumb-box">
              <img src="/assets/images/temp/temp_banner_service_2.png" alt="메인 마케팅 배너 이미지">
            </div>
            <NuxtLink class="btn-link" to="javascript:">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </swiper-slide>
          <swiper-slide>
            <div class="thumb-box">
              <img src="/assets/images/temp/temp_banner_service_1.png" alt="메인 마케팅 배너 이미지">
            </div>
            <NuxtLink class="btn-link" to="javascript:">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </swiper-slide>
          <swiper-slide>
            <div class="thumb-box">
              <img src="/assets/images/temp/temp_banner_service_2.png" alt="메인 마케팅 배너 이미지">
            </div>
            <NuxtLink class="btn-link" to="javascript:">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </swiper-slide>
          <swiper-slide>
            <div class="thumb-box">
              <img src="/assets/images/temp/temp_banner_service_1.png" alt="메인 마케팅 배너 이미지">
            </div>
            <NuxtLink class="btn-link" to="javascript:">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </swiper-slide>
        </SwiperBannerWrap>
      </ContWrap>
    </template>
    <template #footer>
      <FlexGroup>
        <div class="flex-left">
          <!-- DESC :: 설정안함 선택 시 [ui-chk] 구조 삭제 -->
          <div class="ui-chk">
            <input id="closeChk01" type="checkbox">
            <label for="closeChk01">
              <span class="text-md fw-md fc-gray70">오늘 하루 보지 않기</span>
            </label>
          </div>
        </div>
        <div class="flex-right">
          <ETBtn size="sm" @click="closeDialog">
            <span class="text">닫기</span>
            <EIco name="close" color="gray" size="xs" />
          </ETBtn>
        </div>
      </FlexGroup>
    </template>
  </ContDialog>
</template>

<script setup lang="ts">
interface DialogState {
  open: boolean;
}

const props = defineProps<{
  sta: DialogState;
  isBottom?: boolean;
}>();

const emit = defineEmits(["update:sta"]);

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit("update:sta", { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};
</script>
