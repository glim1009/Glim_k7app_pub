<template>
  <ContWrap>
    <CtitleWrap size="md">
      <ETit type="cont">
        세븐일레븐 회사 사번과 이메일을 통해
        <br>임직원 임증을 진행해 주세요.
      </ETit>
    </CtitleWrap>
    <ColorBox color="white" size="lg">
      <RowListWrap gap="xl">
        <li class="item-form">
          <div class="form-field">
            <div class="form-title">
              <ETit type="form">사번<span class="required"><span class="offscreen">필수입력</span></span></ETit>
            </div>
            <div class="form-cont">
              <EInputBox type="number" inputmode="numeric" title="사번입력" placeholder="사번입력" />
            </div>
          </div>
        </li>
        <li class="item-form">
          <div class="form-field">
            <div class="form-title">
              <ETit type="form">
                <span class="text">이메일</span><span class="required"><span class="offscreen">필수입력</span></span>
              </ETit>
            </div>
            <div class="form-cont">
              <div class="form-input-group">
                <FlexGroup>
                  <div class="flex-left">
                    <EInputBox title="이메일 입력" placeholder="이메일 입력" />
                  </div>
                  <span class="gap">@</span>
                  <div class="flex-right">
                    <div class="input-info-box">
                      <div class="unit">lotte.net</div>
                    </div>
                  </div>
                </FlexGroup>
              </div>
            </div>
          </div>
        </li>
      </RowListWrap>
    </ColorBox>
    <BtnWrap size="md">
      <EBtn color="green" size="md">
        <span class="text">임직원 등록</span>
      </EBtn>
    </BtnWrap>
  </ContWrap>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>

