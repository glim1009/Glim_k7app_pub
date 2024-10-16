<template>
  <ContDialog v-model="isOpen">
    <template #title>
      <div class="dialog-title">영상정보처리기기 운영/관리 방침</div>
    </template>
    <template #body>
      <ContWrap type="white" in-top="zero">
        <ContBox size="sm">
          <div class="ui-select">
            <select title="영상정보처리기기 운영/관리 방침 버전 선택">
              <option selected>YYYY.MM.DD</option>
              <option>2024.08.01</option>
              <option>2024.07.01</option>
              <option>2024.06.01</option>
            </select>
          </div>
        </ContBox>
        <ContBox size="sm">
          <div class="editor-wrap">
            <!-- 개발 시 삭제 영역 -->
            <div style="height: 300px; background: rgba(255, 0, 0, .2);">
              영상정보처리기기 운영/관리 방침 내용은 에디터로 입력됩니다.
              <br>
              에디터영역 확인을 위한 임시 div입니다.<br>
              개발시 해당 div 삭제 후 작업해 주세요.
            </div>
            <!-- // 개발 시 삭제 영역 -->
          </div>
        </ContBox>
      </ContWrap>
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
  set: (value) => emit("update:sta", { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};
</script>
