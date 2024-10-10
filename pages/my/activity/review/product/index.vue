<template>
  <ContWrap>
    <!-- 데이터 있음 -->
    <ContBox v-if="isData">
      <div class="list-header">
        <FlexGroup>
          <div class="flex-left">
            <div class="goods-group">
              <EGoods val="8" unit="건" />
            </div>
          </div>
        </FlexGroup>
      </div>
      <ContBox size="zero" gap="sm">
        <ColorBox color="white" size="lg">
          <!-- thumb-prod-flex -->
          <div class="thumb-prod-flex">
            <EThumbProdBox size="md">
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup>
                <EBadge color="light-green" size="md" badge-text="당일픽업" />
              </BadgeGroup>
              <ETit type="prod">
                파니니 EPL 축구카드 36팩
              </ETit>
              <div class="stext-gray70">
                2024.06.28 구매
              </div>
            </div>
          </div>
          <!-- // thumb-prod-flex -->
          <BtnWrap size="sm">
            <EBtn color="line-light-gray" size="sm" @click="openWriteReview">
              <span class="text">리뷰 작성 (D-5)</span>
            </EBtn>
          </BtnWrap>
        </ColorBox>
        <ColorBox color="white" size="lg">
          <!-- thumb-prod-flex -->
          <div class="thumb-prod-flex">
            <EThumbProdBox size="md">
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup>
                <EBadge color="light-green" size="md" badge-text="사전예약" />
              </BadgeGroup>
              <ETit type="prod">
                파니니 EPL 축구카드 36팩
              </ETit>
              <div class="stext-gray70">
                2024.06.28 구매
              </div>
            </div>
          </div>
          <!-- // thumb-prod-flex -->
          <BtnWrap size="sm">
            <EBtn color="line-light-gray" size="sm" @click="openWriteReview">
              <span class="text">리뷰 작성 (D-5)</span>
            </EBtn>
          </BtnWrap>
        </ColorBox>
        <ColorBox color="white" size="lg">
          <!-- thumb-prod-flex -->
          <div class="thumb-prod-flex">
            <EThumbProdBox size="md">
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup>
                <EBadge color="light-green" size="md" badge-text="교환권" />
              </BadgeGroup>
              <ETit type="prod">
                파니니 EPL 축구카드 36팩
              </ETit>
              <div class="stext-gray70">
                2024.06.28 구매
              </div>
            </div>
          </div>
          <!-- // thumb-prod-flex -->
          <BtnWrap size="sm">
            <EBtn color="line-light-gray" size="sm" @click="openWriteReview">
              <span class="text">리뷰 작성 (D-5)</span>
            </EBtn>
          </BtnWrap>
        </ColorBox>
        <ColorBox color="white" size="lg">
          <!-- thumb-prod-flex -->
          <div class="thumb-prod-flex">
            <EThumbProdBox size="md">
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup>
                <EBadge color="light-green" size="md" badge-text="사전예약" />
              </BadgeGroup>
              <ETit type="prod">
                파니니 EPL 축구카드 36팩
              </ETit>
              <div class="stext-gray70">
                2024.06.28 선물
              </div>
            </div>
          </div>
          <!-- // thumb-prod-flex -->
          <BtnWrap size="sm">
            <EBtn color="line-light-gray" size="sm" @click="openWriteReview">
              <span class="text">리뷰 작성 (D-5)</span>
            </EBtn>
          </BtnWrap>
        </ColorBox>
        <ColorBox color="white" size="lg">
          <!-- thumb-prod-flex -->
          <div class="thumb-prod-flex">
            <EThumbProdBox size="md">
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup>
                <EBadge color="light-green" size="md" badge-text="교환권" />
              </BadgeGroup>
              <ETit type="prod">
                파니니 EPL 축구카드 36팩
              </ETit>
              <div class="stext-gray70">
                2024.06.28 구매
              </div>
            </div>
          </div>
          <!-- // thumb-prod-flex -->
          <BtnWrap size="sm">
            <EBtn color="line-light-gray" size="sm" @click="openWriteReview">
              <span class="text">리뷰 작성 (D-5)</span>
            </EBtn>
          </BtnWrap>
        </ColorBox>
      </ContBox>
    </ContBox>
    <!-- // 데이터 있음 -->
    <!-- 데이터 없음 -->
    <ContBox v-if="isNoData">
      <InfoGuideWrap
        type="no-data"
        name="review"
        desc="리뷰가 없습니다."
        sub-desc="상품 구매 후 리뷰를 작성해 주세요."
      />
    </ContBox>
    <!-- // 데이터 없음 -->
  </ContWrap>

  <!-- pop : 리뷰작성 팝업 -->
  <PopCommWriteReview v-model:sta="popWriteReview" :active-type="WriteReviewType" />
  <!-- // pop : 리뷰작성 팝업 -->
</template>

<script setup lang="ts">
const isData = ref(true); // 임시 : 리뷰 데이터 확인을 위해 추가
const isNoData = ref(true); // 임시 : 리뷰 데이터 없음 확인을 위해 추가

// 리뷰작성 팝업
const popWriteReview = ref({ open: false });

const WriteReviewType = ref<string>();
const openWriteReview = (type: string = "prod") => {
  WriteReviewType.value = type;
  popWriteReview.value.open = true;
};

const closeWriteReview = () => popWriteReview.value.open = false;
</script>
