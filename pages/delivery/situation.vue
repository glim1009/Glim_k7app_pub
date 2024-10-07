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
                  예약일시 순
                </option>
                <option>택배명 순</option>
              </select>
            </div>
            <!-- DESC :: 활성화시 is-active 클래스 추가 -->
            <button type="button" class="btn-filter is-active" @click="openDeliveryFilterOption">
              <EIco name="filter" color="gray" size="xs" />
            </button>
          </div>
        </FlexGroup>
      </div>

      <!-- 데이터가 있는 경우  -->
      <RowListWrap v-if="isData" gap="md">
        <li class="item">
          <ColorBox color="white" size="lg">
            <BadgeGroup size="xl">
              <EBadge color="gray" badge-text="일반택배" />
            </BadgeGroup>
            <CtitleWrap size="sm">
              <ETit text="의류 청바지" type="box" />
            </CtitleWrap>
            <TableWrap type="info" gap="sm" size="md" table-name="예약정보">
              <colgroup>
                <col style="width: 55px;">
                <col style="width: auto;">
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">
                    예약일시
                  </th>
                  <td>2024.06.30. 15:00</td>
                </tr>
              </tbody>
            </TableWrap>
            <BtnWrap size="md">
              <EBtn color="light-gray" size="sm">
                <span class="text">예약취소</span>
              </EBtn>
              <EBtn color="line-light-gray" size="sm" @click="openReservationStatusDetail">
                <span class="text">바코드보기</span>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
        <li class="item">
          <ColorBox color="white" size="lg">
            <BadgeGroup size="xl">
              <EBadge color="gray" badge-text="일반택배" />
              <EBadge color="light-gray" badge-text="매장접수취소" />
              <ETooltip>택배수거불가 및 기타 사유로 매장에서 접수 처리를 취소했습니다.</ETooltip>
            </BadgeGroup>
            <CtitleWrap size="sm">
              <ETit text="의류 청바지" type="box" />
            </CtitleWrap>
            <TableWrap type="info" gap="sm" size="md" table-name="예약정보">
              <colgroup>
                <col style="width: 55px;">
                <col style="width: auto;">
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">
                    예약일시
                  </th>
                  <td>2024.06.30. 15:00</td>
                </tr>
              </tbody>
            </TableWrap>
            <BtnWrap size="md">
              <EBtn color="light-gray" size="sm">
                <span class="text">예약취소</span>
              </EBtn>
              <EBtn color="line-light-gray" size="sm" @click="openReservationStatusDetail">
                <span class="text">바코드보기</span>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
        <li class="item">
          <ColorBox color="white" size="lg">
            <BadgeGroup size="xl">
              <EBadge color="green" badge-text="착한택배" />
              <EBadge color="light-gray" badge-text="매장접수취소" />
            </BadgeGroup>
            <CtitleWrap size="sm">
              <ETit text="의류 청바지" type="box" />
            </CtitleWrap>
            <TableWrap type="info" gap="sm" size="md" table-name="예약정보">
              <colgroup>
                <col style="width: 55px;">
                <col style="width: auto;">
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">
                    예약일시
                  </th>
                  <td>2024.06.30. 15:00</td>
                </tr>
              </tbody>
            </TableWrap>
            <BtnWrap size="md">
              <EBtn color="light-gray" size="sm">
                <span class="text">예약취소</span>
              </EBtn>
              <EBtn color="line-light-gray" size="sm" @click="openReservationStatusDetail">
                <span class="text">바코드보기</span>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
        <li class="item">
          <ColorBox color="white" size="lg">
            <BadgeGroup size="xl">
              <EBadge color="green" badge-text="착한택배" />
            </BadgeGroup>
            <CtitleWrap size="sm">
              <ETit text="의류 청바지" type="box" />
            </CtitleWrap>
            <TableWrap type="info" gap="sm" size="md" table-name="예약정보">
              <colgroup>
                <col style="width: 55px;">
                <col style="width: auto;">
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">
                    예약일시
                  </th>
                  <td>2024.06.30. 15:00</td>
                </tr>
              </tbody>
            </TableWrap>
            <BtnWrap size="md">
              <EBtn color="light-gray" size="sm">
                <span class="text">예약취소</span>
              </EBtn>
              <EBtn color="line-light-gray" size="sm" @click="openReservationStatusDetail">
                <span class="text">바코드보기</span>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
      </RowListWrap>
      <!-- // 데이터가 있는 경우 -->

      <!-- 데이터가 없는 경우  -->
      <InfoGuideWrap
        v-if="isNoData"
        type="no-data"
        name="history"
        desc="예약현황 내역이 없습니다."
      />
      <!-- // 데이터가 없는 경우  -->
    </ContWrap>
  </DeliveryHomeTab>

  <!-- pop : 예약현황 상세 -->
  <PopDeliveryReservationStatusDetail v-model:sta="popReservationStatusDetail" />
  <!-- // pop : 예약현황 상세 -->

  <!-- pop : 택배 - 필터 옵션 -->
  <PopCommFilterOption v-model:sta="popDeliveryFilterOption">
    <!-- 필터옵션목록 -->
    <template #option>
      <li class="item-xl">
        <div class="form-field">
          <div class="form-cont">
            <div class="form-input-group">
              <UiColGroup gap="sm">
                <span class="ui-rdo-button">
                  <input id="filterProdType01" type="radio" name="filterStatus01">
                  <label for="filterProdType01"><span class="text-sm">전체</span></label>
                </span>
                <span class="ui-rdo-button">
                  <input id="filterProdType02" type="radio" name="filterStatus01">
                  <label for="filterProdType02"><span class="text-sm">사용가능</span></label>
                </span>
                <span class="ui-rdo-button">
                  <input id="filterProdType03" type="radio" name="filterStatus01">
                  <label for="filterProdType03"><span class="text-sm">사용완료</span></label>
                </span>
                <span class="ui-rdo-button">
                  <input id="filterProdType04" type="radio" name="filterStatus01">
                  <label for="filterProdType04"><span class="text-sm">기간만료</span></label>
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
  // eslint-disable-next-line style/quotes
  hideRightHeader: ['home'],
});

const isData = ref(true);
const isNoData = ref(true);

// 예약현황 상세 팝업
const popReservationStatusDetail = ref({ open: false });
const openReservationStatusDetail = () => popReservationStatusDetail.value.open = true;

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
