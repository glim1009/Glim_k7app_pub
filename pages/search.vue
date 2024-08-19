<template>
  <NuxtLayout name="default">
    <template #header>
      <div class="header-wrapper">
        <div class="header-box">
          <div class="header-left">
            <button class="btn-header-back">
              <EIco name="back"/>
            </button>
            <EInputBox @class-change="handleChangeClass" type="search" enterkeyhint="search" title="검색" placeholder="검색어 입력">
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
      <div class="auto-complete-layer" v-if="isAutoComplete">
        <RowListWrap gap="line">
          <li class="item">
            // 리스트 내용!!!!
          </li>
          <li class="item">
            // 리스트 내용!!!!
          </li>
        </RowListWrap>
      </div>
    </template>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

const isClassValue = ref(false);

const handleChangeClass = ( className:string, isActive:boolean ) => {
  if( className === 'value' ) isClassValue.value = isActive;
}

const isAutoComplete = computed( () => {
  if( isClassValue.value ) return true;
  // DESC :: 자동완성 open 조건식 추가 필요
  else return false;
});


</script>
<style lang="scss" scoped>
@import url('@/assets/css/layout/header.scss');
@import url('@/assets/css/pages/search.scss');
</style>
