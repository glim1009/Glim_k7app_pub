<template>
  <DeliveryHomeTab>
    <ContWrap>
      <GridListWrap col="2" class="side-box">
        <li v-if="isMember" class="item-grid-full">
          <ColorBox color="white" size="lg">
            <CtitleWrap size="lg">
              <FlexGroup>
                <div class="flex-left">
                  <ETit text="일반회원" type="lgCont" />
                </div>
                <div class="flex-right">
                  <ETBtn tag="a" size="xs" to="/delivery/business-member">
                    <span class="text">사업자회원 증빙</span><EIco name="arw-right" color="gray" size="xs" />
                  </ETBtn>
                </div>
              </FlexGroup>
            </CtitleWrap>
            <div class="bar-flex-group">
              <div class="bar-item">
                <div class="alert-count-group type-reservation">
                  <span class="stext-lg-black">예약중</span>
                  <EGoods size="md" val="1" class="fw-bold fc-spot" />
                </div>
                <NuxtLink class="btn-link" to="/delivery/situation">
                  <span class="offscreen">예약중 목록 바로가기</span>
                </NuxtLink>
              </div>
              <div class="bar-item">
                <div class="alert-count-group type-delivery">
                  <span class="stext-lg-black">배송중</span>
                  <EGoods size="md" val="2" class="fw-bold fc-spot" />
                </div>
                <NuxtLink class="btn-link" to="/delivery/search">
                  <span class="offscreen">배송중 목록 바로가기</span>
                </NuxtLink>
              </div>
              <div class="bar-item">
                <div class="alert-count-group type-history">
                  <span class="stext-lg-black">이용내역</span>
                  <EGoods size="md" val="25" class="fw-bold fc-spot" />
                </div>
                <NuxtLink class="btn-link" to="/delivery/history">
                  <span class="offscreen">이용내역 목록 바로가기</span>
                </NuxtLink>
              </div>
            </div>
          </ColorBox>
        </li>
        <li v-if="isNoMember" class="item-grid-full">
          <ColorBox color="white" size="lg">
            <CtitleWrap size="lg">
              <ETBtn tag="a" to="/member">
                <ETit text="로그인 후 이용해보세요" type="lgCont" />
                <EIco name="arw-right" color="gray" size="sm" />
              </ETBtn>
            </CtitleWrap>
            <div class="bar-flex-group">
              <div class="bar-item">
                <div class="alert-count-group type-nonmember-reservation">
                  <span class="stext-lg-black">비회원 택배예약</span>
                </div>
                <button type="button" class="btn-link" @click="openReservationNonMember">
                  <span class="offscreen">비회원 택배예약 바로가기</span>
                </button>
              </div>
              <div class="bar-item">
                <div class="alert-count-group type-history">
                  <span class="stext-lg-black">비회원 예약/배송 조회</span>
                </div>
                <NuxtLink class="btn-link" to="/delivery/non-member/history">
                  <span class="offscreen">비회원 예약/배송 조회 바로가기</span>
                </NuxtLink>
              </div>
            </div>
          </ColorBox>
        </li>
        <li v-if="isBusinessMember" class="item-grid-full">
          <ColorBox color="white" size="lg">
            <CtitleWrap size="lg">
              <ETit text="사업자인증회원" type="lgCont" />
            </CtitleWrap>
            <div class="bar-flex-group">
              <div class="bar-item">
                <div class="alert-count-group type-reservation">
                  <span class="stext-lg-black">예약중</span>
                  <EGoods size="md" val="1" class="fw-bold fc-spot" />
                </div>
                <NuxtLink class="btn-link" to="/delivery/situation">
                  <span class="offscreen">예약중 목록 바로가기</span>
                </NuxtLink>
              </div>
              <div class="bar-item">
                <div class="alert-count-group type-delivery">
                  <span class="stext-lg-black">배송중</span>
                  <EGoods size="md" val="2" class="fw-bold fc-spot" />
                </div>
                <NuxtLink class="btn-link" to="/delivery/search">
                  <span class="offscreen">배송중 목록 바로가기</span>
                </NuxtLink>
              </div>
              <div class="bar-item">
                <div class="alert-count-group type-history">
                  <span class="stext-lg-black">이용내역</span>
                  <EGoods size="md" val="25" class="fw-bold fc-spot" />
                </div>
                <NuxtLink class="btn-link" to="/delivery/history">
                  <span class="offscreen">이용내역 목록 바로가기</span>
                </NuxtLink>
              </div>
            </div>
          </ColorBox>
        </li>
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
                편의점에서 착한가격으로 편리하게
              </div>
            </CtitleWrap>
          </ColorBox>
          <NuxtLink class="btn-link" to="/delivery/reservation/Kind">
            <span class="offscreen">착한택배 예약 바로가기</span>
          </NuxtLink>
        </li>
      </GridListWrap>

      <ContBox size="sm">
        <SwiperBannerWrap add-click @click-emit="openBannerCollection">
          <swiper-slide>
            <div class="thumb-box">
              <img src="/assets/images/temp/temp_banner_marketing_1.png" alt="마케팅배너 이미지">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="thumb-box">
              <img src="/assets/images/temp/temp_banner_marketing_2.png" alt="마케팅배너 이미지">
            </div>
          </swiper-slide>
        </SwiperBannerWrap>
      </ContBox>

      <ContBox>
        <div class="bar-flex-group">
          <div class="bar-item">
            <ETBtn tag="a" size="sm" @click="openServiceInfoNormal">
              <EIco name="info" color="gray" size="sm" />
              <span class="text">이용안내</span>
            </ETBtn>
          </div>
          <div class="bar-item">
            <ETBtn size="sm" @click="openStoreSearchSelect(false)">
              <EIco name="location" color="gray" size="sm" />
              <span class="text">이용가능매장</span>
            </ETBtn>
          </div>
        </div>
      </ContBox>
    </ContWrap>
    <ContWrap type="white" in-top="lg">
      <CtitleWrap size="md">
        <ETit text="고객 콜센터" type="lgCont" />
        <div class="stext-lg-gray70">
          평일 09:00~18:00 / 토요일 09:00~13:00
        </div>
      </CtitleWrap>
      <GridListWrap gap="sm" col="2">
        <li class="item-grid">
          <ColorBox color="line-light-gray" class="cs-center-box" size="lg">
            <CtitleWrap size="zero">
              <div class="stext-lg-black">
                롯데택배
              </div>
              <div class="ctitle-lg">
                1688-1211
              </div>
            </CtitleWrap>
          </ColorBox>
          <NuxtLink class="btn-link" to="tel:1688-1211">
            <span class="offscreen">롯데택배 콜센터</span>
          </NuxtLink>
        </li>
        <li class="item-grid">
          <ColorBox color="line-light-gray" class="cs-center-box" size="lg">
            <CtitleWrap size="zero">
              <div class="stext-lg-black">
                착한택배
              </div>
              <div class="ctitle-lg">
                1544-0124
              </div>
            </CtitleWrap>
          </ColorBox>
          <NuxtLink class="btn-link" to="tel:1544-0124">
            <span class="offscreen">착한택배 콜센터</span>
          </NuxtLink>
        </li>
      </GridListWrap>
    </ContWrap>
    <ContWrap type="divider" in-top="lg">
      <CtitleWrap>
        <FlexGroup>
          <div class="flex-left">
            <ETit text="택배 제휴문의" type="lgCont" />
          </div>
          <div class="flex-right">
            <ETBtn size="xs" @click="openPartnershipInquiry">
              <span class="text fc-gray90">자세히보기</span>
            </ETBtn>
          </div>
        </FlexGroup>
      </CtitleWrap>
      <ColorBox color="line-light-gray" size="lg" class="side-zero">
        <div class="bar-flex-group">
          <div class="bar-item">
            <CtitleWrap size="zero">
              <div class="stext-lg-black">
                일반택배
              </div>
              <div class="ctitle-sm">
                1544-2548
              </div>
            </CtitleWrap>
          </div>
          <div class="bar-item">
            <CtitleWrap size="zero">
              <div class="stext-lg-black">
                착한택배
              </div>
              <div class="ctitle-sm">
                1544-2548
              </div>
            </CtitleWrap>
          </div>
          <div class="bar-item">
            <CtitleWrap size="zero">
              <div class="stext-lg-black">
                롯데택배
              </div>
              <div class="ctitle-sm">
                1544-2548
              </div>
            </CtitleWrap>
          </div>
        </div>
      </ColorBox>
    </ContWrap>
  </DeliveryHomeTab>

  <!-- pop : 이용안내 -->
  <PopDeliveryServiceInfo v-model:sta="popServiceInfo" />
  <!-- // pop : 이용안내 -->

  <!-- pop : 전체보기 -->
  <PopDeliveryBannerCollection v-model:sta="popBannerCollection" />
  <!-- // pop : 전체보기 -->

  <!-- pop : 제휴문의 -->
  <PopDeliveryPartnershipInquiry v-model:sta="popPartnershipInquiry" />
  <!-- // pop : 제휴문의 -->

  <!-- pop : 비회원 택배예약 -->
  <PopDeliveryReservationNonMember v-model:sta="popReservationNonMember" />
  <!-- // pop : 비회원 택배예약 -->

  <!-- pop : 매장 선택 -->
  <PopStoreSearchSelect v-model:sta="popStoreSearchSelect" :first-tab="StoreSearchTabName" :is-search-data="popSearchType" />
  <!-- // pop : 매장 선택 -->
</template>

<script setup lang="ts">
definePageMeta({
  title: "택배",
  hideRightHeader: ["home"],
});

const isMember = ref(true);
const isNoMember = ref(true);
const isBusinessMember = ref(true);

// 이용안내
const popServiceInfo = ref({ open: false });
const openServiceInfoNormal = () => popServiceInfo.value.open = true;

// 전체보기
const popBannerCollection = ref({ open: false });
const openBannerCollection = () => popBannerCollection.value.open = true;

// 제휴문의
const popPartnershipInquiry = ref({ open: false });
const openPartnershipInquiry = () => popPartnershipInquiry.value.open = true;

// 비회원 택배예약
const popReservationNonMember = ref({ open: false });
const openReservationNonMember = () => popReservationNonMember.value.open = true;

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
@import url("assets/css/pages/delivery.scss");
</style>
