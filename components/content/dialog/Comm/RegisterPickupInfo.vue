<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        픽업 정보 등록
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <!-- 픽업매장 데이터 있음 -->
        <ContWrap v-if="isDataStore">
          <ContBox size="sm">
            <button type="button" class="btn-store">
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
                    <EBtn color="gray" size="sm">
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
                    <CtitleWrap size="sm">
                      <div class="ctitle-xs">세븐일레븐 면목점</div>
                    </CtitleWrap>
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
                    <CtitleWrap size="sm">
                      <div class="ctitle-xs">세븐일레븐 강남점</div>
                    </CtitleWrap>
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
        <!-- // 픽업매장 데이터 있음 -->
        <!-- 픽업매장 데이터 없음 -->
        <ContWrap v-if="isNoDataStore">
          <ContBox size="zero">
            <NuxtLink class="btn-store" to="javascript:">
              <EBadge color="green" size="md" badge-text="픽업매장" />
              <span class="store">매장을 선택해주세요.</span>
              <EIco name="arw-right" color="gray" size="sm" />
            </NuxtLink>
          </ContBox>
          <ContBox size="zero">
            <InfoGuideWrap
              type="no-data"
              name="store"
              desc="픽업매장을 선택해 주세요."
              sub-desc="픽업매장 선택 후 픽업일시를 선택해 주시기 바랍니다."
            />
          </ContBox>
        </ContWrap>
        <!-- // 픽업매장 데이터 없음 -->
      </div>
    </template>
    <template #footer>
      <div class="dialog-btn-wrap">
        <EBtn color="green" size="lg" @click="closeDialog">
          <span class="text">저장하기</span>
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

import { type DateValue, getLocalTimeZone, today } from '@internationalized/date';
const value = ref(today(getLocalTimeZone())) as Ref<DateValue>;

const isNoDataStore = ref(true); // 임시 : 픽업 매장 데이터 있음 컨텐츠 확인을 위해 추가
const isDataStore = ref(true); // 임시 : 픽업 매장 데이터 없음 컨텐츠 확인을 위해 추가
</script>
