<template>
  <TabWrap>
    <template #tabs>
      <SwiperAutoWrap type="line">
        <swiper-slide class="tab-item">
          <NuxtLink class="tab-link" to="/cart" exact-active-class="is-active">
            <span class="tab-text">당일픽업</span>
          </NuxtLink>
        </swiper-slide>
        <swiper-slide class="tab-item">
          <NuxtLink class="tab-link" to="/cart/reservation" exact-active-class="is-active">
            <span class="tab-text">사전예약</span>
          </NuxtLink>
        </swiper-slide>
        <swiper-slide class="tab-item">
          <NuxtLink class="tab-link" to="/cart/discount" exact-active-class="is-active">
            <span class="tab-text">구독할인</span>
          </NuxtLink>
        </swiper-slide>
        <swiper-slide class="tab-item">
          <NuxtLink class="tab-link" to="/cart/one-plus-one" exact-active-class="is-active">
            <span class="tab-text">1+1</span>
          </NuxtLink>
        </swiper-slide>
        <swiper-slide class="tab-item">
          <NuxtLink class="tab-link" to="/cart/gift-card" exact-active-class="is-active">
            <span class="tab-text">상품권</span>
          </NuxtLink>
        </swiper-slide>
      </SwiperAutoWrap>
    </template>
    <NuxtPage />
  </TabWrap>

</template>

<script setup lang="ts">
definePageMeta({
  title: '장바구니',
  hideRightHeader: false,
});
</script>

<style lang="scss" scoped>

</style>
