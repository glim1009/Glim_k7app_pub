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
const basePath = "/delivery";
const tabs = [
  { path: "", text: "홈" },
  { path: "/situation", text: "예약현황" },
  { path: "/search", text: "배송조회" },
  { path: "/history", text: "이용내역" },
];

const { onSwiper } = useLinkTabSwiper(tabs, basePath);
</script>
