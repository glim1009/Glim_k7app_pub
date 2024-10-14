<template>
  <ContWrap in-top="sm" type="white" in-bottom="zero">
    <ContBox size="sm">
      <div class="item-thumb-prod">
        <!-- thumb-prod-flex -->
        <div class="thumb-prod-flex">
          <EThumbProdBox size="md">
            <template #thumb>
              <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
            </template>
          </EThumbProdBox>
          <div class="info-box">
            <FlexGroup>
              <div class="flex-left">
                <ETit type="prod">
                  바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                </ETit>
                <div class="goods-group">
                  <EGoods type="origin" size="sm" val="3,000" unit="원" />
                  <EGoods type="percent" size="md" val="10" unit="%" />
                  <EGoods size="md" val="2,700" unit="원" />
                </div>
              </div>
              <div class="flex-right">
                <EBtn tag="a" size="xs" color="line-light-gray" to="/stock/product/result">
                  <span class="text">상품 변경</span>
                </EBtn>
              </div>
            </FlexGroup>
          </div>
        </div>
        <!-- // thumb-prod-flex -->
      </div>
    </ContBox>
    <ContBox size="sm">
      <EInputBox type="search" enterkeyhint="search" title="지역 및 매장명 검색" placeholder="지역 및 매장명 검색">
        <button type="button" class="btn-input-search">
          <span class="offscreen">검색</span>
        </button>
      </EInputBox>
    </ContBox>
  </ContWrap>
  <TabWrap class="justify-tab in-top-xs">
    <template #tabs>
      <ul class="tab-line-list">
        <li class="tab-item">
          <NuxtLink class="tab-link" to="/stock/search" exact-active-class="is-active">
            <span class="tab-text">목록보기</span>
          </NuxtLink>
        </li>
        <li class="tab-item">
          <NuxtLink class="tab-link" to="/stock/search/map" exact-active-class="is-active">
            <span class="tab-text">지도보기</span>
          </NuxtLink>
        </li>
        <li class="tab-item">
          <NuxtLink class="tab-link" to="/stock/search/bookmark" exact-active-class="is-active">
            <span class="tab-text">단골매장</span>
          </NuxtLink>
        </li>
      </ul>
    </template>
    <NuxtPage />
  </TabWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: "재고찾기",
  hideRightHeader: ["home"],
});
</script>

<style lang="scss" scoped>
@import url('assets/css/pages/search.scss');
</style>
