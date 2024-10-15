<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">주소록 추가</div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap type="white">
          <RowListWrap gap="xl">
            <li class="item-form">
              <div class="form-field">
                <div class="form-title">
                  <ETit type="form">주소별칭<span class="required"><span class="offscreen">필수입력</span></span></ETit>
                </div>
                <div class="form-cont">
                  <div class="form-input-group">
                    <EInputBox title="주소별칭 입력" placeholder="주소별칭 입력" />
                  </div>
                </div>
              </div>
            </li>
            <li class="item-form">
              <div class="form-field">
                <div class="form-title">
                  <ETit type="form">이름<span class="required"><span class="offscreen">필수입력</span></span></ETit>
                </div>
                <div class="form-cont">
                  <div class="form-input-group">
                    <EInputBox title="이름 입력" placeholder="이름 입력"/>
                  </div>
                </div>
              </div>
            </li>
            <li class="item-form">
              <div class="form-field">
                <div class="form-title">
                  <ETit type="form">휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span></ETit>
                </div>
                <div class="form-cont">
                  <div class="form-input-group valid-check">
                    <EInputBox type="number" title="휴대폰번호 입력" placeholder="휴대폰번호 입력"/>
                    <p class="input-guide">공백 없이 숫자만 입력해주세요.</p>
                    <p class="valid-desc">휴대폰번호를 입력해주세요.</p>
                  </div>
                </div>
              </div>
            </li>
            <li class="item-form">
              <div class="form-field">
                <div class="form-title">
                  <FlexGroup align="end">
                    <div class="flex-left">
                      <ETit type="form">주소<span class="required"><span class="offscreen">필수입력</span></span></ETit>
                    </div>
                    <div class="flex-right">
                      <ETBtn tag="button" size="xs" @click="openCurrentAddress">
                        <EIco name="current-location" color="gray" size="sm"></EIco>
                        <span class="text">현재 위치를 주소에 추가</span>
                      </ETBtn>
                    </div>
                  </FlexGroup>
                </div>
                <div class="form-cont">
                  <div class="form-input-group">
                    <EInputBox type="search" enterkeyhint="search" title="주소 검색" placeholder="주소검색" readonly>
                      <button type="button" class="btn-input-search" @click="openSearchAddress">
                        <span class="offscreen">검색</span>
                      </button>
                    </EInputBox>
                    <EInputBox title="상세주소 입력" placeholder="상세주소 입력" />
                  </div>
                  <span class="ui-chk">
                    <input type="checkbox" id="demoChk01">
                    <label for="demoChk01"><span class="text-md">기본주소지로 설정</span></label>
                  </span>
                </div>
              </div>
            </li>
          </RowListWrap>
          <BtnWrap size="xl">
            <EBtn color="line-light-gray" size="lg" @click="closeDialog">
              <span class="text">취소</span>
            </EBtn>
            <EBtn color="green" size="lg" @click="closeDialog" disabled>
              <span class="text">저장</span>
            </EBtn>
          </BtnWrap>
        </ContWrap>
      </div>
    </template>
  </ContDialog>
  <!-- pop : 주소검색 -->
  <PopMySearchAddress v-model:sta="popSearchAddress" />
  <!-- // pop : 주소검색 -->

  <!-- pop : 현재 위치 주소 추가 -->
  <PopMyCurrentAddress v-model:sta="popCurrentAddress" />
  <!-- // pop : 현재 위치 주소 추가 -->
</template>

<script setup lang="ts">
interface DialogState {
  open: boolean;
}

const props = defineProps<{
  sta: DialogState;
}>();

const openDialog = () => {
  isOpen.value = true;
};

const emit = defineEmits(['update:sta']);

const isOpen = computed({
  get: () => props.sta.open,
  set: (value) => emit('update:sta', { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};

// 주소검색 팝업
const popSearchAddress = ref({ open: false });
const openSearchAddress = () => popSearchAddress.value.open = true;

// 현재 위치 주소 추가
const popCurrentAddress = ref({ open: false });
const openCurrentAddress = () => popCurrentAddress.value.open = true;
</script>
