<template>
  <ContDialog v-model="isOpen" not-dim-click>
    <template #title>
      <div class="dialog-title">
        댓글 수정
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap type="white" in-top="zero" in-bottom="zero">
          <ContBox>
            <ETextareaBox v-model="parentValue" :max-length="200" placeholder="내용을 입력해주세요." @input="handlerValue" />
          </ContBox>
        </ContWrap>
      </div>
    </template>
    <template #footer>
      <div class="dialog-btn-wrap">
        <EBtn color="line-light-gray" @click="closeDialog">
          <span class="text">취소</span>
        </EBtn>
        <EBtn color="green" @click="closeDialog">
          <span class="text">확인</span>
        </EBtn>
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

const emit = defineEmits(["update:sta"]);

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit("update:sta", { ...props.sta, open: value }),
});

function closeDialog() {
  isOpen.value = false;
}

const parentValue = ref<string>('');
const textareaEmits = ref<string | null>('');

// 입력값이 변경될 때 발생하는 이벤트
function handlerValue(value: any) {
  textareaEmits.value = value;
}
</script>
