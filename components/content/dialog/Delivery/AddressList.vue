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
              <EBtn color="gray">
                <EIco name="plus" size="sm" color="white"></EIco>
                <span class="text">주소지 추가</span>
              </EBtn>
              <ETBtn tag="button" size="xs">
                <EIco name="location" size="sm"></EIco>
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
                      <div class="flex-left">
                        <div class="ctitle-sm-wrap">
                          <div class="ctitle-lg">사무실</div>
                          <EBadge color="light-gray" size="md" badge-text="기본주소지" />
                        </div>
                        <div class="bar-group">
                          <span class="bar-text-sm fc-black">홍*동</span>
                          <span class="bar-text-sm fc-black">010-4554-8785</span>
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
                    <p class="stext-sm fw-md fc-black">085421</p>
                    <TableWrap type="info" size="xs" table-name="정보성 테이블">
                      <colgroup>
                        <col style="width: 42px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                      <tr>
                        <th scope="row">도로명</th>
                        <td>서울 강동구 상암로 **길 ***호 </td>
                      </tr>
                      <tr>
                        <th scope="row">지번</th>
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
                      <div class="flex-left">
                        <div class="ctitle-sm-wrap">
                          <div class="ctitle-lg">엄마집</div>
                          <EBadge color="light-gray" size="md" badge-text="기본주소지" />
                        </div>
                        <div class="bar-group">
                          <span class="bar-text-sm fc-black">홍*동</span>
                          <span class="bar-text-sm fc-black">010-4554-8785</span>
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
                    <p class="stext-sm fw-md fc-black">085421</p>
                    <TableWrap type="info" size="xs" table-name="정보성 테이블">
                      <colgroup>
                        <col style="width: 42px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                      <tr>
                        <th scope="row">도로명</th>
                        <td>서울 강동구 상암로 **길 ***호 </td>
                      </tr>
                      <tr>
                        <th scope="row">지번</th>
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
                      <div class="flex-left">
                        <div class="ctitle-sm-wrap">
                          <div class="ctitle-lg">우리집</div>
                          <EBadge color="light-gray" size="md" badge-text="기본주소지" />
                        </div>
                        <div class="bar-group">
                          <span class="bar-text-sm fc-black">홍*동</span>
                          <span class="bar-text-sm fc-black">010-4554-8785</span>
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
                    <p class="stext-sm fw-md fc-black">085421</p>
                    <TableWrap type="info" size="xs" table-name="정보성 테이블">
                      <colgroup>
                        <col style="width: 42px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                      <tr>
                        <th scope="row">도로명</th>
                        <td>서울 강동구 상암로 **길 ***호 </td>
                      </tr>
                      <tr>
                        <th scope="row">지번</th>
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
