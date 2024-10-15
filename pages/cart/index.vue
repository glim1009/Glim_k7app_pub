<template>
  <!-- 데이터가 있는 경우 -->
  <ContWrap v-if="isData" type="white">
    <ContBox>
      <button type="button" class="btn-store" @click="openStoreSearchSelect(false)">
        <EBadge color="green" size="md" badge-text="픽업매장" />
        <span class="store">세븐일레븐 강남점</span>
        <EIco name="arw-right" color="gray" size="sm" />
      </button>
    </ContBox>
    <ContBox>
      <FlexGroup align="start">
        <div class="flex-left">
          <CtitleWrap size="zero">
            <ETit text="추천매장 스마트 매칭" type="form" />
            <div class="stext">
              재고가 있는 가까운 매장을 추천해드릴까요?
            </div>
          </CtitleWrap>
        </div>
        <div class="flex-right">
          <span class="ui-toggle">
            <input id="recommendToggle01" type="checkbox">
            <label for="recommendToggle01" />
          </span>
        </div>
      </FlexGroup>
    </ContBox>
    <ContBox size="sm" deco="t-line">
      <div class="form-field">
        <div class="form-title">
          <FlexGroup align="center">
            <div class="flex-left">
              <ETit text="픽업시간선택" type="form" />
            </div>
            <div class="flex-right">
              <div class="pickup-today">
                오늘 2024년 7월 20일
              </div>
            </div>
          </FlexGroup>
        </div>
        <div class="form-cont">
          <div class="form-input-group">
            <FlexGroup>
              <div class="flex-left">
                <div class="ui-select">
                  <select title="픽업시간선택">
                    <option>10시</option>
                    <option>11시</option>
                    <option>12시</option>
                  </select>
                </div>
              </div>
              <div class="flex-right">
                <div class="ui-select">
                  <select title="픽업시간선택">
                    <option>20분</option>
                    <option>30분</option>
                    <option>40분</option>
                  </select>
                </div>
              </div>
            </FlexGroup>
          </div>
          <p class="dot-text-sm">
            결제 후에는 픽업시간을 변경할 수 없습니다.
          </p>
        </div>
      </div>
    </ContBox>
  </ContWrap>
  <ContWrap v-if="isData">
    <ContBox>
      <div class="list-header">
        <FlexGroup>
          <div class="flex-left">
            <span class="ui-chk">
              <input id="prdAllChk01" type="checkbox">
              <label for="prdAllChk01"><span class="text-lg">전체선택</span></label>
            </span>
          </div>
          <div class="flex-right">
            <EBtn color="line-light-gray" size="xs">
              <EIco name="delete" color="gray" size="xs" />
              <span class="text">선택삭제</span>
            </EBtn>
          </div>
        </FlexGroup>
      </div>
      <ColorBox color="white" size="lg">
        <RowListWrap gap="line">
          <!-- 일반 상품 -->
          <li class="item-thumb-prod">
            <span class="ui-chk">
              <input id="prodChk01" type="checkbox">
              <label for="prodChk01"><span class="offscreen">상품 전체선택</span></label>
            </span>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">
                  바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                </ETit>
                <div class="stock">
                  <EGoods size="sm" val="N" unit="개" /> 남음
                </div>
              </div>
              <FlexGroup align="end">
                <div class="flex-left">
                  <ESpinner />
                </div>
                <div class="flex-right">
                  <div class="goods-group">
                    <EGoods size="md" val="2,700" unit="원" />
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- // thumb-prod-flex -->
            <button type="button" class="btn-delete">
              <EIco name="close" color="gray" size="xs">
                <span class="offscreen">상품 삭제</span>
              </EIco>
            </button>
            <NuxtLink class="btn-link" to="javascript:">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </li>
          <!-- // 일반 상품 -->
          <!-- 할인 상품 -->
          <li class="item-thumb-prod">
            <span class="ui-chk">
              <input id="prodChk02" type="checkbox">
              <label for="prodChk02"><span class="offscreen">상품 선택</span></label>
            </span>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md" dim="SOLD OUT">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <BadgeGroup gap="md">
                  <EBadge color="gray" size="sm" badge-text="할인" />
                </BadgeGroup>
                <ETit type="prod">
                  바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                </ETit>
              </div>
              <FlexGroup align="end">
                <div class="flex-left">
                  <ESpinner />
                </div>
                <div class="flex-right">
                  <div class="goods-group">
                    <EGoods type="origin" size="sm" val="3,000" unit="원" />
                    <EGoods type="percent" size="md" val="10" unit="%" />
                    <EGoods size="md" val="2,700" unit="원" />
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- // thumb-prod-flex -->
            <button type="button" class="btn-delete">
              <EIco name="close" color="gray" size="xs">
                <span class="offscreen">상품 삭제</span>
              </EIco>
            </button>
            <NuxtLink class="btn-link" to="javascript:">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </li>
          <!-- // 할인 상품 -->
          <!-- N+N 증정 상품 (증정품 미선택) -->
          <li class="item-thumb-prod">
            <span class="ui-chk">
              <input id="prodChk03" type="checkbox">
              <label for="prodChk03"><span class="offscreen">상품 선택</span></label>
            </span>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <BadgeGroup gap="md">
                  <EBadge color="gray" size="sm" badge-text="2+1" />
                </BadgeGroup>
                <ETit type="prod">
                  바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                </ETit>
                <div class="stock">
                  <EGoods size="sm" val="N" unit="개" /> 남음
                </div>
              </div>
              <FlexGroup align="end">
                <div class="flex-left">
                  <ESpinner :default-value="2" />
                </div>
                <div class="flex-right">
                  <div class="goods-group">
                    <EGoods size="md" val="2,700" unit="원" />
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- // thumb-prod-flex -->
            <button type="button" class="btn-delete">
              <EIco name="close" color="gray" size="xs">
                <span class="offscreen">상품 삭제</span>
              </EIco>
            </button>
            <ColorBox color="light-gray" size="sm" class="ta-center">
              <p class="stext fw-md">
                증정품을 선택해 주세요.
              </p>
              <BtnWrap size="sm">
                <EBtn color="line-light-gray" size="sm" @click="openSelectFreeGift">
                  <span class="text">증정품 선택</span>
                </EBtn>
              </BtnWrap>
            </ColorBox>
            <NuxtLink class="btn-link" to="javascript:">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </li>
          <!-- // N+N 증정 상품 (증정품 미선택) -->
          <!-- N+N 증정 상품 (증정품 선택) -->
          <li class="item-thumb-prod">
            <span class="ui-chk">
              <input id="prodChk04" type="checkbox">
              <label for="prodChk04"><span class="offscreen">상품 선택</span></label>
            </span>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <BadgeGroup gap="md">
                  <EBadge color="gray" size="sm" badge-text="1+1" />
                </BadgeGroup>
                <ETit type="prod">
                  바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                </ETit>
                <div class="stock">
                  <EGoods size="sm" val="N" unit="개" /> 남음
                </div>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
            <button type="button" class="btn-delete">
              <EIco name="close" color="gray" size="xs">
                <span class="offscreen">상품 삭제</span>
              </EIco>
            </button>
            <ColorBox color="light-gray" size="sm">
              <!-- thumb-prod-flex -->
              <div class="thumb-prod-flex">
                <EThumbProdBox size="md">
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="gray" size="sm" badge-text="증정" />
                  </BadgeGroup>
                  <ETit type="prod">
                    바리스타 로슈거 250ml
                  </ETit>
                </div>
              </div>
              <!-- // thumb-prod-flex -->
              <BtnWrap size="sm">
                <EBtn color="line-light-gray" size="sm" @click="openSelectFreeGift">
                  <span class="text">증정품 변경</span>
                </EBtn>
              </BtnWrap>
            </ColorBox>
            <NuxtLink class="btn-link" to="javascript:">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </li>
          <!-- // N+N 증정 상품 (증정품 선택) -->
          <!-- N+N 증정 상품 (증정 가능 상품 안내) -->
          <li class="item-thumb-prod">
            <span class="ui-chk">
              <input id="prodChk05" type="checkbox">
              <label for="prodChk05"><span class="offscreen">상품 선택</span></label>
            </span>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <BadgeGroup gap="md">
                  <EBadge color="gray" size="sm" badge-text="1+1" />
                </BadgeGroup>
                <ETit type="prod">
                  바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                </ETit>
                <div class="stock">
                  <EGoods size="sm" val="N" unit="개" /> 남음
                </div>
              </div>
              <FlexGroup align="end">
                <div class="flex-left">
                  <ESpinner />
                </div>
                <div class="flex-right">
                  <div class="goods-group">
                    <EGoods type="origin" size="sm" val="3,000" unit="원" />
                    <EGoods type="percent" size="md" val="10" unit="%" />
                    <EGoods size="md" val="2,700" unit="원" />
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- // thumb-prod-flex -->
            <button type="button" class="btn-delete">
              <EIco name="close" color="gray" size="xs">
                <span class="offscreen">상품 삭제</span>
              </EIco>
            </button>
            <ColorBox color="orange" size="sm" class="ta-center">
              <p class="stext fc-orange fw-md">
                하나를 더 담으시면 1개를 더 드려요
              </p>
            </ColorBox>
            <NuxtLink class="btn-link" to="javascript:">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </li>
          <!-- // N+N 증정 상품 (증정 가능 상품 안내) -->
          <!-- 주류/와인 상품 -->
          <li class="item-thumb-prod">
            <span class="ui-chk">
              <input id="prodChk06" type="checkbox">
              <label for="prodChk06"><span class="offscreen">상품 선택</span></label>
            </span>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md" dim="19">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <BadgeGroup gap="md">
                  <EBadge color="gray" size="sm" badge-text="할인" />
                </BadgeGroup>
                <ETit type="prod">
                  드보밀레짐빈티지14
                </ETit>
                <div class="stock">
                  <EGoods size="sm" val="N" unit="개" /> 남음
                </div>
              </div>
              <FlexGroup align="end">
                <div class="flex-left">
                  <ESpinner />
                </div>
                <div class="flex-right">
                  <div class="goods-group">
                    <EGoods type="origin" size="sm" val="3,000" unit="원" />
                    <EGoods type="percent" size="md" val="10" unit="%" />
                    <EGoods size="md" val="2,700" unit="원" />
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- // thumb-prod-flex -->
            <button type="button" class="btn-delete">
              <EIco name="close" color="gray" size="xs">
                <span class="offscreen">상품 삭제</span>
              </EIco>
            </button>
            <NuxtLink class="btn-link" to="javascript:">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </li>
          <!-- 주류/와인 상품 -->
        </RowListWrap>
      </ColorBox>
    </ContBox>
    <ContBox size="sm">
      <ColorBox color="white" size="lg">
        <CtitleWrap>
          <ETit text="당일픽업 추천상품" type="lgCont" />
        </CtitleWrap>
        <SwiperAutoWrap gap="12" class="side-zero">
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
      </ColorBox>
      <BtnWrap size="md">
        <EBtn tag="a" color="line-gray" size="md" to="/service">
          <EIco name="plus" color="gray" size="sm" />
          <span class="text">상품 더 담기</span>
        </EBtn>
      </BtnWrap>
      <ContBox size="lg">
        <CtitleWrap size="sm">
          <div class="ctitle-lg">
            포장봉투 선택
          </div>
        </CtitleWrap>
        <ColorBox color="white">
          <RowListWrap gap="line">
            <li class="item-md">
              <span class="ui-rdo">
                <input id="orderPayRdo01" type="radio" name="orderPayRdo01">
                <label for="orderPayRdo01"><span class="text-lg">은평구 종량제봉투 20L (650원)</span></label>
              </span>
            </li>
            <li class="item-md">
              <span class="ui-rdo">
                <input id="orderPayRdo02" type="radio" name="orderPayRdo01">
                <label for="orderPayRdo02"><span class="text-lg">포장봉투 (200원)</span></label>
              </span>
            </li>
            <li class="item-md">
              <span class="ui-rdo">
                <input id="orderPayRdo03" type="radio" name="orderPayRdo01">
                <label for="orderPayRdo03"><span class="text-lg">봉투 미사용 (개인장바구니사용)</span></label>
              </span>
            </li>
          </RowListWrap>
        </ColorBox>
      </ContBox>
      <ContBox size="lg">
        <FoldToggleBox open>
          <template #header>
            <div class="fold-title">
              <FlexGroup>
                <div class="flex-left">
                  <ETit text="결제예정금액" type="fold" />
                </div>
                <div class="flex-right">
                  <EGoods size="xl" val="38,200" unit="원" class="fc-spot" />
                </div>
              </FlexGroup>
            </div>
          </template>
          <template #content>
            <ColorBox color="white" size="lg">
              <RowListWrap gap="lg">
                <li class="item-order-info">
                  <FlexGroup align="center">
                    <div class="flex-left">
                      <ETit text="주문금액" type="goods" />
                    </div>
                    <div class="flex-right">
                      <ETit type="goods">
                        <EGoods val="133,300" unit="원" />
                      </ETit>
                    </div>
                  </FlexGroup>
                </li>
                <li class="item-order-info">
                  <FlexGroup align="center">
                    <div class="flex-left">
                      <ETit text="포장봉투" type="goods" />
                    </div>
                    <div class="flex-right">
                      <ETit type="goods">
                        <EGoods val="200" unit="원" />
                      </ETit>
                    </div>
                  </FlexGroup>
                </li>
                <li class="item-order-info">
                  <FlexGroup align="center">
                    <div class="flex-left">
                      <ETit text="할인금액" type="goods" />
                    </div>
                    <div class="flex-right">
                      <ETit type="goods">
                        <EGoods val="3,000" unit="원" class="fc-red" />
                      </ETit>
                    </div>
                  </FlexGroup>
                </li>
              </RowListWrap>
            </ColorBox>
          </template>
        </FoldToggleBox>
      </ContBox>
      <ContBox size="lg">
        <CtitleWrap size="md">
          <ETit text="알려드립니다." type="cont" />
        </CtitleWrap>
        <RowListWrap gap="sm">
          <li class="dot-text-sm">
            픽업주문시 포장봉투 선택을 확인해주세요.
          </li>
          <li class="dot-text-sm">
            방문이 늦어질 경우 수령이 불가할 수 있으므로 꼭 예정된 시간에 방문해 주세요.
          </li>
          <li class="dot-text-sm">
            주류 등 미성년자 구매 불가 품목이 포함된 주문은 수령시 신분증을 제시해야 합니다. 신분증을 미 지참하실 경우 상품수령이 불가합니다.
          </li>
        </RowListWrap>
      </ContBox>
    </ContBox>
  </ContWrap>
  <ContDocker v-if="isData">
    <BtnWrap>
      <EBtn tag="a" color="green" size="lg" to="/order/pay/pickup">
        <span class="text"><EGoods val="133,500" unit="원" /> 주문하기</span>
      </EBtn>
    </BtnWrap>
  </ContDocker>
  <!-- // 데이터가 없는 경우 -->

  <!-- 데이터가 없는 경우  -->
  <ContWrap v-if="isNoData" in-top="zero" class="not-navbar">
    <InfoGuideWrap
      type="no-data"
      name="cart"
      desc="장바구니에 담긴 상품이 없습니다."
    />
    <BtnWrap type="auto-center" size="xl">
      <EBtn tag="a" color="line-light-gray" size="md" to="/service">
        <span class="text">당일픽업 상품보기</span>
      </EBtn>
    </BtnWrap>
  </ContWrap>
  <!-- // 데이터가 없는 경우  -->

  <!-- pop : 증정품선택 -->
  <popCartSelectFreeGift v-model:sta="popSelectFreeGift" />
  <!-- // pop : 증정품선택 -->

  <!-- pop : 매장 선택 -->
  <PopStoreSearchSelect v-model:sta="popStoreSearchSelect" :first-tab="StoreSearchTabName" :is-search-data="popSearchType" />
  <!-- // pop : 매장 선택 -->
</template>

<script setup lang="ts">
const isData = ref(true);
const isNoData = ref(true);

// 증정품선택 팝업
const popSelectFreeGift = ref({ open: false });
const openSelectFreeGift = () => popSelectFreeGift.value.open = true;

// 매장선택 팝업
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

</style>
