<template>
  <!-- 데이터가 있는 경우 -->
  <ContWrap v-if="isData">
    <ContBox size="lg" gap="md">
      <div class="list-header">
        <FlexGroup>
          <div class="flex-left">
            <span class="ui-chk">
              <input id="prdAllChk01" type="checkbox" />
              <label for="prdAllChk01"><span class="text-lg">전체선택</span></label>
            </span>
          </div>
          <div class="flex-right">
            <EBtn color="line-light-gray" size="xs">
              <EIco name="delete" color="gray" size="xs" />
              <span class="text">선택삭제</span>
            </EBtn>
          </div>
        </FlexGroup>
      </div>
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
          <!-- 일반 상품 -->
          <li class="item-thumb-prod">
            <span class="ui-chk">
              <input id="prodChk01" type="checkbox" />
              <label for="prodChk01"><span class="offscreen">상품 선택</span></label>
            </span>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">
                  바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                </ETit>
                <div class="stock">
                  <EGoods size="sm" val="N" unit="개" /> 남음
                </div>
              </div>
              <FlexGroup align="end">
                <div class="flex-left">
                  <ESpinner />
                </div>
                <div class="flex-right">
                  <div class="goods-group">
                    <EGoods size="md" val="2,700" unit="원" />
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- // thumb-prod-flex -->
            <button type="button" class="btn-delete">
              <EIco name="close" color="gray" size="xs">
                <span class="offscreen">상품 삭제</span>
              </EIco>
            </button>
            <ColorBox color="light-gray" size="md">
              <FlexGroup align="start">
                <div class="flex-left">
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
                        <td class="fc-gray70">
                          2024.06.29(수) 15:00 ~ 18:00
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          결제기한
                        </th>
                        <td class="fc-gray70">
                          2024.06.30(목) 15:00 까지
                        </td>
                      </tr>
                    </tbody>
                  </TableWrap>
                </div>
                <div class="flex-right">
                  <EBtn color="line-light-gray" size="xs" @click="openChangePickupInfo">
                    <span class="text">변경</span>
                  </EBtn>
                </div>
              </FlexGroup>
            </ColorBox>
            <NuxtLink class="btn-link" to="javascript:">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </li>
          <!-- // 일반 상품 -->
          <!-- 할인 상품 -->
          <li class="item-thumb-prod">
            <span class="ui-chk">
              <input id="prodChk02" type="checkbox" />
              <label for="prodChk02"><span class="offscreen">상품 선택</span></label>
            </span>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <BadgeGroup gap="md">
                  <EBadge color="gray" size="sm" badge-text="할인" />
                </BadgeGroup>
                <ETit type="prod">
                  바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                </ETit>
                <div class="stock">
                  <EGoods size="sm" val="N" unit="개" /> 남음
                </div>
              </div>
              <FlexGroup align="end">
                <div class="flex-left">
                  <ESpinner />
                </div>
                <div class="flex-right">
                  <div class="goods-group">
                    <EGoods type="origin" size="sm" val="3,000" unit="원" />
                    <EGoods type="percent" size="md" val="10" unit="%" />
                    <EGoods size="md" val="2,700" unit="원" />
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- // thumb-prod-flex -->
            <button type="button" class="btn-delete">
              <EIco name="close" color="gray" size="xs">
                <span class="offscreen">상품 삭제</span>
              </EIco>
            </button>
            <ColorBox color="light-gray" size="md">
              <FlexGroup align="start">
                <div class="flex-left">
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
                        <td class="fc-gray70">
                          2024.06.29(수) 15:00 ~ 18:00
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          결제기한
                        </th>
                        <td class="fc-gray70">
                          2024.06.30(목) 15:00 까지
                        </td>
                      </tr>
                    </tbody>
                  </TableWrap>
                </div>
                <div class="flex-right">
                  <EBtn color="line-light-gray" size="xs" @click="openChangePickupInfo">
                    <span class="text">변경</span>
                  </EBtn>
                </div>
              </FlexGroup>
            </ColorBox>
            <UiColGroup>
              <span class="ui-chk">
                <input id="packageChk01" type="checkbox" />
                <label for="packageChk01"><span class="text-sm fc-gray80">포장봉투 (200원)</span></label>
              </span>
            </UiColGroup>
            <NuxtLink class="btn-link" to="javascript:">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </li>
          <!-- // 할인 상품 -->
        </RowListWrap>
      </ColorBox>
      <ColorBox color="white" size="lg">
        <div class="box-prod-header">
          <FlexGroup>
            <div class="flex-left">
              <ETit type="place">
                세븐일레븐 시그니처타워점
              </ETit>
            </div>
            <div class="flex-right">
              <EGoods size="md" val="18,500" unit="원" class="fc-spot fw-sb" />
            </div>
          </FlexGroup>
        </div>
        <RowListWrap gap="line">
          <!-- 일반 상품 -->
          <li class="item-thumb-prod">
            <span class="ui-chk">
              <input id="prodChk03" type="checkbox" />
              <label for="prodChk03"><span class="offscreen">상품 선택</span></label>
            </span>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">
                  바리스타 로슈거 250ml 바리스타 로슈거 250ml
                </ETit>
                <div class="stock">
                  <EGoods size="sm" val="N" unit="개" /> 남음
                </div>
              </div>
              <FlexGroup align="end">
                <div class="flex-left">
                  <ESpinner />
                </div>
                <div class="flex-right">
                  <div class="goods-group">
                    <EGoods size="md" val="2,700" unit="원" />
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- // thumb-prod-flex -->
            <button type="button" class="btn-delete">
              <EIco name="close" color="gray" size="xs">
                <span class="offscreen">상품 삭제</span>
              </EIco>
            </button>
            <ColorBox color="light-gray" size="md">
              <FlexGroup align="start">
                <div class="flex-left">
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
                        <td class="fc-gray70">
                          2024.06.29(수) 15:00 ~ 18:00
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          결제기한
                        </th>
                        <td class="fc-gray70">
                          2024.06.30(목) 15:00 까지
                        </td>
                      </tr>
                    </tbody>
                  </TableWrap>
                </div>
                <div class="flex-right">
                  <EBtn color="line-light-gray" size="xs" @click="openChangePickupInfo">
                    <span class="text">변경</span>
                  </EBtn>
                </div>
              </FlexGroup>
            </ColorBox>
            <NuxtLink class="btn-link" to="javascript:">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </li>
          <!-- // 일반 상품 -->
          <!-- 할인 상품 -->
          <li class="item-thumb-prod">
            <span class="ui-chk">
              <input id="prodChk04" type="checkbox" />
              <label for="prodChk04"><span class="offscreen">상품 선택</span></label>
            </span>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <BadgeGroup gap="md">
                  <EBadge color="gray" size="sm" badge-text="할인" />
                </BadgeGroup>
                <ETit type="prod">
                  바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                </ETit>
                <div class="stock">
                  <EGoods size="sm" val="N" unit="개" /> 남음
                </div>
              </div>
              <FlexGroup align="end">
                <div class="flex-left">
                  <ESpinner />
                </div>
                <div class="flex-right">
                  <div class="goods-group">
                    <EGoods type="origin" size="sm" val="3,000" unit="원" />
                    <EGoods type="percent" size="md" val="10" unit="%" />
                    <EGoods size="md" val="2,700" unit="원" />
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- // thumb-prod-flex -->
            <button type="button" class="btn-delete">
              <EIco name="close" color="gray" size="xs">
                <span class="offscreen">상품 삭제</span>
              </EIco>
            </button>
            <ColorBox color="light-gray" size="md">
              <FlexGroup align="start">
                <div class="flex-left">
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
                        <td class="fc-gray70">
                          2024.06.29(수) 15:00 ~ 18:00
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          결제기한
                        </th>
                        <td class="fc-gray70">
                          2024.06.30(목) 15:00 까지
                        </td>
                      </tr>
                    </tbody>
                  </TableWrap>
                </div>
                <div class="flex-right">
                  <EBtn color="line-light-gray" size="xs" @click="openChangePickupInfo">
                    <span class="text">변경</span>
                  </EBtn>
                </div>
              </FlexGroup>
            </ColorBox>
            <NuxtLink class="btn-link" to="javascript:">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </li>
          <!-- // 할인 상품 -->
        </RowListWrap>
      </ColorBox>
      <ColorBox color="white" size="lg">
        <div class="box-prod-header">
          <FlexGroup>
            <div class="flex-left">
              <ETit type="place">
                세븐일레븐 시그니처타워점
              </ETit>
            </div>
            <div class="flex-right">
              <EGoods size="md" val="18,500" unit="원" class="fc-spot fw-sb" />
            </div>
          </FlexGroup>
        </div>
        <RowListWrap gap="line">
          <!-- 주류/와인 상품 -->
          <li class="item-thumb-prod">
            <span class="ui-chk">
              <input id="prodChk05" type="checkbox" />
              <label for="prodChk05"><span class="offscreen">상품 선택</span></label>
            </span>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md" dim="19">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <BadgeGroup gap="md">
                  <EBadge color="gray" size="sm" badge-text="할인" />
                </BadgeGroup>
                <ETit type="prod">
                  드보밀레짐빈티지14
                </ETit>
                <div class="stock">
                  <EGoods size="sm" val="N" unit="개" /> 남음
                </div>
              </div>
              <FlexGroup align="end">
                <div class="flex-left">
                  <ESpinner />
                </div>
                <div class="flex-right">
                  <div class="goods-group">
                    <EGoods type="origin" size="sm" val="3,000" unit="원" />
                    <EGoods type="percent" size="md" val="10" unit="%" />
                    <EGoods size="md" val="2,700" unit="원" />
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- // thumb-prod-flex -->
            <button type="button" class="btn-delete">
              <EIco name="close" color="gray" size="xs">
                <span class="offscreen">상품 삭제</span>
              </EIco>
            </button>
            <ColorBox color="light-gray" size="md">
              <FlexGroup align="start">
                <div class="flex-left">
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
                        <td class="fc-gray70">
                          2024.06.29(수) 15:00 ~ 18:00
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          결제기한
                        </th>
                        <td class="fc-gray70">
                          2024.06.30(목) 15:00 까지
                        </td>
                      </tr>
                    </tbody>
                  </TableWrap>
                </div>
                <div class="flex-right">
                  <EBtn color="line-light-gray" size="xs" @click="openChangePickupInfo">
                    <span class="text">변경</span>
                  </EBtn>
                </div>
              </FlexGroup>
            </ColorBox>
            <NuxtLink class="btn-link" to="javascript:">
              <span class="offscreen">바로가기</span>
            </NuxtLink>
          </li>
          <!-- // 주류/와인 상품 -->
        </RowListWrap>
      </ColorBox>
      <BtnWrap size="md">
        <EBtn tag="a" color="line-gray" size="md" to="javascript:">
          <EIco name="plus" color="gray" size="sm" />
          <span class="text">상품 더 담기</span>
        </EBtn>
      </BtnWrap>
    </ContBox>
    <ContBox size="lg">
      <FoldToggleBox open>
        <template #header>
          <div class="fold-title">
            <FlexGroup>
              <div class="flex-left">
                <ETit text="결제예정금액" type="fold" />
              </div>
              <div class="flex-right">
                <EGoods size="xl" val="38,200" unit="원" class="fc-spot" />
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
                    <ETit text="주문금액" type="goods" />
                  </div>
                  <div class="flex-right">
                    <ETit type="goods">
                      <EGoods val="133,300" unit="원" />
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
                      <EGoods val="3,000" unit="원" class="fc-red" />
                    </ETit>
                  </div>
                </FlexGroup>
              </li>
            </RowListWrap>
          </ColorBox>
        </template>
      </FoldToggleBox>
    </ContBox>
    <ContBox size="lg">
      <CtitleWrap size="md">
        <ETit text="알려드립니다." type="cont" />
      </CtitleWrap>
      <RowListWrap size="sm" gap="sm">
        <li class="dot-text-sm">
          방문이 늦어질 경우 수령이 불가할 수 있으므로 꼭 예정된 시간에 방문해 주세요.
        </li>
        <li class="dot-text-sm">
          주류 등 미성년자 구매 불가 품목이 포함된 주문은 수령시 신분증을 제시해야 합니다. 신분증을 미 지참하실 경우 상품수령이 불가합니다.
        </li>
      </RowListWrap>
    </ContBox>
  </ContWrap>
  <ContDocker v-if="isData">
    <BtnWrap>
      <EBtn color="green" size="lg">
        <span class="text"><EGoods val="133,500" unit="원" /> 주문하기</span>
      </EBtn>
    </BtnWrap>
  </ContDocker>
  <!-- // 데이터가 없는 경우 -->

  <!-- 데이터가 없는 경우  -->
  <ContWrap v-if="isNoData" in-top="zero" class="not-navbar">
    <InfoGuideWrap
      type="no-data"
      name="cart"
      desc="장바구니에 담긴 상품이 없습니다."
    />
    <BtnWrap type="auto-center" size="xl">
      <EBtn tag="a" color="line-light-gray" size="md" to="javascript:">
        <span class="text">사전예약 상품보기</span>
      </EBtn>
    </BtnWrap>
  </ContWrap>
  <!-- // 데이터가 없는 경우  -->

  <!-- pop : 픽업정보변경 -->
  <popCommChangePickupInfo v-model:sta="popChangePickupInfo" />
  <!-- // pop : 픽업정보변경 -->
</template>

<script setup lang="ts">
const isData = ref(true);
const isNoData = ref(true);

// 픽업정보변경 팝업
const popChangePickupInfo = ref({ open: false });
const openChangePickupInfo = () => popChangePickupInfo.value.open = true;
</script>

<style lang="scss" scoped>

</style>
