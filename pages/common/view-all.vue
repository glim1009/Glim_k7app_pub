<template>
  <ContWrap type="white" in-bottom="sm">
    <!-- 로그인 전 -->
    <ContBox v-if="isNoLogin">
      <FlexGroup>
        <div class="flex-left">
          <ETit type="cont">
            로그인하시고
            <br>다양한 혜택을 만나보세요!
          </ETit>
        </div>
        <div class="flex-right">
          <BtnWrap type="auto">
            <EBtn tag="a" color="green" size="md" to="/member">
              <span class="text">로그인</span>
            </EBtn>
          </BtnWrap>
        </div>
      </FlexGroup>
    </ContBox>
    <!-- // 로그인 전 -->
    <!-- 로그인 후 -->
    <ContBox v-if="isLogin">
      <FlexGroup align="end">
        <div class="flex-left">
          <!-- my-info-wrap -->
          <div class="my-info-wrap">
            <div class="grade-box">
              <img src="/assets/images/temp/temp_thumb_member_grade.png" alt="임시 이미지">
            </div>
            <div class="info-box">
              <BtnWrap type="full">
                <ETBtn tag="a" to="javascript:">
                  <ETit type="lgCont" class="fc-black">
                    김세븐님,
                    <br>오늘도 반가워요!
                  </ETit>
                </ETBtn>
                <ETBtn tag="a" size="sm" to="/cs/grade-benefit">
                  <span class="text">등급명</span>
                  <EIco name="arw-right" color="gray" size="xs" />
                </ETBtn>
              </BtnWrap>
            </div>
          </div>
          <!-- // my-info-wrap -->
        </div>
        <div class="flex-right">
          <NuxtLink class="link-app-setting" to="javascript:">
            <EIco name="setting" color="gray" />
            <span class="offscreen">앱 설정 바로가기</span>
          </NuxtLink>
        </div>
      </FlexGroup>
    </ContBox>
    <!-- // 로그인 후 -->
  </ContWrap>
  <ContWrap in-top="lg">
    <ContBox size="lg">
      <CtitleWrap size="md">
        <ETit type="lgCont" text="세븐 서비스" />
      </CtitleWrap>
      <ColorBox color="white" size="lg">
        <GridListWrap col="4" gap="all-menu">
          <li class="item-grid">
            <NuxtLink class="link-service-menu" to="/service">
              <EIco name="service-pickup" />
              <div class="service-info">
                당일픽업
              </div>
            </NuxtLink>
          </li>
          <li class="item-grid">
            <NuxtLink class="link-service-menu" to="/service/reservation">
              <EIco name="service-reservation" />
              <div class="service-info">
                사전예약
              </div>
            </NuxtLink>
          </li>
          <li class="item-grid">
            <NuxtLink class="link-service-menu" to="/delivery">
              <EIco name="service-delivery" />
              <div class="service-info">
                택배예약
              </div>
            </NuxtLink>
          </li>
          <li class="item-grid">
            <NuxtLink class="link-service-menu" to="/keep/home">
              <EIco name="service-keep" />
              <div class="service-info">
                쏘옥보관
              </div>
            </NuxtLink>
          </li>
          <li class="item-grid">
            <NuxtLink class="link-service-menu" to="/stock/product">
              <EIco name="service-stock" />
              <div class="service-info">
                재고찾기
              </div>
            </NuxtLink>
          </li>
          <li class="item-grid">
            <NuxtLink class="link-service-menu" to="/store/search">
              <EIco name="service-store" />
              <div class="service-info">
                매장찾기
              </div>
            </NuxtLink>
          </li>
          <li class="item-grid">
            <NuxtLink class="link-service-menu" to="/service/category/discount">
              <EIco name="service-discount" />
              <div class="service-info">
                구독할인
              </div>
            </NuxtLink>
          </li>
          <li class="item-grid">
            <NuxtLink class="link-service-menu" to="/service/gift-card">
              <EIco name="service-gift-card" />
              <div class="service-info">
                교환권
              </div>
            </NuxtLink>
          </li>
          <li class="item-grid">
            <NuxtLink class="link-service-menu" to="/service/category/voucher">
              <EIco name="service-voucher" />
              <div class="service-info">
                금액권
              </div>
            </NuxtLink>
          </li>
          <li class="item-grid">
            <NuxtLink class="link-service-menu" to="/coupon/app">
              <EIco name="service-coupon" />
              <div class="service-info">
                쿠폰
              </div>
            </NuxtLink>
          </li>
          <li class="item-grid">
            <NuxtLink class="link-service-menu" to="javascript:">
              <EIco name="service-event" />
              <div class="service-info">
                이벤트
              </div>
            </NuxtLink>
          </li>
          <li class="item-grid">
            <NuxtLink class="link-service-menu" to="/event/detail/attendance-calendar">
              <EIco name="service-attendance" />
              <div class="service-info">
                출석체크
              </div>
            </NuxtLink>
          </li>
          <li class="item-grid">
            <NuxtLink class="link-service-menu" to="/event/plan">
              <EIco name="service-exhibition" />
              <div class="service-info">
                기획전
              </div>
            </NuxtLink>
          </li>
          <li class="item-grid">
            <NuxtLink class="link-service-menu" to="javascript:">
              <EIco name="service-point" />
              <div class="service-info">
                포인트적립
              </div>
            </NuxtLink>
          </li>
        </GridListWrap>
      </ColorBox>
    </ContBox>
    <ContBox size="lg">
      <SwiperBannerWrap type="promotion">
        <swiper-slide>
          <div class="thumb-box">
            <img src="/assets/images/temp/temp_banner_marketing_1.png" alt="마케팅배너 이미지">
          </div>
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <div class="thumb-box">
            <img src="/assets/images/temp/temp_banner_marketing_2.png" alt="마케팅배너 이미지">
          </div>
          <NuxtLink class="btn-link" to="javascript:">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
      </SwiperBannerWrap>
    </ContBox>
    <ContBox size="lg">
      <CtitleWrap size="md">
        <FlexGroup>
          <div class="flex-left">
            <ETit type="lgCont" text="고객센터" />
          </div>
          <div class="flex-right">
            <ETBtn tag="a" size="xs" to="/cs">
              <span class="text">더보기</span>
              <EIco name="arw-right" color="gray" size="xs" />
            </ETBtn>
          </div>
        </FlexGroup>
      </CtitleWrap>
      <ColorBox color="white" size="zero">
        <RowListWrap gap="line">
          <li class="item-md-link">
            <ETBtn tag="a" size="sm" type="right-arw" to="/cs/faq">
              <span class="text">FAQ</span>
            </ETBtn>
          </li>
          <li class="item-md-link">
            <ETBtn tag="a" size="sm" type="right-arw" to="/cs/notice">
              <span class="text">공지사항</span>
            </ETBtn>
          </li>
          <li class="item-md-link">
            <ETBtn tag="a" size="sm" type="right-arw" to="/cs/grade-benefit">
              <span class="text">등급별 할인 혜택</span>
            </ETBtn>
          </li>
          <li class="item-md-link">
            <ETBtn tag="a" size="sm" type="right-arw" to="https://m.7-eleven.co.kr:444/franchise/advice/cvmsForm.asp">
              <span class="text">고객의 소리</span>
            </ETBtn>
          </li>
        </RowListWrap>
      </ColorBox>
    </ContBox>
    <ContBox size="lg">
      <CtitleWrap size="md">
        <ETit type="lgCont" text="서비스 이용안내" />
      </CtitleWrap>
      <ColorBox color="white" size="zero">
        <RowListWrap gap="line">
          <li class="item-md-link">
            <ETBtn size="sm" type="right-arw" @click="openTermsOfUse('privacy')">
              <span class="text">개인정보 처리방침</span>
            </ETBtn>
          </li>
          <li class="item-md-link">
            <ETBtn size="sm" type="right-arw" @click="openTermsOfUse('service')">
              <span class="text">이용약관</span>
            </ETBtn>
          </li>
          <li class="item-md-link">
            <ETBtn tag="a" size="sm" type="right-arw" to="javascript:">
              <span class="text">이용 가이드</span>
            </ETBtn>
          </li>
          <li class="item-md-link">
            <ETBtn size="sm" type="right-arw" @click="openTermsOfLocation">
              <span class="text">위치기반 서비스 이용약관</span>
            </ETBtn>
          </li>
        </RowListWrap>
      </ColorBox>
    </ContBox>
    <!-- 로그인 후 -->
    <BtnWrap size="xl">
      <EBtn v-if="isLogin" color="line-light-gray" size="md">
        <span class="text">로그아웃</span>
      </EBtn>
    </BtnWrap>
    <!-- 로그인 후 -->
  </ContWrap>

  <!-- pop : 이용약관 -->
  <PopCommTermsOfUse v-model:sta="popTermsOfUse" :active-tab="termOfUseType" />
  <!-- // pop : 이용약관 -->

  <!-- pop : 위치기반 서비스 이용약관 -->
  <PopCommTermsOfLocation v-model:sta="popTermsOfLocation" />
  <!-- // pop : 위치기반 서비스 이용약관 -->
</template>

<script setup lang="ts">
definePageMeta({
  title: "전체보기",
  hideRightHeader: ["home"],
});

const isLogin = ref(true);
const isNoLogin = ref(true);

const termOfUseType = ref<string>();

// 개인정보 처리방침
const popPersonalInfoAgree = ref({ open: false });
const openPersonalInfoAgree = () => popPersonalInfoAgree.value.open = true;
const closePersonalInfoAgree = () => popPersonalInfoAgree.value.open = false;

// 이용약관
const popTermsOfUse = ref({ open: false });
const openTermsOfUse = (activeTab: string) => {
  termOfUseType.value = activeTab;
  popTermsOfUse.value.open = true;
};
const closeTermsOfUse = () => popTermsOfUse.value.open = false;

// 위치기반 서비스 이용약관
const popTermsOfLocation = ref({ open: false });
const openTermsOfLocation = () => popTermsOfLocation.value.open = true;
const closeTermsOfLocation = () => popTermsOfLocation.value.open = false;
</script>

<style lang="scss" scoped>

</style>
