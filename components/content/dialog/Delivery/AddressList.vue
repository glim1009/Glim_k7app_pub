<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        주소록
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap>
          <ContBox size="sm">
            <CtitleWrap size="zero">
              <ETit type="cont" text="내용 확인 후 추가해주세요." />
              <div class="stext-lg">
                택배에서는 우편번호가 등록된 주소만 입력이 가능합니다. 따라서 우편번호가 없는 지도 주소는 목록에서 제외합니다.
              </div>
            </CtitleWrap>
            <BtnWrap type="full" size="lg">
              <EBtn color="gray" @click="openAddAddress">
                <EIco name="plus" color="white" size="sm" />
                <span class="text">주소지 추가</span>
              </EBtn>
            </BtnWrap>
            <BtnWrap type="auto-center" size="md">
              <ETBtn tag="button" size="xs" @click="openCurrentAddress">
                <EIco name="current-location" color="gray" size="sm" />
                <span class="text">현재 위치를 주소에 추가</span>
              </ETBtn>
            </BtnWrap>
          </ContBox>
          <ContBox size="sm">
            <RowListWrap>
              <li class="item is-selected">
                <ColorBox color="white" size="lg">
                  <div class="box-info-header address-info">
                    <FlexGroup align="start">
                      <div class="info-flex-left">
                        <CtitleWrap size="sm">
                          <div class="ctitle-md">사무실</div>
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
                  <div class="address-info-group">
                    <span class="number">085421</span>
                    <span class="address">서울 강동구 상암로 **길 ***호</span>
                  </div>
                </ColorBox>
              </li>
              <li class="item">
                <ColorBox color="white" size="lg">
                  <div class="box-info-header address-info">
                    <FlexGroup align="start">
                      <div class="info-flex-left">
                        <CtitleWrap size="sm">
                          <div class="ctitle-md">엄마집</div>
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
                  <div class="address-info-group">
                    <span class="number">085421</span>
                    <span class="address">서울 강동구 상암로 **길 ***호</span>
                  </div>
                </ColorBox>
              </li>
              <li class="item">
                <ColorBox color="white" size="lg">
                  <div class="box-info-header address-info">
                    <FlexGroup align="start">
                      <div class="info-flex-left">
                        <CtitleWrap size="sm">
                          <div class="ctitle-md">
                            우리집
                          </div>
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
                  <div class="address-info-group">
                    <span class="number">085421</span>
                    <span class="address">서울 강동구 상암로 **길 ***호</span>
                  </div>
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

  <!-- pop : 현재 위치 주소 추가 -->
  <PopMyCurrentAddress v-model:sta="popCurrentAddress" />
  <!-- // pop : 현재 위치 주소 추가 -->
</template>

<script setup lang="ts">
interface DialogState {
  open: boolean;
}

const props = defineProps<{
  sta: DialogState;
}>();

const emit = defineEmits(["update:sta"]);

const openDialog = () => {
  isOpen.value = true;
};

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit("update:sta", { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};

// 주소록 추가 팝업
const popAddAddress = ref({ open: false });
const openAddAddress = () => popAddAddress.value.open = true;

// 현재 위치 주소 추가
const popCurrentAddress = ref({ open: false });
const openCurrentAddress = () => popCurrentAddress.value.open = true;
</script>
