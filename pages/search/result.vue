<template>
  <!-- 검색결과 있음 -->
  <ContWrap v-if="isDataSearch" type="white" in-bottom="sm">
    <div class="related-search-wrap">
      <div class="title">연관</div>
      <SwiperAutoWrap gap="10">
        <!-- slide -->
        <swiper-slide>
          <ETBtn tag="a" size="sm" to="javascript:">
            <span class="text">만두국</span>
          </ETBtn>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <ETBtn tag="a" size="sm" to="javascript:">
            <span class="text">김치만두</span>
          </ETBtn>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <ETBtn tag="a" size="sm" to="javascript:">
            <span class="text">고기만두</span>
          </ETBtn>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <ETBtn tag="a" size="sm" to="javascript:">
            <span class="text">군만두</span>
          </ETBtn>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <ETBtn tag="a" size="sm" to="javascript:">
            <span class="text">갈비만두</span>
          </ETBtn>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <ETBtn tag="a" size="sm" to="javascript:">
            <span class="text">비비고만두</span>
          </ETBtn>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <ETBtn tag="a" size="sm" to="javascript:">
            <span class="text">만두국</span>
          </ETBtn>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <ETBtn tag="a" size="sm" to="javascript:">
            <span class="text">김치만두</span>
          </ETBtn>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <ETBtn tag="a" size="sm" to="javascript:">
            <span class="text">고기만두</span>
          </ETBtn>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <ETBtn tag="a" size="sm" to="javascript:">
            <span class="text">군만두</span>
          </ETBtn>
        </swiper-slide>
        <!-- // slide -->
      </SwiperAutoWrap>
    </div>
  </ContWrap>
  <ContWrap v-if="isDataSearch" in-bottom="sm">
    <FlexGroup>
      <div class="flex-left">
        <div class="ctitle-sm fw-md fc-gray90">
          원하시는 상품의 재고를 찾고 계신가요?
        </div>
      </div>
      <div class="flex-right">
        <EBtn tag="a" color="gray" size="xs" to="/stock/product">
          <div class="text">
            재고찾기
          </div>
        </EBtn>
      </div>
    </FlexGroup>
  </ContWrap>
  <ContWrap v-if="isDataSearch" type="white" in-bottom="zero">
    <div class="list-header">
      <div class="search-result-tit">
        <span class="fc-spot fw-sb">'만두'</span>에 대한 검색결과
      </div>
    </div>
  </ContWrap>
  <TabWrap v-if="isDataSearch" fir-active="allResult">
    <template #tabs="{ activeTab, setActiveTab }">
      <SwiperAutoWrap type="line" class="scroll-fix">
        <swiper-slide class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'allResult' }"
            @click="setActiveTab('allResult')"
          >
            <span class="tab-text">전체</span>
          </button>
        </swiper-slide>
        <swiper-slide class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'pickUp' }"
            @click="setActiveTab('pickUp')"
          >
            <span class="tab-text">당일픽업</span>
          </button>
        </swiper-slide>
        <swiper-slide class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'reservation' }"
            @click="setActiveTab('reservation')"
          >
            <span class="tab-text">사전예약</span>
          </button>
        </swiper-slide>
        <swiper-slide class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'giftCard' }"
            @click="setActiveTab('giftCard')"
          >
            <span class="tab-text">교환권</span>
          </button>
        </swiper-slide>
        <swiper-slide class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'discount' }"
            @click="setActiveTab('discount')"
          >
            <span class="tab-text">구독할인</span>
          </button>
        </swiper-slide>
        <swiper-slide class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'voucher' }"
            @click="setActiveTab('voucher')"
          >
            <span class="tab-text">금액권</span>
          </button>
        </swiper-slide>
      </SwiperAutoWrap>
    </template>
    <template #default="{ activeTab }">
      <ContWrap v-if="activeTab === 'allResult'" in-top="md" type="white">
        <ContBox size="zero">
          <div class="list-header">
            <FlexGroup align="center">
              <div class="goods-group">
                <EGoods val="100" unit="건" />
              </div>
            </FlexGroup>
          </div>
        </ContBox>
        <ContBox size="zero">
          <CtitleWrap>
            <FlexGroup align="center">
              <div class="flex-left">
                <ETit type="lgCont">
                  당일픽업
                  <EGoods val="100" class="fc-spot" />
                </ETit>
              </div>
              <div class="flex-right">
                <ETBtn size="xs" @click="() => (tabWrapRef as TabWrapExpose).setActiveTab('pickUp')">
                  <span class="text">더보기</span>
                </ETBtn>
              </div>
            </FlexGroup>
          </CtitleWrap>
          <SwiperAutoWrap gap="10" class="side-zero">
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl" dim="19">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="혜택" />
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
                    <EBadge color="light-gray" size="sm" badge-text="한정수량" />
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
                  <BadgeGroup gap="md">
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
          </SwiperAutoWrap>
        </ContBox>
        <ContBox size="lg" deco="t-line">
          <CtitleWrap>
            <FlexGroup align="center">
              <div class="flex-left">
                <ETit type="lgCont">
                  사전예약
                  <EGoods val="8" class="fc-spot" />
                </ETit>
              </div>
              <div class="flex-right">
                <ETBtn size="xs" @click="() => (tabWrapRef as TabWrapExpose).setActiveTab('reservation')">
                  <span class="text">더보기</span>
                </ETBtn>
              </div>
            </FlexGroup>
          </CtitleWrap>
          <SwiperAutoWrap gap="10" class="side-zero">
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl" dim="19">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="혜택" />
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
                    <EBadge color="light-gray" size="sm" badge-text="앱전용" />
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
                  <BadgeGroup gap="md">
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
                    <EBadge color="light-gray" size="sm" badge-text="한정수량" />
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
                  <BadgeGroup gap="md">
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
          </SwiperAutoWrap>
        </ContBox>
        <ContBox size="lg" deco="t-line">
          <CtitleWrap>
            <FlexGroup align="center">
              <div class="flex-left">
                <ETit type="lgCont">
                  교환권
                  <EGoods val="8" class="fc-spot" />
                </ETit>
              </div>
              <div class="flex-right">
                <ETBtn size="xs" @click="() => (tabWrapRef as TabWrapExpose).setActiveTab('giftCard')">
                  <span class="text">더보기</span>
                </ETBtn>
              </div>
            </FlexGroup>
          </CtitleWrap>
          <SwiperAutoWrap gap="10" class="side-zero">
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="혜택" />
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
                    <EBadge color="light-gray" size="sm" badge-text="한정수량" />
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
                  <BadgeGroup gap="md">
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
          </SwiperAutoWrap>
        </ContBox>
        <ContBox size="lg" deco="t-line">
          <CtitleWrap>
            <FlexGroup align="center">
              <div class="flex-left">
                <ETit type="lgCont">
                  구독할인
                  <EGoods val="8" class="fc-spot" />
                </ETit>
              </div>
              <div class="flex-right">
                <ETBtn size="xs" @click="() => (tabWrapRef as TabWrapExpose).setActiveTab('discount')">
                  <span class="text">더보기</span>
                </ETBtn>
              </div>
            </FlexGroup>
          </CtitleWrap>
          <SwiperAutoWrap gap="10" class="side-zero">
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl" dim="19">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="혜택" />
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
                    바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                  </ETit>
                  <div class="stext">
                    (31일간, 월 1회 30% / 총 20회)
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
                    <EBadge color="light-gray" size="sm" badge-text="NEW" />
                  </BadgeGroup>
                  <ETit type="prod">
                    바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                  </ETit>
                  <div class="stext">
                    (31일간, 월 1회 30% / 총 20회)
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
                    <EBadge color="light-gray" size="sm" badge-text="한정수량" />
                  </BadgeGroup>
                  <ETit type="prod">
                    바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                  </ETit>
                  <div class="stext">
                    (31일간, 월 1회 30% / 총 20회)
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
                    <EBadge color="light-gray" size="sm" badge-text="NEW" />
                  </BadgeGroup>
                  <ETit type="prod">
                    바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                  </ETit>
                  <div class="stext">
                    (31일간, 월 1회 30% / 총 20회)
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
                    <EBadge color="light-gray" size="sm" badge-text="NEW" />
                  </BadgeGroup>
                  <ETit type="prod">
                    바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                  </ETit>
                  <div class="stext">
                    (31일간, 월 1회 30% / 총 20회)
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
                    <EBadge color="light-gray" size="sm" badge-text="NEW" />
                  </BadgeGroup>
                  <ETit type="prod">
                    바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                  </ETit>
                  <div class="stext">
                    (31일간, 월 1회 30% / 총 20회)
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
          </SwiperAutoWrap>
        </ContBox>
        <ContBox size="lg" deco="t-line">
          <CtitleWrap>
            <FlexGroup align="center">
              <div class="flex-left">
                <ETit type="lgCont">
                  금액권
                  <EGoods val="8" class="fc-spot" />
                </ETit>
              </div>
              <div class="flex-right">
                <ETBtn size="xs" @click="() => (tabWrapRef as TabWrapExpose).setActiveTab('voucher')">
                  <span class="text">더보기</span>
                </ETBtn>
              </div>
            </FlexGroup>
          </CtitleWrap>
          <SwiperAutoWrap gap="10" class="side-zero">
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl" dim="19">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="혜택" />
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
                    <EBadge color="light-gray" size="sm" badge-text="한정수량" />
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
      <ContWrap v-if="activeTab !== 'allResult'" in-top="md" type="white">
        <ContBox v-if="activeTab === 'pickUp' || activeTab === 'reservation'" size="sm">
          <button type="button" class="btn-store" @click="openStoreSearchSelect(false)">
            <EBadge color="green" size="md" badge-text="픽업매장" />
            <span class="store">세븐일레븐 강남점</span>
            <EIco name="arw-right" color="gray" size="sm" />
          </button>
        </ContBox>
        <ContBox size="sm">
          <div class="list-header">
            <FlexGroup align="center">
              <div class="flex-left">
                <div class="goods-group">
                  <EGoods val="8" unit="건" />
                </div>
              </div>
              <div class="flex-right">
                <div class="ui-select type-text">
                  <select title="예약현황 정렬">
                    <option selected>
                      판매량 많은순
                    </option>
                    <option>최신순</option>
                    <option v-if="activeTab !== 'discount' || 'voucher'">추천순</option>
                    <option>가격 낮은순</option>
                    <option>가격 높은순</option>
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
          <GridListWrap v-if="activeTab === 'pickUp'" gap="prod">
            <li class="item-grid">
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <EThumbProdBox dim="SOLD OUT">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="혜택" />
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
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-gray" size="sm" badge-text="BEST" />
                    <EBadge color="light-gray" size="sm" badge-text="NEW" />
                  </BadgeGroup>
                  <ETit type="prod">
                    바리스타 로슈거 250ml 바리스타 로슈거 250ml
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
                    <EBadge color="gray" size="sm" badge-text="혜택" />
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
                    <EBadge color="light-gray" size="sm" badge-text="한정수량" />
                  </BadgeGroup>
                  <ETit type="prod">
                    바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                  </ETit>
                  <div class="goods-group">
                    <EGoods type="origin" size="sm" val="3,000" unit="원" />
                    <EGoods type="percent" size="md" val="10" unit="%" />
                    <EGoods size="md" val="2,700" unit="원" />
                  </div>
                  <div class="stock">
                    <EGoods size="sm" val="N" unit="개" /> 남음
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <div class="info-box">
                  <BadgeGroup gap="md">
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <div class="info-box">
                  <BadgeGroup gap="md">
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
          <GridListWrap v-if="activeTab === 'reservation'" gap="prod">
            <li class="item-grid">
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <EThumbProdBox dim="SOLD OUT">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="혜택" />
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
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-gray" size="sm" badge-text="앱전용" />
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
                    <EBadge color="gray" size="sm" badge-text="혜택" />
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
                    <EBadge color="light-gray" size="sm" badge-text="한정수량" />
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <div class="info-box">
                  <BadgeGroup gap="md">
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <div class="info-box">
                  <BadgeGroup gap="md">
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
          <GridListWrap v-if="activeTab === 'giftCard'" gap="prod">
            <li class="item-grid">
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <EThumbProdBox dim="SOLD OUT">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="혜택" />
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
                    <EBadge color="gray" size="sm" badge-text="혜택" />
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
                    <EBadge color="light-gray" size="sm" badge-text="한정수량" />
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <div class="info-box">
                  <BadgeGroup gap="md">
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <div class="info-box">
                  <BadgeGroup gap="md">
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
          <GridListWrap v-if="activeTab === 'discount'" gap="prod">
            <li class="item-grid">
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <EThumbProdBox dim="SOLD OUT">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="혜택" />
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
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-gray" size="sm" badge-text="BEST" />
                    <EBadge color="light-gray" size="sm" badge-text="NEW" />
                  </BadgeGroup>
                  <ETit type="prod">
                    바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                  </ETit>
                  <div class="stext">
                    (31일간, 월 1회 30% / 총 20회)
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
            </li>
            <li class="item-grid">
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <EThumbProdBox>
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="혜택" />
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
                    <EBadge color="light-gray" size="sm" badge-text="한정수량" />
                  </BadgeGroup>
                  <ETit type="prod">
                    바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                  </ETit>
                  <div class="stext">
                    (31일간, 월 1회 30% / 총 20회)
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-gray" size="sm" badge-text="BEST" />
                    <EBadge color="light-gray" size="sm" badge-text="NEW" />
                  </BadgeGroup>
                  <ETit type="prod">
                    바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                  </ETit>
                  <div class="stext">
                    (31일간, 월 1회 30% / 총 20회)
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-gray" size="sm" badge-text="BEST" />
                    <EBadge color="light-gray" size="sm" badge-text="NEW" />
                  </BadgeGroup>
                  <ETit type="prod">
                    바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                  </ETit>
                  <div class="stext">
                    (31일간, 월 1회 30% / 총 20회)
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
            </li>
          </GridListWrap>
          <GridListWrap v-if="activeTab === 'voucher'" gap="prod">
            <li class="item-grid">
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <EThumbProdBox dim="SOLD OUT">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="혜택" />
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
                <div class="info-box">
                  <BadgeGroup gap="md">
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
                    <EBadge color="gray" size="sm" badge-text="혜택" />
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
                    <EBadge color="light-gray" size="sm" badge-text="한정수량" />
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <div class="info-box">
                  <BadgeGroup gap="md">
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <div class="info-box">
                  <BadgeGroup gap="md">
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
                </div>
              </div>
              <!-- // thumb-prod -->
              <NuxtLink class="btn-link" to="javascript:">
                <span class="offscreen">바로가기</span>
              </NuxtLink>
            </li>
          </GridListWrap>

          <!-- 필터 조건 검색결과 없음 -->
          <InfoGuideWrap
            v-if="isDataSearch && isNoDataSearchFilter"
            type="no-data"
            name="filter-result"
            desc="선택한 조건에 맞는 상품이 없습니다."
            sub-desc="조건을 다시 선택해 주세요."
          />
          <!-- // 필터 조건 검색결과 없음 -->
        </ContBox>
      </ContWrap>
    </template>
  </TabWrap>
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
                <input id="filterProdPrice06" type="checkbox" checked>
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
  <PopStoreSearchSelect v-model:sta="popStoreSearchSelect" :is-search-data="popSearchType" />
  <!-- // pop : 매장선택 -->
