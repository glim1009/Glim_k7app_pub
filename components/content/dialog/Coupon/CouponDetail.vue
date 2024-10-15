<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        쿠폰보기
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap in-top="zero" type="white">
          <!-- [사용 가능] case -->
          <ContBox>
            <!-- [사용 가능] - 앱전용 -->
            <div class="thumb-prod-keep">
              <!-- thumb-prod-2xl -->
              <EThumbProdBox size="2xl">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품 이미지">
                </template>
              </EThumbProdBox>
              <!-- // thumb-prod-2xl -->
              <div class="info-box">
                <BadgeGroup size="xl">
                  <EBadge size="md" color="orange" badge-text="당첨" />
                </BadgeGroup>
                <CtitleWrap>
                  <ETit type="xlCont">
                    애니팡 쿠폰 코드
                  </ETit>
                  <p class="stext-lg">
                    애니팡 30,000 다이아몬드 쿠폰
                  </p>
                </CtitleWrap>
                <ColorBox color="light-gray" size="sm">
                  <div class="align-group">
                    <span ref="copyTextRef" class="stext-black">T23WE04DEWQW</span>
                    <EBtn color="line-light-gray" size="xs" @click="copyText">
                      <span class="text">복사</span>
                    </EBtn>
                  </div>
                </ColorBox>
                <TableWrap type="info" gap="sm" size="lg" table-name="쿠폰정보">
                  <colgroup>
                    <col style="width: 70px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        사용기간
                      </th>
                      <td class="ta-right">
                        2024.06.30~2024.12.31
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        당첨일
                      </th>
                      <td class="ta-right">
                        2024.06.28
                      </td>
                    </tr>
                  </tbody>
                </TableWrap>
              </div>
            </div>
            <!-- // [사용 가능] - 앱전용 -->
            <!-- [사용 가능] - 매장전용 > 장바구니 할인쿠폰 -->
            <div class="thumb-prod-keep">
              <!-- thumb-prod-2xl -->
              <EThumbProdBox size="2xl">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품 이미지">
                </template>
              </EThumbProdBox>
              <!-- // thumb-prod-2xl -->
              <div class="info-box">
                <CtitleWrap>
                  <ETit type="xlCont">
                    가을 장바구니 쿠폰
                  </ETit>
                  <p class="stext-lg">
                    1,000원 할인
                  </p>
                </CtitleWrap>
                <ColorBox color="line-light-gray" size="lg">
                  <div class="barcode-box">
                    <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="바코드 이미지">
                    <!-- <img src="/assets/images/temp/temp_img_barcode_qr_delivery.svg" alt="QR코드 이미지"> -->
                  </div>
                </ColorBox>
                <TableWrap type="info" gap="sm" size="lg" table-name="쿠폰정보">
                  <colgroup>
                    <col style="width: 70px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        유효기간
                      </th>
                      <td class="ta-right">
                        2024.06.30~2024.12.31
                        <!-- DESC :: 쿠폰 사용 기간 시작일 이전에 접근한 경우 노출 -->
                        <br>(쿠폰 사용 가능 기간이 아닙니다.)
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        사용조건
                      </th>
                      <td class="ta-right">
                        10,000원 이상 결제
                      </td>
                    </tr>
                    <!-- DESC :: 정률일 경우 최대할인 정보 노출 -->
                    <tr>
                      <th scope="row">
                        최대할인
                      </th>
                      <td class="ta-right">
                        1,000원
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        발급일
                      </th>
                      <td class="ta-right">
                        2024.07.01
                      </td>
                    </tr>
                  </tbody>
                </TableWrap>
              </div>
            </div>
            <!-- // [사용 가능] - 매장전용 > 장바구니 할인쿠폰 -->
            <!-- [사용 가능] - 매장전용 > 경품교환권 -->
            <div class="thumb-prod-keep">
              <!-- thumb-prod-2xl -->
              <EThumbProdBox size="2xl">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품 이미지">
                </template>
              </EThumbProdBox>
              <!-- // thumb-prod-2xl -->
              <div class="info-box">
                <BadgeGroup size="xl">
                  <EBadge size="md" color="orange" badge-text="당첨" />
                </BadgeGroup>
                <CtitleWrap>
                  <ETit type="xlCont">
                    스펀지밥 텀블러 435ml
                  </ETit>
                  <p class="stext-lg">
                    7월 세븐일레븐 스템프 리워드 당첨
                  </p>
                </CtitleWrap>
                <ColorBox color="light-gray" size="sm">
                  <div class="stext">
                    교환지점에서 수령하실 매장을 선택해주세요.
                  </div>
                </ColorBox>
                <ColorBox color="line-light-gray" size="lg">
                  <div class="barcode-box">
                    <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="바코드 이미지">
                    <!-- <img src="/assets/images/temp/temp_img_barcode_qr_delivery.svg" alt="QR코드 이미지"> -->
                  </div>
                </ColorBox>
                <TableWrap type="info" gap="sm" size="lg" table-name="쿠폰정보">
                  <colgroup>
                    <col style="width: 70px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                    <!-- 교환매장 점포 선택 전 case -->
                    <tr>
                      <th scope="row" class="va-mid">
                        교환매장
                      </th>
                      <td class="ta-right">
                        <EBtn color="line-light-gray" size="xs" @click="openStoreSearchSelect(false)">
                          <span class="text">교환매장 선택</span>
                        </EBtn>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        이용기간
                      </th>
                      <td class="ta-right">
                        2024.06.28~2024.12.31
                      </td>
                    </tr>
                    <!-- // 교환매장 점포 선택 전 case -->
                    <!-- 교환매장 점포 선택 후 case -->
                    <tr>
                      <th scope="row" class="va-mid">
                        교환매장
                      </th>
                      <td class="ta-right">
                        <div class="align-group">
                          <span class="stext">세븐일레븐 강남점</span>
                          <!-- DESC :: 센터 발송한 경우 [disabled] 속성 추가 -->
                          <EBtn color="line-light-gray" size="xs" @click="openStoreSearchSelect(false)">
                            <span class="text">변경</span>
                          </EBtn>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        수령기간
                      </th>
                      <td class="ta-right">
                        2024.06.28~2024.12.31
                      </td>
                    </tr>
                    <!-- // 교환매장 점포 선택 후 case -->
                    <tr>
                      <th scope="row">
                        당첨일
                      </th>
                      <td class="ta-right">
                        2024.07.01
                      </td>
                    </tr>
                  </tbody>
                </TableWrap>
              </div>
            </div>
            <!-- // [사용 가능] - 매장전용 > 경품교환권 -->
            <!-- [사용 가능] - 매장전용 > 당첨 정보 -->
            <div class="thumb-prod-keep">
              <!-- thumb-prod-2xl -->
              <EThumbProdBox size="2xl">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품 이미지">
                </template>
              </EThumbProdBox>
              <!-- // thumb-prod-2xl -->
              <div class="info-box">
                <BadgeGroup size="xl">
                  <EBadge size="md" color="orange" badge-text="당첨" />
                </BadgeGroup>
                <CtitleWrap>
                  <ETit type="xlCont">
                    당첨 정보
                  </ETit>
                  <p class="stext-lg">
                    7월 세븐일레븐 스템프 리워드 당첨
                  </p>
                </CtitleWrap>
                <ColorBox color="light-gray" size="sm">
                  <div class="stext">
                    이벤트 당첨안내용 쿠폰입니다.
                  </div>
                </ColorBox>
                <TableWrap type="info" gap="sm" size="lg" table-name="쿠폰정보">
                  <colgroup>
                    <col style="width: 70px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        유효기간
                      </th>
                      <td class="ta-right">
                        2024.06.28~2024.12.31
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        당첨일
                      </th>
                      <td class="ta-right">
                        2024.06.28
                      </td>
                    </tr>
                    <!-- DESC :: 택배발송인 경우 노출 -->
                    <tr>
                      <th scope="row">
                        수령방법
                      </th>
                      <td class="ta-right">
                        <span class="fc-spot">택배발송</span>
                      </td>
                    </tr>
                  </tbody>
                </TableWrap>
              </div>
              <BtnWrap type="full" size="lg">
                <EBtn color="line-green" size="md">
                  <span class="text">사용완료</span>
                </EBtn>
              </BtnWrap>
            </div>
            <!-- // [사용 가능] - 매장전용 > 당첨 정보 -->
            <!-- [사용 가능] - 매장상품 할인쿠폰 -->
            <div class="thumb-prod-keep">
              <!-- thumb-prod-2xl -->
              <EThumbProdBox size="2xl">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품 이미지">
                </template>
              </EThumbProdBox>
              <!-- // thumb-prod-2xl -->
              <div class="info-box">
                <BadgeGroup size="xl">
                  <EBadge size="md" color="orange" badge-text="당첨" />
                </BadgeGroup>
                <CtitleWrap>
                  <ETit type="xlCont">
                    해태)후렌치파이딸기(15입)
                  </ETit>
                </CtitleWrap>
                <ColorBox color="line-light-gray" size="lg">
                  <div class="barcode-box">
                    <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="바코드 이미지">
                    <!-- <img src="/assets/images/temp/temp_img_barcode_qr_delivery.svg" alt="QR코드 이미지"> -->
                  </div>
                </ColorBox>
                <TableWrap type="info" gap="sm" size="lg" table-name="쿠폰정보">
                  <colgroup>
                    <col style="width: 70px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        유효기간
                      </th>
                      <td class="ta-right">
                        2024.06.30~2024.12.31
                      </td>
                    </tr>
                  </tbody>
                </TableWrap>
              </div>
              <BtnWrap size="lg" type="full">
                <EBtn color="green" size="md">
                  <span class="text">사용완료</span>
                </EBtn>
              </BtnWrap>
            </div>
            <!-- // [사용 가능] - 매장상품 할인쿠폰 -->
          </ContBox>
          <!-- [기간 만료] case -->
          <ContBox>
            <!-- [기간 만료] - 앱전용 -->
            <div class="thumb-prod-keep is-dimmed">
              <!-- thumb-prod-2xl -->
              <EThumbProdBox size="2xl" dim="기간만료">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품 이미지">
                </template>
              </EThumbProdBox>
              <!-- // thumb-prod-2xl -->
              <div class="info-box">
                <BadgeGroup size="xl">
                  <EBadge size="md" color="orange" badge-text="당첨" />
                </BadgeGroup>
                <CtitleWrap>
                  <ETit type="xlCont">
                    애니팡 쿠폰 코드
                  </ETit>
                  <p class="stext-lg">
                    애니팡 30,000 다이아몬드 쿠폰
                  </p>
                </CtitleWrap>
                <ColorBox color="light-gray" size="sm">
                  <div class="align-group">
                    <span ref="copyTextRef" class="stext-black">T23WE04DEWQW</span>
                    <EBtn color="line-light-gray" size="xs" disabled @click="copyText">
                      <span class="text">복사</span>
                    </EBtn>
                  </div>
                </ColorBox>
                <TableWrap type="info" gap="sm" size="lg" table-name="쿠폰정보">
                  <colgroup>
                    <col style="width: 70px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        사용기간
                      </th>
                      <td class="ta-right">
                        2024.06.30~2024.12.31
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        당첨일
                      </th>
                      <td class="ta-right">
                        2024.06.28
                      </td>
                    </tr>
                  </tbody>
                </TableWrap>
              </div>
            </div>
            <!-- // [기간 만료] - 앱전용 -->
            <!-- [기간 만료, 사용 완료] - 매장전용 > 장바구니 할인쿠폰 -->
            <div class="thumb-prod-keep is-dimmed">
              <!-- thumb-prod-2xl -->
              <EThumbProdBox size="2xl" dim="기간만료">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품 이미지">
                </template>
              </EThumbProdBox>
              <!-- // thumb-prod-2xl -->
              <div class="info-box">
                <CtitleWrap>
                  <ETit type="xlCont">
                    가을 장바구니 쿠폰
                  </ETit>
                  <p class="stext-lg">
                    1,000원 할인
                  </p>
                </CtitleWrap>
                <ColorBox color="line-light-gray" size="lg">
                  <div class="barcode-box">
                    <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="바코드 이미지">
                    <!-- <img src="/assets/images/temp/temp_img_barcode_qr_delivery.svg" alt="QR코드 이미지"> -->
                  </div>
                </ColorBox>
                <TableWrap type="info" gap="sm" size="lg" table-name="쿠폰정보">
                  <colgroup>
                    <col style="width: 70px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        유효기간
                      </th>
                      <td class="ta-right">
                        2024.06.30~2024.12.31
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        사용조건
                      </th>
                      <td class="ta-right">
                        10,000원 이상 결제
                      </td>
                    </tr>
                    <!-- DESC :: 정률일 경우 최대할인 정보 노출 -->
                    <tr>
                      <th scope="row">
                        최대할인
                      </th>
                      <td class="ta-right">
                        1,000원
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        발급일
                      </th>
                      <td class="ta-right">
                        2024.07.01
                      </td>
                    </tr>
                  </tbody>
                </TableWrap>
              </div>
            </div>
            <!-- // [기간 만료, 사용 완료] - 매장전용 > 장바구니 할인쿠폰 -->
            <!-- [기간 만료, 사용 완료] - 매장전용 > 경품교환권 -->
            <div class="thumb-prod-keep is-dimmed">
              <!-- thumb-prod-2xl -->
              <EThumbProdBox size="2xl" dim="기간만료">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품 이미지">
                </template>
              </EThumbProdBox>
              <!-- // thumb-prod-2xl -->
              <div class="info-box">
                <BadgeGroup size="xl">
                  <EBadge size="md" color="orange" badge-text="당첨" />
                </BadgeGroup>
                <CtitleWrap>
                  <ETit type="xlCont">
                    스펀지밥 텀블러 435ml
                  </ETit>
                  <p class="stext-lg">
                    7월 세븐일레븐 스템프 리워드 당첨
                  </p>
                </CtitleWrap>
                <ColorBox color="light-gray" size="sm">
                  <div class="stext">
                    교환지점에서 수령하실 매장을 선택해주세요.
                  </div>
                </ColorBox>
                <ColorBox color="line-light-gray" size="lg">
                  <div class="barcode-box">
                    <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="바코드 이미지">
                    <!-- <img src="/assets/images/temp/temp_img_barcode_qr_delivery.svg" alt="QR코드 이미지"> -->
                  </div>
                </ColorBox>
                <TableWrap type="info" gap="sm" size="lg" table-name="쿠폰정보">
                  <colgroup>
                    <col style="width: 70px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                    <!-- 교환매장 선택 전 이용기간 종료된 case -->
                    <tr>
                      <th scope="row" class="va-mid">
                        교환매장
                      </th>
                      <td class="ta-right">
                        <EBtn color="line-light-gray" size="xs" disabled @click="openStoreSearchSelect(false)">
                          <span class="text">교환매장 선택</span>
                        </EBtn>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        이용기간
                      </th>
                      <td class="ta-right">
                        2024.06.28~2024.12.31
                      </td>
                    </tr>
                    <!-- // 교환매장 선택 전 이용기간 종료된 case -->
                    <!-- 교환매장 선택 후 사용완료, 기간만료된 case -->
                    <tr>
                      <th scope="row" class="va-mid">
                        교환매장
                      </th>
                      <td class="ta-right">
                        <div class="align-group">
                          <span class="stext">세븐일레븐 강남점</span>
                          <EBtn color="line-light-gray" size="xs" disabled @click="openStoreSearchSelect(false)">
                            <span class="text">변경</span>
                          </EBtn>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        수령기간
                      </th>
                      <td class="ta-right">
                        2024.06.28~2024.12.31
                      </td>
                    </tr>
                    <!-- // 교환매장 선택 후 사용완료, 기간만료된 case -->
                    <tr>
                      <th scope="row">
                        당첨일
                      </th>
                      <td class="ta-right">
                        2024.07.01
                      </td>
                    </tr>
                  </tbody>
                </TableWrap>
              </div>
            </div>
            <!-- // [기간 만료, 사용 완료] - 매장전용 > 경품교환권 -->
            <!-- [기간 만료, 사용 완료] - 매장전용 > 당첨 정보 -->
            <div class="thumb-prod-keep is-dimmed">
              <!-- thumb-prod-2xl -->
              <EThumbProdBox size="2xl" dim="사용완료">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품 이미지">
                </template>
              </EThumbProdBox>
              <!-- // thumb-prod-2xl -->
              <div class="info-box">
                <BadgeGroup size="xl">
                  <EBadge size="md" color="orange" badge-text="당첨" />
                </BadgeGroup>
                <CtitleWrap>
                  <ETit type="xlCont">
                    당첨 정보
                  </ETit>
                  <p class="stext-lg">
                    7월 세븐일레븐 스템프 리워드 당첨
                  </p>
                </CtitleWrap>
                <ColorBox color="light-gray" size="sm">
                  <div class="stext">
                    이벤트 당첨안내용 쿠폰입니다.
                  </div>
                </ColorBox>
                <TableWrap type="info" gap="sm" size="lg" table-name="쿠폰정보">
                  <colgroup>
                    <col style="width: 70px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        유효기간
                      </th>
                      <td class="ta-right">
                        2024.06.28~2024.12.31
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        당첨일
                      </th>
                      <td class="ta-right">
                        2024.06.28
                      </td>
                    </tr>
                    <!-- DESC :: 택배발송인 경우 노출 -->
                    <tr>
                      <th scope="row">
                        수령방법
                      </th>
                      <td class="ta-right">
                        <span class="fc-spot">택배발송</span>
                      </td>
                    </tr>
                  </tbody>
                </TableWrap>
              </div>
              <BtnWrap type="full" size="lg">
                <EBtn color="line-green" size="md" disabled>
                  <span class="text">사용완료</span>
                </EBtn>
              </BtnWrap>
            </div>
            <!-- // [기간 만료, 사용 완료] - 매장전용 > 당첨 정보 -->
          </ContBox>
        </ContWrap>
        <ContWrap in-top="lg">
          <!-- [이용안내] case -->
          <ContBox size="lg" gap="sm">
            <!-- [이용안내] - 앱전용, 매장전용 > 당첨정보 -->
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
              </template>
            </FoldToggleBox>
            <!-- // [이용안내] - 앱전용, 매장전용 > 당첨정보 -->
            <!-- [이용안내] - 매장전용 > 장바구니 할인쿠폰, 매장상품 할인쿠폰 -->
            <FoldToggleBox open type="scont">
              <template #header>
                <CtitleWrap size="zero">
                  <ETit text="매장근무자 POS 사용방법" type="sFold" />
                </CtitleWrap>
              </template>
              <template #content>
                <RowListWrap gap="sm">
                  <li class="dot-text">
                    판매 상품 바코드 스캔
                  </li>
                  <li class="dot-text">
                    할인 쿠폰 바코드 스캔
                  </li>
                  <li class="dot-text">
                    화면 하단 ‘확정’ 선택
                    <br>(쿠폰 스캔 후 화면상 ‘ENTER’ 버튼 선택 시 금액 수정이 불가하다는 팝업창 생성)
                  </li>
                  <li class="dot-text">
                    현금 합계 완료
                  </li>
                </RowListWrap>
              </template>
            </FoldToggleBox>
            <FoldToggleBox open type="scont">
              <template #header>
                <CtitleWrap size="zero">
                  <ETit text="이용안내" type="sFold" />
                </CtitleWrap>
              </template>
              <template #content>
                <SContLineBox>
                  <RowListWrap gap="sm">
                    <li class="dot-text">
                      결제 건당 할인쿠폰은 1회 적용 가능합니다.
                      <br>(중복 적용 불가)
                    </li>
                    <li class="dot-text">
                      해당 쿠폰은 일부 세븐일레븐 점포에서는 취급하지 않는 상품일 수 있습니다.
                    </li>
                    <li class="dot-text">
                      일부 매장에서는 모바일 쿠폰 사용이 불가할 수 있습니다.
                    </li>
                    <li class="dot-text">
                      할인쿠폰으로 서비스 상품(구글카드, 택배 등) 및 담배 결제 불가합니다.
                    </li>
                  </RowListWrap>
                </SContLineBox>
              </template>
            </FoldToggleBox>
            <FoldToggleBox open type="scont">
              <template #header>
                <CtitleWrap size="zero">
                  <ETit text="유의사항" type="sFold" />
                </CtitleWrap>
              </template>
              <template #content>
                <SContLineBox>
                  <ContBox size="sm">
                    <CtitleWrap size="sm">
                      <ETit text="환불/연장" type="sCont" />
                    </CtitleWrap>
                    <RowListWrap gap="sm">
                      <li class="dot-text">
                        할인쿠폰은 유효기간 연장 및 환불이 불가합니다.
                      </li>
                    </RowListWrap>
                  </ContBox>
                  <ContBox size="sm">
                    <CtitleWrap size="sm">
                      <ETit text="유의사항" type="sCont" />
                    </CtitleWrap>
                    <RowListWrap gap="sm">
                      <li class="dot-text">
                        본 쿠폰은 온/오프라인 등 어떤한 형태로도 상업적 목적의 재판매가 불가합니다. 재판매된 쿠폰은 잔액 환불, 주문취소, 유효기간 연장이 불가하며, 사용불가 문의도 처리 불가합니다.
                      </li>
                      <li class="dot-text">
                        신용카드에 의한 거래를 대행시키고 자금을 융툥하는 목적 으로 구매하는 경우 ‘여신전문금융법 제70조 2항‘ 위반으로 3년 이하의 징역 또는 3천만원 이하의 벌금 처벌을 받게 됩니다.
                      </li>
                      <li class="dot-text">
                        발행자 또는 문의처 등을 포함하여 본 쿠폰에 대한 위/변조 또는 부분 삭제/훼손 시 잔액 환불 및 환불문의가 불가합니다.
                      </li>
                    </RowListWrap>
                  </ContBox>
                  <ContBox size="sm">
                    <CtitleWrap size="sm">
                      <ETit text="물품제공 불가 시 정책" type="sCont" />
                    </CtitleWrap>
                    <RowListWrap gap="sm">
                      <li class="dot-text">
                        해당 물품의 제공이 불가능하거나 제공에 필요한 통상적인 기간보다 현저히 제공이 지체되는 경우에는 해당 교환권과 동일한 금전적 가치의 교환권으로 변경될 수 있으며, 다른 교환권으로 교환이 불가능한 경우에는 구매액 전액을 취소/환불 할 수 있습니다.
                      </li>
                    </RowListWrap>
                  </ContBox>
                </SContLineBox>
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
            <!-- // [이용안내] - 매장전용 > 장바구니 할인쿠폰, 매장상품 할인쿠폰 -->
            <!-- [이용안내] - 매장전용 > 경품교환권 -->
            <FoldToggleBox open type="scont">
              <template #header>
                <CtitleWrap size="zero">
                  <ETit text="매장근무자 POS 사용방법" type="sFold" />
                </CtitleWrap>
              </template>
              <template #content>
                <RowListWrap gap="sm">
                  <li class="dot-text">
                    교환권 바코드 스캔
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
            <!-- // [이용안내] - 매장전용 > 경품교환권 -->
          </ContBox>
          <!-- [이용안내] case -->
        </ContWrap>
      </div>
    </template>
  </ContDialog>

  <!-- pop : 매장선택 -->
  <PopStoreSearchSelect v-model:sta="popStoreSearchSelect" :is-search-data="popSearchType" />
  <!-- // pop : 매장선택 -->
