<template>
  <ContWrap type="white" class="side-zero" in-top="zero" in-bottom="zero">
    <div class="event-title-visual">
      <img src="/assets/images/temp/temp_stamp_visual.png" alt="스탬프 상단 이미지" />
    </div>
    <!-- DESC :: 스탬프 컬럼 수에 따라 col-3~col-7 -->
    <div class="stamp-wrap col-7" style="background-image: url('/assets/images/temp/temp_stamp_line_bg_col7.jpg')">
      <div class="stamp-box">
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp 완료" src="/assets/images/event/ico_stamp_def_on.png" />
        </div>
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp 완료" src="/assets/images/event/ico_stamp_def_on.png" />
        </div>
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp 완료" src="/assets/images/event/ico_stamp_def_on.png" />
        </div>
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp 완료" src="/assets/images/event/ico_stamp_def_on.png" />
        </div>
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp 완료" src="/assets/images/event/ico_stamp_def_on.png" />
        </div>
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp 완료" src="/assets/images/event/ico_stamp_def_on.png" />
        </div>
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp 보상 완료" src="/assets/images/event/ico_stamp_def_gift_on.png" />
        </div>
      </div>
      <div class="stamp-box">
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp" src="/assets/images/event/ico_stamp_def.png" />
        </div>
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp" src="/assets/images/event/ico_stamp_def.png" />
        </div>
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp" src="/assets/images/event/ico_stamp_def.png" />
        </div>
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp" src="/assets/images/event/ico_stamp_def.png" />
        </div>
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp" src="/assets/images/event/ico_stamp_def.png" />
        </div>
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp" src="/assets/images/event/ico_stamp_def.png" />
        </div>
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp 보상" src="/assets/images/event/ico_stamp_def_gift.png" />
        </div>
      </div>
      <div class="stamp-box">
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp" src="/assets/images/event/ico_stamp_def.png" />
        </div>
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp" src="/assets/images/event/ico_stamp_def.png" />
        </div>
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp" src="/assets/images/event/ico_stamp_def.png" />
        </div>
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp" src="/assets/images/event/ico_stamp_def.png" />
        </div>
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp" src="/assets/images/event/ico_stamp_def.png" />
        </div>
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp" src="/assets/images/event/ico_stamp_def.png" />
        </div>
        <div class="item-stamp">
          <img class="ico-stamp" alt="stamp 보상" src="/assets/images/event/ico_stamp_def_gift.png" />
        </div>
      </div>
    </div>
    <div class="stamp-footer">
      <img src="/assets/images/temp/temp_stamp_footer.png" alt="스탬프 하단 이미지" />
    </div>
  </ContWrap>
  <ContWrap type="white" class="not-navbar">
    <ContBox size="sm">
      <div class="editor-wrap">
        <!-- 개발 시 삭제 영역 -->
        <div style="height: 108px; background: rgba(255, 0, 0, .1);">
          에디터영역 확인을 위한 임시 div입니다.<br />
          개발시 해당 div 삭제 후 작업해 주세요.
        </div>
        <!-- // 개발 시 삭제 영역 -->
      </div>
    </ContBox>
    <ContBox size="sm">
      <FlexGroup>
        <div class="flex-left">
          <span class="ui-chk">
            <input id="agreeChk02" type="checkbox" />
            <label for="agreeChk02"><span class="text-md">개인정보 수집 및 이용동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
          </span>
        </div>
        <div class="flex-right">
          <ETBtn size="xs" @click="openPersonalInfoAgree">
            <span class="text">상세보기</span>
            <EIco name="arw-right" color="gray" size="xs" />
          </ETBtn>
        </div>
      </FlexGroup>
    </ContBox>
  </ContWrap>
  <!-- DESC :: 진행중 이벤트가 아닌 경우 [ContDocker] 노출 필요 -->
  <ContDocker>
    <!-- 하단 docker CASE 01 : 이벤트 시작 전 -->
    <div class="cont-docker-info">
      <EIco name="alert" color="green" />
      <div class="stext-lg-black">
        이벤트 진행기간이 아닙니다.
      </div>
    </div>
    <!-- // 하단 docker CASE 01 : 이벤트 시작 전 -->
    <!-- 하단 docker CASE 02 : 이벤트 조기 종료 -->
    <!-- <div class="cont-docker-info">
      <EIco name="alert" color="green" />
      <div class="stext-lg-black">
        조기 종료된 이벤트 입니다.
      </div>
    </div> -->
    <!-- // 하단 docker CASE 02 : 이벤트 조기 종료 -->
    <!-- 하단 docker CASE 03 : 이벤트 종료 -->
    <!-- <div class="cont-docker-info">
        <EIco name="alert" color="green" />
        <div class="stext-lg-black">
          종료된 이벤트 입니다.
        </div>
      </div> -->
    <!-- // 하단 docker CASE 03 : 이벤트 종료 -->
  </ContDocker>

  <!-- pop : 개인정보 수집 및 이용약관 -->
  <PopTermsPersonalInfoAgree v-model:sta="popPersonalInfoAgree" />
  <!-- // pop : 개인정보 수집 및 이용약관 -->
</template>

<script setup lang="ts">
// 개인정보 수집 및 이용약관 팝업
const popPersonalInfoAgree = ref({ open: false });
const openPersonalInfoAgree = () => popPersonalInfoAgree.value.open = true;

// 행운의 룰렛 팝업
const popLuckyRoulette = ref({ open: false });
const openLuckyRoulette = () => popLuckyRoulette.value.open = true;
</script>

<style lang="scss" scoped>
@import url('@/assets/css/pages/event.scss');
</style>
