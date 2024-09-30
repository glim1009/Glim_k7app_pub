<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        주소 설정
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap>
          <ContBox>
            <BtnWrap type="full">
              <EBtn color="gray" @click="openAddAddress">
                <EIco name="plus" size="sm" color="white"></EIco>
                <span class="text">주소지 추가</span>
              </EBtn>
              <ETBtn tag="button" size="xs" @click="openCurrentAddress">
                <EIco name="current-location" color="gray" size="sm"></EIco>
                <span class="text">현재 위치 주소에 추가</span>
              </ETBtn>
            </BtnWrap>
          </ContBox>

          <!-- 데이터가 있는 경우 -->
          <ContBox size="sm" v-if="isDataAddress">
            <RowListWrap gap="md">
              <li class="item">
                <ColorBox color="white" size="lg">
                  <div class="box-info-header">
                    <FlexGroup align="start">
                      <div class="info-flex-left">
                        <div class="box-rdo-group">
                          <span class="ui-rdo">
                            <input type="radio" id="demoRdo01" name="demoRdo01">
                            <label for="demoRdo01"><span class="text-lg">사무실</span></label>
                          </span>
                          <EBadge color="light-gray" size="md" badge-text="기본주소지" />
                        </div>
                        <div class="bar-group">
                          <span class="bar-text-sm fc-black">홍*동</span>
                          <span class="bar-text-sm fc-black">010-4554-8785</span>
                        </div>
                      </div>
                      <div class="flex-right">
                        <BtnWrap>
                          <EBtn color="light-gray" size="xs">
                            <EIco name="delete" color="gray" size="xs"><span class="offscreen">삭제</span></EIco>
                          </EBtn>
                          <EBtn color="light-green" size="xs" @click="openEditAddress">
                            <EIco name="write" color="green" size="xs"><span class="offscreen">수정</span></EIco>
                          </EBtn>
                        </BtnWrap>
                      </div>
                    </FlexGroup>
                  </div>
                  <RowListWrap size="xs">
                    <TableWrap type="info" gap="sm" size="md" table-name="주소정보">
                      <colgroup>
                        <col style="width: 56px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                      <tr>
                        <th scope="row" class="fc-black fw-md">085421</th>
                        <td>서울 강동구 상암로 **길 ***호</td>
                      </tr>
                      </tbody>
                    </TableWrap>
                  </RowListWrap>
                </ColorBox>
              </li>
              <li class="item">
                <ColorBox color="white" size="lg">
                  <div class="box-info-header">
                    <FlexGroup align="start">
                      <div class="info-flex-left">
                        <div class="box-rdo-group">
                           <span class="ui-rdo">
                            <input type="radio" id="demoRdo02" name="demoRdo01">
                            <label for="demoRdo02"><span class="text-lg">엄마집</span></label>
                          </span>
                        </div>
                        <div class="bar-group">
                          <span class="bar-text-sm fc-black">홍*동</span>
                          <span class="bar-text-sm fc-black">010-4554-8785</span>
                        </div>
                      </div>
                      <div class="flex-right">
                        <BtnWrap>
                          <EBtn color="light-gray" size="xs">
                            <EIco name="delete" color="gray" size="xs"><span class="offscreen">삭제</span></EIco>
                          </EBtn>
                          <EBtn color="light-green" size="xs" @click="openEditAddress">
                            <EIco name="write" color="green" size="xs"><span class="offscreen">수정</span></EIco>
                          </EBtn>
                        </BtnWrap>
                      </div>
                    </FlexGroup>
                  </div>
                  <RowListWrap size="xs">
                    <TableWrap type="info" gap="sm" size="md" table-name="주소정보">
                      <colgroup>
                        <col style="width: 56px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                      <tr>
                        <th scope="row" class="fc-black fw-md">085421</th>
                        <td>서울 강동구 상암로 **길 ***호</td>
                      </tr>
                      </tbody>
                    </TableWrap>
                  </RowListWrap>
                </ColorBox>
              </li>
              <li class="item">
                <ColorBox color="white" size="lg">
                  <div class="box-info-header">
                    <FlexGroup align="start">
                      <div class="info-flex-left">
                        <div class="box-rdo-group">
                     <span class="ui-rdo">
                      <input type="radio" id="demoRdo03" name="demoRdo01">
                      <label for="demoRdo03"><span class="text-lg">우리집</span></label>
                    </span>
                        </div>
                        <div class="bar-group">
                          <span class="bar-text-sm fc-black">홍*동</span>
                          <span class="bar-text-sm fc-black">010-4554-8785</span>
                        </div>
                      </div>
                      <div class="flex-right">
                        <BtnWrap>
                          <EBtn color="light-gray" size="xs">
                            <EIco name="delete" color="gray" size="xs"><span class="offscreen">삭제</span></EIco>
                          </EBtn>
                          <EBtn color="light-green" size="xs" @click="openEditAddress">
                            <EIco name="write" color="green" size="xs"><span class="offscreen">수정</span></EIco>
                          </EBtn>
                        </BtnWrap>
                      </div>
                    </FlexGroup>
                  </div>
                  <RowListWrap size="xs">
                    <TableWrap type="info" gap="sm" size="md" table-name="주소정보">
                      <colgroup>
                        <col style="width: 56px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                      <tr>
                        <th scope="row" class="fc-black fw-md">085421</th>
                        <td>서울 강동구 상암로 **길 ***호</td>
                      </tr>
                      </tbody>
                    </TableWrap>
                  </RowListWrap>
                </ColorBox>
              </li>
            </RowListWrap>
          </ContBox>
          <!--// 데이터가 있는 경우 -->

          <!-- 데이터가 없는 경우  -->
          <ContBox size="zero" v-if="isNoDataAddress">
            <InfoGuideWrap
                type="no-data"
                name="address"
                desc="추가된 주소지가 없습니다."
            />
          </ContBox>
          <!-- // 데이터가 없는 경우  -->
        </ContWrap>
      </div>
    </template>
    <template #footer>
      <div class="dialog-btn-wrap">
        <EBtn color="green" size="lg" @click="closeDialog">
          <span class="text">주소 설정</span>
        </EBtn>
      </div>
    </template>
  </ContDialog>
  <!-- pop : 주소록 추가 -->
  <PopMyAddAddress v-model:sta="popAddAddress"/>
  <!-- // pop : 주소록 추가 -->

  <!-- pop : 현재 위치 주소 추가 -->
  <PopMyCurrentAddress v-model:sta="popCurrentAddress" />
  <!-- // pop : 현재 위치 주소 추가 -->

  <!-- pop : 주소록 수정 -->
  <PopMyEditAddress v-model:sta="popEditAddress"/>
  <!-- // pop : 주소록 수정 -->
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

const isDataAddress = ref(true); // 임시 : 주소 데이터 있음 컨텐츠 확인을 위해 추가
const isNoDataAddress = ref(true); // 임시 : 주소 데이터 없음 컨텐츠 확인을 위해 추가

// 주소록 추가
const popAddAddress = ref({open: false});
const openAddAddress = () => popAddAddress.value.open = true;

// 현재 위치 주소 추가
const popCurrentAddress = ref({ open: false });
const openCurrentAddress = () => popCurrentAddress.value.open = true;

// 주소록 수정
const popEditAddress = ref({open: false});
const openEditAddress = () => popEditAddress.value.open = true;
</script>
