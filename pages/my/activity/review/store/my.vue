<template>
  <ContWrap>
    <!-- 데이터 있음 -->
    <ContBox v-if="isData">
      <div class="list-header">
        <FlexGroup>
          <div class="flex-left">
            <div class="goods-group">
              <EGoods val="8" unit="건" />
            </div>
          </div>
          <div class="flex-right">
            <button type="button" class="btn-filter is-active" @click="openReviewFilterOption">
              <EIco name="filter" color="gray" size="xs" />
              <span class="offscreen">필터옵션</span>
            </button>
          </div>
        </FlexGroup>
      </div>
      <ContBox size="zero" gap="sm" v-if="isData && !isNoFilterData">
        <ColorBox color="white" size="lg">
          <!-- DESC :: 폐점된 매장 리뷰인 경우 is-dimmed 클래스 추가 -->
          <div class="review-group">
            <FlexGroup align="start">
              <div class="flex-left">
                <CtitleWrap>
                  <ETit type="box" text="을지로 1가점" />
                  <div class="stext-lg">파니니EPL축구카드36팩 외 3건</div>
                </CtitleWrap>
              </div>
              <div class="flex-right">
                <div class="stext fc-gray60">2024.07.21 구매</div>
              </div>
            </FlexGroup>
            <ColorBox color="line-light-gray" size="sm">
              <SContColWrap gap="sm">
                <SContLineBox>
                  <RowListWrap gap="xs">
                    <li class="item">
                      <FlexGroup>
                        <div class="flex-left">
                          <span class="stext">서비스</span>
                        </div>
                        <div class="flex-right">
                          <div class="rating">
                            <EIco name="rating" color="green" size="xs">
                              <span class="offscreen">별점</span>
                            </EIco>
                            <span class="score-sm">3.0</span>
                          </div>
                        </div>
                      </FlexGroup>
                    </li>
                    <li class="item">
                      <FlexGroup>
                        <div class="flex-left">
                          <span class="stext">상품</span>
                        </div>
                        <div class="flex-right">
                          <div class="rating">
                            <EIco name="rating" color="green" size="xs">
                              <span class="offscreen">별점</span>
                            </EIco>
                            <span class="score-sm">4.0</span>
                          </div>
                        </div>
                      </FlexGroup>
                    </li>
                  </RowListWrap>
                </SContLineBox>
                <SContLineBox>
                  <RowListWrap gap="xs">
                    <li class="item">
                      <FlexGroup>
                        <div class="flex-left">
                          <span class="stext">청결</span>
                        </div>
                        <div class="flex-right">
                          <div class="rating">
                            <EIco name="rating" color="green" size="xs">
                              <span class="offscreen">별점</span>
                            </EIco>
                            <span class="score-sm">3.0</span>
                          </div>
                        </div>
                      </FlexGroup>
                    </li>
                    <li class="item">
                      <FlexGroup>
                        <div class="flex-left">
                          <span class="stext">추천</span>
                        </div>
                        <div class="flex-right">
                          <div class="rating">
                            <EIco name="rating" color="green" size="xs">
                              <span class="offscreen">별점</span>
                            </EIco>
                            <span class="score-sm">3.0</span>
                          </div>
                        </div>
                      </FlexGroup>
                    </li>
                  </RowListWrap>
                </SContLineBox>
              </SContColWrap>
            </ColorBox>
            <FoldOverflowBox min-height="60">
              <div class="stext-lg">
                너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!! 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!! 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!!
              </div>
            </FoldOverflowBox>
          </div>
        </ColorBox>
        <ColorBox color="white" size="lg">
          <!-- DESC :: 폐점된 매장 리뷰인 경우 is-dimmed 클래스 추가 -->
          <div class="review-group is-dimmed">
            <FlexGroup align="start">
              <div class="flex-left">
                <CtitleWrap>
                  <ETit type="box" text="을지로 1가점" />
                  <div class="stext-lg">파니니EPL축구카드36팩 외 3건</div>
                </CtitleWrap>
              </div>
              <div class="flex-right">
                <div class="stext fc-gray60">2024.07.21 구매</div>
              </div>
            </FlexGroup>
            <ColorBox color="line-light-gray" size="sm">
              <SContColWrap gap="sm">
                <SContLineBox>
                  <RowListWrap gap="xs">
                    <li class="item">
                      <FlexGroup>
                        <div class="flex-left">
                          <span class="stext">서비스</span>
                        </div>
                        <div class="flex-right">
                          <div class="rating">
                            <EIco name="rating" color="green" size="xs">
                              <span class="offscreen">별점</span>
                            </EIco>
                            <span class="score-sm">3.0</span>
                          </div>
                        </div>
                      </FlexGroup>
                    </li>
                    <li class="item">
                      <FlexGroup>
                        <div class="flex-left">
                          <span class="stext">상품</span>
                        </div>
                        <div class="flex-right">
                          <div class="rating">
                            <EIco name="rating" color="green" size="xs">
                              <span class="offscreen">별점</span>
                            </EIco>
                            <span class="score-sm">4.0</span>
                          </div>
                        </div>
                      </FlexGroup>
                    </li>
                  </RowListWrap>
                </SContLineBox>
                <SContLineBox>
                  <RowListWrap gap="xs">
                    <li class="item">
                      <FlexGroup>
                        <div class="flex-left">
                          <span class="stext">청결</span>
                        </div>
                        <div class="flex-right">
                          <div class="rating">
                            <EIco name="rating" color="green" size="xs">
                              <span class="offscreen">별점</span>
                            </EIco>
                            <span class="score-sm">3.0</span>
                          </div>
                        </div>
                      </FlexGroup>
                    </li>
                    <li class="item">
                      <FlexGroup>
                        <div class="flex-left">
                          <span class="stext">추천</span>
                        </div>
                        <div class="flex-right">
                          <div class="rating">
                            <EIco name="rating" color="green" size="xs">
                              <span class="offscreen">별점</span>
                            </EIco>
                            <span class="score-sm">3.0</span>
                          </div>
                        </div>
                      </FlexGroup>
                    </li>
                  </RowListWrap>
                </SContLineBox>
              </SContColWrap>
            </ColorBox>
            <FoldOverflowBox min-height="60">
              <div class="stext-lg">
                너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!! 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!! 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!!
              </div>
            </FoldOverflowBox>
          </div>
        </ColorBox>
        <ColorBox color="white" size="lg">
          <!-- DESC :: 폐점된 매장 리뷰인 경우 is-dimmed 클래스 추가 -->
          <div class="review-group">
            <FlexGroup align="start">
              <div class="flex-left">
                <CtitleWrap>
                  <ETit type="box" text="을지로 1가점" />
                  <div class="stext-lg">파니니EPL축구카드36팩 외 3건</div>
                </CtitleWrap>
              </div>
              <div class="flex-right">
                <div class="stext fc-gray60">2024.07.21 구매</div>
              </div>
            </FlexGroup>
            <ColorBox color="line-light-gray" size="sm">
              <SContColWrap gap="sm">
                <SContLineBox>
                  <RowListWrap gap="xs">
                    <li class="item">
                      <FlexGroup>
                        <div class="flex-left">
                          <span class="stext">서비스</span>
                        </div>
                        <div class="flex-right">
                          <div class="rating">
                            <EIco name="rating" color="green" size="xs">
                              <span class="offscreen">별점</span>
                            </EIco>
                            <span class="score-sm">3.0</span>
                          </div>
                        </div>
                      </FlexGroup>
                    </li>
                    <li class="item">
                      <FlexGroup>
                        <div class="flex-left">
                          <span class="stext">상품</span>
                        </div>
                        <div class="flex-right">
                          <div class="rating">
                            <EIco name="rating" color="green" size="xs">
                              <span class="offscreen">별점</span>
                            </EIco>
                            <span class="score-sm">4.0</span>
                          </div>
                        </div>
                      </FlexGroup>
                    </li>
                  </RowListWrap>
                </SContLineBox>
                <SContLineBox>
                  <RowListWrap gap="xs">
                    <li class="item">
                      <FlexGroup>
                        <div class="flex-left">
                          <span class="stext">청결</span>
                        </div>
                        <div class="flex-right">
                          <div class="rating">
                            <EIco name="rating" color="green" size="xs">
                              <span class="offscreen">별점</span>
                            </EIco>
                            <span class="score-sm">3.0</span>
                          </div>
                        </div>
                      </FlexGroup>
                    </li>
                    <li class="item">
                      <FlexGroup>
                        <div class="flex-left">
                          <span class="stext">추천</span>
                        </div>
                        <div class="flex-right">
                          <div class="rating">
                            <EIco name="rating" color="green" size="xs">
                              <span class="offscreen">별점</span>
                            </EIco>
                            <span class="score-sm">3.0</span>
                          </div>
                        </div>
                      </FlexGroup>
                    </li>
                  </RowListWrap>
                </SContLineBox>
              </SContColWrap>
            </ColorBox>
            <FoldOverflowBox min-height="60">
              <div class="stext-lg">
                너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!! 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!! 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!!
              </div>
            </FoldOverflowBox>
          </div>
        </ColorBox>
        <!-- 필터 조건 데이터 없음 -->
        <InfoGuideWrap
          v-if="isData && isNoFilterData"
          type="no-data"
          name="filter-result"
          desc="리뷰가 없습니다."
          sub-desc="매장 이용 후 리뷰를 작성해 주세요."
        />
        <!-- // 필터 조건 데이터 없음 -->
      </ContBox>
    </ContBox>
    <!-- // 데이터 있음 -->
    <!-- 데이터 없음 -->
    <ContBox v-if="isNoData">
      <InfoGuideWrap
        type="no-data"
        name="review"
        desc="리뷰가 없습니다."
        sub-desc="매장 이용 후 리뷰를 작성해 주세요."
      />
    </ContBox>
    <!-- // 데이터 없음 -->
  </ContWrap>

  <!-- pop : 리뷰 상세 팝업 -->
  <PopCommProdReviewDetail v-model:sta="popProdReviewDetail" />
  <!-- // pop : 리뷰 상세  팝업 -->

  <!-- pop : 리뷰 필터 옵션 -->
  <PopCommFilterOption v-model:sta="popReviewFilterOption">
    <!-- 필터옵션목록 -->
    <template #option>
      <div class="form-field">
        <div class="form-title">
          <ETit text="조회기간" type="cont" />
        </div>
        <div class="form-cont">
          <UiColGroup gap="sm">
            <span class="ui-rdo-button">
              <input id="filterOptionDate01" v-model="periodPicked" value="periodDate01" type="radio" />
              <label for="filterOptionDate01"><span class="text-sm">최근3개월</span></label>
            </span>
            <span class="ui-rdo-button">
              <input id="filterOptionDate02" v-model="periodPicked" value="periodDate02" type="radio" />
              <label for="filterOptionDate02"><span class="text-sm">6개월</span></label>
            </span>
            <span class="ui-rdo-button">
              <input id="filterOptionDate03" v-model="periodPicked" value="periodDate03" type="radio" />
              <label for="filterOptionDate03"><span class="text-sm">1년</span></label>
            </span>
            <span class="ui-rdo-button">
              <input id="filterOptionDate04" v-model="periodPicked" value="periodDateInput" type="radio" />
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
    </template>
    <!-- // 필터옵션목록 -->
    <template #footer>
      <div class="dialog-btn-auto-wrap">
        <EBtn color="line-light-gray" size="lg">
          <span class="text">초기화</span>
        </EBtn>
        <EBtn color="green" size="lg" @click="popReviewFilterOption.open = false">
          <span class="text">적용</span>
        </EBtn>
      </div>
    </template>
  </PopCommFilterOption>
  <!-- // pop : 리뷰 필터 옵션 -->
</template>

<script setup lang="ts">
const isData = ref(true); // 임시 : 리뷰 데이터 확인을 위해 추가
const isNoData = ref(true); // 임시 : 리뷰 데이터 없음 확인을 위해 추가
const isNoFilterData = ref(false); // 임시 : 리뷰 필터조건 데이터 없음 확인을 위해 추가

// 리뷰 상세 팝업
const popProdReviewDetail = ref({ open: false });
const openProdReviewDetail = () => popProdReviewDetail.value.open = true;

// 리뷰 필터 옵션 팝업
const popReviewFilterOption = ref({ open: false });
const openReviewFilterOption = () => popReviewFilterOption.value.open = true;

// 기간 날짜 조회
const periodPicked = ref();
const isDateInputDisabled = ref<boolean>(true);

watch(periodPicked, (value) => {
  isDateInputDisabled.value = value !== 'periodDateInput';
});
</script>
