<template>
  <ContWrap>
    <ContBox size="lg">
      <CtitleWrap>
        <ETit tpye="cont">
          교환권/금액권 사용시 아래 등록하신 번호로
          <br>소득공제를 받으실 수 있습니다.
        </ETit>
      </CtitleWrap>
      <ColorBox color="white" size="lg">
        <RowListWrap gap="xl">
          <li class="item-form">
            <div class="form-field">
              <div class="form-title">
                <CtitleWrap size="md">
                  <ETit type="form" text="현금영수증 신청" />
                </CtitleWrap>
              </div>
              <div class="form-cont">
                <RowListWrap>
                  <li class="item">
                    <span class="ui-rdo">
                      <input id="receiptRdo01" v-model="receiptRadio" type="radio" name="receiptRdo01" value="phone" />
                      <label for="receiptRdo01"><span class="text-md fw-md">휴대폰번호</span></label>
                    </span>
                  </li>
                  <li class="item">
                    <span class="ui-rdo">
                      <input id="receiptRdo02" v-model="receiptRadio" type="radio" name="receiptRdo02" value="business" />
                      <label for="receiptRdo02"><span class="text-md fw-md">사업자등록번호</span></label>
                    </span>
                  </li>
                  <li class="item">
                    <span class="ui-rdo">
                      <input id="receiptRdo03" v-model="receiptRadio" type="radio" name="receiptRdo03" value="none" />
                      <label for="receiptRdo03"><span class="text-md fw-md">등록안함</span></label>
                    </span>
                  </li>
                </RowListWrap>
              </div>
            </div>
          </li>
          <li class="item-form" v-show="receiptRadio === 'phone'">
            <div class="form-field">
              <div class="form-title">
                <ETit type="form" text="휴대폰번호"/>
              </div>
              <div class="form-cont">
                <div class="form-input-group valid-check">
                  <EInputBox title="휴대폰번호 입력" type="number" inputmode="tel" placeholder="휴대폰번호 입력" :max-length="11" />
                  <div class="input-guide">
                    휴대폰번호를 정확하게 입력해 주세요.
                  </div>
                  <div class="valid-desc">
                    10자리 이내 휴대폰번호를 입력해 주세요.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="item-form" v-show="receiptRadio === 'business'">
            <div class="form-field">
              <div class="form-title">
                <ETit type="form" text="사업자등록번호"/>
              </div>
              <div class="form-cont">
                <div class="form-input-group valid-check">
                  <EInputBox title="사업자등록번호 입력" type="number" inputmode="numeric" placeholder="사업자등록번호 입력" :max-length="10" />
                  <div class="input-guide">
                    사업자등록번호를 정확하게 입력해 주세요.
                  </div>
                  <div class="valid-desc">
                    10자리 이내 사업자등록번호를 입력해 주세요.
                  </div>
                </div>
              </div>
            </div>
          </li>
        </RowListWrap>
      </ColorBox>
    </ContBox>
    <ContBox size="lg">
      <CtitleWrap size="sm">
        <ETit type="cont" text="유의사항" />
      </CtitleWrap>
      <RowListWrap gap="sm">
        <li class="dot-text-sm">소득공제는 휴대폰번호 또는 사업자등록번호를 저장한 이후부터 적용이 됩니다.</li>
        <li class="dot-text-sm">휴대폰번호 및 사업자등록번호를 잘못 기입하실 경우 소득공제를 받을 수 없으며 정상적인 정보 수정 후 소득공제가 가능합니다.</li>
      </RowListWrap>
    </ContBox>
  </ContWrap>
  <ContDocker>
    <BtnWrap>
      <EBtn color="green" size="lg">
        <span class="text">저장</span>
      </EBtn>
    </BtnWrap>
  </ContDocker>
</template>

<script setup lang="ts">
definePageMeta({
  title: "현금영수증 번호 관리",
  hideRightHeader: ["search", "cart"],
});

const receiptRadio = ref();
</script>

<style lang="scss" scoped>
@import "assets/css/pages/my.scss";
</style>
