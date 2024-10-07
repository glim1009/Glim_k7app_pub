<template>
  <ContWrap type="white" class="side-zero" in-top="zero" in-bottom="zero">
    <ContBox>
      <div class="thumb-box">
        <img src="/assets/images/temp/temp_event_detail.png" alt="기획전 이미지">
      </div>
    </ContBox>
  </ContWrap>
  <ContWrap type="white" in-top="lg">
    <ContBox size="sm">
      <div class="editor-wrap">
        <!-- 개발 시 삭제 영역 -->
        <div style="height: 108px; background: rgba(255, 0, 0, .1);">
          에디터영역 확인을 위한 임시 div입니다.<br>
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
            <input id="agreeChk01" type="checkbox">
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
            <RowListWrap>
              <li class="ui-col-item">
                <FlexGroup>
                  <div class="flex-left">
                    <span class="ui-chk">
                      <input id="agreeChk02" type="checkbox">
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
                      <input id="agreeChk03" type="checkbox">
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
  <ContWrap type="divider">
    <ETextareaBox v-model="parentValue" :max-length="200" placeholder="내용을 입력해주세요." @input="handlerValue" />
    <BtnWrap type="full" size="md">
      <EBtn color="gray">
        <span class="text">등록</span>
      </EBtn>
    </BtnWrap>
  </ContWrap>
  <ContWrap class="not-navbar">
    <ContBox>
      <div class="list-header">
        <FlexGroup align="center">
          <div class="flex-left">
            <div class="goods-group">
              <EGoods val="8" unit="건" class="fw-sb" />
            </div>
          </div>
          <div class="flex-right">
            <div class="bar-group">
              <span class="bar-item">
                <button type="button" class="btn-comment" :class="{ 'is-active': !isMine }" @click="toggleMyComment">
                  <span class="text">전체</span>
                </button>
              </span>
              <span class="bar-item">
                <button type="button" class="btn-comment" :class="{ 'is-active': isMine }" @click="toggleMyComment">
                  <span class="text">내글</span>
                </button>
              </span>
            </div>
          </div>
        </FlexGroup>
      </div>
      <RowListWrap v-if="isData">
        <!-- repeat -->
        <li v-if="!isMine" class="item">
          <ColorBox size="lg" color="white">
            <CtitleWrap size="sm">
              <FlexGroup>
                <div class="flex-left">
                  <div class="ctitle-xs">
                    sev*****you
                  </div>
                </div>
                <div class="flex-right" />
              </FlexGroup>
            </CtitleWrap>
            <p class="stext">
              오예 도시락 맛있음요
            </p>
            <BtnWrap v-if="isMine" type="auto-right" size="sm">
              <EBtn color="light-gray" size="xs">
                <EIco name="delete" color="gray" size="xs">
                  <span class="offscreen">삭제</span>
                </EIco>
              </EBtn>
              <EBtn color="light-green" size="xs" @click="openEditComment">
                <EIco name="write" color="green" size="xs">
                  <span class="offscreen">수정</span>
                </EIco>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
        <!-- // repeat -->
        <!-- repeat -->
        <li v-if="!isMine" class="item">
          <ColorBox size="lg" color="white">
            <CtitleWrap size="sm">
              <FlexGroup>
                <div class="flex-left">
                  <div class="ctitle-xs">
                    sev*****you
                  </div>
                </div>
                <div class="flex-right" />
              </FlexGroup>
            </CtitleWrap>
            <p class="stext">
              헤헤헤
            </p>
            <BtnWrap v-if="isMine" type="auto-right" size="sm">
              <EBtn color="light-gray" size="xs">
                <EIco name="delete" color="gray" size="xs">
                  <span class="offscreen">삭제</span>
                </EIco>
              </EBtn>
              <EBtn color="light-green" size="xs" @click="openEditComment">
                <EIco name="write" color="green" size="xs">
                  <span class="offscreen">수정</span>
                </EIco>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
        <!-- // repeat -->
        <!-- repeat -->
        <li class="item">
          <ColorBox size="lg" color="white">
            <CtitleWrap size="sm">
              <FlexGroup>
                <div class="flex-left">
                  <div class="ctitle-xs">
                    sev*****you
                  </div>
                </div>
                <div class="flex-right" />
              </FlexGroup>
            </CtitleWrap>
            <p class="stext">
              너무 맛있고 가격도 합리적이에요! 혼자 먹다가 배터질뻔 했습니당~! 다음에도 또 사먹을거같아요!! 너무 맛있고 가격도 합리적이에요!
            </p>
            <BtnWrap type="auto-right" size="sm">
              <EBtn color="light-gray" size="xs">
                <EIco name="delete" color="gray" size="xs">
                  <span class="offscreen">삭제</span>
                </EIco>
              </EBtn>
              <EBtn color="light-green" size="xs" @click="openEditComment">
                <EIco name="write" color="green" size="xs">
                  <span class="offscreen">수정</span>
                </EIco>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
        <!-- // repeat -->
      </RowListWrap>
      <InfoGuideWrap
        v-if="isNoData"
        type="no-data"
        name="review"
        desc="작성된 내용이 없습니다."
      />
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

  <!-- pop : 댓글수정 -->
  <PopEventEditComment v-model:sta="popEditComment" />
  <!-- // pop : 댓글수정 -->
</template>

<script setup lang="ts">
// 전체/내글 노출 소팅 이벤트
const isMine = ref(false);
const isEdit = ref();

function toggleMyComment() {
  isMine.value = !isMine.value;
}

const parentValue = ref<string>("");
const textareaEmits = ref<string | null>("");

// 입력값이 변경될 때 발생하는 이벤트
function handlerValue(value: any) {
  textareaEmits.value = value;
}

// 개인정보 수집 및 이용약관 팝업
const popPersonalInfoAgree = ref({ open: false });
const openPersonalInfoAgree = () => popPersonalInfoAgree.value.open = true;

// 댓글 수정 팝업
const popEditComment = ref({ open: false });
const openEditComment = () => popEditComment.value.open = true;

// 임시: 데이터 있음/없음 컨텐츠 확인을 위해 추가
const isData = ref(true);
const isNoData = ref(false);

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
  }
  else if (newValue === 0) {
    checkboxes.forEach(checkbox => checkbox.checked = false);
  }
  updateCheckCount();
});

onMounted(() => {
  if (agreeListRef.value instanceof Element) {
    checkboxes = agreeListRef.value.querySelectorAll<HTMLInputElement>("input[type=\"checkbox\"]");
    totalCheckBox.value = checkboxes.length;
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", updateCheckCount);
    });

    updateCheckCount();
  }
});

onUnmounted(() => {
  if (agreeListRef.value instanceof Element) {
    checkboxes.forEach((checkbox) => {
      checkbox.removeEventListener("change", updateCheckCount);
    });
  }
});
</script>

<style lang="scss" scoped>
@import url('@/assets/css/pages/event.scss');
</style>
