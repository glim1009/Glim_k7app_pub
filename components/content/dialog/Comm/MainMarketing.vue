<template>
  <ContDialog v-model="isOpen" :content-class="isBottom ? 'ui-dialog-bottom' : 'ui-dialog'" :not-footer-gradient="isBottom" not-header>
    <template #body>
      <ContWrap type="white" in-top="zero" in-bottom="zero" class="side-zero">
        <!-- 개발 시 삭제 영역 -->
        <div style="height: 300px; background: rgba(255, 0, 0, .2);">
          BO 등록 이미지 영역 확인을 위한 임시 div입니다.
          <br>
          개발시 해당 div 삭제 후 작업해 주세요.
        </div>
        <!-- // 개발 시 삭제 영역 -->
      </ContWrap>
    </template>
    <template #footer>
      <FlexGroup>
        <div class="flex-left">
          <!-- DESC :: 설정안함 선택 시 [ui-chk] 구조 삭제 -->
          <div class="ui-chk">
            <input type="checkbox" id="closeChk01" />
            <label for="closeChk01">
              <span class="text-md fw-md fc-gray70">오늘 하루 보지 않기</span>
            </label>
          </div>
        </div>
        <div class="flex-right">
          <ETBtn size="sm" @click="closeDialog">
            <span class="text">닫기</span>
            <EIco name="close" color="gray" size="xs" />
          </ETBtn>
        </div>
      </FlexGroup>
    </template>
  </ContDialog>
</template>
<script setup lang="ts">
interface DialogState {
  open: boolean;
}

const props = defineProps<{
  sta: DialogState;
  isBottom?: boolean;
}>();

const emit = defineEmits(['update:sta']);

const isOpen = computed({
  get: () => props.sta.open,
  set: (value) => emit('update:sta', { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};
</script>
