<template>
  <ContWrap in-top="lg">
    <RowListWrap gap="2xl">
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
                  <img src="../../../assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
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
              <ColorBox color="light-gray" size="sm" class="ta-center">
                <TableWrap type="info" gap="sm" size="md" table-name="픽업정보">
                  <colgroup>
                    <col style="width: 55px;" />
                    <col style="width: auto;" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        픽업일시
                      </th>
                      <td>2024.06.29(수) 15:00 ~ 18:00</td>
                    </tr>
                  </tbody>
                </TableWrap>
              </ColorBox>
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
            <ContBox gap="md">
              <ColorBox color="white" size="lg">
                <div class="box-prod-header">
                  <FlexGroup>
                    <div class="flex-left">
                      <ETit type="place">
                        세븐일레븐 강남점
                      </ETit>
                    </div>
                    <div class="flex-right">
                      <EGoods size="md" val="18,500" unit="원" class="fc-spot fw-sb" />
                    </div>
                  </FlexGroup>
                </div>
                <RowListWrap gap="line">
                  <li class="item-thumb-prod">
                    <!-- thumb-prod-flex -->
                    <div class="thumb-prod-flex">
                      <EThumbProdBox size="md">
                        <template #thumb>
                          <img src="../../../assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
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
                      <ColorBox color="light-gray" size="sm" class="ta-center">
                        <TableWrap type="info" gap="sm" size="md" table-name="픽업정보">
                          <colgroup>
                            <col style="width: 55px;" />
                            <col style="width: auto;" />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th scope="row">
                                픽업일시
                              </th>
                              <td>2024.06.29(수) 15:00 ~ 18:00</td>
                            </tr>
                          </tbody>
                        </TableWrap>
                      </ColorBox>
                    </div>
                    <!-- // thumb-prod-flex -->
                  </li>
                  <li class="item-thumb-prod">
                    <!-- thumb-prod-flex -->
                    <div class="thumb-prod-flex">
                      <EThumbProdBox size="md">
                        <template #thumb>
                          <img src="../../../assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
                        </template>
                      </EThumbProdBox>
                      <div class="info-box">
                        <FlexGroup>
                          <div class="flex-left">
                            <BadgeGroup gap="md">
                              <EBadge color="gray" size="sm" badge-text="할인" />
                            </BadgeGroup>
                            <ETit type="prod">
                              제육&콘 참치마요 덮밥
                            </ETit>
                            <div class="stext">
                              증정: 비비고 사골컵 된장국
                            </div>
                            <div class="stext">
                              증정: 비비고 사골컵 된장국
                            </div>
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
                      <ColorBox color="light-gray" size="sm" class="ta-center">
                        <TableWrap type="info" gap="sm" size="md" table-name="픽업정보">
                          <colgroup>
                            <col style="width: 55px;" />
                            <col style="width: auto;" />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th scope="row">
                                픽업일시
                              </th>
                              <td>2024.06.29(수) 15:00 ~ 18:00</td>
                            </tr>
                          </tbody>
                        </TableWrap>
                      </ColorBox>
                    </div>
                    <!-- // thumb-prod-flex -->
                  </li>
                  <li class="item-thumb-prod">
                    <!-- thumb-prod-flex -->
                    <div class="thumb-prod-flex">
                      <EThumbProdBox size="md">
                        <template #thumb>
                          <img src="../../../assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
                        </template>
                      </EThumbProdBox>
                      <div class="info-box">
                        <FlexGroup>
                          <div class="flex-left">
                            <ETit type="prod">
                              창녕 마늘 떡갈비 버거
                            </ETit>
                            <div class="stock">
                              수량 <EGoods val="2" unit="개" />
                            </div>
                          </div>
                          <div class="flex-right">
                            <div class="goods-group">
                              <EGoods size="md" val="2,700" unit="원" />
                            </div>
                          </div>
                        </FlexGroup>
                      </div>
                      <ColorBox color="light-gray" size="sm" class="ta-center">
                        <TableWrap type="info" gap="sm" size="md" table-name="픽업정보">
                          <colgroup>
                            <col style="width: 55px;" />
                            <col style="width: auto;" />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th scope="row">
                                픽업일시
                              </th>
                              <td>2024.06.29(수) 15:00 ~ 18:00</td>
                            </tr>
                          </tbody>
                        </TableWrap>
                      </ColorBox>
                    </div>
                    <!-- // thumb-prod-flex -->
                  </li>
                </RowListWrap>
              </ColorBox>
              <ColorBox color="white" size="lg">
                <div class="box-prod-header">
                  <FlexGroup>
                    <div class="flex-left">
                      <ETit type="place">
                        시그니처타워점
                      </ETit>
                    </div>
                    <div class="flex-right">
                      <EGoods size="md" val="18,500" unit="원" class="fc-spot fw-sb" />
                    </div>
                  </FlexGroup>
                </div>
                <RowListWrap gap="line">
                  <li class="item-thumb-prod">
                    <!-- thumb-prod-flex -->
                    <div class="thumb-prod-flex">
                      <EThumbProdBox size="md">
                        <template #thumb>
                          <img src="../../../assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
                        </template>
                      </EThumbProdBox>
                      <div class="info-box">
                        <FlexGroup>
                          <div class="flex-left">
                            <BadgeGroup gap="md">
                              <EBadge color="gray" size="sm" badge-text="할인" />
                            </BadgeGroup>
                            <ETit type="prod">
                              제육&콘 참치마요 덮밥
                            </ETit>
                            <div class="stext">
                              증정: 비비고 사골컵 된장국
                            </div>
                            <div class="stext">
                              증정: 비비고 사골컵 된장국
                            </div>
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
                      <ColorBox color="light-gray" size="sm" class="ta-center">
                        <TableWrap type="info" gap="sm" size="md" table-name="픽업정보">
                          <colgroup>
                            <col style="width: 55px;" />
                            <col style="width: auto;" />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th scope="row">
                                픽업일시
                              </th>
                              <td>2024.06.29(수) 15:00 ~ 18:00</td>
                            </tr>
                          </tbody>
                        </TableWrap>
                      </ColorBox>
                    </div>
                    <!-- // thumb-prod-flex -->
                  </li>
                  <li class="item-thumb-prod">
                    <!-- thumb-prod-flex -->
                    <div class="thumb-prod-flex">
                      <EThumbProdBox size="md">
                        <template #thumb>
                          <img src="../../../assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
                        </template>
                      </EThumbProdBox>
                      <div class="info-box">
                        <FlexGroup>
                          <div class="flex-left">
                            <ETit type="prod">
                              창녕 마늘 떡갈비 버거
                            </ETit>
                            <div class="stock">
                              수량 <EGoods val="2" unit="개" />
                            </div>
                          </div>
                          <div class="flex-right">
                            <div class="goods-group">
                              <EGoods size="md" val="2,700" unit="원" />
                            </div>
                          </div>
                        </FlexGroup>
                      </div>
                      <ColorBox color="light-gray" size="sm" class="ta-center">
                        <TableWrap type="info" gap="sm" size="md" table-name="픽업정보">
                          <colgroup>
                            <col style="width: 55px;" />
                            <col style="width: auto;" />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th scope="row">
                                픽업일시
                              </th>
                              <td>2024.06.29(수) 15:00 ~ 18:00</td>
                            </tr>
                          </tbody>
                        </TableWrap>
                      </ColorBox>
                    </div>
                    <!-- // thumb-prod-flex -->
                  </li>
                </RowListWrap>
              </ColorBox>
            </ContBox>
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
                      <ETit text="구독할인" type="form" />
                    </div>
                    <div class="flex-right">
                      <div class="align-group">
                        <span class="stext">가능 1개 / <span class="fc-gray60">전체 2개</span></span>
                        <EBtn color="line-light-gray" size="xs" @click="openSelectSubscribe">
                          <span class="text">사용</span>
                        </EBtn>
                      </div>
                    </div>
                  </FlexGroup>
                  <ColorBox color="light-gray" size="sm" class="cont-discount-info">
                    <FlexGroup align="center">
                      <div class="flex-left">
                        <EGoods size="sm" val="1,000" unit="원" />
                      </div>
                      <div class="flex-right">
                        <button type="button" class="btn-delete">
                          <EIco name="close" color="gray" size="xs">
                            <span class="offscreen">할인 취소</span>
                          </EIco>
                        </button>
                      </div>
                    </FlexGroup>
                  </ColorBox>
                </li>
                <li class="item-sm">
                  <FlexGroup>
                    <div class="flex-left">
                      <ETit text="쿠폰" type="form" />
                    </div>
                    <div class="flex-right">
                      <div class="align-group">
                        <span class="stext">가능 1개 / <span class="fc-gray60">전체 7개</span></span>
                        <EBtn color="line-light-gray" size="xs" @click="openSelectCoupon">
                          <span class="text">사용</span>
                        </EBtn>
                      </div>
                    </div>
                  </FlexGroup>
                  <ColorBox color="light-gray" size="sm" class="cont-discount-info">
                    <FlexGroup align="center">
                      <div class="flex-left">
                        <EGoods size="sm" val="1,000" unit="원" />
                      </div>
                      <div class="flex-right">
                        <button type="button" class="btn-delete">
                          <EIco name="close" color="gray" size="xs">
                            <span class="offscreen">할인 취소</span>
                          </EIco>
                        </button>
                      </div>
                    </FlexGroup>
                  </ColorBox>
                </li>
                <li class="item-sm">
                  <FlexGroup>
                    <div class="flex-left">
                      <ETit text="L.POINT" type="form" />
                    </div>
                    <div class="flex-right">
                      <div class="align-group">
                        <span class="stext">사용가능 <EGoods val="10,000" unit="P" /></span>
                        <EBtn color="line-light-gray" size="xs" @click="openPayLPoint">
                          <span class="text">사용</span>
                        </EBtn>
                      </div>
                    </div>
                  </FlexGroup>
                  <ColorBox color="light-gray" size="sm" class="cont-discount-info">
                    <FlexGroup align="center">
                      <div class="flex-left">
                        <EGoods size="sm" val="1,000" unit="원" />
                      </div>
                      <div class="flex-right">
                        <button type="button" class="btn-delete">
                          <EIco name="close" color="gray" size="xs">
                            <span class="offscreen">할인 취소</span>
                          </EIco>
                        </button>
                      </div>
                    </FlexGroup>
                  </ColorBox>
                </li>
                <li class="item-sm">
                  <FlexGroup>
                    <div class="flex-left">
                      <ETit text="금액권" type="form" />
                    </div>
                    <div class="flex-right">
                      <div class="align-group">
                        <span class="stext">사용가능 <EGoods val="17,500" unit="P" /></span>
                        <EBtn color="line-light-gray" size="xs" @click="openSelectGiftCard">
                          <span class="text">사용</span>
                        </EBtn>
                      </div>
                    </div>
                  </FlexGroup>
                  <ColorBox color="light-gray" size="sm" class="cont-discount-info">
                    <FlexGroup align="center">
                      <div class="flex-left">
                        <EGoods size="sm" val="1,000" unit="원" />
                      </div>
                      <div class="flex-right">
                        <button type="button" class="btn-delete">
                          <EIco name="close" color="gray" size="xs">
                            <span class="offscreen">할인 취소</span>
                          </EIco>
                        </button>
                      </div>
                    </FlexGroup>
                  </ColorBox>
                </li>
              </RowListWrap>
            </ColorBox>
            <div class="cash-receipt-info-wrap">
              <CtitleWrap>
                <ETit text="현금영수증" type="xlCont" />
              </CtitleWrap>
              <ColorBox color="white" size="lg">
                <CtitleWrap size="zero">
                  <FlexGroup>
                    <div class="flex-left">
                      <ETit text="현금영수증" type="form" />
                    </div>
                    <div class="flex-right">
                      <UiColGroup gap="lg">
                        <span class="ui-rdo">
                          <input id="cashReceiptRdo01" v-model="cashReceiptRadio" type="radio" name="cashReceiptRdo01" value="receiptApply" />
                          <label for="cashReceiptRdo01"><span class="text-md">신청</span></label>
                        </span>
                        <span class="ui-rdo">
                          <input id="cashReceiptRdo02" v-model="cashReceiptRadio" type="radio" name="cashReceiptRdo01" value="receiptNotApply" />
                          <label for="cashReceiptRdo02"><span class="text-md">미신청</span></label>
                        </span>
                      </UiColGroup>
                    </div>
                  </FlexGroup>
                </CtitleWrap>
                <div v-show="cashReceiptRadio === 'receiptApply'">
                  <ColorBox color="light-gray" size="sm">
                    <FlexGroup>
                      <div class="flex-left">
                        <div class="stext fw-sb fc-gray90">
                          개인 소득공제
                        </div>
                      </div>
                      <div class="flex-right">
                        <div class="align-group">
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
                        <div class="stext fw-sb fc-gray90">
                          사업자 소득공제
                        </div>
                      </div>
                      <div class="flex-right">
                        <div class="align-group">
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
                  <BtnWrap type="full" size="md">
                    <EBtn color="line-light-gray" size="sm">
                      <span class="text">현금영수증 발급정보 등록</span>
                    </EBtn>
                  </BtnWrap>
                </div>
                <div v-show="cashReceiptRadio === 'receiptNotApply'">
                  <ColorBox color="light-gray" size="sm">
                    <FlexGroup>
                      <div class="flex-left">
                        <div class="stext fw-sb fc-gray90">
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
                <li class="item-md">
                  <span class="ui-rdo">
                    <input id="orderPayRdo01" v-model="orderPayRadio" type="radio" name="orderPayRdo01" value="payCard" />
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
                    <input id="orderPayRdo02" v-model="orderPayRadio" type="radio" name="orderPayRdo01" value="payLpay" />
                    <label for="orderPayRdo02"><span class="text-lg">L.PAY</span></label>
                  </span>
                </li>
                <li class="item-md">
                  <span class="ui-rdo">
                    <input id="orderPayRdo03" v-model="orderPayRadio" type="radio" name="orderPayRdo01" value="payNaver" />
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
                    <input id="orderPayRdo04" v-model="orderPayRadio" type="radio" name="orderPayRdo01" value="payKakao" disabled />
                    <label for="orderPayRdo04"><span class="text-lg">카카오페이</span></label>
                  </span>
                </li>
                <li class="item-md">
                  <span class="ui-chk">
                    <input id="orderPayChk01" type="checkbox" />
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
                  <EGoods size="xl" val="6,400" unit="원" class="fc-spot" />
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
                  <RowListWrap gap="sm" size="2xs">
                    <li class="item-sub-order-info">
                      <FlexGroup align="center">
                        <div class="flex-left">
                          <EIco name="bullet-order-list" />
                          <ETit text="상품할인" type="sGoods" />
                        </div>
                        <div class="flex-right">
                          <EGoods val="1,000" unit="원" class="fc-red" />
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
    <ContBox size="lg">
      <FlexGroup>
        <div class="flex-left">
          <span class="ui-chk">
            <input id="agreeChk01" type="checkbox" />
            <label for="agreeChk01"><span class="text-lg">개인정보 수집 및 이용동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
          </span>
        </div>
        <div class="flex-right">
          <ETBtn size="xs">
            <span class="text">상세보기</span>
            <EIco name="arw-right" color="gray" size="xs" />
          </ETBtn>
        </div>
      </FlexGroup>
      <RowListWrap size="xs">
        <li class="dot-text-sm">
          구매조건을 확인했으며 결제 진행에 동의합니다.
        </li>
      </RowListWrap>
    </ContBox>
  </ContWrap>
  <ContDocker>
    <BtnWrap type="auto">
      <EBtn color="line-light-gray" size="lg">
        <span class="text">취소</span>
      </EBtn>
      <EBtn color="green" size="lg">
        <span class="text"><EGoods val="6,400" unit="원" /> 결제하기</span>
      </EBtn>
    </BtnWrap>
  </ContDocker>

  <!-- pop : 구독할인 -->
  <popOrderSelectSubscribe v-model:sta="popSelectSubscribe" />
  <!-- // pop : 구독할인 -->

  <!-- pop : 쿠폰 -->
  <popOrderSelectCoupon v-model:sta="popSelectCoupon" />
  <!-- // pop : 쿠폰 -->

  <!-- pop : L.POINT -->
  <popOrderPayLPoint v-model:sta="popPayLPoint" />
  <!-- // pop : L.POINT -->

  <!-- pop : 금액권선택 -->
  <popOrderSelectGiftCard v-model:sta="popSelectGiftCard" />
  <!-- // pop : 금액권선택 -->
</template>

<script setup lang="ts">
definePageMeta({
  title: '상품 결제',
});

const orderPayRadio = ref();
const cashReceiptRadio = ref();

const isNormal = ref(true);
const isPresent = ref(true);

// 증정품선택 팝업
const popSelectSubscribe = ref({ open: false });
const openSelectSubscribe = () => popSelectSubscribe.value.open = true;

// 쿠폰 팝업
const popSelectCoupon = ref({ open: false });
const openSelectCoupon = () => popSelectCoupon.value.open = true;

// L.POINT 팝업
const popPayLPoint = ref({ open: false });
const openPayLPoint = () => popPayLPoint.value.open = true;

// 금액권 선택 팝업
const popSelectGiftCard = ref({ open: false });
const openSelectGiftCard = () => popSelectGiftCard.value.open = true;
</script>

<style lang="scss" scoped>
@import url("assets/css/pages/order.scss");
</style>
