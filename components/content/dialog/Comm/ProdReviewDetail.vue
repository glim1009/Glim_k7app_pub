<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        리뷰 상세
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap type="white">
          <ContBox>
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
              <SwiperBannerWrap pagenation-pos="center">
                <swiper-slide>
                  <EThumbProdBox>
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
                    </template>
                  </EThumbProdBox>
                </swiper-slide>
                <swiper-slide>
                  <EThumbProdBox>
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
                    </template>
                  </EThumbProdBox>
                </swiper-slide>
              </SwiperBannerWrap>
              <div class="stext">
                너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!! 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!! 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!!
              </div>
            </div>
          </ContBox>
        </ContWrap>
        <ContWrap in-top="lg" type="divider">
          <ContBox>
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
              <SwiperBannerWrap pagenation-pos="center">
                <swiper-slide>
                  <EThumbProdBox>
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
                    </template>
                  </EThumbProdBox>
                </swiper-slide>
                <swiper-slide>
                  <EThumbProdBox>
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
                    </template>
                  </EThumbProdBox>
                </swiper-slide>
              </SwiperBannerWrap>
              <div class="stext">
                너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!! 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!! 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!!
              </div>
            </div>
          </ContBox>
        </ContWrap>
        <ContWrap in-top="lg" type="divider" v-if="!isMyReview">
          <ContBox>
            <div class="review-group">
              <CtitleWrap>
                <FlexGroup>
                  <div class="flex-left">
                    <ETit type="prod">
                      rla******
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
              <SwiperBannerWrap pagenation-pos="center">
                <swiper-slide>
                  <EThumbProdBox>
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
                    </template>
                  </EThumbProdBox>
                </swiper-slide>
                <swiper-slide>
                  <EThumbProdBox>
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
                    </template>
                  </EThumbProdBox>
                </swiper-slide>
              </SwiperBannerWrap>
              <div class="stext">
                너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!! 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!! 너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!!
              </div>
            </div>
          </ContBox>
        </ContWrap>
      </div>
    </template>
  </ContDialog>
</template>

<script setup lang="ts">
interface DialogState {
  open: boolean;
}

const props = defineProps<{
  sta: DialogState;
  isMyReview?: boolean;
}>();

const emit = defineEmits(["update:sta"]);

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit("update:sta", { ...props.sta, open: value }),
});

function closeDialog() {
  isOpen.value = false;
}
</script>
