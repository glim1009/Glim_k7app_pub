<template>
  <ContWrap in-top="lg">
    <CtitleWrap size="lg">
      <ETit type="cont">
        택배예약 시 발급된 예약번호와<br>설정한 비밀번호를 입력해주세요.
      </ETit>
    </CtitleWrap>
    <ColorBox color="white" size="lg">
      <RowListWrap gap="xl">
        <li class="item-form">
          <div class="form-field">
            <div class="form-title">
              <ETit type="form">
                예약번호<span class="required"><span class="offscreen">필수입력</span></span>
              </ETit>
            </div>
            <div class="form-cont">
              <div class="form-input-group valid-check">
                <EInputBox type="number" inputmode="numeric" title="예약번호를 입력" placeholder="예약번호 입력" />
                <div class="valid-desc">
                  예약번호를 입력해주세요.
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="item-form">
          <div class="form-field">
            <div class="form-title">
              <ETit type="form">
                예약비밀번호<span class="required"><span class="offscreen">필수입력</span></span>
              </ETit>
            </div>
            <div class="form-cont">
              <div class="form-input-group valid-check">
                <EInputBox type="number" title="예약비밀번호를 입력" placeholder="예약비밀번호 입력" :max-length="8" />
                <div class="input-guide">
                  예약 시 설정한 비밀번호를 입력해주세요.
                </div>
                <div class="valid-desc">
                  예약비밀번호를 입력해주세요.
                </div>
              </div>
            </div>
          </div>
        </li>
      </RowListWrap>
    </ColorBox>
    <BtnWrap type="flex" size="md">
      <EBtn color="line-light-gray" size="lg">
        <span class="text">취소</span>
      </EBtn>
      <EBtn tag="a" color="green" size="lg" to="javascript:">
        <span class="text">조회</span>
      </EBtn>
    </BtnWrap>
  </ContWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: "택배 예약/배송 조회",
  hideRightHeader: ["home"],
});
</script>

<style lang="scss" scoped>
@import url("assets/css/pages/delivery.scss");
</style>
