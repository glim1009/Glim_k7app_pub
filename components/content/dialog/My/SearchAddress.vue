<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">주소 검색</div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap>
          <div class="map-area">
            <div style="height: 100%; background: rgba(255, 0, 0, .1);">
              지도 API 영역 확인을 위한 임시 div입니다.
              <br>개발시 해당 div 삭제 후 작업해 주세요.
              <div class="pin-location-state" style="top: 200px; left: 100px;">
                <div class="info-area">
                  <div class="location">서울시 중구 청계천로 100 시그니쳐타워</div>
                </div>
                <EIco name="current-marker"><span class="offscreen">주소지 마커</span></EIco>
              </div>
            </div>
            <button type="button" class="btn-access-location">
              <EIco name="access-location" color="green"></EIco>
              <span class="offscreen">현재 위치로 마커 자동 이동</span>
            </button>
          </div>
          <div style="height: 120px; background: #333; color: white; font-weight: 600; padding: 20px;">TBD</div>
        </ContWrap>
      </div>
    </template>
    <template #footer>
      <div class="dialog-btn-wrap">
        <EBtn color="green" size="lg" @click="closeDialog"><span class="text">현재 위치를 주소록에 추가</span></EBtn>
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

<style lang="scss" scoped>
  @import url('assets/css/pages/my/my.scss');
</style>
