<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title" v-html="popTitle" />
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap type="white">
          <div class="editor-wrap">
            <!-- 개발 시 삭제 영역 -->
            <div style="height: 100vh; background: rgba(255, 0, 0, .2);">
              약관 내용은 에디터로 입력됩니다.
              <br>
              에디터영역 확인을 위한 임시 div입니다.
              <br>
              개발시 해당 div 삭제 후 작업해 주세요.
            </div>
            <!-- // 개발 시 삭제 영역 -->
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

const props = withDefaults(defineProps<{
  sta: DialogState;
  popTitle?: string;
}>(), {
  popTitle: "BO 등록 약관 팝업 타이틀",
});

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
