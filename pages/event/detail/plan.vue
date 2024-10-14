<template>
  <ContWrap type="white" class="side-zero" in-top="zero" in-bottom="zero">
    <ContBox>
      <div class="thumb-box">
        <img src="/assets/images/temp/temp_event_detail.png" alt="기획전 이미지" />
      </div>
    </ContBox>
  </ContWrap>
  <ContWrap type="white" in-top="lg">
    <ContBox size="sm">
      <div class="editor-wrap">
        <!-- 개발 시 삭제 영역 -->
        <div style="height: 108px; background: rgba(255, 0, 0, .1);">
          에디터영역 확인을 위한 임시 div입니다.<br />
          개발시 해당 div 삭제 후 작업해 주세요.
        </div>
        <!-- // 개발 시 삭제 영역 -->
      </div>
    </ContBox>
  </ContWrap>
  <TabWrap fir-active="allProd">
    <template #tabs="{ activeTab, setActiveTab }">
      <SwiperAutoWrap type="line">
        <swiper-slide class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'allProd' }"
            @click="setActiveTab('allProd')"
          >
            <span class="tab-text">전체</span>
          </button>
        </swiper-slide>
        <swiper-slide class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'dessert' }"
            @click="setActiveTab('dessert')"
          >
            <span class="tab-text">빵/디저트</span>
          </button>
        </swiper-slide>
        <swiper-slide class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'chocolate' }"
            @click="setActiveTab('chocolate')"
          >
            <span class="tab-text">초콜릿</span>
          </button>
        </swiper-slide>
        <swiper-slide class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'milk' }"
            @click="setActiveTab('milk')"
          >
            <span class="tab-text">유제품</span>
          </button>
        </swiper-slide>
        <swiper-slide class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'fruit' }"
            @click="setActiveTab('fruit')"
          >
            <span class="tab-text">과일/야채</span>
          </button>
        </swiper-slide>
      </SwiperAutoWrap>
    </template>
    <template #default="{ activeTab }">
      <ContWrap type="white" class="not-navbar">
        <ContBox>
          <!-- DESC :: 카테고리별 배너 등록할 경우 activeTab 값 연결 필요 -->
          <div v-if="activeTab === 'dessert' || activeTab === 'milk'" class="thumb-event-banner-box">
            <img src="/assets/images/temp/temp_banner_marketing_1.png" alt="기획전 카테고리 배너 이미지" />
          </div>
          <GridListWrap v-if="activeTab === 'allProd'" gap="prod">
            <li class="item-grid">
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <EThumbProdBox>
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="할인" />
                    <EBadge color="gray" size="sm" badge-text="핫딜" />
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
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
          </GridListWrap>
          <GridListWrap v-if="activeTab === 'dessert'" gap="prod">
            <li class="item-grid">
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <EThumbProdBox>
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
                <EThumbProdBox>
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
                <EThumbProdBox>
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
                <EThumbProdBox>
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
          </GridListWrap>
          <GridListWrap v-if="activeTab === 'chocolate'" gap="prod">
            <li class="item-grid">
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <EThumbProdBox>
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
                <EThumbProdBox>
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
                <EThumbProdBox>
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
                <EThumbProdBox>
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
          </GridListWrap>
          <GridListWrap v-if="activeTab === 'milk'" gap="prod">
            <li class="item-grid">
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <EThumbProdBox>
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
                <EThumbProdBox>
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
                <EThumbProdBox>
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
                <EThumbProdBox>
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
          </GridListWrap>
          <GridListWrap v-if="activeTab === 'fruit'" gap="prod">
            <li class="item-grid">
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <EThumbProdBox>
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
                <EThumbProdBox>
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
                <EThumbProdBox>
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
                <EThumbProdBox>
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
          </GridListWrap>
        </ContBox>
      </ContWrap>
    </template>
  </TabWrap>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import url('@/assets/css/pages/event.scss');
</style>
