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
                  <ETBtn size="xs">
                    <span class="text">사업자회원 증빙</span><EIco name="arwright" size="xs" />
                  </ETBtn>
                </div>
              </FlexGroup>
            </CtitleWrap>
            <div class="bar-flex-group">
              <div class="bar-item">
                <div class="alert-count-group type-reservation">
                  <span class="stext">예약중</span>
                  <EGoods size="lg" val="1" unit="건" />
                </div>
                <NuxtLink class="btn-link" to="/delivery/situation"><span class="offscreen">예약중 목록 바로가기</span></NuxtLink>
              </div>
              <div class="bar-item">
                <div class="alert-count-group type-delivery">
                  <span class="stext">배송중</span>
                  <EGoods size="lg" val="2" unit="건" />
                </div>
                <NuxtLink class="btn-link" to="/delivery/search"><span class="offscreen">배송중 목록 바로가기</span></NuxtLink>
              </div>
              <div class="bar-item">
                <div class="alert-count-group type-history">
                  <span class="stext">이용내역</span>
                  <EGoods size="lg" val="25" unit="건" />
                </div>
                <NuxtLink class="btn-link" to="/delivery/history"><span class="offscreen">이용내역 목록 바로가기</span></NuxtLink>
              </div>
            </div>
          </ColorBox>
        </li>
        <li class="item-grid">
          <ColorBox color="white" size="md" class="bg-normal-delivery">
            <CtitleWrap size="zero">
              <div class="ctitle-sm">일반택배</div>
              <div class="stext-sm">전국 어디서든<br>안전하게</div>
            </CtitleWrap>
          </ColorBox>
          <NuxtLink class="btn-link" to="/delivery/reservation/normal"><span class="offscreen">일반택배 예약 바로가기</span></NuxtLink>
        </li>
        <li class="item-grid">
          <ColorBox color="white" size="md" class="bg-kind-delivery">
            <CtitleWrap size="zero">
              <div class="ctitle-sm">착한택배</div>
              <div class="stext-sm">편의점에서 편의점으로<br>알뜰하게</div>
            </CtitleWrap>
          </ColorBox>
          <NuxtLink class="btn-link" to="/delivery/reservation/Kind"><span class="offscreen">착한택배 예약 바로가기</span></NuxtLink>
        </li>
      </GridListWrap>

      <SwiperBannerWrap>
        <swiper-slide>
          <div class="thumb-box">
            <img src="~/assets/images/temp/temp_banner_marketing.png" alt="임시 이미지" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="thumb-box">
            <img src="~/assets/images/temp/temp_banner_marketing.png" alt="임시 이미지" />
          </div>
        </swiper-slide>
      </SwiperBannerWrap>

      <BtnWrap type="flex" size="md">
        <EBtn color="line-light-gray" @click="openServiceInfoNormal">
          <EIco name="info" size="sm" />
          <span class="text">이용안내</span>
        </EBtn>
        <EBtn color="line-light-gray" @click="openSearchAvailableShop">
          <EIco name="current-location" size="sm" />
          <span class="text">이용가능매장</span>
        </EBtn>
      </BtnWrap>

    </ContWrap>
    <ContWrap type="white">
      <ContBox size="lg">
        <CtitleWrap size="sm">
          <div class="ctitle">고객 콜센터</div>
          <div class="stext">평일 09:00~18:00 / 토요일 09:00~13:00</div>
        </CtitleWrap>
        <GridListWrap gap="sm" col="2">
          <li class="item-grid">
            <ColorBox color="light-gray" size="lg">
              <CtitleWrap size="zero">
                <div class="stext-sm fc-black">롯데택배 세븐일레븐</div>
                <div class="ctitle-xs">1688-1211<EIco name="arwright" size="xs" /></div>
              </CtitleWrap>
            </ColorBox>
            <NuxtLink class="btn-link" to="tel:1688-1211"><span class="offscreen">롯데택배 세븐일레븐</span></NuxtLink>
          </li>
          <li class="item-grid">
            <ColorBox color="light-gray" size="lg">
              <CtitleWrap size="zero">
                <div class="stext-sm fc-black">세븐일레븐 착한택배</div>
                <div class="ctitle-xs">1544-0124<EIco name="arwright" size="xs" /></div>
              </CtitleWrap>
            </ColorBox>
            <NuxtLink class="btn-link" to="tel:1544-0124"><span class="offscreen">세븐일레븐 착한택배</span></NuxtLink>
          </li>
        </GridListWrap>
      </ContBox>
      <ContBox size="lg">
        <CtitleWrap>
          <FlexGroup>
            <div class="flex-left">
              <div class="ctitle">택배 제휴문의</div>
            </div>
            <div class="flex-right">
              <ETBtn size="xs">
                <span class="text">자세히보기</span><EIco name="arwright" size="xs" />
              </ETBtn>
            </div>
          </FlexGroup>
        </CtitleWrap>
        <ColorBox color="light-gray" size="lg">
          <CtitleWrap size="zero">
            <div class="inquiry-guide-info">
              <EIco name="inquiry-guide" />
              <div class="stext-sm">일반택배 1544-2548 / 착한택배 1644-8448 / 롯데택배 1500-6548</div>
            </div>
          </CtitleWrap>
        </ColorBox>
      </ContBox>
    </ContWrap>
  </DeliveryHomeTab>

  <!-- pop : 이용안내 -->
  <PopDeliveryServiceInfo v-model:sta="popServiceInfo" />
  <!-- // pop : 이용안내 -->

  <!-- pop : 이용가능매장 -->
  <PopDeliverySearchAvailableShop v-model:sta="popSearchAvailableShop" />
  <!-- // pop : 이용가능매장 -->
</template>

<script setup lang="ts">
definePageMeta({
  title: '택배',
  hideRightHeader: ['home'],
  //hideDocker: true,
})

const popSearchAvailableShop = ref({ open: false });
const openSearchAvailableShop = () => popSearchAvailableShop.value.open = true;

const popServiceInfo = ref({ open: false });
const openServiceInfoNormal = () => popServiceInfo.value.open = true;

</script>

<style lang="scss" scoped>
@import url("assets/css/pages/delivery/delivery.scss");
</style>
