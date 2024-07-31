<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">전체보기</div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap>
          <RowListWrap gap="lg">
            <li class="item">
              <div style="height: 90px; background: rgba(255, 0, 0, .1);">컨텐츠 영역 확인을 위한 임시 div 입니다.</div>
            </li>
            <li class="item">
              <div style="height: 90px; background: rgba(255, 0, 0, .1);">컨텐츠 영역 확인을 위한 임시 div 입니다.</div>
            </li>
            <li class="item">
              <div style="height: 90px; background: rgba(255, 0, 0, .1);">컨텐츠 영역 확인을 위한 임시 div 입니다.</div>
            </li>
            <li class="item">
              <div style="height: 90px; background: rgba(255, 0, 0, .1);">컨텐츠 영역 확인을 위한 임시 div 입니다.</div>
            </li>
            <li class="item">
              <div style="height: 90px; background: rgba(255, 0, 0, .1);">컨텐츠 영역 확인을 위한 임시 div 입니다.</div>
            </li>
            <li class="item">
              <div style="height: 90px; background: rgba(255, 0, 0, .1);">컨텐츠 영역 확인을 위한 임시 div 입니다.</div>
            </li>
            <li class="item">
              <div style="height: 90px; background: rgba(255, 0, 0, .1);">컨텐츠 영역 확인을 위한 임시 div 입니다.</div>
            </li>
            <li class="item">
              <div style="height: 90px; background: rgba(255, 0, 0, .1);">컨텐츠 영역 확인을 위한 임시 div 입니다.</div>
            </li>
          </RowListWrap>
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
