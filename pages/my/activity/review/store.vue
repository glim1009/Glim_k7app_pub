<template>
  <TabWrap class="justify-tab">
    <template #tabs>
      <ul class="tab-line-list">
        <li class="tab-item">
          <NuxtLink class="tab-link" to="/my/activity/review/product" :class="['tab-link', {'is-active' :  $route.path.includes('/my/activity/review/product') }]" exact-active-class="is-active">
            <span class="tab-text">상품리뷰</span>
          </NuxtLink>
        </li>
        <li class="tab-item">
          <NuxtLink class="tab-link" to="/my/activity/review/store" :class="['tab-link', {'is-active' :  $route.path.includes('/my/activity/review/store') }]" exact-active-class="is-active">
            <span class="tab-text">매장리뷰</span>
          </NuxtLink>
        </li>
      </ul>
    </template>
    <ContWrap class="side-zero" in-top="sm">
      <TabWrap class="justify-tab">
        <template #tabs>
          <ul class="tab-list">
            <li class="tab-item">
              <NuxtLink class="tab-link" to="/my/activity/review/store" exact-active-class="is-active">
                <span class="tab-text">작성 가능한 리뷰</span>
              </NuxtLink>
            </li>
            <li class="tab-item">
              <NuxtLink class="tab-link" to="/my/activity/review/store/my" exact-active-class="is-active">
                <span class="tab-text">내가 작성한 리뷰</span>
              </NuxtLink>
            </li>
          </ul>
        </template>
        <NuxtPage/>
      </TabWrap>
    </ContWrap>
  </TabWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: '내 리뷰',
  hideRightHeader: ['home'],
});
</script>

<style lang="scss" scoped>

</style>
