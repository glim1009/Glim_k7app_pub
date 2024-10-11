<template>
  <div class="footer-wrapper">
    <ContWrap in-top="lg">
      <ContBox>
        <FlexGroup align="start">
          <div class="flex-left">
            <div class="footer-ci">
              <img src="/assets/images/common/comm_footer_ci.svg" alt="korea 7">
            </div>
          </div>
          <div class="flex-right has-cs-menu">
            <ul class="footer-cs-menu">
              <li class="item-cs-menu">
                <NuxtLink class="btn-cs-menu" to="/cs">
                  고객센터
                </NuxtLink>
              </li>
              <li class="item-cs-menu">
                <NuxtLink class="btn-cs-menu" target="_blank" to="https://m.7-eleven.co.kr:444/franchise/advice/joinadviceNew.asp">
                  창업상담신청
                </NuxtLink>
              </li>
              <li class="item-cs-menu">
                <button type="button" class="btn-cs-menu" @click="$emit('openPopup', 'termsService')">
                  이용약관
                </button>
              </li>
              <li class="item-cs-menu">
                <button type="button" class="btn-cs-menu" @click="$emit('openPopup', 'termsPrivacy')">
                  개인정보 처리방침
                </button>
              </li>
              <li class="item-cs-menu">
                <button type="button" class="btn-cs-menu" @click="$emit('openPopup', 'termsOfLocation')">
                  위치기반 서비스 이용약관
                </button>
              </li>
              <li class="item-cs-menu">
                <button type="button" class="btn-cs-menu" @click="$emit('openPopup', 'policyOfcctv')">
                  영상정보처리기기 운영/관리 방침
                </button>
              </li>
            </ul>
          </div>
        </FlexGroup>
      </ContBox>
      <ContBox size="lg">
        <FoldToggleBox type="scont">
          <template #header>
            <div class="fold-title">
              <FlexGroup align="center">
                <ETit size="xs">
                  코리아 세븐
                </ETit>
              </FlexGroup>
            </div>
          </template>
          <template #content>
            <div class="footer-info-group">
              <div class="row-info">
                운영사 : 코리아세븐
                <br>사업자등록번호 : 208-81-27413
                <br>대표이사 : 김홍철
                <br>주소 : 서울특별시 중구 청계천로 100 시그니처타워 4층
                <br>통신판매업신고번호 : 제2012-서울중구-0636호
                <br>통신판매업신고기관 : 서울특별시 중구청(02-3396-5077)
                <br>고객센터 : 1577-0711(평일 09:00~18:00 / 발신자부담)
                <br>이메일 : <ETBtn tag="a" size="xs" type="underline" to="mailto:711CS@lotte.net">
                  <span class="text">711CS@lotte.net</span>
                </ETBtn>
              </div>
              <div class="row-info">
                판매사 : 롯데쇼핑㈜e커머스사업부
                <br>사업자등록번호 : 529-85-00774
                <br>대표이사 : 김사무엘상현, 정준호, 강성현
                <br>주소 : 서울시 송파구 올림픽로 300, 26층 (신천동, 롯데월드타워)
                <br>통신판매업신고번호 : 서울송파 제0158호
                <br>통신판매업신고기관 : 서울특별시 송파구청 (02-2147-2525,2549)
                <br>고객센터 : 1522-2552 (연중무휴 10:00 ~ 20:00)
                <br>이메일 : <ETBtn tag="a" size="xs" type="underline" to="mailto:lottegift@lotte.net">
                  <span class="text">lottegift@lotte.net</span>
                </ETBtn>
              </div>
            </div>
          </template>
        </FoldToggleBox>
        <div class="copyright">
          COPYRIGHT 2024 KOREA SEVEN CO, LTD All Right Reserved
        </div>
      </ContBox>
    </ContWrap>
  </div>
</template>

<script setup lang="ts">
defineEmits(["openPopup"]);
</script>

<style lang="scss" scoped>
@import url('@/assets/css/layout/footer.scss');
</style>
