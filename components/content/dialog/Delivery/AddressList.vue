<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">주소록</div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap>
          <ContBox>
            <BtnWrap type="full">
              <EBtn color="gray" @click="openAddAddress">
                <EIco name="plus" color="white" size="sm"></EIco>
                <span class="text">주소지 추가</span>
              </EBtn>
            </BtnWrap>
            <BtnWrap type="auto-center" size="md">
              <ETBtn tag="button" size="xs" @click="openSearchAddress">
                <EIco name="current-location" size="sm"></EIco>
                <span class="text">현재 위치 주소에 추가</span>
              </ETBtn>
            </BtnWrap>
          </ContBox>
          <ContBox>
            <RowListWrap>
              <li class="item is-selected">
                <ColorBox color="white" size="lg">
                  <div class="box-info-header">
                    <FlexGroup align="start">
                      <div class="info-flex-left">
                        <CtitleWrap size="sm">
                          <div class="ctitle-lg">사무실</div>
                          <EBadge color="light-gray" size="md" badge-text="기본주소지" />
                        </CtitleWrap>
                        <div class="bar-group">
                          <span class="bar-text fc-black">홍*동</span>
                          <span class="bar-text fc-black">010-4554-8785</span>
                        </div>
                      </div>
                      <div class="flex-right">
                        <EBtn color="light-green" size="xs">
                          <EIco name="check" color="green" size="xs" />
                          <span class="text">선택</span>
                        </EBtn>
                      </div>
                    </FlexGroup>
                  </div>
                  <RowListWrap size="xs">
                    <p class="stext fw-md fc-black">085421</p>
                    <TableWrap type="info" gap="sm" size="md" table-name="정보성 테이블">
                      <colgroup>
                        <col style="width: 44px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row" class="fc-black fw-md">도로명</th>
                          <td>서울 강동구 상암로 **길 ***호 </td>
                        </tr>
                        <tr>
                          <th scope="row" class="fc-black fw-md">지번</th>
                          <td>서울 강동구 암사동 265-5번지 203호 서울 강동구 암사동 265-5번지 ***호</td>
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
                        <CtitleWrap size="sm">
                          <div class="ctitle-lg">엄마집</div>
                        </CtitleWrap>
                        <div class="bar-group">
                          <span class="bar-text fc-black">홍*동</span>
                          <span class="bar-text fc-black">010-4554-8785</span>
                        </div>
                      </div>
                      <div class="flex-right">
                        <EBtn color="light-green" size="xs">
                          <EIco name="check" color="green" size="xs" />
                          <span class="text">선택</span>
                        </EBtn>
                      </div>
                    </FlexGroup>
                  </div>
                  <RowListWrap size="xs">
                    <p class="stext fw-md fc-black">085421</p>
                    <TableWrap type="info" gap="sm" size="md" table-name="정보성 테이블">
                      <colgroup>
                        <col style="width: 44px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row" class="fc-black fw-md">도로명</th>
                          <td>서울 강동구 상암로 **길 ***호 </td>
                        </tr>
                        <tr>
                          <th scope="row" class="fc-black fw-md">지번</th>
                          <td>서울 강동구 암사동 265-5번지 203호 서울 강동구 암사동 265-5번지 ***호</td>
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
                        <CtitleWrap size="sm">
                          <div class="ctitle-lg">우리집</div>
                        </CtitleWrap>
                        <div class="bar-group">
                          <span class="bar-text fc-black">홍*동</span>
                          <span class="bar-text fc-black">010-4554-8785</span>
                        </div>
                      </div>
                      <div class="flex-right">
                        <EBtn color="light-green" size="xs">
                          <EIco name="check" color="green" size="xs" />
                          <span class="text">선택</span>
                        </EBtn>
                      </div>
                    </FlexGroup>
                  </div>
                  <RowListWrap size="xs">
                    <p class="stext fw-md fc-black">085421</p>
                    <TableWrap type="info" gap="sm" size="md" table-name="정보성 테이블">
                      <colgroup>
                        <col style="width: 44px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row" class="fc-black fw-md">도로명</th>
                          <td>서울 강동구 상암로 **길 ***호 </td>
                        </tr>
                        <tr>
                          <th scope="row" class="fc-black fw-md">지번</th>
                          <td>서울 강동구 암사동 265-5번지 203호 서울 강동구 암사동 265-5번지 ***호</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </RowListWrap>
                </ColorBox>
              </li>
            </RowListWrap>
          </ContBox>
        </ContWrap>
      </div>
    </template>
  </ContDialog>
  <!-- pop : 주소록 추가 팝업 -->
  <PopMyAddAddress v-model:sta="popAddAddress" />
  <!-- // pop : 주소록 추가 팝업 -->

  <!-- pop : 주소록 검색 팝업 -->
  <PopMySearchAddress v-model:sta="popSearchAddress" />
  <!-- // pop : 주소록 검색 팝업 -->
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

// 주소록 추가 팝업
const popAddAddress = ref({ open: false });
const openAddAddress = () => popAddAddress.value.open = true;

// 주소록 검색 팝업
const popSearchAddress = ref({ open: false });
const openSearchAddress = () => popSearchAddress.value.open = true;
</script>
