<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-bottom">
    <template #title>
      <div class="dialog-title">
        혜택 상품선택
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap type="white">
          <RowListWrap gap="line">
            <!-- 일반 상품 -->
            <li class="item-thumb-prod">
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
                      <div class="stock">
                        <EGoods size="sm" val="5" unit="개" /> 남음
                      </div>
                      <div class="goods-group">
                        <EGoods type="origin" size="sm" val="3,000" unit="원" />
                        <EGoods size="md" val="2,700" unit="원" />
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
            <!-- // 일반 상품 -->
            <!-- 일반 상품 -->
            <li class="item-thumb-prod">
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
                      <div class="stock">
                        <EGoods size="sm" val="5" unit="개" /> 남음
                      </div>
                      <div class="goods-group">
                        <EGoods type="origin" size="sm" val="3,000" unit="원" />
                        <EGoods size="md" val="2,700" unit="원" />
                      </div>
                    </div>
                    <div class="flex-right">
                      <ESpinner :default-value="0" disabled />
                    </div>
                  </FlexGroup>
                </div>
              </div>
              <!-- // thumb-prod-flex -->
            </li>
            <!-- // 일반 상품 -->
            <!-- 일반 상품 -->
            <li class="item-thumb-prod">
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
                      <div class="stock">
                        <EGoods size="sm" val="5" unit="개" /> 남음
                      </div>
                      <div class="goods-group">
                        <EGoods type="origin" size="sm" val="3,000" unit="원" />
                        <EGoods size="md" val="2,700" unit="원" />
                      </div>
                    </div>
                    <div class="flex-right">
                      <ESpinner :default-value="0" disabled />
                    </div>
                  </FlexGroup>
                </div>
              </div>
              <!-- // thumb-prod-flex -->
            </li>
            <!-- // 일반 상품 -->
          </RowListWrap>
        </ContWrap>
      </div>
    </template>
    <template #footer>
      <div class="dialog-btn-wrap">
        <!-- DESC :: 혜택상품 선택하지 않은 경우 [disabled] 속성 추가 -->
        <EBtn color="green" size="lg" @click="closeDialog">
          <span class="text">1개중 1개 선택</span>
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
}>();

const emit = defineEmits(["update:sta"]);

const openDialog = () => {
  isOpen.value = true;
};

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit("update:sta", { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};
</script>
