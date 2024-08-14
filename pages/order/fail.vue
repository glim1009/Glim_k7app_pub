<template>
  <ContWrap type="white" in-top="zero">
    <InfoGuideWrap
      type="info-guide"
      name="temp"
      desc="결제를 실패하였습니다."
      sub-desc="주문하신 상품의 결제가 다음과 같은 사유로<br />정상적으로 진행되지 않았습니다."
    />
    <ColorBox color="light-gray" class="ta-center">
      <div class="stext-lg">
        실패사유: <span class="fc-red">카드사 통신 오류</span>
      </div>
    </ColorBox>
    <BtnWrap type="flex" size="xl">
      <EBtn tag="a" color="line-light-gray" size="md" to="/">
        <span class="text">메인화면</span>
      </EBtn>
      <EBtn tag="a" color="line-green" size="md" to="/cart">
        <span class="text">다시 주문하기</span>
      </EBtn>
    </BtnWrap>
  </ContWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: '주문실패',
  hideRightHeader: ['chat', 'search', 'cart'],
});
</script>

<style lang="scss" scoped>
@import url("assets/css/pages/order.scss");
</style>
