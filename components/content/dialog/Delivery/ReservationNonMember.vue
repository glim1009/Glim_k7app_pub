<template>
  <ContDialog v-model="isOpen">
    <template #title>
      <div class="dialog-title">비회원 택배예약</div>
    </template>
    <template #body>
      <ContWrap type="white" in-top="zero">
        <GridListWrap col="2" class="size-box">
          <li class="item-grid">
            <ColorBox color="light-gray" size="lg" class="bg-normal-delivery">
              <CtitleWrap size="zero">
                <ETit text="일반택배" type="lgCont" />
                <div class="stext-gray70">전국 어디서든<br>안전하게</div>
              </CtitleWrap>
            </ColorBox>
            <NuxtLink class="btn-link" to="/delivery/reservation/normal"><span class="offscreen">일반택배 예약 바로가기</span></NuxtLink>
          </li>
          <li class="item-grid">
            <ColorBox color="light-gray" size="lg" class="bg-kind-delivery">
              <CtitleWrap size="zero">
                <ETit text="착한택배" type="lgCont" />
                <div class="stext-gray70">편의점에서 편의점으로<br>알뜰하게</div>
              </CtitleWrap>
            </ColorBox>
            <NuxtLink class="btn-link" to="/delivery/reservation/kind"><span class="offscreen">착한택배 예약 바로가기</span></NuxtLink>
          </li>
        </GridListWrap>
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

const emit = defineEmits(['update:sta']);

const isOpen = computed({
  get: () => props.sta.open,
  set: (value) => emit('update:sta', { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};
</script>
