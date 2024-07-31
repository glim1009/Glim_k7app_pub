<template>
  <DeliveryHomeTab>
    <ContWrap>
      <!-- 데이터가 있는 경우 -->
      <div v-if="isData">
        <ContBox>
          <RowListWrap gap="md">
            <li class="item">
              <ColorBox color="white" size="lg">
                <CtitleWrap>
                  <div class="ctitle-sub-lg">
                    <EBadge color="gray" badge-text="일반택배"/>
                  </div>
                  <div class="ctitle-sm">의류 청바지</div>
                  <div class="box-info-desc">
                    <span class="title">예약일시</span>
                    <span class="stext-sm">2024.06.30 15:34</span>
                  </div>
                </CtitleWrap>
                <BtnWrap>
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
                <CtitleWrap>
                  <div class="ctitle-sub-lg">
                    <BadgeGroup>
                      <EBadge color="gray" badge-text="일반택배" />
                      <EBadge color="light-gray" badge-text="매장접수취소" />
                    </BadgeGroup>
                    <TooltipGroup>택배수거불가 및 기타 사유로 매장에서 접수 처리를 취소했습니다.</TooltipGroup>
                  </div>
                  <div class="ctitle-sm">의류 청바지</div>
                  <div class="box-info-desc">
                    <span class="title">예약일시</span>
                    <span class="stext-sm">2024.06.30 15:34</span>
                  </div>
                </CtitleWrap>
                <BtnWrap>
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
                <CtitleWrap>
                  <div class="ctitle-sub-lg">
                    <BadgeGroup>
                      <EBadge color="green" badge-text="착한택배" />
                      <EBadge color="light-gray" badge-text="매장접수취소" />
                    </BadgeGroup>
                  </div>
                  <div class="ctitle-sm">의류 청바지</div>
                  <div class="box-info-desc">
                    <span class="title">예약일시</span>
                    <span class="stext-sm">2024.06.30 15:34</span>
                  </div>
                </CtitleWrap>
                <BtnWrap>
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
                <CtitleWrap>
                  <div class="ctitle-sub-lg">
                    <EBadge color="green" badge-text="착한택배" />
                  </div>
                  <div class="ctitle-sm">의류 청바지</div>
                  <div class="box-info-desc">
                    <span class="title">예약일시</span>
                    <span class="stext-sm">2024.06.30 15:34</span>
                  </div>
                </CtitleWrap>
                <BtnWrap>
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
      </div>
      <!--// 데이터가 있는 경우 -->

      <!-- 데이터가 없는 경우  -->
      <div v-if="isNoData">
        <ContBox>
          <InfoGuideWrap
            type="no-data"
            name="temp"
            sub-desc="추가된 주소지가 없습니다."
          />
        </ContBox>
      </div>
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

