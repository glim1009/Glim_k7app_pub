<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">개인정보 수집 및 이용약관</div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap type="white">
          <ContBox>
            <p class="stext-black">(필수) 개인정보 수집·이용 동의㈜코리아세븐은 「개인정보보호법」제15조(개인정보의 수집·이용)에 따라 세븐일레븐 택배 서비스 를 위해 개인정보를 수집·이용하고 있습니다. 수집하는 개인정보의 수집 및 이용목적, 개인정보의 항목, 개인정보의 보유 및 이용 기간, 동의를 거부할 권리가 있다는 사실 및 동의 거부에 따른 불이익에 관한 내용을 안내해 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.</p>
            <br>
            <br>
            <p class="stext-black">1. 개인정보의 수집 및 이용목적 : 택배 서비스 신청 물품에 대한 집하 및 배송 업무, 고객상담</p>
            <br>
            <p class="stext-black">2. 개인정보의 항목:
              <br>송하인 정보 : 성명, (휴대)전화번호, 주소
              <br>수하인 정보 : 성명, (휴대)전화번호, 주소
            </p>
            <br>
            <p class="stext-black">3. 개인정보의 보유 및 이용 기간 : 수집일로부터 1년</p>
            <br>
            <p class="stext-black">4. 개인정보 수집 및 이용 동의를 거부할 권리가 있습니다. 수집하는 최소한의 개인정보에 대한 수집 및 이용 동의를 거부하실 경우, 세븐일레븐 택배 서비스 이용이 어려울 수 있습니다.</p>
          </ContBox>
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

const emit = defineEmits(['update:sta']);

const isOpen = computed({
  get: () => props.sta.open,
  set: (value) => emit('update:sta', { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};
</script>
