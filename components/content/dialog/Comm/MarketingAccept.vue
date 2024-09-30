<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-bottom" not-dim-click not-header>
    <template #body>
      <div class="dialog-inner">
        <ContWrap type="white" in-top="lg">
          <ContBox>
            <CtitleWrap>
              <ETit type="lgCont">
                세븐일레븐의 유용한 정보와 혜택
                <br>놓치지 말고 받아보세요!
              </ETit>
            </CtitleWrap>
            <ColorBox color="light-gray" size="lg">
              <CtitleWrap>
                <ETit type="cont" text="PUSH 알림을 받으시면" />
              </CtitleWrap>
              <RowListWrap gap="md">
                <li class="item">
                  <FlexGroup>
                    <div class="flex-left">
                      <EIco name="marketing-alarm" />
                    </div>
                    <div class="flex-start-right">
                      <div class="stext-lg-black fw-sb">추천 상품 및 신상품 등 정보 알림</div>
                    </div>
                  </FlexGroup>
                </li>
                <li class="item">
                  <FlexGroup>
                    <div class="flex-left">
                      <EIco name="marketing-shopping" />
                    </div>
                    <div class="flex-start-right">
                      <div class="stext-lg-black fw-sb">쇼핑 혜택 및 할인정보 알림</div>
                    </div>
                  </FlexGroup>
                </li>
                <li class="item">
                  <FlexGroup>
                    <div class="flex-left">
                      <EIco name="marketing-event" />
                    </div>
                    <div class="flex-start-right">
                      <div class="stext-lg-black fw-sb">이벤트 및 기획 행사 정보 알림</div>
                    </div>
                  </FlexGroup>
                </li>
              </RowListWrap>
            </ColorBox>
          </ContBox>
          <ContBox>
            <span class="ui-chk">
              <input type="checkbox" id="acceptChk">
              <label for="acceptChk"><span class="text-md">야간 (저녁 9시~익일 오전 8시)까지의 알림도허용할게요.</span></label>
            </span>
            <RowListWrap gap="xs" size="sm">
              <li class="dot-text-sm">마이페이지 > 앱설정에서 변경하실 수 있습니다.</li>
              <li class="dot-text-sm">앱 푸시 알림이 오지 않는 경우 기기의 설정을 확인해 주세요.</li>
            </RowListWrap>
          </ContBox>
        </contwrap>
      </div>
    </template>
    <template #footer>
      <BtnWrap type="auto">
        <EBtn color="line-light-gray" size="lg" @click="closeDialog">
          <span class="text">나중에 할게요</span>
        </EBtn>
        <EBtn color="green" size="lg" class="btn-full" @click="closeDialog">
          <span class="text">알림받기 </span>
        </EBtn>
      </BtnWrap>
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
  set: value => emit('update:sta', { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};
</script>
