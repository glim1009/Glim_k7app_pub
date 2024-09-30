<template>
  <div class="login-wrap not-navbar">
    <ContWrap type="white" in-top="lg" in-bottom="md">
      <ContBox size="lg">
        <CtitleWrap size="lg">
          <div class="ctitle-2xl">L.POINT 통합 로그인</div>
          <div class="stext-lg-gray70">지금 로그인하고 다양한 혜택을 만나보세요!</div>
        </CtitleWrap>
        <RowListWrap gap="xl">
          <li class="item-form">
            <div class="form-field">
              <div class="form-title">
                <ETit type="form">아이디/이메일</ETit>
              </div>
              <div class="form-cont">
                <div class="form-input-group">
                  <EInputBox title="아이디/이메일 입력" placeholder="L.POINT 아이디 또는 이메일 입력"/>
                </div>
              </div>
            </div>
          </li>
          <li class="item-form">
            <div class="form-field">
              <div class="form-title">
                <ETit type="form">비밀번호</ETit>
              </div>
              <div class="form-cont">
                <div class="form-input-group">
                  <EInputBox :type="isPassword ? 'password' : 'text'" inputmode="numeric" title="비밀번호 입력" placeholder="비밀번호 입력 (8~15자리 숫자, 영문자, 특수문자)">
                    <button type="button" :class="['btn-toggle-pw', {'is-active' : !isPassword}]" @click="togglePassword">
                      <span class="offscreen">비밀번호 보임 상태</span>
                    </button>
                  </EInputBox>
                </div>
              </div>
            </div>
          </li>
        </RowListWrap>
        <UiColGroup>
          <span class="ui-chk">
            <input id="loginChk01" type="checkbox" />
            <label for="loginChk01"><span class="text-md">자동 로그인</span></label>
          </span>
          <span class="ui-chk">
            <input id="loginChk02" type="checkbox" />
            <label for="loginChk02"><span class="text-md">아이디 저장</span></label>
          </span>
        </UiColGroup>
      </ContBox>
      <ContBox size="lg">
        <BtnWrap>
          <EBtn tag="a" color="green" size="lg" to="javascript:"><span class="text">로그인</span></EBtn>
        </BtnWrap>
        <BtnWrap size="md" type="auto-center">
          <div class="bar-group">
            <ETBtn tag="a" size="md" to="javascript:">
              <span class="text">아이디 찾기</span>
            </ETBtn>
            <ETBtn tag="a" size="md" to="javascript:">
              <span class="text">비밀번호 찾기</span>
            </ETBtn>
            <ETBtn tag="a" size="md" to="javascript:">
              <span class="text">회원가입</span>
            </ETBtn>
          </div>
        </BtnWrap>
      </ContBox>
    </ContWrap>
    <ContWrap type="divider" in-top="lg" in-bottom="md">
      <FlexGroup>
        <div class="flex-left">
          <CtitleWrap size="zero">
            <ETit text="간편 로그인" type="cont" />
            <div class="stext-gray70">카카오 / 네이버로 간편하게 시작하세요</div>
          </CtitleWrap>
        </div>
        <div class="flex-right">
          <BtnWrap>
            <NuxtLink to="javascript:" class="btn-easy-login">
              <EIco name="sns-kakao-sm" />
              <span class="offscreen">카카오로 로그인</span>
            </NuxtLink>
            <NuxtLink to="javascript:" class="btn-easy-login">
              <EIco name="sns-naver-sm" />
              <span class="offscreen">네이버로 로그인</span>
            </NuxtLink>
          </BtnWrap>
        </div>
      </FlexGroup>
    </ContWrap>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  hideRightHeader: ['chat', 'search', 'cart'],
})

const isPassword = ref(true);

const togglePassword = () => {
  isPassword.value = !isPassword.value;
};

</script>

<style lang="scss" scoped>
@import url('assets/css/pages/member.scss');
</style>
