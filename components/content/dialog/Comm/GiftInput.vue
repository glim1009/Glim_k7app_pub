<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        선물하기
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap :class="{ 'has-prod-cta': isCta }">
          <ContBox gap="md">
            <ColorBox color="white" size="lg">
              <RowListWrap gap="xl">
                <li class="item-form">
                  <div class="form-field">
                    <div class="form-title">
                      <CtitleWrap size="zero">
                        <ETit type="form">
                          <span class="text">보내는 사람</span>
                        </ETit>
                      </CtitleWrap>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group">
                        <EInputBox title="보내는 사람" placeholder="보내는 사람 입력" value="김세븐" />
                      </div>
                    </div>
                  </div>
                </li>
                <li v-if="isInputRecipient" class="item-form">
                  <div class="form-field">
                    <div class="form-title">
                      <CtitleWrap size="zero">
                        <FlexGroup align="end">
                          <div class="flex-left">
                            <ETit type="form">
                              <span class="text">받는 사람</span>
                            </ETit>
                          </div>
                          <div class="flex-right">
                            <EBtn size="xs" color="line-light-gray">
                              <span class="text">연락처 선택</span>
                            </EBtn>
                          </div>
                        </FlexGroup>
                      </CtitleWrap>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group">
                        <EInputBox type="number" inputmode="tel" title="휴대폰번호" placeholder="휴대폰번호 입력" />
                      </div>
                    </div>
                  </div>
                </li>
                <li v-if="isSelectedRecipient" class="item-form">
                  <div class="form-field">
                    <div class="form-title">
                      <CtitleWrap size="zero">
                        <ETit type="form">
                          <span class="text">받는 사람</span>
                        </ETit>
                      </CtitleWrap>
                    </div>
                    <div class="form-cont">
                      <div class="tag-full-box">
                        <FlexGroup>
                          <div class="flex-left">
                            <p class="stext-lg-black fw-sb">
                              홍길동
                            </p>
                          </div>
                          <div class="flex-right">
                            <p class="stext-lg">
                              01012345678
                            </p>
                          </div>
                        </FlexGroup>
                        <button type="button" class="btn-delete">
                          <EIco name="close" color="gray" size="xs">
                            <span class="offscreen">최근 검색어 삭제</span>
                          </EIco>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </RowListWrap>
            </ColorBox>
            <ColorBox v-if="isFreeGift" color="white" size="lg">
              <FlexGroup>
                <div class="flex-left">
                  <ETit type="cont">
                    선물 수량
                  </ETit>
                </div>
                <div class="flex-right">
                  <ESpinner />
                </div>
              </FlexGroup>
            </ColorBox>
            <ColorBox v-if="isFreeGift" color="white" size="lg">
              <CtitleWrap>
                <FlexGroup>
                  <div class="flex-left">
                    <ETit type="cont">
                      증정품 선택
                    </ETit>
                  </div>
                  <div class="flex-right">
                    <span class="stext">
                      <span class="fc-spot fw-md">2개 선택</span>
                      <span class="fc-black fw-md"> / 1개 선택 가능</span>
                    </span>
                  </div>
                </FlexGroup>
              </CtitleWrap>
              <div class="scroll-box">
                <RowListWrap gap="sm">
                  <li class="item">
                    <!-- thumb-prod-flex -->
                    <div class="thumb-prod-flex">
                      <EThumbProdBox size="md">
                        <template #thumb>
                          <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
                        </template>
                      </EThumbProdBox>
                      <div class="info-box">
                        <FlexGroup>
                          <div class="flex-left">
                            <ETit type="prod">
                              제육&콘 참치마요 덮밥
                            </ETit>
                          </div>
                          <div class="flex-right">
                            <ESpinner />
                          </div>
                        </FlexGroup>
                      </div>
                    </div>
                    <!-- // thumb-prod-flex -->
                  </li>
                  <li class="item">
                    <!-- thumb-prod-flex -->
                    <div class="thumb-prod-flex">
                      <EThumbProdBox size="md">
                        <template #thumb>
                          <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
                        </template>
                      </EThumbProdBox>
                      <div class="info-box">
                        <FlexGroup>
                          <div class="flex-left">
                            <ETit type="prod">
                              제육&콘 참치마요 덮밥
                            </ETit>
                          </div>
                          <div class="flex-right">
                            <ESpinner />
                          </div>
                        </FlexGroup>
                      </div>
                    </div>
                    <!-- // thumb-prod-flex -->
                  </li>
                  <li class="item">
                    <!-- thumb-prod-flex -->
                    <div class="thumb-prod-flex">
                      <EThumbProdBox size="md">
                        <template #thumb>
                          <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
                        </template>
                      </EThumbProdBox>
                      <div class="info-box">
                        <FlexGroup>
                          <div class="flex-left">
                            <ETit type="prod">
                              제육&콘 참치마요 덮밥
                            </ETit>
                          </div>
                          <div class="flex-right">
                            <ESpinner />
                          </div>
                        </FlexGroup>
                      </div>
                    </div>
                    <!-- // thumb-prod-flex -->
                  </li>
                  <li class="item">
                    <!-- thumb-prod-flex -->
                    <div class="thumb-prod-flex">
                      <EThumbProdBox size="md">
                        <template #thumb>
                          <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
                        </template>
                      </EThumbProdBox>
                      <div class="info-box">
                        <FlexGroup>
                          <div class="flex-left">
                            <ETit type="prod">
                              제육&콘 참치마요 덮밥
                            </ETit>
                          </div>
                          <div class="flex-right">
                            <ESpinner />
                          </div>
                        </FlexGroup>
                      </div>
                    </div>
                    <!-- // thumb-prod-flex -->
                  </li>
                  <li class="item">
                    <!-- thumb-prod-flex -->
                    <div class="thumb-prod-flex">
                      <EThumbProdBox size="md">
                        <template #thumb>
                          <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
                        </template>
                      </EThumbProdBox>
                      <div class="info-box">
                        <FlexGroup>
                          <div class="flex-left">
                            <ETit type="prod">
                              제육&콘 참치마요 덮밥
                            </ETit>
                          </div>
                          <div class="flex-right">
                            <ESpinner />
                          </div>
                        </FlexGroup>
                      </div>
                    </div>
                    <!-- // thumb-prod-flex -->
                  </li>
                  <li class="item">
                    <!-- thumb-prod-flex -->
                    <div class="thumb-prod-flex">
                      <EThumbProdBox size="md">
                        <template #thumb>
                          <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
                        </template>
                      </EThumbProdBox>
                      <div class="info-box">
                        <FlexGroup>
                          <div class="flex-left">
                            <ETit type="prod">
                              제육&콘 참치마요 덮밥
                            </ETit>
                          </div>
                          <div class="flex-right">
                            <ESpinner />
                          </div>
                        </FlexGroup>
                      </div>
                    </div>
                    <!-- // thumb-prod-flex -->
                  </li>
                </RowListWrap>
              </div>
            </ColorBox>
            <ColorBox v-if="isSendGift" color="white" size="lg">
              <CtitleWrap>
                <ETit type="cont" text="보낼선물" />
              </CtitleWrap>
              <!-- thumb-prod-flex -->
              <div class="thumb-prod-flex">
                <EThumbProdBox size="md">
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
                  </template>
                </EThumbProdBox>
                <div class="info-box">
                  <ETit type="prod">
                    제육&콘 참치마요 덮밥
                  </ETit>
                </div>
              </div>
              <!-- // thumb-prod-flex -->
            </ColorBox>
          </ContBox>
          <ContBox size="xs">
            <RowListWrap size="sm">
              <li class="item">
                <span class="dot-text-sm">이 상품은 구매일로부터 90일 내 사용 가능합니다.</span>
              </li>
            </RowListWrap>
          </ContBox>
        </ContWrap>
      </div>
    </template>
    <template #footer>
      <div v-if="!isCta" class="dialog-btn-wrap">
        <EBtn color="green" @click="closeDialog">
          <span class="text">선물하기</span>
        </EBtn>
      </div>
    </template>
    <slot v-if="isCta" name="cta" />
  </ContDialog>
</template>

<script setup lang="ts">
interface DialogState {
  open: boolean;
}

const props = defineProps<{
  sta: DialogState;
  isCta?: boolean;
  isFreeGift?: boolean; // 증정품 컨텐츠 확인을 위해 추가
  isSendGift?: boolean; // 보낼선물 컨텐츠 확인을 위해 추가
}>();

const emit = defineEmits(["update:sta"]);

function openDialog() {
  isOpen.value = true;
}

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit("update:sta", { ...props.sta, open: value }),
});

function closeDialog() {
  isOpen.value = false;
}

const isInputRecipient = ref(true); // 임시 : 받는 사람 직접입력 확인을 위해 추가
const isSelectedRecipient = ref(true); // 임시 : 받는 사람 선택됨 확인을 위해 추가
</script>
