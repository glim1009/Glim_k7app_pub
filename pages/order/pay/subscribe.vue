<template>
  <ContWrap in-top="lg">
    <ContBox size="lg">
      <CtitleWrap>
        <ETit text="구매상품" type="lgCont" />
      </CtitleWrap>
      <ColorBox color="white" size="lg">
        <div class="item-thumb-prod">
          <!-- thumb-prod-flex -->
          <div class="thumb-prod-flex">
            <EThumbProdBox size="md">
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <FlexGroup>
                <div class="flex-left">
                  <ETit type="prod">
                    7월 도시락 구독
                  </ETit>
                  <div class="stext">
                    (31일간, 월 1회 30% / 총 20회)
                  </div>
                </div>
                <div class="flex-right">
                  <div class="goods-group">
                    <span class="label">월</span>
                    <EGoods size="md" val="2,700" unit="원" />
                  </div>
                </div>
              </FlexGroup>
            </div>
          </div>
          <!-- // thumb-prod-flex -->
        </div>
      </ColorBox>
    </ContBox>
    <RowListWrap size="lg" gap="2xl">
      <li class="item">
        <FoldToggleBox open>
          <template #header>
            <div class="fold-title">
              <FlexGroup>
                <div class="flex-left">
                  <ETit text="매월 결제금액" type="fold" />
                </div>
                <div class="flex-right">
                  <EGoods size="xl" val="6,400" unit="원" class="fw-md fc-spot" />
                </div>
              </FlexGroup>
            </div>
          </template>
          <template #content>
            <ColorBox color="white" size="lg">
              <RowListWrap gap="lg">
                <li class="item-order-info">
                  <FlexGroup align="center">
                    <div class="flex-left">
                      <ETit text="상품금액" type="goods" />
                    </div>
                    <div class="flex-right">
                      <ETit type="goods">
                        <EGoods val="40,000" unit="원" />
                      </ETit>
                    </div>
                  </FlexGroup>
                </li>
              </RowListWrap>
            </ColorBox>
          </template>
        </FoldToggleBox>
      </li>
    </RowListWrap>
    <ContBox size="lg">
      <AllAgreeWrap v-model:checkCount="checkCheckBox" :index="1" :total-count="totalCheckBox">
        <ColorBox color="white" size="md">
          <div ref="agreeListRef">
            <RowListWrap gap="md">
              <li class="ui-col-item">
                <FlexGroup>
                  <div class="flex-left">
                    <span class="ui-chk">
                      <input id="agreeChk01" type="checkbox">
                      <label for="agreeChk01"><span class="text-md">개인정보 수집 및 이용동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
                    </span>
                  </div>
                  <div class="flex-right">
                    <ETBtn size="xs" @click="openPersonalInfoAgree">
                      <span class="text">상세보기</span>
                      <EIco name="arw-right" color="gray" size="xs" />
                    </ETBtn>
                  </div>
                </FlexGroup>
              </li>
              <li class="ui-col-item">
                <FlexGroup>
                  <div class="flex-left">
                    <span class="ui-chk">
                      <input id="agreeChk02" type="checkbox">
                      <label for="agreeChk02"><span class="text-md">매월 정기 결제 동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
                    </span>
                  </div>
                </FlexGroup>
              </li>
            </RowListWrap>
          </div>
        </ColorBox>
      </AllAgreeWrap>
      <RowListWrap size="xs">
        <li class="dot-text-sm">
          구매조건을 확인했으며 결제 진행에 동의합니다.
        </li>
      </RowListWrap>
    </ContBox>
  </ContWrap>
  <ContDocker>
    <BtnWrap type="auto">
      <EBtn tag="a" color="line-light-gray" size="lg" to="/cart">
        <span class="text">취소</span>
      </EBtn>
      <EBtn tag="a" color="green" size="lg" to="javascript:">
        <span class="text"><EGoods val="6,400" unit="원" /> 결제하기</span>
      </EBtn>
    </BtnWrap>
  </ContDocker>

  <!-- pop : 개인정보 수집 및 이용약관 -->
  <PopTermsPersonalInfoAgree v-model:sta="popPersonalInfoAgree" />
  <!-- // pop : 개인정보 수집 및 이용약관 -->
</template>

<script setup lang="ts">
definePageMeta({
  title: "정기구독",
  notDragRefresh: true,
});

const orderPayRadio = ref();
// 전체동의
const agreeListRef = ref<HTMLInputElement | null>(null);
const totalCheckBox = ref<number>(0);
const checkCheckBox = ref<number>(0);
let checkboxes: NodeListOf<HTMLInputElement>;

function updateCheckCount(): void {
  checkCheckBox.value = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
}

watch(() => checkCheckBox.value, (newValue) => {
  totalCheckBox.value = checkboxes.length;
  if (newValue === totalCheckBox.value) {
    checkboxes.forEach(checkbox => checkbox.checked = true);
  }
  else if (newValue === 0) {
    checkboxes.forEach(checkbox => checkbox.checked = false);
  }
  updateCheckCount();
});

watch(() => agreeListRef.value, (newValue) => {
  if (!newValue)
    return;
  checkboxes = newValue.querySelectorAll<HTMLInputElement>("input[type=\"checkbox\"]");
  totalCheckBox.value = checkboxes.length;
  checkboxes.forEach((checkbox) => {
    checkbox.removeEventListener("change", updateCheckCount);
    checkbox.addEventListener("change", updateCheckCount);
  });

  updateCheckCount();
});

// 개인정보 수집 및 이용약관 팝업
const popPersonalInfoAgree = ref({ open: false });
const openPersonalInfoAgree = () => popPersonalInfoAgree.value.open = true;
</script>

<style lang="scss" scoped>
</style>
