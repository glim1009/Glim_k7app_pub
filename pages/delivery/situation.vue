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
              <span class="offscreen">필터옵션</span>
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
