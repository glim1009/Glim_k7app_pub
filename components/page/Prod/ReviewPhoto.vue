<template>
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
            <select title="리뷰 정렬">
              <option selected>
                최신순
              </option>
              <option>평점 높은 순</option>
              <option>평점 낮은 순</option>
            </select>
          </div>
          <button type="button" class="btn-filter is-active" @click="openReviewFilterOption">
            <EIco name="filter" color="gray" size="xs" />
          </button>
        </div>
      </FlexGroup>
    </div>
    <RowListWrap gap="sm">
      <li class="item">
        <ColorBox color="white" size="lg">
          <div class="review-group">
            <CtitleWrap>
              <FlexGroup>
                <div class="flex-left">
                  <ETit type="prod">
                    rla******<EBadge color="light-orange" badge-text="내 리뷰" />
                  </ETit>
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
                          <span class="stext">만족도</span>
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
                          <span class="stext">품질</span>
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
                          <span class="stext">가격</span>
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
                          <span class="stext">재구매의사</span>
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
            <SwiperAutoWrap class="side-zero">
              <!-- repeat -->
              <swiper-slide>
                <div class="attach-box">
                  <div class="attach-img-wrap">
                    <div class="attach-img">
                      <img src="/assets/images/temp/temp_attach_img_01.png" alt="상품 리뷰 이미지" />
                    </div>
                  </div>
                </div>
                <button type="button" class="btn-link" @click="openProdReviewDetail">
                  <span class="offscreen">리뷰상세 열기</span>
                </button>
              </swiper-slide>
              <!-- // repeat -->
              <!-- repeat -->
              <swiper-slide>
                <div class="attach-box">
                  <div class="attach-img-wrap">
                    <div class="attach-img">
                      <img src="/assets/images/temp/temp_attach_img_01.png" alt="상품 리뷰 이미지" />
                    </div>
                  </div>
                </div>
                <button type="button" class="btn-link" @click="openProdReviewDetail">
                  <span class="offscreen">리뷰상세 열기</span>
                </button>
              </swiper-slide>
              <!-- // repeat -->
              <!-- repeat -->
              <swiper-slide>
                <div class="attach-box">
                  <div class="attach-img-wrap">
                    <div class="attach-img">
                      <img src="/assets/images/temp/temp_attach_img_01.png" alt="상품 리뷰 이미지" />
                    </div>
                  </div>
                </div>
                <button type="button" class="btn-link" @click="openProdReviewDetail">
                  <span class="offscreen">리뷰상세 열기</span>
                </button>
              </swiper-slide>
              <!-- // repeat -->
              <!-- repeat -->
              <swiper-slide>
                <div class="attach-box">
                  <div class="attach-img-wrap">
                    <div class="attach-img">
                      <img src="/assets/images/temp/temp_attach_img_01.png" alt="상품 리뷰 이미지" />
                    </div>
                  </div>
                </div>
                <button type="button" class="btn-link" @click="openProdReviewDetail">
                  <span class="offscreen">리뷰상세 열기</span>
                </button>
              </swiper-slide>
              <!-- // repeat -->
              <!-- repeat -->
              <!-- // repeat -->
              <swiper-slide>
                <div class="attach-box">
                  <div class="attach-img-wrap">
                    <div class="attach-img">
                      <img src="/assets/images/temp/temp_attach_img_01.png" alt="상품 리뷰 이미지" />
                    </div>
                  </div>
                </div>
                <button type="button" class="btn-link" @click="openProdReviewDetail">
                  <span class="offscreen">리뷰상세 열기</span>
                </button>
              </swiper-slide>
              <!-- // repeat -->
            </SwiperAutoWrap>
            <FoldOverflowBox min-height="60">
              <div class="stext">
                너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!! 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!! 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!!
              </div>
            </FoldOverflowBox>
          </div>
        </ColorBox>
      </li>
      <li class="item">
        <ColorBox color="white" size="lg">
          <div class="review-group">
            <CtitleWrap>
              <FlexGroup>
                <div class="flex-left">
                  <ETit text="rla******" type="prod" />
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
                          <span class="stext">만족도</span>
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
                          <span class="stext">품질</span>
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
                          <span class="stext">가격</span>
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
                          <span class="stext">재구매의사</span>
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
            <SwiperAutoWrap class="side-zero">
              <!-- repeat -->
              <swiper-slide>
                <div class="attach-box">
                  <div class="attach-img-wrap">
                    <div class="attach-img">
                      <img src="/assets/images/temp/temp_attach_img_01.png" alt="상품 리뷰 이미지" />
                    </div>
                  </div>
                </div>
                <button type="button" class="btn-link" @click="openProdReviewDetail">
                  <span class="offscreen">리뷰상세 열기</span>
                </button>
              </swiper-slide>
              <!-- // repeat -->
              <!-- repeat -->
              <swiper-slide>
                <div class="attach-box">
                  <div class="attach-img-wrap">
                    <div class="attach-img">
                      <img src="/assets/images/temp/temp_attach_img_01.png" alt="상품 리뷰 이미지" />
                    </div>
                  </div>
                </div>
                <button type="button" class="btn-link" @click="openProdReviewDetail">
                  <span class="offscreen">리뷰상세 열기</span>
                </button>
              </swiper-slide>
              <!-- // repeat -->
              <!-- repeat -->
              <swiper-slide>
                <div class="attach-box">
                  <div class="attach-img-wrap">
                    <div class="attach-img">
                      <img src="/assets/images/temp/temp_attach_img_01.png" alt="상품 리뷰 이미지" />
                    </div>
                  </div>
                </div>
                <button type="button" class="btn-link" @click="openProdReviewDetail">
                  <span class="offscreen">리뷰상세 열기</span>
                </button>
              </swiper-slide>
              <!-- // repeat -->
              <!-- repeat -->
              <swiper-slide>
                <div class="attach-box">
                  <div class="attach-img-wrap">
                    <div class="attach-img">
                      <img src="/assets/images/temp/temp_attach_img_01.png" alt="상품 리뷰 이미지" />
                    </div>
                  </div>
                </div>
                <button type="button" class="btn-link" @click="openProdReviewDetail">
                  <span class="offscreen">리뷰상세 열기</span>
                </button>
              </swiper-slide>
              <!-- // repeat -->
              <!-- repeat -->
              <!-- // repeat -->
              <swiper-slide>
                <div class="attach-box">
                  <div class="attach-img-wrap">
                    <div class="attach-img">
                      <img src="/assets/images/temp/temp_attach_img_01.png" alt="상품 리뷰 이미지" />
                    </div>
                  </div>
                </div>
                <button type="button" class="btn-link" @click="openProdReviewDetail">
                  <span class="offscreen">리뷰상세 열기</span>
                </button>
              </swiper-slide>
              <!-- // repeat -->
            </SwiperAutoWrap>
            <FoldOverflowBox min-height="60">
              <div class="stext">
                너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!! 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!! 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!!
              </div>
            </FoldOverflowBox>
          </div>
        </ColorBox>
      </li>
    </RowListWrap>
  </ContBox>
  <ContBox v-if="isNoData">
    <InfoGuideWrap
      type="no-data"
      name="review"
      desc="작성된 상품리뷰가 없습니다."
    />
  </ContBox>

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
          <div class="form-input-group">
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
const route = useRoute();

const isData = ref(true);
const isNoData = ref(true);

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
