<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">구독할인 선택</div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <RowListWrap gap="sm">
          <li class="item"></li>
          <li class="item"></li>
        </RowListWrap>
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

// 구독 선택 팝업
const popSelectSubscribe = ref({ open: false });
const openSelectSubscribe = () => popSelectSubscribe.value.open = true;
</script>
