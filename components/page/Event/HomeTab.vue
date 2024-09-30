<template>
  <TabWrap>
    <template #tabs>
      <SwiperAutoWrap type="line" @swiper="onSwiper">
        <swiper-slide v-for="(tab, index) in tabs" :key="index" class="tab-item">
          <NuxtLink class="tab-link" :class="[{ 'is-active': tab.path !== '' ? $route.path.includes(basePath + tab.path) : false }]" :to="basePath + tab.path" exact-active-class="is-active">
            <span class="tab-text">{{ tab.text }}</span>
          </NuxtLink>
        </swiper-slide>
      </SwiperAutoWrap>
    </template>
    <slot></slot>
  </TabWrap>
</template>

<script setup lang="ts">
import { useLinkTabSwiper } from '~/composables/useFrontPub';

const basePath = '/event';
const tabs = [
  { path: '', text: '이벤트' },
  { path: '/participate', text: '참여 중인 이벤트' },
  { path: '/winning', text: '당첨자 발표' },
];

const { onSwiper } = useLinkTabSwiper(tabs, basePath);
</script>

<style lang="scss" scoped>

</style>
