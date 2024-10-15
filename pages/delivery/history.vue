<template>
  <DeliveryHomeTab>
    <ContWrap>
      <div class="list-header">
        <FlexGroup align="center">
          <div class="flex-left">
            <div class="goods-group">
              <EGoods val="8" unit="건" />
            </div>
          </div>
          <div class="flex-right">
            <div class="ui-select type-text">
              <select title="예약현황 정렬">
                <option selected>
                  배송완료 순
                </option>
                <option>택배명 순</option>
              </select>
            </div>
            <!-- DESC :: 활성화시 is-active 클래스 추가 -->
            <button type="button" class="btn-filter is-active" @click="openDeliveryFilterOption">
              <EIco name="filter" color="gray" size="xs" />
              <span class="offscreen">필터옵션</span>
            </button>
          </div>
        </FlexGroup>
      </div>

      <!-- 데이터가 있는 경우 -->
      <RowListWrap v-if="isData" gap="md">
        <li class="item">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <BadgeGroup size="xl">
                <EBadge color="gray" badge-text="일반택배" />
              </BadgeGroup>
              <CtitleWrap size="sm">
                <ETit text="의류 청바지" type="box" />
              </CtitleWrap>
              <TableWrap type="info" gap="sm" size="md" table-name="배송정보">
                <colgroup>
                  <col style="width: 55px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      배송완료
                    </th>
                    <td>2024.06.30. 15:00</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      송장번호
                    </th>
                    <td>1234567890987</td>
                  </tr>
                </tbody>
              </TableWrap>
            </div>
            <div class="box-info-cont">
              <CtitleWrap>
                <FlexGroup align="center">
                  <div class="flex-left">
                    <div class="ctitle-xs">
                      택배비
                    </div>
                  </div>
                  <div class="flex-right">
                    <EGoods size="md" class="fw-md" val="3,200" unit="원" />
                  </div>
                </FlexGroup>
              </CtitleWrap>
              <FoldOverflowBox>
                <ColorBox color="light-gray">
                  <SContLineBox>
                    <TableWrap type="info" gap="lg" size="md" table-name="결제금액">
                      <colgroup>
                        <col style="width: 78px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            결제금액
                          </th>
                          <td>3,400원</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            예약일시
                          </th>
                          <td>2024.06.15 15:32</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            물품금액
                          </th>
                          <td>5만원</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            배송상품
                          </th>
                          <td>의류</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </SContLineBox>
                  <SContLineBox>
                    <TableWrap type="info" gap="lg" size="md" table-name="보내는 분">
                      <colgroup>
                        <col style="width: 78px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            보내는 분
                          </th>
                          <td>홍*동</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            휴대폰번호
                          </th>
                          <td>010-6548-7742</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            주소(반송처)
                          </th>
                          <td>서울시 중구 충무로 23가길 ***<br>***동 ****호</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            접수매장
                          </th>
                          <td>세븐일레븐 을지로점</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </SContLineBox>
                  <SContLineBox>
                    <TableWrap type="info" gap="lg" size="md" table-name="받는 분">
                      <colgroup>
                        <col style="width: 78px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            받는 분
                          </th>
                          <td>김*븐</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            휴대폰번호
                          </th>
                          <td>010-1234-5678</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            주소(반송처)
                          </th>
                          <td>서울시 중구 충무로 23가길 234<br>127동 2301호</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            수령매장
                          </th>
                          <td>세븐일레븐 광화문점</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </SContLineBox>
                </ColorBox>
              </FoldOverflowBox>
            </div>
          </ColorBox>
        </li>
        <li class="item">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <BadgeGroup size="xl">
                <EBadge color="gray" badge-text="일반택배" />
                <EBadge color="light-gray" badge-text="반송" />
              </BadgeGroup>
              <CtitleWrap size="sm">
                <ETit text="의류 청바지" type="box" />
              </CtitleWrap>
              <TableWrap type="info" gap="sm" size="md" table-name="배송정보">
                <colgroup>
                  <col style="width: 55px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      배송완료
                    </th>
                    <td>2024.06.30. 15:00</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      송장번호
                    </th>
                    <td>1234567890987</td>
                  </tr>
                </tbody>
              </TableWrap>
            </div>
            <div class="box-info-cont">
              <CtitleWrap>
                <FlexGroup align="center">
                  <div class="flex-left">
                    <div class="ctitle-xs">
                      택배비
                    </div>
                  </div>
                  <div class="flex-right">
                    <EGoods size="md" class="fw-md" val="3,200" unit="원" />
                  </div>
                </FlexGroup>
              </CtitleWrap>
              <FoldOverflowBox>
                <ColorBox color="light-gray">
                  <SContLineBox>
                    <TableWrap type="info" gap="lg" size="md" table-name="결제금액">
                      <colgroup>
                        <col style="width: 78px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            결제금액
                          </th>
                          <td>3,400원</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            예약일시
                          </th>
                          <td>2024.06.15 15:32</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            물품금액
                          </th>
                          <td>5만원</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            배송상품
                          </th>
                          <td>의류</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </SContLineBox>
                  <SContLineBox>
                    <TableWrap type="info" gap="lg" size="md" table-name="보내는 분">
                      <colgroup>
                        <col style="width: 78px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            보내는 분
                          </th>
                          <td>홍*동</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            휴대폰번호
                          </th>
                          <td>010-6548-7742</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            주소(반송처)
                          </th>
                          <td>서울시 중구 충무로 23가길 ***<br>***동 ****호</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            접수매장
                          </th>
                          <td>세븐일레븐 을지로점</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </SContLineBox>
                  <SContLineBox>
                    <TableWrap type="info" gap="lg" size="md" table-name="받는 분">
                      <colgroup>
                        <col style="width: 78px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            받는 분
                          </th>
                          <td>김*븐</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            휴대폰번호
                          </th>
                          <td>010-1234-5678</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            주소(반송처)
                          </th>
                          <td>서울시 중구 충무로 23가길 234<br>127동 2301호</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            수령매장
                          </th>
                          <td>세븐일레븐 광화문점</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </SContLineBox>
                </ColorBox>
              </FoldOverflowBox>
            </div>
          </ColorBox>
        </li>
        <li class="item">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <BadgeGroup size="xl">
                <EBadge color="green" badge-text="착한택배" />
                <EBadge color="light-gray" badge-text="CS취소" />
              </BadgeGroup>
              <CtitleWrap size="sm">
                <ETit text="의류 청바지" type="box" />
              </CtitleWrap>
              <TableWrap type="info" gap="sm" size="md" table-name="배송정보">
                <colgroup>
                  <col style="width: 55px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      배송완료
                    </th>
                    <td>2024.06.30. 15:00</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      송장번호
                    </th>
                    <td>1234567890987</td>
                  </tr>
                </tbody>
              </TableWrap>
            </div>
            <div class="box-info-cont">
              <CtitleWrap>
                <FlexGroup align="center">
                  <div class="flex-left">
                    <div class="ctitle-xs">
                      택배비
                    </div>
                  </div>
                  <div class="flex-right">
                    <EGoods size="md" class="fw-md" val="3,200" unit="원" />
                  </div>
                </FlexGroup>
              </CtitleWrap>
              <FoldOverflowBox>
                <ColorBox color="light-gray">
                  <SContLineBox>
                    <TableWrap type="info" gap="lg" size="md" table-name="결제금액">
                      <colgroup>
                        <col style="width: 78px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            결제금액
                          </th>
                          <td>3,400원</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            예약일시
                          </th>
                          <td>2024.06.15 15:32</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            물품금액
                          </th>
                          <td>5만원</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            배송상품
                          </th>
                          <td>의류</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </SContLineBox>
                  <SContLineBox>
                    <TableWrap type="info" gap="lg" size="md" table-name="보내는 분">
                      <colgroup>
                        <col style="width: 78px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            보내는 분
                          </th>
                          <td>홍*동</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            휴대폰번호
                          </th>
                          <td>010-6548-7742</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            주소(반송처)
                          </th>
                          <td>서울시 중구 충무로 23가길 ***<br>***동 ****호</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            접수매장
                          </th>
                          <td>세븐일레븐 을지로점</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </SContLineBox>
                  <SContLineBox>
                    <TableWrap type="info" gap="lg" size="md" table-name="받는 분">
                      <colgroup>
                        <col style="width: 78px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            받는 분
                          </th>
                          <td>김*븐</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            휴대폰번호
                          </th>
                          <td>010-1234-5678</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            주소(반송처)
                          </th>
                          <td>서울시 중구 충무로 23가길 234<br>127동 2301호</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            수령매장
                          </th>
                          <td>세븐일레븐 광화문점</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </SContLineBox>
                </ColorBox>
              </FoldOverflowBox>
            </div>
          </ColorBox>
        </li>
        <li class="item">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <BadgeGroup size="xl">
                <EBadge color="green" badge-text="착한택배" />
              </BadgeGroup>
              <CtitleWrap size="sm">
                <ETit text="의류 청바지" type="box" />
              </CtitleWrap>
              <TableWrap type="info" gap="sm" size="md" table-name="배송정보">
                <colgroup>
                  <col style="width: 55px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      배송완료
                    </th>
                    <td>2024.06.30. 15:00</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      송장번호
                    </th>
                    <td>1234567890987</td>
                  </tr>
                </tbody>
              </TableWrap>
            </div>
            <div class="box-info-cont">
              <CtitleWrap>
                <FlexGroup align="center">
                  <div class="flex-left">
                    <div class="ctitle-xs">
                      택배비
                    </div>
                  </div>
                  <div class="flex-right">
                    <EGoods size="md" class="fw-md" val="3,200" unit="원" />
                  </div>
                </FlexGroup>
              </CtitleWrap>
              <FoldOverflowBox>
                <ColorBox color="light-gray">
                  <SContLineBox>
                    <TableWrap type="info" gap="lg" size="md" table-name="결제금액">
                      <colgroup>
                        <col style="width: 78px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            결제금액
                          </th>
                          <td>3,400원</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            예약일시
                          </th>
                          <td>2024.06.15 15:32</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            물품금액
                          </th>
                          <td>5만원</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            배송상품
                          </th>
                          <td>의류</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </SContLineBox>
                  <SContLineBox>
                    <TableWrap type="info" gap="lg" size="md" table-name="보내는 분">
                      <colgroup>
                        <col style="width: 78px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            보내는 분
                          </th>
                          <td>홍*동</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            휴대폰번호
                          </th>
                          <td>010-6548-7742</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            주소(반송처)
                          </th>
                          <td>서울시 중구 충무로 23가길 ***<br>***동 ****호</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            접수매장
                          </th>
                          <td>세븐일레븐 을지로점</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </SContLineBox>
                  <SContLineBox>
                    <TableWrap type="info" gap="lg" size="md" table-name="받는 분">
                      <colgroup>
                        <col style="width: 78px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            받는 분
                          </th>
                          <td>김*븐</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            휴대폰번호
                          </th>
                          <td>010-1234-5678</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            주소(반송처)
                          </th>
                          <td>서울시 중구 충무로 23가길 234<br>127동 2301호</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            수령매장
                          </th>
                          <td>세븐일레븐 광화문점</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </SContLineBox>
                </ColorBox>
              </FoldOverflowBox>
            </div>
          </ColorBox>
        </li>
      </RowListWrap>
      <!-- // 데이터가 있는 경우 -->

      <!-- 데이터가 없는 경우  -->
      <InfoGuideWrap
        v-if="isNoData"
        type="no-data"
        name="history"
        desc="이용 내역이 없습니다."
      />
      <!-- // 데이터가 없는 경우  -->
    </ContWrap>
  </DeliveryHomeTab>

  <!-- pop : 택배 - 필터 옵션 -->
  <PopCommFilterOption v-model:sta="popDeliveryFilterOption">
    <!-- 필터옵션목록 -->
    <template #option>
      <li class="item-xl">
        <div class="form-field">
          <div class="form-title">
            <ETit text="택배구분" type="cont" />
          </div>
          <div class="form-cont">
            <UiColGroup gap="sm">
              <span class="ui-rdo-button">
                <input id="filterProdType01" type="checkbox">
                <label for="filterProdType01"><span class="text-sm">전체</span></label>
              </span>
              <span class="ui-rdo-button">
                <input id="filterProdType02" type="checkbox">
                <label for="filterProdType02"><span class="text-sm">일반택배</span></label>
              </span>
              <span class="ui-rdo-button">
                <input id="filterProdType03" type="checkbox">
                <label for="filterProdType03"><span class="text-sm">착한택배</span></label>
              </span>
            </UiColGroup>
          </div>
        </div>
      </li>
      <li class="item-xl">
        <div class="form-field">
          <div class="form-title">
            <ETit text="조회기간" type="cont" />
          </div>
          <div class="form-cont">
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
      </li>
    </template>
    <!-- // 필터옵션목록 -->
    <template #footer>
      <div class="dialog-btn-auto-wrap">
        <EBtn color="line-light-gray" size="lg">
          <span class="text">초기화</span>
        </EBtn>
        <EBtn color="green" size="lg" @click="popDeliveryFilterOption.open = false">
          <span class="text">적용</span>
        </EBtn>
      </div>
    </template>
  </PopCommFilterOption>
  <!-- // pop : 택배 - 필터 옵션 -->
</template>

<script setup lang="ts">
definePageMeta({
  title: "택배",
  hideRightHeader: ["home"],
});

const isData = ref(true);
const isNoData = ref(true);

// 상품필터옵션 팝업
const popDeliveryFilterOption = ref({ open: false });
const openDeliveryFilterOption = () => popDeliveryFilterOption.value.open = true;

// 기간 날짜 조회
const periodPicked = ref();
const isDateInputDisabled = ref<boolean>(true);

watch(periodPicked, (value) => {
  isDateInputDisabled.value = value !== "periodDateInput";
});
</script>

<style lang="scss" scoped>
@import url("assets/css/pages/delivery.scss");
</style>
