<template>
  <ContWrap type="white" class="side-zero" in-top="zero" in-bottom="zero">
    <div class="event-banner-wrap">
      <img src="/assets/images/temp/temp_attendance_check_banner.png" alt="배너 내용" />
    </div>
    <!-- roulette-container -->
    <div class="roulette-container">
      <div class="event-title-visual">
        <img src="/assets/images/event/bg_attendance_roulette_title_visual.png" alt="타이틀 비주얼 내용" />
      </div>
      <!-- roulette-wrap -->
      <div class="roulette-wrap">
        <div class="roulette-wheel-box">
          <div ref="rouletteWheel" class="roulette-wheel-box-inner">
            <div class="roulette-wheel-bg">
              <!-- DESC :: 룰렛 분할 갯수에 따라 판 이미지 bg_attendance_roulette_wheel_2 ~ bg_attendance_roulette_wheel_8 처리 필요 -->
              <img src="/assets/images/event/bg_attendance_roulette_wheel_5.png" alt="룰렛 판" />
            </div>
            <!-- DESC :: 룰렛 분할 갯수에 따라 total-2 ~ total-8 처리 필요 -->
            <ul class="roulette-list total-5">
              <!-- repeat || 상품 -->
              <li class="item-roulette">
                <div class="thumb-box">
                  <img src="/assets/images/event/ico_roulette_prod.png" alt="상품" />
                </div>
              </li>
              <!-- // repeat || 상품 -->
              <!-- repeat || 꽝  -->
              <li class="item-roulette">
                <div class="thumb-box">
                  <img src="/assets/images/event/ico_roulette_bang.png" alt="꽝" />
                </div>
              </li>
              <!-- // repeat || 꽝 -->
              <!-- repeat || 쿠폰 -->
              <li class="item-roulette">
                <div class="thumb-box">
                  <img src="/assets/images/event/ico_roulette_coupon.png" alt="쿠폰" />
                </div>
              </li>
              <!-- // repeat || 쿠폰 -->
              <!-- repeat || 포인트 -->
              <li class="item-roulette">
                <div class="thumb-box">
                  <img src="/assets/images/event/ico_roulette_point.png" alt="포인트" />
                </div>
              </li>
              <!-- // repeat || 포인트 -->
              <!-- repeat || 꽝  -->
              <li class="item-roulette">
                <div class="thumb-box">
                  <img src="/assets/images/event/ico_roulette_bang.png" alt="꽝" />
                </div>
              </li>
              <!-- // repeat || 꽝 -->
            </ul>
          </div>
          <span class="roulette-pin"></span>
        </div>
        <!-- DESC :: 당첨 결과 팝업 노출 시 @click="openWinResult" 추가 필요 -->
        <button type="button" class="btn-attendance-check" @click="spinRoulette">
          <img src="/assets/images/event/bg_attendance_roulette_btn.png" alt="룰렛 출석체크" />
        </button>
      </div>
      <!-- // roulette-wrap -->
    </div>
    <!-- // roulette-container -->
    <!-- calendar-wrap -->
    <div class="calendar-wrap">
      <div class="calendar-top">
        <img src="/assets/images/event/bg_attendance_roulette_calendar_top.png" alt="달력 상단" />
      </div>
      <div class="calendar-body">
        <img src="/assets/images/temp/temp_calendar_sept.png" alt="9월" />
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
                  <span class="ico-stamp comp"></span>
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
                  <span class="ico-stamp coupon-day comp"></span>
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
          <ETBtn size="xs" @click="openPersonalInfoAgree">
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
            <RowListWrap gap="md">
              <li class="ui-col-item">
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
                    <ETBtn tag="a" size="xs" to="javascript:">
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

  <!-- pop : 개인정보 수집 및 이용약관 -->
  <PopTermsPersonalInfoAgree v-model:sta="popPersonalInfoAgree" />
  <!-- // pop : 개인정보 수집 및 이용약관 -->

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
// 개인정보 수집 및 이용약관 팝업
const popPersonalInfoAgree = ref({ open: false });
const openPersonalInfoAgree = () => popPersonalInfoAgree.value.open = true;

const rouletteWheel = ref<HTMLElement | null>(null);

function spinRoulette() {
  let len, index;
  len = rouletteWheel.value?.querySelectorAll('.item-roulette').length as number;
  // DESC :: 당첨 될 상품값 데이터 index에 '1 ~ N' 지정 필요 ( 현재 index 값 임시 랜덤 지정 )
  index = Math.floor(Math.random() * (len - 1)) + 1;

  rollRoulette(index, len);
}
function rollRoulette(index: number, len: number) {
  let spinCnt, rotate;
  spinCnt = Math.floor(Math.random() * 7) + 8; // 8 ~ 14 바퀴 랜덤 지정
  rotate = 360 * spinCnt + (360 / len * index);

  rouletteWheel.value.style.transform = `rotate(${rotate}deg )`;

  // DESC :: [임시] 선택된 인덱스값 확인을 위해 임시로 추가 ( 개발시 삭제 필요 )
  setTimeout(() => {
    console.log('스핀 종료. 당첨된 index', index);
  }, 4500);
}

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

onMounted(() => {
  if (agreeListRef.value instanceof Element) {
    checkboxes = agreeListRef.value.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
    totalCheckBox.value = checkboxes.length;
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', updateCheckCount);
    });

    updateCheckCount();
  }
});

onUnmounted(() => {
  if (agreeListRef.value instanceof Element) {
    checkboxes.forEach((checkbox) => {
      checkbox.removeEventListener('change', updateCheckCount);
    });
  }
});

// 당첨 결과 팝업
const popWinResult = ref({ open: false });
const openWinResult = () => popWinResult.value.open = true;
</script>

<style lang="scss" scoped>
@import url('@/assets/css/pages/event.scss');
</style>
