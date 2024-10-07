<template>
  <ContWrap>
    <ContBox>
      <div v-if="isData || isNoDataFilter" class="list-header">
        <FlexGroup align="center">
          <div class="flex-left">
            <div class="goods-group">
              <EGoods val="8" unit="건" />
            </div>
          </div>
          <div class="flex-right">
            <!-- DESC :: 활성화시 is-active 클래스 추가 -->
            <button type="button" class="btn-filter is-active" @click="openMyOrderFilterOption">
              <EIco name="filter" color="gray" size="xs" />
            </button>
          </div>
        </FlexGroup>
      </div>
      <!-- 주문내역 목록 있음 -->
      <RowListWrap v-if="isData">
        <!-- 구독할인 -->
        <!-- case 01 : 구독중 -->
        <li class="item-keep">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <FlexGroup>
                <div class="info-flex-left">
                  <CtitleWrap size="zero">
                    <EBadge size="md" color="light-green" badge-text="구독할인" />
                    <ETit type="cont" text="구독중" />
                  </CtitleWrap>
                </div>
                <div class="flex-right">
                  <div class="stext-gray70">
                    주문일 2024.07.02
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <BadgeGroup gap="md">
                  <EBadge color="line-gray" size="sm" badge-text="정기구독" />
                </BadgeGroup>
                <ETit type="prod">
                  와인 구독
                </ETit>
                <div class="goods-group">
                  <span class="label">월</span>
                  <EGoods size="md" val="2,700" unit="원" class="fw-sb" />
                </div>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
            <BtnWrap size="md">
              <EBtn color="line-light-gray" size="sm" @click="openSubscribePayHistory">
                <span class="text">결제내역</span>
              </EBtn>
              <EBtn tag="a" color="line-light-gray" size="sm" to="/my/order/detail">
                <span class="text">주문상세</span>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
        <!-- // case 01 : 구독중 -->
        <!-- // 구독할인 -->

        <!-- 당일픽업 -->
        <!-- case 01 : 주문완료(주문 접수중) -->
        <li class="item-keep">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <FlexGroup>
                <div class="info-flex-left">
                  <CtitleWrap size="zero">
                    <EBadge size="md" color="light-green" badge-text="당일픽업" />
                    <ETit type="cont" text="주문완료" />
                  </CtitleWrap>
                </div>
                <div class="flex-right">
                  <div class="stext-gray70">
                    주문일 2024.07.02
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">
                  비비고)사골컵만두국
                </ETit>
                <div class="goods-group">
                  <EGoods size="md" val="2,700" unit="원" class="fw-sb" />
                </div>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
            <div class="pickup-info-wrap">
              <ColorBox color="light-gray" size="sm">
                <TableWrap type="info" gap="sm" size="md" table-name="픽업 정보">
                  <colgroup>
                    <col style="width: 103px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        세븐일레븐 강남점
                      </th>
                      <td class="ta-right">
                        2024.06.29(수) 15:00
                      </td>
                    </tr>
                  </tbody>
                </TableWrap>
              </ColorBox>
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
            </div>
            <BtnWrap size="md">
              <EBtn tag="a" color="line-light-gray" size="sm" to="/my/order/detail">
                <span class="text">주문상세</span>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
        <!-- // case 01 : 주문완료(주문 접수중) -->
        <!-- case 02 : 주문완료(전체주문취소) -->
        <li class="item-keep">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <FlexGroup>
                <div class="info-flex-left">
                  <CtitleWrap size="zero">
                    <EBadge size="md" color="light-green" badge-text="당일픽업" />
                    <ETit type="cont" text="주문취소" />
                  </CtitleWrap>
                </div>
                <div class="flex-right">
                  <div class="stext-gray70">
                    주문일 2024.07.02
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md" dim="주문취소">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">
                  비비고)사골컵만두국 외 3건
                </ETit>
                <div class="goods-group">
                  <EGoods size="md" val="2,700" unit="원" class="fw-sb" />
                </div>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
            <div class="pickup-info-wrap">
              <ColorBox color="light-gray" size="sm">
                <TableWrap type="info" gap="sm" size="md" table-name="픽업 정보">
                  <colgroup>
                    <col style="width: 103px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        세븐일레븐 강남점
                      </th>
                      <td class="ta-right">
                        2024.06.29(수) 15:00
                      </td>
                    </tr>
                  </tbody>
                </TableWrap>
              </ColorBox>
            </div>
            <BtnWrap size="md">
              <EBtn tag="a" color="line-light-gray" size="sm" to="/my/order/detail">
                <span class="text">주문상세</span>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
        <!-- // case 02 : 주문완료(전체주문취소) -->
        <!-- // 당일픽업 -->

        <!-- 사전예약 -->
        <!-- case 01 : 주문완료(1개의 주문건에 2개의 매장 픽업을 진행하는 경우 - 상품 준비중/픽업완료) -->
        <li class="item-keep">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <FlexGroup>
                <div class="info-flex-left">
                  <CtitleWrap size="zero">
                    <EBadge size="md" color="light-green" badge-text="사전예약" />
                    <ETit type="cont" text="주문완료" />
                  </CtitleWrap>
                </div>
                <div class="flex-right">
                  <div class="stext-gray70">
                    주문일 2024.07.02
                  </div>
                </div>
              </FlexGroup>
            </div>
            <SContLineBox>
              <!-- thumb-prod-flex -->
              <div class="thumb-prod-flex">
                <EThumbProdBox size="md">
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <div class="info-box">
                  <ETit type="prod">
                    비비고)사골컵만두국
                  </ETit>
                  <div class="goods-group">
                    <EGoods size="md" val="2,700" unit="원" class="fw-sb" />
                  </div>
                </div>
              </div>
              <!-- // thumb-prod-flex -->
              <div class="pickup-info-wrap">
                <ColorBox color="light-gray" size="sm">
                  <TableWrap type="info" gap="sm" size="md" table-name="픽업 정보">
                    <colgroup>
                      <col style="width: 103px;">
                      <col style="width: auto;">
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">
                          세븐일레븐 강남점
                        </th>
                        <td class="ta-right">
                          2024.06.29(수) 15:00
                        </td>
                      </tr>
                    </tbody>
                  </TableWrap>
                </ColorBox>
                <div class="step-list-wrap">
                  <ul class="step-col-list">
                    <li class="step-item">
                      <div class="status">
                        주문접수중
                      </div>
                    </li>
                    <li class="step-item">
                      <div class="status">
                        상품준비중
                      </div>
                    </li>
                    <li class="step-item is-active">
                      <div class="status">
                        픽업대기
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </SContLineBox>
            <SContLineBox>
              <!-- thumb-prod-flex -->
              <div class="thumb-prod-flex">
                <EThumbProdBox size="md" dim="픽업완료">
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                  </template>
                </EThumbProdBox>
                <div class="info-box">
                  <ETit type="prod">
                    비비고)사골컵만두국
                  </ETit>
                  <div class="goods-group">
                    <EGoods size="md" val="2,700" unit="원" class="fw-sb" />
                  </div>
                </div>
              </div>
              <!-- // thumb-prod-flex -->
              <div class="pickup-info-wrap">
                <ColorBox color="light-gray" size="sm">
                  <TableWrap type="info" gap="sm" size="md" table-name="픽업 정보">
                    <colgroup>
                      <col style="width: 103px;">
                      <col style="width: auto;">
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">
                          세븐일레븐 강남점
                        </th>
                        <td class="ta-right">
                          2024.06.29(수) 15:00
                        </td>
                      </tr>
                    </tbody>
                  </TableWrap>
                </ColorBox>
              </div>
            </SContLineBox>
            <BtnWrap size="md">
              <EBtn tag="a" color="line-light-gray" size="sm" to="/my/order/detail">
                <span class="text">주문상세</span>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
        <!-- // case 01 : 주문완료(1개의 주문건에 2개의 매장 픽업을 진행하는 경우 - 상품 준비중/픽업완료) -->
        <!-- case 02 : 취소접수 -->
        <li class="item-keep">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <FlexGroup>
                <div class="info-flex-left">
                  <CtitleWrap size="zero">
                    <EBadge size="md" color="light-green" badge-text="사전예약" />
                    <ETit type="cont" text="취소접수" />
                  </CtitleWrap>
                </div>
                <div class="flex-right">
                  <div class="stext-gray70">
                    주문일 2024.07.02
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md" dim="주문취소">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">
                  비비고)사골컵만두국
                </ETit>
                <div class="goods-group">
                  <EGoods size="md" val="2,700" unit="원" class="fw-sb" />
                </div>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
            <div class="pickup-info-wrap">
              <ColorBox color="light-gray" size="sm">
                <TableWrap type="info" gap="sm" size="md" table-name="픽업 정보">
                  <colgroup>
                    <col style="width: 103px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        세븐일레븐 강남점
                      </th>
                      <td class="ta-right">
                        2024.06.29(수) 15:00
                      </td>
                    </tr>
                  </tbody>
                </TableWrap>
              </ColorBox>
            </div>
            <BtnWrap size="md">
              <EBtn tag="a" color="line-light-gray" size="sm" to="/my/order/detail">
                <span class="text">주문상세</span>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
        <!-- // case 02 : 취소접수 -->
        <!-- // 사전예약 -->

        <!-- 교환권 -->
        <!-- case 01 : 주문완료(다건 미사용) -->
        <li class="item-keep">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <FlexGroup>
                <div class="info-flex-left">
                  <CtitleWrap size="zero">
                    <EBadge size="md" color="light-green" badge-text="교환권" />
                    <ETit type="cont" text="주문완료" />
                  </CtitleWrap>
                </div>
                <div class="flex-right">
                  <div class="stext-gray70">
                    주문일 2024.07.02
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">
                  오리온)마이구미 1000 외 3건
                </ETit>
                <div class="goods-group">
                  <EGoods size="md" val="2,700" unit="원" class="fw-sb" />
                </div>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
            <BtnWrap size="md">
              <EBtn tag="a" color="line-light-gray" size="sm" to="/my/order/detail">
                <span class="text">주문상세</span>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
        <!-- // case 01 : 주문완료(다건 미사용) -->
        <!-- case 02 : 선물취소완료(전체취소) -->
        <li class="item-keep">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <FlexGroup>
                <div class="info-flex-left">
                  <CtitleWrap size="zero">
                    <EBadge size="md" color="light-green" badge-text="교환권" />
                    <ETit type="cont" text="주문완료" />
                  </CtitleWrap>
                </div>
                <div class="flex-right">
                  <div class="stext-gray70">
                    주문일 2024.07.02
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md" dim="선물취소">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <BadgeGroup gap="md">
                  <EBadge color="line-gray" size="sm" badge-text="보낸선물" />
                </BadgeGroup>
                <ETit type="prod">
                  육개장사발면
                </ETit>
                <div class="goods-group">
                  <EGoods size="md" val="2,700" unit="원" class="fw-sb" />
                </div>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
            <ColorBox color="light-gray" size="sm">
              <TableWrap type="info" gap="sm" size="md" table-name="받는사람 정보">
                <colgroup>
                  <col style="width: 55px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      받는사람
                    </th>
                    <td>
                      010-4321-5678
                    </td>
                  </tr>
                </tbody>
              </TableWrap>
            </ColorBox>
            <BtnWrap size="md">
              <EBtn tag="a" color="line-light-gray" size="sm" to="/my/order/detail">
                <span class="text">주문상세</span>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
        <!-- // case 02 : 선물취소완료(전체취소) -->
        <!-- // 교환권 -->

        <!-- 금액권 -->
        <!-- case 01 : 주문완료 -->
        <li class="item-keep">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <FlexGroup>
                <div class="info-flex-left">
                  <CtitleWrap size="zero">
                    <EBadge size="md" color="light-green" badge-text="금액권" />
                    <ETit type="cont" text="주문완료" />
                  </CtitleWrap>
                </div>
                <div class="flex-right">
                  <div class="stext-gray70">
                    주문일 2024.07.02
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">
                  모바일 상품권 5,000원권 외 3건
                </ETit>
                <div class="goods-group">
                  <EGoods size="md" val="5,000" unit="원" class="fw-sb" />
                </div>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
            <BtnWrap size="md">
              <EBtn tag="a" color="line-light-gray" size="sm" to="/my/order/detail">
                <span class="text">주문상세</span>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
        <!-- // case 01 : 주문완료 -->
        <!-- case 02 : 선물주문완료(선물완료) -->
        <li class="item-keep">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <FlexGroup>
                <div class="info-flex-left">
                  <CtitleWrap size="zero">
                    <EBadge size="md" color="light-green" badge-text="금액권" />
                    <ETit type="cont" text="주문완료" />
                  </CtitleWrap>
                </div>
                <div class="flex-right">
                  <div class="stext-gray70">
                    주문일 2024.07.02
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md" dim="선물완료">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <BadgeGroup gap="md">
                  <EBadge color="line-gray" size="sm" badge-text="보낸선물" />
                </BadgeGroup>
                <ETit type="prod">
                  모바일금액권 5,000원
                </ETit>
                <div class="goods-group">
                  <EGoods size="md" val="2,700" unit="원" class="fw-sb" />
                </div>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
            <ColorBox color="light-gray" size="sm">
              <TableWrap type="info" gap="sm" size="md" table-name="받는사람 정보">
                <colgroup>
                  <col style="width: 55px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      받는사람
                    </th>
                    <td>
                      010-4321-5678
                    </td>
                  </tr>
                </tbody>
              </TableWrap>
            </ColorBox>
            <BtnWrap size="md">
              <EBtn tag="a" color="line-light-gray" size="sm" to="/my/order/detail">
                <span class="text">주문상세</span>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
        <!-- // case 02 : 선물주문완료(선물완료) -->
        <!-- // 금액권 -->

        <!-- 홈배송 -->
        <!-- case 01 : 주문완료(단건 미사용) -->
        <li class="item-keep">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <FlexGroup>
                <div class="info-flex-left">
                  <CtitleWrap size="zero">
                    <EBadge size="md" color="light-green" badge-text="홈배송" />
                    <ETit type="cont" text="주문완료" />
                  </CtitleWrap>
                </div>
                <div class="flex-right">
                  <div class="stext-gray70">
                    주문일 2024.07.02
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">
                  스파클생수 2L 12병
                </ETit>
                <div class="goods-group">
                  <EGoods size="md" val="5,000" unit="원" class="fw-sb" />
                </div>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
            <BtnWrap size="md">
              <EBtn tag="a" color="line-light-gray" size="sm" to="/my/order/detail">
                <span class="text">주문상세</span>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
        <!-- // case 01 : 주문완료(단건 미사용) -->
        <!-- // 홈배송 -->
      </RowListWrap>
      <!-- // 주문내역 목록 있음 -->

      <!-- 필터 조건 검색결과 없음 -->
      <InfoGuideWrap
        v-if="isNoDataFilter"
        type="no-data"
        name="filter-result"
        desc="조건에 맞는 주문내역이 없습니다."
        sub-desc="조건을 다시 선택해 주세요."
      />
      <!-- // 필터 조건 검색결과 없음 -->
    </ContBox>

    <!-- 주문내역 목록 없음 -->
    <ContBox v-if="isNoData">
      <InfoGuideWrap
        type="no-data"
        name="history"
        desc="주문하신 내역이 없습니다."
        sub-desc="세븐일레븐에서 판매중인 다양한 상품을<br />편리하게 앱으로 구매하세요."
      />
      <BtnWrap type="auto-center" size="lg">
        <EBtn tag="a" color="line-gray" size="md" to="/service">
          <span class="text">세븐일레븐 상품보기</span>
        </EBtn>
      </BtnWrap>
    </ContBox>
    <!-- // 주문내역 목록 없음 -->
  </ContWrap>

  <!-- pop : 주문내역 - 필터 옵션 -->
  <PopCommFilterOption v-model:sta="popMyOrderFilterOption">
    <!-- 필터옵션목록 -->
    <template #option>
      <li class="item-xl">
        <div class="form-field">
          <div class="form-title">
            <ETit text="주문상태" type="cont" />
          </div>
          <div class="form-cont">
            <div class="form-input-group">
              <UiColGroup gap="sm">
                <span class="ui-rdo-button">
                  <input id="filterMyOrderType01" type="radio" name="filterStatus01">
                  <label for="filterMyOrderType01"><span class="text-sm">전체</span></label>
                </span>
                <span class="ui-rdo-button">
                  <input id="filterMyOrderType02" type="radio" name="filterStatus01">
                  <label for="filterMyOrderType02"><span class="text-sm">구독중</span></label>
                </span>
                <span class="ui-rdo-button">
                  <input id="filterMyOrderType03" type="radio" name="filterStatus01">
                  <label for="filterMyOrderType03"><span class="text-sm">주문완료</span></label>
                </span>
                <span class="ui-rdo-button">
                  <input id="filterMyOrderType04" type="radio" name="filterStatus01">
                  <label for="filterMyOrderType04"><span class="text-sm">주문취소</span></label>
                </span>
              </UiColGroup>
            </div>
          </div>
        </div>
      </li>
      <li class="item-xl">
        <div class="form-field">
          <div class="form-title">
            <ETit text="조회기간" type="cont" />
          </div>
          <div class="form-cont">
            <div class="form-input-group">
              <UiColGroup gap="sm">
                <span class="ui-rdo-button">
                  <input id="filterOptionDate01" v-model="periodPicked" value="periodDate01" type="radio">
                  <label for="filterOptionDate01"><span class="text-sm">최근3개월</span></label>
                </span>
                <span class="ui-rdo-button">
                  <input id="filterOptionDate02" v-model="periodPicked" value="periodDate02" type="radio">
                  <label for="filterOptionDate02"><span class="text-sm">6개월</span></label>
                </span>
                <span class="ui-rdo-button">
                  <input id="filterOptionDate03" v-model="periodPicked" value="periodDate03" type="radio">
                  <label for="filterOptionDate03"><span class="text-sm">1년</span></label>
                </span>
                <span class="ui-rdo-button">
                  <input id="filterOptionDate04" v-model="periodPicked" value="periodDateInput" type="radio">
                  <label for="filterOptionDate04"><span class="text-sm">직접입력</span></label>
                </span>
              </UiColGroup>
              <FlexGroup>
                <div class="flex-left">
                  <EDatePicker :disabled="isDateInputDisabled" placeholder="시작일" />
                </div>
                <span class="gap">~</span>
                <div class="flex-right">
                  <EDatePicker :disabled="isDateInputDisabled" placeholder="종료일" />
                </div>
              </FlexGroup>
            </div>
          </div>
        </div>
      </li>
    </template>
    <!-- // 필터옵션목록 -->
    <template #footer>
      <div class="dialog-btn-auto-wrap">
        <EBtn color="line-light-gray" size="lg">
          <span class="text">초기화</span>
        </EBtn>
        <EBtn color="green" size="lg" @click="popMyOrderFilterOption.open = false">
          <span class="text">적용</span>
        </EBtn>
      </div>
    </template>
  </PopCommFilterOption>
  <!-- // pop : 주문내역 - 필터 옵션 -->

  <!-- pop : 구독할인 결제내역 -->
  <PopMySubscribePayHistory v-model:sta="popSubscribePayHistory" />
  <!-- // pop : 구독할인 결제내역 -->
</template>

<script setup lang="ts">
const isData = ref(true); // 임시 : 주문내역 목록 컨텐츠 확인을 위해 추가
const isNoData = ref(false); // 임시 : 주문내역 목록 없음 컨텐츠 확인을 위해 추가
const isNoDataFilter = ref(false); // 임시 : 주문내역 필터 결과 없음 컨텐츠 확인을 위해 추가

// 기간 날짜 조회
const periodPicked = ref();
const isDateInputDisabled = ref<boolean>(true);

watch(periodPicked, (value) => {
  isDateInputDisabled.value = value !== "periodDateInput";
});

// 필터옵션 팝업
const popMyOrderFilterOption = ref({ open: false });
const openMyOrderFilterOption = () => popMyOrderFilterOption.value.open = true;

// 구독할인 결제내역 팝업
const popSubscribePayHistory = ref({ open: false });
const openSubscribePayHistory = () => popSubscribePayHistory.value.open = true;
</script>

<style lang="scss" scoped>

</style>