</template>

<script setup lang="ts">
import { ref } from "vue";

interface DialogState {
  open: boolean;
}

const props = defineProps<{
  sta: DialogState;
}>();

const emit = defineEmits(["update:sta"]);

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit("update:sta", { ...props.sta, open: value }),
});

const { $showToast } = useNuxtApp();

const copyTextRef = ref<HTMLElement | null>(null);

function copyText() {
  if (copyTextRef.value) {
    const textCode = copyTextRef.value.textContent;
    window.navigator.clipboard.writeText(textCode).then(() => {
      $showToast({ msg: "쿠폰번호가 복사되었습니다." });
    });
  }
}

// 화면 캡처 시도 시 토스트 노출
/* $showToast({ msg: '이 화면은 캡처하실 수 없습니다.' }); */

// 매장선택
const popStoreSearchSelect = ref({ open: false });

// 임시 - 매장 검색결과 팝업 확인을 위한 이벤트 추가 ( 개발시 삭제 요청 )
const popSearchType = ref<boolean>();

const openStoreSearchSelect = (isSearchData: boolean) => {
  popSearchType.value = isSearchData; // 임시 - 매장 검색결과 팝업 확인을 위한 이벤트 추가 ( 개발시 삭제 요청 )
  popStoreSearchSelect.value.open = true;
};
</script>
