<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        픽업정보변경
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap>
          <ContBox size="sm">
            <button type="button" class="btn-store" @click="openStoreSearchSelect(false)">
              <EBadge color="green" size="md" badge-text="픽업매장" />
              <span class="store">세븐일레븐 강남점</span>
              <EIco name="arw-right" color="gray" size="sm" />
            </button>
          </ContBox>
          <ContBox size="sm" gap="sm">
            <ColorBox color="white" size="lg">
              <UiCalendar v-model="value" locale="ko" class="calendar-group" />
            </ColorBox>
            <ColorBox color="white" size="lg">
              <CtitleWrap size="sm">
                <ETit text="수령시간선택" type="cont" />
              </CtitleWrap>
              <GridListWrap gap="sm" col="3">
                <li class="item-grid">
                  <span class="ui-rdo-button">
                    <input id="pickupTimeRdo01" type="radio" name="pickupTimeRdo01" disabled>
                    <label for="pickupTimeRdo01"><span class="text-sm">00시~03시</span></label>
                  </span>
                </li>
                <li class="item-grid">
                  <span class="ui-rdo-button">
                    <input id="pickupTimeRdo02" type="radio" name="pickupTimeRdo01" disabled>
                    <label for="pickupTimeRdo02"><span class="text-sm">03시~06시</span></label>
                  </span>
                </li>
                <li class="item-grid">
                  <span class="ui-rdo-button">
                    <input id="pickupTimeRdo03" type="radio" name="pickupTimeRdo01" disabled>
                    <label for="pickupTimeRdo03"><span class="text-sm">06시~09시</span></label>
                  </span>
                </li>
                <li class="item-grid">
                  <span class="ui-rdo-button">
                    <input id="pickupTimeRdo04" type="radio" name="pickupTimeRdo01">
                    <label for="pickupTimeRdo04"><span class="text-sm">09시~12시</span></label>
                  </span>
                </li>
                <li class="item-grid">
                  <span class="ui-rdo-button">
                    <input id="pickupTimeRdo05" type="radio" name="pickupTimeRdo01">
                    <label for="pickupTimeRdo05"><span class="text-sm">12시~15시</span></label>
                  </span>
                </li>
                <li class="item-grid">
                  <span class="ui-rdo-button">
                    <input id="pickupTimeRdo06" type="radio" name="pickupTimeRdo01" checked>
                    <label for="pickupTimeRdo06"><span class="text-sm">15시~18시</span></label>
                  </span>
                </li>
                <li class="item-grid">
                  <span class="ui-rdo-button">
                    <input id="pickupTimeRdo07" type="radio" name="pickupTimeRdo01">
                    <label for="pickupTimeRdo07"><span class="text-sm">18시~20시</span></label>
                  </span>
                </li>
                <li class="item-grid">
                  <span class="ui-rdo-button">
                    <input id="pickupTimeRdo08" type="radio" name="pickupTimeRdo01">
                    <label for="pickupTimeRdo08"><span class="text-sm">20시~22시</span></label>
                  </span>
                </li>
                <li class="item-grid">
                  <span class="ui-rdo-button">
                    <input id="pickupTimeRdo09" type="radio" name="pickupTimeRdo01">
                    <label for="pickupTimeRdo09"><span class="text-sm">22시~24시</span></label>
                  </span>
                </li>
              </GridListWrap>
              <RowListWrap size="xs">
                <li class="dot-text-sm-green">
                  꼭 확인해주세요! 결제 후에는 픽업 시간 변경이 어려워요!
                </li>
              </RowListWrap>
            </ColorBox>
          </ContBox>
        </ContWrap>
      </div>
    </template>
    <template #footer>
      <div class="dialog-btn-wrap">
        <EBtn color="line-light-gray" size="lg" @click="closeDialog">
          <span class="text">취소</span>
        </EBtn>
        <EBtn color="green" size="lg" @click="closeDialog">
          <span class="text">변경</span>
        </EBtn>
      </div>
    </template>
  </ContDialog>

  <!-- pop : 매장선택 -->
  <PopStoreSearchSelect v-model:sta="popStoreSearchSelect" :is-search-data="popSearchType" />
  <!-- // pop : 매장선택 -->
</template>

<script setup lang="ts">
import { type DateValue, getLocalTimeZone, today } from "@internationalized/date";

interface DialogState {
  open: boolean;
}

const props = defineProps<{
  sta: DialogState;
}>();

const emit = defineEmits(["update:sta"]);

function openDialog() {
  isOpen.value = true;
}

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit("update:sta", { ...props.sta, open: value }),
});

function closeDialog() {
  isOpen.value = false;
}
const value = ref(today(getLocalTimeZone())) as Ref<DateValue>;

// 매장선택
const popStoreSearchSelect = ref({ open: false });

// 임시 - 매장 검색결과 팝업 확인을 위한 이벤트 추가 ( 개발시 삭제 요청 )
const popSearchType = ref<boolean>();

const openStoreSearchSelect = (isSearchData: boolean) => {
  popSearchType.value = isSearchData; // 임시 - 매장 검색결과 팝업 확인을 위한 이벤트 추가 ( 개발시 삭제 요청 )
  popStoreSearchSelect.value.open = true;
};
</script>
