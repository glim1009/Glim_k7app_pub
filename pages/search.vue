<template>
  <NuxtLayout name="default">
    <template #header>
      <div class="header-wrapper">
        <div class="header-box">
          <div class="header-left">
            <button class="btn-header-back">
              <EIco name="back"/>
            </button>
            <EInputBox type="search" enterkeyhint="search" title="검색" placeholder="텍스트 입력 전">
              <button type="button" class="btn-input-search">
                <span class="offscreen">검색</span>
              </button>
            </EInputBox>
          </div>
          <div class="header-right">
            <NuxtLink to="javascript:" class="btn-header-util cart">
              <EIco name="cart"/>
              <span class="count">99</span>
            </NuxtLink>
          </div>
        </div>
      </div>

    </template>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
const aaa = (value:string|number) => {
  console.log(value);
}

const boxActive = ref(false);
</script>
<style lang="scss" scoped>
@import url('@/assets/css/layout/header.scss');
</style>
