<template>
  <ContDialog v-model="isOpen">
    <template #title>
      <div class="dialog-title">
        공지사항 타이틀 노출
      </div>
    </template>
    <template #body>
      <ContWrap type="white" in-top="zero" in-bottom="zero">
        <div class="scroll-box">
          <div class="editor-wrap">
            <!-- 개발 시 삭제 영역 -->
            <div style="height: 500px; background: rgba(255, 0, 0, .2);">
              공지사항 내용은 에디터로 입력됩니다.
              <br>
              에디터영역 확인을 위한 임시 div입니다.
              <br>
              개발시 해당 div 삭제 후 작업해 주세요.
            </div>
            <!-- // 개발 시 삭제 영역 -->
          </div>
        </div>
      </ContWrap>
    </template>
    <template #footer>
      <FlexGroup>
        <div class="flex-left">
          <!-- DESC :: 설정안함 선택 시 [ui-chk] 구조 삭제 -->
          <div class="ui-chk">
            <input id="closeChk01" type="checkbox" @click="closeDialog">
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
}>();

const emit = defineEmits(["update:sta"]);

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit("update:sta", { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};
</script>
