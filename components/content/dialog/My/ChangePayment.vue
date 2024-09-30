<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        결제수단 변경
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap type="white" in-top="sm">
          <!-- thumb-prod-flex -->
          <div class="thumb-prod-flex">
            <EThumbProdBox size="lg">
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지">
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="line-gray" size="sm" badge-text="정기구독" />
              </BadgeGroup>
              <ETit text="7월 세븐카페 구독" type="prod" />
              <div class="stext">
                (30일간, 일 1회 / 총 10회)
              </div>
            </div>
          </div>
          <!-- // thumb-prod-flex -->
        </ContWrap>
        <ContWrap type="divider">
          <ContBox>
            <RowListWrap gap="xl">
              <li class="item-form">
                <div class="form-field">
                  <div class="form-title">
                    <CtitleWrap size="zero">
                      <ETit text="카드번호" type="form" />
                    </CtitleWrap>
                  </div>
                  <div class="form-cont">
                    <div class="form-input-group">
                      <EInputBox type="number" title="카드번호 입력" placeholder="16자리 카드번호를 입력해 주세요." :max-length="16" />
                    </div>
                  </div>
                </div>
              </li>
              <li class="item-form">
                <div class="form-field">
                  <div class="form-title">
                    <CtitleWrap size="zero">
                      <ETit text="유효기간" type="form" />
                    </CtitleWrap>
                  </div>
                  <div class="form-cont">
                    <div class="form-input-group">
                      <FlexGroup>
                        <div class="flex-left">
                          <EInputBox type="number" title="월 (MM) 입력" placeholder="월 (MM)" :max-length="2" />
                        </div>
                        <div class="flex-right">
                          <EInputBox type="number" title="년 (YY) 입력" placeholder="년 (YY)" :max-length="2" />
                        </div>
                      </FlexGroup>
                    </div>
                  </div>
                </div>
              </li>
              <li class="item-form">
                <div class="form-field">
                  <div class="form-title">
                    <CtitleWrap size="zero">
                      <ETit text="생년월일 (사업자번호)" type="form" />
                    </CtitleWrap>
                  </div>
                  <div class="form-cont">
                    <div class="form-input-group">
                      <EInputBox type="number" title="생년월일(사업자번호) 입력" placeholder="생년월일 6자 또는 사업자번호 10자리를 입력해 주세요." :max-length="10" />
                    </div>
                  </div>
                </div>
              </li>
              <li class="item-form">
                <div class="form-field">
                  <div class="form-title">
                    <CtitleWrap size="zero">
                      <ETit text="비밀번호 (앞 2자리)" type="form" />
                    </CtitleWrap>
                  </div>
                  <div class="form-cont">
                    <div class="form-input-group">
                      <EInputBox :type="isPassword ? 'password' : 'text'" inputmode="numeric" title="비밀번호 입력" placeholder="비밀번호 앞 2자리를 입력해주세요." :max-length="2">
                        <button type="button" class="btn-toggle-pw" :class="[{ 'is-active': !isPassword }]" @click="togglePassword">
                          <span class="offscreen">비밀번호 숨김 상태</span>
                        </button>
                      </EInputBox>
                    </div>
                  </div>
                </div>
              </li>
            </RowListWrap>
          </ContBox>
        </ContWrap>
        <ContWrap>
          <ContBox>
            <AllAgreeWrap v-model:checkCount="checkCheckBox" :index="1" :total-count="totalCheckBox">
              <ColorBox color="white" size="md">
                <div ref="agreeListRef">
                  <RowListWrap gap="md">
                    <li class="ui-col-item">
                      <FlexGroup>
                        <div class="flex-left">
                          <span class="ui-chk">
                            <input id="agreeChk01" type="checkbox">
                            <label for="agreeChk01"><span class="text-md">PG사 전자금융거래 약관동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
                          </span>
                        </div>
                        <div class="flex-right">
                          <ETBtn tag="a" size="xs" to="javascript:">
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
                            <label for="agreeChk02"><span class="text-md">PG사 개인정보 수집 및 이용동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
                          </span>
                        </div>
                        <div class="flex-right">
                          <ETBtn tag="a" size="xs" to="javascript:">
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
                            <input id="agreeChk03" type="checkbox">
                            <label for="agreeChk03"><span class="text-md">PG사 개인정보 제3자 제공동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
                          </span>
                        </div>
                        <div class="flex-right">
                          <ETBtn tag="a" size="xs" to="javascript:">
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
                            <input id="agreeChk04" type="checkbox">
                            <label for="agreeChk04"><span class="text-md">매월 정기 결제 동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
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
      </div>
    </template>
    <template #footer>
      <div class="dialog-btn-wrap">
        <EBtn color="green" size="lg" @click="closeDialog">
          <span class="text">변경</span>
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

const isPassword = ref(true);

function togglePassword() {
  isPassword.value = !isPassword.value;
}

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
</script>
