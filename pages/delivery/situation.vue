<template>
  <DeliveryHomeTab>
    <ContWrap in-top="md">
      <ContBox>
        <GridListHeader list-value="8" select-title="예약현황 정렬">
          <option selected>예약일시 순</option>
          <option>택배명 순</option>
        </GridListHeader>
      </ContBox>

      <!-- 데이터가 있는 경우 -->
      <ContBox size="sm" v-if="isData">
        <RowListWrap gap="md">
          <li class="item">
            <ColorBox color="white" size="lg">
              <CtitleWrap size="zero">
                <div class="ctitle-sub-lg">
                  <EBadge color="gray" badge-text="일반택배"/>
                </div>
                <div class="ctitle">의류 청바지</div>
              </CtitleWrap>
              <TableWrap type="info" size="xs" table-name="예약정보">
              <colgroup>
                <col style="width: 62px;">
                <col style="width: auto;">
              </colgroup>
              <tbody>
              <tr>
                <th scope="row">예약일시</th>
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
              <CtitleWrap size="zero">
                <div class="ctitle-sub-lg">
                  <BadgeGroup>
                    <EBadge color="gray" badge-text="일반택배" />
                    <EBadge color="light-gray" badge-text="매장접수취소" />
                  </BadgeGroup>
                  <TooltipGroup>택배수거불가 및 기타 사유로 매장에서 접수 처리를 취소했습니다.</TooltipGroup>
                </div>
                <div class="ctitle">의류 청바지</div>
              </CtitleWrap>
              <TableWrap type="info" size="xs" table-name="예약정보">
                <colgroup>
                  <col style="width: 62px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                <tr>
                  <th scope="row">예약일시</th>
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
              <CtitleWrap size="zero">
                <div class="ctitle-sub-lg">
                  <BadgeGroup>
                    <EBadge color="green" badge-text="착한택배" />
                    <EBadge color="light-gray" badge-text="매장접수취소" />
                  </BadgeGroup>
                </div>
                <div class="ctitle">의류 청바지</div>
              </CtitleWrap>
              <TableWrap type="info" size="xs" table-name="예약정보">
                <colgroup>
                  <col style="width: 62px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                <tr>
                  <th scope="row">예약일시</th>
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
              <CtitleWrap size="zero">
                <div class="ctitle-sub-lg">
                  <EBadge color="green" badge-text="착한택배" />
                </div>
                <div class="ctitle">의류 청바지</div>
              </CtitleWrap>
              <TableWrap type="info" size="xs" table-name="예약정보">
                <colgroup>
                  <col style="width: 62px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                <tr>
                  <th scope="row">예약일시</th>
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
      </ContBox>
      <!--// 데이터가 있는 경우 -->

      <!-- 데이터가 없는 경우  -->
      <ContBox size="sm" v-if="isNoData">
        <InfoGuideWrap
          type="no-data"
          name="temp"
          sub-desc="추가된 주소지가 없습니다."
        />
      </ContBox>
      <!-- // 데이터가 없는 경우  -->
    </ContWrap>
  </DeliveryHomeTab>

  <!-- pop : 예약현황 상세 -->
  <PopDeliveryReservationStatusDetail v-model:sta="popReservationStatusDetail" />
  <!-- // pop : 예약현황 상세 -->

</template>

<script setup lang="ts">
definePageMeta({
  layout: 'no-docker',
  title: '택배',
  hideRightHeader: ['home'],
})

const isData = ref(true);
const isNoData = ref(true);

// 예약현황 상세 팝업
const popReservationStatusDetail = ref({ open: false });
const openReservationStatusDetail = () => popReservationStatusDetail.value.open = true;

</script>

<style lang="scss" scoped>
@import url("assets/css/pages/delivery/delivery.scss");
</style>

