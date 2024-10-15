<template>
  <div class="prod-detail-wrap">
    <ContWrap in-top="zero" type="white" class="prod-detail-header">
      <ContBox size="sm">
        <button type="button" class="btn-store" @click="openStoreSearchSelect(false)">
          <EBadge color="green" size="md" badge-text="픽업매장" />
          <span class="store">세븐일레븐 강남점</span>
          <EIco name="arw-right" color="gray" size="sm" />
        </button>
      </ContBox>
      <ContBox size="sm">
        <SwiperBannerWrap pagination="bullets" type="prod">
          <swiper-slide>
            <EThumbProdBox>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
          </swiper-slide>
          <swiper-slide>
            <EThumbProdBox>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
          </swiper-slide>
          <swiper-slide>
            <EThumbProdBox>
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
          </swiper-slide>
        </SwiperBannerWrap>
      </ContBox>
      <ContBox size="md">
        <FlexGroup>
          <div class="flex-left">
            <BadgeGroup>
              <EBadge color="gray" badge-text="할인" />
              <EBadge color="gray" badge-text="1+1" />
              <EBadge color="gray" badge-text="증정" />
            </BadgeGroup>
          </div>
          <div class="flex-right">
            <BtnWrap>
              <!-- DESC :: 활성화시 is-active 클래스 추가 -->
              <button type="button" class="btn-wish">
                <EIco name="wish" color="gray40">
                  <span class="offscreen">관심 등록</span>
                </EIco>
              </button>
              <button type="button" class="btn-share" @click="openSnsShare">
                <EIco name="share">
                  <span class="offscreen">공유</span>
                </EIco>
              </button>
            </BtnWrap>
          </div>
        </FlexGroup>
        <CtitleWrap size="sm">
          <ETit text="크랜베리 리코타 치즈 샌드위치 크랜베리 리코타 치즈 샌드위치" type="prod-detail" />
        </CtitleWrap>
        <div class="goods-group">
          <EGoods type="origin" val="5,900" unit="원" />
          <EGoods type="percent" val="10" unit="%" />
          <EGoods val="155,310" unit="원" />
        </div>
        <div class="bar-group">
          <div class="bar-item">
            <div class="rating">
              <EIco name="rating" color="green" size="xs">
                <span class="offscreen">별점</span>
              </EIco>
              <span class="score-md">4.0</span>
            </div>
          </div>
          <div class="bar-item">
            <ETBtn tag="a" size="xs" to="/product/review/review-photo">
              <div class="text">
                13개 리뷰
              </div>
              <EIco name="arw-right" color="gray" size="xs" />
            </ETBtn>
          </div>
        </div>
        <BadgeGroup>
          <EBadge color="light-gray" badge-text="NEW" />
          <EBadge color="light-gray" badge-text="BEST" />
          <EBadge color="light-gray" badge-text="앱전용" />
        </BadgeGroup>
      </ContBox>
    </ContWrap>
    <ContWrap type="divider" in-top="lg">
      <ContBox deco="t-line">
        <TableWrap type="info" gap="lg" size="lg" table-name="당일픽업 정보">
          <colgroup>
            <col style="width: 96px;">
            <col style="width: auto;">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">
                매장재고
              </th>
              <td>
                <span class="fc-spot">3개 남음</span>
                <br><span class="stext-gray70">주문 시점에 따라 재고는 변동될 수 있습니다.</span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                구매 가능 수량
              </th>
              <td>298개 남음</td>
            </tr>
            <tr>
              <th scope="row">
                픽업 가능 시간
              </th>
              <td>1시간 뒤 부터 픽업 가능</td>
            </tr>
            <tr>
              <th scope="row">
                사용 가능 기간
              </th>
              <td>구매일 기준 31일간 사용 가능</td>
            </tr>
          </tbody>
        </TableWrap>
      </ContBox>
      <ContBox deco="t-line" gap="sm">
        <CtitleWrap size="zero">
          <div class="ctitle-sm">
            할인행사
          </div>
        </CtitleWrap>
        <ColorBox color="light-gray" size="lg">
          <p class="stext-lg-black fw-sb">
            🎁 30% 할인 판매
          </p>
        </ColorBox>
        <ColorBox color="light-gray" size="lg">
          <p class="stext-lg-black fw-sb">
            🎁 대상상품 2개 구매 시 1개의 상품 증정 (교차가능)
          </p>
          <div class="scont-top-2xs">
            <ETBtn size="xs" @click="openProdPromotion">
              <div class="text">
                행사 상품보기
              </div>
              <EIco name="arw-right" color="gray" size="xs" />
            </ETBtn>
          </div>
        </ColorBox>
        <ColorBox color="light-gray" size="lg">
          <p class="stext-lg-black fw-sb">
            🎁 30일 간, 하루 1개의 상품을 25% 할인 적용 가능
          </p>
          <div class="scont-top-2xs">
            <ETBtn size="xs" @click="openProdPromotion">
              <div class="text">
                행사 상품보기
              </div>
              <EIco name="arw-right" color="gray" size="xs" />
            </ETBtn>
          </div>
        </ColorBox>
      </ContBox>
    </ContWrap>
    <TabWrap fir-active="detailInfo" class="justify-tab">
      <template #tabs="{ activeTab, setActiveTab }">
        <ul class="tab-line-list">
          <li class="tab-item">
            <button
              type="button" class="tab-link"
              :class="{ 'is-active': activeTab === 'detailInfo' }"
              @click="setActiveTab('detailInfo')"
            >
              <span class="tab-text">상품정보</span>
            </button>
          </li>
          <li class="tab-item">
            <button
              type="button" class="tab-link"
              :class="{ 'is-active': activeTab === 'detailGuide' }"
              @click="setActiveTab('detailGuide')"
            >
              <span class="tab-text">이용안내</span>
            </button>
          </li>
          <li class="tab-item">
            <button
              type="button" class="tab-link"
              :class="{ 'is-active': activeTab === 'detailNote' }"
              @click="setActiveTab('detailNote')"
            >
              <span class="tab-text">유의사항</span>
            </button>
          </li>
          <li class="tab-item">
            <button
              type="button" class="tab-link"
              :class="{ 'is-active': activeTab === 'detailCs' }"
              @click="setActiveTab('detailCs')"
            >
              <span class="tab-text">고객센터</span>
            </button>
          </li>
        </ul>
      </template>
      <template #default="{ activeTab }">
        <!-- 상품정보 -->
        <ContWrap v-if="activeTab === 'detailInfo'" type="white" in-top="zero">
          <ContBox>
            <FoldOverflowBox min-height="844" class="prod-detail-info-wrap">
              <div class="editor-wrap">
                <!-- 개발 시 삭제 영역 -->
                <div style="height: 100%; background: rgba(255, 0, 0, .1);">
                  상품 정보 영역 확인을 위한 임시 div입니다.
                  <br>개발시 해당 div 삭제 후 작업해 주세요.
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </div>
                <!-- // 개발 시 삭제 영역 -->
              </div>
            </FoldOverflowBox>
          </ContBox>
        </ContWrap>
        <!-- // 상품정보 -->
        <!-- 이용안내 -->
        <ContWrap v-if="activeTab === 'detailGuide'" type="white">
          <ContBox>
            <!-- 개발 시 삭제 영역 -->
            <div style="height: 100px; background: rgba(255, 0, 0, .1);">
              에디터영역 확인을 위한 임시 div입니다.
              <br>개발시 해당 div 삭제 후 작업해 주세요.
            </div>
            <!-- // 개발 시 삭제 영역 -->
          </ContBox>
        </ContWrap>
        <!-- // 이용안내 -->
        <!-- 유의사항 -->
        <ContWrap v-if="activeTab === 'detailNote'" type="white">
          <ContBox>
            <!-- 개발 시 삭제 영역 -->
            <div style="height: 100px; background: rgba(255, 0, 0, .1);">
              에디터영역 확인을 위한 임시 div입니다.
              <br>개발시 해당 div 삭제 후 작업해 주세요.
            </div>
            <!-- // 개발 시 삭제 영역 -->
          </ContBox>
        </ContWrap>
        <!-- // 유의사항 -->
        <!-- 고객센터 -->
        <ContWrap v-if="activeTab === 'detailCs'">
          <ContBox>
            <CtitleWrap size="md">
              <ETit type="lgCont">
                고객센터 안내
              </ETit>
            </CtitleWrap>
            <ColorBox color="white" size="lg">
              <SContLineBox>
                <CtitleWrap size="zero">
                  <div class="ctitle-sm">
                    <ETBtn tag="a" size="md" to="tel:1577-0711">
                      <span class="text fc-black fw-sb">콜센터 1577-0711</span>
                    </ETBtn>
                  </div>
                  <div class="stext">
                    APP 이용 및 매장관련문의
                    <br>09:00~18:00 주말 및 공휴일 제외
                  </div>
                </CtitleWrap>
              </SContLineBox>
              <SContLineBox>
                <CtitleWrap size="zero">
                  <div class="ctitle-sm">
                    <ETBtn tag="a" size="md" to="tel:1522-2552">
                      <span class="text fc-black fw-sb">쿠폰사용 관련 문의 1522-2552</span>
                    </ETBtn>
                  </div>
                  <div class="stext">
                    롯데쇼핑 e커머스 고객센터
                    <br>10:00~20:00 주말 및 공휴일 제외
                  </div>
                </CtitleWrap>
              </SContLineBox>
            </ColorBox>
          </ContBox>
        </ContWrap>
        <!-- // 고객센터 -->
      </template>
    </TabWrap>
    <ContWrap type="divider" in-top="lg">
      <ContBox size="md">
        <FoldToggleBox type="scont" cont-color="light-gray" color="line-light-gray">
          <template #header>
            <CtitleWrap size="zero">
              <ETit text="상품정보제공고시" type="sFold" />
            </CtitleWrap>
          </template>
          <template #content>
            <!-- 개발 시 삭제 영역 -->
            <div style="height: 100%; background: rgba(255, 0, 0, .1);">
              상품 정보고시 이미지/표
              <br>노출 영역 확인을 위한 임시 div입니다.
              <br>개발시 해당 div 삭제 후 작업해 주세요.
            </div>
            <!-- // 개발 시 삭제 영역 -->
          </template>
        </FoldToggleBox>
      </ContBox>
      <ContBox size="md">
        <CtitleWrap size="md">
          <ETit type="lgCont">
            이 상품과 함께 많이 본 상품
          </ETit>
        </CtitleWrap>
        <SwiperAutoWrap gap="10" class="side-zero">
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
              <EThumbProdBox size="2xl" dim="SOLD OUT">
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
        </SwiperAutoWrap>
      </ContBox>
    </ContWrap>

    <!-- 선물하기 버튼 노출 -->
    <ContDocker v-if="isPresent">
      <BtnWrap type="flex" class="prod-detail">
        <EBtn color="line-gray" size="lg" @click="openGiftInput">
          <EIco name="present" />
          <span class="offscreen">선물하기</span>
        </EBtn>
        <div class="btn-prod-wrap">
          <!-- CTA CASE 01 : 사전예약(주석처리), 교환권, 금액권, 정기구독 상품 -->
          <EBtn color="green" size="lg" @click="openProdOption">
            <span class="text">장바구니</span>
          </EBtn>
          <!--<EBtn color="green" size="lg" @click="openAddPickupInfo">
            <span class="text">장바구니</span>
          </EBtn>-->
          <EBtn color="green" size="lg" @click="openAddPickupInfo">
            <span class="text">바로구매</span>
          </EBtn>
          <!--<EBtn color="green" size="lg" @click="openAddPickupInfo">
            <span class="text">바로구매</span>
          </EBtn>-->
          <!-- // CTA CASE 01 : 사전예약(주석처리), 교환권, 금액권, 정기구독 상품 -->
          <!-- CTA CASE 02 : 정기구독 상품(바로구매 선택 후) -->
          <!-- <EBtn tag="a" color="green" size="lg" to="javascript:">
            <span class="text">정기구독</span>
          </EBtn>
          <EBtn tag="a" color="green" size="lg" to="javascript:">
            <span class="text">1회 구독</span>
          </EBtn> -->
          <!-- // CTA CASE 02 : 정기구독 상품(바로구매 선택 후) -->
        </div>
      </BtnWrap>
    </ContDocker>
    <!-- // 선물하기 버튼 노출 -->

    <!-- 선물하기 버튼 미노출 -->
    <ContDocker v-if="!isPresent">
      <div class="btn-prod-wrap">
        <!-- CTA CASE 01 : 당일픽업 상품 -->
        <EBtn color="green" size="lg" @click="openProdOption">
          <span class="text">장바구니</span>
        </EBtn>
        <!-- DESC :: 당일픽업 정보 입력 시 [바로구매] 버튼 미노출 -->
        <EBtn color="green" size="lg" @click="openAddPickupInfo">
          <span class="text">바로구매</span>
        </EBtn>
        <!-- // CTA CASE 01 : 당일픽업 상품 -->
        <!-- CTA CASE 02 : 당일픽업 상품(품절) -->
        <EBtn tag="a" color="green" size="lg" to="/store/search">
          <span class="text">주변매장 재고찾기</span>
        </EBtn>
        <!-- // CTA CASE 02 : 당일픽업 상품(품절) -->
        <!-- CTA CASE 03 : 구독중인 상품, 상품 준비중, 판매종료, 품절(교환권, 구독할인, 금액권) -->
        <div class="cta-info-box">
          <div class="text">
            08월 23일(금) 00:00 구매 가능
          </div>
          <div class="text">
            구독중인 상품입니다
          </div>
          <div class="text">
            준비 중입니다
          </div>
          <div class="text">
            판매 종료
          </div>
          <div class="text">
            품절
          </div>
        </div>
        <!-- // CTA CASE 03 : 구독중인 상품, 상품 준비중, 판매종료, 품절(교환권, 구독할인, 금액권) -->
      </div>
    </ContDocker>
    <!-- // 선물하기 버튼 미노출 -->
  </div>

  <!-- pop : 수량옵션 팝업 -->
  <PopProdOption v-model:sta="popProdOption" is-cta>
    <template #cta>
      <!-- 수량옵션 핍업 CTA -->
      <ContDocker class="docker-opt-wrap">
        <CtitleWrap size="md">
          <FlexGroup>
            <div class="flex-left">
              <ETit type="cont">
                총 <EGoods val="3" unit="개" />의 상품 금액
              </ETit>
            </div>
            <div class="flex-right">
              <EGoods size="xl" val="39,200" unit="원" class="fc-spot" />
            </div>
          </FlexGroup>
        </CtitleWrap>
        <div class="btn-prod-wrap">
          <EBtn color="green" size="lg" @click="closeProdOption">
            <span class="text">장바구니</span>
          </EBtn>
          <EBtn tag="a" color="green" size="lg" to="javascript:">
            <span class="text">바로구매</span>
          </EBtn>
        </div>
      </ContDocker>
      <!-- // 수량옵션 핍업 CTA -->
    </template>
  </PopProdOption>
  <!-- // pop : 수량옵션 팝업 -->

  <!-- pop : 행사적용상품 팝업 -->
  <PopProdPromotion v-model:sta="popProdPromotion" />
  <!-- // pop : 행사적용상품 팝업 -->

  <!-- pop : 구매시유의사항 팝업 -->
  <PopProdPurchaseCaution v-model:sta="popPurchaseCaution" />
  <!-- // pop : 구매시유의사항 팝업 -->

  <!-- pop : 픽업정보입력 팝업 -->
  <PopCommAddPickupInfo v-model:sta="popAddPickupInfo" is-cta>
    <template #cta>
      <!-- 픽업정보입력 팝업 CTA -->
      <ContDocker class="docker-opt-wrap">
        <CtitleWrap size="md">
          <FlexGroup>
            <div class="flex-left">
              <ETit type="cont">
                총 <EGoods val="3" unit="개" />의 상품 금액
              </ETit>
            </div>
            <div class="flex-right">
              <EGoods size="xl" val="39,200" unit="원" class="fc-spot" />
            </div>
          </FlexGroup>
        </CtitleWrap>
        <div class="btn-prod-wrap">
          <!-- CTA CASE 01 : 당일픽업 상품 -->
          <!-- <EBtn color="green" size="lg" @click="[closeAddPickupInfo(), openPurchaseCaution()]">
            <span class="text">바로구매</span>
          </EBtn> -->
          <!-- CTA CASE 01 : 당일픽업 상품 -->
          <!-- CTA CASE 02 : 사전예약 상품 -->
          <EBtn color="green" size="lg" @click="closeAddPickupInfo">
            <span class="text">장바구니</span>
          </EBtn>
          <EBtn color="green" size="lg" @click="[closeAddPickupInfo(), openPurchaseCaution()]">
            <span class="text">바로구매</span>
          </EBtn>
          <!-- CTA CASE 02 : 사전예약 상품 -->
        </div>
      </ContDocker>
      <!-- // 픽업정보입력 팝업 CTA -->
    </template>
  </PopCommAddPickupInfo>
  <!-- // pop : 픽업정보입력 팝업 -->

  <!-- pop : (공통) 선물하기 팝업 -->
  <PopCommGiftInput v-model:sta="popGiftInput" is-cta is-free-gift>
    <template #cta>
      <!-- 선물하기 팝업 CTA -->
      <ContDocker class="docker-opt-wrap">
        <CtitleWrap size="md">
          <FlexGroup>
            <div class="flex-left">
              <ETit type="cont">
                총 <EGoods val="3" unit="개" />의 상품 금액
              </ETit>
            </div>
            <div class="flex-right">
              <EGoods size="xl" val="39,200" unit="원" class="fc-spot" />
            </div>
          </FlexGroup>
        </CtitleWrap>
        <div class="btn-prod-wrap">
          <EBtn tag="a" color="green" size="lg" to="javascript:">
            <span class="text">선물하기</span>
          </EBtn>
        </div>
      </ContDocker>
      <!-- // 선물하기 팝업 CTA -->
    </template>
  </PopCommGiftInput>
  <!-- // pop : (공통) 선물하기 팝업 -->

  <!-- pop : 정기구독안내 팝업 -->
  <PopProdSubscribeInfo v-model:sta="popSubscribeInfo" />
  <!-- // pop : 정기구독안내 팝업 -->

  <!-- pop : SNS 공유 -->
  <popCommSnsShare v-model:sta="popSnsShare" />
  <!-- // pop : SNS 공유 -->

  <!-- pop : 매장 선택 -->
  <PopStoreSearchSelect :is-search-data="popSearchType" v-model:sta="popStoreSearchSelect" />
  <!-- // pop : 매장 선택 -->
