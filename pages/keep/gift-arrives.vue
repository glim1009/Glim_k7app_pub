<template>
  <ContWrap type="white">
    <InfoGuideWrap
      in-top="zero"
      type="info-guide"
      name="gift"
      desc="선물이 도착했어요"
      sub-desc="<span class='fw-sb fc-black'>키다리아저씨</span>님께서 선물을 보냈습니다."
    />
  </ContWrap>
  <ContWrap in-top="lg">
    <ContBox>
      <CtitleWrap>
        <ETit type="cont" text="보낸 선물" />
      </CtitleWrap>
      <ColorBox color="white" size="lg">
        <!-- thumb-prod-flex -->
        <div class="thumb-prod-flex">
          <EThumbProdBox size="lg">
            <template #thumb>
              <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지"/>
            </template>
          </EThumbProdBox>
          <div class="info-box">
            <BadgeGroup>
              <EBadge size="md" color="light-green" badge-text="+1증정" />
            </BadgeGroup>
            <ETit type="prod">제육&콘 참치마요 덮밥</ETit>
            <div class="stext">선물 수량 : 1개</div>
          </div>
        </div>
        <!-- // thumb-prod-flex -->
      </ColorBox>
    </ContBox>
  </ContWrap>
  <ContDocker>
    <BtnWrap>
      <EBtn tag="a" color="line-light-gray" size="lg" to="javascript:">
        <span class="text">거절하기</span>
      </EBtn>
      <EBtn tag="a" color="green" size="lg" to="javascript:">
        <span class="text">수락하기</span>
      </EBtn>
    </BtnWrap>
  </ContDocker>
</template>

<script setup lang="ts">
definePageMeta({
  title: "선물도착",
  hideRightHeader: false,
  notBack: true,
});
</script>

<style lang="scss" scoped>

</style>
