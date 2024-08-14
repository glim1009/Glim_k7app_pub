<template>
  <ContDialog v-model="isOpen">
    <template #title>
      <div class="dialog-title">L.POINT 사용</div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <RowListWrap gap="sm">
          <li class="item-form">
            <div class="form-field">
              <div class="form-title">
                <ETit type="form">
                  카드번호<span class="required"><span class="offscreen">필수입력</span></span>
                </ETit>
              </div>
              <div class="form-cont">
                <div class="form-input-group">
                  <EInputBox title="카드번호 입력" type="text" placeholder="카드번호 입력" />
                </div>
              </div>
            </div>
          </li>
          <li class="item-form">
            <div class="form-field">
              <div class="form-title">
                <ETit type="form">
                  사용 포인트<span class="required"><span class="offscreen">필수입력</span></span>
                </ETit>
              </div>
              <div class="form-cont">
                <div class="form-input-group">
                  <EInputBox title="사용 포인트 입력" type="text" placeholder="사용 포인트 입력" />
                </div>
              </div>
            </div>
          </li>
          <li class="item-form">
            <div class="form-field">
              <div class="form-title">
                <ETit type="form">
                  비밀번호<span class="required"><span class="offscreen">필수입력</span></span>
                </ETit>
              </div>
              <div class="form-cont">
                <div class="form-input-group">
                  <EInputBox title="비밀번호 입력" type="text" placeholder="비밀번호 입력" />
                </div>
              </div>
            </div>
          </li>
        </RowListWrap>
      </div>
    </template>
    <template #footer>
      <div class="dialog-btn-wrap">
        <EBtn color="line-light-gray" size="lg" @click="closeDialog"><span class="text">취소</span></EBtn>
        <EBtn color="green" size="lg" @click="closeDialog"><span class="text">적용</span></EBtn>
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

// l.point 사용 팝업
const popPayLPoint = ref({ open: false });
const openPayLPoint = () => popPayLPoint.value.open = true;
</script>
