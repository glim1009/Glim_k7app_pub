<template>
  <TabWrap>
    <SwiperAutoWrap type="line">
      <swiper-slide class="tab-item">
        <NuxtLink class="tab-link" to="/delivery" exact-active-class="is-active">
          <span class="tab-text">홈</span>
        </NuxtLink>
      </swiper-slide>
      <swiper-slide class="tab-item">
        <NuxtLink class="tab-link" to="/delivery/situation" exact-active-class="is-active">
          <span class="tab-text">예약현황</span>
        </NuxtLink>
      </swiper-slide>
      <swiper-slide class="tab-item">
        <NuxtLink class="tab-link" to="/delivery/search" exact-active-class="is-active">
          <span class="tab-text">배송조회</span>
        </NuxtLink>
      </swiper-slide>
      <swiper-slide class="tab-item">
        <NuxtLink class="tab-link" to="/delivery/history" exact-active-class="is-active">
          <span class="tab-text">이용내역</span>
        </NuxtLink>
      </swiper-slide>
    </SwiperAutoWrap>
    <slot/>
  </TabWrap>
</template>

<script setup lang="ts">
</script>
