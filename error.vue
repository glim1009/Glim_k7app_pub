<template>
  <ContWrap type="white">
    <ContBox v-if="error.statusCode === 404">
      <InfoGuideWrap
        type="no-data"
        name="alert"
        desc="죄송합니다.<br />페이지를 찾을 수 없습니다."
        sub-desc="요청하신 페이지가 존재하지 않거나<br />사용할 수 없는 페이지입니다.<br />경로가 맞는지 다시 한 번 확인해 주세요."
      />
      <BtnWrap size="xl">
        <EBtn tag="a" color="line-light-gray" size="md" to="javascript:">
          <span class="text">이전페이지로 이동</span>
        </EBtn>
        <EBtn color="line-light-gray" size="md" @click="clearError({ redirect: '/' })">
          <span class="text">메인으로 이동</span>
        </EBtn>
      </BtnWrap>
    </ContBox>
    <ContBox v-if="error.statusCode === 500">
      <InfoGuideWrap
        type="no-data"
        name="alert"
        desc="죄송합니다.<br />오류가 발생하였습니다."
        sub-desc="서비스 이용에 불편을 드려 죄송합니다.<br />잠시 후 다시 접속을 시도해 주세요."
      />
      <BtnWrap size="xl">
        <EBtn tag="a" color="line-light-gray" size="md" to="javascript:">
          <span class="text">이전페이지로 이동</span>
        </EBtn>
        <EBtn color="line-light-gray" size="md" @click="clearError({ redirect: '/' })">
          <span class="text">메인으로 이동</span>
        </EBtn>
      </BtnWrap>
    </ContBox>
  </ContWrap>
</template>

<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    default: null,
  },
});
</script>

<style lang="scss" scoped>

</style>
