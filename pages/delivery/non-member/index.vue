<template>
  <ContWrap in-top="lg">
    <RowListWrap gap="xl">
      <li class="item">
        <div class="ctitle">택배예약 시 발급된 예약번호와<br>설정한 비밀번호를 입력해주세요.</div>
      </li>
      <li class="item">
        <ColorBox color="white" size="lg">
          <RowListWrap gap="xl">
            <li class="item-form">
              <div class="form-field">
                <div class="form-title">
                  <div class="ctitle-xs">예약번호<span class="required"><span class="offscreen">필수입력</span></span></div>
                </div>
                <div class="form-cont">
                  <EInputBox type="number" inputmode="numeric" title="예약번호 입력" placeholder="예약번호를 입력해주세요." />
                </div>
              </div>
            </li>
            <li class="item-form">
              <div class="form-field">
                <div class="form-title">
                  <div class="ctitle-xs">예약비밀번호<span class="required"><span class="offscreen">필수입력</span></span></div>
                </div>
                <div class="form-cont">
                  <div class="form-input-group">
                    <EInputBox type="text" inputmode="numeric" title="예약비밀번호 입력" placeholder="예약비밀번호를 입력해주세요." maxlength="8" />
                    <div class="input-guide">예약 시 설정한 비밀번호를 입력해주세요.</div>
                  </div>
                </div>
              </div>
            </li>
          </RowListWrap>
        </ColorBox>
      </li>
    </RowListWrap>
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
  layout: 'no-docker',
  title: '택배 예약/배송 조회',
  hideRightHeader: ['home'],
});

</script>


<style lang="scss" scoped>
@import url("assets/css/pages/delivery/delivery.scss");
</style>
