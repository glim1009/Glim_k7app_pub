<template>
  <ContWrap in-top="zero" type="white">
    <ContBox>
      <div class="thumb-store-detail">
        <div class="thumb-box">
          <img src="/assets/images/temp/temp_store_detail.png" alt="매장 상세 브랜드 이미지">
        </div>
      </div>
    </ContBox>
    <ContBox>
      <CtitleWrap size="sm">
        <FlexGroup>
          <div class="flex-left">
            <ETit text="롯데백화점 잠실점 캐슬플라자" type="prod-detail" />
          </div>
          <div class="flex-right">
            <div class="flex-right">
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-bookmark">
                <EIco name="bookmark">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <button type="button" class="btn-share">
                <EIco name="share">
                  <span class="offscreen">공유</span>
                </EIco>
              </button>
            </div>
          </div>
        </FlexGroup>
      </CtitleWrap>
      <div class="bar-group">
        <div class="bar-text">
          1.5M
        </div>
        <div class="bar-text">
          <div class="rating">
            <EIco name="rating" color="green" size="xs">
              <span class="offscreen">별점</span>
            </EIco>
            <span class="score-md">4.0</span>
          </div>
        </div>
        <div class="bar-text">
          <ETBtn tag="a" size="xs" to="/store/review">
            <div class="text">
              13개 리뷰
            </div>
            <EIco name="arw-right" color="gray" size="xs" />
          </ETBtn>
        </div>
      </div>
      <TableWrap type="info" gap="lg" size="md" table-name="매장 상세 정보" class="scont-top-md">
        <colgroup>
          <col style="width: 70px;">
          <col style="width: auto;">
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">
              주소
            </th>
            <td>
              서울특별시 종로구 12길 (관철동, 종로코아 빌딩)
              <div class="scont-top-2xs">
                <ETBtn tag="a" size="xs" to="/store/search">
                  <span class="text">매장위치</span><EIco name="arw-right" color="gray" size="xs" />
                </ETBtn>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">
              전화번호
            </th>
            <td>
              <ETBtn tag="a" size="xs" type="underline" to="tel:1688-1211">
                <span class="text fw-rgl">02-1234-0000</span>
              </ETBtn>
            </td>
          </tr>
          <tr>
            <th scope="row">
              영업시간
            </th>
            <td>24시간</td>
          </tr>
          <tr>
            <th scope="row">
              제공 서비스
            </th>
            <td>
              <BadgeGroup>
                <EBadge color="light-gray" badge-text="24시간" />
                <EBadge color="light-gray" badge-text="사전예약" />
                <EBadge color="light-gray" badge-text="의약품" />
                <EBadge color="light-gray" badge-text="착한택배" />
                <EBadge color="light-gray" badge-text="무인매장 시그니처" />
                <EBadge color="light-gray" badge-text="치킨" />
                <EBadge color="light-gray" badge-text="ATM" />
              </BadgeGroup>
            </td>
          </tr>
        </tbody>
      </TableWrap>
    </ContBox>
  </ContWrap>
  <TabWrap fir-active="todayPickup">
    <template #tabs="{ activeTab, setActiveTab }">
      <SwiperAutoWrap type="line">
        <swiper-slide class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'todayPickup' }"
            @click="setActiveTab('todayPickup')"
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
      </SwiperAutoWrap>
    </template>
    <template #default="{ activeTab }">
      <ContWrap v-if="activeTab === 'todayPickup'" type="white">
        <ContBox>
          <GridListWrap gap="prod">
            <li class="item-grid">
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <EThumbProdBox>
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
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
          <BtnWrap type="full" size="lg">
            <EBtn tag="a" color="line-light-gray" to="javascript:">
              <span class="text">상품 더보기</span>
              <EIco name="arw-right" color="gray" size="sm" />
            </EBtn>
          </BtnWrap>
        </ContBox>
      </ContWrap>
      <ContWrap v-if="activeTab === 'reservation'" type="white">
        <ContBox>
          <GridListWrap gap="prod">
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
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
          <BtnWrap type="full" size="lg">
            <EBtn tag="a" color="line-light-gray" to="javascript:">
              <span class="text">상품 더보기</span>
              <EIco name="arw-right" color="gray" size="sm" />
            </EBtn>
          </BtnWrap>
        </ContBox>
      </ContWrap>
      <ContWrap v-if="activeTab === 'giftCard'" type="white">
        <ContBox>
          <GridListWrap gap="prod">
            <li class="item-grid">
              <!-- thumb-prod -->
              <div class="thumb-prod">
                <EThumbProdBox>
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
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
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
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
          <BtnWrap type="full" size="lg">
            <EBtn tag="a" color="line-light-gray" to="javascript:">
              <span class="text">상품 더보기</span>
              <EIco name="arw-right" color="gray" size="sm" />
            </EBtn>
          </BtnWrap>
        </ContBox>
      </ContWrap>
    </template>
  </TabWrap>
  <ContWrap>
    <ContBox>
      <!-- 택배 배너 노출 case 01 : 일반/착한 배너 노출되는 경우 -->
      <CtitleWrap size="sm">
        <ETit text="택배 서비스" type="lgCont" />
      </CtitleWrap>
      <GridListWrap col="2">
        <li class="item-grid">
          <ColorBox color="white" size="lg" class="bg-normal-delivery">
            <CtitleWrap size="zero">
              <ETit text="일반택배" type="lgCont" />
              <div class="stext-gray70">
                전국 어디서든<br>안전하게
              </div>
            </CtitleWrap>
          </ColorBox>
          <NuxtLink class="btn-link" to="/delivery/reservation/normal">
            <span class="offscreen">일반택배 예약 바로가기</span>
          </NuxtLink>
        </li>
        <li class="item-grid">
          <ColorBox color="white" size="lg" class="bg-kind-delivery">
            <CtitleWrap size="zero">
              <ETit text="착한택배" type="lgCont" />
              <div class="stext-gray70">
                편의점에서 편의점으로<br>알뜰하게
              </div>
            </CtitleWrap>
          </ColorBox>
          <NuxtLink class="btn-link" to="/delivery/reservation/Kind">
            <span class="offscreen">착한택배 예약 바로가기</span>
          </NuxtLink>
        </li>
      </GridListWrap>
      <!-- // 택배 배너 노출 case 01 : 일반/착한 배너 노출되는 경우 -->
      <!-- 택배 매너 노출 case 02 : 일반 배너 노출되는 경우 -->
      <!-- <ColorBox color="white" size="lg" class="bg-normal-delivery">
        <CtitleWrap size="zero">
          <ETit text="일반택배" type="lgCont" />
          <div class="stext-gray70">
            전국 어디서든 안전하게
          </div>
        </CtitleWrap>
        <NuxtLink class="btn-link" to="/delivery/reservation/normal">
          <span class="offscreen">일반택배 예약 바로가기</span>
        </NuxtLink>
      </ColorBox> -->
      <!-- // 택배 매너 노출 case 02 : 일반 배너 노출되는 경우 -->
      <!-- 택배 매너 노출 case 03 : 일반/착한 배너 노출되는 경우 -->
      <!-- <ColorBox color="white" size="lg" class="bg-kind-delivery">
        <CtitleWrap size="zero">
          <ETit text="착한택배" type="lgCont" />
          <div class="stext-gray70">
            편의점에서 편의점으로 알뜰하게
          </div>
        </CtitleWrap>
        <NuxtLink class="btn-link" to="/delivery/reservation/Kind">
            <span class="offscreen">착한택배 예약 바로가기</span>
          </NuxtLink>
      </ColorBox> -->
      <!-- // 택배 매너 노출 case 03 : 일반/착한 배너 노출되는 경우 -->
    </ContBox>
  </ContWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: "매장상세",
  hideRightHeader: ["home"],
});
</script>

<style lang="scss" scoped>
@import url('/assets/css/pages/store.scss');
</style>
