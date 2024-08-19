<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        금액권 선택
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap>
          <RowListWrap gap="sm">
            <li class="item">
              <ColorBox color="white" size="lg">
                <div class="box-prod-header">
                  <FlexGroup>
                    <div class="flex-left">
                      <div class="ctitle-xs">
                        모바일 금액권
                      </div>
                    </div>
                    <div class="flex-right">
                      <EGoods size="sm" val="100,000" unit="원" class="fw-sb" />
                    </div>
                  </FlexGroup>
                </div>
                <div class="form-field">
                  <div class="form-title">
                    <FlexGroup>
                      <div class="flex-left">
                        <div class="ctitle-2xs">
                          사용 금액
                        </div>
                      </div>
                      <div class="flex-right">
                        <span class="stext">
                          사용가능 금액 <EGoods val="14,500" unit="원" />
                        </span>
                      </div>
                    </FlexGroup>
                  </div>
                  <div class="form-cont">
                    <div class="form-input-group">
                      <EInputBox title="사용 금액 입력" type="text" placeholder="사용 금액 입력">
                        <span class="unit">원</span>
                        <EBtn color="line-light-gray" size="xs">
                          <span class="text">모두사용</span>
                        </EBtn>
                      </EInputBox>
                    </div>
                    <TableWrap type="info" gap="sm" size="md" table-name="사용금액 만료정보">
                      <colgroup>
                        <col style="width: 55px;" />
                        <col style="width: auto;" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            만료일시
                          </th>
                          <td class="fc-gray70">
                            2024년 12월 31일 까지
                          </td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </div>
                </div>
              </ColorBox>
            </li>
            <li class="item">
              <ColorBox color="white" size="lg">
                <div class="box-prod-header">
                  <FlexGroup>
                    <div class="flex-left">
                      <div class="ctitle-xs">
                        모바일 금액권
                      </div>
                    </div>
                    <div class="flex-right">
                      <EGoods size="sm" val="100,000" unit="원" class="fw-sb" />
                    </div>
                  </FlexGroup>
                </div>
                <div class="form-field">
                  <div class="form-title">
                    <FlexGroup>
                      <div class="flex-left">
                        <div class="ctitle-2xs">
                          사용 금액
                        </div>
                      </div>
                      <div class="flex-right">
                        <span class="stext">
                          사용가능 금액 <EGoods val="14,500" unit="원" />
                        </span>
                      </div>
                    </FlexGroup>
                  </div>
                  <div class="form-cont">
                    <div class="form-input-group">
                      <EInputBox title="사용 금액 입력" type="text" placeholder="사용 금액 입력">
                        <span class="unit">원</span>
                        <EBtn color="line-light-gray" size="xs">
                          <span class="text">모두사용</span>
                        </EBtn>
                      </EInputBox>
                    </div>
                    <TableWrap type="info" gap="sm" size="md" table-name="사용금액 만료정보">
                      <colgroup>
                        <col style="width: 55px;" />
                        <col style="width: auto;" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            만료일시
                          </th>
                          <td class="fc-gray70">
                            2024년 12월 31일 까지
                          </td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </div>
                </div>
              </ColorBox>
            </li>
          </RowListWrap>
        </ContWrap>
      </div>
    </template>
    <template #footer>
      <div class="dialog-btn-wrap">
        <EBtn color="green" size="lg" @click="closeDialog">
          <span class="text">적용</span>
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

function openDialog() {
  isOpen.value = true;
}

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit('update:sta', { ...props.sta, open: value }),
});

function closeDialog() {
  isOpen.value = false;
}

// 금액권 선택 팝업
const popSelectGiftCard = ref({ open: false });
const openSelectGiftCard = () => popSelectGiftCard.value.open = true;
</script>
