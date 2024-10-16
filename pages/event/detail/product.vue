<template>
  <ContWrap type="white" class="side-zero" in-top="zero" in-bottom="zero">
    <ContBox>
      <div class="thumb-box">
        <img src="/assets/images/temp/temp_event_detail.png" alt="기획전 이미지">
      </div>
    </ContBox>
  </ContWrap>
  <ContWrap type="white">
    <ContBox size="sm">
      <div class="editor-wrap">
        <!-- 개발 시 삭제 영역 -->
        <div style="height: 108px; background: rgba(255, 0, 0, .1);">
          에디터영역 확인을 위한 임시 div입니다.<br>
          개발시 해당 div 삭제 후 작업해 주세요.
        </div>
        <!-- // 개발 시 삭제 영역 -->
      </div>
    </ContBox>
    <ContBox size="sm">
      <!-- 약관 동의 CASE 01 : 단일일 경우 -->
      <FlexGroup>
        <div class="flex-left">
          <span class="ui-chk">
            <input id="agreeChk01" type="checkbox">
            <label for="agreeChk01"><span class="text-md">개인정보 수집 및 이용동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
          </span>
        </div>
        <div class="flex-right">
          <ETBtn size="xs" @click="openBoTitleTerms">
            <span class="text">상세보기</span>
            <EIco name="arw-right" color="gray" size="xs" />
          </ETBtn>
        </div>
      </FlexGroup>
      <!-- // 약관 동의 CASE 01 : 단일일 경우 -->

      <!-- 약관 동의 CASE 02 : 복수일 경우 -->
      <AllAgreeWrap v-model:checkCount="checkCheckBox" :index="1" :total-count="totalCheckBox">
        <ColorBox color="light-gray" size="md">
          <div ref="agreeListRef">
            <RowListWrap>
              <li class="ui-col-item">
                <FlexGroup>
                  <div class="flex-left">
                    <span class="ui-chk">
                      <input id="agreeChk02" type="checkbox">
                      <label for="agreeChk02"><span class="text-md">개인정보 수집 및 이용동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
                    </span>
                  </div>
                  <div class="flex-right">
                    <ETBtn size="xs" @click="openBoTitleTerms">
                      <span class="text">상세보기</span>
                      <EIco name="arw-right" color="gray" size="xs" />
                    </ETBtn>
                  </div>
                </FlexGroup>
              </li>
              <li class="ui-col-item">
                <FlexGroup>
                  <div class="flex-left">
                    <span class="ui-chk">
                      <input id="agreeChk03" type="checkbox">
                      <label for="agreeChk03"><span class="text-md">이벤트 참여 문자 및 이메일 마케팅 정...</span></label>
                    </span>
                  </div>
                  <div class="flex-right">
                    <ETBtn size="xs" @click="openBoTitleTerms">
                      <span class="text">상세보기</span>
                      <EIco name="arw-right" color="gray" size="xs" />
                    </ETBtn>
                  </div>
                </FlexGroup>
              </li>
            </RowListWrap>
          </div>
        </ColorBox>
      </AllAgreeWrap>
      <!-- // 약관 동의 CASE 02 : 복수일 경우 -->

      <BtnWrap type="full" size="lg">
        <EBtn color="green">
          <span class="text">참여하기</span>
        </EBtn>
      </BtnWrap>
    </ContBox>
  </ContWrap>
  <ContWrap type="divider">
    <ContBox size="lg" deco="t-line">
      <CtitleWrap>
        <ETit text="응모상품" type="lgCont" />
      </CtitleWrap>
      <SwiperAutoWrap gap="10" class="side-zero">
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
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
            </div>
          </div>
          <!-- // thumb-prod -->
        </swiper-slide>
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
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
            </div>
          </div>
          <!-- // thumb-prod -->
        </swiper-slide>
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
              <ETit type="prod">
                바리스타 로슈거 250ml
              </ETit>
            </div>
          </div>
          <!-- // thumb-prod -->
        </swiper-slide>
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
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
            </div>
          </div>
          <!-- // thumb-prod -->
        </swiper-slide>
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
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
            </div>
          </div>
          <!-- // thumb-prod -->
        </swiper-slide>
      </SwiperAutoWrap>
    </ContBox>
    <ContBox size="lg" deco="t-line">
      <CtitleWrap>
        <ETit text="응모가능 수" type="lgCont" />
      </CtitleWrap>
      <SwiperAutoWrap gap="10" class="side-zero">
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
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="stock">
                <EGoods size="sm" val="244" unit="개" /> 남음
              </div>
            </div>
          </div>
          <!-- // thumb-prod -->
        </swiper-slide>
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
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="stock">
                <EGoods size="sm" val="8" unit="개" /> 남음
              </div>
            </div>
          </div>
          <!-- // thumb-prod -->
        </swiper-slide>
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
              <ETit type="prod">
                바리스타 로슈거 250ml
              </ETit>
              <div class="stock">
                <EGoods size="sm" val="12" unit="개" /> 남음
              </div>
            </div>
          </div>
          <!-- // thumb-prod -->
        </swiper-slide>
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
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="stock">
                <EGoods size="sm" val="244" unit="개" /> 남음
              </div>
            </div>
          </div>
          <!-- // thumb-prod -->
        </swiper-slide>
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
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="stock">
                <EGoods size="sm" val="8" unit="개" /> 남음
              </div>
            </div>
          </div>
          <!-- // thumb-prod -->
        </swiper-slide>
      </SwiperAutoWrap>
    </ContBox>
    <ContBox size="lg" deco="t-line">
      <CtitleWrap>
        <ETit text="내 응모 현황" type="lgCont" />
      </CtitleWrap>
      <SwiperAutoWrap gap="10" class="side-zero">
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
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="stext">
                <span class="fc-spot">
                  본인 1회
                </span> / 잔여 10회
              </div>
            </div>
          </div>
          <!-- // thumb-prod -->
        </swiper-slide>
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
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="stext">
                <span class="fc-spot">
                  본인 1회
                </span> / 잔여 10회
              </div>
            </div>
          </div>
          <!-- // thumb-prod -->
        </swiper-slide>
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
              <ETit type="prod">
                바리스타 로슈거 250ml
              </ETit>
              <div class="stext">
                <span class="fc-spot">
                  본인 1회
                </span> / 잔여 10회
              </div>
            </div>
          </div>
          <!-- // thumb-prod -->
        </swiper-slide>
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
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="stext">
                <span class="fc-spot">
                  본인 1회
                </span> / 잔여 10회
              </div>
            </div>
          </div>
          <!-- // thumb-prod -->
        </swiper-slide>
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
              <ETit type="prod">
                바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
              </ETit>
              <div class="stext">
                <span class="fc-spot">
                  본인 1회
                </span> / 잔여 10회
              </div>
            </div>
          </div>
          <!-- // thumb-prod -->
        </swiper-slide>
      </SwiperAutoWrap>
    </ContBox>
  </ContWrap>
  <ContWrap type="divider" class="not-navbar">
    <ContBox>
      <CtitleWrap>
        <FlexGroup>
          <div class="flex-left">
            <ETit text="내 스탬프 현황" type="lgCont" />
          </div>
          <div class="flex-right">
            <EBtn color="line-light-gray" size="xs" class="btn-reset">
              <EIco name="reset" color="gray" size="xs" />
            </EBtn>
          </div>
        </FlexGroup>
      </CtitleWrap>
      <div class="my-stamp-status-info-box">
        <div class="day-count">
          D-24
        </div>
        <CtitleWrap size="zero">
          <ETit text="제주우유 생크림빵 스템프 이벤트 제주우유 생크림빵 스템프 이벤트 제주우유 생크림빵 스템프 이벤트" type="box" />
          <div class="stext-gray70">
            2024.06-29 ~ 2024.07.31
          </div>
        </CtitleWrap>
      </div>
      <SwiperBannerWrap effect="slide" pagination="bullets" is-auto-height pagination-pos="out-center" type="stamp">
        <swiper-slide>
          <ColorBox color="line-light-gray" size="lg">
            <CtitleWrap>
              <FlexGroup>
                <div class="flex-left">
                  <ETit size="sm" text="일반 스탬프" />
                </div>
                <div class="flex-right">
                  <div class="goods-group">
                    총
                    <EGoods size="md" val="12" unit="개" />
                  </div>
                </div>
              </FlexGroup>
            </CtitleWrap>
            <ul class="my-stamp-status-list">
              <li class="item-my-stamp">
                <span class="stamp-box">
                  <img src="/assets/images/event/ico_stamp_def_on.png" alt="스탬프 활성화">
                </span>
              </li>
              <li class="item-my-stamp">
                <span class="stamp-box">
                  <img src="/assets/images/event/ico_stamp_def_on.png" alt="스탬프 활성화">
                </span>
              </li>
              <li class="item-my-stamp">
                <span class="stamp-box">
                  <img src="/assets/images/event/ico_stamp_def_on.png" alt="스탬프 활성화">
                </span>
              </li>
              <li class="item-my-stamp">
                <span class="stamp-box">
                  <img src="/assets/images/event/ico_stamp_def_on.png" alt="스탬프 활성화">
                </span>
              </li>
              <li class="item-my-stamp">
                <span class="stamp-box">
                  <img src="/assets/images/event/ico_stamp_def.png" alt="스탬프 비활성화">
                </span>
              </li>
              <li class="item-my-stamp">
                <span class="stamp-box">
                  <img src="/assets/images/event/ico_stamp_def.png" alt="스탬프 비활성화">
                </span>
              </li>
              <li class="item-my-stamp">
                <span class="stamp-box">
                  <img src="/assets/images/event/ico_stamp_def.png" alt="스탬프 비활성화">
                </span>
              </li>
              <li class="item-my-stamp">
                <span class="stamp-box">
                  <img src="/assets/images/event/ico_stamp_def.png" alt="스탬프 비활성화">
                </span>
              </li>
              <li class="item-my-stamp">
                <span class="stamp-box">
                  <img src="/assets/images/event/ico_stamp_def.png" alt="스탬프 비활성화">
                </span>
              </li>
              <li class="item-my-stamp">
                <span class="stamp-box">
                  <img src="/assets/images/event/ico_stamp_def.png" alt="스탬프 비활성화">
                </span>
              </li>
              <li class="item-my-stamp">
                <span class="stamp-box">
                  <img src="/assets/images/event/ico_stamp_def.png" alt="스탬프 비활성화">
                </span>
              </li>
              <li class="item-my-stamp">
                <span class="stamp-box">
                  <img src="/assets/images/event/ico_stamp_def.png" alt="스탬프 비활성화">
                </span>
              </li>
            </ul>
          </ColorBox>
        </swiper-slide>
        <swiper-slide>
          <ColorBox color="line-light-gray" size="lg">
            <CtitleWrap>
              <FlexGroup>
                <div class="flex-left">
                  <div class="ctitle-sm">
                    일반 스탬프
                  </div>
                </div>
                <div class="flex-right">
                  <div class="goods-group">
                    총
                    <EGoods size="md" val="6" unit="개" />
                  </div>
                </div>
              </FlexGroup>
            </CtitleWrap>
            <ul class="my-stamp-status-list">
              <li class="item-my-stamp">
                <span class="stamp-box">
                  <img src="/assets/images/event/ico_stamp_def_on.png" alt="스탬프 활성화">
                </span>
              </li>
              <li class="item-my-stamp">
                <span class="stamp-box">
                  <img src="/assets/images/event/ico_stamp_def_on.png" alt="스탬프 활성화">
                </span>
              </li>
              <li class="item-my-stamp">
                <span class="stamp-box">
                  <img src="/assets/images/event/ico_stamp_def_on.png" alt="스탬프 활성화">
                </span>
              </li>
              <li class="item-my-stamp">
                <span class="stamp-box">
                  <img src="/assets/images/event/ico_stamp_def_on.png" alt="스탬프 활성화">
                </span>
              </li>
              <li class="item-my-stamp">
                <span class="stamp-box">
                  <img src="/assets/images/event/ico_stamp_def.png" alt="스탬프 비활성화">
                </span>
              </li>
              <li class="item-my-stamp">
                <span class="stamp-box">
                  <img src="/assets/images/event/ico_stamp_def.png" alt="스탬프 비활성화">
                </span>
              </li>
            </ul>
          </ColorBox>
        </swiper-slide>
      </SwiperBannerWrap>
      <!-- DESC :: 수동응모 - 게임형(룰렛)인 경우 노출 -->
      <BtnWrap type="full" size="lg">
        <EBtn color="green" size="md" @click="openLuckyRoulette">
          <span class="text">룰렛 게임 참여하기</span>
        </EBtn>
      </BtnWrap>
      <!-- DESC :: 스탬프 조건이 2건 이상인 경우 노출 -->
      <RowListWrap size="md" gap="line">
        <li class="item-md">
          <div class="ui-rdo-prod">
            <input id="eventGiftRdo01" type="radio" name="eventGiftRdo01" checked>
            <label for="eventGiftRdo01" />
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="lg">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">
                  몬스터에너지 드링크
                </ETit>
                <div class="stext fc-spot">
                  선택가능
                </div>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
          </div>
        </li>
        <li class="item-md">
          <div class="ui-rdo-prod">
            <input id="eventGiftRdo02" type="radio" name="eventGiftRdo01" disabled>
            <label for="eventGiftRdo02" />
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="lg">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">
                  제주우유 생크림빵
                </ETit>
                <div class="stext">
                  스탬프 부족
                </div>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
          </div>
        </li>
      </RowListWrap>
      <!-- DESC :: 수동응모 - 선택형인 경우 노출 -->
      <BtnWrap type="full" size="lg">
        <!-- DESC :: 보상상품 선택 시 [disabled] 속성 제거 -->
        <EBtn color="green" size="md" disabled>
          <span class="text">보상선택</span>
        </EBtn>
      </BtnWrap>
    </ContBox>
  </ContWrap>
  <!-- DESC :: 진행중 이벤트가 아닌 경우 [ContDocker] 노출 필요 -->
  <ContDocker>
    <!-- 하단 docker CASE 01 : 이벤트 시작 전 -->
    <div class="cont-docker-info">
      <EIco name="alert" color="green" />
      <div class="stext-lg-black">
        이벤트 진행기간이 아닙니다.
      </div>
    </div>
    <!-- // 하단 docker CASE 01 : 이벤트 시작 전 -->
    <!-- 하단 docker CASE 02 : 이벤트 조기 종료 -->
    <!-- <div class="cont-docker-info">
      <EIco name="alert" color="green" />
      <div class="stext-lg-black">
        조기 종료된 이벤트 입니다.
      </div>
    </div> -->
    <!-- // 하단 docker CASE 02 : 이벤트 조기 종료 -->
    <!-- 하단 docker CASE 03 : 이벤트 종료 -->
    <!-- <div class="cont-docker-info">
        <EIco name="alert" color="green" />
        <div class="stext-lg-black">
          종료된 이벤트 입니다.
        </div>
      </div> -->
    <!-- // 하단 docker CASE 03 : 이벤트 종료 -->
  </ContDocker>

  <!-- pop : (공통) 약관 -->
  <PopTermsBoTitleTerms v-model:sta="popBoTitleTerms" pop-title="팝업 타이틀 BO 관리" />
  <!-- // pop : (공통) 약관 -->

  <!-- pop : 행운의 룰렛 -->
  <PopEventLuckyRoulette v-model:sta="popLuckyRoulette" />
  <!-- // pop : 행운의 룰렛 -->
