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
         <FlexGroup align="start">
           <div class="flex-left">
             <CtitleWrap size="zero">
               <ETit type="box" text="을지로 1가점" />
               <div class="stext-lg">파니니EPL축구카드36팩 외 3건</div>
             </CtitleWrap>
           </div>
           <div class="flex-right">
             <div class="stext fc-gray60">2024.07.21 구매</div>
           </div>
         </FlexGroup>
          <BtnWrap size="sm">
            <EBtn color="line-light-gray" size="sm" @click="openWriteReview">
              <span class="text">리뷰 작성 (D-5)</span>
            </EBtn>
          </BtnWrap>
        </ColorBox>
        <ColorBox color="white" size="lg">
          <FlexGroup align="start">
            <div class="flex-left">
              <CtitleWrap size="zero">
                <ETit type="box" text="을지로 1가점" />
                <div class="stext-lg">파니니EPL축구카드36팩 외 3건</div>
              </CtitleWrap>
            </div>
            <div class="flex-right">
              <div class="stext fc-gray60">2024.07.21 구매</div>
            </div>
          </FlexGroup>
          <BtnWrap size="sm">
            <EBtn color="line-light-gray" size="sm" @click="openWriteReview">
              <span class="text">리뷰 작성 (D-5)</span>
            </EBtn>
          </BtnWrap>
        </ColorBox>
        <ColorBox color="white" size="lg">
          <FlexGroup align="start">
            <div class="flex-left">
              <CtitleWrap size="zero">
                <ETit type="box" text="을지로 1가점" />
                <div class="stext-lg">파니니EPL축구카드36팩 외 3건</div>
              </CtitleWrap>
            </div>
            <div class="flex-right">
              <div class="stext fc-gray60">2024.07.21 구매</div>
            </div>
          </FlexGroup>
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
        sub-desc="매장 이용 후 리뷰를 작성해 주세요."
      />
    </ContBox>
    <!-- // 데이터 없음 -->
  </ContWrap>

  <!-- pop : 리뷰작성 팝업 -->
  <PopCommWriteReview v-model:sta="popWriteReview" is-store />
  <!-- // pop : 리뷰작성 팝업 -->

</template>

<script setup lang="ts">
const isData = ref(true); // 임시 : 리뷰 데이터 확인을 위해 추가
const isNoData = ref(true); // 임시 : 리뷰 데이터 없음 확인을 위해 추가

// 리뷰작성 팝업
const popWriteReview = ref({ open: false });
const openWriteReview = () => popWriteReview.value.open = true;
</script>

