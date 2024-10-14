<template>
  <ContWrap type="white">
    <ContBox>
      <CtitleWrap size="lg">
        <ETit type="lgCont">
          김세븐님 회원탈퇴 전 유의사항을
          <br>확인해주세요.
        </ETit>
      </CtitleWrap>

      <!-- 회원탈퇴 가능 -->
      <MySecessionPossible v-if="isPossible" />
      <!-- // 회원탈퇴 가능 -->

      <!-- 회원탈퇴 불가 -->
      <MySecessionImpossible v-if="isPossible" />
      <!-- 회원탈퇴 불가 -->
    </ContBox>
  </ContWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: "회원 탈퇴 안내",
});
const isPossible = ref(true); // 임시 : 탈퇴 가능 여부에 따른 컨텐츠 확인을 위해 추가
</script>

<style lang="scss" scoped>
@import url('/assets/css/pages/my.scss');
</style>
