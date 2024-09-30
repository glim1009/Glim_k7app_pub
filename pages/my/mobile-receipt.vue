<template>
  <ContWrap type="white" in-top="zero" in-bottom="zero">
    <div class="month-picker-wrap">
      <button
        class="btn-month-prev"
        type="button"
        :disabled="monthActiveIdx === 0" @click="monthActiveIdx = monthActiveIdx > 0 ? monthActiveIdx - 1 : monthActiveIdx"
      >
        <span class="offscreen">이전</span>
      </button>
      <span class="date-group">
        <span class="year">2024년</span>
        <!-- DESC :: {{ 기준 월 + index }} index 컨텐츠 노출  -->
        <span class="month">{{ 3 + monthActiveIdx }}월</span>
      </span>
      <button
        class="btn-month-next"
        type="button"
        :disabled="monthActiveIdx === 2" @click="monthActiveIdx = monthActiveIdx !== 2 ? monthActiveIdx + 1 : monthActiveIdx"
      >
        <span class="offscreen">다음</span>
      </button>
    </div>
  </ContWrap>
  <ContWrap>
    <ContBox size="md">
      <div v-if="isData" class="list-header">
        <FlexGroup align="center">
          <div class="flex-left">
            <div class="goods-group">
              <EGoods val="8" unit="건" />
            </div>
          </div>
          <div class="flex-right">
            <div class="goods-group">
              <span class="label fw-rgl">합계 </span>
              <EGoods size="md" unit="원" class="fc-spot">
                <span class="val fw-sb">25,000</span>
              </EGoods>
            </div>
          </div>
        </FlexGroup>
      </div>
      <RowListWrap v-if="isData && monthActiveIdx === 0" gap="md">
        <li class="item-box-arr-link">
          <ColorBox color="white" size="lg">
            <div class="box-arr-area">
              <CtitleWrap size="md">
                <div class="receipt-date">
                  2024.03.28 14:00
                </div>
                <ETit type="place" text="세븐일레븐 시그니처타워점" />
              </CtitleWrap>
              <div class="stext-lg fw-md">
                10,000원 구매
              </div>
            </div>
            <button type="button" class="btn-link" @click="openMobileReceiptDetail">
              <span class="offscreen">모바일 영수증 자세히 보기</span>
            </button>
          </ColorBox>
        </li>
        <li class="item-box-arr-link">
          <ColorBox color="white" size="lg">
            <div class="box-arr-area">
              <CtitleWrap size="md">
                <div class="receipt-date">
                  2024.03.28 14:00
                </div>
                <ETit type="place" text="세븐일레븐 시그니처타워점" />
              </CtitleWrap>
              <div class="stext-lg fw-md">
                10,000원 구매
              </div>
            </div>
            <button type="button" class="btn-link" @click="openMobileReceiptDetail">
              <span class="offscreen">모바일 영수증 자세히 보기</span>
            </button>
          </ColorBox>
        </li>
        <li class="item-box-arr-link">
          <ColorBox color="white" size="lg">
            <div class="box-arr-area">
              <CtitleWrap size="md">
                <div class="receipt-date">
                  2024.03.28 14:00
                </div>
                <ETit type="place" text="세븐일레븐 시그니처타워점" />
              </CtitleWrap>
              <div class="stext-lg fw-md">
                10,000원 구매
              </div>
            </div>
            <button type="button" class="btn-link" @click="openMobileReceiptDetail">
              <span class="offscreen">모바일 영수증 자세히 보기</span>
            </button>
          </ColorBox>
        </li>
      </RowListWrap>
      <RowListWrap v-if="isData && monthActiveIdx === 1" gap="md">
        <li class="item-box-arr-link">
          <ColorBox color="white" size="lg">
            <div class="box-arr-area">
              <CtitleWrap size="md">
                <div class="receipt-date">
                  2024.04.28 14:00
                </div>
                <ETit type="place" text="세븐일레븐 시그니처타워점" />
              </CtitleWrap>
              <div class="stext-lg fw-md">
                10,000원 구매
              </div>
            </div>
            <button type="button" class="btn-link" @click="openMobileReceiptDetail">
              <span class="offscreen">모바일 영수증 자세히 보기</span>
            </button>
          </ColorBox>
        </li>
        <li class="item-box-arr-link">
          <ColorBox color="white" size="lg">
            <div class="box-arr-area">
              <CtitleWrap size="md">
                <div class="receipt-date">
                  2024.04.28 14:00
                </div>
                <ETit type="place" text="세븐일레븐 시그니처타워점" />
              </CtitleWrap>
              <div class="stext-lg fw-md">
                10,000원 구매
              </div>
            </div>
            <button type="button" class="btn-link" @click="openMobileReceiptDetail">
              <span class="offscreen">모바일 영수증 자세히 보기</span>
            </button>
          </ColorBox>
        </li>
        <li class="item-box-arr-link">
          <ColorBox color="white" size="lg">
            <div class="box-arr-area">
              <CtitleWrap size="md">
                <div class="receipt-date">
                  2024.04.28 14:00
                </div>
                <ETit type="place" text="세븐일레븐 시그니처타워점" />
              </CtitleWrap>
              <div class="stext-lg fw-md">
                10,000원 구매
              </div>
            </div>
            <button type="button" class="btn-link" @click="openMobileReceiptDetail">
              <span class="offscreen">모바일 영수증 자세히 보기</span>
            </button>
          </ColorBox>
        </li>
      </RowListWrap>
      <RowListWrap v-if="isData && monthActiveIdx === 2" gap="md">
        <li class="item-box-arr-link">
          <ColorBox color="white" size="lg">
            <div class="box-arr-area">
              <CtitleWrap size="md">
                <div class="receipt-date">
                  2024.05.28 14:00
                </div>
                <ETit type="place" text="세븐일레븐 시그니처타워점" />
              </CtitleWrap>
              <div class="stext-lg fw-md">
                10,000원 구매
              </div>
            </div>
            <button type="button" class="btn-link" @click="openMobileReceiptDetail">
              <span class="offscreen">모바일 영수증 자세히 보기</span>
            </button>
          </ColorBox>
        </li>
        <li class="item-box-arr-link">
          <ColorBox color="white" size="lg">
            <div class="box-arr-area">
              <CtitleWrap size="md">
                <div class="receipt-date">
                  2024.05.28 14:00
                </div>
                <ETit type="place" text="세븐일레븐 시그니처타워점" />
              </CtitleWrap>
              <div class="stext-lg fw-md">
                10,000원 구매
              </div>
            </div>
            <button type="button" class="btn-link" @click="openMobileReceiptDetail">
              <span class="offscreen">모바일 영수증 자세히 보기</span>
            </button>
          </ColorBox>
        </li>
        <li class="item-box-arr-link">
          <ColorBox color="white" size="lg">
            <div class="box-arr-area">
              <CtitleWrap size="md">
                <div class="receipt-date">
                  2024.05.28 14:00
                </div>
                <ETit type="place" text="세븐일레븐 시그니처타워점" />
              </CtitleWrap>
              <div class="stext-lg fw-md">
                10,000원 구매
              </div>
            </div>
            <button type="button" class="btn-link" @click="openMobileReceiptDetail">
              <span class="offscreen">모바일 영수증 자세히 보기</span>
            </button>
          </ColorBox>
        </li>
      </RowListWrap>
      <InfoGuideWrap
        v-if="isNoData"
        type="no-data"
        name="history"
        desc="영수증 내역이 없습니다."
      />
    </ContBox>
    <ContBox size="md">
      <CtitleWrap size="sm">
        <ETit type="cont" text="유의사항" />
      </CtitleWrap>
      <RowListWrap gap="sm">
        <li class="dot-text-sm">
          결제 시 세븐일레븐에서L.POINT로 적립/사용한 내역만 표기됩니다.
        </li>
        <li class="dot-text-sm">
          최근 3개월 이내의 거래만 조회 가능합니다.
        </li>
      </RowListWrap>
    </ContBox>
  </ContWrap>

  <!-- pop : 쿠본 보기 -->
  <PopMyMobileReceiptDetail v-model:sta="popMobileReceiptDetail" />
  <!-- // pop : 쿠본 보기 -->
</template>

<script setup lang="ts">
definePageMeta({
  title: '모바일 영수증',
  hideRightHeader: ['home'],
});

const monthActiveIdx = ref(0); // 임시 초기 셋팅 (0~2)

const isData = ref(true);
const isNoData = ref(true);

// 쿠본 보기 팝업
const popMobileReceiptDetail = ref({ open: false });
const openMobileReceiptDetail = () => popMobileReceiptDetail.value.open = true;
</script>

<style lang="scss" scoped>
@import "assets/css/pages/my.scss";
</style>
