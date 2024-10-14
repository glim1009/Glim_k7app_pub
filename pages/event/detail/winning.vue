<template>
  <ContWrap type="white" in-top="lg" class="detail-tf-line not-navbar">
    <ContBox size="lg">
      <CtitleWrap size="sm">
        <div class="ctitle-sm">
          응모결과 조회
        </div>
      </CtitleWrap>
      <ColorBox color="light-green" size="sm" class="ta-center">
        <div class="align-group">
          <EIco name="alert" color="green" />
          <span class="stext-lg fw-sb fc-spot">응모결과를 조회해 주세요.</span>
        </div>
      </ColorBox>
    </ContBox>
    <BtnWrap size="sm">
      <!-- CASE 01 : 로그인 전 -->
      <!-- <EBtn tag="a" size="md" color="green" to="javascript:">
        <span class="text">응모결과 조회</span>
      </EBtn> -->
      <!-- //CASE 01 : 로그인 전 -->

      <!-- CASE 02 : 로그인 후 -->
      <EBtn size="md" color="green" @click="openWinResult">
        <span class="text">응모결과 조회</span>
      </EBtn>
      <!-- // CASE 02 : 로그인 후 -->
    </BtnWrap>
    <ContBox size="lg">
      <div class="editor-wrap">
        <!-- 개발 시 삭제 영역 -->
        <div style="height: 108px; background: rgba(255, 0, 0, .1);">
          에디터영역 확인을 위한 임시 div입니다.<br>
          개발시 해당 div 삭제 후 작업해 주세요.
        </div>
        <!-- // 개발 시 삭제 영역 -->
      </div>
    </ContBox>
  </ContWrap>
  <!-- pop : 행운의 룰렛 -->
  <!-- DESC :: 당첨 결과 여부에 따라 사용 필요
       - is-gift: 경품 당첨
       - is-boom: 꽝
  -->
  <PopEventWinResult v-model:sta="popWinResult" />
  <!-- // pop : 행운의 룰렛 -->
</template>

<script setup lang="ts">
definePageMeta({
  hideRightHeader: ["chat"],
});

// 당첨 결과 팝업
const popWinResult = ref({ open: false });
const openWinResult = () => popWinResult.value.open = true;
</script>

<style lang="scss" scoped>
@import url('@/assets/css/pages/event.scss');
</style>
