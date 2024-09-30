<template>
  <CouponHomeTab>
    <ContWrap class="side-zero" in-top="sm">
      <TabWrap class="justify-tab">
        <template #tabs>
          <ul class="tab-list">
            <li class="tab-item">
              <NuxtLink class="tab-link" to="/coupon/app" exact-active-class="is-active">
                <span class="tab-text">사용가능</span>
              </NuxtLink>
            </li>
            <li class="tab-item">
              <NuxtLink class="tab-link" to="/coupon/app/history" exact-active-class="is-active">
                <span class="tab-text">사용내역</span>
              </NuxtLink>
            </li>
          </ul>
        </template>
        <NuxtPage/>
      </TabWrap>
    </ContWrap>
  </CouponHomeTab>
</template>

<script setup lang="ts">
definePageMeta({
  title: '쿠폰함',
  hideRightHeader: ['home'],
});
</script>

<style lang="scss" scoped>

</style>