</template>

<script setup lang="ts">
definePageMeta({
  hideRightHeader: ["chat"],
});

const route = useRoute();
if (route.params.slug[1])
  showError({ statusCode: 404 });

const isPresent = ref(true);

// 수량옵션 팝업
const popProdOption = ref({ open: false });
const openProdOption = () => popProdOption.value.open = true;
const closeProdOption = () => popProdOption.value.open = false;

// 행사적용상품 팝업
const popProdPromotion = ref({ open: false });
const openProdPromotion = () => popProdPromotion.value.open = true;
const closeProdPromotion = () => popProdPromotion.value.open = false;

// 구매시유의사항 팝업
const popPurchaseCaution = ref({ open: false });
const openPurchaseCaution = () => popPurchaseCaution.value.open = true;
const closePurchaseCaution = () => popPurchaseCaution.value.open = false;

// 픽업정보입력 팝업
const popAddPickupInfo = ref({ open: false });
const openAddPickupInfo = () => popAddPickupInfo.value.open = true;
const closeAddPickupInfo = () => popAddPickupInfo.value.open = false;

// 선물하기 팝업
const popGiftInput = ref({ open: false });
const openGiftInput = () => popGiftInput.value.open = true;
const closeGiftInput = () => popGiftInput.value.open = false;

// 정기구독안내 팝업
const popSubscribeInfo = ref({ open: false });
const openSubscribeInfo = () => popSubscribeInfo.value.open = true;
const closeSubscribeInfo = () => popSubscribeInfo.value.open = false;

// 공유하기 팝업
const popSnsShare = ref({ open: false });
const openSnsShare = () => popSnsShare.value.open = true;

// 매장선택
const popStoreSearchSelect = ref({ open: false });

// 임시 - 매장 검색결과 팝업 확인을 위한 이벤트 추가 ( 개발시 삭제 요청 )
const popSearchType = ref<boolean>();

const openStoreSearchSelect = (isSearchData: boolean) => {
  popSearchType.value = isSearchData; // 임시 - 매장 검색결과 팝업 확인을 위한 이벤트 추가 ( 개발시 삭제 요청 )
  popStoreSearchSelect.value.open = true;
};
</script>

<style lang="scss" scoped>
@import url('/assets/css/pages/prodDetail.scss');
</style>
