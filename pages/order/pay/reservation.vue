<template>
  <ContWrap>
    <RowListWrap gap="2xl">
      <li class="item">
        <FoldToggleBox open>
          <template #header>
            <div class="fold-title">
              <FlexGroup>
                <div class="flex-left">
                  <ETit text="할인수단" type="fold" />
                </div>
                <div class="flex-right">
                  <EGoods size="md" val="-0" unit="원" class="fw-md fc-red" />
                </div>
              </FlexGroup>
            </div>
          </template>
          <template #content>
            <ColorBox color="white" size="lg">
              <RowListWrap gap="line">
                <li class="item-pay-discount">
                  <FlexGroup>
                    <div class="flex-left">
                      <ETit text="구독할인" type="goods" />
                    </div>
                    <div class="flex-right">
                      <span class="stext"><span class="fc-black">가능 1개</span> / 전체 2개</span>
                      <EBtn color="line-light-gray" size="xs">
                        <span class="text">사용</span>
                      </EBtn>
                    </div>
                  </FlexGroup>
                  <div class="pay-discount-box">
                    <FlexGroup align="center">
                      <div class="flex-left">
                        <EGoods size="sm" val="1,000" unit="원" />
                      </div>
                      <div class="flex-right">
                        <button type="button" class="btn-delete">
                          <EIco name="close" size="xs">
                            <span class="offscreen">할인 취소</span>
                          </EIco>
                        </button>
                      </div>
                    </FlexGroup>
                  </div>
                </li>
                <li class="item-pay-discount">
                  <FlexGroup>
                    <div class="flex-left">
                      <ETit text="쿠폰" type="goods" />
                    </div>
                    <div class="flex-right">
                      <span class="stext"><span class="fc-black">가능 1개</span> / 전체 7개</span>
                      <EBtn color="line-light-gray" size="xs">
                        <span class="text">사용</span>
                      </EBtn>
                    </div>
                  </FlexGroup>
                  <div class="pay-discount-box">
                    <FlexGroup align="center">
                      <div class="flex-left">
                        <EGoods size="sm" val="1,000" unit="원" />
                      </div>
                      <div class="flex-right">
                        <button type="button" class="btn-delete">
                          <EIco name="close" size="xs">
                            <span class="offscreen">할인 취소</span>
                          </EIco>
                        </button>
                      </div>
                    </FlexGroup>
                  </div>
                </li>
                <li class="item-pay-discount">
                  <FlexGroup>
                    <div class="flex-left">
                      <ETit text="L.POINT" type="goods" />
                    </div>
                    <div class="flex-right">
                      <span class="stext">사용가능 <EGoods val="10,000" unit="P" /></span>
                      <EBtn color="line-light-gray" size="xs">
                        <span class="text">사용</span>
                      </EBtn>
                    </div>
                  </FlexGroup>
                  <div class="pay-discount-box">
                    <FlexGroup align="center">
                      <div class="flex-left">
                        <EGoods size="sm" val="1,000" unit="원" />
                      </div>
                      <div class="flex-right">
                        <button type="button" class="btn-delete">
                          <EIco name="close" size="xs">
                            <span class="offscreen">할인 취소</span>
                          </EIco>
                        </button>
                      </div>
                    </FlexGroup>
                  </div>
                </li>
                <li class="item-pay-discount">
                  <FlexGroup>
                    <div class="flex-left">
                      <ETit text="금액권" type="goods" />
                    </div>
                    <div class="flex-right">
                      <span class="stext">사용가능 <EGoods val="17,500" unit="P" /></span>
                      <EBtn color="line-light-gray" size="xs">
                        <span class="text">사용</span>
                      </EBtn>
                    </div>
                  </FlexGroup>
                  <div class="pay-discount-box">
                    <FlexGroup align="center">
                      <div class="flex-left">
                        <EGoods size="sm" val="1,000" unit="원" />
                      </div>
                      <div class="flex-right">
                        <button type="button" class="btn-delete">
                          <EIco name="close" size="xs">
                            <span class="offscreen">할인 취소</span>
                          </EIco>
                        </button>
                      </div>
                    </FlexGroup>
                  </div>
                </li>
              </RowListWrap>
            </ColorBox>
            <div class="cash-receipt-info-wrap">
              <CtitleWrap>
                <ETit text="현금영수증" type="fold" />
              </CtitleWrap>
              <ColorBox color="white" size="lg">
                <CtitleWrap size="zero">
                  <FlexGroup>
                    <div class="flex-left">
                      <ETit text="현금영수증" type="form" />
                    </div>
                    <div class="flex-right">
                      <GridListWrap col="2">
                        <li class="item-grid">
                          <span class="ui-rdo">
                            <input id="cashReceiptRdo01" v-model="cashReceiptRadio" type="radio" name="cashReceiptRdo01" value="receiptApply" />
                            <label for="cashReceiptRdo01"><span class="text-md">신청</span></label>
                          </span>
                        </li>
                        <li class="item-grid">
                          <span class="ui-rdo">
                            <input id="cashReceiptRdo02" v-model="cashReceiptRadio" type="radio" name="cashReceiptRdo01" value="receiptNotApply" />
                            <label for="cashReceiptRdo02"><span class="text-md">미신청</span></label>
                          </span>
                        </li>
                      </GridListWrap>
                    </div>
                  </FlexGroup>
                </CtitleWrap>
                <div v-show="cashReceiptRadio === 'receiptApply'">
                  <ColorBox color="light-gray" size="sm">
                    <FlexGroup>
                      <div class="flex-left">
                        <div class="stext fw-sb">
                          개인 소득공제
                        </div>
                      </div>
                      <div class="flex-right">
                        <div class="text-align-box">
                          <div class="stext">
                            313-31-12345
                          </div>
                          <EBtn color="line-light-gray" size="xs">
                            <span class="text">변경</span>
                          </EBtn>
                        </div>
                      </div>
                    </FlexGroup>
                  </ColorBox>
                  <ColorBox color="light-gray" size="sm">
                    <FlexGroup>
                      <div class="flex-left">
                        <div class="stext fw-sb">
                          사업자 소득공제
                        </div>
                      </div>
                      <div class="flex-right">
                        <div class="text-align-box">
                          <div class="stext">
                            313-31-12345
                          </div>
                          <EBtn color="line-light-gray" size="xs">
                            <span class="text">변경</span>
                          </EBtn>
                        </div>
                      </div>
                    </FlexGroup>
                  </ColorBox>
                  <ColorBox color="light-gray" size="sm">
                    <BtnWrap type="full">
                      <EBtn color="line-light-gray" size="xs">
                        <span class="text">현금영수증 발급정보 등록</span>
                      </EBtn>
                    </BtnWrap>
                  </ColorBox>
                </div>
                <div v-show="cashReceiptRadio === 'receiptNotApply'">
                  <ColorBox color="light-gray" size="sm">
                    <FlexGroup>
                      <div class="flex-left">
                        <div class="stext fw-sb">
                          현금영수증 신청 안함
                        </div>
                      </div>
                      <div class="flex-right">
                        <EBtn color="line-light-gray" size="xs">
                          <span class="text">변경</span>
                        </EBtn>
                      </div>
                    </FlexGroup>
                  </ColorBox>
                </div>
              </ColorBox>
            </div>
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
                <li class="item-order-pay">
                  <span class="ui-rdo">
                    <input id="orderPayRdo01" v-model="orderPayRadio" type="radio" name="orderPayRdo01" value="payCard" />
                    <label for="orderPayRdo01"><span class="text-lg">신용(체크)카드</span></label>
                  </span>
                  <div v-show="orderPayRadio === 'payCard'" class="order-pay-cont">
                    <div class="ui-select">
                      <select title="신용(체크)카드 선택">
                        <option>롯데카드</option>
                        <option>현대카드</option>
                        <option>국민카드</option>
                      </select>
                    </div>
                  </div>
                </li>
                <li class="item-order-pay">
                  <span class="ui-rdo">
                    <input id="orderPayRdo02" v-model="orderPayRadio" type="radio" name="orderPayRdo01" value="payLpay" />
                    <label for="orderPayRdo02"><span class="text-lg">L.PAY</span></label>
                  </span>
                </li>
                <li class="item-order-pay">
                  <span class="ui-rdo">
                    <input id="orderPayRdo03" v-model="orderPayRadio" type="radio" name="orderPayRdo01" value="payNaver" />
                    <label for="orderPayRdo03"><span class="text-lg">네이버 간편결제</span></label>
                  </span>
                  <div v-show="orderPayRadio === 'payNaver'" class="order-pay-cont">
                    <BtnWrap>
                      <EBtn color="line-light-gray" size="md">
                        <span class="text">네이버페이 카드 결제</span>
                      </EBtn>
                      <EBtn color="line-light-gray" size="md">
                        <span class="text">네이버페이 포인트 결제</span>
                      </EBtn>
                    </BtnWrap>
                  </div>
                </li>
                <li class="item-order-pay">
                  <span class="ui-rdo">
                    <input id="orderPayRdo04" v-model="orderPayRadio" type="radio" name="orderPayRdo01" value="payKakao" />
                    <label for="orderPayRdo04"><span class="text-lg">카카오페이</span></label>
                  </span>
                </li>
                <li class="item-order-pay">
                  <span class="ui-chk">
                    <input id="orderPayChk01" type="checkbox" />
                    <label for="orderPayChk01"><span class="text-sm fc-gray70">선택한 결제수단 다음에도 사용</span></label>
                  </span>
                </li>
              </RowListWrap>
              <div class="pay-info-wrap">
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
                  <EGoods val="6,400" unit="원" class="fw-md fc-spot" />
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
                        <ETit text="포장봉투" type="goods" />
                      </div>
                    </div>
                    <div class="flex-right">
                      <ETit type="goods">
                        <EGoods val="200" unit="원" />
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
                  <RowListWrap gap="sm" size="2xs">
                    <li class="item-sub-order-info">
                      <FlexGroup align="center">
                        <div class="flex-left">
                          <EIco name="bullet-order-list" />
                          <ETit text="상품할인" type="sGoods" />
                        </div>
                        <div class="flex-right">
                          <EGoods val="1,000" unit="원" />
                        </div>
                      </FlexGroup>
                    </li>
                  </RowListWrap>
                </li>
              </RowListWrap>
            </ColorBox>
          </template>
        </FoldToggleBox>
      </li>
    </RowListWrap>
  </ContWrap>
  <ContDocker>
    <BtnWrap type="full">
      <EBtn color="green" size="lg">
        <span class="text"><EGoods val="6,400" unit="원" /> 결제하기</span>
      </EBtn>
    </BtnWrap>
  </ContDocker>
</template>

<script setup lang="ts">
definePageMeta({
  title: '상품 결제',
});
</script>

<style lang="scss" scoped>
</style>
