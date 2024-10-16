<template>
  <ContWrap type="white">
    <ContBox>
      <CtitleWrap>
        <FlexGroup align="end">
          <div class="flex-left">
            <ETit text="리뷰를 남겨주세요!" type="cont" />
            <p class="stext">
              매장 리뷰를 작성해 주세요
            </p>
          </div>
          <div class="flex-right">
            <EBtn color="light-green" size="sm" @click="openWriteReview('store')">
              <EIco name="edit" color="green" size="sm" />
              <span class="text">리뷰작성</span>
            </EBtn>
          </div>
        </FlexGroup>
      </CtitleWrap>
      <ColorBox color="line-light-gray" size="lg">
        <SContColWrap gap="sm">
          <SContLineBox>
            <div class="rating-average-box">
              <CtitleWrap size="sm">
                <ETit size="xs" text="평균 별점" />
              </CtitleWrap>
              <div class="bar-group">
                <div class="bar-item">
                  <div class="rating">
                    <EIco name="rating" color="green" size="sm">
                      <span class="offscreen">별점</span>
                    </EIco>
                    <span class="score-lg">3.9</span>
                  </div>
                </div>
                <div class="bar-item">
                  <p class="stext-lg fc-gray50">
                    5.0
                  </p>
                </div>
              </div>
            </div>
          </SContLineBox>
          <SContLineBox>
            <RowListWrap gap="sm">
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
                      <span class="score-md">3.4</span>
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
                      <span class="score-md">4.4</span>
                    </div>
                  </div>
                </FlexGroup>
              </li>
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
                      <span class="score-md">3.2</span>
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
                      <span class="score-md">3.8</span>
                    </div>
                  </div>
                </FlexGroup>
              </li>
            </RowListWrap>
          </SContLineBox>
        </SContColWrap>
      </ColorBox>
    </ContBox>
  </ContWrap>
  <ContWrap>
    <ContBox v-if="isData">
      <div v-if="isData || isFilterNoData" class="list-header">
        <FlexGroup align="center">
          <div class="flex-left">
            <div class="goods-group">
              <EGoods val="8" unit="건" />
            </div>
          </div>
          <div class="flex-right">
            <div class="ui-select type-text">
              <select title="리뷰 정렬">
                <option selected>
                  최신순
                </option>
                <option>평점 높은 순</option>
                <option>평점 낮은 순</option>
              </select>
            </div>
            <!-- DESC :: 활성화시 is-active 클래스 추가 -->
            <button type="button" class="btn-filter is-active" @click="openReviewFilterOption">
              <EIco name="filter" color="gray" size="xs" />
              <span class="offscreen">필터옵션</span>
            </button>
          </div>
        </FlexGroup>
      </div>
      <RowListWrap>
        <li class="item">
          <ColorBox color="white" size="lg">
            <div class="review-group">
              <CtitleWrap>
                <FlexGroup align="start">
                  <div class="flex-left">
                    <ETit type="prod">
                      rla******<EBadge color="light-orange" badge-text="내 리뷰" />
                    </ETit>
                    <div class="stext">
                      파니니EPL축구카드36팩 외 <EGoods size="sm" val="3" unit="건" />
                    </div>
                  </div>
                  <div class="flex-right">
                    <div class="stext">
                      2024.07.21
                    </div>
                  </div>
                </FlexGroup>
              </CtitleWrap>
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
                <div class="stext">
                  점원이 친절하게 안내해 주셔서 좋았어요! 점원이 친절하게 안내해 주셔서 좋았어요! 점원이 친절하게 안내해 주셔서 좋았어요! 점원이 친절하게 안내해 주셔서 좋았어요! 점원이 친절하게 안내해 주셔서 좋았어요! 점원이 친절하게 안내해 주셔서 좋았어요! 점원이 친절하게 안내해 주셔서 좋았어요! 점원이 친절하게 안내해 주셔서 좋았어요! 점원이 친절하게 안내해 주셔서 좋았어요! 점원이 친절하게 안내해 주셔서 좋았어요!
                </div>
              </FoldOverflowBox>
            </div>
          </ColorBox>
        </li>
        <li class="item">
          <ColorBox color="white" size="lg">
            <div class="review-group">
              <CtitleWrap>
                <FlexGroup align="start">
                  <div class="flex-left">
                    <ETit text="rla******" type="prod" />
                    <div class="stext">
                      파니니EPL축구카드36팩 외 <EGoods size="sm" val="3" unit="건" />
                    </div>
                  </div>
                  <div class="flex-right">
                    <div class="stext">
                      2024.07.21
                    </div>
                  </div>
                </FlexGroup>
              </CtitleWrap>
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
                <div class="stext">
                  점원이 친절하게 안내해 주셔서 좋았어요! 점원이 친절하게 안내해 주셔서 좋았어요! 점원이 친절하게 안내해 주셔서 좋았어요! 점원이 친절하게 안내해 주셔서 좋았어요! 점원이 친절하게 안내해 주셔서 좋았어요! 점원이 친절하게 안내해 주셔서 좋았어요! 점원이 친절하게 안내해 주셔서 좋았어요! 점원이 친절하게 안내해 주셔서 좋았어요! 점원이 친절하게 안내해 주셔서 좋았어요! 점원이 친절하게 안내해 주셔서 좋았어요!
                </div>
              </FoldOverflowBox>
            </div>
          </ColorBox>
        </li>
      </RowListWrap>
      <ContBox v-if="isFilterNoData">
        <InfoGuideWrap
          type="no-data"
          name="filter-result"
          desc="작성된 매장 리뷰가 없습니다."
        />
      </ContBox>
    </ContBox>
    <ContBox v-if="isNoData">
      <InfoGuideWrap
        type="no-data"
        name="review"
        desc="작성된 매장 리뷰가 없습니다."
      />
    </ContBox>
  </ContWrap>

  <!-- pop : 리뷰 - 필터 옵션 -->
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
              <input id="filterOptionDate01" v-model="periodPicked" value="periodDate01" type="radio" checked>
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
  <!-- // pop : 리뷰 - 필터 옵션 -->

  <!-- pop : 리뷰작성 팝업 -->
  <PopCommWriteReview v-model:sta="popWriteReview" :active-type="WriteReviewType" />
  <!-- // pop : 리뷰작성 팝업 -->
</template>

<script setup lang="ts">
definePageMeta({
  title: "매장리뷰",
  hideRightHeader: ["home"],
});

const isData = ref(true); // 임시 - 컨텐츠 확인을 위해 추가
const isNoData = ref(false); // 임시 - 데이터 없음 컨텐츠 확인을 위해 추가
const isFilterNoData = ref(false); // 임시 - 필터 데이터 없음 컨텐츠 확인을 위해 추가

// 리뷰작성 팝업
const popWriteReview = ref({ open: false });

const WriteReviewType = ref<string>();
const openWriteReview = (type: string = "prod") => {
  WriteReviewType.value = type;
  popWriteReview.value.open = true;
};

const closeWriteReview = () => popWriteReview.value.open = false;

// 리뷰 필터 옵션 팝업
const popReviewFilterOption = ref({ open: false });
const openReviewFilterOption = () => popReviewFilterOption.value.open = true;

// 기간 날짜 조회
const periodPicked = ref();
const isDateInputDisabled = ref<boolean>(true);

watch(periodPicked, (value) => {
  isDateInputDisabled.value = value !== "periodDateInput";
});
</script>

<style lang="scss" scoped>

</style>
