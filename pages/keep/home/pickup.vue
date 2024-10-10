<template>
  <ContWrap>
    <!-- 쏘옥보관 목록 있음 -->
    <ContBox v-if="isData">
      <div class="list-header">
        <FlexGroup align="center">
          <div class="flex-left">
            <div class="goods-group">
              <EGoods val="8" unit="건" />
            </div>
          </div>
          <div class="flex-right">
            <div class="ui-select type-text">
              <select title="배송상태 정렬">
                <option selected>
                  최근 구매순
                </option>
                <option>남은 기간순</option>
                <option>사용기한 임박순</option>
              </select>
            </div>
            <!-- DESC :: 활성화시 is-active 클래스 추가 -->
            <button type="button" class="btn-filter is-active" @click="openKeepFilterOption">
              <EIco name="filter" color="gray" size="xs" />
              <span class="offscreen">필터옵션</span>
            </button>
          </div>
        </FlexGroup>
      </div>
      <RowListWrap>
        <!-- case 01 : 픽업대기 -->
        <li class="item-keep">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <FlexGroup>
                <div class="info-flex-left">
                  <CtitleWrap size="zero">
                    <ETit type="cont" text="픽업대기" />
                  </CtitleWrap>
                </div>
                <div class="flex-right">
                  <div class="stext-gray70">
                    교환기간 2024.10.31
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">
                  비비고)사골컵만둣국
                </ETit>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
            <div class="pickup-info-wrap">
              <ColorBox color="light-gray" size="xs">
                <TableWrap type="info" gap="sm" size="md" table-name="픽업 정보">
                  <colgroup>
                    <col style="width: 103px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        세븐일레븐 강남점
                      </th>
                      <td class="ta-right">
                        2024.06.29(수) 15:00
                      </td>
                    </tr>
                  </tbody>
                </TableWrap>
              </ColorBox>
            </div>
            <BtnWrap size="md">
              <EBtn tag="a" color="line-green" size="sm" to="/keep/view/pickup">
                <span class="text">교환권 보기</span>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
        <!-- // case 01 : 픽업대기 -->
        <!-- case 02 : 픽업완료 -->
        <li class="item-keep is-dimmed">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <FlexGroup>
                <div class="info-flex-left">
                  <CtitleWrap size="zero">
                    <ETit type="cont" text="픽업완료" />
                  </CtitleWrap>
                </div>
                <div class="flex-right">
                  <div class="stext-gray70">
                    교환일 2024.10.31
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md" dim="픽업완료">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">
                  비비고)사골컵만둣국
                </ETit>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
            <div class="pickup-info-wrap">
              <ColorBox color="light-gray" size="xs">
                <TableWrap type="info" gap="sm" size="md" table-name="픽업 정보">
                  <colgroup>
                    <col style="width: 103px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        세븐일레븐 강남점
                      </th>
                      <td class="ta-right">
                        2024.06.29(수) 15:00
                      </td>
                    </tr>
                  </tbody>
                </TableWrap>
              </ColorBox>
            </div>
            <BtnWrap size="md">
              <!-- DESC :: 리뷰 작성 팝업 오픈 예시 이벤트 ( 링크 이동 type 파라미터 값  - 'page' ) -->
              <EBtn tag="a" color="line-light-gray" size="sm" @click="handlerWriteProdReview">
                <span class="text">상품리뷰</span>
              </EBtn>
              <EBtn color="line-light-gray" size="sm" @click="openWriteReview('store')">
                <span class="text">매장리뷰</span>
              </EBtn>
              <EBtn tag="a" color="line-light-gray" size="sm" to="/keep/view/pickup">
                <span class="text">상세보기</span>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
        <!-- // case 02 : 픽업완료 -->
        <!-- case 03 : 기간만료 -->
        <li class="item-keep is-dimmed">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <FlexGroup>
                <div class="info-flex-left">
                  <CtitleWrap size="zero">
                    <ETit type="cont" text="기간만료" />
                  </CtitleWrap>
                </div>
                <div class="flex-right">
                  <div class="stext-gray70">
                    만료일 2024.06.15
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md" dim="기간만료">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">
                  비비고)사골컵만둣국
                </ETit>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
            <div class="pickup-info-wrap">
              <ColorBox color="light-gray" size="xs">
                <TableWrap type="info" gap="sm" size="md" table-name="픽업 정보">
                  <colgroup>
                    <col style="width: 103px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        세븐일레븐 강남점
                      </th>
                      <td class="ta-right">
                        2024.06.29(수) 15:00
                      </td>
                    </tr>
                  </tbody>
                </TableWrap>
              </ColorBox>
            </div>
            <BtnWrap size="md">
              <EBtn tag="a" color="line-light-gray" size="sm" to="/keep/view/pickup">
                <span class="text">상세보기</span>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
        <!-- // case 03 : 기간만료 -->
      </RowListWrap>
    </ContBox>
    <!-- // 쏘옥보관 목록 있음 -->
    <!-- 쏘옥보관 목록 없음 -->
    <ContBox v-if="isNoData">
      <InfoGuideWrap
        type="no-data"
        name="coupon"
        desc="사용 가능한 교환권이 없습니다."
        sub-desc="세븐일레븐에서 할인된 가격으로<br>가까운 매장에서 당일픽업 서비스를 이용하세요."
      />
      <BtnWrap type="auto-center" size="lg">
        <EBtn tag="a" color="line-gray" size="md" to="/service">
          <span class="text">당일픽업 상품보기</span>
        </EBtn>
      </BtnWrap>
    </ContBox>
    <!-- // 쏘옥보관 목록 없음 -->
  </ContWrap>

  <!-- pop : 쏘옥보관 - 필터 옵션 -->
  <PopCommFilterOption v-model:sta="popKeepFilterOption">
    <!-- 필터옵션목록 -->
    <template #option>
      <li class="item-xl">
        <div class="form-field">
          <div class="form-cont">
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
        <EBtn color="green" size="lg" @click="popKeepFilterOption.open = false">
          <span class="text">적용</span>
        </EBtn>
      </div>
    </template>
  </PopCommFilterOption>
  <!-- // pop : 쏘옥보관 - 필터 옵션 -->

  <!-- pop : 리뷰작성 팝업 -->
  <PopCommWriteReview v-model:sta="popWriteReview" :active-type="WriteReviewType" />
  <!-- // pop : 리뷰작성 팝업 -->
