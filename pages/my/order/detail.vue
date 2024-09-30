<template>
  <ContWrap class="not-navbar">
    <!-- 주문상품정보 -->
    <!-- DESC :: 케이스별 주문상품정보는 퍼블 UI 가이드의 [Content > Color Box Contents > Case - My Order] 참고해 주세요. -->
    <ContBox size="lg" gap="sm">
      <CtitleWrap>
        <FlexGroup>
          <div class="flex-left">
            <ETit text="주문완료" type="xlCont" />
          </div>
          <div class="flex-right">
            <span class="stext-lg fw-md fc-spot">주문접수중</span>
          </div>
        </FlexGroup>
      </CtitleWrap>
      <ColorBox color="white" size="lg">
        <CtitleWrap>
          <ETit type="lgCont" text="비비고) 사골 컵만두국" />
        </CtitleWrap>
        <TableWrap type="info" gap="sm" size="lg" table-name="픽업 정보">
          <colgroup>
            <col style="width: 85px;">
            <col style="width: auto;">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">
                주문매장
              </th>
              <td class="ta-right">
                세븐일레븐 강남점
              </td>
            </tr>
            <tr>
              <th scope="row">
                픽업일시
              </th>
              <td class="ta-right">
                2024.06.29(수) 15:00
              </td>
            </tr>
            <tr>
              <th scope="row">
                매장요청사항
              </th>
              <td class="ta-right">
                신선하게 보관해주세요 신선하게 보관해주세요신선하게 보관해주세요
              </td>
            </tr>
          </tbody>
        </TableWrap>
        <!-- DESC :: 픽업 상태에 따라 'step-item' 영역에 [is-active] 클래스 추가 -->
        <div class="step-list-wrap">
          <ul class="step-col-list">
            <li class="step-item is-active">
              <div class="status">
                주문접수중
              </div>
            </li>
            <li class="step-item">
              <div class="status">
                상품준비중
              </div>
            </li>
            <li class="step-item">
              <div class="status">
                픽업대기
              </div>
            </li>
          </ul>
        </div>
        <div class="order-prod-history-wrap">
          <div class="list-line-header">
            <span class="ui-chk">
              <input id="prdAllChk01" type="checkbox">
              <label for="prdAllChk01"><span class="text-lg">전체선택</span></label>
            </span>
          </div>
          <RowListWrap gap="line">
            <li class="item-thumb-prod">
              <span class="ui-chk">
                <input id="prodChk01" type="checkbox">
                <label for="prodChk01"><span class="offscreen">상품 선택</span></label>
              </span>
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
                        비비고 사골컵만두국
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
              </div>
              <!-- // thumb-prod-flex -->
              <NuxtLink class="btn-link" to="javascript:">
                <span class="offscreen">바로가기</span>
              </NuxtLink>
            </li>
            <li class="item-thumb-prod">
              <span class="ui-chk">
                <input id="prodChk02" type="checkbox">
                <label for="prodChk02"><span class="offscreen">상품 선택</span></label>
              </span>
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
              <NuxtLink class="btn-link" to="javascript:">
                <span class="offscreen">바로가기</span>
              </NuxtLink>
            </li>
          </RowListWrap>
        </div>
      </ColorBox>
      <ColorBox color="white" size="lg">
        <CtitleWrap>
          <ETit type="lgCont" text="비비고) 사골 컵만두국" />
        </CtitleWrap>
        <TableWrap type="info" gap="sm" size="lg" table-name="픽업 정보">
          <colgroup>
            <col style="width: 85px;">
            <col style="width: auto;">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">
                주문매장
              </th>
              <td class="ta-right">
                세븐일레븐 강남점
              </td>
            </tr>
            <tr>
              <th scope="row">
                픽업일시
              </th>
              <td class="ta-right">
                2024.06.29(수) 15:00
              </td>
            </tr>
          </tbody>
        </TableWrap>
        <BtnWrap size="md">
          <EBtn tag="a" color="line-light-gray" size="sm" to="/my/activity/review/store">
            <span class="text">매장리뷰</span>
          </EBtn>
        </BtnWrap>
        <div class="order-prod-history-wrap">
          <RowListWrap gap="line">
            <li class="item-thumb-prod">
              <div class="thumb-prod-flex">
                <EThumbProdBox size="md" dim="픽업완료">
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <div class="info-box">
                  <FlexGroup>
                    <div class="flex-left">
                      <ETit type="prod">
                        비비고 사골컵만두국
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
              </div>
              <!-- // thumb-prod-flex -->
              <ColorBox color="light-gray" size="sm">
                <TableWrap type="info" gap="sm" size="md" table-name="구독권 정보">
                  <colgroup>
                    <col style="width: 55px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        사용기간
                      </th>
                      <td>
                        <span class="fc-gray70">
                          2024.07.01 ~ 2024.07.31
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </TableWrap>
              </ColorBox>
              <BtnWrap size="md">
                <EBtn tag="a" color="line-light-gray" size="sm" to="/my/activity/review/product">
                  <span class="text">상품리뷰</span>
                </EBtn>
              </BtnWrap>
              <NuxtLink class="btn-link" to="javascript:">
                <span class="offscreen">바로가기</span>
              </NuxtLink>
            </li>
          </RowListWrap>
        </div>
      </ColorBox>
    </ContBox>
    <!-- // 주문상품정보 -->

    <!-- 주문정보 -->
    <ContBox size="lg">
      <CtitleWrap>
        <ETit text="주문정보" type="xlCont" />
      </CtitleWrap>
      <ColorBox color="white" size="lg">
        <TableWrap type="info" gap="sm" size="lg" table-name="주문 정보">
          <colgroup>
            <col style="width: 59px;">
            <col style="width: auto;">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">
                주문일
              </th>
              <td class="ta-right">
                2024.06.15
              </td>
            </tr>
            <tr>
              <th scope="row">
                주문번호
              </th>
              <td class="ta-right">
                2024070210424338281
              </td>
            </tr>
            <tr>
              <th scope="row">
                결제수단
              </th>
              <td class="ta-right">
                신용카드(롯데)
              </td>
            </tr>
          </tbody>
        </TableWrap>
        <!-- 구독할인인 경우 -->
        <BtnWrap size="md">
          <EBtn color="line-green" size="sm" @click="openChangePayment">
            <span class="text">결제수단 변경</span>
          </EBtn>
        </BtnWrap>
        <!-- // 구독할인인 경우 -->
      </ColorBox>
    </ContBox>
    <!-- // 주문정보 -->

    <!-- 배송지정보 -->
    <ContBox size="lg">
      <CtitleWrap>
        <ETit text="배송지정보" type="xlCont" />
      </CtitleWrap>
      <ColorBox color="white" size="lg">
        <TableWrap type="info" gap="sm" size="lg" table-name="배송지 정보">
          <colgroup>
            <col style="width: 71px;">
            <col style="width: auto;">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">
                받는사람
              </th>
              <td class="ta-right">
                김세븐
              </td>
            </tr>
            <tr>
              <th scope="row">
                주소
              </th>
              <td class="ta-right">
                (07229) 서울특벽시 중고 청계천로 100 시그니처 서관 4층
              </td>
            </tr>
            <tr>
              <th scope="row">
                휴대폰번호
              </th>
              <td class="ta-right">
                010-1234-5678
              </td>
            </tr>
          </tbody>
        </TableWrap>
      </ColorBox>
    </ContBox>
    <!-- // 배송지정보 -->

    <ContBox size="lg">
      <CtitleWrap>
        <FlexGroup>
          <div class="flex-left">
            <ETit text="결제금액" type="xlCont" />
          </div>
          <div class="flex-right">
            <EGoods size="xl" val="38,200" unit="원" class="fc-spot" />
          </div>
        </FlexGroup>
      </CtitleWrap>
      <ColorBox color="white" size="lg">
        <RowListWrap gap="lg">
          <li class="item-order-info">
            <FlexGroup align="center">
              <div class="flex-left">
                <ETit text="상품금액" type="goods" />
              </div>
              <div class="flex-right">
                <ETit type="goods">
                  <EGoods val="5,300" unit="원" />
                </ETit>
              </div>
            </FlexGroup>
          </li>
          <li class="item-order-info">
            <FlexGroup align="center">
              <div class="flex-left">
                <ETit text="할인금액" type="goods" />
              </div>
              <div class="flex-right">
                <ETit type="goods">
                  <EGoods val="-1,000" unit="원" class="fc-red" />
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
                    <EGoods val="-1,000" unit="원" />
                  </div>
                </FlexGroup>
              </li>
            </RowListWrap>
          </li>
        </RowListWrap>
      </ColorBox>
    </ContBox>

    <!-- [전체취소, 부분취소] 취소금액 -->
    <ContBox size="lg">
      <CtitleWrap>
        <FlexGroup>
          <div class="flex-left">
            <ETit text="취소금액" type="xlCont" />
          </div>
          <div class="flex-right">
            <EGoods size="xl" val="5,000" unit="원" />
          </div>
        </FlexGroup>
      </CtitleWrap>
      <ColorBox color="white" size="lg">
        <RowListWrap gap="lg">
          <li class="item-order-info">
            <FlexGroup align="center">
              <div class="flex-left">
                <ETit text="전체취소 (24.05.13 14:30)" type="goods" />
              </div>
              <div class="flex-right">
                <ETit type="goods">
                  <EGoods val="5,000" unit="원" />
                </ETit>
              </div>
            </FlexGroup>
            <RowListWrap gap="sm" size="2xs">
              <li class="item-sub-order-info">
                <FlexGroup align="center">
                  <div class="flex-left">
                    <EIco name="bullet-order-list" />
                    <ETit text="신용카드" type="sGoods" />
                  </div>
                  <div class="flex-right">
                    <EGoods val="-5,000" unit="원" />
                  </div>
                </FlexGroup>
              </li>
            </RowListWrap>
          </li>
          <li class="item-order-info">
            <FlexGroup align="center">
              <div class="flex-left">
                <ETit text="부분취소 (24.05.13 14:30)" type="goods" />
              </div>
              <div class="flex-right">
                <ETit type="goods">
                  <EGoods val="5,000" unit="원" />
                </ETit>
              </div>
            </FlexGroup>
            <RowListWrap gap="sm" size="2xs">
              <li class="item-sub-order-info">
                <FlexGroup align="center">
                  <div class="flex-left">
                    <EIco name="bullet-order-list" />
                    <ETit text="신용카드" type="sGoods" />
                  </div>
                  <div class="flex-right">
                    <EGoods val="-5,000" unit="원" />
                  </div>
                </FlexGroup>
              </li>
            </RowListWrap>
          </li>
        </RowListWrap>
      </ColorBox>
    </ContBox>
    <!-- // [전체취소, 부분취소] 취소금액 -->

    <ContBox size="lg" gap="sm">
      <FoldToggleBox open type="scont">
        <template #header>
          <CtitleWrap size="zero">
            <ETit text="고객센터 안내" type="sFold" />
          </CtitleWrap>
        </template>
        <template #content>
          <SContLineBox>
            <CtitleWrap size="zero">
              <div class="ctitle-sm">
                <ETBtn tag="a" size="md" to="tel:1577-0711">
                  <span class="text fc-black fw-sb">세븐일레븐 콜센터 1577-0711</span>
                </ETBtn>
              </div>
              <div class="stext">
                APP 이용 및 매장관련문의
                <br>09:00~18:00 주말 및 공휴일 제외
              </div>
            </CtitleWrap>
          </SContLineBox>
          <!-- 홈배송 아닌 경우 -->
          <SContLineBox>
            <CtitleWrap size="zero">
              <div class="ctitle-sm">
                <ETBtn tag="a" size="md" to="tel:1522-2552">
                  <span class="text fc-black fw-sb">쿠폰사용 관련 문의 1522-2552</span>
                </ETBtn>
              </div>
              <div class="stext">
                롯데쇼핑 e커머스 고객센터
                <br>10:00~20:00 주말 및 공휴일 제외
              </div>
            </CtitleWrap>
          </SContLineBox>
          <!-- // 홈배송 아닌 경우 -->
          <!-- 홈배송인 경우 -->
          <SContLineBox>
            <CtitleWrap size="zero">
              <div class="ctitle-sm">
                판매자정보
              </div>
              <div class="stext">
                업체명 : (주)현대비즈(생수직납)
              </div>
            </CtitleWrap>
          </SContLineBox>
          <!-- // 홈배송인 경우 -->
        </template>
      </FoldToggleBox>
    </ContBox>
  </ContWrap>

  <ContDocker>
    <BtnWrap type="flex">
      <!-- CTA CASE 01 : 주문접수중, 미사용, 부분취소, 부분사용(단건 금액권) 상품 -->
      <!-- DESC :: 사전예약의 경우 상품 선택하지 않은 경우 [disabled] 속성 추가 -->
      <EBtn color="line-light-gray" size="lg">
        <span class="text">주문취소</span>
      </EBtn>
      <!-- // CTA CASE 01 : 주문접수중, 미사용, 부분취소, 부분사용(단건 금액권) 상품 -->
      <!-- CTA CASE 02 : 구독중 상품 -->
      <!-- <EBtn color="line-light-gray" size="lg">
        <span class="text">구독취소</span>
      </EBtn> -->
      <!-- // CTA CASE 02 : 구독중 상품 -->
      <!-- CTA CASE 03 : 픽업대기, 사용중, 모두사용, 부분취소/부분사용(다건 금액권), 구독중 상품 -->
      <!-- DESC :: 클릭 시 쏘옥보관의 각 카테고리로 이동 -->
      <EBtn tag="a" color="gray" size="lg" to="/keep/home">
        <span class="text">쏘옥보관</span>
      </EBtn>
      <!-- // CTA CASE 03 : 픽업대기, 사용중, 모두사용, 부분취소/부분사용(다건 금액권), 구독중 상품 -->
      <!-- CTA CASE 04 : 보낸 선물 상품 -->
      <!-- DESC :: 수락전인 경우 노출 -->
      <!-- <EBtn color="line-light-gray" size="lg">
        <span class="text">선물취소</span>
      </EBtn>
      <EBtn color="green" size="lg">
        <span class="text">선물 다시 보내기</span>
      </EBtn> -->
      <!-- // CTA CASE 04 : 보낸 선물 상품 -->
    </BtnWrap>
  </ContDocker>

  <!-- <ContDocker>
    <BtnWrap type="flex">
    </BtnWrap>
  </ContDocker> -->
  <!-- // 보낸 선물 상품 버튼 -->

  <!-- pop : 결제수단 변경 -->
  <PopMyChangePayment v-model:sta="popChangePayment" />
  <!-- // pop : 결제수단 변경 -->

  <!-- pop : 구독할인 결제내역 -->
  <PopMySubscribePayHistory v-model:sta="popSubscribePayHistory" />
  <!-- // pop : 구독할인 결제내역 -->

  <!-- pop : 구독할인 이용내역 -->
  <PopCommSubscribeHistory v-model:sta="popSubscribeHistory" />
  <!-- // pop : 구독할인 이용내역 -->
</template>

<script setup lang="ts">
definePageMeta({
  title: "주문상세",
  hideRightHeader: false,
});

// 결제수단 변경 팝업
const popChangePayment = ref({ open: false });
const openChangePayment = () => popChangePayment.value.open = true;

// 구독할인 결제내역 팝업
const popSubscribePayHistory = ref({ open: false });
const openSubscribePayHistory = () => popSubscribePayHistory.value.open = true;

// 구독할인 이용내역 팝업
const popSubscribeHistory = ref({ open: false });
const openSubscribeHistory = () => popSubscribeHistory.value.open = true;
</script>

<style scoped lang="scss">
</style>
