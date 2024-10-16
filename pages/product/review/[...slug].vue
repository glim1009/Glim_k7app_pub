<template>
  <ContWrap type="white" in-bottom="zero">
    <ContBox>
      <CtitleWrap>
        <FlexGroup align="end">
          <div class="flex-left">
            <ETit text="리뷰를 남겨주세요!" type="cont" />
            <p class="stext">
              리뷰 작성 시 최대 100P 지급
              <ETooltip>
                <CtitleWrap size="zero">
                  <ETit text="리뷰 작성포인트 지급 기준" type="sCont" />
                  <p class="stext">
                    상품평가 = 10p
                    <br>상품평가+텍스트 = 50p
                    <br>상품평가+사진 = 60p
                    <br>상품평가+텍스트+사진 = 100p
                  </p>
                </CtitleWrap>
              </ETooltip>
            </p>
          </div>
          <div class="flex-right">
            <EBtn color="light-green" size="sm" @click="openWriteReview">
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
                    <span class="stext">만족도</span>
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
                    <span class="stext">품질</span>
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
                    <span class="stext">가격</span>
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
                    <span class="stext">재구매의사</span>
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
  <TabWrap fir-active="review" class="justify-tab in-top-xs">
    <template #tabs="{ activeTab, setActiveTab }">
      <ul class="tab-line-list">
        <li class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'review' }"
            @click="setActiveTab('review')"
          >
            <span class="tab-text">포토리뷰 8</span>
          </button>
        </li>
        <li class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'ReviewPhoto' }"
            @click="setActiveTab('ReviewPhoto')"
          >
            <span class="tab-text">일반리뷰 6</span>
          </button>
        </li>
      </ul>
    </template>
    <template #default="{ activeTab }">
      <!-- 포토리뷰 -->
      <ContWrap v-if="activeTab === 'review'">
        <ProdReviewPhoto />
      </ContWrap>
      <!-- // 포토리뷰 -->
      <!-- 일반리뷰 -->
      <ContWrap v-if="activeTab === 'ReviewPhoto'">
        <ProdReview />
      </ContWrap>
      <!-- // 일반리뷰 -->
    </template>
  </TabWrap>

  <!-- pop : 리뷰작성 팝업 -->
  <PopCommWriteReview v-model:sta="popWriteReview" :active-type="WriteReviewType" />
  <!-- // pop : 리뷰작성 팝업 -->
</template>

<script setup lang="ts">
definePageMeta({
  title: "상품리뷰",
  hideRightHeader: ["home"],
});

const route = useRoute();
if (route.params.slug[1])
  showError({ statusCode: 404 });

// 리뷰작성 팝업
const popWriteReview = ref({ open: false });

const WriteReviewType = ref<string>();
const openWriteReview = (type: string = "prod") => {
  WriteReviewType.value = type;
  popWriteReview.value.open = true;
};

const closeWriteReview = () => popWriteReview.value.open = false;
</script>

<style lang="scss" scoped>

</style>
