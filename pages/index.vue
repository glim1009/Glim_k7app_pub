<template>
  <NuxtLayout name="default">
    <template #header>
      <LayoutHeaderMain />
    </template>

    <div class="main-cont-wrapper">
      <!-- main - header -->
      <ContWrap in-top="zero" in-bottom="zero" class="side-zero">
        <!--  이벤트, 기획전 배너  -->
        <ContBox>
          <SwiperBannerWrap class="swiper-main-banner" add-click @click-emit="popBannerCollection.open = true">
            <swiper-slide>
              <div class="main-banner-area">
                <div class="thumb-box" style="background-image: url('/assets/images/temp/temp_main_banner_1.png')" />
                <div class="banner-info-box">
                  <CtitleWrap size="zero">
                    <div class="ctitle-main-banner">
                      <div v-if="true" class="text-line">
                        구독권으로 맛보는
                      </div>
                      <div v-if="true" class="text-line">
                        세븐 도시락 1
                      </div>
                    </div>
                    <div class="stext-lg">
                      <div v-if="true" class="text-line">
                        도시락 구독하고 할인받으세요
                      </div>
                      <div v-if="true" class="text-line">
                        도시락 구독하고 할인받으세요
                      </div>
                    </div>
                  </CtitleWrap>
                </div>
              </div>
              <NuxtLink class="btn-link" to="javascript:">
                <span class="offscreen">바로가기</span>
              </NuxtLink>
            </swiper-slide>
            <swiper-slide>
              <div class="main-banner-area">
                <div class="thumb-box" style="background-image: url('/assets/images/temp/temp_main_banner_2.png')" />
                <div class="banner-info-box">
                  <CtitleWrap size="zero">
                    <div class="ctitle-main-banner">
                      <div class="text-line">
                        구독권으로 맛보는
                      </div>
                      <div class="text-line">
                        세븐 도시락 2
                      </div>
                    </div>
                    <div class="stext-lg">
                      <div class="text-line">
                        도시락 구독하고 할인받으세요
                      </div>
                      <div class="text-line">
                        도시락 구독하고 할인받으세요
                      </div>
                    </div>
                  </CtitleWrap>
                </div>
              </div>
              <NuxtLink class="btn-link" to="javascript:">
                <span class="offscreen">바로가기</span>
              </NuxtLink>
            </swiper-slide>
            <swiper-slide>
              <div class="main-banner-area">
                <div class="thumb-box" style="background-image: url('/assets/images/temp/temp_main_banner_3.png')" />
                <div class="banner-info-box">
                  <CtitleWrap size="zero">
                    <div class="ctitle-main-banner">
                      <div class="text-line">
                        구독권으로 맛보는
                      </div>
                      <div class="text-line">
                        세븐 도시락 3
                      </div>
                    </div>
                    <div class="stext-lg">
                      <div class="text-line">
                        도시락 구독하고 할인받으세요
                      </div>
                      <div class="text-line">
                        도시락 구독하고 할인받으세요
                      </div>
                    </div>
                  </CtitleWrap>
                </div>
              </div>
              <NuxtLink class="btn-link" to="javascript:">
                <span class="offscreen">바로가기</span>
              </NuxtLink>
            </swiper-slide>
          </SwiperBannerWrap>
        </ContBox>
        <!--  // 이벤트, 기획전 배너  -->

        <ContBox class="cont-user-service">
          <div class="user-service-header">
            <div class="user-fixed-wrap">
              <NuxtLink to="/search" class="link-quick-menu">
                <EIco name="search" color="white" />
                <span class="text">검색</span>
              </NuxtLink>
            </div>
            <!--  퀵 메뉴  -->
            <SwiperAutoWrap class="swiper-quick-menu" gap="4">
              <swiper-slide>
                <NuxtLink to="javascript:" class="link-quick-menu">
                  <span class="text">👀 재고찾기</span>
                </NuxtLink>
              </swiper-slide>
              <swiper-slide>
                <NuxtLink to="javascript:" class="link-quick-menu">
                  <span class="text">🏠 점포찾기</span>
                </NuxtLink>
              </swiper-slide>
              <swiper-slide>
                <NuxtLink to="javascript:" class="link-quick-menu">
                  <span class="text">🍙 +1 증정</span>
                </NuxtLink>
              </swiper-slide>
              <swiper-slide>
                <NuxtLink to="javascript:" class="link-quick-menu">
                  <span class="text">👀 재고찾기</span>
                </NuxtLink>
              </swiper-slide>
              <swiper-slide>
                <NuxtLink to="javascript:" class="link-quick-menu">
                  <span class="text">🏠 점포찾기</span>
                </NuxtLink>
              </swiper-slide>
              <swiper-slide>
                <NuxtLink to="javascript:" class="link-quick-menu">
                  <span class="text">🍙 +1 증정</span>
                </NuxtLink>
              </swiper-slide>
            </SwiperAutoWrap>
            <!--  퀵 메뉴  -->
          </div>

          <div class="service-grid-wrap">
            <!-- 예약 서비스 -->
            <div class="service-grid-box">
              <CtitleWrap>
                <div class="title-sub">
                  고객님을 위한
                </div>
                <ETit type="lgCont">
                  예약 서비스
                </ETit>
              </CtitleWrap>
              <RowListWrap gap="sm">
                <li class="item-service-arr-link">
                  <NuxtLink class="link-service-menu-arr" to="/service">
                    <EIco name="service-pickup" size="sm" />
                    <div class="ctitle-sm">
                      당일픽업
                    </div>
                  </NuxtLink>
                </li>
                <li class="item-service-arr-link">
                  <NuxtLink class="link-service-menu-arr" to="/service/reservation">
                    <EIco name="service-reservation" size="sm" />
                    <div class="ctitle-sm">
                      사전예약
                    </div>
                  </NuxtLink>
                </li>
                <li class="item-service-arr-link">
                  <NuxtLink class="link-service-menu-arr" to="/delivery">
                    <EIco name="service-delivery" size="sm" />
                    <div class="ctitle-sm">
                      택배예약
                    </div>
                  </NuxtLink>
                </li>
              </RowListWrap>
            </div>
            <div class="keep-grid-box">
              <CtitleWrap>
                <div class="title-sub">
                  필요할때 맡겨놓는
                </div>
                <ETit type="lgCont">
                  쏘옥보관 <span v-if="true" class="fc-spot">5</span>
                </ETit>
              </CtitleWrap>
              <!-- DESC :: 상품 없는 경우 false -->
              <div v-if="true" class="keep-prod-wrap">
                <div class="keep-prod-area">
                  <!-- DESC :: 컬러 강조 클래스 - type-green 추가 -->
                  <div class="bubble-box type-green">
                    <span class="text">1일 남음</span>
                  </div>
                  <EThumbProdBox size="md">
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                    </template>
                  </EThumbProdBox>
                  <NuxtLink class="btn-link" to="javascript:">
                    <span class="offscreen">바로가기</span>
                  </NuxtLink>
                </div>
                <div class="keep-prod-area">
                  <div class="bubble-box">
                    <span class="text">9일 남음</span>
                  </div>
                  <EThumbProdBox size="md">
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                    </template>
                  </EThumbProdBox>
                  <NuxtLink class="btn-link" to="javascript:">
                    <span class="offscreen">바로가기</span>
                  </NuxtLink>
                </div>
              </div>
              <NuxtLink class="link-service-keep" to="javascript:">
                <span class="offscreen">바로가기</span>
              </NuxtLink>
            </div>
            <div class="banner-grid-box">
              <div class="thumb-box">
                <img src="/assets/images/temp/temp_shortcut_banner.png" alt="바로가기 배너 이미지">
              </div>
              <div class="thumb-text-box">
                <img src="/assets/images/temp/temp_shortcut_banner_text.png" alt="바로가기 배너 텍스트 이미지">
              </div>
              <NuxtLink class="btn-link" to="javascript:">
                <span class="offscreen">바로가기</span>
              </NuxtLink>
            </div>
          </div>
        </ContBox>
      </ContWrap>
      <!-- // main - header -->

      <!-- main - DP -->
      <ContWrap in-top="lg" type="white">
        <ContBox size="lg">
          <CtitleWrap>
            <ETit type="xlCont">
              다른 곳에서는 못봐요<br>여기만 있으니까 👀
            </ETit>
          </CtitleWrap>
          <SwiperAutoWrap gap="10" class="side-zero">
            <!-- slide -->
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="1+1" />
                  </div>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="1+1" />
                  </div>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-green" size="sm" badge-text="사전예약" />
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
                </div>
              </div>
              <!-- // thumb-prod -->
              <NuxtLink class="btn-link" to="javascript:">
                <span class="offscreen">바로가기</span>
              </NuxtLink>
            </swiper-slide>
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="1+1" />
                  </div>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-green" size="sm" badge-text="당일픽업" />
                    <EBadge color="light-gray" size="sm" badge-text="NEW" />
                  </BadgeGroup>
                  <ETit type="prod">
                    바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                  </ETit>
                  <div class="stext">
                    (31일간, 월 1회 30% / 총 20회)
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
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="1+1" />
                  </div>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="1+1" />
                  </div>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="1+1" />
                  </div>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="1+1" />
                  </div>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="1+1" />
                  </div>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="1+1" />
                  </div>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
            <!-- // slide -->
          </SwiperAutoWrap>
        </ContBox>
      </ContWrap>
      <!-- // main - DP -->

      <!-- main - 기획전 -->
      <ContWrap in-top="lg" type="divider">
        <ContBox size="lg">
          <CtitleWrap>
            <FlexGroup>
              <div class="flex-left">
                <ETit type="xlCont">
                  진행중인 기획전
                </ETit>
              </div>
              <div class="flex-right">
                <ETBtn tag="a" size="xs" to="/event/plan">
                  <span class="text">더보기</span>
                  <EIco name="arw-right" color="gray" size="xs" />
                </ETBtn>
              </div>
            </FlexGroup>
          </CtitleWrap>
          <SwiperBannerWrap class="swiper-main-plan" pagination="bullets" is-auto-height pagination-pos="out-center">
            <!-- repeat -->
            <swiper-slide>
              <ContBox gap="md">
                <!-- thumb-event -->
                <div class="thumb-event">
                  <EThumbEventBox>
                    <template #thumb>
                      <img src="/assets/images/temp/temp_banner_service_1.png" alt="기획전 배너 이미지">
                    </template>
                  </EThumbEventBox>
                  <NuxtLink class="btn-link" to="javascript:">
                    <span class="offscreen">바로가기</span>
                  </NuxtLink>
                </div>
                <!-- // thumb-event -->
                <RowListWrap>
                  <li class="item-thumb-prod">
                    <!-- thumb-prod-flex -->
                    <div class="thumb-prod-flex">
                      <EThumbProdBox size="xl">
                        <div class="left-group">
                          <EBadge color="gray" size="sm" badge-text="혜택" />
                        </div>
                        <div class="right-group">
                          <EBadge color="red" size="sm" badge-text="19" />
                        </div>
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
                        <div class="stext">
                          (31일간, 월 1회 30% / 총 20회)
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
                    <!-- // thumb-prod-flex -->
                  </li>
                  <li class="item-thumb-prod">
                    <!-- thumb-prod-flex -->
                    <div class="thumb-prod-flex">
                      <EThumbProdBox size="xl" dim="19">
                        <div class="left-group">
                          <EBadge color="gray" size="sm" badge-text="혜택" />
                        </div>
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
                    <!-- // thumb-prod-flex -->
                  </li>
                  <li class="item-thumb-prod">
                    <!-- thumb-prod-flex -->
                    <div class="thumb-prod-flex">
                      <EThumbProdBox size="xl">
                        <div class="left-group">
                          <EBadge color="gray" size="sm" badge-text="혜택" />
                        </div>
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
                    <!-- // thumb-prod-flex -->
                  </li>
                </RowListWrap>
              </ContBox>
            </swiper-slide>
            <!-- // repeat -->
            <!-- repeat -->
            <swiper-slide>
              <ContBox gap="md">
                <!-- thumb-event -->
                <div class="thumb-event">
                  <EThumbEventBox dim="19">
                    <template #thumb>
                      <img src="/assets/images/temp/temp_banner_service_2.png" alt="기획전 배너 이미지">
                    </template>
                  </EThumbEventBox>
                  <NuxtLink class="btn-link" to="javascript:">
                    <span class="offscreen">바로가기</span>
                  </NuxtLink>
                </div>
                <!-- // thumb-event -->
                <RowListWrap>
                  <li class="item-thumb-prod">
                    <!-- thumb-prod-flex -->
                    <div class="thumb-prod-flex">
                      <EThumbProdBox size="xl">
                        <div class="left-group">
                          <EBadge color="gray" size="sm" badge-text="혜택" />
                        </div>
                        <div class="right-group">
                          <EBadge color="red" size="sm" badge-text="19" />
                        </div>
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
                        <div class="stext">
                          (31일간, 월 1회 30% / 총 20회)
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
                    <!-- // thumb-prod-flex -->
                  </li>
                  <li class="item-thumb-prod">
                    <!-- thumb-prod-flex -->
                    <div class="thumb-prod-flex">
                      <EThumbProdBox size="xl" dim="19">
                        <div class="left-group">
                          <EBadge color="gray" size="sm" badge-text="혜택" />
                        </div>
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
                    <!-- // thumb-prod-flex -->
                  </li>
                  <li class="item-thumb-prod">
                    <!-- thumb-prod-flex -->
                    <div class="thumb-prod-flex">
                      <EThumbProdBox size="xl">
                        <div class="left-group">
                          <EBadge color="gray" size="sm" badge-text="혜택" />
                        </div>
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
                    <!-- // thumb-prod-flex -->
                  </li>
                </RowListWrap>
              </ContBox>
            </swiper-slide>
            <!-- // repeat -->
          </SwiperBannerWrap>
        </ContBox>
      </ContWrap>
      <!-- // main - 기획전 -->

      <!-- main - 띠배너 -->
      <SwiperBannerWrap class="swiper-main-marketing">
        <swiper-slide>
          <div class="thumb-box">
            <img src="/assets/images/temp/temp_banner_marketing_1.png" alt="배너 이미지">
          </div>
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <div class="thumb-box">
            <img src="/assets/images/temp/temp_banner_marketing_2.png" alt="배너 이미지">
          </div>
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
      </SwiperBannerWrap>
      <!-- main - 띠배너 -->

      <!-- main - 전시 -->
      <ContWrap in-top="lg" type="divider">
        <ContBox size="lg">
          <CtitleWrap>
            <ETit type="xlCont">
              세븐일레븐이 추천하는<br>PICK 상품💚
            </ETit>
          </CtitleWrap>
          <SwiperAutoWrap class="swiper-main-rlist" is-auto-height gap="20">
            <!-- slide -->
            <swiper-slide>
              <RowListWrap>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="xl">
                      <div class="left-group">
                        <EBadge color="gray" size="sm" badge-text="혜택" />
                      </div>
                      <div class="right-group">
                        <EBadge color="red" size="sm" badge-text="19" />
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <BadgeGroup gap="md">
                        <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
                      <div class="rating">
                        <EIco name="rating" color="gray50" size="xs">
                          <span class="offscreen">별점</span>
                        </EIco>
                        <span class="score-sm">4.0 (10)</span>
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                </li>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="xl" dim="19">
                      <div class="left-group">
                        <EBadge color="gray" size="sm" badge-text="혜택" />
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <BadgeGroup gap="md">
                        <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
                  <!-- // thumb-prod-flex -->
                </li>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="xl">
                      <div class="left-group">
                        <EBadge color="gray" size="sm" badge-text="혜택" />
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <BadgeGroup gap="md">
                        <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
                  <!-- // thumb-prod-flex -->
                </li>
              </RowListWrap>
            </swiper-slide>
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <RowListWrap>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="xl">
                      <div class="left-group">
                        <EBadge color="gray" size="sm" badge-text="혜택" />
                      </div>
                      <div class="right-group">
                        <EBadge color="red" size="sm" badge-text="19" />
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <BadgeGroup gap="md">
                        <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
                      <div class="rating">
                        <EIco name="rating" color="gray50" size="xs">
                          <span class="offscreen">별점</span>
                        </EIco>
                        <span class="score-sm">4.0 (10)</span>
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                </li>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="xl" dim="19">
                      <div class="left-group">
                        <EBadge color="gray" size="sm" badge-text="혜택" />
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <BadgeGroup gap="md">
                        <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
                  <!-- // thumb-prod-flex -->
                </li>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="xl">
                      <div class="left-group">
                        <EBadge color="gray" size="sm" badge-text="혜택" />
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <BadgeGroup gap="md">
                        <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
                  <!-- // thumb-prod-flex -->
                </li>
              </RowListWrap>
            </swiper-slide>
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <RowListWrap>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="xl">
                      <div class="left-group">
                        <EBadge color="gray" size="sm" badge-text="혜택" />
                      </div>
                      <div class="right-group">
                        <EBadge color="red" size="sm" badge-text="19" />
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <BadgeGroup gap="md">
                        <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
                      <div class="rating">
                        <EIco name="rating" color="gray50" size="xs">
                          <span class="offscreen">별점</span>
                        </EIco>
                        <span class="score-sm">4.0 (10)</span>
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                </li>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="xl" dim="19">
                      <div class="left-group">
                        <EBadge color="gray" size="sm" badge-text="혜택" />
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <BadgeGroup gap="md">
                        <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
                  <!-- // thumb-prod-flex -->
                </li>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="xl">
                      <div class="left-group">
                        <EBadge color="gray" size="sm" badge-text="혜택" />
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <BadgeGroup gap="md">
                        <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
                  <!-- // thumb-prod-flex -->
                </li>
              </RowListWrap>
            </swiper-slide>
            <!-- // slide -->
          </SwiperAutoWrap>
        </ContBox>
      </ContWrap>
      <!-- // main - 전시 -->

      <!-- main - 전시 -->
      <ContWrap in-top="lg" type="divider">
        <ContBox size="lg">
          <CtitleWrap>
            <ETit type="xlCont">
              놓치면 후회할<br>세븐일레븐 할인상품
            </ETit>
          </CtitleWrap>
          <SwiperAutoWrap gap="10" class="side-zero">
            <!-- slide -->
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="할인" />
                  </div>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-green" size="sm" badge-text="당일픽업" />
                    <EBadge color="light-gray" size="sm" badge-text="NEW" />
                  </BadgeGroup>
                  <ETit type="prod">
                    바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                  </ETit>
                  <div class="stext">
                    (31일간, 월 1회 30% / 총 20회)
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
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="1+1" />
                  </div>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-green" size="sm" badge-text="사전예약" />
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
                </div>
              </div>
              <!-- // thumb-prod -->
              <NuxtLink class="btn-link" to="javascript:">
                <span class="offscreen">바로가기</span>
              </NuxtLink>
            </swiper-slide>
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="1+1" />
                  </div>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-green" size="sm" badge-text="당일픽업" />
                    <EBadge color="light-gray" size="sm" badge-text="NEW" />
                  </BadgeGroup>
                  <ETit type="prod">
                    바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                  </ETit>
                  <div class="stext">
                    (31일간, 월 1회 30% / 총 20회)
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
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="1+1" />
                  </div>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="1+1" />
                  </div>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="1+1" />
                  </div>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="1+1" />
                  </div>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="1+1" />
                  </div>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="1+1" />
                  </div>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
            <!-- // slide -->
          </SwiperAutoWrap>
        </ContBox>
      </ContWrap>
      <!-- // main - 전시 -->

      <!-- main - 구독할인 -->
      <ContWrap in-top="lg">
        <ContBox size="lg">
          <CtitleWrap>
            <FlexGroup align="end">
              <div class="flex-left">
                <ETit type="xlCont">
                  똑똑한 소비습관🤓<br>구독하고 할인 받으세요
                </ETit>
              </div>
              <div class="flex-right">
                <ETBtn tag="a" size="xs" to="/service/category/discount">
                  <span class="text">더보기</span>
                  <EIco name="arw-right" color="gray" size="xs" />
                </ETBtn>
              </div>
            </FlexGroup>
          </CtitleWrap>
          <SwiperAutoWrap gap="12" class="side-zero">
            <!-- slide -->
            <swiper-slide>
              <ColorBox color="white" size="lg" class="discount-box">
                <!-- thumb-prod -->
                <div class="thumb-prod">
                  <!-- thumb-prod-md -->
                  <EThumbProdBox size="md">
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                    </template>
                  </EThumbProdBox>
                  <!-- // thumb-prod-md -->
                  <div class="info-box">
                    <ETit type="cont" class="ellipsis">
                      세븐카페 구독
                    </ETit>
                    <div class="bar-group">
                      <span class="bar-text-sm">31일간</span>
                      <span class="bar-text-sm">하루 1회</span>
                    </div>
                  </div>
                  <NuxtLink class="btn-link" to="javascript:">
                    <span class="offscreen">바로가기</span>
                  </NuxtLink>
                </div>
                <!-- // thumb-prod -->
                <!-- btn-flex-md-wrap -->
                <BtnWrap type="flex" size="md">
                  <EBtn to="javascript:" tag="a" color="gray" size="sm">
                    <span class="text">월 2,000원</span>
                  </EBtn>
                </BtnWrap>
                <!-- // btn-flex-md-wrap -->
              </ColorBox>
            </swiper-slide>
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <ColorBox color="white" size="lg" class="discount-box">
                <!-- thumb-prod -->
                <div class="thumb-prod">
                  <!-- thumb-prod-md -->
                  <EThumbProdBox size="md">
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                    </template>
                  </EThumbProdBox>
                  <!-- // thumb-prod-md -->
                  <div class="info-box">
                    <ETit type="cont" class="ellipsis">
                      세븐카페 구독
                    </ETit>
                    <div class="bar-group">
                      <span class="bar-text-sm">31일간</span>
                      <span class="bar-text-sm">하루 1회</span>
                    </div>
                  </div>
                  <NuxtLink class="btn-link" to="javascript:">
                    <span class="offscreen">바로가기</span>
                  </NuxtLink>
                </div>
                <!-- // thumb-prod -->
                <!-- btn-flex-md-wrap -->
                <BtnWrap type="flex" size="md">
                  <EBtn to="javascript:" tag="a" color="gray" size="sm">
                    <span class="text">월 2,000원</span>
                  </EBtn>
                </BtnWrap>
                <!-- // btn-flex-md-wrap -->
              </ColorBox>
            </swiper-slide>
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <ColorBox color="white" size="lg" class="discount-box">
                <!-- thumb-prod -->
                <div class="thumb-prod">
                  <!-- thumb-prod-md -->
                  <EThumbProdBox size="md">
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                    </template>
                  </EThumbProdBox>
                  <!-- // thumb-prod-md -->
                  <div class="info-box">
                    <ETit type="cont" class="ellipsis">
                      세븐카페 구독
                    </ETit>
                    <div class="bar-group">
                      <span class="bar-text-sm">31일간</span>
                      <span class="bar-text-sm">하루 1회</span>
                    </div>
                  </div>
                  <NuxtLink class="btn-link" to="javascript:">
                    <span class="offscreen">바로가기</span>
                  </NuxtLink>
                </div>
                <!-- // thumb-prod -->
                <!-- btn-flex-md-wrap -->
                <BtnWrap type="flex" size="md">
                  <EBtn to="javascript:" tag="a" color="gray" size="sm">
                    <span class="text">월 2,000원</span>
                  </EBtn>
                </BtnWrap>
                <!-- // btn-flex-md-wrap -->
              </ColorBox>
            </swiper-slide>
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <ColorBox color="white" size="lg" class="discount-box">
                <!-- thumb-prod -->
                <div class="thumb-prod">
                  <!-- thumb-prod-md -->
                  <EThumbProdBox size="md">
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                    </template>
                  </EThumbProdBox>
                  <!-- // thumb-prod-md -->
                  <div class="info-box">
                    <ETit type="cont" class="ellipsis">
                      세븐카페 구독
                    </ETit>
                    <div class="bar-group">
                      <span class="bar-text-sm">31일간</span>
                      <span class="bar-text-sm">하루 1회</span>
                    </div>
                  </div>
                  <NuxtLink class="btn-link" to="javascript:">
                    <span class="offscreen">바로가기</span>
                  </NuxtLink>
                </div>
                <!-- // thumb-prod -->
                <!-- btn-flex-md-wrap -->
                <BtnWrap type="flex" size="md">
                  <EBtn to="javascript:" tag="a" color="gray" size="sm">
                    <span class="text">월 2,000원</span>
                  </EBtn>
                </BtnWrap>
                <!-- // btn-flex-md-wrap -->
              </ColorBox>
            </swiper-slide>
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <ColorBox color="white" size="lg" class="discount-box">
                <!-- thumb-prod -->
                <div class="thumb-prod">
                  <!-- thumb-prod-md -->
                  <EThumbProdBox size="md">
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                    </template>
                  </EThumbProdBox>
                  <!-- // thumb-prod-md -->
                  <div class="info-box">
                    <ETit type="cont" class="ellipsis">
                      세븐카페 구독
                    </ETit>
                    <div class="bar-group">
                      <span class="bar-text-sm">31일간</span>
                      <span class="bar-text-sm">하루 1회</span>
                    </div>
                  </div>
                  <NuxtLink class="btn-link" to="javascript:">
                    <span class="offscreen">바로가기</span>
                  </NuxtLink>
                </div>
                <!-- // thumb-prod -->
                <!-- btn-flex-md-wrap -->
                <BtnWrap type="flex" size="md">
                  <EBtn to="javascript:" tag="a" color="gray" size="sm">
                    <span class="text">월 2,000원</span>
                  </EBtn>
                </BtnWrap>
                <!-- // btn-flex-md-wrap -->
              </ColorBox>
            </swiper-slide>
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <ColorBox color="white" size="lg" class="discount-box">
                <!-- thumb-prod -->
                <div class="thumb-prod">
                  <!-- thumb-prod-md -->
                  <EThumbProdBox size="md">
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                    </template>
                  </EThumbProdBox>
                  <!-- // thumb-prod-md -->
                  <div class="info-box">
                    <ETit type="cont" class="ellipsis">
                      세븐카페 구독
                    </ETit>
                    <div class="bar-group">
                      <span class="bar-text-sm">31일간</span>
                      <span class="bar-text-sm">하루 1회</span>
                    </div>
                  </div>
                  <NuxtLink class="btn-link" to="javascript:">
                    <span class="offscreen">바로가기</span>
                  </NuxtLink>
                </div>
                <!-- // thumb-prod -->
                <!-- btn-flex-md-wrap -->
                <BtnWrap type="flex" size="md">
                  <EBtn to="javascript:" tag="a" color="gray" size="sm">
                    <span class="text">월 2,000원</span>
                  </EBtn>
                </BtnWrap>
                <!-- // btn-flex-md-wrap -->
              </ColorBox>
            </swiper-slide>
            <!-- // slide -->
          </SwiperAutoWrap>
        </ContBox>
      </ContWrap>
      <!-- // main - 구독할인 -->

      <!-- main - 띠배너 -->
      <SwiperBannerWrap class="swiper-main-marketing">
        <swiper-slide>
          <div class="thumb-box">
            <img src="/assets/images/temp/temp_banner_marketing_1.png" alt="배너 이미지">
          </div>
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <div class="thumb-box">
            <img src="/assets/images/temp/temp_banner_marketing_2.png" alt="배너 이미지">
          </div>
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
      </SwiperBannerWrap>
      <!-- main - 띠배너 -->

      <!-- main - Best -->
      <ContWrap in-top="lg" type="divider">
        <ContBox size="lg">
          <CtitleWrap>
            <ETit type="xlCont">
              주목! 이번 주 인기 상품🔥<br>한 눈에 보세요
            </ETit>
          </CtitleWrap>
          <SwiperAutoWrap class="swiper-main-rlist" is-auto-height gap="20">
            <!-- slide -->
            <swiper-slide>
              <RowListWrap>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <div class="prod-number">
                      1
                    </div>
                    <EThumbProdBox size="xl">
                      <div class="left-group">
                        <EBadge color="gray" size="sm" badge-text="혜택" />
                      </div>
                      <div class="right-group">
                        <EBadge color="red" size="sm" badge-text="19" />
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <BadgeGroup gap="md">
                        <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
                  <!-- // thumb-prod-flex -->
                </li>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <div class="prod-number">
                      2
                    </div>
                    <EThumbProdBox size="xl" dim="19">
                      <div class="left-group">
                        <EBadge color="gray" size="sm" badge-text="혜택" />
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <BadgeGroup gap="md">
                        <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
                  <!-- // thumb-prod-flex -->
                </li>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <div class="prod-number">
                      3
                    </div>
                    <EThumbProdBox size="xl">
                      <div class="left-group">
                        <EBadge color="gray" size="sm" badge-text="혜택" />
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <BadgeGroup gap="md">
                        <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
                  <!-- // thumb-prod-flex -->
                </li>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <div class="prod-number">
                      4
                    </div>
                    <EThumbProdBox size="xl">
                      <div class="left-group">
                        <EBadge color="gray" size="sm" badge-text="혜택" />
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <BadgeGroup gap="md">
                        <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
                  <!-- // thumb-prod-flex -->
                </li>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <div class="prod-number">
                      5
                    </div>
                    <EThumbProdBox size="xl">
                      <div class="left-group">
                        <EBadge color="gray" size="sm" badge-text="혜택" />
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <BadgeGroup gap="md">
                        <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
                  <!-- // thumb-prod-flex -->
                </li>
              </RowListWrap>
            </swiper-slide>
            <!-- // slide -->
            <!-- slide -->
            <swiper-slide>
              <RowListWrap>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <div class="prod-number">
                      6
                    </div>
                    <EThumbProdBox size="xl">
                      <div class="left-group">
                        <EBadge color="gray" size="sm" badge-text="혜택" />
                      </div>
                      <div class="right-group">
                        <EBadge color="red" size="sm" badge-text="19" />
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <BadgeGroup gap="md">
                        <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
                  <!-- // thumb-prod-flex -->
                </li>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <div class="prod-number">
                      7
                    </div>
                    <EThumbProdBox size="xl" dim="19">
                      <div class="left-group">
                        <EBadge color="gray" size="sm" badge-text="혜택" />
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <BadgeGroup gap="md">
                        <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
                  <!-- // thumb-prod-flex -->
                </li>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <div class="prod-number">
                      8
                    </div>
                    <EThumbProdBox size="xl">
                      <div class="left-group">
                        <EBadge color="gray" size="sm" badge-text="혜택" />
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <BadgeGroup gap="md">
                        <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
                  <!-- // thumb-prod-flex -->
                </li>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <div class="prod-number">
                      9
                    </div>
                    <EThumbProdBox size="xl">
                      <div class="left-group">
                        <EBadge color="gray" size="sm" badge-text="혜택" />
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <BadgeGroup gap="md">
                        <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
                  <!-- // thumb-prod-flex -->
                </li>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <div class="prod-number">
                      10
                    </div>
                    <EThumbProdBox size="xl">
                      <div class="left-group">
                        <EBadge color="gray" size="sm" badge-text="혜택" />
                      </div>
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <BadgeGroup gap="md">
                        <EBadge color="light-green" size="sm" badge-text="당일픽업" />
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
                  <!-- // thumb-prod-flex -->
                </li>
              </RowListWrap>
            </swiper-slide>
            <!-- // slide -->
          </SwiperAutoWrap>
        </ContBox>
      </ContWrap>
      <!-- // main - Best -->

      <div class="cont-floating-wrapper">
        <BtnWrap type="full">
          <!-- floating-marketing-box -->
          <div class="floating-marketing-box">
            <NuxtLink class="link-floating-marketing" to="javascript:">
              <div class="thumb-box">
                <img src="/assets/images/temp/temp_floating_marketing.png" alt="광고 배너 이미지">
              </div>
            </NuxtLink>
            <button class="btn-close" @click="($event.target as HTMLElement)?.closest('.floating-marketing-box')?.remove()">
              <EIco name="close" color="gray" size="xs" />
            </button>
          </div>
          <!-- // floating-marketing-box -->
          <!-- floating-marketing-box -->
          <div class="floating-marketing-box">
            <NuxtLink class="link-floating-marketing" to="javascript:">
              <div class="thumb-box">
                <img src="/assets/images/temp/temp_floating_marketing.png" alt="광고 배너 이미지">
              </div>
            </NuxtLink>
            <button class="btn-close" @click="($event.target as HTMLElement)?.closest('.floating-marketing-box')?.remove()">
              <EIco name="close" color="gray" size="xs" />
            </button>
          </div>
          <!-- // floating-marketing-box -->
        </BtnWrap>
      </div>
    </div>

    <template #footer>
      <LayoutFooter @open-popup="handleOpenPopup" />
    </template>
  </NuxtLayout>

  <!-- pop : 이용약관 팝업 -->
  <PopCommTermsOfUse v-model:sta="popTermsOfUse" :active-tab="termOfUseType" />
  <!-- // pop : 이용약관 팝업 -->

  <!-- pop : 위치기반 서비스 이용약관 팝업 -->
  <PopCommTermsOfLocation v-model:sta="popTermsOfLocation" />
  <!-- // pop : 위치기반 서비스 이용약관 팝업 -->

  <!-- pop : 영상정보처리기기 운영/관리 방침 팝업 -->
  <PopCommPolicyOfcctv v-model:sta="popPolicyOfcctv" />
  <!-- // pop : 영상정보처리기기 운영/관리 방침 팝업 -->

  <!-- pop : (메인) 전체보기 팝업 -->
  <PopMainBannerCollection v-model:sta="popBannerCollection" />
  <!-- // pop : (메인) 전체보기 팝업 -->
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
const { $showToast } = useNuxtApp();