</template>

<script setup lang="ts">
const isData = ref(true); // 임시 : 쏘옥보관 목록 컨텐츠 확인을 위해 추가
const isNoData = ref(true); // 임시 : 쏘옥보관 목록 없음 컨텐츠 확인을 위해 추가

// 상품필터옵션 팝업
const popKeepFilterOption = ref({ open: false });
const openKeepFilterOption = () => popKeepFilterOption.value.open = true;

// 기간 날짜 조회
const periodPicked = ref();
const isDateInputDisabled = ref<boolean>(true);

watch(periodPicked, (value) => {
  isDateInputDisabled.value = value !== "periodDateInput";
});

// 리뷰작성 팝업
const popWriteReview = ref({ open: false });

const WriteReviewType = ref<string>();
const openWriteReview = (type: string = "prod") => {
  WriteReviewType.value = type;
  popWriteReview.value.open = true;
};

const closeWriteReview = () => popWriteReview.value.open = false;

// [handler] 상품 리뷰 작성 오픈,이동 ( 데이터 조건에 따라 개발 처리 필요 )
const handlerWriteProdReview = (type: string = "popup") => {
  // 리뷰 작성 팝업 오픈
  if (type === "popup") {
    openWriteReview();
  }
  // 리뷰 페이지 이둉
  else if ("page") {
    navigateTo("/my/activity/review/product");
  }
};
</script>

<style lang="scss" scoped>

</style>
