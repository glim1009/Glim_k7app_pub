<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">행운의 룰렛</div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap type="white" in-top="zero" in-bottom="zero" class="side-zero">
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
        </ContWrap>
      </div>
    </template>
  </ContDialog>
</template>

<script setup lang="ts">
interface DialogState {
  open: boolean;
}

const props = defineProps<{
  sta: DialogState;
}>();

const emit = defineEmits(['update:sta']);

const isOpen = computed({
  get: () => props.sta.open,
  set: (value) => emit('update:sta', {...props.sta, open: value}),
});


const rouletteWheel = ref<HTMLElement | null>(null);

function spinRoulette() {
  let len, index;
  len = rouletteWheel.value?.querySelectorAll('.item-roulette').length as number;
  // DESC :: 당첨 될 상품값 데이터 index에 '1 ~ N' 지정 필요 ( 현재 index 값 임시 랜덤 지정 )
  index = Math.floor(Math.random() * (len - 1)) + 1;

  rollRoulette(index, len);
}
function rollRoulette(index:number, len:number) {
  let spinCnt, rotate;
  spinCnt = Math.floor(Math.random() * 7) + 8; //8 ~ 14 바퀴 랜덤 지정
  rotate = 360 * spinCnt + (360 / len * index);

  rouletteWheel.value.style.transform = 'rotate(' + rotate + 'deg )';

  // DESC :: [임시] 선택된 인덱스값 확인을 위해 임시로 추가 ( 개발시 삭제 필요 )
  setTimeout(function() {
    console.log('스핀 종료. 당첨된 index', index);
  }, 4500);

}

</script>

