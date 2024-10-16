<template>
  <ContDialog v-model="isOpen" not-dim-click>
    <template #title>
      <div class="dialog-title">카드별명 변경</div>
    </template>
    <template #body>
      <ContWrap type="white" in-top="md" in-bottom="sm">
        <ContBox>
          <div class="form-field">
            <div class="form-title">
              <CtitleWrap size="zero">
                <ETit type="form" text="카드별명 (12자리)" />
              </CtitleWrap>
            </div>
            <div class="form-cont">
              <div class="form-input-group">
                <EInputBox title="카드별명 입력" placeholder="카드별명 입력" :max-length="12" />
              </div>
            </div>
          </div>
        </ContBox>
      </ContWrap>
    </template>
    <template #footer>
      <div class="dialog-btn-wrap">
        <EBtn color="green" size="md" @click="closeDialog">
          <span class="text">확인</span>
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

const isOpen = computed({
  get: () => props.sta.open,
  set: (value) => emit("update:sta", { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};
</script>
