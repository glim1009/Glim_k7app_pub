<template>
  <DeliveryHomeTab>
    <ContWrap>
      <div class="list-header">
        <FlexGroup align="center">
          <div class="flex-left">
            <div class="goods-group">
              <span class="label">총 </span>
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
            <button type="button" class="btn-filter is-active">
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
                <col style="width: 55px;" />
                <col style="width: auto;" />
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
                <col style="width: 55px;" />
                <col style="width: auto;" />
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
                <col style="width: 55px;" />
                <col style="width: auto;" />
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
                <col style="width: 55px;" />
                <col style="width: auto;" />
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
</template>

<script setup lang="ts">
definePageMeta({
  title: '택배',
  hideRightHeader: ['home'],
});

const isData = ref(true);
const isNoData = ref(true);

// 예약현황 상세 팝업
const popReservationStatusDetail = ref({ open: false });
const openReservationStatusDetail = () => popReservationStatusDetail.value.open = true;
</script>

<style lang="scss" scoped>
@import url("assets/css/pages/delivery.scss");
</style>
