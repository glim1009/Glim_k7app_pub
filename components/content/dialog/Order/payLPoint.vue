<template>
  <ContDialog v-model="isOpen">
    <template #title>
      <div class="dialog-title">
        L.POINT 사용
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap type="white" in-top="zero" in-bottom="zero">
          <RowListWrap gap="xl">
            <li class="item-form">
              <div class="form-field">
                <div class="form-title">
                  <ETit type="form" text="카드번호" />
                </div>
                <div class="form-cont">
                  <div class="form-input-group">
                    <EInputBox title="카드번호 입력" type="text" placeholder="카드번호 입력" />
                  </div>
                </div>
              </div>
            </li>
            <li class="item-form">
              <div class="form-field">
                <div class="form-title">
                  <FlexGroup>
                    <div class="flex-left">
                      <ETit type="form" text="사용 포인트" />
                    </div>
                    <div class="flex-right">
                      <span class="stext">
                        사용가능 <EGoods val="10,000" unit="P" />
                      </span>
                    </div>
                  </FlexGroup>
                </div>
                <div class="form-cont">
                  <div class="form-input-group">
                    <EInputBox title="사용 포인트 입력" type="text" placeholder="사용 포인트 입력">
                      <span class="unit">P</span>
                      <EBtn color="line-light-gray" size="xs">
                        <span class="text">모두사용</span>
                      </EBtn>
                    </EInputBox>
                  </div>
                </div>
              </div>
            </li>
            <li class="item-form">
              <div class="form-field">
                <div class="form-title">
                  <ETit type="form" text="비밀번호" />
                </div>
                <div class="form-cont">
                  <div class="form-input-group">
                    <EInputBox :type="isPassword ? 'password' : 'text'" inputmode="numeric" title="비밀번호 입력" placeholder="비밀번호 입력 (8~15자리 숫자, 영문자, 특수문자)">
                      <button type="button" class="btn-toggle-pw" :class="[{ 'is-active': !isPassword }]" @click="togglePassword">
                        <span class="offscreen">비밀번호 보임 상태</span>
                      </button>
                    </EInputBox>
                  </div>
                </div>
              </div>
            </li>
          </RowListWrap>
          <ContBox size="md">
            <p class="stext fc-gray70">
              L.POINT 비밀번호가 기억나지 않거나 5회이상 오류 시 재설정하세요.
            </p>
            <BtnWrap type="auto" size="sm">
              <ETBtn tag="a" size="xs" to="javascript:">
                <span class="text">재설정</span>
                <EIco name="arw-right" size="xs" color="gray" />
              </ETBtn>
            </BtnWrap>
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

// l.point 사용 팝업
const popPayLPoint = ref({ open: false });
const openPayLPoint = () => popPayLPoint.value.open = true;

const isPassword = ref(true);

function togglePassword() {
  isPassword.value = !isPassword.value;
}
</script>
