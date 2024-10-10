<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        금액권 선택
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap>
          <ContBox v-if="isData">
            <RowListWrap>
              <!-- repeat -->
              <li class="item">
                <ColorBox color="white">
                  <div class="box-info-header">
                    <FlexGroup align="start">
                      <div class="info-flex-left">
                        <div class="box-rdo-group">
                          <span class="ui-chk">
                            <input id="voucherChk01" type="checkbox">
                            <label for="voucherChk01"><span class="text-lg">D-93</span></label>
                          </span>
                        </div>
                      </div>
                      <div class="flex-right">
                        <span class="stext-gray70">사용기한 2024.07.02</span>
                      </div>
                    </FlexGroup>
                  </div>
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="lg">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <ETit type="prod">
                        모바일 금액권 5,000원
                      </ETit>
                      <div class="goods-group">
                        <span class="label">잔액</span>
                        <EGoods size="md" val="2,700" unit="원" />
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                  <BtnWrap type="full" size="md">
                    <EBtn tag="a" color="line-light-gray" size="sm" to="/keep/view">
                      <span class="text">상세정보</span>
                    </EBtn>
                  </BtnWrap>
                </ColorBox>
              </li>
              <!-- // repeat -->
              <!-- repeat -->
              <li class="item">
                <ColorBox color="white">
                  <div class="box-info-header">
                    <FlexGroup align="start">
                      <div class="info-flex-left">
                        <div class="box-rdo-group">
                          <span class="ui-chk">
                            <input id="voucherChk02" type="checkbox">
                            <label for="voucherChk02"><span class="text-lg">D-93</span></label>
                          </span>
                        </div>
                      </div>
                      <div class="flex-right">
                        <span class="stext-gray70">사용기한 2024.07.02</span>
                      </div>
                    </FlexGroup>
                  </div>
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="lg">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <ETit type="prod">
                        모바일 금액권 5,000원
                      </ETit>
                      <div class="goods-group">
                        <span class="label">잔액</span>
                        <EGoods size="md" val="2,700" unit="원" />
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                  <BtnWrap type="full" size="md">
                    <EBtn tag="a" color="line-light-gray" size="sm" to="/keep/view">
                      <span class="text">상세정보</span>
                    </EBtn>
                  </BtnWrap>
                </ColorBox>
              </li>
              <!-- // repeat -->
              <!-- repeat -->
              <li class="item">
                <ColorBox color="white">
                  <div class="box-info-header">
                    <FlexGroup align="start">
                      <div class="info-flex-left">
                        <div class="box-rdo-group">
                          <span class="ui-chk">
                            <input id="voucherChk03" type="checkbox">
                            <label for="voucherChk03"><span class="text-lg">D-93</span></label>
                          </span>
                        </div>
                      </div>
                      <div class="flex-right">
                        <span class="stext-gray70">사용기한 2024.07.02</span>
                      </div>
                    </FlexGroup>
                  </div>
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="lg">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지">
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <ETit type="prod">
                        모바일 금액권 5,000원
                      </ETit>
                      <div class="goods-group">
                        <span class="label">잔액</span>
                        <EGoods size="md" val="2,700" unit="원" />
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                  <BtnWrap type="full" size="md">
                    <EBtn tag="a" color="line-light-gray" size="sm" to="/keep/view">
                      <span class="text">상세정보</span>
                    </EBtn>
                  </BtnWrap>
                </ColorBox>
              </li>
              <!-- // repeat -->
            </RowListWrap>
          </ContBox>
          <ContBox v-if="isNoData">
            <InfoGuideWrap
              type="no-data"
              name="coupon"
              desc="사용 가능한 금액권이 없습니다."
              sub-desc="금액권을 구매하고 사용해 보세요."
            />
            <BtnWrap type="auto-center" size="md">
              <EBtn tag="a" color="line-light-gray" size="md" to="/service/category/voucher">
                <span class="text">금액권 구매하기</span>
              </EBtn>
            </BtnWrap>
          </ContBox>
        </ContWrap>
      </div>
    </template>
    <template #footer>
      <div class="dialog-btn-wrap">
        <!-- DESC :: 금액권 선택 시 [disabled] 속성 삭제 -->
        <EBtn color="line-light-gray" size="lg" disabled>
          <span class="text">초기화</span>
        </EBtn>
        <EBtn color="green" size="lg" disabled @click="closeDialog">
          <span class="text">적용</span>
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

const isData = ref(true); // 임시 : 데이터 있음 컨텐츠 확인을 위해 추가
const isNoData = ref(true); // 임시 : 데이터 없음 컨텐츠 확인을 위해 추가
</script>
