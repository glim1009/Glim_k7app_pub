<template>
  <ContWrap in-top="lg">
    <ContBox size="lg">
      <CtitleWrap size="sm">
        <ETit type="cont" text="유의사항" />
      </CtitleWrap>
      <RowListWrap gap="sm">
        <li class="dot-text-sm">
          16자리의 쿠폰번호 또는 PIN 번호 입력 후 금액권 등록이 가능합니다. (등록 즉시 바로 사용 가능합니다.)
        </li>
        <li class="dot-text-sm">
          등록 완료된 모바일금액권은 마이페이지 및 쏘옥보관을 통해 해당
          모바일 금액권의 이용내역을 확인할 수 있습니다.
        </li>
      </RowListWrap>
    </ContBox>
    <ContBox size="lg">
      <ColorBox color="white" size="md">
        <div class="box-info-header">
          <CtitleWrap size="zero">
            <ETit text="고객센터 안내" type="sFold" />
          </CtitleWrap>
        </div>
        <div class="box-info-full-cont">
          <SContLineBox>
            <CtitleWrap size="zero">
              <ETit size="sm">
                <ETBtn tag="a" size="md" to="tel:1577-0711">
                  <span class="text fc-black fw-sb">콜센터 1577-0711</span>
                </ETBtn>
              </ETit>
              <div class="stext">
                APP 이용 및 매장관련문의
                <br>09:00~18:00 주말 및 공휴일 제외
              </div>
            </CtitleWrap>
          </SContLineBox>
          <SContLineBox>
            <CtitleWrap size="zero">
              <ETit size="sm">
                <ETBtn tag="a" size="md" to="tel:1522-2552">
                  <span class="text fc-black fw-sb">쿠폰사용 관련 문의 1522-2552</span>
                </ETBtn>
              </ETit>
              <div class="stext">
                롯데쇼핑 e커머스 고객센터
                <br>10:00~20:00 주말 및 공휴일 제외
              </div>
            </CtitleWrap>
          </SContLineBox>
        </div>
      </ColorBox>
    </ContBox>
  </ContWrap>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>

</style>