</template>

<script setup lang="ts">
const isDataSearch = ref(true); // 임시 : 검색결과 컨텐츠 확인을 위해 추가
const isNoDataSearchFilter = ref(true); // 임시 : 필터 조건 검색결과 없음 컨텐츠 확인을 위해 추가
const isNoDataSearch = ref(true); // 임시 : 검색결과 없음 컨텐츠 확인을 위해 추가

// 상품필터옵션 팝업
const popProdFilterOption = ref({ open: false });
const openProdFilterOption = () => popProdFilterOption.value.open = true;

// 매장선택
const popStoreSearchSelect = ref({ open: false });

// 임시 - 매장 검색결과 팝업 확인을 위한 이벤트 추가 ( 개발시 삭제 요청 )
const popSearchType = ref<boolean>();

const openStoreSearchSelect = (isSearchData: boolean) => {
  popSearchType.value = isSearchData; // 임시 - 매장 검색결과 팝업 확인을 위한 이벤트 추가 ( 개발시 삭제 요청 )
  popStoreSearchSelect.value.open = true;
};

// 임시 :: 탭 변경 확인을 위해 추가
interface TabWrapExpose {
  setActiveTab: (tabName: string) => void;
}
const tabWrapRef = ref<TabWrapExpose | null>(null);
</script>

<style lang="scss" scoped>

</style>
