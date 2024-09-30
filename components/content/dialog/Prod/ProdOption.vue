<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-bottom">
    <template #title>
      <div class="dialog-title">수량 옵션</div>
    </template>
    <template #body>
      <div class="dialog-inner prod-opt-wrap">
        <ContWrap type="white" in-top="zero" :class="{'has-prod-cta' : isCta}">
          <ContBox>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="lg">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지"/>
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <FlexGroup>
                  <div class="flex-left">
                    <ETit type="prod">제육&콘 참치마요 덮밥</ETit>
                    <div class="stock">
                      <EGoods size="sm" val="N" unit="개" /> 남음
                    </div>
                  </div>
                  <div class="flex-right">
                    <ESpinner />
                  </div>
                </FlexGroup>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
          </ContBox>
        </ContWrap>
        <ContWrap v-if="isDataFreeGift" :class="['cont-prod-opt', {'has-prod-cta' : isCta}]">
          <ColorBox color="white" size="lg">
            <CtitleWrap>
              <FlexGroup>
                <div class="flex-left">
                  <ETit type="cont">증정품 선택</ETit>
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
              <RowListWrap gap="line">
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지"/>
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <FlexGroup>
                        <div class="flex-left">
                          <ETit type="prod">제육&콘 참치마요 덮밥</ETit>
                          <div class="stock">
                            <EGoods size="sm" val="N" unit="개" /> 남음
                          </div>
                        </div>
                        <div class="flex-right">
                          <ESpinner />
                        </div>
                      </FlexGroup>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                </li>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지"/>
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <FlexGroup>
                        <div class="flex-left">
                          <ETit type="prod">제육&콘 참치마요 덮밥</ETit>
                          <div class="stock">
                            <EGoods size="sm" val="N" unit="개" /> 남음
                          </div>
                        </div>
                        <div class="flex-right">
                          <ESpinner />
                        </div>
                      </FlexGroup>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                </li>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지"/>
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <FlexGroup>
                        <div class="flex-left">
                          <ETit type="prod">제육&콘 참치마요 덮밥</ETit>
                          <div class="stock">
                            <EGoods size="sm" val="N" unit="개" /> 남음
                          </div>
                        </div>
                        <div class="flex-right">
                          <ESpinner />
                        </div>
                      </FlexGroup>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                </li>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지"/>
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <FlexGroup>
                        <div class="flex-left">
                          <ETit type="prod">제육&콘 참치마요 덮밥</ETit>
                          <div class="stock">
                            <EGoods size="sm" val="N" unit="개" /> 남음
                          </div>
                        </div>
                        <div class="flex-right">
                          <ESpinner />
                        </div>
                      </FlexGroup>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                </li>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지"/>
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <FlexGroup>
                        <div class="flex-left">
                          <ETit type="prod">제육&콘 참치마요 덮밥</ETit>
                          <div class="stock">
                            <EGoods size="sm" val="N" unit="개" /> 남음
                          </div>
                        </div>
                        <div class="flex-right">
                          <ESpinner />
                        </div>
                      </FlexGroup>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                </li>
                <li class="item-thumb-prod">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지"/>
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <FlexGroup>
                        <div class="flex-left">
                          <ETit type="prod">제육&콘 참치마요 덮밥</ETit>
                          <div class="stock">
                            <EGoods size="sm" val="N" unit="개" /> 남음
                          </div>
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
        </ContWrap>
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
}>();

const emit = defineEmits(['update:sta']);

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit('update:sta', { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};

const isDataFreeGift = ref(true); // 임시 : 증정품 컨텐츠 확인을 위해 추가
</script>
