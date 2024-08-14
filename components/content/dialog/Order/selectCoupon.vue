<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">쿠폰 선택</div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <div style="height: 100%; background: rgba(255, 0, 0, .1);">
          TBD 입니다.
          <br>개발시 해당 div 삭제 후 작업해 주세요.
        </div>
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

// 쿠폰 선택 팝업
const popSelectCoupon = ref({ open: false });
const openSelectCoupon = () => popSelectCoupon.value.open = true;
</script>
