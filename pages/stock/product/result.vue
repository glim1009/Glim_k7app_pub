<template>
  <!-- 검색결과 있음 -->
  <ContWrap type="white">
    <ContBox v-if="isDataSearch" size="zero">
      <div class="list-header">
        <div class="search-result-tit">
          <span class="fc-spot fw-sb">'초콜릿'</span> 에 대한 검색결과
        </div>
      </div>
    </ContBox>
    <ContBox size="zero">
      <div v-if="isDataSearch || isNoDataSearchFilter" class="list-header">
        <FlexGroup align="center">
          <div class="flex-left">
            <div class="goods-group">
              <EGoods val="8" unit="건" />
            </div>
          </div>
          <div class="flex-right">
            <div class="ui-select type-text">
              <select title="리뷰 정렬">
                <option selected>
                  판매량 많은 순
                </option>
                <option>최신순</option>
                <option>추천순</option>
                <option>낮은 가격 순</option>
                <option>높은 가격 순</option>
              </select>
            </div>
            <!-- DESC :: 활성화시 is-active 클래스 추가 -->
            <button type="button" class="btn-filter is-active" @click="openProdFilterOption">
              <EIco name="filter" color="gray" size="xs" />
            </button>
          </div>
        </FlexGroup>
      </div>
      <RowListWrap v-if="isDataSearch">
        <!-- repeat -->
        <li class="item-thumb-prod">
          <!-- thumb-prod-flex -->
          <div class="thumb-prod-flex">
            <EThumbProdBox size="xl">
              <div class="left-group">
                <EBadge color="gray" size="sm" badge-text="할인" />
              </div>
              <div class="right-group">
                <EBadge color="red" size="sm" badge-text="19" />
              </div>
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-gray" size="sm" badge-text="앱전용" />
                <EBadge color="light-gray" size="sm" badge-text="한정수량" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="goods-group">
                <EGoods type="origin" size="sm" val="3,000" unit="원" />
                <EGoods type="percent" size="md" val="10" unit="%" />
                <EGoods size="md" val="2,700" unit="원" />
              </div>
              <div class="rating">
                <EIco name="rating" color="gray50" size="xs">
                  <span class="offscreen">별점</span>
                </EIco>
                <span class="score-sm">4.0 (10)</span>
              </div>
            </div>
          </div>
          <!-- // thumb-prod-flex -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </li>
        <!-- // repeat -->
        <!-- repeat -->
        <li class="item-thumb-prod">
          <!-- thumb-prod-flex -->
          <div class="thumb-prod-flex">
            <EThumbProdBox size="xl">
              <div class="left-group">
                <EBadge color="gray" size="sm" badge-text="할인" />
              </div>
              <div class="right-group">
                <EBadge color="red" size="sm" badge-text="19" />
              </div>
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-gray" size="sm" badge-text="앱전용" />
                <EBadge color="light-gray" size="sm" badge-text="한정수량" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="goods-group">
                <EGoods type="origin" size="sm" val="3,000" unit="원" />
                <EGoods type="percent" size="md" val="10" unit="%" />
                <EGoods size="md" val="2,700" unit="원" />
              </div>
              <div class="rating">
                <EIco name="rating" color="gray50" size="xs">
                  <span class="offscreen">별점</span>
                </EIco>
                <span class="score-sm">4.0 (10)</span>
              </div>
            </div>
          </div>
          <!-- // thumb-prod-flex -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </li>
        <!-- // repeat -->
        <!-- repeat -->
        <li class="item-thumb-prod">
          <!-- thumb-prod-flex -->
          <div class="thumb-prod-flex">
            <EThumbProdBox size="xl">
              <div class="left-group">
                <EBadge color="gray" size="sm" badge-text="할인" />
              </div>
              <div class="right-group">
                <EBadge color="red" size="sm" badge-text="19" />
              </div>
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-gray" size="sm" badge-text="앱전용" />
                <EBadge color="light-gray" size="sm" badge-text="한정수량" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="goods-group">
                <EGoods type="origin" size="sm" val="3,000" unit="원" />
                <EGoods type="percent" size="md" val="10" unit="%" />
                <EGoods size="md" val="2,700" unit="원" />
              </div>
              <div class="rating">
                <EIco name="rating" color="gray50" size="xs">
                  <span class="offscreen">별점</span>
                </EIco>
                <span class="score-sm">4.0 (10)</span>
              </div>
            </div>
          </div>
          <!-- // thumb-prod-flex -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </li>
        <!-- // repeat -->
        <!-- repeat -->
        <li class="item-thumb-prod">
          <!-- thumb-prod-flex -->
          <div class="thumb-prod-flex">
            <EThumbProdBox size="xl">
              <div class="left-group">
                <EBadge color="gray" size="sm" badge-text="할인" />
              </div>
              <div class="right-group">
                <EBadge color="red" size="sm" badge-text="19" />
              </div>
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-gray" size="sm" badge-text="앱전용" />
                <EBadge color="light-gray" size="sm" badge-text="한정수량" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="goods-group">
                <EGoods type="origin" size="sm" val="3,000" unit="원" />
                <EGoods type="percent" size="md" val="10" unit="%" />
                <EGoods size="md" val="2,700" unit="원" />
              </div>
              <div class="rating">
                <EIco name="rating" color="gray50" size="xs">
                  <span class="offscreen">별점</span>
                </EIco>
                <span class="score-sm">4.0 (10)</span>
              </div>
            </div>
          </div>
          <!-- // thumb-prod-flex -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </li>
        <!-- // repeat -->
        <!-- repeat -->
        <li class="item-thumb-prod">
          <!-- thumb-prod-flex -->
          <div class="thumb-prod-flex">
            <EThumbProdBox size="xl">
              <div class="left-group">
                <EBadge color="gray" size="sm" badge-text="할인" />
              </div>
              <div class="right-group">
                <EBadge color="red" size="sm" badge-text="19" />
              </div>
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-gray" size="sm" badge-text="앱전용" />
                <EBadge color="light-gray" size="sm" badge-text="한정수량" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="goods-group">
                <EGoods type="origin" size="sm" val="3,000" unit="원" />
                <EGoods type="percent" size="md" val="10" unit="%" />
                <EGoods size="md" val="2,700" unit="원" />
              </div>
              <div class="rating">
                <EIco name="rating" color="gray50" size="xs">
                  <span class="offscreen">별점</span>
                </EIco>
                <span class="score-sm">4.0 (10)</span>
              </div>
            </div>
          </div>
          <!-- // thumb-prod-flex -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </li>
        <!-- // repeat -->
        <!-- repeat -->
        <li class="item-thumb-prod">
          <!-- thumb-prod-flex -->
          <div class="thumb-prod-flex">
            <EThumbProdBox size="xl">
              <div class="left-group">
                <EBadge color="gray" size="sm" badge-text="할인" />
              </div>
              <div class="right-group">
                <EBadge color="red" size="sm" badge-text="19" />
              </div>
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-gray" size="sm" badge-text="앱전용" />
                <EBadge color="light-gray" size="sm" badge-text="한정수량" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="goods-group">
                <EGoods type="origin" size="sm" val="3,000" unit="원" />
                <EGoods type="percent" size="md" val="10" unit="%" />
                <EGoods size="md" val="2,700" unit="원" />
              </div>
              <div class="rating">
                <EIco name="rating" color="gray50" size="xs">
                  <span class="offscreen">별점</span>
                </EIco>
                <span class="score-sm">4.0 (10)</span>
              </div>
            </div>
          </div>
          <!-- // thumb-prod-flex -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </li>
        <!-- // repeat -->
        <!-- repeat -->
        <li class="item-thumb-prod">
          <!-- thumb-prod-flex -->
          <div class="thumb-prod-flex">
            <EThumbProdBox size="xl">
              <div class="left-group">
                <EBadge color="gray" size="sm" badge-text="할인" />
              </div>
              <div class="right-group">
                <EBadge color="red" size="sm" badge-text="19" />
              </div>
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-gray" size="sm" badge-text="앱전용" />
                <EBadge color="light-gray" size="sm" badge-text="한정수량" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="goods-group">
                <EGoods type="origin" size="sm" val="3,000" unit="원" />
                <EGoods type="percent" size="md" val="10" unit="%" />
                <EGoods size="md" val="2,700" unit="원" />
              </div>
              <div class="rating">
                <EIco name="rating" color="gray50" size="xs">
                  <span class="offscreen">별점</span>
                </EIco>
                <span class="score-sm">4.0 (10)</span>
              </div>
            </div>
          </div>
          <!-- // thumb-prod-flex -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </li>
        <!-- // repeat -->
      </RowListWrap>

      <!-- 필터 조건 검색결과 없음 -->
      <InfoGuideWrap
        v-if="isNoDataSearchFilter"
        type="no-data"
        name="filter-result"
        desc="선택한 조건에 맞는 상품이 없습니다."
        sub-desc="조건을 다시 선택해 주세요."
      />
      <!-- // 필터 조건 검색결과 없음 -->
    </ContBox>
  </ContWrap>
  <!-- // 검색결과 있음 -->
  <!-- 검색결과 없음 -->
  <ContWrap v-if="isNoDataSearch" type="white" in-top="zero">
    <InfoGuideWrap
      type="no-data"
      name="search-result"
      desc="검색 결과가 없습니다."
      sub-desc="검색어를 다시 입력해주세요."
    />
  </ContWrap>
  <!-- // 검색결과 없음 -->

  <!-- pop : 상품 필터 옵션 -->
  <PopCommFilterOption v-model:sta="popProdFilterOption">
    <!-- 필터옵션목록 -->
    <template #option>
      <li class="item-xl">
        <div class="form-field">
          <div class="form-title">
            <ETit text="상품유형" type="cont" />
          </div>
          <div class="form-cont">
            <div class="form-input-group">
              <UiColGroup gap="sm">
                <span class="ui-chk-button">
                  <input id="filterProdType01" type="checkbox" />
                  <label for="filterProdType01"><span class="text-sm">품절 상품 제외</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterProdType02" type="checkbox" />
                  <label for="filterProdType02"><span class="text-sm">만 19세 미만 상품 제외</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterProdType03" type="checkbox" />
                  <label for="filterProdType03"><span class="text-sm">앱전용 상품 보기</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterProdType04" type="checkbox" />
                  <label for="filterProdType04"><span class="text-sm">신상품 보기</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterProdType05" type="checkbox" checked />
                  <label for="filterProdType05"><span class="text-sm">7-SELECT</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterProdType06" type="checkbox" />
                  <label for="filterProdType06"><span class="text-sm">한정수량 상품 보기</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterProdType07" type="checkbox" />
                  <label for="filterProdType07"><span class="text-sm">단독상품 보기</span></label>
                </span>
              </UiColGroup>
            </div>
          </div>
        </div>
      </li>
      <li class="item-xl">
        <div class="form-field">
          <div class="form-title">
            <ETit text="할인/혜택" type="cont" />
          </div>
          <div class="form-cont">
            <div class="form-input-group">
              <UiColGroup gap="sm">
                <span class="ui-chk-button">
                  <input id="filterProdBenefit01" type="checkbox" checked />
                  <label for="filterProdBenefit01"><span class="text-sm">할인</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterProdBenefit02" type="checkbox" />
                  <label for="filterProdBenefit02"><span class="text-sm">1+1</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterProdBenefit03" type="checkbox" />
                  <label for="filterProdBenefit03"><span class="text-sm">2+1</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterProdBenefit04" type="checkbox" />
                  <label for="filterProdBenefit04"><span class="text-sm">증정</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterProdBenefit05" type="checkbox" />
                  <label for="filterProdBenefit05"><span class="text-sm">핫딜</span></label>
                </span>
              </UiColGroup>
            </div>
          </div>
        </div>
      </li>
      <li class="item-xl">
        <div class="form-field">
          <div class="form-title">
            <ETit text="가격" type="cont" />
          </div>
          <div class="form-cont">
            <div class="form-input-group">
              <UiColGroup gap="sm">
                <span class="ui-chk-button">
                  <input id="filterProdPrice01" type="checkbox" />
                  <label for="filterProdPrice01"><span class="text-sm">~1만원</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterProdPrice02" type="checkbox" />
                  <label for="filterProdPrice02"><span class="text-sm">1~2만원</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterProdPrice03" type="checkbox" />
                  <label for="filterProdPrice03"><span class="text-sm">2~3만원</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterProdPrice04" type="checkbox" />
                  <label for="filterProdPrice04"><span class="text-sm">3~5만원</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterProdPrice05" type="checkbox" />
                  <label for="filterProdPrice05"><span class="text-sm">5~8만원</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterProdPrice06" type="checkbox" checked />
                  <label for="filterProdPrice06"><span class="text-sm">9~10만원</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterProdPrice07" type="checkbox" />
                  <label for="filterProdPrice07"><span class="text-sm">10~15만원</span></label>
                </span>
                <span class="ui-chk-button">
                  <input id="filterProdPrice08" type="checkbox" />
                  <label for="filterProdPrice08"><span class="text-sm">~15만원</span></label>
                </span>
              </UiColGroup>
            </div>
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
        <EBtn color="green" size="lg" @click="popProdFilterOption.open = false">
          <span class="text">적용</span>
        </EBtn>
      </div>
    </template>
  </PopCommFilterOption>
  <!-- // pop : 상품 필터 옵션 -->
</template>

<script setup lang="ts">
const isDataSearch = ref(true); // 임시 : 검색결과 컨텐츠 확인을 위해 추가
const isNoDataSearchFilter = ref(false); // 임시 : 필터 조건 검색결과 없음 컨텐츠 확인을 위해 추가
const isNoDataSearch = ref(false); // 임시 : 검색결과 없음 컨텐츠 확인을 위해 추가

// 상품필터옵션 팝업
const popProdFilterOption = ref({ open: false });
const openProdFilterOption = () => popProdFilterOption.value.open = true;
</script>

<style lang="scss" scoped>

</style>
