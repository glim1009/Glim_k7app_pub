<template>
  <ContWrap type="white" in-top="zero">
    <ContBox v-if="isNoStock">
      <InfoGuideWrap
        type="no-data"
        name="alert"
        desc="재고가 부족합니다."
        sub-desc="주문하신 상품의 재고가 부족하여 주문을 완료하지 못했습니다. 장바구니 이동 후 매장의 재고를 확인해주세요."
      />
      <BtnWrap type="flex" size="xl">
        <EBtn tag="a" color="line-light-gray" size="md" to="/">
          <span class="text">메인화면</span>
        </EBtn>
        <EBtn tag="a" color="line-green" size="md" to="javascript:">
          <span class="text">다시 주문하기</span>
        </EBtn>
      </BtnWrap>
    </ContBox>
    <ContBox v-if="isSoldOut">
      <InfoGuideWrap
        type="no-data"
        name="alert"
        desc="준비한 상품이 모두 소진되었습니다."
        sub-desc="준비한 상품의 재고가 부족하여 주문을 완료하지 못했습니다. 다음 기회를 활용해 주세요."
      />
      <BtnWrap type="flex" size="xl">
        <EBtn tag="a" color="line-light-gray" size="md" to="/">
          <span class="text">메인화면</span>
        </EBtn>
        <EBtn tag="a" color="line-green" size="md" to="javascript:">
          <span class="text">다시 주문하기</span>
        </EBtn>
      </BtnWrap>
    </ContBox>
    <ContBox v-if="isPayFail">
      <InfoGuideWrap
        type="no-data"
        name="alert"
        desc="결제를 실패하였습니다."
        sub-desc="주문하신 상품의 결제가 다음과 같은 사유로<br />정상적으로 진행되지 않았습니다."
      />
      <ContBox size="lg">
        <ColorBox color="light-gray" class="ta-center">
          <div class="align-group">
            <div class="stext-lg fw-sb fc-gray90">
              실패사유
            </div>
            <div class="stext-lg fc-red">
              카드사 통신 오류
            </div>
          </div>
        </ColorBox>
        <BtnWrap size="sm">
          <EBtn tag="a" color="line-light-gray" size="md" to="/">
            <span class="text">메인화면</span>
          </EBtn>
          <EBtn tag="a" color="line-green" size="md" to="javascript:">
            <span class="text">다시 주문하기</span>
          </EBtn>
        </BtnWrap>
      </ContBox>
    </ContBox>
  </ContWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: '주문실패',
  hideRightHeader: ['chat', 'search', 'cart'],
});
const isNoStock = ref(true);
const isSoldOut = ref(true);
const isPayFail = ref(true);
</script>

<style lang="scss" scoped>
@import url("assets/css/pages/order.scss");
</style>
