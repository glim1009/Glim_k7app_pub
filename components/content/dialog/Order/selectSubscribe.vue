<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        구독할인 선택
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap>
          <RowListWrap gap="sm">
            <li class="item-select-box" :class="{ 'is-disabled': isDisabled }">
              <ColorBox color="white">
                <div class="box-info-select">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <ETit type="prod">
                        7월 도시락 구독 7월 도시락 구독 7월 도시락 구독 7월 도시락 구독 7월 도시락 구독 7월 도시락 구독
                      </ETit>
                      <div class="stext">
                        (30일간, 일 1회/총 30회)
                      </div>
                      <div class="stock">
                        가능 <EGoods size="sm" val="12" unit="회" />
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                  <span class="ui-rdo">
                    <input id="SelectBoxRdo01" ref="radioStatusRef" v-model="selectedOption" type="radio" name="SelectBoxRdo01" />
                    <label for="SelectBoxRdo01"><span class="offscreen">구독 선택</span></label>
                  </span>
                  <ColorBox color="light-gray" size="sm">
                    <TableWrap type="info" gap="sm" size="md" table-name="픽업정보">
                      <colgroup>
                        <col style="width: 55px;" />
                        <col style="width: auto;" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            사용기간
                          </th>
                          <td class="fc-gray70">
                            2024년 06월 29일 까지
                          </td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </ColorBox>
                </div>
              </ColorBox>
            </li>
            <li class="item-select-box" :class="{ 'is-disabled': isDisabled }">
              <ColorBox color="white">
                <div class="box-info-select">
                  <!-- thumb-prod-flex -->
                  <div class="thumb-prod-flex">
                    <EThumbProdBox size="md">
                      <template #thumb>
                        <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
                      </template>
                    </EThumbProdBox>
                    <div class="info-box">
                      <ETit type="prod">
                        7월 도시락 구독 7월 도시락 구독 7월 도시락 구독 7월 도시락 구독 7월 도시락 구독 7월 도시락 구독
                      </ETit>
                      <div class="stext">
                        (30일간, 일 1회/총 30회)
                      </div>
                      <div class="stock">
                        가능 <EGoods size="sm" val="12" unit="회" />
                      </div>
                    </div>
                  </div>
                  <!-- // thumb-prod-flex -->
                  <span class="ui-rdo">
                    <input id="SelectBoxRdo02" ref="radioStatusRef" v-model="selectedOption" type="radio" name="SelectBoxRdo01" disabled />
                    <label for="SelectBoxRdo02"><span class="offscreen">구독 선택</span></label>
                  </span>
                  <ColorBox color="light-gray" size="sm">
                    <TableWrap type="info" gap="sm" size="md" table-name="픽업정보">
                      <colgroup>
                        <col style="width: 55px;" />
                        <col style="width: auto;" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            사용기간
                          </th>
                          <td class="fc-gray70">
                            2024년 06월 29일 까지
                          </td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </ColorBox>
                </div>
              </ColorBox>
            </li>
          </RowListWrap>
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

// 구독 선택 팝업
const popSelectSubscribe = ref({ open: false });
const openSelectSubscribe = () => popSelectSubscribe.value.open = true;

//
const isDisabled = ref(false);
const selectedOption = ref(null);
const radioStatusRef = ref<HTMLInputElement | null>(null);
let radio: NodeListOf<HTMLInputElement>;

// TODO. 스크립트 팀장님 확인 필요.. LJY
onMounted(() => {
  const target = document.querySelectorAll<HTMLInputElement>('input[type="radio"]');

  target.forEach((radio) => {
    if (radio.disabled) {
      const box = radio.closest('.item-select-box');
      if (box) {
        box.classList.add('is-disabled');
      }
    }
  });
});
</script>
