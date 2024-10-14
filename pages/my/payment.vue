<template>
  <ContWrap type="white">
    <CtitleWrap>
      <ETit type="cont">
        카드를 등록하신 후 통합바코드를 통해
        <br>한번에 간편하게 할인과 결제를 진행하세요.
      </ETit>
      <div class="stext">
        5개의 결제수단을 선택하실 수 있습니다.
      </div>
    </CtitleWrap>
    <BtnWrap>
      <EBtn tag="a" color="line-gray" size="md" to="javascript:">
        <EIco name="plus" color="gray" size="sm" />
        <span class="text">카드 추가</span>
      </EBtn>
    </BtnWrap>
  </ContWrap>
  <ContWrap>
    <ContBox size="sm">
      <CtitleWrap>
        <FlexGroup>
          <div class="flex-left">
            <ETit type="lgCont" text="결제수단 목록" />
          </div>
          <div class="flex-right">
            <EBtn v-if="!isChangeListOrder" color="line-gray" size="xs" @click="orderChange">
              <span class="text">편집</span>
            </EBtn>
            <EBtn v-if="isChangeListOrder" color="gray" size="xs" @click="orderChange">
              <span class="text">저장</span>
            </EBtn>
          </div>
        </FlexGroup>
      </CtitleWrap>
    </ContBox>
    <ContBox size="sm" gap="sm">
      <ColorBox color="white" size="zero">
        <RowListWrap gap="line">
          <draggable
            v-model="payment"
            group="card"
            handle=".btn-payment-move"
            item-key="order"
            @start="drag = true"
            @end="drag = false"
          >
            <template #item="{ element }">
              <li class="item-payment">
                <FlexGroup :align="isChangeListOrder ? 'center' : 'start'" class="payment-info-box">
                  <div class="flex-left">
                    <div class="payment-info-area">
                      <CtitleWrap size="sm">
                        <span v-if="element.stared.visible" class="ui-chk-bookmark">
                          <input :id="element.stared.chkId" type="checkbox">
                          <label :for="element.stared.chkId"><span class="offscreen">결제수단 즐겨찾기</span></label>
                        </span>
                        <span class="ctitle-sm fc-gray90">{{ element.title }}</span>
                      </CtitleWrap>
                      <FlexGroup>
                        <div class="flex-left">
                          <div class="thumb-pay">
                            <img :src="`/assets/images/common/${element.paymentImg.src}`" :alt="element.paymentImg.alt">
                          </div>
                        </div>
                        <div class="flex-info-right">
                          <div class="bar-group">
                            <span class="bar-text-sm fc-gray70">{{ element.paymentInfo.info.name }}</span>
                            <span v-if="!!element.paymentInfo.info.type" class="bar-text-sm fc-gray70">{{ element.paymentInfo.info.type }}</span>
                          </div>
                          <div v-if="!!element.paymentInfo.cardNo" class="stext-gray70">
                            {{ element.paymentInfo.cardNo }}
                          </div>
                        </div>
                      </FlexGroup>
                    </div>
                  </div>
                  <div class="flex-right">
                    <BtnWrap type="auto">
                      <ETBtn v-if="!isChangeListOrder && element.deletable" size="xs" @click="openPaymentNickname">
                        <span class="text">변경</span>
                        <EIco name="arw-right" color="gray" size="xs" />
                      </ETBtn>
                      <button v-if="isChangeListOrder && element.deletable" type="button" class="btn-payment-delete">
                        <EIco name="delete" color="gray" size="sm" />
                        <span class="offscreen">결제수단 삭제</span>
                      </button>
                      <button v-if="isChangeListOrder" type="button" class="btn-payment-move">
                        <EIco name="menu" color="gray" size="sm" />
                        <span class="offscreen">결제수단 순서변경</span>
                      </button>
                    </BtnWrap>
                  </div>
                </FlexGroup>
              </li>
            </template>
          </draggable>
        </RowListWrap>
      </ColorBox>
      <ColorBox color="white" size="zero">
        <RowListWrap gap="line">
          <li class="item-md-link">
            <ETBtn tag="a" size="sm" type="right-arw" to="/my/mobile-receipt">
              <span class="text">모바일 영수증</span>
            </ETBtn>
          </li>
          <li class="item-md-link">
            <!--  DESC :: 추가된 결제수단 없을 경우 disabled 추가 -->
            <ETBtn tag="a" size="sm" type="right-arw" to="javascript:" class="disabled">
              <span class="text">결제비밀번호 변경</span>
            </ETBtn>
          </li>
        </RowListWrap>
      </ColorBox>
    </ContBox>
  </ContWrap>
  <!-- pop : 카드별명 변경 -->
  <PopMyPaymentNickname v-model:sta="popPaymentNickname" />
  <!-- // pop : 카드별명 변경 -->
</template>

<script setup lang="ts">
import draggable from "vuedraggable";

definePageMeta({
  title: "결제수단 관리",
  hideRightHeader: ["home"],
});

const isChangeListOrder = ref(false);

const drag = ref(false);
const payment = ref([
  {
    title: "편의점 결제전용",
    stared: { visible: true, chkId: "cardKB" },
    paymentInfo: {
      info: { name: "KB 국민카드", type: "체크카드" },
      cardNo: "1234-****-****-5678",
    },
    paymentImg: { src: "comm_card_kb.png", alt: "국민카드" },
    changeable: true,
    deletable: true,
    order: 1,
  },
  {
    title: "신한 마스터 카드",
    stared: { visible: true, chkId: "cardSH" },
    paymentInfo: {
      info: { name: "신한카드", type: "신용카드" },
      cardNo: "1234-****-****-5678",
    },
    paymentImg: { src: "comm_card_samsung.png", alt: "삼성카드" },
    changeable: true,
    deletable: true,
    order: 2,
  },
  {
    title: "네이버페이",
    stared: { visible: false, chkId: "cardNP" },
    paymentInfo: {
      info: { name: "N.Pay", type: null },
      cardNo: null,
    },
    paymentImg: { src: "comm_card_naver_pay.png", alt: "네이버페이" },
    changeable: false,
    deletable: false,
    order: 3,
  },
]);

function orderChange() {
  isChangeListOrder.value = !isChangeListOrder.value;
}

// 카드별명 변경 팝업
const popPaymentNickname = ref({ open: false });
const openPaymentNickname = () => popPaymentNickname.value.open = true;
const closePaymentNickname = () => popPaymentNickname.value.open = false;
</script>

<style lang="scss" scoped>
@import "assets/css/pages/my.scss";
</style>
