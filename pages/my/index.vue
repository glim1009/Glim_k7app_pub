<template>
  <ContWrap type="white">
    <ContBox size="sm">
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
                    김세븐 경영주님,
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
          <NuxtLink class="link-app-setting" to="/my/my-info/change">
            <EIco name="edit" />
            <span class="offscreen">회원정보 수정 바로가기</span>
          </NuxtLink>
        </div>
      </FlexGroup>
    </ContBox>
    <ContBox size="sm" gap="sm">
      <div class="my-point-box">
        <FlexGroup>
          <div class="flex-left">
            <EIco name="line-point" color="white" />
            <span class="stext-lg-white fw-md">사용가능 L.POINT</span>
          </div>
          <div class="flex-right">
            <EGoods size="xl" val="12,000" unit="P" />
          </div>
        </FlexGroup>
      </div>
      <ColorBox color="line-light-gray" size="lg" class="side-zero">
        <div class="bar-flex-group">
          <div class="bar-item">
            <NuxtLink class="link-service-menu" to="/keep/home">
              <div class="bar-text">
                쏘옥보관
              </div>
              <EGoods val="15" />
            </NuxtLink>
          </div>
          <div class="bar-item">
            <NuxtLink class="link-service-menu" to="/coupon/app">
              <div class="bar-text">
                앱쿠폰
              </div>
              <EGoods val="5" />
            </NuxtLink>
          </div>
          <div class="bar-item">
            <NuxtLink class="link-service-menu" to="/coupon/store">
              <div class="bar-text">
                매장쿠폰
              </div>
              <EGoods val="3" />
            </NuxtLink>
          </div>
        </div>
      </ColorBox>
    </ContBox>
  </ContWrap>
  <ContWrap in-top="lg">
    <ContBox size="lg">
      <CtitleWrap size="md">
        <ETit type="lgCont" text="단골매장" />
      </CtitleWrap>
      <SwiperAutoWrap gap="10" class="side-zero">
        <!-- slide -->
        <swiper-slide>
          <ColorBox color="white" size="lg" class="store-bookmark">
            <CtitleWrap size="md">
              <FlexGroup>
                <div class="flex-left">
                  <div class="ctitle-md">
                    을지로 1가점
                  </div>
                </div>
                <div class="flex-right">
                  <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                  <button type="button" class="btn-bookmark">
                    <EIco name="bookmark">
                      <span class="offscreen">관심 등록</span>
                    </EIco>
                  </button>
                </div>
              </FlexGroup>
            </CtitleWrap>
            <BadgeGroup>
              <EBadge color="light-gray" badge-text="24시간" />
              <EBadge color="light-gray" badge-text="무인점포 자판기" />
              <EBadge color="light-gray" badge-text="안전상비 의약품" />
            </BadgeGroup>
          </ColorBox>
          <NuxtLink class="btn-link" to="/store/detail">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <ColorBox color="white" size="lg" class="store-bookmark">
            <CtitleWrap size="md">
              <FlexGroup>
                <div class="flex-left">
                  <div class="ctitle-md">
                    시그니처타워점
                  </div>
                </div>
                <div class="flex-right">
                  <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                  <button type="button" class="btn-bookmark">
                    <EIco name="bookmark">
                      <span class="offscreen">관심 등록</span>
                    </EIco>
                  </button>
                </div>
              </FlexGroup>
            </CtitleWrap>
            <BadgeGroup>
              <EBadge color="light-gray" badge-text="24시간" />
              <EBadge color="light-gray" badge-text="무인점포 자판기" />
              <EBadge color="light-gray" badge-text="안전상비 의약품" />
            </BadgeGroup>
          </ColorBox>
          <NuxtLink class="btn-link" to="/store/detail">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <!-- DESC :: 등록된 단골매장 2개 이상인 경우 '단골매장 추가' 미노출
          -->
          <ColorBox color="white" size="lg" class="store-bookmark">
            <div class="store-add-wrap">
              <EIco name="plus-round" />
              <div class="stext-gray70 fw-sb">
                단골매장 추가하기
              </div>
            </div>
          </ColorBox>
          <NuxtLink class="btn-link" to="/store/search">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <!-- // slide -->
      </SwiperAutoWrap>
    </ContBox>
    <ContBox size="lg">
      <CtitleWrap size="md">
        <ETit type="lgCont" text="주문관리" />
      </CtitleWrap>
      <ColorBox color="white" size="lg">
        <GridListWrap gap="lg" col="2">
          <li class="item-grid">
            <NuxtLink class="my-service-link" to="/my/order/home">
              <EIco name="history" />
              <span class="stext-lg-black fw-md">주문내역</span>
            </NuxtLink>
          </li>
          <li class="item-grid">
            <NuxtLink class="my-service-link" to="/cart">
              <EIco name="cart" />
              <span class="stext-lg-black fw-md">장바구니</span>
            </NuxtLink>
          </li>
          <li class="item-grid">
            <NuxtLink class="my-service-link" to="/my/mobile-receipt">
              <EIco name="receipt" />
              <span class="stext-lg-black fw-md">모바일영수증</span>
            </NuxtLink>
          </li>
          <li class="item-grid">
            <NuxtLink class="my-service-link" to="/delivery/history">
              <EIco name="delivery-box" />
              <span class="stext-lg-black fw-md">택배이용내역</span>
            </NuxtLink>
          </li>
        </GridListWrap>
      </ColorBox>
    </ContBox>
    <ContBox size="lg">
      <CtitleWrap size="md">
        <ETit type="lgCont" text="결제 정보 관리" />
      </CtitleWrap>
      <ColorBox color="white" size="zero">
        <RowListWrap gap="line">
          <li class="item-md-link">
            <ETBtn tag="a" size="sm" type="right-arw" to="/my/payment">
              <span class="text">결제수단 관리</span>
            </ETBtn>
          </li>
          <li class="item-md-link">
            <ETBtn tag="a" size="sm" type="right-arw" to="/my/receipt-number">
              <span class="text">현금영수증 관리</span>
            </ETBtn>
          </li>
          <li class="item-md-link">
            <ETBtn tag="a" size="sm" type="right-arw" target="_blank" to="javascript:">
              <span class="text">L.PAY 간편결제 관리</span>
            </ETBtn>
          </li>
        </RowListWrap>
      </ColorBox>
    </ContBox>
    <ContBox size="lg">
      <CtitleWrap size="md">
        <ETit type="lgCont" text="혜택/활동 관리" />
      </CtitleWrap>
      <ColorBox color="white" size="zero">
        <RowListWrap gap="line">
          <li class="item-md-link">
            <ETBtn tag="a" size="sm" type="right-arw" to="javascript:">
              <span class="text">출석체크</span>
            </ETBtn>
          </li>
          <li class="item-md-link">
            <ETBtn tag="a" size="sm" type="right-arw" to="/event/participate">
              <span class="text">참여중인 이벤트</span>
            </ETBtn>
          </li>
          <li class="item-md-link">
            <ETBtn tag="a" size="sm" type="right-arw" to="/my/activity/wish">
              <span class="text">찜 관리</span>
            </ETBtn>
          </li>
          <li class="item-md-link">
            <ETBtn tag="a" size="sm" type="right-arw" to="/my/activity/review/product">
              <span class="text">상품 리뷰관리</span>
            </ETBtn>
          </li>
          <li class="item-md-link">
            <ETBtn tag="a" size="sm" type="right-arw" to="/my/activity/review/store">
              <span class="text">매장 리뷰관리</span>
            </ETBtn>
          </li>
        </RowListWrap>
      </ColorBox>
    </ContBox>
    <ContBox size="lg">
      <CtitleWrap size="md">
        <ETit type="lgCont" text="내 정보 관리" />
      </CtitleWrap>
      <ColorBox color="white" size="zero">
        <RowListWrap gap="line">
          <li class="item-md-link">
            <ETBtn tag="a" size="sm" type="right-arw" to="/my/my-info/change">
              <span class="text">회원정보 변경</span>
            </ETBtn>
          </li>
          <li class="item-md-link">
            <ETBtn tag="a" size="sm" type="right-arw" to="/my/address">
              <span class="text">주소록 관리</span>
            </ETBtn>
          </li>
        </RowListWrap>
      </ColorBox>
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
            <ETBtn tag="a" size="sm" type="right-arw" target="_blank" to="https://m.7-eleven.co.kr:444/franchise/advice/cvmsForm.asp">
              <span class="text">고객의 소리</span>
            </ETBtn>
          </li>
        </RowListWrap>
      </ColorBox>
    </ContBox>
    <BtnWrap type="full" size="xl">
      <div class="bar-lg-group">
        <ETBtn tag="a" size="sm" to="/my/certify-employee">
          <span class="text">임직원 인증</span>
          <EIco name="arw-right" color="gray" size="xs" />
        </ETBtn>
        <ETBtn tag="a" size="sm" to="/my/certify-owner">
          <span class="text">경영주 인증</span>
          <EIco name="arw-right" color="gray" size="xs" />
        </ETBtn>
      </div>
    </BtnWrap>
    <BtnWrap size="lg">
      <EBtn tag="a" color="line-gray" size="md" to="javascript:">
        <span class="text">앱설정</span>
      </EBtn>
      <EBtn color="gray" size="md">
        <span class="text">로그아웃</span>
      </EBtn>
    </BtnWrap>
  </ContWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: "마이페이지",
  hideRightHeader: ["home"],
});
</script>

<style lang="scss" scoped>
@import url('/assets/css/pages/my.scss');
</style>
