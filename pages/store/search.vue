<template>
  <NuxtLayout name="default">
    <template #header>
      <div class="header-wrapper">
        <div class="header-box">
          <div class="header-left">
            <button class="btn-header-back">
              <EIco name="back" />
            </button>
            <EInputBox type="search" enterkeyhint="search" title="지역 및 매장명 검색" placeholder="지역 및 매장명 입력" @class-change="handleChangeClass">
              <EBadge color="gray" badge-text="매장찾기" />
              <NuxtLink to="javascript:" class="btn-input-search">
                <span class="offscreen">검색</span>
              </NuxtLink>
            </EInputBox>
          </div>
          <div class="header-right">
            <NuxtLink to="/cart" class="btn-header-util cart">
              <EIco name="cart" />
              <span class="count">1</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div v-if="isAutoComplete" class="auto-complete-layer">
        <ContWrap type="white">
          <RowListWrap gap="line">
            <li class="item-md">
              <NuxtLink class="link-keyword" to="javascript:">
                <span class="keyword"><span class="fc-spot">만</span>두</span>
              </NuxtLink>
            </li>
            <li class="item-md">
              <NuxtLink class="link-keyword" to="javascript:">
                <span class="keyword">마늘</span>
              </NuxtLink>
            </li>
            <li class="item-md">
              <NuxtLink class="link-keyword" to="javascript:">
                <span class="keyword"><span class="fc-spot">만</span>두피</span>
              </NuxtLink>
            </li>
            <li class="item-md">
              <NuxtLink class="link-keyword" to="javascript:">
                <span class="keyword"><span class="fc-spot">만</span>쥬</span>
              </NuxtLink>
            </li>
            <li class="item-md">
              <NuxtLink class="link-keyword" to="javascript:">
                <span class="keyword">마늘바게트</span>
              </NuxtLink>
            </li>
            <li class="item-md">
              <NuxtLink class="link-keyword" to="javascript:">
                <span class="keyword">마늘빵</span>
              </NuxtLink>
            </li>
            <li class="item-md">
              <NuxtLink class="link-keyword" to="javascript:">
                <span class="text">칼호<span class="fc-spot">만</span></span>
              </NuxtLink>
            </li>
          </RowListWrap>
        </ContWrap>
      </div>
    </template>
    <StoreSearchList is-store-search v-if="!isSearchData && !$route.path.includes('result')" @open-filter="openStoreFilterOption" />
    <StoreSearchResult is-store-search v-if="isSearchData" @open-filter="openStoreFilterOption" />

    <!-- pop : 매장 서비스 필터 - 필터 옵션 -->
    <PopCommFilterOption v-model:sta="popStoreFilterOption">
      <!-- 필터옵션목록 -->
      <template #option>
        <li class="item-xl">
          <div class="form-field">
            <div class="form-cont">
              <UiColGroup gap="sm">
                <span class="ui-chk-button">
                  <input id="filterStoreService01" type="checkbox">
                  <label for="filterStoreService01"><span class="text-sm">당일픽업</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterStoreService02" type="checkbox">
                  <label for="filterStoreService02"><span class="text-sm">사전예약</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterStoreService03" type="checkbox">
                  <label for="filterStoreService03"><span class="text-sm">24시간</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterStoreService04" type="checkbox">
                  <label for="filterStoreService04"><span class="text-sm">무인락커</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterStoreService05" type="checkbox" checked>
                  <label for="filterStoreService05"><span class="text-sm">무인매장 시그니처</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterStoreService06" type="checkbox">
                  <label for="filterStoreService06"><span class="text-sm">무인매장 자판기</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterStoreService07" type="checkbox">
                  <label for="filterStoreService07"><span class="text-sm">CD(출금)</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterStoreService08" type="checkbox">
                  <label for="filterStoreService08"><span class="text-sm">ATM(입출금)</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterStoreService09" type="checkbox">
                  <label for="filterStoreService09"><span class="text-sm">착한택배</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterStoreService10" type="checkbox">
                  <label for="filterStoreService10"><span class="text-sm">일반/페덱스/무인택배</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterStoreService11" type="checkbox">
                  <label for="filterStoreService11"><span class="text-sm">의약품</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterStoreService12" type="checkbox">
                  <label for="filterStoreService12"><span class="text-sm">7-SELECT</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterStoreService13" type="checkbox">
                  <label for="filterStoreService13"><span class="text-sm">세븐카페</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterStoreService14" type="checkbox" checked>
                  <label for="filterStoreService14"><span class="text-sm">치킨</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterStoreService15" type="checkbox">
                  <label for="filterStoreService15"><span class="text-sm">군고구마 붕어빵</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterStoreService16" type="checkbox">
                  <label for="filterStoreService16"><span class="text-sm">베이커리</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterStoreService17" type="checkbox">
                  <label for="filterStoreService17"><span class="text-sm">토토</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterStoreService18" type="checkbox">
                  <label for="filterStoreService18"><span class="text-sm">소프트콘</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterStoreService19" type="checkbox">
                  <label for="filterStoreService19"><span class="text-sm">스마트픽</span></label>
                </span>
              </UiColGroup>
            </div>
          </div>
        </li>
      </template>
      <!-- // 필터옵션목록 -->
      <template #footer>
        <div class="dialog-btn-auto-wrap">
          <EBtn color="line-light-gray" size="lg">
            <span class="text">초기화</span>
          </EBtn>
          <EBtn color="green" size="lg" @click="popStoreFilterOption.open = false">
            <span class="text">적용</span>
          </EBtn>
        </div>
      </template>
    </PopCommFilterOption>
    <!-- // pop : 매장 서비스 필터 - 필터 옵션 -->
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

// 임시 :: 컨텐츠 확인을 위해 추가 ( 개발시 삭제 요청 )
const route = useRoute();
const isSearchData = computed(() => {
  return route.query.case === "result";
});

const isClassValue = ref(false);

function handleChangeClass(className: string, isActive: boolean) {
  if (className === "value")
    isClassValue.value = isActive;
}
const isAutoComplete = computed(() => {
  return !!isClassValue.value;
});

// 매장 서비스 필터 팝업
const popStoreFilterOption = ref({ open: false });
const openStoreFilterOption = () => {
  popStoreFilterOption.value.open = true;
};
</script>

<style lang="scss" scoped>
@import url('assets/css/layout/header.scss');
@import url('assets/css/pages/search.scss');
</style>
