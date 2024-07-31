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
                  <div class="ctitle-xs">주소별칭<span class="required"><span class="offscreen">필수입력</span></span></div>
                </div>
                <div class="form-cont">
                  <div class="form-input-group">
                    <EInputBox title="주소별칭 입력" placeholder="주소 별칭을 입력해 주세요. (ex. 우리집)" />
                  </div>
                </div>
              </div>
            </li>
            <li class="item-form">
              <div class="form-field">
                <div class="form-title">
                  <div class="ctitle-xs">이름<span class="required"><span class="offscreen">필수입력</span></span></div>
                </div>
                <div class="form-cont">
                  <div class="form-input-group">
                    <EInputBox title="이름 입력" placeholder="이름을 입력해 주세요."/>
                  </div>
                </div>
              </div>
            </li>
            <li class="item-form">
              <div class="form-field">
                <div class="form-title">
                  <div class="ctitle-xs">휴대폰 번호<span class="required"><span class="offscreen">필수입력</span></span></div>
                </div>
                <div class="form-cont">
                  <div class="form-input-group valid-check fail">
                    <EInputBox type="number" title="휴대폰 번호 입력" placeholder="휴대폰 번호를 입력해 주세요."/>
                    <p class="valid-desc">휴대폰 번호를 입력해주세요.</p>
                  </div>
                </div>
              </div>
            </li>
            <li class="item-form">
              <div class="form-field">
                <div class="form-title">
                  <FlexGroup align="end">
                    <div class="flex-left">
                      <div class="ctitle-xs">주소<span class="required"><span class="offscreen">필수입력</span></span></div>
                    </div>
                    <div class="flex-right">
                      <ETBtn tag="button" size="xs">
                        <EIco name="location" size="sm"></EIco>
                        <span class="text">현재 위치 주소에 추가</span>
                      </ETBtn>
                    </div>
                  </FlexGroup>
                </div>
                <div class="form-cont">
                  <div class="form-input-group">
                    <EInputBox type="search" enterkeyhint="search" title="주소 검색" placeholder="주소를 검색해주세요." readonly>
                      <button type="button" class="btn-input-search"><span class="offscreen">검색</span></button>
                    </EInputBox>
                    <EInputBox title="상세주소 입력" placeholder="상세주소 입력" />
                  </div>
                  <RowListWrap gap="sm">
                    <div class="ui-chk">
                      <input type="checkbox" id="demoChk01">
                      <label for="demoChk01"><span class="text-md">기본주소지로 설정</span></label>
                    </div>
                  </RowListWrap>
                </div>
              </div>
            </li>
          </RowListWrap>
          <BtnWrap size="lg">
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
</script>
