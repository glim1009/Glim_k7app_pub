<template>
  <TabWrap v-if="isDataProd" fir-active="allProd">
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
      <ContWrap type="white">
        <ContBox v-if="isDataProd">
          <div class="list-header">
            <FlexGroup>
              <div class="flex-left">
                <div class="goods-group">
                  <EGoods val="8" unit="건" />
                </div>
              </div>
              <div class="flex-right">
                <span class="ui-chk">
                  <input id="soldOutChk" type="checkbox" />
                  <label for="soldOutChk"><span class="text-md">품절제외</span></label>
                </span>
                <EBtn size="xs" color="line-light-gray">
                  <EIco name="delete" color="gray" size="xs" />
                  <span class="text">전체삭제</span>
                </EBtn>
              </div>
            </FlexGroup>
          </div>
          <!-- 찜한 상품이 있는 경우 -->
          <GridListWrap v-if="isDataProd && !isNoDataSoldOut && activeTab === 'allProd'" gap="prod">
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
                  <button type="button" class="btn-wish is-active">
                    <EIco name="wish" size="sm">
                      <span class="offscreen">관심 등록</span>
                    </EIco>
                  </button>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
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
                  <div class="stock">
                    <EGoods size="sm" val="N" unit="개" /> 남음
                  </div>
                  <div class="rating">
                    <EIco name="rating" color="gray50" size="xs">
                      <span class="offscreen">별점</span>
                    </EIco>
                    <span class="score-sm">4.0 (10)</span>
                  </div>
                  <BtnWrap type="auto">
                    <EBtn color="line-light-gray" size="xs">
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
                <EThumbProdBox dim="SOLD OUT">
                  <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                  <button type="button" class="btn-wish is-active">
                    <EIco name="wish" size="sm">
                      <span class="offscreen">관심 등록</span>
                    </EIco>
                  </button>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
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
                  <div class="stock">
                    <EGoods size="sm" val="N" unit="개" /> 남음
                  </div>
                  <div class="rating">
                    <EIco name="rating" color="gray50" size="xs">
                      <span class="offscreen">별점</span>
                    </EIco>
                    <span class="score-sm">4.0 (10)</span>
                  </div>
                  <BtnWrap type="auto">
                    <EBtn color="line-light-gray" size="xs">
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
                  <button type="button" class="btn-wish is-active">
                    <EIco name="wish" size="sm">
                      <span class="offscreen">관심 등록</span>
                    </EIco>
                  </button>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
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
                  <div class="stock">
                    <EGoods size="sm" val="N" unit="개" /> 남음
                  </div>
                  <div class="rating">
                    <EIco name="rating" color="gray50" size="xs">
                      <span class="offscreen">별점</span>
                    </EIco>
                    <span class="score-sm">4.0 (10)</span>
                  </div>
                  <BtnWrap type="auto">
                    <EBtn color="line-light-gray" size="xs">
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
                  <button type="button" class="btn-wish is-active">
                    <EIco name="wish" size="sm">
                      <span class="offscreen">관심 등록</span>
                    </EIco>
                  </button>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
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
                  <div class="stock">
                    <EGoods size="sm" val="N" unit="개" /> 남음
                  </div>
                  <div class="rating">
                    <EIco name="rating" color="gray50" size="xs">
                      <span class="offscreen">별점</span>
                    </EIco>
                    <span class="score-sm">4.0 (10)</span>
                  </div>
                  <BtnWrap type="auto">
                    <EBtn color="line-light-gray" size="xs">
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
                  <button type="button" class="btn-wish is-active">
                    <EIco name="wish" size="sm">
                      <span class="offscreen">관심 등록</span>
                    </EIco>
                  </button>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
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
                  <div class="stock">
                    <EGoods size="sm" val="N" unit="개" /> 남음
                  </div>
                  <div class="rating">
                    <EIco name="rating" color="gray50" size="xs">
                      <span class="offscreen">별점</span>
                    </EIco>
                    <span class="score-sm">4.0 (10)</span>
                  </div>
                  <BtnWrap type="auto">
                    <EBtn color="line-light-gray" size="xs">
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
                  <button type="button" class="btn-wish is-active">
                    <EIco name="wish" size="sm">
                      <span class="offscreen">관심 등록</span>
                    </EIco>
                  </button>
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
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
                  <div class="stock">
                    <EGoods size="sm" val="N" unit="개" /> 남음
                  </div>
                  <div class="rating">
                    <EIco name="rating" color="gray50" size="xs">
                      <span class="offscreen">별점</span>
                    </EIco>
                    <span class="score-sm">4.0 (10)</span>
                  </div>
                  <BtnWrap type="auto">
                    <EBtn color="line-light-gray" size="xs">
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
          <GridListWrap v-if="isDataProd && !isNoDataSoldOut && activeTab === 'pickUp'" gap="prod">
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
                  <button type="button" class="btn-wish is-active">
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
                    <EBtn color="line-light-gray" size="xs">
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
                  <button type="button" class="btn-wish is-active">
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
                  <button type="button" class="btn-wish is-active">
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
                  <button type="button" class="btn-wish is-active">
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
          <GridListWrap v-if="isDataProd && !isNoDataSoldOut && activeTab === 'reservation'" gap="prod">
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
                  <button type="button" class="btn-wish is-active">
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
                  <button type="button" class="btn-wish is-active">
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
                  <button type="button" class="btn-wish is-active">
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
                  <button type="button" class="btn-wish is-active">
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
          <GridListWrap v-if="isDataProd && !isNoDataSoldOut && activeTab === 'giftCard'" gap="prod">
            <li class="item-grid">
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <EThumbProdBox dim="SOLD OUT">
                  <div class="left-group">
                    <EBadge color="gray" size="sm" badge-text="혜택" />
                  </div>
                  <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                  <button type="button" class="btn-wish is-active">
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
                  <button type="button" class="btn-wish is-active">
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
                  <button type="button" class="btn-wish is-active">
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
                  <button type="button" class="btn-wish is-active">
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
          <GridListWrap v-if="isDataProd && !isNoDataSoldOut && activeTab === 'discount'" gap="prod">
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
                  <button type="button" class="btn-wish is-active">
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
                  <button type="button" class="btn-wish is-active">
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
                  <div class="stock">
                    <EGoods size="sm" val="N" unit="개" /> 남음
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
                  <button type="button" class="btn-wish is-active">
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
                  <button type="button" class="btn-wish is-active">
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
          <GridListWrap v-if="isDataProd && !isNoDataSoldOut && activeTab === 'voucher'" gap="prod">
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
                  <button type="button" class="btn-wish is-active">
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
                  <button type="button" class="btn-wish is-active">
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
                  <button type="button" class="btn-wish is-active">
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
                  <button type="button" class="btn-wish is-active">
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
          <!-- // 찜한 상품이 있는 경우 -->
          <!-- 품절제외 상품이 없는 경우 -->
          <InfoGuideWrap
            v-if="isDataProd && isNoDataSoldOut"
            type="no-data"
            name="wish"
            desc="찜한 상품이 없습니다."
          />
          <!-- // 품절제외 상품이 없는 경우 -->
        </ContBox>
        <!-- 찜한 상품이 없는 경우 -->
        <InfoGuideWrap
          v-if="isNoDataProd"
          type="no-data"
          name="wish"
          desc="찜한 상품이 없습니다."
        />
        <!-- // 찜한 상품이 없는 경우 -->
      </ContWrap>
    </template>
  </TabWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: '찜',
  hideRightHeader: ['home'],
});

const isDataProd = ref(true); // 임시 : 상품 목록 컨텐츠 확인을 위해 추가
const isNoDataProd = ref(true); // 임시 : 상품 목록 없음 컨텐츠 확인을 위해 추가
const isNoDataSoldOut = ref(false); // 임시 : 품절 제외 상품 없음 컨텐츠 확인을 위해 추가

</script>

<style lang="scss" scoped>

</style>

