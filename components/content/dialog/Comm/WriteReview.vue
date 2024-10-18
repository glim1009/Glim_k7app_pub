<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        리뷰 작성
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap in-top="sm" type="white">
          <ContBox>
            <!-- thumb-prod-flex -->
            <div v-if="activeType === 'prod'" class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <BadgeGroup gap="md">
                  <EBadge color="light-green" size="sm" badge-text="당일픽업" />
                </BadgeGroup>
                <ETit text="바리스타 로슈거 250ml" type="prod" />
              </div>
            </div>
            <!-- // thumb-prod-flex -->
            <CtitleWrap v-if="activeType === 'store'" size="zero">
              <BadgeGroup gap="md" size="xl">
                <EBadge color="light-green" size="sm" badge-text="당일픽업" />
              </BadgeGroup>
              <ETit text="롯데백화점 잠실점 캐슬플라자" type="cont" />
            </CtitleWrap>
          </ContBox>
        </ContWrap>
        <ContWrap type="divider">
          <RowListWrap v-if="activeType === 'prod'" gap="xl">
            <li class="item-form">
              <div class="form-field">
                <div class="form-title">
                  <CtitleWrap size="zero">
                    <ETit type="form">
                      평점 입력<span class="required"><span class="offscreen">필수입력</span></span>
                    </ETit>
                  </CtitleWrap>
                </div>
                <div class="form-cont">
                  <div class="form-input-group">
                    <ColorBox color="line-light-gray" size="lg">
                      <RowListWrap gap="line">
                        <li class="item-md">
                          <FlexGroup>
                            <div class="flex-left">
                              <p class="stext-lg fw-md">
                                만족도
                              </p>
                            </div>
                            <div class="flex-right">
                              <ERating :model-value="5" />
                            </div>
                          </FlexGroup>
                        </li>
                        <li class="item-md">
                          <FlexGroup>
                            <div class="flex-left">
                              <p class="stext-lg fw-md">
                                품질
                              </p>
                            </div>
                            <div class="flex-right">
                              <ERating :model-value="2" />
                            </div>
                          </FlexGroup>
                        </li>
                        <li class="item-md">
                          <FlexGroup>
                            <div class="flex-left">
                              <p class="stext-lg fw-md">
                                가격
                              </p>
                            </div>
                            <div class="flex-right">
                              <ERating :model-value="3" />
                            </div>
                          </FlexGroup>
                        </li>
                        <li class="item-md">
                          <FlexGroup>
                            <div class="flex-left">
                              <p class="stext-lg fw-md">
                                재구매의사
                              </p>
                            </div>
                            <div class="flex-right">
                              <ERating :model-value="1" />
                            </div>
                          </FlexGroup>
                        </li>
                      </RowListWrap>
                    </ColorBox>
                  </div>
                </div>
              </div>
            </li>
            <li class="item-form">
              <div class="form-field">
                <div class="form-title">
                  <CtitleWrap size="zero">
                    <ETit text="리뷰 작성" type="form" />
                  </CtitleWrap>
                </div>
                <div class="form-cont">
                  <div class="form-input-group">
                    <ETextareaBox :max-length="300" placeholder="상품 리뷰를 10자 이상 입력해 주세요. 제품과 관련 없는 내용 및 사진이 첨부된 리뷰는 임의 삭제될 수 있습니다." @input="handlerValue" />
                  </div>
                </div>
              </div>
            </li>
            <li class="item-form">
              <div class="form-field">
                <div class="form-title">
                  <CtitleWrap size="zero">
                    <ETit type="form">
                      파일 첨부
                      <span class="stext fw-md"><span class="fc-spot">2</span> / 5</span>
                    </ETit>
                  </CtitleWrap>
                </div>
                <div class="form-cont">
                  <div class="form-input-group">
                    <SwiperAutoWrap class="side-zero">
                      <!-- 첨부파일 등록되지 않은 경우 -->
                      <swiper-slide>
                        <div class="attach-box">
                          <input id="attach01" type="file">
                          <label for="attach01"><span class="offscreen">첨부파일 추가</span></label>
                        </div>
                      </swiper-slide>
                      <!-- // 첨부파일 등록되지 않은 경우 -->
                      <!-- 첨부파일 등록된 경우 -->
                      <swiper-slide>
                        <div class="attach-box">
                          <input id="attach02" type="file">
                          <label for="attach02"><span class="offscreen">첨부파일 추가</span></label>
                          <div class="attach-img-wrap">
                            <div class="attach-img">
                              <img src="/assets/images/temp/temp_attach_img_01.png" alt="첨부파일 이미지">
                            </div>
                            <button type="button" class="btn-remove">
                              <EIco name="clear" color="black" size="sm">
                                <span class="offscreen">첨부파일 삭제</span>
                              </EIco>
                            </button>
                          </div>
                        </div>
                      </swiper-slide>
                      <!-- // 첨부파일 등록된 경우 -->
                      <!-- 첨부파일 등록된 경우 -->
                      <swiper-slide>
                        <div class="attach-box">
                          <input id="attach03" type="file">
                          <label for="attach03"><span class="offscreen">첨부파일 추가</span></label>
                          <div class="attach-img-wrap">
                            <div class="attach-img">
                              <img src="/assets/images/temp/temp_attach_img_01.png" alt="첨부파일 이미지">
                            </div>
                            <button type="button" class="btn-remove">
                              <EIco name="clear" color="black" size="sm">
                                <span class="offscreen">첨부파일 삭제</span>
                              </EIco>
                            </button>
                          </div>
                        </div>
                      </swiper-slide>
                      <!-- 첨부파일 등록된 경우 -->
                      <!-- // 첨부파일 등록된 경우 -->
                      <swiper-slide>
                        <div class="attach-box">
                          <input id="attach04" type="file">
                          <label for="attach04"><span class="offscreen">첨부파일 추가</span></label>
                          <div class="attach-img-wrap">
                            <div class="attach-img">
                              <img src="/assets/images/temp/temp_attach_img_01.png" alt="첨부파일 이미지">
                            </div>
                            <button type="button" class="btn-remove">
                              <EIco name="clear" color="black" size="sm">
                                <span class="offscreen">첨부파일 삭제</span>
                              </EIco>
                            </button>
                          </div>
                        </div>
                      </swiper-slide>
                      <!-- // 첨부파일 등록된 경우 -->
                      <!-- 첨부파일 등록된 경우 -->
                      <swiper-slide>
                        <div class="attach-box">
                          <input id="attach05" type="file">
                          <label for="attach05"><span class="offscreen">첨부파일 추가</span></label>
                          <div class="attach-img-wrap">
                            <div class="attach-img">
                              <img src="/assets/images/temp/temp_attach_img_01.png" alt="첨부파일 이미지">
                            </div>
                            <button type="button" class="btn-remove">
                              <EIco name="clear" color="black" size="sm">
                                <span class="offscreen">첨부파일 삭제</span>
                              </EIco>
                            </button>
                          </div>
                        </div>
                      </swiper-slide>
                      <!-- // 첨부파일 등록된 경우 -->
                    </SwiperAutoWrap>
                  </div>
                  <RowListWrap>
                    <li class="dot-text-sm">
                      총 10MB 이하로 jpg, jpeg, png 파일만 업로드 가능합니다.
                    </li>
                  </RowListWrap>
                </div>
              </div>
            </li>
          </RowListWrap>
          <RowListWrap v-if="activeType === 'store'" gap="xl">
            <li class="item-form">
              <div class="form-field">
                <div class="form-title">
                  <CtitleWrap size="zero">
                    <ETit type="form">
                      평점 입력<span class="required"><span class="offscreen">필수입력</span></span>
                    </ETit>
                  </CtitleWrap>
                </div>
                <div class="form-cont">
                  <div class="form-input-group">
                    <ColorBox color="line-light-gray" size="lg">
                      <RowListWrap gap="line">
                        <li class="item-md">
                          <FlexGroup>
                            <div class="flex-left">
                              <p class="stext-lg fw-md">
                                서비스
                              </p>
                            </div>
                            <div class="flex-right">
                              <ERating :model-value="5" />
                            </div>
                          </FlexGroup>
                        </li>
                        <li class="item-md">
                          <FlexGroup>
                            <div class="flex-left">
                              <p class="stext-lg fw-md">
                                상품
                              </p>
                            </div>
                            <div class="flex-right">
                              <ERating :model-value="2" />
                            </div>
                          </FlexGroup>
                        </li>
                        <li class="item-md">
                          <FlexGroup>
                            <div class="flex-left">
                              <p class="stext-lg fw-md">
                                청결
                              </p>
                            </div>
                            <div class="flex-right">
                              <ERating :model-value="3" />
                            </div>
                          </FlexGroup>
                        </li>
                        <li class="item-md">
                          <FlexGroup>
                            <div class="flex-left">
                              <p class="stext-lg fw-md">
                                추천
                              </p>
                            </div>
                            <div class="flex-right">
                              <ERating :model-value="1" />
                            </div>
                          </FlexGroup>
                        </li>
                      </RowListWrap>
                    </ColorBox>
                  </div>
                </div>
              </div>
            </li>
            <li class="item-form">
              <div class="form-field">
                <div class="form-title">
                  <CtitleWrap size="zero">
                    <ETit text="리뷰 작성" type="form" />
                  </CtitleWrap>
                </div>
                <div class="form-cont">
                  <div class="form-input-group">
                    <ETextareaBox :max-length="300" placeholder="이용한 매장 리뷰를 10자 이상 입력해 주세요. 관련 없는 내용이 등록된 경우 임의 삭제될 수 있습니다." @input="handlerValue" />
                  </div>
                </div>
              </div>
            </li>
          </RowListWrap>
        </ContWrap>
      </div>
    </template>
    <template #footer>
      <div class="dialog-btn-wrap">
        <EBtn color="green" size="lg" @click="closeDialog">
          <span class="text">등록</span>
        </EBtn>
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
  activeType?: "prod" | "store" | string;
}>();

const emit = defineEmits(["update:sta"]);

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit("update:sta", { ...props.sta, open: value }),
});

function closeDialog() {
  isOpen.value = false;
}

const textareaEmits = ref<string | null>("");

// 입력값이 변경될 때 발생하는 이벤트
function handlerValue(value: any) {
  textareaEmits.value = value;
}
</script>
