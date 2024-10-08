<template>
  <ContWrap type="white" class="side-zero" in-top="zero" in-bottom="zero">
    <ContBox>
      <div class="thumb-box">
        <img src="/assets/images/temp/temp_event_detail.png" alt="기획전 이미지" />
      </div>
    </ContBox>
  </ContWrap>
  <ContWrap type="white" in-top="lg" class="not-navbar">
    <ContBox size="sm">
      <!-- DESC :: 미로그인 시
      - EInputBox에 readonly 속성 추가
      - 등록버튼 선택 시 "/member"로 이동
      -->
      <EInputBox title="쿠폰번호" placeholder="쿠폰번호 입력">
        <EBtn color="green" size="xs">
          <span class="text">등록</span>
        </EBtn>
      </EInputBox>
    </ContBox>
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
