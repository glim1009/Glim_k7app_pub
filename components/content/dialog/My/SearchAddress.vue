<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">주소록 추가</div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap>
          <div class="map-wrap">
            <div class="map-area">
              <!-- 개발 시 삭제 영역 -->
              <div style="height: 100%; background: rgba(255, 0, 0, .1);">
                지도 API 영역 확인을 위한 임시 div입니다.
                <br>개발시 해당 div 삭제 후 작업해 주세요.
              </div>
              <!-- // 개발 시 삭제 영역 -->
            </div>
          </div>
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

const emit = defineEmits(["update:sta"]);

const isOpen = computed({
  get: () => props.sta.open,
  set: (value) => emit("update:sta", { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};
</script>
