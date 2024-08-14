<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">픽업정보변경</div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap>
          <ContBox>
            <button type="button" class="btn-store">
              <EBadge color="green" size="md" badge-text="픽업매장" />
              <span class="store">세븐일레븐 강남점</span>
              <EIco name="arw-right" color="gray" size="sm" />
            </button>
          </ContBox>
          <ContBox size="sm">
            <RowListWrap>
              <li class="item">
                <ColorBox color="white">캘린더</ColorBox>
              </li>
              <li class="item">
                <ColorBox color="white">
                  <div class="form-field">
                    <div class="form-title">
                      <CtitleWrap size="zero">
                        <ETit text="수령시간선택" type="form" />
                      </CtitleWrap>
                    </div>
                    <div class="form-cont">
                      <GridListWrap col="3">
                        <li class="item-grid">
                          <span class="ui-rdo type-button">
                            <input type="radio" id="demoRdo02" name="demoRdo01" checked>
                            <label for="demoRdo02"><span class="text-md">radio(checked)</span></label>
                          </span>
                        </li>
                        <li class="item-grid">
                          <span class="ui-rdo type-button">
                            <input type="radio" id="demoRdo02" name="demoRdo01" checked>
                            <label for="demoRdo02"><span class="text-md">radio(checked)</span></label>
                          </span>
                        </li>
                        <li class="item-grid">
                          <span class="ui-rdo type-button">
                            <input type="radio" id="demoRdo02" name="demoRdo01" checked>
                            <label for="demoRdo02"><span class="text-md">radio(checked)</span></label>
                          </span>
                        </li>
                        <li class="item-grid">
                          <span class="ui-rdo type-button">
                            <input type="radio" id="demoRdo02" name="demoRdo01" checked>
                            <label for="demoRdo02"><span class="text-md">radio(checked)</span></label>
                          </span>
                        </li>
                        <li class="item-grid">
                          <span class="ui-rdo type-button">
                            <input type="radio" id="demoRdo02" name="demoRdo01" checked>
                            <label for="demoRdo02"><span class="text-md">radio(checked)</span></label>
                          </span>
                        </li>
                        <li class="item-grid">
                          <span class="ui-rdo type-button">
                            <input type="radio" id="demoRdo02" name="demoRdo01" checked>
                            <label for="demoRdo02"><span class="text-md">radio(checked)</span></label>
                          </span>
                        </li>
                        <li class="item-grid">
                          <span class="ui-rdo type-button">
                            <input type="radio" id="demoRdo02" name="demoRdo01" checked>
                            <label for="demoRdo02"><span class="text-md">radio(checked)</span></label>
                          </span>
                        </li>
                        <li class="item-grid">
                          <span class="ui-rdo type-button">
                            <input type="radio" id="demoRdo02" name="demoRdo01" checked>
                            <label for="demoRdo02"><span class="text-md">radio(checked)</span></label>
                          </span>
                        </li>
                        <li class="item-grid">
                          <span class="ui-rdo type-button">
                            <input type="radio" id="demoRdo02" name="demoRdo01" checked>
                            <label for="demoRdo02"><span class="text-md">radio(checked)</span></label>
                          </span>
                        </li>
                      </GridListWrap>
                      <p class="dot-text-sm-green">꼭 확인해주세요! 결제 후에는 픽업 시간 변경이 어려워요!</p>
                    </div>
                  </div>
                </ColorBox>
              </li>
            </RowListWrap>
          </ContBox>
        </ContWrap>
      </div>
    </template>
    <template #footer>
      <div class="dialog-btn-wrap">
        <EBtn color="line-light-gray" size="lg" @click="closeDialog"><span class="text">취소</span></EBtn>
        <EBtn color="green" size="lg" @click="closeDialog"><span class="text">변경</span></EBtn>
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
