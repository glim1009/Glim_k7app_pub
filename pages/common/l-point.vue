<template>
  <ContWrap>
    <ContBox>
      <ColorBox color="white" size="lg">
        <ContBox>
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
                      <ETit type="form">
                        사용 포인트<span class="required"><span class="offscreen">필수입력</span></span>
                      </ETit>
                    </div>
                    <div class="flex-right">
                      <span class="stext">
                        사용가능 <EGoods val="10,000" unit="P" />
                      </span>
                    </div>
                  </FlexGroup>
                </div>
                <div class="form-cont">
                  <div class="form-input-group valid-check">
                    <EInputBox title="사용 포인트 입력" type="text" placeholder="사용 포인트 입력">
                      <span class="unit">P</span>
                      <EBtn color="line-light-gray" size="xs">
                        <span class="text">모두사용</span>
                      </EBtn>
                    </EInputBox>
                    <div class="valid-desc">
                      사용 포인트를 입력해 주세요.
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="item-form">
              <div class="form-field">
                <div class="form-title">
                  <ETit type="form">
                    비밀번호<span class="required"><span class="offscreen">필수입력</span></span>
                  </ETit>
                </div>
                <div class="form-cont">
                  <div class="form-input-group valid-check">
                    <EInputBox :type="isPassword ? 'password' : 'text'" inputmode="numeric" title="비밀번호 입력" placeholder="비밀번호 입력 (8~15자리 숫자, 영문자, 특수문자)" :max-length="6">
                      <button type="button" class="btn-toggle-pw" :class="[{ 'is-active': !isPassword }]" @click="togglePassword">
                        <span class="offscreen">비밀번호 보임 상태</span>
                      </button>
                    </EInputBox>
                    <!-- 유효성 검사 CASE 01 : 비밀번호 오류인 경우 -->
                    <div class="valid-desc">
                      비밀번호가 일치하지 않습니다.(1/5)
                    </div>
                    <!-- // 유효성 검사 CASE 01 : 비밀번호 오류인 경우 -->
                    <!-- 유효성 검사 CASE 02 : 비밀번호를 입력하지 않은 경우 -->
                    <!-- <div class="valid-desc">
                      비밀번호를 입력해 주세요.
                    </div> -->
                    <!-- // 유효성 검사 CASE 02 : 비밀번호를 입력하지 않은 경우 -->
                  </div>
                </div>
              </div>
            </li>
          </RowListWrap>
        </ContBox>
        <ContBox>
          <p class="stext-gray70">
            L.POINT 비밀번호가 기억나지 않거나 5회이상 오류 시 재설정하세요.
          </p>
          <BtnWrap type="auto" size="sm">
            <ETBtn tag="a" size="xs" target="_blank" to="https://m.lpoint.com/app/point/WMPA100100.do">
              <span class="text">재설정</span>
              <EIco name="arw-right" size="xs" color="gray" />
            </ETBtn>
          </BtnWrap>
        </ContBox>
      </ColorBox>
      <BtnWrap size="md">
        <EBtn color="line-light-gray" size="lg">
          <span class="text">취소</span>
        </EBtn>
        <EBtn color="green" size="lg">
          <span class="text">적용</span>
        </EBtn>
      </BtnWrap>
    </ContBox>
  </ContWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: "L.POINT 사용",
  hideRightHeader: false,
});

const isPassword = ref(true);

function togglePassword() {
  isPassword.value = !isPassword.value;
}
</script>

<style scoped lang="scss">

</style>
