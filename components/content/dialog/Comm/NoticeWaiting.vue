<template>
  <ContDialog v-model="isOpen" not-dim-click>
    <template #title>
      <div class="dialog-title">대기 알림</div>
    </template>
    <template #body>
      <div class="cont-white-box">
        <div class="guide-wrap">
          <div class="img-box">
            <img src="/assets/images/common/comm_netfunnel_logo_seven_eleven.svg" alt="로고 이미지" />
          </div>
          <p class="guide-desc">현재 접속자가 많아 잠시 대기 중입니다.</p>
        </div>

        <div class="line-gray-box">
          <p class="info-title">예상대기시간</p>
          <p class="info-time">00분 00초</p>
          <p class="info-desc">대기인원 136명</p>
        </div>

        <p class="info-text">
          새로 고침을 하거나, 재접속을 하는 경우 대기 순서가
          <br>길어질 수 있습니다. 잠시만 기다려 주세요.
        </p>
      </div>
      <div class="cont-gray-box" v-if="!isLogin">
        <div class="title-wrap">
          <p class="info-title">L.POINT 적립 바코드</p>
          <p class="info-desc">편리하게 L.POINT 적립해 보세요!</p>
        </div>
        <div class="barcode-box">
          <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="L.POINT 적립 바코드" />
        </div>
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
  set: (value) => emit('update:sta', { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};

const isLogin = ref(false); // 임시 : 로그인 여부 체크를 위해 추가
</script>

<style scoped lang="scss">
  .cont-white-box {
    padding: 24px 20px;
    text-align: center;

    .guide-wrap {
      .img-box {
        img {
          display: block;
          width: 80px;
          height: 80px;
          margin: 0 auto;
        }
      }
      .guide-desc {
        margin-top: 16px;
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
        color: #000;
      }
    }

    .line-gray-box {
      margin-top: 24px;
      padding: 20px;
      border: 1px solid #E8EBF0;
      border-radius: 15px;

      .info-title {
        font-size: 15px;
        font-weight: 500;
        line-height: 20px;
        color: #000;
      }
      .info-time {
        margin-top: 4px;
        font-size: 20px;
        font-weight: 600;
        line-height: 26px;
        color: #00BB78;
      }
      .info-desc {
        margin-top: 6px;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #55595E;
      }
    }

    .info-text {
      margin-top: 10px;
      font-size: 13px;
      font-weight: 400;
      line-height: 20px;
      color: #777C84;
    }
  }
  .cont-gray-box {
    padding: 24px 15px 20px;
    background: #F3F6FA;
    text-align: center;

    .title-wrap {
      .info-title {
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
        color: #000;
      }
      .info-desc {
        margin-top: 4px;
        font-size: 13px;
        font-weight: 400;
        line-height: 20px;
        color: #777C84;
      }
    }

    .barcode-box {
      margin-top: 16px;
      padding: 20px;
      border-radius: 15px;
      background: #FFF;

      img {
        display: block;
        width: 100%;
      }
    }
  }
</style>
