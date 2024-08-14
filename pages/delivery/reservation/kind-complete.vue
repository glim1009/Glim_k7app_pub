<template>
  <ContWrap v-if="isMember" type="white" in-top="zero">
    <InfoGuideWrap
      type="info-guide"
      name="temp"
      desc="택배 예약이 완료되었습니다."
      sub-desc="예약현황에서 예약하신 내역을 확인하실 수 있습니다."
    />
    <BtnWrap type="full" size="lg">
      <EBtn tag="a" color="line-green" size="md" to="to">
        <span class="text">예약현황</span>
      </EBtn>
    </BtnWrap>
  </ContWrap>
  <ContWrap v-if="isNonMember" type="white" in-top="zero">
    <InfoGuideWrap
      type="info-guide"
      name="temp"
      desc="택배 예약이 완료되었습니다."
      sub-desc="아래 예약번호를 꼭 기억해주세요.<br/>예약내역 관리 및 배송조회 시 사용됩니다."
    />
    <RowListWrap size="lg">
      <ColorBox color="light-gray" size="lg">
        <div class="text-align-box">
          <span class="stext-lg">예약번호 : 68429106806</span>
          <EBtn color="line-light-gray" size="xs">
            <span class="text">복사</span>
          </EBtn>
        </div>
      </ColorBox>
    </RowListWrap>
    <BtnWrap type="full" size="sm">
      <EBtn tag="a" color="line-green" size="md" to="to">
        <span class="text">비회원 예약 및 배송조회</span>
      </EBtn>
    </BtnWrap>
  </ContWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: '착한 택배예약',
  hideRightHeader: ['home'],
});

const isMember = ref(true);
const isNonMember = ref(true);
</script>

<style lang="scss" scoped>
@import url("assets/css/pages/delivery.scss");
</style>
