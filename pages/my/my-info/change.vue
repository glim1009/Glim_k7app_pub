<template>
  <ContWrap size="lg">
    <ContBox>
      <CtitleWrap>
        <ETit text="회원 정보 변경" type="lgCont" />
      </CtitleWrap>
      <ColorBox color="white" size="lg">
        <RowListWrap gap="line">
          <li class="item-md">
            <FlexGroup>
              <div class="flex-left"><ETit text="L.POINT 회원정보 변경" type="account" /></div>
              <div class="flex-right"><EIco name="arw-right" color="gray" size="sm" /></div>
            </FlexGroup>
            <NuxtLink class="btn-link" to="javascript:"><span class="offscreen">L.POINT 회원정보 변경 바로가기</span></NuxtLink>
          </li>
          <li class="item-md">
            <FlexGroup>
              <div class="flex-left"><ETit text="L.POINT 비밀번호 변경" type="account" /></div>
              <div class="flex-right"><EIco name="arw-right" color="gray" size="sm" /></div>
            </FlexGroup>
            <NuxtLink class="btn-link" to="javascript:"><span class="offscreen">L.POINT 비밀번호 변경 바로가기</span></NuxtLink>
          </li>
        </RowListWrap>
      </ColorBox>
      <RowListWrap gap="sm" size="xs">
        <li class="dot-text-sm">
          하나의 아이디로 롯데 L.POINT 회원제 서비스가
          <br>제공되는 사이트의 모든 거래 및 서비스를 이용하실 수 있습니다.
        </li>
        <li class="dot-text-sm">
          L.POINT 회원 정보 변경 시, 가입하신 롯데그룹 계열사 사이트의
          <br>회원정보가 함께 변경됩니다. 소중한 정보를 정확하게 기입해 주시기 바랍니다.
        </li>
      </RowListWrap>
    </ContBox>
    <ContBox>
      <CtitleWrap>
        <ETit text="SNS 로그인 연동 설정" type="lgCont" />
      </CtitleWrap>
      <ColorBox color="white" size="lg">
        <RowListWrap gap="line">
          <li class="item-md">
            <FlexGroup>
              <div class="flex-left">
                <CtitleWrap size="zero">
                  <ETit text="카카오 로그인 연동" type="account" />
                  <div class="stext fc-gray70">K7@icloud.com</div>
                </CtitleWrap>
              </div>
              <div class="flex-right">
                <span class="ui-toggle">
                  <input id="toggleKakao" type="checkbox">
                  <label for="toggleKakao"></label>
                </span>
              </div>
            </FlexGroup>
          </li>
          <li class="item-md">
            <FlexGroup>
              <div class="flex-left">
                <CtitleWrap size="zero">
                  <ETit text="네이버 로그인 연동" type="account" />
                  <div class="stext fc-gray70">연동된 계정이 없습니다.</div>
                </CtitleWrap>
              </div>
              <div class="flex-right">
                <span class="ui-toggle">
                  <input id="toggleNaver" type="checkbox">
                  <label for="toggleNaver"></label>
                </span>
              </div>
            </FlexGroup>
          </li>
        </RowListWrap>
      </ColorBox>
      <RowListWrap gap="sm" size="xs">
        <li class="dot-text-sm">자주 사용하는 SNS 계정과 연결하시면 간편하게 로그인하실 수 있습니다.</li>
        <li class="dot-text-sm">SNS 연결 설정 시 해당 SNS 계정 인증이 필요합니다</li>
      </RowListWrap>
    </ContBox>
    <BtnWrap size="xl" type="full">
      <EBtn tag="a" color="line-light-gray" to="/my/my-info/secession-info"><span class="text">회원탈퇴</span></EBtn>
    </BtnWrap>
  </ContWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: '회원 정보 변경',
});
</script>

<style lang="scss" scoped>
@import url("assets/css/pages/my.scss");
</style>
