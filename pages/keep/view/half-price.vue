<template>
  <ContWrap class="side-zero" in-bottom="zero">
    <TabWrap fir-active="subscribe" class="justify-tab">
      <template #tabs="{ activeTab, setActiveTab }">
        <ul class="tab-list">
          <li class="tab-item">
            <button
              type="button" class="tab-link"
              :class="{ 'is-active': activeTab === 'subscribe' }"
              @click="setActiveTab('subscribe')"
            >
              <span class="tab-text">구독권</span>
            </button>
          </li>
          <li class="tab-item">
            <button
              type="button" class="tab-link"
              :class="{ 'is-active': activeTab === 'barcode' }"
              @click="setActiveTab('barcode')"
            >
              <span class="tab-text">상품바코드</span>
            </button>
          </li>
        </ul>
      </template>
      <template #default="{ activeTab }">
        <!-- 구독권 -->
        <ContWrap v-if="activeTab === 'subscribe'">
          <ContBox size="lg">
            <ColorBox color="white" size="lg">
              <ctitleWrap>
                <FlexGroup>
                  <div class="flex-left">
                    <ETit type="lgCont" text="D-93" />
                  </div>
                  <div class="flex-right">
                    <!-- DESC :: 받은선물인 경우 노출 -->
                    <!-- <EBadge size="md" color="line-gray" badge-text="받은선물" /> -->
                    <!-- DESC :: 정기구독인 경우 노출 -->
                    <!-- <EBadge size="md" color="line-gray" badge-text="정기구독" /> -->
                  </div>
                </FlexGroup>
              </ctitleWrap>
              <div class="thumb-prod-keep">
                <!-- thumb-prod-2xl -->
                <EThumbProdBox size="2xl">
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <!-- // thumb-prod-2xl -->
                <div class="info-box">
                  <CtitleWrap>
                    <ETit type="xlCont">
                      세븐카페 반값 구독권
                    </ETit>
                    <div class="stext">
                      (31일간, 월 1회 30% / 총 20회)
                    </div>
                  </CtitleWrap>
                  <ColorBox color="line-light-gray" size="lg">
                    <div class="barcode-box">
                      <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="바코드 이미지">
                    </div>
                  </ColorBox>
                  <ColorBox color="light-green" size="md">
                    <TableWrap type="info" gap="sm" size="lg" table-name="구독할인 정보">
                      <colgroup>
                        <col style="width: 61px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            사용기간
                          </th>
                          <td class="ta-right fc-black">
                            2024.07.20 ~ 2024.08.20
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            사용가능
                          </th>
                          <td class="ta-right fc-spot fw-sb">
                            10회
                          </td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </ColorBox>
                </div>
                <BtnWrap size="lg">
                  <EBtn color="line-light-gray" size="md" @click="openSubscribeHistory">
                    <span class="text">이용내역</span>
                  </EBtn>
                </BtnWrap>
              </div>
            </ColorBox>
          </ContBox>
        </ContWrap>
        <!-- // 구독권 -->
        <!-- 상품 바코드 -->
        <ContWrap v-if="activeTab === 'barcode'">
          <ContBox size="lg">
            <ColorBox color="white" size="lg">
              <ctitleWrap>
                <ETit type="lgCont" text="반값커피 상품 바코드" />
              </ctitleWrap>
              <div class="thumb-prod-keep">
                <div class="info-box">
                  <ColorBox color="line-light-gray" size="lg">
                    <div class="barcode-box">
                      <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="바코드 이미지">
                    </div>
                  </ColorBox>
                  <p class="stext-lg">
                    매장 근무자에게 해당 바코드를 보여주세요.
                  </p>
                </div>
              </div>
            </ColorBox>
          </ContBox>
        </ContWrap>
        <!-- // 상품 바코드 -->
      </template>
    </TabWrap>
  </ContWrap>
  <ContWrap in-top="zero" class="not-navbar">
    <ContBox size="lg">
      <CtitleWrap>
        <ETit type="xlCont" text="주문정보" />
      </CtitleWrap>
      <ColorBox color="white" size="lg">
        <TableWrap type="info" gap="sm" size="lg" table-name="주문 정보">
          <colgroup>
            <col style="width: 61px;">
            <col style="width: auto;">
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">
                주문일
              </th>
              <td class="ta-right">
                2024.06.03
              </td>
            </tr>
            <tr>
              <th scope="row">
                사용기간
              </th>
              <td class="ta-right">
                2024.10.30까지
              </td>
            </tr>
          </tbody>
        </TableWrap>
      </ColorBox>
    </ContBox>
    <ContBox size="lg" gap="sm">
      <FoldToggleBox open type="scont">
        <template #header>
          <CtitleWrap size="zero">
            <ETit text="매장근무자 POS 사용방법" type="sFold" />
          </CtitleWrap>
        </template>
        <template #content>
          <CtitleWrap size="sm">
            <ETit type="sCont" class="fc-black" text="매장근무자에게 보여주세요!" />
          </CtitleWrap>
          <RowListWrap gap="sm">
            <li class="dot-text">
              고객 휴대폰의 교환 바코드 스캔
            </li>
            <li class="dot-text">
              현금 합계 클릭
            </li>
            <li class="stext">
              <span class="fc-red">판매상품은 스캔하지 마세요.</span>
            </li>
          </RowListWrap>
        </template>
      </FoldToggleBox>
      <FoldToggleBox open type="scont">
        <template #header>
          <CtitleWrap size="zero">
            <ETit text="유의사항" type="sFold" />
          </CtitleWrap>
        </template>
        <template #content>
          <RowListWrap gap="sm">
            <li class="dot-text">
              2+1, 1+1 상품을 구매 후 보관시 본품은 최대 93일까지, 증정품은 최대 31일까지 보관이 가능합니다.
            </li>
            <li class="dot-text">
              환불을 원하실 경우 7일 이내에 영수증을 지참하시어 결제한 매장으로 방문해주세요. (오프라인 거래에 해당하여 매장방문 필수)
            </li>
            <li class="dot-text">
              유효기간 연장 버튼 클릭 시 본품은 3개월 증정품은 1개월이 연장됩니다. (유효기간 내 만료일 30일 전 연장버튼 활성화)
            </li>
          </RowListWrap>
        </template>
      </FoldToggleBox>
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
                  <span class="text fc-black fw-sb">콜센터 1577-0711</span>
                </ETBtn>
              </div>
              <div class="stext">
                APP 이용 및 매장관련문의
                <br>09:00~18:00 주말 및 공휴일 제외
              </div>
            </CtitleWrap>
          </SContLineBox>
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
        </template>
      </FoldToggleBox>
    </ContBox>
  </ContWrap>

  <!-- pop : 구독할인 이용내역 -->
  <PopCommSubscribeHistory v-model:sta="popSubscribeHistory" />
  <!-- // pop : 구독할인 이용내역 -->
</template>

<script setup lang="ts">
definePageMeta({
  title: "교환권보기",
  hideRightHeader: false,
});

// 구독할인 이용내역 팝업
const popSubscribeHistory = ref({ open: false });
const openSubscribeHistory = () => popSubscribeHistory.value.open = true;
</script>

<style lang="scss" scoped>

</style>
