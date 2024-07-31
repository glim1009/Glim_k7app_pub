<template>
  <DeliveryHomeTab>
    <ContWrap>
      <GridListWrap col="2">
        <li class="item-grid-full">
          <ColorBox color="white" size="lg">
            <CtitleWrap>
              <FlexGroup>
                <div class="flex-left">
                  <div class="ctitle">일반회원</div>
                </div>
                <div class="flex-right">
                  <ETBtn tag="a" size="xs" to="/delivery/buisnessMem">
                    <span class="text">사업자회원 증빙</span><EIco name="arwright" size="xs" />
                  </ETBtn>
                </div>
              </FlexGroup>
            </CtitleWrap>
            <div class="bar-flex-group">
              <div class="bar-item">
                <div class="alert-count-group type-reservation">
                  <span class="stext fc-gray70">예약중</span>
                  <EGoods size="lg" val="1" unit="건" />
                </div>
                <NuxtLink class="btn-link" to="/delivery/situation"><span class="offscreen">예약중 목록 바로가기</span></NuxtLink>
              </div>
              <div class="bar-item">
                <div class="alert-count-group type-delivery">
                  <span class="stext fc-gray70">배송중</span>
                  <EGoods size="lg" val="2" unit="건" />
                </div>
                <NuxtLink class="btn-link" to="/delivery/search"><span class="offscreen">배송중 목록 바로가기</span></NuxtLink>
              </div>
              <div class="bar-item">
                <div class="alert-count-group type-history">
                  <span class="stext fc-gray70">이용내역</span>
                  <EGoods size="lg" val="25" unit="건" />
                </div>
                <NuxtLink class="btn-link" to="/delivery/history"><span class="offscreen">이용내역 목록 바로가기</span></NuxtLink>
              </div>
            </div>
          </ColorBox>
        </li>
        <li class="item-grid">
          <ColorBox color="white" size="lg" class="bg-normal-delivery">
            <CtitleWrap size="zero">
              <div class="ctitle-sm">일반택배</div>
              <div class="stext fc-gray70">전국 어디서든<br>안전하게</div>
            </CtitleWrap>
          </ColorBox>
          <NuxtLink class="btn-link" to="/delivery/reservation/normal"><span class="offscreen">일반택배 예약 바로가기</span></NuxtLink>
        </li>
        <li class="item-grid">
          <ColorBox color="white" size="lg" class="bg-kind-delivery">
            <CtitleWrap size="zero">
              <div class="ctitle-sm">착한택배</div>
              <div class="stext fc-gray70">편의점에서 편의점으로<br>알뜰하게</div>
            </CtitleWrap>
          </ColorBox>
          <NuxtLink class="btn-link" to="/delivery/reservation/Kind"><span class="offscreen">착한택배 예약 바로가기</span></NuxtLink>
        </li>
      </GridListWrap>

      <ContBox size="sm">
        <SwiperBannerWrap @click-emit="openBannerCollection">
          <swiper-slide>
            <div class="thumb-box">
              <img src="~/assets/images/temp/temp_banner_marketing_1.png" alt="임시 이미지" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="thumb-box">
              <img src="~/assets/images/temp/temp_banner_marketing_2.png" alt="임시 이미지" />
            </div>
          </swiper-slide>
        </SwiperBannerWrap>
      </ContBox>

      <ContBox>
        <div class="bar-flex-group">
          <div class="bar-item">
            <ETBtn tag="a" size="sm" @click="openServiceInfoNormal">
              <EIco name="info" size="sm" />
              <span class="text">이용안내</span>
            </ETBtn>
          </div>
          <div class="bar-item">
            <ETBtn tag="a" size="sm" @click="openSearchAvailableShop">
              <EIco name="current-location" size="sm" />
              <span class="text">이용가능매장</span>
            </ETBtn>
          </div>
        </div>
      </ContBox>
    </ContWrap>
    <ContWrap type="white" in-top="lg">
      <CtitleWrap size="md">
        <div class="ctitle">고객 콜센터</div>
        <div class="stext">평일 09:00~18:00 / 토요일 09:00~13:00</div>
      </CtitleWrap>
      <GridListWrap gap="sm" col="2">
        <li class="item-grid">
          <div class="cs-center-box bg-cs-7eleven">
            <CtitleWrap size="zero">
              <div class="stext-lg fc-black">세븐일레븐 착한택배</div>
              <div class="ctitle-sm">1544-0124</div>
            </CtitleWrap>
          </div>
          <NuxtLink class="btn-link" to="tel:1688-1211"><span class="offscreen">롯데택배 세븐일레븐</span></NuxtLink>
        </li>
        <li class="item-grid">
          <div class="cs-center-box bg-cs-kind-delivery">
            <CtitleWrap size="zero">
              <div class="stext-lg fc-black">세븐일레븐 착한택배</div>
              <div class="ctitle-sm">1544-0124</div>
            </CtitleWrap>
          </div>
          <NuxtLink class="btn-link" to="tel:1544-0124"><span class="offscreen">세븐일레븐 착한택배</span></NuxtLink>
        </li>
      </GridListWrap>
    </ContWrap>
    <ContWrap type="divider" in-top="lg">
      <CtitleWrap>
        <FlexGroup>
          <div class="flex-left">
            <div class="ctitle">택배 제휴문의</div>
          </div>
          <div class="flex-right">
            <ETBtn size="xs">
              <span class="text">자세히보기</span>
            </ETBtn>
          </div>
        </FlexGroup>
      </CtitleWrap>
      <ColorBox color="line-light-gray" size="lg" class="size-zero">
        <div class="bar-flex-group">
          <div class="bar-item">
            <CtitleWrap size="zero">
              <div class="stext fc-black">일반택배</div>
              <div class="ctitle-sm">1544-2548</div>
            </CtitleWrap>
          </div>
          <div class="bar-item">
            <CtitleWrap size="zero">
              <div class="stext fc-black">착한택배</div>
              <div class="ctitle-sm">1644-8448</div>
            </CtitleWrap>
          </div>
          <div class="bar-item">
            <CtitleWrap size="zero">
              <div class="stext fc-black">롯데택배</div>
              <div class="ctitle-sm">1500-6548</div>
            </CtitleWrap>
          </div>
        </div>
      </ColorBox>
    </ContWrap>
  </DeliveryHomeTab>

  <!-- pop : 이용안내 -->
  <PopDeliveryServiceInfo v-model:sta="popServiceInfo" />
  <!-- // pop : 이용안내 -->

  <!-- pop : 이용가능매장 -->
  <PopDeliverySearchAvailableShop v-model:sta="popSearchAvailableShop" />
  <!-- // pop : 이용가능매장 -->

  <!-- pop : 전체보기 -->
  <PopDeliveryBannerCollection v-model:sta="popBannerCollection" />
  <!-- // pop : 전체보기 -->
</template>

<script setup lang="ts">
definePageMeta({
  title: '택배',
  hideRightHeader: ['home'],
})

// 이용안내
const popServiceInfo = ref({ open: false });
const openServiceInfoNormal = () => popServiceInfo.value.open = true;

// 이용가능매장
const popSearchAvailableShop = ref({ open: false });
const openSearchAvailableShop = () => popSearchAvailableShop.value.open = true;

// 전체보기
const popBannerCollection = ref({ open: false });
const openBannerCollection = () => popBannerCollection.value.open = true;

</script>

<style lang="scss" scoped>
@import url("assets/css/pages/delivery/delivery.scss");
</style>
