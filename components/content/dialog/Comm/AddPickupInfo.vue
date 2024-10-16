<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        픽업 정보 입력
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap :class="{ 'has-prod-cta': isCta }">
          <ContBox size="md">
            <button type="button" class="btn-store" @click="openStoreSearchSelect(false)">
              <EBadge color="green" size="md" badge-text="픽업매장" />
              <span class="store">세븐일레븐 강남점</span>
              <EIco name="arw-right" color="gray" size="sm" />
            </button>
          </ContBox>
          <ContBox size="md" v-if="isDataPickUp">
            <div class="form-field">
              <div class="form-title">
                <FlexGroup align="center">
                  <div class="flex-left">
                    <ETit text="픽업시간선택" type="form" />
                  </div>
                  <div class="flex-right">
                    <div class="pickup-today">
                      오늘 2024년 7월 20일
                    </div>
                  </div>
                </FlexGroup>
              </div>
              <div class="form-cont">
                <div class="form-input-group">
                  <FlexGroup>
                    <div class="flex-left">
                      <div class="ui-select">
                        <select title="픽업시간선택">
                          <option>10시</option>
                          <option>11시</option>
                          <option>12시</option>
                        </select>
                      </div>
                    </div>
                    <div class="flex-right">
                      <div class="ui-select">
                        <select title="픽업시간선택">
                          <option>20분</option>
                          <option>30분</option>
                          <option>40분</option>
                        </select>
                      </div>
                    </div>
                  </FlexGroup>
                </div>
                <p class="dot-text-sm">픽업 매장 및 일시를 꼭 확인해주세요! 결제 후에는 픽업 시간 변경이 어려워요.</p>
              </div>
            </div>
          </ContBox>
          <ContBox size="sm" gap="sm" v-if="isDataReservation">
            <ColorBox color="white" size="lg">
              <UiCalendar locale="ko" v-model="value" class="calendar-group" />
            </ColorBox>
            <ColorBox color="white" size="lg">
              <CtitleWrap size="sm">
                <ETit text="픽업 시간 선택" type="cont" />
              </CtitleWrap>
              <GridListWrap gap="sm" col="3">
                <li class="item-grid">
                  <span class="ui-rdo-button">
                    <input id="pickupTimeRdo01" type="radio" name="pickupTimeRdo01" disabled />
                    <label for="pickupTimeRdo01"><span class="text-sm">00시~03시</span></label>
                  </span>
                </li>
                <li class="item-grid">
                  <span class="ui-rdo-button">
                    <input id="pickupTimeRdo02" type="radio" name="pickupTimeRdo01" disabled />
                    <label for="pickupTimeRdo02"><span class="text-sm">03시~06시</span></label>
                  </span>
                </li>
                <li class="item-grid">
                  <span class="ui-rdo-button">
                    <input id="pickupTimeRdo03" type="radio" name="pickupTimeRdo01" disabled />
                    <label for="pickupTimeRdo03"><span class="text-sm">06시~09시</span></label>
                  </span>
                </li>
                <li class="item-grid">
                  <span class="ui-rdo-button">
                    <input id="pickupTimeRdo04" type="radio" name="pickupTimeRdo01" />
                    <label for="pickupTimeRdo04"><span class="text-sm">09시~12시</span></label>
                  </span>
                </li>
                <li class="item-grid">
                  <span class="ui-rdo-button">
                    <input id="pickupTimeRdo05" type="radio" name="pickupTimeRdo01" />
                    <label for="pickupTimeRdo05"><span class="text-sm">12시~15시</span></label>
                  </span>
                </li>
                <li class="item-grid">
                  <span class="ui-rdo-button">
                    <input id="pickupTimeRdo06" type="radio" name="pickupTimeRdo01" checked />
                    <label for="pickupTimeRdo06"><span class="text-sm">15시~18시</span></label>
                  </span>
                </li>
                <li class="item-grid">
                  <span class="ui-rdo-button">
                    <input id="pickupTimeRdo07" type="radio" name="pickupTimeRdo01" />
                    <label for="pickupTimeRdo07"><span class="text-sm">18시~20시</span></label>
                  </span>
                </li>
                <li class="item-grid">
                  <span class="ui-rdo-button">
                    <input id="pickupTimeRdo08" type="radio" name="pickupTimeRdo01" />
                    <label for="pickupTimeRdo08"><span class="text-sm">20시~22시</span></label>
                  </span>
                </li>
                <li class="item-grid">
                  <span class="ui-rdo-button">
                    <input id="pickupTimeRdo09" type="radio" name="pickupTimeRdo01" />
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
            <ColorBox color="white" size="lg">
              <FlexGroup>
                <div class="flex-left">
                  <ETit text="수량" type="cont" />
                </div>
                <div class="flex-right">
                  <UiColGroup gap="sm">
                    <ESpinner />
                    <EBtn color="gray" size="sm" disabled>
                      <span class="text">추가</span>
                    </EBtn>
                  </UiColGroup>
                </div>
              </FlexGroup>
            </ColorBox>
            <ColorBox color="white" size="lg">
              <CtitleWrap size="md">
                <ETit type="cont">선택한 예약 정보</ETit>
              </CtitleWrap>
              <RowListWrap gap="md">
                <li class="item">
                  <div class="tag-full-box">
                    <FlexGroup>
                      <div class="flex-left">
                        <p class="stext-lg-black fw-md">2024.07.18 (목), 12 ~ 15시</p>
                      </div>
                      <div class="flex-right">
                        <EGoods size="md" val="3" unit="개" class="fc-gray80" />
                      </div>
                    </FlexGroup>
                    <button type="button" class="btn-delete">
                      <EIco name="close" color="gray" size="xs">
                        <span class="offscreen">선택한 예약 정보 삭제</span>
                      </EIco>
                    </button>
                  </div>
                </li>
                <li class="item">
                  <div class="tag-full-box">
                    <FlexGroup>
                      <div class="flex-left">
                        <p class="stext-lg-black fw-md">2024.07.20 (토), 09 ~ 12시</p>
                      </div>
                      <div class="flex-right">
                        <EGoods size="md" val="3" unit="개" class="fc-gray80" />
                      </div>
                    </FlexGroup>
                    <button type="button" class="btn-delete">
                      <EIco name="close" color="gray" size="xs">
                        <span class="offscreen">선택한 예약 정보 삭제</span>
                      </EIco>
                    </button>
                  </div>
                </li>
              </RowListWrap>
            </ColorBox>
          </ContBox>
        </ContWrap>
      </div>
    </template>
    <slot v-if="isCta" name="cta" />
  </ContDialog>

  <!-- pop : 매장선택 -->
  <PopStoreSearchSelect v-model:sta="popStoreSearchSelect" :first-tab="StoreSearchTabName" :is-search-data="popSearchType" />
  <!-- // pop : 매장선택 -->
</template>

<script setup lang="ts">
interface DialogState {
  open: boolean;
}

const props = defineProps<{
  sta: DialogState;
  isCta?: boolean;
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

import { type DateValue, getLocalTimeZone, today } from '@internationalized/date';
const value = ref(today(getLocalTimeZone())) as Ref<DateValue>;

const isDataPickUp = ref(true); // 임시 : 상품 컨텐츠 있음 확인을 위해 추가
const isDataReservation = ref(true); // 임시 : 상품 컨텐츠 없음 확인을 위해 추가

// 매장선택
const popStoreSearchSelect = ref({ open: false });

// 임시 - 매장 검색결과 팝업 확인을 위한 이벤트 추가 ( 개발시 삭제 요청 )
const popSearchType = ref<boolean>();
const StoreSearchTabName = ref<string>();
const openStoreSearchSelect = (isSearchData: boolean, tabName: string = "list") => {
  popSearchType.value = isSearchData; // 임시 - 매장 검색결과 팝업 확인을 위한 이벤트 추가 ( 개발시 삭제 요청 )
  StoreSearchTabName.value = tabName;
  popStoreSearchSelect.value.open = true;
};
</script>
