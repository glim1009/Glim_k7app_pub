<template>
  <ContWrap in-top="lg">
    <ContBox size="lg">
      <CtitleWrap>
        <ETit type="cont" text="금액권 등록" />
      </CtitleWrap>
      <ColorBox color="white" size="lg">
        <div class="form-field">
          <div class="form-title">
            <div class="stext fw-md">
              선물받으신 문자 또는 지류 모바일 금액권의
              <br><span class="fc-red fw-md">16자리 쿠폰번호 또는 PIN 번호</span>를 입력 후 금액권을
              등록해주세요.
            </div>
          </div>
          <div class="form-cont">
            <div class="form-input-group">
              <EInputBox type="number" title="16자리 쿠폰번호/PIN 번호" placeholder="16자리 쿠폰번호 / PIN 번호 입력">
                <EBtn color="green" size="xs">
                  <span class="text">등록</span>
                </EBtn>
              </EInputBox>
            </div>
          </div>
        </div>
      </ColorBox>
    </ContBox>
    <ContBox size="lg">
      <CtitleWrap size="sm">
        <ETit type="cont" text="유의사항" />
      </CtitleWrap>
      <RowListWrap gap="sm">
        <li class="dot-text-sm">
          16자리의 쿠폰번호 또는 PIN 번호 입력 후 금액권 등록이 가능합니다. (등록 즉시 바로 사용 가능합니다.)
        </li>
        <li class="dot-text-sm">
          등록 완료된 모바일금액권은 마이페이지 및 쏘옥보관을 통해 해당 모바일 금액권의 이용내역을 확인할 수 있습니다.
        </li>
      </RowListWrap>
    </ContBox>
  </ContWrap>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>

</style>
