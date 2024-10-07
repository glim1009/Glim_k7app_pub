<template>
  <ContWrap>
    <ContBox size="lg">
      <ColorBox color="white" size="lg">
        <FlexGroup>
          <div class="flex-left">
            <CtitleWrap size="zero">
              <ETit text="자동 로그인 설정" type="account" />
            </CtitleWrap>
          </div>
          <div class="flex-right">
            <span class="ui-toggle">
              <input id="setAppToggle01" type="checkbox">
              <label for="setAppToggle01" />
            </span>
          </div>
        </FlexGroup>
      </ColorBox>
    </ContBox>
    <ContBox size="lg">
      <CtitleWrap>
        <ETit text="알림 설정" type="lgCont" />
        <div class="stext">
          픽업 정보 등 주요 알림은 설정에 관련 없이 발송됩니다.
        </div>
      </CtitleWrap>
      <ColorBox color="white" size="lg">
        <SContLineBox>
          <FlexGroup>
            <div class="flex-left">
              <CtitleWrap size="zero">
                <ETit text="마케팅 Push 수신 설정" type="account" />
                <div class="stext-gray70">
                  이벤트, 기획전, 할인 쿠폰 등 다양한 혜택 관련 알림을 받을 수 있습니다.
                </div>
              </CtitleWrap>
            </div>
            <div class="flex-right">
              <span class="ui-toggle">
                <input id="setAppToggle02" v-model="marketingPush" type="checkbox" @change="updateMarketingPush">
                <label for="setAppToggle02" />
              </span>
            </div>
          </FlexGroup>
        </SContLineBox>
        <SContLineBox>
          <FlexGroup>
            <div class="flex-left">
              <CtitleWrap size="zero">
                <ETit text="야간 수신 설정" type="account" />
                <div class="stext-gray70">
                  야간 (저녁9시~익일 오전 8시)에도 마케팅 Push 알림을 받으실 수 있습니다.
                </div>
              </CtitleWrap>
            </div>
            <div class="flex-right">
              <span class="ui-toggle">
                <input id="setAppToggle03" v-model="marketingNight" :disabled="!marketingPush" type="checkbox" @change="updateMarketingNight">
                <label for="setAppToggle03" />
              </span>
            </div>
          </FlexGroup>
        </SContLineBox>
      </ColorBox>
    </ContBox>
    <ContBox size="lg">
      <CtitleWrap>
        <ETit text="권한 설정" type="lgCont" />
      </CtitleWrap>
      <ColorBox color="white" size="lg">
        <div class="box-arr-area">
          <CtitleWrap size="zero">
            <ETit type="account" text="앱 접근 권한 설정" />
            <div class="stext-gray70">
              알림, 위치정보, 저장공간, 연락처, 사진에 대한 권한 설정을 변경하실 수 있습니다.
            </div>
          </CtitleWrap>
        </div>
        <button type="button" class="btn-link">
          <span class="offscreen">앱 접근 권한 설정</span>
        </button>
      </ColorBox>
    </ContBox>
    <ContBox size="lg">
      <CtitleWrap>
        <ETit text="기타정보" type="lgCont" />
      </CtitleWrap>
      <ColorBox color="white" size="lg">
        <SContLineBox>
          <FlexGroup>
            <div class="flex-left">
              <CtitleWrap size="zero">
                <ETit text="앱 현재 버전 v.1.00" type="account" />
              </CtitleWrap>
            </div>
            <!-- DESC :: 업데이트 버전이 없는 경우 미노출 -->
            <div class="flex-right">
              <EBtn tag="a" color="line-light-gray" size="xs" to="javascript:">
                <span class="text">최신 버전 업데이트</span>
              </EBtn>
            </div>
          </FlexGroup>
        </SContLineBox>
        <SContLineBox>
          <FlexGroup>
            <div class="flex-left">
              <CtitleWrap size="zero">
                <ETit text="캐시 데이터 삭제" type="account" />
              </CtitleWrap>
            </div>
            <div class="flex-right">
              <EBtn color="line-light-gray" size="xs">
                <span class="text">삭제</span>
              </EBtn>
            </div>
          </FlexGroup>
        </SContLineBox>
      </ColorBox>
    </ContBox>
  </ContWrap>
</template>

<script setup lang="ts">
const { $showToast } = useNuxtApp();

definePageMeta({
  title: "앱설정",
  hideRightHeader: ["home"],
});

const marketingPush = ref<boolean>(false); // 마케팅 Push 수신 설정
const marketingNight = ref<boolean>(false); // 야간 수신 설정

// change : 마케팅 Push 수신 설정
const updateMarketingPush = () => {
  if (marketingPush.value) {
    $showToast({ msg: `마케팅 푸시 알림에 동의 처리되었습니다<br />(수신 동의 일시 : ${new Date().toLocaleDateString()})` });
  }
  else {
    $showToast({ msg: `마케팅 푸시 알림, 야간 알림 수신에 미동의 처리되었습니다<br />(수신 미동의 일시 : ${new Date().toLocaleDateString()})` });
    marketingNight.value = false;
  }
};

// change : 야간 수신 설정
const updateMarketingNight = () => {
  if (marketingNight.value && !marketingPush.value) {
    marketingPush.value = true;
  }
};

// [마케팅 Push 수신 설정] 초기 상태 설정
const initMarketingPush = (initCheck: boolean = false) => {
  marketingPush.value = initCheck;
  if (!initCheck) {
    marketingNight.value = false;
  }
};

// marketingPush 값이 변경될 때마다 실행
watch(marketingPush, (newValue) => {
  if (!newValue) {
    marketingNight.value = false;
  }
});

// 컴포넌트 마운트 시 초기화
onMounted(() => {
  initMarketingPush(false);
});

// 캐시 데이터 삭제 후 알럿 팝업 내 [확인] 버튼 선택 시 노출
/* $showToast({ msg: '캐시 데이터가 삭제되었습니다.' }); */
</script>
