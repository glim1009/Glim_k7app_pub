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
    <slot />
  </TabWrap>
</template>

<script setup lang="ts">
import { useLinkTabSwiper } from '~/composables/useFrontPub';

definePageMeta({
  title: "쿠폰함",
  hideRightHeader: ['home'],
});
const basePath = "/coupon";
const tabs = [
  { path: "/app", text: "앱전용" },
  { path: "/store", text: "매장전용" },
  { path: "/discount", text: "매장상품 할인쿠폰" },
];

const { onSwiper } = useLinkTabSwiper(tabs, basePath);
</script>


<style lang="scss" scoped>

</style>
