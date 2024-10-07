<template>
  <ContWrap in-top="lg">
    <RowListWrap size="lg" gap="2xl">
      <li v-if="isPresent" class="item">
        <CtitleWrap size="zero">
          <FlexGroup>
            <div class="flex-left">
              <ETit text="받는사람" type="xlCont" />
            </div>
            <div class="flex-right">
              <div class="stext-lg fw-md">
                010-1234-5678
              </div>
            </div>
          </FlexGroup>
        </CtitleWrap>
      </li>
      <li v-if="isPresent" class="item">
        <CtitleWrap>
          <ETit text="구매상품" type="xlCont" />
        </CtitleWrap>
        <ColorBox color="white" size="lg">
          <div class="item-thumb-prod">
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <FlexGroup>
                  <div class="flex-left">
                    <BadgeGroup gap="md">
                      <EBadge color="gray" size="sm" badge-text="할인" />
                    </BadgeGroup>
                    <ETit type="prod">
                      비비고 사골컵만두국
                    </ETit>
                    <div class="stock">
                      수량 <EGoods val="2" unit="개" />
                    </div>
                  </div>
                  <div class="flex-right">
                    <div class="goods-group">
                      <EGoods type="origin" size="sm" val="3,000" unit="원" />
                      <EGoods size="md" val="2,700" unit="원" />
                    </div>
                  </div>
                </FlexGroup>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
          </div>
        </ColorBox>
      </li>
      <li v-if="isNormal" class="item">
        <FoldToggleBox>
          <template #header>
            <div class="fold-title">
              <FlexGroup>
                <div class="flex-left">
                  <ETit text="구매상품" type="fold" />
                </div>
                <div class="flex-right">
                  <div class="total-prod-count">
                    <span class="prod-name">비비고 사골컵만두국</span>
                    <span class="stext-lg">외 </span>
                    <EGoods size="md" val="3" unit="건" />
                  </div>
                </div>
              </FlexGroup>
            </div>
          </template>
          <template #content>
            <ColorBox color="white" size="lg">
              <RowListWrap gap="line">
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <FlexGroup>
                        <div class="flex-left">
                          <ETit type="prod">
                            7월 도시락 구독
                          </ETit>
                          <div class="stext">
                            (31일간, 월 1회 30% / 총 20회)
                          </div>
                        </div>
                        <div class="flex-right">
                          <div class="goods-group">
                            <span class="label">월</span>
                            <EGoods size="md" val="2,700" unit="원" />
                          </div>
                        </div>
                      </FlexGroup>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                </li>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <FlexGroup>
                        <div class="flex-left">
                          <ETit type="prod">
                            7월 도시락 구독
                          </ETit>
                          <div class="stext">
                            (31일간, 월 1회 30% / 총 20회)
                          </div>
                        </div>
                        <div class="flex-right">
                          <div class="goods-group">
                            <span class="label">월</span>
                            <EGoods size="md" val="2,700" unit="원" />
                          </div>
                        </div>
                      </FlexGroup>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                </li>
              </RowListWrap>
            </ColorBox>
          </template>
        </FoldToggleBox>
      </li>
      <li class="item">
        <FoldToggleBox open>
          <template #header>
            <div class="fold-title">
              <FlexGroup>
                <div class="flex-left">
                  <ETit text="할인수단" type="fold" />
                </div>
                <div class="flex-right">
                  <EGoods size="md" val="-6,500" unit="원" class="fw-md fc-red" />
                </div>
              </FlexGroup>
            </div>
          </template>
          <template #content>
            <ColorBox color="white" size="lg">
              <RowListWrap gap="line">
                <li class="item-sm">
                  <FlexGroup>
                    <div class="flex-left">
                      <ETit text="L.POINT" type="form" />
                    </div>
                    <div class="flex-right">
                      <div class="align-group">
                        <span class="stext">사용가능 <EGoods val="10,000" unit="P" /></span>
                        <EBtn tag="a" color="line-light-gray" size="xs" to="/common/l-point">
                          <span class="text">사용</span>
                        </EBtn>
                      </div>
                    </div>
                  </FlexGroup>
                  <div class="tag-full-box cont-discount-info">
                    <p class="stext fc-black fw-md">
                      1,000원
                    </p>
                    <button type="button" class="btn-delete">
                      <EIco name="close" color="gray" size="xs">
                        <span class="offscreen">할인 취소</span>
                      </EIco>
                    </button>
                  </div>
                </li>
              </RowListWrap>
            </ColorBox>
          </template>
        </FoldToggleBox>
      </li>
      <li class="item">
        <FoldToggleBox open>
          <template #header>
            <div class="fold-title">
              <ETit text="결제수단" type="fold" />
            </div>
          </template>
          <template #content>
            <ColorBox color="white" size="lg">
              <RowListWrap gap="line">
                <li class="item-md">
                  <span class="ui-rdo">
                    <input id="orderPayRdo01" v-model="orderPayRadio" type="radio" name="orderPayRdo01" value="payCard">
                    <label for="orderPayRdo01"><span class="text-lg">신용(체크)카드</span></label>
                  </span>
                  <div v-show="orderPayRadio === 'payCard'" class="cont-pay-info">
                    <div class="ui-select">
                      <select title="신용(체크)카드 선택">
                        <option>롯데카드</option>
                        <option>현대카드</option>
                        <option>국민카드</option>
                      </select>
                    </div>
                  </div>
                </li>
                <li class="item-md">
                  <span class="ui-rdo">
                    <input id="orderPayRdo02" v-model="orderPayRadio" type="radio" name="orderPayRdo01" value="payLpay">
                    <label for="orderPayRdo02"><span class="text-lg">L.PAY</span></label>
                  </span>
                </li>
                <li class="item-md">
                  <span class="ui-rdo">
                    <input id="orderPayRdo03" v-model="orderPayRadio" type="radio" name="orderPayRdo01" value="payNaver">
                    <label for="orderPayRdo03"><span class="text-lg">네이버 간편결제</span></label>
                  </span>
                  <div v-show="orderPayRadio === 'payNaver'" class="cont-pay-info">
                    <BtnWrap>
                      <EBtn color="line-light-gray" size="md">
                        <span class="text">네이버 카드 결제</span>
                      </EBtn>
                      <EBtn color="line-light-gray" size="md">
                        <span class="text">네이버 포인트 결제</span>
                      </EBtn>
                    </BtnWrap>
                  </div>
                </li>
                <li class="item-md">
                  <span class="ui-rdo">
                    <input id="orderPayRdo04" v-model="orderPayRadio" type="radio" name="orderPayRdo01" value="payKakao" disabled>
                    <label for="orderPayRdo04"><span class="text-lg">카카오페이</span></label>
                  </span>
                </li>
                <li class="item-md">
                  <span class="ui-chk">
                    <input id="orderPayChk01" type="checkbox">
                    <label for="orderPayChk01"><span class="text-sm fc-gray70">선택한 결제수단 다음에도 사용</span></label>
                  </span>
                </li>
              </RowListWrap>
              <div class="pay-benefit-info-wrap">
                <ColorBox color="light-green" size="sm" class="ta-center">
                  <p class="stext fw-md fc-spot">
                    삼성카드 결제 시 1,000원 캐시백
                  </p>
                </ColorBox>
              </div>
            </ColorBox>
          </template>
        </FoldToggleBox>
      </li>
      <li class="item">
        <FoldToggleBox open>
          <template #header>
            <div class="fold-title">
              <FlexGroup>
                <div class="flex-left">
                  <ETit text="결제금액" type="fold" />
                </div>
                <div class="flex-right">
                  <EGoods size="xl" val="0" unit="원" class="fc-spot" />
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
                      <ETit text="상품금액" type="goods" />
                    </div>
                    <div class="flex-right">
                      <ETit type="goods">
                        <EGoods val="40,000" unit="원" />
                      </ETit>
                    </div>
                  </FlexGroup>
                </li>
                <li class="item-order-info">
                  <FlexGroup align="center">
                    <div class="flex-left">
                      <div class="flex-left">
                        <ETit text="할인금액" type="goods" />
                      </div>
                    </div>
                    <div class="flex-right">
                      <ETit type="goods">
                        <EGoods val="1,000" unit="원" class="fc-red" />
                      </ETit>
                    </div>
                  </FlexGroup>
                </li>
              </RowListWrap>
            </ColorBox>
          </template>
        </FoldToggleBox>
      </li>
    </RowListWrap>
    <ContBox size="lg">
      <AllAgreeWrap v-model:checkCount="checkCheckBox" :index="1" :total-count="totalCheckBox">
        <ColorBox color="white" size="md">
          <div ref="agreeListRef">
            <RowListWrap gap="md">
              <li class="ui-col-item">
                <FlexGroup>
                  <div class="flex-left">
                    <span class="ui-chk">
                      <input id="agreeChk02" type="checkbox">
                      <label for="agreeChk02"><span class="text-md">개인정보 수집 및 이용동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
                    </span>
                  </div>
                  <div class="flex-right">
                    <ETBtn size="xs" @click="openPersonalInfoAgree">
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
                      <input id="agreeChk01" type="checkbox" disabled>
                      <label for="agreeChk01"><span class="text-md">PG사 전자금융거래 약관동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
                    </span>
                  </div>
                  <div class="flex-right">
                    <ETBtn tag="a" size="xs" to="javascript:">
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
                      <input id="agreeChk01" type="checkbox" disabled>
                      <label for="agreeChk01"><span class="text-md">PG사 개인정보 수집 및 이용동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
                    </span>
                  </div>
                  <div class="flex-right">
                    <ETBtn tag="a" size="xs" to="javascript:">
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
                      <input id="agreeChk01" type="checkbox" disabled>
                      <label for="agreeChk01"><span class="text-md">PG사 개인정보 제3자 제공동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
                    </span>
                  </div>
                  <div class="flex-right">
                    <ETBtn tag="a" size="xs" to="javascript:">
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
      <RowListWrap size="xs">
        <li class="dot-text-sm">
          구매조건을 확인했으며 결제 진행에 동의합니다.
        </li>
      </RowListWrap>
    </ContBox>
  </ContWrap>
  <ContDocker>
    <BtnWrap type="auto">
      <EBtn tag="a" color="line-light-gray" size="lg" to="/cart">
        <span class="text">취소</span>
      </EBtn>
      <EBtn tag="a" color="green" size="lg" to="javascript:">
        <span class="text"><EGoods val="6,400" unit="원" /> 결제하기</span>
      </EBtn>
    </BtnWrap>
  </ContDocker>

  <!-- pop : 개인정보 수집 및 이용약관 -->
  <PopTermsPersonalInfoAgree v-model:sta="popPersonalInfoAgree" />
  <!-- // pop : 개인정보 수집 및 이용약관 -->
</template>

<script setup lang="ts">
definePageMeta({
  title: "상품 결제",
});

const orderPayRadio = ref();

const isNormal = ref(true);
const isPresent = ref(true);

// 개인정보 수집 및 이용약관 팝업
const popPersonalInfoAgree = ref({ open: false });
const openPersonalInfoAgree = () => popPersonalInfoAgree.value.open = true;

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
@import url("assets/css/pages/order.scss");
</style>
