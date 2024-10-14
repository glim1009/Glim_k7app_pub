<template>
  <ContWrap v-if="isMember" type="white" class="not-navbar">
    <InfoGuideWrap
      in-top="zero"
      type="info-guide"
      name="delivery"
      desc="택배 예약이 완료되었습니다."
      sub-desc="예약현황에서 예약하신 내역을 확인하실 수 있습니다."
    />
    <BtnWrap type="full" size="xl">
      <EBtn tag="a" color="line-green" size="md" to="/delivery/situation">
        <span class="text">예약현황</span>
      </EBtn>
    </BtnWrap>
  </ContWrap>
  <ContWrap v-if="isNonMember" type="white" in-top="zero" class="not-navbar">
    <InfoGuideWrap
      in-top="zero"
      type="info-guide"
      name="delivery"
      desc="택배 예약이 완료되었습니다."
      sub-desc="아래 예약번호를 꼭 기억해주세요.<br/>예약내역 관리 및 배송조회 시 사용됩니다."
    />
    <ContBox size="lg">
      <ColorBox color="light-gray" size="md" class="ta-center">
        <div class="align-group">
          <span class="stext-lg-gray90">예약번호 : <span ref="copyTextRef" class="copy-text">68429106806</span></span>
          <EBtn color="line-light-gray" size="xs" @click="copyText">
            <span class="text">복사</span>
          </EBtn>
        </div>
      </ColorBox>
      <BtnWrap type="full" size="sm">
        <EBtn tag="a" color="line-green" size="md" to="/delivery/non-member">
          <span class="text">비회원 예약 및 배송조회</span>
        </EBtn>
      </BtnWrap>
    </ContBox>
  </ContWrap>
</template>

<script setup lang="ts">
import { ref } from "vue";

definePageMeta({
  title: "착한 택배예약",
  hideRightHeader: ["chat", "search", "cart"],
});

const isMember = ref(true);
const isNonMember = ref(true);

const { $showToast } = useNuxtApp();

const copyTextRef = ref<HTMLElement | null>(null);

function copyText() {
  if (copyTextRef.value) {
    const textCode = copyTextRef.value.textContent;
    window.navigator.clipboard.writeText(textCode).then(() => {
      $showToast({ msg: "예약번호가 복사되었습니다." });
    });
  }
}
</script>

<style lang="scss" scoped>
@import url("assets/css/pages/delivery.scss");
</style>
