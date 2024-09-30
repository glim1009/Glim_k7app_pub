<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-bottom">
    <template #title>
      <div class="dialog-title">구독안내</div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap type="white" in-top="zero" :class="{'has-prod-cta' : isCta}">
          <ContBox>
            <sContLineBox>
              <CtitleWrap size="zero">
                <ETit type="cont">일회성 구독 구매</ETit>
                <p class="stext-gray70">구매일로부터 31일간 사용가능</p>
              </CtitleWrap>
            </sContLineBox>
            <sContLineBox>
              <CtitleWrap size="zero">
                <ETit type="cont">정기 구독권 구매</ETit>
                <p class="stext-gray70">
                  정기 구독 결제일 당일 최초 1회 결제되며, 이후 다음 회차 효력
                  <br>발생일 전일에 최초 결제한 결제수단으로 자동결제 및 이용기간이 자동으로 갱신됩니다.
                  <br>(다음회차 효력 발생일 : 이용중인 구독권 유효기간 만료일 전일)
                </p>
              </CtitleWrap>
            </sContLineBox>
          </ContBox>
        </ContWrap>
      </div>
    </template>
    <template #footer>
      <div class="dialog-btn-wrap">
        <EBtn tag="a" color="line-light-gray" size="lg" to="javascript:">
          <span class="text">정기구독</span>
        </EBtn>
        <EBtn tag="a" color="green" size="lg" to="javascript:">
          <span class="text">1회성 구독</span>
        </EBtn>
      </div>
    </template>
  </ContDialog>
</template>

<script setup lang="ts">

interface DialogState {
  open: boolean;
  isCta?: boolean;
}

const props = defineProps<{
  sta: DialogState;
}>();

const emit = defineEmits(['update:sta']);

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit('update:sta', { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};

</script>
