<template>
  <ContWrap class="not-navbar">
    <!-- [D-day] case -->
    <ContBox size="lg">
      <!-- [D-day] +1증정, 교환권 -->
      <ColorBox color="white" size="lg">
        <ctitleWrap>
          <ETit type="lgCont" text="D-93" />
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
            <BadgeGroup size="xl">
              <EBadge size="md" color="gray" badge-text="증정" />
            </BadgeGroup>
            <CtitleWrap>
              <ETit type="xlCont">
                비비고 사골컵만두국
              </ETit>
            </CtitleWrap>
            <ColorBox color="line-light-gray" size="lg">
              <div class="barcode-box">
                <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="바코드 이미지">
              </div>
            </ColorBox>
          </div>
          <BtnWrap size="lg">
            <EBtn color="green" size="md" @click="openGiftInput">
              <span class="text">선물하기</span>
            </EBtn>
          </BtnWrap>
        </div>
      </ColorBox>
      <!-- // [D-day] +1증정, 교환권 -->

      <!-- [D-day] +1증정,교환권(받은 선물) case -->
      <ColorBox color="white" size="lg">
        <ctitleWrap>
          <FlexGroup>
            <div class="flex-left">
              <ETit type="lgCont" text="D-93" />
            </div>
            <div class="flex-right">
              <EBadge size="md" color="line-gray" badge-text="받은선물" />
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
            <BadgeGroup size="xl">
              <EBadge size="md" color="gray" badge-text="증정" />
            </BadgeGroup>
            <CtitleWrap>
              <ETit type="xlCont">
                비비고 사골컵만두국
              </ETit>
            </CtitleWrap>
            <ColorBox color="line-light-gray" size="lg">
              <div class="barcode-box">
                <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="바코드 이미지">
              </div>
            </ColorBox>
          </div>
          <BtnWrap size="lg">
            <EBtn color="line-gray" size="md">
              <span class="text">기간연장</span>
            </EBtn>
          </BtnWrap>
        </div>
      </ColorBox>
      <!-- // [D-day] +1증정,교환권(받은 선물) case -->

      <!-- [D-day] 구독할인 -->
      <ColorBox color="white" size="lg">
        <ctitleWrap>
          <FlexGroup>
            <div class="flex-left">
              <ETit type="lgCont" text="D-93" />
            </div>
            <div class="flex-right">
              <EBadge size="md" color="line-gray" badge-text="정기구독" />
              <!-- <EBadge size="md" color="line-gray" badge-text="받은선물" /> -->
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
                와인구독
              </ETit>
              <div class="stext">
                (31일간, 일 1회 30% / 총 15회)
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
                  <col style="width: 83px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      사용기간
                    </th>
                    <td class="ta-right">
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
                  <!-- 적용시간 구독권 -->
                  <tr>
                    <th scope="row">
                      이용가능시간
                    </th>
                    <td class="ta-right">
                      9:00 ~ 11:00
                    </td>
                  </tr>
                <!-- // 적용시간 구독권 -->
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
      <!-- // [D-day] 구독할인 -->

      <!-- [D-day] 금액권 -->
      <ColorBox color="white" size="lg">
        <ctitleWrap>
          <FlexGroup>
            <div class="flex-left">
              <ETit type="lgCont" text="D-93" />
            </div>
            <div class="flex-right">
              <EBadge size="md" color="line-gray" badge-text="받은선물" />
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
                모바일금액권 5,000원
              </ETit>
            </CtitleWrap>
            <ColorBox color="line-light-gray" size="lg">
              <div class="barcode-box">
                <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="바코드 이미지">
              </div>
            </ColorBox>
            <ColorBox color="light-green" size="md">
              <TableWrap type="info" gap="sm" size="lg" table-name="금액권 정보">
                <colgroup>
                  <col style="width: 61px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      잔액
                    </th>
                    <td class="ta-right fc-spot fw-sb">
                      1,000원
                    </td>
                  </tr>
                </tbody>
              </TableWrap>
            </ColorBox>
          </div>
          <BtnWrap size="lg">
            <!-- <EBtn color="green" size="md" @click="openGiftInput">
              <span class="text">선물하기</span>
            </EBtn> -->
            <EBtn color="line-light-gray" size="md" @click="openVoucherHistory">
              <span class="text">이용내역</span>
            </EBtn>
            <EBtn color="line-gray" size="md">
              <span class="text">기간연장</span>
            </EBtn>
          </BtnWrap>
        </div>
      </ColorBox>
      <!-- // [D-day] 금액권 -->
    </ContBox>
    <!-- // [D-day] case -->

    <!-- [사용완료] case -->
    <ContBox size="lg">
      <!-- [사용완료] +1증정, 교환권 -->
      <ColorBox color="white" size="lg">
        <ctitleWrap>
          <FlexGroup>
            <div class="flex-left">
              <ETit type="lgCont" text="사용완료" />
            </div>
            <div class="flex-right">
              <EBadge size="md" color="line-gray" badge-text="받은선물" />
            </div>
          </FlexGroup>
        </ctitleWrap>
        <div class="thumb-prod-keep is-dimmed">
          <!-- thumb-prod-2xl -->
          <EThumbProdBox size="2xl" dim="사용완료">
            <template #thumb>
              <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
            </template>
          </EThumbProdBox>
          <!-- // thumb-prod-2xl -->
          <div class="info-box">
            <BadgeGroup size="xl">
              <EBadge size="md" color="gray" badge-text="증정" />
              <!-- <EBadge size="md" color="gray" badge-text="핫딜" /> -->
            </BadgeGroup>
            <CtitleWrap>
              <ETit type="xlCont">
                비비고 사골컵만두국
              </ETit>
            </CtitleWrap>
            <ColorBox color="line-light-gray" size="lg">
              <div class="barcode-box">
                <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="바코드 이미지">
              </div>
            </ColorBox>
          </div>
          <BtnWrap size="lg">
            <EBtn color="line-light-gray" size="md" @click="openWriteReview">
              <span class="text">상품리뷰</span>
            </EBtn>
            <EBtn color="line-light-gray" size="md" @click="openWriteReview('store')">
              <span class="text">매장리뷰</span>
            </EBtn>
          </BtnWrap>
        </div>
      </ColorBox>
      <!-- // [사용완료] +1증정, 교환권 -->

      <!-- [사용완료] +1증정, 교환권, 금액권(보낸선물 수락전) -->
      <ColorBox color="white" size="lg">
        <ctitleWrap>
          <FlexGroup>
            <div class="flex-left">
              <ETit type="lgCont" text="사용완료" />
            </div>
            <div class="flex-right">
              <EBadge size="md" color="line-gray" badge-text="받은선물" />
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
            <BadgeGroup size="xl">
              <EBadge size="md" color="gray" badge-text="증정" />
              <!-- <EBadge size="md" color="gray" badge-text="핫딜" /> -->
            </BadgeGroup>
            <CtitleWrap>
              <ETit type="xlCont">
                비비고 사골컵만두국
              </ETit>
            </CtitleWrap>
            <ColorBox color="line-light-gray" size="lg">
              <div class="barcode-box">
                <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="바코드 이미지">
              </div>
            </ColorBox>
          </div>
          <BtnWrap size="lg">
            <EBtn color="green" size="md">
              <span class="text">다시보내기</span>
            </EBtn>
            <EBtn color="line-light-gray" size="md">
              <span class="text">선물취소</span>
            </EBtn>
          </BtnWrap>
        </div>
      </ColorBox>
      <!-- // [사용완료] +1증정, 교환권, 금액권(보낸선물 수락전) -->

      <!-- [사용완료] 구독할인 -->
      <ColorBox color="white" size="lg">
        <ctitleWrap>
          <FlexGroup>
            <div class="flex-left">
              <ETit type="lgCont" text="사용완료" />
            </div>
            <div class="flex-right">
              <EBadge size="md" color="line-gray" badge-text="정기구독" />
              <!-- <EBadge size="md" color="line-gray" badge-text="받은선물" /> -->
            </div>
          </FlexGroup>
        </ctitleWrap>
        <div class="thumb-prod-keep is-dimmed">
          <!-- thumb-prod-2xl -->
          <EThumbProdBox size="2xl" dim="사용완료">
            <template #thumb>
              <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
            </template>
          </EThumbProdBox>
          <!-- // thumb-prod-2xl -->
          <div class="info-box">
            <BadgeGroup size="xl">
              <EBadge size="md" color="gray" badge-text="핫딜" />
            </BadgeGroup>
            <CtitleWrap>
              <ETit type="xlCont">
                비비고 사골컵만두국
              </ETit>
              <div class="stext">
                (31일간, 일 1회 30% / 총 15회)
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
                  <col style="width: 83px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      사용기간
                    </th>
                    <td class="ta-right">
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
                  <!-- 적용시간 구독권 -->
                  <tr>
                    <th scope="row">
                      이용가능시간
                    </th>
                    <td class="ta-right">
                      9:00 ~ 11:00
                    </td>
                  </tr>
                <!-- // 적용시간 구독권 -->
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
      <!-- // [사용완료] 구독할인 -->

      <!-- [사용완료] 금액권 -->
      <ColorBox color="white" size="lg">
        <ctitleWrap>
          <FlexGroup>
            <div class="flex-left">
              <ETit type="lgCont" text="사용완료" />
            </div>
            <div class="flex-right">
              <EBadge size="md" color="line-gray" badge-text="받은선물" />
            </div>
          </FlexGroup>
        </ctitleWrap>
        <div class="thumb-prod-keep is-dimmed">
          <!-- thumb-prod-2xl -->
          <EThumbProdBox size="2xl" dim="사용완료">
            <template #thumb>
              <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
            </template>
          </EThumbProdBox>
          <!-- // thumb-prod-2xl -->
          <div class="info-box">
            <BadgeGroup size="xl">
              <EBadge size="md" color="gray" badge-text="핫딜" />
            </BadgeGroup>
            <CtitleWrap>
              <ETit type="xlCont">
                모바일금액권 5,000원
              </ETit>
            </CtitleWrap>
            <ColorBox color="line-light-gray" size="lg">
              <div class="barcode-box">
                <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="바코드 이미지">
              </div>
            </ColorBox>
            <ColorBox color="light-green" size="md">
              <TableWrap type="info" gap="sm" size="lg" table-name="금액권 정보">
                <colgroup>
                  <col style="width: 61px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      잔액
                    </th>
                    <td class="ta-right fc-spot fw-sb">
                      1,000원
                    </td>
                  </tr>
                </tbody>
              </TableWrap>
            </ColorBox>
          </div>
          <BtnWrap size="lg">
            <EBtn color="line-light-gray" size="md" @click="openVoucherHistory">
              <span class="text">이용내역</span>
            </EBtn>
          </BtnWrap>
        </div>
      </ColorBox>
      <!-- // [사용완료] 금액권 -->
    </ContBox>
    <!-- // [사용완료] case -->

    <!-- [기간만료] case -->
    <ContBox size="lg">
      <!-- [기간만료] +1증정, 교환권 -->
      <ColorBox color="white" size="lg">
        <ctitleWrap>
          <FlexGroup>
            <div class="flex-left">
              <ETit type="lgCont" text="기간만료" />
            </div>
            <div class="flex-right">
              <EBadge size="md" color="line-gray" badge-text="받은선물" />
            </div>
          </FlexGroup>
        </ctitleWrap>
        <div class="thumb-prod-keep is-dimmed">
          <!-- thumb-prod-2xl -->
          <EThumbProdBox size="2xl" dim="기간만료">
            <template #thumb>
              <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
            </template>
          </EThumbProdBox>
          <!-- // thumb-prod-2xl -->
          <div class="info-box">
            <BadgeGroup size="xl">
              <EBadge size="md" color="gray" badge-text="증정" />
              <!-- <EBadge size="md" color="gray" badge-text="핫딜" /> -->
            </BadgeGroup>
            <CtitleWrap>
              <ETit type="xlCont">
                비비고 사골컵만두국
              </ETit>
            </CtitleWrap>
            <ColorBox color="line-light-gray" size="lg">
              <div class="barcode-box">
                <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="바코드 이미지">
              </div>
            </ColorBox>
          </div>
        </div>
      </ColorBox>
      <!-- // [기간만료] +1증정, 교환권 -->

      <!-- [기간만료] 구독할인 -->
      <ColorBox color="white" size="lg">
        <ctitleWrap>
          <FlexGroup>
            <div class="flex-left">
              <ETit type="lgCont" text="기간만료" />
            </div>
            <div class="flex-right">
              <EBadge size="md" color="line-gray" badge-text="정기구독" />
              <!-- <EBadge size="md" color="line-gray" badge-text="받은선물" /> -->
            </div>
          </FlexGroup>
        </ctitleWrap>
        <div class="thumb-prod-keep is-dimmed">
          <!-- thumb-prod-2xl -->
          <EThumbProdBox size="2xl" dim="기간만료">
            <template #thumb>
              <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
            </template>
          </EThumbProdBox>
          <!-- // thumb-prod-2xl -->
          <div class="info-box">
            <BadgeGroup size="xl">
              <EBadge size="md" color="gray" badge-text="핫딜" />
            </BadgeGroup>
            <CtitleWrap>
              <ETit type="xlCont">
                비비고 사골컵만두국
              </ETit>
              <div class="stext">
                (31일간, 일 1회 30% / 총 15회)
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
                  <col style="width: 83px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      사용기간
                    </th>
                    <td class="ta-right">
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
                  <!-- 적용시간 구독권 -->
                  <tr>
                    <th scope="row">
                      이용가능시간
                    </th>
                    <td class="ta-right">
                      9:00 ~ 11:00
                    </td>
                  </tr>
                <!-- // 적용시간 구독권 -->
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
      <!-- // [기간만료] 구독할인 -->

      <!-- [기간만료] 금액권 -->
      <ColorBox color="white" size="lg">
        <ctitleWrap>
          <FlexGroup>
            <div class="flex-left">
              <ETit type="lgCont" text="기간만료" />
            </div>
            <div class="flex-right">
              <EBadge size="md" color="line-gray" badge-text="받은선물" />
            </div>
          </FlexGroup>
        </ctitleWrap>
        <div class="thumb-prod-keep is-dimmed">
          <!-- thumb-prod-2xl -->
          <EThumbProdBox size="2xl" dim="기간만료">
            <template #thumb>
              <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
            </template>
          </EThumbProdBox>
          <!-- // thumb-prod-2xl -->
          <div class="info-box">
            <BadgeGroup size="xl">
              <EBadge size="md" color="gray" badge-text="핫딜" />
            </BadgeGroup>
            <CtitleWrap>
              <ETit type="xlCont">
                모바일금액권 5,000원
              </ETit>
            </CtitleWrap>
            <ColorBox color="line-light-gray" size="lg">
              <div class="barcode-box">
                <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="바코드 이미지">
              </div>
            </ColorBox>
            <ColorBox color="light-green" size="md">
              <TableWrap type="info" gap="sm" size="lg" table-name="금액권 정보">
                <colgroup>
                  <col style="width: 61px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      잔액
                    </th>
                    <td class="ta-right fc-spot fw-sb">
                      1,000원
                    </td>
                  </tr>
                </tbody>
              </TableWrap>
            </ColorBox>
          </div>
          <BtnWrap size="lg">
            <EBtn color="line-light-gray" size="md" @click="openVoucherHistory">
              <span class="text">이용내역</span>
            </EBtn>
          </BtnWrap>
        </div>
      </ColorBox>
      <!-- // [기간만료] 금액권 -->
    </ContBox>
    <!-- // [기간만료] case -->

    <ContBox size="lg">
      <CtitleWrap>
        <ETit type="xlCont" text="주문정보" />
      </CtitleWrap>
      <!-- [D-day] 주문정보 -->
      <ColorBox color="white" size="lg">
        <TableWrap type="info" gap="sm" size="lg" table-name="주문정보">
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
                교환기간
              </th>
              <td class="ta-right">
                2024.10.30까지
              </td>
            </tr>
            <!-- // 받은선물 -->
            <!-- 구독할인, 금액권 -->
            <tr>
              <th scope="row">
                사용기간
              </th>
              <td class="ta-right">
                2024.10.30까지
              </td>
            </tr>
            <!-- // 구독할인, 금액권 -->
            <!-- 금액권 -->
            <tr>
              <th scope="row">
                기간연장
              </th>
              <td class="ta-right">
                1회 93일 연장가능 (최대 5년)
              </td>
            </tr>
          <!-- // 금액권 -->
          </tbody>
        </TableWrap>
      </ColorBox>
      <!-- // [D-day] 주문정보 -->

      <!-- [사용완료] 주문정보 -->
      <ColorBox color="white" size="lg">
        <TableWrap type="info" gap="sm" size="lg" table-name="주문정보">
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
            <!-- 보낸선물 -->
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
                받는사람
              </th>
              <td class="ta-right">
                010-2039-3456
              </td>
            </tr>
            <!-- // 보낸선물 -->
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
                사용일시
              </th>
              <td class="ta-right">
                2024.06.15 10:23
              </td>
            </tr>
            <tr>
              <th scope="row">
                사용매장
              </th>
              <td class="ta-right">
                세븐일레븐 시그니처 타워점
              </td>
            </tr>
          <!-- // 받은선물 -->
          </tbody>
        </TableWrap>
      </ColorBox>
      <!-- // [사용완료] 주문정보 -->

      <!-- [기간만료] 주문정보 -->
      <ColorBox color="white" size="lg">
        <TableWrap type="info" gap="sm" size="lg" table-name="주문정보">
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
                2024.10.30
              </td>
            </tr>
          </tbody>
        </TableWrap>
      </ColorBox>
      <!-- // [기간만료] 주문정보 -->
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
              <ETit size="sm">
                <ETBtn tag="a" size="md" to="tel:1577-0711">
                  <span class="text fc-black fw-sb">콜센터 1577-0711</span>
                </ETBtn>
              </ETit>
              <div class="stext">
                APP 이용 및 매장관련문의
                <br>09:00~18:00 주말 및 공휴일 제외
              </div>
            </CtitleWrap>
          </SContLineBox>
          <SContLineBox>
            <CtitleWrap size="zero">
              <ETit size="sm">
                <ETBtn tag="a" size="md" to="tel:1522-2552">
                  <span class="text fc-black fw-sb">쿠폰사용 관련 문의 1522-2552</span>
                </ETBtn>
              </ETit>
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

  <!-- pop : 선물하기 -->
  <PopCommGiftInput v-model:sta="popGiftInput" is-send-gift />
  <!-- // pop : 선물하기 -->

  <!-- pop : 구독할인 이용내역 -->
  <PopCommSubscribeHistory v-model:sta="popSubscribeHistory" />
  <!-- // pop : 구독할인 이용내역 -->

  <!-- pop : 금액권 이용내역 -->
  <PopKeepVoucherHistory v-model:sta="popVoucherHistory" />
  <!-- // pop : 금액권 이용내역 -->

  <!-- pop : 리뷰작성 팝업 -->
  <PopCommWriteReview v-model:sta="popWriteReview" :active-type="WriteReviewType" />
  <!-- // pop : 리뷰작성 팝업 -->
</template>

<script setup lang="ts">
definePageMeta({
  title: "교환권보기",
  hideRightHeader: false,
});

// 선물하기 팝업
const popGiftInput = ref({ open: false });
const openGiftInput = () => popGiftInput.value.open = true;

// 구독할인 이용내역 팝업
const popSubscribeHistory = ref({ open: false });
const openSubscribeHistory = () => popSubscribeHistory.value.open = true;

// 금액권 이용내역 팝업
const popVoucherHistory = ref({ open: false });
const openVoucherHistory = () => popVoucherHistory.value.open = true;

// 리뷰작성 팝업
const popWriteReview = ref({ open: false });

const WriteReviewType = ref<string>();
const openWriteReview = (type: string = "prod") => {
  WriteReviewType.value = type;
  popWriteReview.value.open = true;
};

const closeWriteReview = () => popWriteReview.value.open = false;
</script>

<style lang="scss" scoped>

</style>
