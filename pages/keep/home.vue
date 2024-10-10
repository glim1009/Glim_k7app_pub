<template>
  <TabWrap>
    <template #tabs>
      <SwiperAutoWrap type="line" @swiper="onSwiper">
        <swiper-slide v-for="(tab, index) in tabs" :key="index" class="tab-item">
          <NuxtLink :class="['tab-link', {'is-active' : tab.path !== '' ? $route.path.includes( basePath + tab.path) : false }]" :to="basePath + tab.path" exact-active-class="is-active">
            <span class="tab-text">{{ tab.text }}</span>
          </NuxtLink>
        </swiper-slide>
      </SwiperAutoWrap>
    </template>
    <NuxtPage />
  </TabWrap>
</template>

<script setup lang="ts">
import { useLinkTabSwiper } from "~/composables/useFrontPub";

definePageMeta({
  title: "쏘옥보관",
  hideRightHeader: ["home"],
});

const basePath = "/keep/home";
const tabs = [
  { path: "", text: "전체" },
  { path: "/present", text: "+1 증정" },
  { path: "/pickup", text: "당일픽업" },
  { path: "/reservation", text: "사전예약" },
  { path: "/gift-card", text: "교환권" },
  { path: "/discount", text: "구독할인" },
  { path: "/voucher", text: "금액권" },
];
const { onSwiper, updateSwiperIndex } = useLinkTabSwiper(tabs, basePath);
</script>

<style lang="scss" scoped>

</style>
