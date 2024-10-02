<template>
  <ContWrap type="white" in-top="lg" class="detail-tf-line not-navbar">
    <ContBox size="lg">
      <CtitleWrap size="sm">
        <div class="ctitle-sm">
          응모결과 조회
        </div>
      </CtitleWrap>
      <ColorBox color="light-green" size="sm" class="ta-center">
        <EIco name="alert" color="green" />
        <span class="stext-lg fw-sb fc-spot">
          응모결과를 조회해 주세요.
        </span>
      </ColorBox>
    </ContBox>
    <BtnWrap size="sm">
      <!-- CASE 01 : 로그인 전 -->
      <!-- <EBtn tag="a" size="md" color="green" to="javascript:">
        <span class="text">응모결과 조회</span>
      </EBtn> -->
      <!-- //CASE 01 : 로그인 전 -->

      <!-- CASE 02 : 로그인 후 -->
      <EBtn size="md" color="green">
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
</template>

<script setup lang="ts">
definePageMeta({
  hideRightHeader: ["chat"],
});
</script>

<style lang="scss" scoped>
@import url('@/assets/css/pages/event.scss');
</style>
