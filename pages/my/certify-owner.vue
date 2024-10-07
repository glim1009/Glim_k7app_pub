<template>
  <ContWrap>
    <ContBox size="md">
      <CtitleWrap size="md">
        <ETit type="cont">
          점포코드와 본인 휴대폰 번호를 통해
          <br>경영주 인증을 진행해 주세요.
        </ETit>
      </CtitleWrap>
      <ColorBox color="white" size="lg">
        <RowListWrap gap="xl">
          <li class="item-form">
            <div class="form-field">
              <div class="form-title">
                <ETit type="form">
                  점포코드<span class="required"><span class="offscreen">필수입력</span></span>
                </ETit>
              </div>
              <div class="form-cont">
                <div class="form-input-group valid-check">
                  <EInputBox title="점포코드 입력" placeholder="점포코드 입력" />
                  <p class="valid-desc">
                    점포코드를 입력해 주세요.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="item-form">
            <div class="form-field">
              <div class="form-title">
                <ETit type="form">
                  휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                </ETit>
              </div>
              <div class="form-cont">
                <div class="form-input-group valid-check">
                  <EInputBox title="휴대폰번호 입력" type="number" inputmode="tel" placeholder="휴대폰번호 입력" />
                  <p class="valid-desc">
                    휴대폰 번호를 정확하게 입력해 주세요.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </RowListWrap>
      </ColorBox>
    </ContBox>
    <ContBox size="md">
      <CtitleWrap size="sm">
        <ETit type="cont" text="유의사항" />
      </CtitleWrap>
      <RowListWrap gap="sm">
        <li class="dot-text-sm">
          휴대폰 번호가 미등록된 경영주께서는 점포 관리자에게 문의해 주시기 바랍니다.
        </li>
      </RowListWrap>
    </ContBox>
    <BtnWrap size="md">
      <EBtn color="green" size="md">
        <span class="text">경영주 등록</span>
      </EBtn>
    </BtnWrap>
  </ContWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: "경영주 인증",
  hideRightHeader: ["home"],
});
</script>

<style lang="scss" scoped>

</style>
