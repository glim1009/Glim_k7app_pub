<template>
  <TabWrap fir-active="subsidiary" class="justify-tab">
    <template #tabs>
      <ul class="tab-line-list">
        <li class="tab-item">
          <NuxtLink class="tab-link" to="/my/certify-employee" exact-active-class="is-active">
            <span class="tab-text">세븐일레븐 임직원</span>
          </NuxtLink>
        </li>
        <li class="tab-item">
          <NuxtLink class="tab-link" to="/my/certify-employee/affiliate" exact-active-class="is-active">
            <span class="tab-text">계열사 임직원</span>
          </NuxtLink>
        </li>
      </ul>
    </template>
    <NuxtPage />
  </TabWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: "임직원 인증",
  hideRightHeader: ["home"],
});
</script>

<style lang="scss" scoped>

</style>
