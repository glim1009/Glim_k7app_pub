<template>
  <ContWrap type="white" class="side-zero" in-top="zero" in-bottom="zero">
    <div class="event-banner-wrap">
      <img src="/assets/images/temp/temp_attendance_check_banner.png" alt="배너 내용" />
    </div>
    <div class="event-title-visual">
      <img src="/assets/images/event/bg_attendance_calendar_visual.png" alt="타이틀 비주얼 내용" />
    </div>
    <!-- calendar-wrap -->
    <div class="calendar-wrap">
      <div class="calendar-body">
        <img src="/assets/images/event/bg_attendance_calendar_body.png" alt="9월" />
        <div class="tbl-calendar">
          <table>
            <colgroup>
              <col style="width: auto;" />
              <col style="width: auto;" />
              <col style="width: auto;" />
              <col style="width: auto;" />
              <col style="width: auto;" />
              <col style="width: auto;" />
              <col style="width: 11.1475409836%;" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">
                  일
                </th>
                <th scope="col">
                  월
                </th>
                <th scope="col">
                  화
                </th>
                <th scope="col">
                  수
                </th>
                <th scope="col">
                  목
                </th>
                <th scope="col">
                  금
                </th>
                <th scope="col">
                  토
                </th>
              </tr>
            </thead>
            <!--
              DESC :: ico-stamp 멀티클래스 설명
              - 완료 스탬프 : comp
              - 쿠폰데이: coupon-day
              - 쿠폰데이 완료 : coupon-day comp
            -->
            <tbody>
              <tr>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp coupon-day comp"></span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp comp"></span>
                </td>
                <td>
                  <span class="ico-stamp comp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp comp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="ico-stamp comp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp comp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp coupon-day"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
                <td>
                  <span class="ico-stamp"></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- CASE 01 : 로그인 전 -->
      <!--<NuxtLink class="btn-attendance-check" to="/member">
        <img src="/assets/images/event/bg_attendance_calendar_btn.png" alt="출석체크" />
      </NuxtLink>-->
      <!-- // CASE 01 : 로그인 전 -->

      <!-- CASE 02 : 로그인 후 -->
      <button type="button" class="btn-attendance-check" @click="openWinResult">
        <img src="/assets/images/event/bg_attendance_calendar_btn.png" alt="출석체크" />
      </button>
      <!-- // CASE 02 : 로그인 후 -->
    </div>
    <!-- // calendar-wrap -->
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
      <!-- 약관 동의 CASE 01 : 단일일 경우 -->
      <FlexGroup>
        <div class="flex-left">
          <span class="ui-chk">
            <input id="agreeChk01" type="checkbox" />
            <label for="agreeChk01"><span class="text-md">개인정보 수집 및 이용동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
          </span>
        </div>
        <div class="flex-right">
          <ETBtn size="xs" @click="openBoTitleTerms">
            <span class="text">상세보기</span>
            <EIco name="arw-right" color="gray" size="xs" />
          </ETBtn>
        </div>
      </FlexGroup>
      <!-- // 약관 동의 CASE 01 : 단일일 경우 -->

      <!-- 약관 동의 CASE 02 : 복수일 경우 -->
      <AllAgreeWrap v-model:checkCount="checkCheckBox" :index="1" :total-count="totalCheckBox">
        <ColorBox color="light-gray" size="md">
          <div ref="agreeListRef">
            <RowListWrap>
              <li class="ui-col-item">
                <FlexGroup>
                  <div class="flex-left">
                    <span class="ui-chk">
                      <input id="agreeChk02" type="checkbox" />
                      <label for="agreeChk02"><span class="text-md">개인정보 수집 및 이용동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
                    </span>
                  </div>
                  <div class="flex-right">
                    <ETBtn size="xs" @click="openBoTitleTerms">
                      <span class="text">상세보기</span>
                      <EIco name="arw-right" color="gray" size="xs" />
                    </ETBtn>
                  </div>
                </FlexGroup>
              </li>
              <li class="ui-col-item">
                <FlexGroup>
                  <div class="flex-left">
                    <span class="ui-chk">
                      <input id="agreeChk03" type="checkbox" />
                      <label for="agreeChk03"><span class="text-md">이벤트 참여 문자 및 이메일 마케팅 정...</span></label>
                    </span>
                  </div>
                  <div class="flex-right">
                    <ETBtn size="xs" @click="openBoTitleTerms">
                      <span class="text">상세보기</span>
                      <EIco name="arw-right" color="gray" size="xs" />
                    </ETBtn>
                  </div>
                </FlexGroup>
              </li>
            </RowListWrap>
          </div>
        </ColorBox>
      </AllAgreeWrap>
      <!-- // 약관 동의 CASE 02 : 복수일 경우 -->

      <BtnWrap type="full" size="lg">
        <EBtn color="green">
          <span class="text">참여하기</span>
        </EBtn>
      </BtnWrap>
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

  <!-- pop : (공통) 약관 -->
  <PopTermsBoTitleTerms v-model:sta="popBoTitleTerms" :pop-title="`팝업 타이틀 BO 관리`" />
  <!-- // pop : (공통) 약관 -->

  <!-- pop : 행운의 룰렛 -->
  <!-- DESC :: 당첨 결과 여부에 따라 사용 필요
       - is-point: 포인트 당첨
       - is-gift: 경품 당첨
       - is-boom: 꽝
  -->
  <PopEventWinResult v-model:sta="popWinResult" is-point />
  <!-- // pop : 행운의 룰렛 -->
</template>

<script setup lang="ts">
// (공통) 약관 팝업
const popBoTitleTerms = ref({ open: false });
const openBoTitleTerms = () => popBoTitleTerms.value.open = true;

// 당첨 결과 팝업
const popWinResult = ref({ open: false });
const openWinResult = () => popWinResult.value.open = true;

// 전체동의
const agreeListRef = ref<HTMLInputElement | null>(null);
const totalCheckBox = ref<number>(0);
const checkCheckBox = ref<number>(0);
let checkboxes: NodeListOf<HTMLInputElement>;

function updateCheckCount(): void {
  checkCheckBox.value = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
}

watch(() => checkCheckBox.value, (newValue) => {
  totalCheckBox.value = checkboxes.length;
  if (newValue === totalCheckBox.value) {
    checkboxes.forEach(checkbox => checkbox.checked = true);
  } else if (newValue === 0) {
    checkboxes.forEach(checkbox => checkbox.checked = false);
  }
  updateCheckCount();
});

watch(() => agreeListRef.value, (newValue) => {
  if (!newValue)
    return;
  checkboxes = newValue.querySelectorAll<HTMLInputElement>("input[type=\"checkbox\"]");
  totalCheckBox.value = checkboxes.length;
  checkboxes.forEach((checkbox) => {
    checkbox.removeEventListener("change", updateCheckCount);
    checkbox.addEventListener("change", updateCheckCount);
  });

  updateCheckCount();
});
</script>

<style lang="scss" scoped>
@import url('@/assets/css/pages/event.scss');
</style>