// (메인) 전체보기
const popBannerCollection = ref({ open: false });

// 푸터 팝업
const popTermsOfUse = ref({ open: false });
const popTermsOfLocation = ref({ open: false });
const popPolicyOfcctv = ref({ open: false });
const termOfUseType = ref<string>();

function OpenAlarm(popupName: string) {

}

function handleOpenPopup(popupName: string) {
  switch (popupName) {
    // 이용약관 open
    case "termsService":
      termOfUseType.value = "service";
      popTermsOfUse.value.open = true;
      break;
    // 개인정보 처리방침 open
    case "termsPrivacy":
      termOfUseType.value = "privacy";
      popTermsOfUse.value.open = true;
      break;
    // 위치기반 서비스 이용약관 open
    case "termsOfLocation":
      popTermsOfLocation.value.open = true;
      break;
    // 영상정보처리기기 운영/관리 방침 open
    case "policyOfcctv":
      popPolicyOfcctv.value.open = true;
      break;
  }
}

onMounted(() => {
  // 토스트 팝업 open
  $showToast({
    msg: "<a class='link-toast' href='/keep/home/pickup'>오늘 오후 8시 30분에 픽업 예정이에요.</a>"
    , isClose: true
  });
});
</script>

<style lang="scss" scoped>
@import url('@/assets/css/pages/main.scss');
</style>