</template>

<script setup lang="ts">
// (공통) 약관 팝업
const popBoTitleTerms = ref({ open: false });
const openBoTitleTerms = () => popBoTitleTerms.value.open = true;

// 행운의 룰렛 팝업
const popLuckyRoulette = ref({ open: false });
const openLuckyRoulette = () => popLuckyRoulette.value.open = true;

// 전체동의
const agreeListRef = ref<HTMLInputElement | null>(null);
const totalCheckBox = ref<number>(0);
const checkCheckBox = ref<number>(0);
let checkboxes: NodeListOf<HTMLInputElement>;

function updateCheckCount(): void {
  checkCheckBox.value = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
}

watch(() => checkCheckBox.value, (newValue) => {
  totalCheckBox.value = checkboxes.length;
  if (newValue === totalCheckBox.value) {
    checkboxes.forEach(checkbox => checkbox.checked = true);
  }
  else if (newValue === 0) {
    checkboxes.forEach(checkbox => checkbox.checked = false);
  }
  updateCheckCount();
});

watch(() => agreeListRef.value, (newValue) => {
  if (!newValue)
    return;
  checkboxes = newValue.querySelectorAll<HTMLInputElement>("input[type=\"checkbox\"]");
  totalCheckBox.value = checkboxes.length;
  checkboxes.forEach((checkbox) => {
    checkbox.removeEventListener("change", updateCheckCount);
    checkbox.addEventListener("change", updateCheckCount);
  });

  updateCheckCount();
});
</script>

<style lang="scss" scoped>
@import url('@/assets/css/pages/event.scss');
</style>
