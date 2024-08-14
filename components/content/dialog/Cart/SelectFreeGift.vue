<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-bottom">
    <template #title>
      <div class="dialog-title">증정품선택</div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap type="white">
        </ContWrap>
      </div>
    </template>
    <template #footer>
      <div class="dialog-btn-wrap">
        <EBtn color="green" size="lg" @click="closeDialog"><span class="text">1개중 1개 선택</span></EBtn>
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
