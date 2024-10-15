<template>
  <ContWrap v-if="hasCategory" in-top="zero" type="white">
    <ContBox>
      <SwiperBannerWrap type="promotion">
        <swiper-slide>
          <div class="thumb-box">
            <img src="/assets/images/temp/temp_banner_service_1.png" alt="서비스 메인 배너 이미지">
          </div>
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <div class="thumb-box">
            <img src="/assets/images/temp/temp_banner_service_2.png" alt="서비스 메인 배너 이미지">
          </div>
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
      </SwiperBannerWrap>
    </ContBox>
    <ContBox>
      <CtitleWrap>
        <ETit text="놓치면 후회할 핫딜 👀" type="xlCont" />
      </CtitleWrap>
      <SwiperAutoWrap gap="12" class="side-zero">
        <swiper-slide>
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <!-- thumb-prod-2xl -->
            <EThumbProdBox size="2xl">
              <div class="left-group">
                <EBadge color="gray" size="sm" badge-text="할인" />
                <EBadge color="gray" size="sm" badge-text="핫딜" />
              </div>
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <!-- // thumb-prod-2xl -->
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-gray" size="sm" badge-text="NEW" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
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
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <!-- thumb-prod-2xl -->
            <EThumbProdBox size="2xl">
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
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <!-- // thumb-prod-2xl -->
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-gray" size="sm" badge-text="BEST" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="goods-group">
                <EGoods type="origin" size="sm" val="3,000" unit="원" />
                <EGoods type="percent" size="md" val="10" unit="%" />
                <EGoods size="md" val="2,700" unit="원" />
              </div>
            </div>
          </div>
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <!-- thumb-prod-2xl -->
            <EThumbProdBox size="2xl">
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
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <!-- // thumb-prod-2xl -->
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-gray" size="sm" badge-text="BEST" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml
              </ETit>
              <div class="goods-group">
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
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <!-- thumb-prod-2xl -->
            <EThumbProdBox size="2xl">
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <!-- // thumb-prod-2xl -->
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-gray" size="sm" badge-text="BEST" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
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
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <!-- thumb-prod-2xl -->
            <EThumbProdBox size="2xl">
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <!-- // thumb-prod-2xl -->
            <div class="info-box">
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
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
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
      </SwiperAutoWrap>
    </ContBox>
  </ContWrap>
  <ContWrap v-if="hasCategory" type="divider" in-top="lg">
    <CtitleWrap>
      <ETit text="오늘 뭐먹지? 🍙" type="xlCont" />
    </CtitleWrap>
    <SwiperAutoWrap gap="12" class="side-zero">
      <swiper-slide>
        <!-- thumb-prod -->
        <div class="thumb-prod">
          <!-- thumb-prod-2xl -->
          <EThumbProdBox size="2xl">
            <div class="left-group">
              <EBadge color="gray" size="sm" badge-text="할인" />
              <EBadge color="gray" size="sm" badge-text="핫딜" />
            </div>
            <!-- DESC :: 활성화시 is-active 클래스 추가 -->
            <button type="button" class="btn-wish">
              <EIco name="wish" size="sm">
                <span class="offscreen">관심 등록</span>
              </EIco>
            </button>
            <template #thumb>
              <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
            </template>
          </EThumbProdBox>
          <!-- // thumb-prod-2xl -->
          <div class="info-box">
            <BadgeGroup gap="md">
              <EBadge color="light-gray" size="sm" badge-text="BEST" />
            </BadgeGroup>
            <ETit type="prod">
              바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
            </ETit>
            <div class="stock">
              <EGoods size="sm" val="N" unit="개" /> 남음
            </div>
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
        <!-- // thumb-prod -->
        <NuxtLink class="btn-link" to="javascript:">
          <span class="offscreen">바로가기</span>
        </NuxtLink>
      </swiper-slide>
      <swiper-slide>
        <!-- thumb-prod -->
        <div class="thumb-prod">
          <!-- thumb-prod-2xl -->
          <EThumbProdBox size="2xl">
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
              <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
            </template>
          </EThumbProdBox>
          <!-- // thumb-prod-2xl -->
          <div class="info-box">
            <BadgeGroup gap="md">
              <EBadge color="light-gray" size="sm" badge-text="NEW" />
            </BadgeGroup>
            <ETit type="prod">
              바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
            </ETit>
            <div class="stock">
              <EGoods size="sm" val="N" unit="개" /> 남음
            </div>
            <div class="goods-group">
              <EGoods type="origin" size="sm" val="3,000" unit="원" />
              <EGoods type="percent" size="md" val="10" unit="%" />
              <EGoods size="md" val="2,700" unit="원" />
            </div>
          </div>
        </div>
        <!-- // thumb-prod -->
        <NuxtLink class="btn-link" to="javascript:">
          <span class="offscreen">바로가기</span>
        </NuxtLink>
      </swiper-slide>
      <swiper-slide>
        <!-- thumb-prod -->
        <div class="thumb-prod">
          <!-- thumb-prod-2xl -->
          <EThumbProdBox size="2xl">
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
              <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
            </template>
          </EThumbProdBox>
          <!-- // thumb-prod-2xl -->
          <div class="info-box">
            <ETit type="prod">
              바리스타 로슈거 250ml
            </ETit>
            <div class="stock">
              <EGoods size="sm" val="N" unit="개" /> 남음
            </div>
            <div class="goods-group">
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
        <!-- // thumb-prod -->
        <NuxtLink class="btn-link" to="javascript:">
          <span class="offscreen">바로가기</span>
        </NuxtLink>
      </swiper-slide>
      <swiper-slide>
        <!-- thumb-prod -->
        <div class="thumb-prod">
          <!-- thumb-prod-2xl -->
          <EThumbProdBox size="2xl">
            <!-- DESC :: 활성화시 is-active 클래스 추가 -->
            <button type="button" class="btn-wish">
              <EIco name="wish" size="sm">
                <span class="offscreen">관심 등록</span>
              </EIco>
            </button>
            <template #thumb>
              <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
            </template>
          </EThumbProdBox>
          <!-- // thumb-prod-2xl -->
          <div class="info-box">
            <ETit type="prod">
              바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
            </ETit>
            <div class="stock">
              <EGoods size="sm" val="N" unit="개" /> 남음
            </div>
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
        <!-- // thumb-prod -->
        <NuxtLink class="btn-link" to="javascript:">
          <span class="offscreen">바로가기</span>
        </NuxtLink>
      </swiper-slide>
      <swiper-slide>
        <!-- thumb-prod -->
        <div class="thumb-prod">
          <!-- thumb-prod-2xl -->
          <EThumbProdBox size="2xl">
            <!-- DESC :: 활성화시 is-active 클래스 추가 -->
            <button type="button" class="btn-wish">
              <EIco name="wish" size="sm">
                <span class="offscreen">관심 등록</span>
              </EIco>
            </button>
            <template #thumb>
              <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
            </template>
          </EThumbProdBox>
          <!-- // thumb-prod-2xl -->
          <div class="info-box">
            <ETit type="prod">
              바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
            </ETit>
            <div class="stock">
              <EGoods size="sm" val="N" unit="개" /> 남음
            </div>
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
        <!-- // thumb-prod -->
        <NuxtLink class="btn-link" to="javascript:">
          <span class="offscreen">바로가기</span>
        </NuxtLink>
      </swiper-slide>
    </SwiperAutoWrap>
  </ContWrap>
  <ContWrap v-if="hasCategory" type="divider">
    <ContBox gap="md">
      <button v-if="route.params.slug[0] !== 'gift-card'" type="button" class="btn-store" @click="openStoreSearchSelect(false)">
        <EBadge color="green" size="md" badge-text="픽업매장" />
        <span class="store">매장을 선택해주세요.</span>
        <EIco name="arw-right" color="gray" size="sm" />
      </button>
      <SwiperAutoWrap gap="10" class="side-zero">
        <!-- slide -->
        <swiper-slide>
          <NuxtLink class="link-service-sub-category all" to="/service/category">
            <div class="thumb-box">
              <EIco name="service-sub-category" color="green" />
            </div>
            <span class="category-name">전체</span>
          </NuxtLink>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <NuxtLink class="link-service-sub-category" to="/service/category">
            <div class="thumb-box">
              <img src="/assets/images/temp/temp_service_sub_category_1.png" alt="서비스 중카테고리 이미지">
            </div>
            <span class="category-name">간식·디저트</span>
          </NuxtLink>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <NuxtLink class="link-service-sub-category" to="/service/category">
            <div class="thumb-box">
              <img src="/assets/images/temp/temp_service_sub_category_1.png" alt="서비스 중카테고리 이미지">
            </div>
            <span class="category-name">도시락·요리</span>
          </NuxtLink>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <NuxtLink class="link-service-sub-category" to="/service/category">
            <div class="thumb-box">
              <img src="/assets/images/temp/temp_service_sub_category_1.png" alt="서비스 중카테고리 이미지">
            </div>
            <span class="category-name">음료·주류</span>
          </NuxtLink>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <NuxtLink class="link-service-sub-category" to="/service/category">
            <div class="thumb-box">
              <img src="/assets/images/temp/temp_service_sub_category_1.png" alt="서비스 중카테고리 이미지">
            </div>
            <span class="category-name">기타</span>
          </NuxtLink>
        </swiper-slide>
        <!-- // slide -->
      </SwiperAutoWrap>
    </ContBox>
    <ContBox deco="tf-line">
      <div class="list-header">
        <FlexGroup align="center">
          <div class="flex-left">
            <div class="goods-group">
              <EGoods val="8" unit="건" />
            </div>
          </div>
          <div class="flex-right">
            <div class="ui-select type-text">
              <select title="상품 정렬">
                <option selected>
                  판매량 많은순
                </option>
                <option>최신순</option>
                <option>추천순</option>
                <option>낮은 가격순</option>
                <option>높은 가격순</option>
              </select>
            </div>
            <!-- DESC :: 활성화시 is-active 클래스 추가 -->
            <button type="button" class="btn-filter is-active" @click="openProdFilterOption">
              <EIco name="filter" color="gray" size="xs" />
              <span class="offscreen">필터옵션</span>
            </button>
          </div>
        </FlexGroup>
      </div>
      <GridListWrap gap="prod">
        <li class="item-grid">
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <EThumbProdBox>
              <div class="left-group">
                <EBadge color="gray" size="sm" badge-text="할인" />
              </div>
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-green" size="sm" badge-text="당일픽업" />
                <EBadge color="light-gray" size="sm" badge-text="BEST" />
                <EBadge color="light-gray" size="sm" badge-text="NEW" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
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
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </li>
        <li class="item-grid">
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <EThumbProdBox dim="SOLD OUT">
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-green" size="sm" badge-text="당일픽업" />
                <EBadge color="light-gray" size="sm" badge-text="BEST" />
                <EBadge color="light-gray" size="sm" badge-text="NEW" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
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
              <BtnWrap type="auto">
                <EBtn tag="a" color="line-light-gray" size="xs" to="/stock/search">
                  <span class="text">주변매장 재고찾기</span>
                </EBtn>
              </BtnWrap>
            </div>
          </div>
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </li>
        <li class="item-grid">
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <EThumbProdBox>
              <div class="left-group">
                <EBadge color="gray" size="sm" badge-text="할인" />
                <EBadge color="gray" size="sm" badge-text="핫딜" />
              </div>
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-green" size="sm" badge-text="당일픽업" />
                <EBadge color="light-gray" size="sm" badge-text="BEST" />
                <EBadge color="light-gray" size="sm" badge-text="NEW" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
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
              <BtnWrap type="auto">
                <EBtn tag="a" color="line-light-gray" size="xs" to="/stock/search">
                  <span class="text">주변매장 재고찾기</span>
                </EBtn>
              </BtnWrap>
            </div>
          </div>
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </li>
        <li class="item-grid">
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <EThumbProdBox>
              <div class="left-group">
                <EBadge color="gray" size="sm" badge-text="1+1" />
              </div>
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-green" size="sm" badge-text="당일픽업" />
                <EBadge color="light-gray" size="sm" badge-text="BEST" />
                <EBadge color="light-gray" size="sm" badge-text="NEW" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="goods-group">
                <EGoods size="md" val="2,700" unit="원" />
              </div>
              <div class="rating">
                <EIco name="rating" color="gray50" size="xs">
                  <span class="offscreen">별점</span>
                </EIco>
                <span class="score-sm">4.0 (10)</span>
              </div>
              <BtnWrap type="auto">
                <EBtn tag="a" color="line-light-gray" size="xs" to="/stock/search">
                  <span class="text">주변매장 재고찾기</span>
                </EBtn>
              </BtnWrap>
            </div>
          </div>
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </li>
        <li class="item-grid">
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <EThumbProdBox>
              <div class="left-group">
                <EBadge color="gray" size="sm" badge-text="할인" />
              </div>
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-green" size="sm" badge-text="당일픽업" />
                <EBadge color="light-gray" size="sm" badge-text="BEST" />
                <EBadge color="light-gray" size="sm" badge-text="NEW" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
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
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </li>
        <li class="item-grid">
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <EThumbProdBox dim="SOLD OUT">
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-green" size="sm" badge-text="당일픽업" />
                <EBadge color="light-gray" size="sm" badge-text="BEST" />
                <EBadge color="light-gray" size="sm" badge-text="NEW" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
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
              <BtnWrap type="auto">
                <EBtn tag="a" color="line-light-gray" size="xs" to="/stock/search">
                  <span class="text">주변매장 재고찾기</span>
                </EBtn>
              </BtnWrap>
            </div>
          </div>
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </li>
        <li class="item-grid">
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <EThumbProdBox>
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
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
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
              <BtnWrap type="auto">
                <EBtn tag="a" color="line-light-gray" size="xs" to="/stock/search">
                  <span class="text">주변매장 재고찾기</span>
                </EBtn>
              </BtnWrap>
            </div>
          </div>
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </li>
        <li class="item-grid">
          <!-- thumb-prod -->
          <div class="thumb-prod">
            <EThumbProdBox>
              <div class="left-group">
                <EBadge color="gray" size="sm" badge-text="1+1" />
              </div>
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" size="sm">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="light-green" size="sm" badge-text="당일픽업" />
                <EBadge color="light-gray" size="sm" badge-text="BEST" />
                <EBadge color="light-gray" size="sm" badge-text="NEW" />
              </BadgeGroup>
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
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
              <BtnWrap type="auto">
                <EBtn tag="a" color="line-light-gray" size="xs" to="/stock/search">
                  <span class="text">주변매장 재고찾기</span>
                </EBtn>
              </BtnWrap>
            </div>
          </div>
          <!-- // thumb-prod -->
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </li>
      </GridListWrap>
    </ContBox>
  </ContWrap>

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
            <UiColGroup gap="sm">
              <span class="ui-chk-button">
                <input id="filterProdType01" type="checkbox">
                <label for="filterProdType01"><span class="text-sm">품절 상품 제외</span></label>
              </span>
              <span class="ui-chk-button">
                <input id="filterProdType02" type="checkbox">
                <label for="filterProdType02"><span class="text-sm">만 19세 미만 상품 제외</span></label>
              </span>
              <span class="ui-chk-button">
                <input id="filterProdType03" type="checkbox">
                <label for="filterProdType03"><span class="text-sm">앱전용 상품 보기</span></label>
              </span>
              <span class="ui-chk-button">
                <input id="filterProdType04" type="checkbox">
                <label for="filterProdType04"><span class="text-sm">신상품 보기</span></label>
              </span>
              <span class="ui-chk-button">
                <input id="filterProdType05" type="checkbox">
                <label for="filterProdType05"><span class="text-sm">7-SELECT</span></label>
              </span>
              <span class="ui-chk-button">
                <input id="filterProdType06" type="checkbox">
                <label for="filterProdType06"><span class="text-sm">한정수량 상품 보기</span></label>
              </span>
              <span class="ui-chk-button">
                <input id="filterProdType07" type="checkbox">
                <label for="filterProdType07"><span class="text-sm">단독상품 보기</span></label>
              </span>
            </UiColGroup>
          </div>
        </div>
      </li>
      <li class="item-xl">
        <div class="form-field">
          <div class="form-title">
            <ETit text="할인/혜택" type="cont" />
          </div>
          <div class="form-cont">
            <UiColGroup gap="sm">
              <span class="ui-chk-button">
                <input id="filterProdBenefit01" type="checkbox">
                <label for="filterProdBenefit01"><span class="text-sm">할인</span></label>
              </span>
              <span class="ui-chk-button">
                <input id="filterProdBenefit02" type="checkbox">
                <label for="filterProdBenefit02"><span class="text-sm">1+1</span></label>
              </span>
              <span class="ui-chk-button">
                <input id="filterProdBenefit03" type="checkbox">
                <label for="filterProdBenefit03"><span class="text-sm">2+1</span></label>
              </span>
              <span class="ui-chk-button">
                <input id="filterProdBenefit04" type="checkbox">
                <label for="filterProdBenefit04"><span class="text-sm">증정</span></label>
              </span>
              <span class="ui-chk-button">
                <input id="filterProdBenefit05" type="checkbox">
                <label for="filterProdBenefit05"><span class="text-sm">핫딜</span></label>
              </span>
            </UiColGroup>
          </div>
        </div>
      </li>
      <li class="item-xl">
        <div class="form-field">
          <div class="form-title">
            <ETit text="가격" type="cont" />
          </div>
          <div class="form-cont">
            <UiColGroup gap="sm">
              <span class="ui-chk-button">
                <input id="filterProdPrice01" type="checkbox">
                <label for="filterProdPrice01"><span class="text-sm">~1만원</span></label>
              </span>
              <span class="ui-chk-button">
                <input id="filterProdPrice02" type="checkbox">
                <label for="filterProdPrice02"><span class="text-sm">1~2만원</span></label>
              </span>
              <span class="ui-chk-button">
                <input id="filterProdPrice03" type="checkbox">
                <label for="filterProdPrice03"><span class="text-sm">2~3만원</span></label>
              </span>
              <span class="ui-chk-button">
                <input id="filterProdPrice04" type="checkbox">
                <label for="filterProdPrice04"><span class="text-sm">3~5만원</span></label>
              </span>
              <span class="ui-chk-button">
                <input id="filterProdPrice05" type="checkbox">
                <label for="filterProdPrice05"><span class="text-sm">5~8만원</span></label>
              </span>
              <span class="ui-chk-button">
                <input id="filterProdPrice06" type="checkbox">
                <label for="filterProdPrice06"><span class="text-sm">9~10만원</span></label>
              </span>
              <span class="ui-chk-button">
                <input id="filterProdPrice07" type="checkbox">
                <label for="filterProdPrice07"><span class="text-sm">10~15만원</span></label>
              </span>
              <span class="ui-chk-button">
                <input id="filterProdPrice08" type="checkbox">
                <label for="filterProdPrice08"><span class="text-sm">~15만원</span></label>
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
        <EBtn color="green" size="lg" @click="popProdFilterOption.open = false">
          <span class="text">적용</span>
        </EBtn>
      </div>
    </template>
  </PopCommFilterOption>
  <!-- // pop : 상품 필터 옵션 -->

  <!-- pop : 매장선택 -->
  <PopStoreSearchSelect v-model:sta="popStoreSearchSelect" :first-tab="StoreSearchTabName" :is-search-data="popSearchType" />
  <!-- // pop : 매장선택 -->
