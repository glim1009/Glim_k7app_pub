<template>
  <CouponHomeTab>
    <ContWrap>
      <ContBox v-if="isData" size="sm">
        <ColorBox size="sm" color="light-green">
          <div class="stext-lg fc-spot fw-sb ta-center">
            매장상품 할인쿠폰으로 알뜰하게 할인 받으세요!
          </div>
        </ColorBox>
      </ContBox>
      <ContBox size="sm">
        <div v-if="isData" class="list-header">
          <FlexGroup>
            <div class="flex-left">
              <div class="goods-group">
                <EGoods val="8" unit="건" />
              </div>
            </div>
            <div class="flex-right">
              <EBadge size="lg" color="gray" badge-text="D-24" />
            </div>
          </FlexGroup>
        </div>
        <RowListWrap v-if="isData" gap="md" class="side-box">
          <!-- CASE 1: 다운로드 버튼 케이스 -->
          <li class="item">
            <div class="coupon-box">
              <div class="coupon-header">
                <!-- thumb-prod-flex -->
                <div class="thumb-prod-flex">
                  <EThumbProdBox size="lg">
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
                    </template>
                  </EThumbProdBox>
                  <div class="info-box">
                    <div class="coupon-code">
                      3,000원 할인
                    </div>
                    <ETit text="참치마요 삼각김밥" type="prod" />
                  </div>
                </div>
                <!-- // thumb-prod-flex -->
              </div>
              <div class="coupon-cont">
                <TableWrap type="info" gap="sm" size="md" table-name="쿠폰 정보">
                  <colgroup>
                    <col style="width: 55px;" />
                    <col style="width: auto;" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        유효기간
                      </th>
                      <td>2024.06.10 ~ 2024.06.30</td>
                    </tr>
                  </tbody>
                </TableWrap>
              </div>
              <BtnWrap type="full" size="md" @click="DownloadClick">
                <EBtn color="light-gray" size="sm">
                  <span class="text">다운로드</span>
                </EBtn>
              </BtnWrap>
            </div>
          </li>
          <!-- // CASE 1: 다운로드 버튼 케이스 -->
          <!-- CASE 2: 사용하기 버튼 케이스 -->
          <li class="item">
            <div class="coupon-box">
              <div class="coupon-header">
                <!-- thumb-prod-flex -->
                <div class="thumb-prod-flex">
                  <EThumbProdBox size="lg">
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
                    </template>
                  </EThumbProdBox>
                  <div class="info-box">
                    <div class="coupon-code">
                      3,000원 할인
                    </div>
                    <ETit text="참치마요 삼각김밥" type="prod" />
                  </div>
                </div>
                <!-- // thumb-prod-flex -->
              </div>
              <div class="coupon-cont">
                <TableWrap type="info" gap="sm" size="md" table-name="쿠폰 정보">
                  <colgroup>
                    <col style="width: 55px;" />
                    <col style="width: auto;" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        유효기간
                      </th>
                      <td>2024.06.10 ~ 2024.06.30</td>
                    </tr>
                  </tbody>
                </TableWrap>
              </div>
              <BtnWrap type="full" size="md">
                <EBtn color="line-light-gray" size="sm" @click="openCouponDetail">
                  <span class="text">사용하기</span>
                </EBtn>
              </BtnWrap>
            </div>
          </li>
          <!-- // CASE 2: 사용하기 버튼 케이스 -->
          <!-- CASE 3: 사용완료 버튼 케이스 -->
          <li class="item">
            <div class="coupon-box is-dimmed">
              <div class="coupon-header">
                <!-- thumb-prod-flex -->
                <div class="thumb-prod-flex">
                  <EThumbProdBox size="lg" dim="사용완료">
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
                    </template>
                  </EThumbProdBox>
                  <div class="info-box">
                    <div class="coupon-code">
                      3,000원 할인
                    </div>
                    <ETit text="참치마요 삼각김밥" type="prod" />
                  </div>
                </div>
                <!-- // thumb-prod-flex -->
              </div>
              <div class="coupon-cont">
                <TableWrap type="info" gap="sm" size="md" table-name="쿠폰 정보">
                  <colgroup>
                    <col style="width: 55px;" />
                    <col style="width: auto;" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        유효기간
                      </th>
                      <td>2024.06.10 ~ 2024.06.30</td>
                    </tr>
                  </tbody>
                </TableWrap>
              </div>
              <BtnWrap type="full" size="md">
                <EBtn color="line-light-gray" size="sm" disabled>
                  <span class="text">사용완료</span>
                </EBtn>
              </BtnWrap>
            </div>
          </li>
          <!-- // CASE 3: 사용완료 버튼 케이스 -->
        </RowListWrap>
        <InfoGuideWrap
          v-if="isNoData"
          type="no-data"
          name="history"
          desc="사용할 수 있는 쿠폰이 없습니다."
        />
      </ContBox>
    </ContWrap>
  </CouponHomeTab>

  <!-- pop : 쿠본 보기 -->
  <PopCouponDetail v-model:sta="popCouponDetail" />
  <!-- // pop : 쿠본 보기 -->
</template>

<script setup lang="ts">
const { $showToast } = useNuxtApp();

definePageMeta({
  title: '쿠폰함',
  hideRightHeader: ['home'],
});

const isData = ref(true); // 임시 : 쿠폰 데이터 확인을 위해 추가
const isNoData = ref(true); // 임시 : 쿠폰 데이터 없음 확인을 위해 추가

// 쿠본 보기 팝업
const popCouponDetail = ref({ open: false });
const openCouponDetail = () => popCouponDetail.value.open = true;

function DownloadClick() {
  $showToast({ msg: '쿠폰 받기가 완료되었습니다.' + `<br>` + '사용하기를 터치하시면 매장에서 바로 사용하실 수 있습니다.' });
}
</script>

<style lang="scss" scoped>

</style>
