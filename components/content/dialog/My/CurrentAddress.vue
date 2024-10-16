<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full" not-footer-gradient>
    <template #title>
      <div class="dialog-title">주소록 추가</div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap type="white" in-bottom="sm">
          <div class="map-wrap">
            <div class="map-area">
              <!-- 지도 임시 영역 -->
              <div style="height: 100%; background: rgba(255, 0, 0, .1);">
                지도 API 영역 확인을 위한 임시 div입니다.

                <div class="map-content">
                  <!-- 주소지 기준 이동 버튼 -->
                  <button type="button" class="btn-pin-location" style="top: 200px; left: 100px;">
                    <EIco name="current-marker" />
                    <span class="offscreen">주소지 마커</span>
                  </button>
                  <!-- // 주소지 기준 이동 버튼 -->

                  <!-- 현 위치 이동 버튼 -->
                  <button type="button" class="btn-access-location">
                    <EIco name="access-location" color="gray" />
                    <span class="offscreen">현 위치로 이동</span>
                  </button>
                  <!-- // 현 위치 이동 버튼 -->
                </div>
              </div>
            </div>
            <!-- // 지도 임시 영역 -->
          </div>
        </ContWrap>
      </div>
    </template>
    <template #footer>
      <RowListWrap gap="line">
        <!-- DESC :: 주소 단일 노출 시 li.item-md 구조 삭제 -->
        <li class="item-md">
          <FlexGroup class="location-info">
            <div class="flex-left">
              <div class="address-info-group">
                <span class="number">도로명</span>
                <span class="address">서울 강동구 상암로 **길 ***호</span>
              </div>
            </div>
            <div class="flex-right">
              <EBtn color="light-green" size="xs" @click="closeDialog">
                <EIco name="check" color="green" size="xs" />
                <span class="text">선택</span>
              </EBtn>
            </div>
          </FlexGroup>
        </li>
        <li class="item-md">
          <FlexGroup class="location-info">
            <div class="flex-left">
              <div class="address-info-group">
                <span class="number">지번</span>
                <span class="address">서울 강동구 암사동 265-5번지 세븐빌딩 **동 ***호</span>
              </div>
            </div>
            <div class="flex-right">
              <EBtn color="light-green" size="xs" @click="closeDialog">
                <EIco name="check" color="green" size="xs" />
                <span class="text">선택</span>
              </EBtn>
            </div>
          </FlexGroup>
        </li>
      </RowListWrap>
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

