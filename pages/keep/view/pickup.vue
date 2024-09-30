<template>
  <ContWrap class="not-navbar">
    <ContBox size="lg" gap="md">
      <!-- 픽업 매장 정보 - 당일픽업 -->
      <ColorBox color="white" size="lg">
        <CtitleWrap>
          <ETit type="lgCont" text="세븐일레븐 강남점" />
        </CtitleWrap>
        <TableWrap type="info" gap="sm" size="lg" table-name="픽업 정보">
          <colgroup>
            <col style="width: 83px;" />
            <col style="width: auto;" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">
                픽업일시
              </th>
              <td class="ta-right">
                2024.07.19(금) 10:00
              </td>
            </tr>
            <tr>
              <th scope="row">
                매장요청사항
              </th>
              <td class="ta-right">
                신선하게 보관해주세요.
              </td>
            </tr>
          </tbody>
        </TableWrap>
        <BtnWrap size="lg">
          <EBtn tag="a" color="line-light-gray" size="sm" to="/store/detail">
            <span class="text">매장상세정보</span>
          </EBtn>
        </BtnWrap>
      </ColorBox>
      <!-- // 픽업 매장 정보 - 당일픽업  -->

      <!-- 픽업 매장 정보 - 사전예약 -->
      <ColorBox color="white" size="lg">
        <CtitleWrap>
          <ETit type="lgCont" text="세븐일레븐 강남점" />
        </CtitleWrap>
        <TableWrap type="info" gap="sm" size="lg" table-name="픽업 정보">
          <colgroup>
            <col style="width: 59px;" />
            <col style="width: auto;" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">
                픽업일시
              </th>
              <td class="ta-right">
                2024.07.19(금) 10:00~12:00
              </td>
            </tr>
          </tbody>
        </TableWrap>
        <!-- 받은선물인 경우 노출 -->
        <div class="step-list-wrap">
          <ul class="step-col-list">
            <li class="step-item">
              <div class="status">
                주문접수중
              </div>
            </li>
            <li class="step-item is-active">
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
        <!-- 받은선물인 경우 노출 -->
        <BtnWrap size="lg">
          <EBtn tag="a" color="line-light-gray" size="sm" to="/store/detail">
            <span class="text">매장상세정보</span>
          </EBtn>
        </BtnWrap>
      </ColorBox>
      <!-- // 픽업 매장 정보 - 사전예약 -->

      <!-- [픽업대기] case -->
      <ColorBox color="white" size="lg">
        <ctitleWrap>
          <FlexGroup>
            <div class="flex-left">
              <ETit type="lgCont" text="픽업대기" />
            </div>
            <!-- DESC :: 받은선물인 경우 노출 -->
            <!-- <div class="flex-right">
              <EBadge size="md" color="line-gray" badge-text="받은선물" />
            </div> -->
            <!-- // DESC :: 받은선물인 경우 노출 -->
          </FlexGroup>
        </ctitleWrap>
        <div class="thumb-prod-keep">
          <!-- DESC :: 받은선물인 경우 노출 -->
          <!-- <EThumbProdBox size="2xl">
            <template #thumb>
              <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
            </template>
          </EThumbProdBox> -->
          <!-- // DESC :: 받은선물인 경우 노출 -->
          <div class="info-box">
            <CtitleWrap>
              <ETit type="xlCont">
                비비고 사골컵만두국 외 3건
              </ETit>
              <!-- DESC :: 받은선물인 경우 노출 -->
              <!-- <div class="stock">
                수량 <EGoods val="2" unit="개" />
              </div> -->
              <!-- // DESC :: 받은선물인 경우 노출 -->
            </CtitleWrap>
            <ColorBox color="line-light-gray" size="lg">
              <div class="barcode-box">
                <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="바코드 이미지" />
              </div>
            </ColorBox>
            <!-- DESC :: 받은선물인 경우 미노출 -->
            <CtitleWrap>
              <ETit type="cont">
                당일픽업 주문상품
                <span class="fc-spot">4</span>
              </ETit>
            </CtitleWrap>
            <SwiperAutoWrap gap="10" class="side-zero">
              <!-- slide -->
              <swiper-slide>
                <ColorBox color="light-gray" size="xs" class="keep-prod-box">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <ETit type="prod">
                        바리스타 로슈거 250ml
                      </ETit>
                      <div class="stock">
                        수량 <EGoods size="sm" val="N" unit="개" />
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                </ColorBox>
              </swiper-slide>
              <!-- // slide -->
              <!-- slide -->
              <swiper-slide>
                <ColorBox color="light-gray" size="xs" class="keep-prod-box">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <ETit type="prod">
                        바리스타 로슈거 250ml
                      </ETit>
                      <div class="stock">
                        수량 <EGoods size="sm" val="N" unit="개" />
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                </ColorBox>
              </swiper-slide>
              <!-- // slide -->
              <!-- slide -->
              <swiper-slide>
                <ColorBox color="light-gray" size="xs" class="keep-prod-box">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <ETit type="prod">
                        바리스타 로슈거 250ml
                      </ETit>
                      <div class="stock">
                        수량 <EGoods size="sm" val="N" unit="개" />
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                </ColorBox>
              </swiper-slide>
              <!-- // slide -->
              <!-- slide -->
              <swiper-slide>
                <ColorBox color="light-gray" size="xs" class="keep-prod-box">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <ETit type="prod">
                        바리스타 로슈거 250ml
                      </ETit>
                      <div class="stock">
                        수량 <EGoods size="sm" val="N" unit="개" />
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                </ColorBox>
              </swiper-slide>
              <!-- // slide -->
            </SwiperAutoWrap>
            <!-- // DESC :: 받은선물인 경우 미노출 -->
          </div>
        </div>
      </ColorBox>
      <!-- // [픽업대기] case -->

      <!-- [픽업완료] case -->
      <ColorBox color="white" size="lg">
        <ctitleWrap>
          <FlexGroup>
            <div class="flex-left">
              <ETit type="lgCont" text="픽업완료" />
            </div>
            <!-- DESC :: 받은선물인 경우 노출 -->
            <!-- <div class="flex-right">
              <EBadge size="md" color="line-gray" badge-text="받은선물" />
            </div> -->
            <!-- // DESC :: 받은선물인 경우 노출 -->
          </FlexGroup>
        </ctitleWrap>
        <div class="thumb-prod-keep is-dimmed">
          <!-- DESC :: 받은선물인 경우 노출 -->
          <!-- <EThumbProdBox size="2xl" dim="픽업완료">
            <template #thumb>
              <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
            </template>
          </EThumbProdBox> -->
          <!-- // DESC :: 받은선물인 경우 노출 -->
          <div class="info-box">
            <CtitleWrap>
              <ETit type="xlCont">
                비비고 사골컵만두국 외 3건
              </ETit>
              <!-- DESC :: 받은선물인 경우 노출 -->
              <!-- <div class="stock">
                수량 <EGoods val="2" unit="개" />
              </div> -->
              <!-- // DESC :: 받은선물인 경우 노출 -->
            </CtitleWrap>
            <ColorBox color="line-light-gray" size="lg">
              <div class="barcode-box">
                <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="바코드 이미지" />
              </div>
            </ColorBox>
            <!-- DESC :: 받은선물인 경우 미노출 -->
            <CtitleWrap>
              <ETit type="cont">
                당일픽업 주문상품
                <span class="fc-spot">4</span>
              </ETit>
            </CtitleWrap>
            <SwiperAutoWrap gap="10" class="side-zero">
              <!-- slide -->
              <swiper-slide>
                <ColorBox color="light-gray" size="xs" class="keep-prod-box">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <ETit type="prod">
                        바리스타 로슈거 250ml
                      </ETit>
                      <div class="stock">
                        수량 <EGoods size="sm" val="N" unit="개" />
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                </ColorBox>
              </swiper-slide>
              <!-- // slide -->
              <!-- slide -->
              <swiper-slide>
                <ColorBox color="light-gray" size="xs" class="keep-prod-box">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <ETit type="prod">
                        바리스타 로슈거 250ml
                      </ETit>
                      <div class="stock">
                        수량 <EGoods size="sm" val="N" unit="개" />
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                </ColorBox>
              </swiper-slide>
              <!-- // slide -->
              <!-- slide -->
              <swiper-slide>
                <ColorBox color="light-gray" size="xs" class="keep-prod-box">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <ETit type="prod">
                        바리스타 로슈거 250ml
                      </ETit>
                      <div class="stock">
                        수량 <EGoods size="sm" val="N" unit="개" />
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                </ColorBox>
              </swiper-slide>
              <!-- // slide -->
              <!-- slide -->
              <swiper-slide>
                <ColorBox color="light-gray" size="xs" class="keep-prod-box">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <ETit type="prod">
                        바리스타 로슈거 250ml
                      </ETit>
                      <div class="stock">
                        수량 <EGoods size="sm" val="N" unit="개" />
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                </ColorBox>
              </swiper-slide>
              <!-- // slide -->
            </SwiperAutoWrap>
            <!-- // DESC :: 받은선물인 경우 미노출 -->
          </div>
          <BtnWrap size="lg">
            <EBtn tag="a" color="line-light-gray" size="md" to="javascript:">
              <span class="text">상품리뷰</span>
            </EBtn>
            <EBtn tag="a" color="line-light-gray" size="md" to="javascript:">
              <span class="text">매장리뷰</span>
            </EBtn>
          </BtnWrap>
        </div>
      </ColorBox>
      <!-- // [픽업완료] case -->

      <!-- [기간만료] case -->
      <ColorBox color="white" size="lg">
        <ctitleWrap>
          <FlexGroup>
            <div class="flex-left">
              <ETit type="lgCont" text="기간만료" />
            </div>
            <!-- DESC :: 받은선물인 경우 노출 -->
            <div class="flex-right">
              <EBadge size="md" color="line-gray" badge-text="받은선물" />
            </div>
            <!-- // DESC :: 받은선물인 경우 노출 -->
          </FlexGroup>
        </ctitleWrap>
        <div class="thumb-prod-keep is-dimmed">
          <!-- DESC :: 받은선물인 경우 노출 -->
          <EThumbProdBox size="2xl" dim="기간만료">
            <template #thumb>
              <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
            </template>
          </EThumbProdBox>
          <!-- // DESC :: 받은선물인 경우 노출 -->
          <div class="info-box">
            <CtitleWrap>
              <ETit type="xlCont">
                비비고 사골컵만두국
              </ETit>
              <!-- DESC :: 받은선물인 경우 노출 -->
              <div class="stock">
                수량 <EGoods val="2" unit="개" />
              </div>
              <!-- // DESC :: 받은선물인 경우 노출 -->
            </CtitleWrap>
            <ColorBox color="line-light-gray" size="lg">
              <div class="barcode-box">
                <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="바코드 이미지" />
              </div>
            </ColorBox>
            <!-- DESC :: 받은선물인 경우 미노출 -->
            <!-- <CtitleWrap>
              <ETit type="cont">
                당일픽업 주문상품
                <span class="fc-spot">4</span>
              </ETit>
            </CtitleWrap>
            <SwiperAutoWrap gap="10" class="side-zero">
              &lt;!&ndash; slide &ndash;&gt;
              <swiper-slide>
                <ColorBox color="light-gray" size="xs" class="keep-prod-box">
                  &lt;!&ndash; thumb-prod-flex &ndash;&gt;
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지"/>
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <ETit type="prod">바리스타 로슈거 250ml</ETit>
                      <div class="stock">
                        수량 <EGoods size="sm" val="N" unit="개" />
                      </div>
                    </div>
                  </div>
                  &lt;!&ndash; // thumb-prod-flex &ndash;&gt;
                </ColorBox>
              </swiper-slide>
              &lt;!&ndash; // slide &ndash;&gt;
              &lt;!&ndash; slide &ndash;&gt;
              <swiper-slide>
                <ColorBox color="light-gray" size="xs" class="keep-prod-box">
                  &lt;!&ndash; thumb-prod-flex &ndash;&gt;
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지"/>
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <ETit type="prod">바리스타 로슈거 250ml</ETit>
                      <div class="stock">
                        수량 <EGoods size="sm" val="N" unit="개" />
                      </div>
                    </div>
                  </div>
                  &lt;!&ndash; // thumb-prod-flex &ndash;&gt;
                </ColorBox>
              </swiper-slide>
              &lt;!&ndash; // slide &ndash;&gt;
              &lt;!&ndash; slide &ndash;&gt;
              <swiper-slide>
                <ColorBox color="light-gray" size="xs" class="keep-prod-box">
                  &lt;!&ndash; thumb-prod-flex &ndash;&gt;
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지"/>
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <ETit type="prod">바리스타 로슈거 250ml</ETit>
                      <div class="stock">
                        수량 <EGoods size="sm" val="N" unit="개" />
                      </div>
                    </div>
                  </div>
                  &lt;!&ndash; // thumb-prod-flex &ndash;&gt;
                </ColorBox>
              </swiper-slide>
              &lt;!&ndash; // slide &ndash;&gt;
              &lt;!&ndash; slide &ndash;&gt;
              <swiper-slide>
                <ColorBox color="light-gray" size="xs" class="keep-prod-box">
                  &lt;!&ndash; thumb-prod-flex &ndash;&gt;
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지"/>
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <ETit type="prod">바리스타 로슈거 250ml</ETit>
                      <div class="stock">
                        수량 <EGoods size="sm" val="N" unit="개" />
                      </div>
                    </div>
                  </div>
                  &lt;!&ndash; // thumb-prod-flex &ndash;&gt;
                </ColorBox>
              </swiper-slide>
              &lt;!&ndash; // slide &ndash;&gt;
            </SwiperAutoWrap> -->
            <!-- // DESC :: 받은선물인 경우 미노출 -->
          </div>
        </div>
      </ColorBox>
      <!-- // [기간만료] case -->

      <!-- [주문접수중, 상품준비중] case -->
      <ColorBox color="white" size="lg">
        <ctitleWrap>
          <FlexGroup>
            <div class="flex-left">
              <ETit type="lgCont" text="주문접수중" />
            </div>
            <div class="flex-right">
              <EBadge size="md" color="line-gray" badge-text="받은선물" />
            </div>
          </FlexGroup>
        </ctitleWrap>
        <div class="thumb-prod-keep">
          <EThumbProdBox size="2xl">
            <template #thumb>
              <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
            </template>
          </EThumbProdBox>
          <div class="info-box">
            <CtitleWrap>
              <ETit type="xlCont">
                비비고 사골컵만두국
              </ETit>
              <div class="stock">
                수량 <EGoods val="2" unit="개" />
              </div>
            </CtitleWrap>
            <ColorBox color="line-light-gray" size="lg" class="disabled">
              <div class="barcode-box">
                <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="바코드 이미지" />
              </div>
            </ColorBox>
          </div>
        </div>
      </ColorBox>
      <!-- // [주문접수중, 상품준비중] case -->
    </ContBox>
    <ContBox size="lg">
      <CtitleWrap>
        <ETit type="xlCont" text="주문정보" />
      </CtitleWrap>

      <!-- [픽업대기, 픽업완료] 주문정보 -->
      <ColorBox color="white" size="lg">
        <TableWrap type="info" gap="sm" size="lg" table-name="주문정보">
          <colgroup>
            <col style="width: 61px;" />
            <col style="width: auto;" />
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
                교환기간
              </th>
              <td class="ta-right">
                2024.06.15 10:30 ~ 12:00
              </td>
            </tr>
            <!-- 받은선물 -->
            <tr>
              <th scope="row">
                보낸사람
              </th>
              <td class="ta-right">
                김세븐
              </td>
            </tr>
            <tr>
              <th scope="row">
                선물일시
              </th>
              <td class="ta-right">
                2024.06.15 10:23
              </td>
            </tr>
            <tr>
              <th scope="row">
                교환일시
              </th>
              <td class="ta-right">
                2024.06.15 10:23
              </td>
            </tr>
          <!-- // 받은선물 -->
          </tbody>
        </TableWrap>
      </ColorBox>
      <!-- // [픽업대기, 픽업완료] 주문정보 -->

      <!-- [기간만료] 주문정보 -->
      <ColorBox color="white" size="lg">
        <TableWrap type="info" gap="sm" size="lg" table-name="주문정보">
          <colgroup>
            <col style="width: 61px;" />
            <col style="width: auto;" />
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
            <!-- 받은선물 -->
            <tr>
              <th scope="row">
                보낸사람
              </th>
              <td class="ta-right">
                김세븐
              </td>
            </tr>
            <tr>
              <th scope="row">
                선물일시
              </th>
              <td class="ta-right">
                2024.06.15 10:23
              </td>
            </tr>
            <!-- // 받은선물 -->
            <tr>
              <th scope="row">
                만료일
              </th>
              <td class="ta-right">
                2024.06.15
              </td>
            </tr>
          </tbody>
        </TableWrap>
      </ColorBox>
      <!-- // [기간만료] 주문정보 -->

      <!-- [주문접수중, 상품준비중] 주문정보 -->
      <ColorBox color="white" size="lg">
        <TableWrap type="info" gap="sm" size="lg" table-name="주문정보">
          <colgroup>
            <col style="width: 61px;" />
            <col style="width: auto;" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">
                보낸사람
              </th>
              <td class="ta-right">
                김세븐
              </td>
            </tr>
            <tr>
              <th scope="row">
                선물일시
              </th>
              <td class="ta-right">
                2024.06.15 10:23
              </td>
            </tr>
            <tr>
              <th scope="row">
                교환기간
              </th>
              <td class="ta-right">
                2024.07.02 10:30 ~ 12:00
              </td>
            </tr>
          </tbody>
        </TableWrap>
      </ColorBox>
      <!-- // [주문접수중, 상품준비중] 주문정보 -->
    </ContBox>
    <ContBox size="lg" gap="sm">
      <!-- 픽업 서비스인 경우 -->
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
              <span class="fc-black">예약주문 상품 바코드 스캔</span>
            </li>
            <li class="dot-text">
              현금 합계 클릭
            </li>
            <li class="dot-text">
              상품증정
            </li>
          </RowListWrap>
        </template>
      </FoldToggleBox>
      <!-- // 픽업 서비스인 경우 -->
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
                <br />09:00~18:00 주말 및 공휴일 제외
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
                <br />10:00~20:00 주말 및 공휴일 제외
              </div>
            </CtitleWrap>
          </SContLineBox>
        </template>
      </FoldToggleBox>
    </ContBox>
  </ContWrap>
</template>

<script setup lang="ts">

</script>
