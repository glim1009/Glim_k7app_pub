<template>
  <ContWrap>
    <ContBox>
      <div class="list-header">
        <FlexGroup align="center">
          <div class="flex-left">
            <div class="goods-group">
              <EGoods val="8" unit="건" />
            </div>
          </div>
          <div class="flex-right">
            <div class="ui-select type-text">
              <select title="쿠폰 정렬">
                <option>
                  최신순
                </option>
                <option selected>
                  만료일순
                </option>
              </select>
            </div>
            <!-- DESC :: 활성화시 is-active 클래스 추가 -->
            <button type="button" class="btn-filter is-active" @click="openCouponListFilterOption">
              <EIco name="filter" color="gray" size="xs" />
            </button>
          </div>
        </FlexGroup>
      </div>
      <RowListWrap v-if="isData" gap="md" class="side-box">
        <!-- CASE 1 : 사용완료 -->
        <li class="item">
          <div class="coupon-box is-dimmed">
            <div class="coupon-header">
              <!-- thumb-prod-flex -->
              <div class="thumb-prod-flex">
                <EThumbProdBox size="lg" dim="사용완료">
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="쿠폰명 이미지">
                  </template>
                </EThumbProdBox>
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="orange" size="sm" badge-text="당첨" />
                    <EBadge color="green" size="sm" badge-text="착한택배" />
                    <EBadge color="gray" size="sm" badge-text="일반택배" />
                  </BadgeGroup>
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
                  <col style="width: 55px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      유효기간
                    </th>
                    <td>
                      2024.07.10 ~ 2024.07.30
                      <br>(쿠폰 사용가능 기간이 아닙니다.)
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      사용조건
                    </th>
                    <td>30,000원 이상 구매 시 사용</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      최대할인
                    </th>
                    <td>1,000원</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      당첨일
                    </th>
                    <td>2024.06.10</td>
                  </tr>
                </tbody>
              </TableWrap>
              <ColorBox color="light-gray" size="sm">
                <div class="stext-gray70">
                  쿠폰 설명 최대 50까지 노출됩니다. 쿠폰 설명 최대 50까지 노출되는 영역 입니다.
                </div>
              </ColorBox>
              <BtnWrap type="full" size="md">
                <EBtn color="line-light-gray" size="sm" @click="openCouponDetail">
                  <span class="text">사용하기</span>
                </EBtn>
              </BtnWrap>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="coupon-box is-dimmed">
            <div class="coupon-header">
              <!-- thumb-prod-flex -->
              <div class="thumb-prod-flex">
                <EThumbProdBox size="lg" dim="사용완료">
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="쿠폰명 이미지">
                  </template>
                </EThumbProdBox>
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="orange" size="sm" badge-text="당첨" />
                    <EBadge color="green" size="sm" badge-text="착한택배" />
                    <EBadge color="gray" size="sm" badge-text="일반택배" />
                  </BadgeGroup>
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
                  <col style="width: 55px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      유효기간
                    </th>
                    <td>
                      2024.07.10 ~ 2024.07.30
                      <br>(쿠폰 사용가능 기간이 아닙니다.)
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      사용조건
                    </th>
                    <td>30,000원 이상 구매 시 사용</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      최대할인
                    </th>
                    <td>1,000원</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      당첨일
                    </th>
                    <td>2024.06.10</td>
                  </tr>
                </tbody>
              </TableWrap>
              <ColorBox color="light-gray" size="sm">
                <div class="stext-gray70">
                  쿠폰 설명 최대 50까지 노출됩니다. 쿠폰 설명 최대 50까지 노출되는 영역 입니다.
                </div>
              </ColorBox>
              <BtnWrap type="full" size="md">
                <EBtn color="line-light-gray" size="sm" @click="openCouponDetail">
                  <span class="text">사용하기</span>
                </EBtn>
              </BtnWrap>
            </div>
          </div>
        </li>
        <!-- // CASE 1 : 사용완료 -->
        <!-- CASE 2 : 기간만료 -->
        <li class="item">
          <div class="coupon-box is-dimmed">
            <div class="coupon-header">
              <!-- thumb-prod-flex -->
              <div class="thumb-prod-flex">
                <EThumbProdBox size="lg" dim="기간만료">
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="쿠폰명 이미지">
                  </template>
                </EThumbProdBox>
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="orange" size="sm" badge-text="당첨" />
                    <EBadge color="green" size="sm" badge-text="착한택배" />
                    <EBadge color="gray" size="sm" badge-text="일반택배" />
                  </BadgeGroup>
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
                  <col style="width: 55px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      유효기간
                    </th>
                    <td>
                      2024.07.10 ~ 2024.07.30
                      <br>(쿠폰 사용가능 기간이 아닙니다.)
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      사용조건
                    </th>
                    <td>30,000원 이상 구매 시 사용</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      최대할인
                    </th>
                    <td>1,000원</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      당첨일
                    </th>
                    <td>2024.06.10</td>
                  </tr>
                </tbody>
              </TableWrap>
              <ColorBox color="light-gray" size="sm">
                <div class="stext-gray70">
                  쿠폰 설명 최대 50까지 노출됩니다. 쿠폰 설명 최대 50까지 노출되는 영역 입니다.
                </div>
              </ColorBox>
              <BtnWrap type="full" size="md">
                <EBtn color="line-light-gray" size="sm" @click="openCouponDetail">
                  <span class="text">사용하기</span>
                </EBtn>
              </BtnWrap>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="coupon-box is-dimmed">
            <div class="coupon-header">
              <!-- thumb-prod-flex -->
              <div class="thumb-prod-flex">
                <EThumbProdBox size="lg" dim="기간만료">
                  <template #thumb>
                    <img src="/assets/images/common/comm_card_samsung.png" alt="쿠폰명 이미지">
                  </template>
                </EThumbProdBox>
                <div class="info-box">
                  <BadgeGroup gap="md">
                    <EBadge color="orange" size="sm" badge-text="당첨" />
                    <EBadge color="green" size="sm" badge-text="착한택배" />
                    <EBadge color="gray" size="sm" badge-text="일반택배" />
                  </BadgeGroup>
                  <div class="coupon-code">
                    15% 할인
                  </div>
                  <ETit text="일반택배 할인쿠폰" type="prod" />
                </div>
              </div>
              <!-- // thumb-prod-flex -->
            </div>
            <div class="coupon-cont">
              <TableWrap type="info" gap="sm" size="md" table-name="쿠폰 정보">
                <colgroup>
                  <col style="width: 55px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      유효기간
                    </th>
                    <td>
                      2024.07.10 ~ 2024.07.30
                      <br>(쿠폰 사용가능 기간이 아닙니다.)
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      사용조건
                    </th>
                    <td>30,000원 이상 구매 시 사용</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      최대할인
                    </th>
                    <td>1,000원</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      당첨일
                    </th>
                    <td>2024.06.10</td>
                  </tr>
                </tbody>
              </TableWrap>
              <ColorBox color="light-gray" size="sm">
                <div class="stext-gray70">
                  쿠폰 설명 최대 50까지 노출됩니다. 쿠폰 설명 최대 50까지 노출되는 영역 입니다.
                </div>
              </ColorBox>
              <BtnWrap type="full" size="md">
                <EBtn color="line-light-gray" size="sm" @click="openCouponDetail">
                  <span class="text">사용하기</span>
                </EBtn>
              </BtnWrap>
            </div>
          </div>
        </li>
        <!-- // CASE 2 : 기간만료 -->
      </RowListWrap>
      <InfoGuideWrap
        v-if="isNoData"
        type="no-data"
        name="history"
        desc="쿠폰 사용 내역이 없습니다."
      />
    </ContBox>
  </ContWrap>

  <!-- pop : 쿠본 보기 -->
  <PopCouponDetail v-model:sta="popCouponDetail" />
  <!-- // pop : 쿠본 보기 -->

  <!-- pop : 쿠폰 목록 - 필터 옵션 -->
  <PopCommFilterOption v-model:sta="popCouponListFilterOption">
    <!-- 필터옵션목록 -->
    <template #option>
      <li class="item-xl">
        <div class="form-field">
          <div class="form-cont">
            <div class="form-input-group">
              <UiColGroup gap="sm">
                <span class="ui-rdo-button">
                  <input id="sortCouponList02" type="checkbox">
                  <label for="sortCouponList02"><span class="text-sm">사용예정</span></label>
                </span>
                <span class="ui-rdo-button">
                  <input id="sortCouponList03" type="checkbox" checked>
                  <label for="sortCouponList03"><span class="text-sm">사용가능</span></label>
                </span>
              </UiColGroup>
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
        <EBtn color="green" size="lg" @click="popCouponListFilterOption.open = false">
          <span class="text">적용</span>
        </EBtn>
      </div>
    </template>
  </PopCommFilterOption>
  <!-- // pop : 쿠폰 목록 - 필터 옵션 -->
</template>

<script setup lang="ts">
const isData = ref(true);
const isNoData = ref(true);

// 쿠본 보기 팝업
const popCouponDetail = ref({ open: false });
const openCouponDetail = () => popCouponDetail.value.open = true;

// 쿠폰 목록 필터 팝업
const popCouponListFilterOption = ref({ open: false });
const openCouponListFilterOption = () => popCouponListFilterOption.value.open = true;
</script>

<style lang="scss" scoped>

</style>
