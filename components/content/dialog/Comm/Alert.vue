<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-alert">
    <template v-if="title" #title>
      <div class="dialog-title">{{ title }}</div>
    </template>
    <template #body>
      <slot></slot>
      <div class="dialog-inner">
        <ContWrap type="white">
          <p class="alert-desc" v-html="msg"></p>
        </ContWrap>
      </div>
    </template>
    <template #footer>
      <div class="dialog-btn-wrap">
        <EBtn v-if="addCancel" color="light-gray" size="md" @click="onCancel">
          <span class="text">취소</span>
        </EBtn>
        <slot name="footer">
          <EBtn color="green" size="md" @click="onConfirm">
            <span class="text">확인</span>
          </EBtn>
        </slot>
      </div>
    </template>
  </ContDialog>
</template>

<script setup lang="ts">
interface DialogState {
  open: boolean;
}

const props = defineProps<{
  sta?: DialogState;
  title?: string;
  msg: string;
  addCancel?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:sta", value: DialogState): void;
  (e: "cancel"): void;
  (e: "confirm"): void;
}>();

const isOpen = computed({
  get: () => props.sta?.open ?? false,
  set: (value: boolean) => emit("update:sta", { open: value })
});

const onCancel = () => {
  emit("cancel");
  isOpen.value = false;
};

const onConfirm = () => {
  emit("confirm");
  isOpen.value = false;
};
</script>