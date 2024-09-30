<template>
  <ContDialog v-model="isOpen" not-header>
    <template #body>
      <div class="dialog-inner">
        <ContWrap v-if="isPoint" type="white" in-bottom="zero">
          <ContBox>
            <div class="thumb-win-result">
              <div class="thumb-win-result-box bg-point">
                <div class="thumb">
                  <img src="/assets/images/event/bg_roulette_result_point.svg" alt="당첨 결과 포인트 이미지" />
                </div>
              </div>
              <p class="stext">
                축하합니다!<br />세븐앱 L.POINT에 당첨되셨습니다.
              </p>
            </div>
          </ContBox>
          <ContBox size="sm">
            <ColorBox color="light-gray" class="ta-center">
              <ETit type="xlCont" class="fc-spot fw-bold">
                1,000P
              </ETit>
            </ColorBox>
          </ContBox>
        </ContWrap>
        <ContWrap v-if="isGift" type="white" in-bottom="zero">
          <ContBox>
            <div class="thumb-win-result">
              <div class="thumb-win-result-box bg-gift">
                <div class="thumb">
                  <img src="/assets/images/event/bg_roulette_result_gift.svg" alt="당첨 결과 경품 이미지" />
                </div>
              </div>
              <p class="stext">
                축하합니다!<br />이벤트 경품에 당첨되셨습니다.
              </p>
            </div>
          </ContBox>
          <ContBox size="sm">
            <ColorBox color="light-gray" class="ta-center">
              <ETit type="xlCont" class="fc-spot fw-bold">
                10%할인 쿠폰
              </ETit>
            </ColorBox>
          </ContBox>
        </ContWrap>
        <ContWrap v-if="isBoom" type="white" in-bottom="zero">
          <ContBox size="sm">
            <div class="thumb-win-result">
              <div class="thumb-win-result-box bg-boom">
                <div class="thumb">
                  <img src="/assets/images/event/bg_roulette_result_boom.svg" alt="당첨 결과 꽝 이미지" />
                </div>
              </div>
              <p class="stext">
                아쉽지만 다음 기회를 이용해주세요.
              </p>
            </div>
          </ContBox>
          <ContBox size="sm">
            <ColorBox color="light-gray" class="ta-center">
              <ETit type="xlCont" class="fc-spot fw-bold">
                꽝
              </ETit>
            </ColorBox>
          </ContBox>
        </ContWrap>
      </div>
    </template>
    <template #footer>
      <div class="dialog-btn-wrap">
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
  isPoint?: boolean;
  isGift?: boolean;
  isBoom?: boolean;
}>();

const emit = defineEmits(['update:sta']);

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit('update:sta', { ...props.sta, open: value }),
});

function closeDialog() {
  isOpen.value = false;
}
</script>
