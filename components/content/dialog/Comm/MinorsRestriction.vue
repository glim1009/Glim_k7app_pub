<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">만 19세 미만 접근 제한</div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap type="white" in-top="zero">
          <ContBox size="lg">
            <InfoGuideWrap
              type="info-guide"
              name="19"
              desc="만 19세 미만의 청소년 접근이<br>제한된 정보입니다."
              sub-desc="본인인증을 완료한 후 이용해주세요."
            />
          </ContBox>
          <ContBox size="lg">
            <ColorBox color="light-gray" size="md">
              <RowListWrap>
                <li class="dot-text-sm">
                  본 정보는 청소년 유해매체물로써 정보통신망 이용촉진 및
                  정보보호 등에 관한 법률 및 청소년보호법의 규정에 의하여
                  만 19세 미만의 청소년은 이용할 수 없습니다.
                </li>
              </RowListWrap>
            </ColorBox>
          </ContBox>
          <BtnWrap size="sm">
            <EBtn tag="a" color="green" size="md" to="javascript:">
              <span class="text">본인인증</span>
            </EBtn>
          </BtnWrap>
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

