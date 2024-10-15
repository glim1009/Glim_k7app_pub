<template>
  <ContDialog v-model="isOpen">
    <template #title>
      <div class="dialog-title">상품 구매 시 유의사항</div>
    </template>
    <template #body>
      <ContWrap type="white" in-top="md" in-bottom="zero">
        <ContBox size="lg">
          <InfoGuideWrap
              in-top="zero"
              type="no-data"
              name="alert"
              desc="유의사항을 확인했으며<br>상품을 주문하시겠습니까?"
          />
        </ContBox>
        <ContBox size="lg">
          <ColorBox color="light-gray" size="sm">
            <RowListWrap gap="sm">
              <li class="item">
                <span class="dot-text-sm">상품의 유통기한 경과 시 식품위생법 상 상품을 수령할 수 없습니다.</span>
              </li>
              <li class="item">
                <span class="dot-text-sm">수령하지 않은 상품은 자동 폐기되며, 환불되지 않습니다.</span>
              </li>
            </RowListWrap>
          </ColorBox>
        </ContBox>
      </ContWrap>
    </template>
    <template #footer>
      <div class="dialog-btn-wrap">
        <EBtn color="line-light-gray" size="lg" @click="closeDialog">
          <span class="text">취소</span>
        </EBtn>
        <EBtn tag="a" color="green" size="lg" to="javascript:">
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

const emit = defineEmits(['update:sta']);

const isOpen = computed({
  get: () => props.sta.open,
  set: (value) => emit('update:sta', { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};
</script>