</template>

<script setup lang="ts">
const route = useRoute();

definePageMeta({
  title: (route: any) => {
    const slug = route.params.slug as string[] | undefined;
    if (!slug || slug.length === 0)
      return "당일픽업";
    switch (slug[0]) {
      case "reservation":
        return "사전예약";
      case "gift-card":
        return "교환권";
    }
  },
  validate: (route) => {
    const validSlugs = ["reservation", "gift-card"];
    return !route.params.slug || validSlugs.includes(route.params.slug[0] as string);
  },
  hideRightHeader: ["home"],
});

const hasCategory = ref(true); // 임시 : 하위 카테고리 있는 서비스 목록 확인을 위해 추가

// 상품필터옵션 팝업
const popProdFilterOption = ref({ open: false });
const openProdFilterOption = () => popProdFilterOption.value.open = true;

// 매장선택
const popStoreSearchSelect = ref({ open: false });

// 임시 - 매장 검색결과 팝업 확인을 위한 이벤트 추가 ( 개발시 삭제 요청 )
const popSearchType = ref<boolean>();
const StoreSearchTabName = ref<string>();
const openStoreSearchSelect = (isSearchData: boolean, tabName: string = "list") => {
  popSearchType.value = isSearchData; // 임시 - 매장 검색결과 팝업 확인을 위한 이벤트 추가 ( 개발시 삭제 요청 )
  StoreSearchTabName.value = tabName;
  popStoreSearchSelect.value.open = true;
};
</script>

<style lang="scss" scoped>
@import url('/assets/css/pages/service.scss');
</style>
