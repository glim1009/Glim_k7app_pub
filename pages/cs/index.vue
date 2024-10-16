<template>
  <ContWrap type="white">
    <ContBox>
      <CtitleWrap>
        <ETit type="xlCont">
          무엇이 궁금하세요?
          <br>고객센터에서 알려드려요.
        </ETit>
      </CtitleWrap>
      <EInputBox type="search" enterkeyhint="search" title="검색" placeholder="궁금하신 내용을 입력해 보세요.">
        <button type="button" class="btn-input-search">
          <span class="offscreen">검색</span>
        </button>
      </EInputBox>
    </ContBox>
  </ContWrap>
  <ContWrap type="divider" in-top="lg">
    <ContBox>
      <CtitleWrap>
        <FlexGroup>
          <div class="flex-faq-left">
            <div class="bar-group">
              <div class="bar-item">
                <ETit text="FAQ" type="lgCont" />
              </div>
              <div class="bar-item">
                <span class="stext-lg">자주 찾는 질문 10</span>
              </div>
            </div>
          </div>
          <div class="flex-right">
            <ETBtn tag="a" size="xs" to="/cs/faq">
              <div class="text">
                더보기
              </div>
            </ETBtn>
          </div>
        </FlexGroup>
      </CtitleWrap>
      <SwiperAutoWrap gap="10" class="side-zero">
        <!-- slide -->
        <swiper-slide>
          <ColorBox color="light-gray" class="question-box">
            <CtitleWrap size="zero">
              <ETit size="sm" text="Q1" />
              <p class="stext">
                선택한 수령 시간이 지나도 수령할 수 있나요?
              </p>
            </CtitleWrap>
          </ColorBox>
          <NuxtLink class="btn-link" to="/cs/faq">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <ColorBox color="light-gray" class="question-box">
            <CtitleWrap size="zero">
              <ETit size="sm" text="Q2" />
              <p class="stext">
                세븐리워드 / 세븐 APP 이벤트의 당첨자 발표는 어디서 확인할 수 있나요?
              </p>
            </CtitleWrap>
          </ColorBox>
          <NuxtLink class="btn-link" to="/cs/faq">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <ColorBox color="light-gray" class="question-box">
            <CtitleWrap size="zero">
              <ETit size="sm" text="Q3" />
              <p class="stext">
                세븐 APP 포인트 카드는 어떻게 사용하나요?
              </p>
            </CtitleWrap>
          </ColorBox>
          <NuxtLink class="btn-link" to="/cs/faq">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <ColorBox color="light-gray" class="question-box">
            <CtitleWrap size="zero">
              <ETit size="sm" text="Q4" />
              <p class="stext">
                개인정보를 수정하고 싶어요.
              </p>
            </CtitleWrap>
          </ColorBox>
          <NuxtLink class="btn-link" to="/cs/faq">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <ColorBox color="light-gray" class="question-box">
            <CtitleWrap size="zero">
              <ETit size="sm" text="Q5" />
              <p class="stext">
                6/3(월) ~ 6/7(금) 까지의 기간에 세븐 홈배송 서비스 결제오류건에 대한 자동 취소 접수 완료 안내 및 일부 고객님들의 주문내역 오류 발생과 미취소처리건 접수 지연 사과 안내
              </p>
            </CtitleWrap>
          </ColorBox>
          <NuxtLink class="btn-link" to="/cs/faq">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <ColorBox color="light-gray" class="question-box">
            <CtitleWrap size="zero">
              <ETit size="sm" text="Q6" />
              <p class="stext">
                로그인이 안될 때는 어떻게 하나요?
              </p>
            </CtitleWrap>
          </ColorBox>
          <NuxtLink class="btn-link" to="/cs/faq">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <ColorBox color="light-gray" class="question-box">
            <CtitleWrap size="zero">
              <ETit size="sm" text="Q7" />
              <p class="stext">
                세븐앱 버전 업데이트는 어떻게 하나요?
              </p>
            </CtitleWrap>
          </ColorBox>
          <NuxtLink class="btn-link" to="/cs/faq">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <ColorBox color="light-gray" class="question-box">
            <CtitleWrap size="zero">
              <ETit size="sm" text="Q8" />
              <p class="stext">
                세븐앱 버전 업데이트는 어떻게 하나요?
              </p>
            </CtitleWrap>
          </ColorBox>
          <NuxtLink class="btn-link" to="/cs/faq">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <ColorBox color="light-gray" class="question-box">
            <CtitleWrap size="zero">
              <ETit size="sm" text="Q9" />
              <p class="stext">
                세븐앱 버전 업데이트는 어떻게 하나요?
              </p>
            </CtitleWrap>
          </ColorBox>
          <NuxtLink class="btn-link" to="/cs/faq">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <!-- // slide -->
        <!-- slide -->
        <swiper-slide>
          <ColorBox color="light-gray" class="question-box">
            <CtitleWrap size="zero">
              <ETit size="sm" text="Q10" />
              <p class="stext">
                세븐앱 버전 업데이트는 어떻게 하나요?
              </p>
            </CtitleWrap>
          </ColorBox>
          <NuxtLink class="btn-link" to="/cs/faq">
            <span class="offscreen">바로가기</span>
          </NuxtLink>
        </swiper-slide>
        <!-- // slide -->
      </SwiperAutoWrap>
    </ContBox>
  </ContWrap>
  <ContWrap type="divider" in-top="lg">
    <ContBox>
      <CtitleWrap size="lg">
        <FlexGroup>
          <div class="flex-left">
            <ETit text="공지사항" type="lgCont" />
          </div>
          <div class="flex-right">
            <ETBtn tag="a" size="xs" to="/cs/notice">
              <span class="text">더보기</span>
            </ETBtn>
          </div>
        </FlexGroup>
      </CtitleWrap>
      <RowListWrap gap="line">
        <li class="item-board">
          <div class="board-info-wrap">
            <CtitleWrap size="zero">
              <ETit type="board" class="ellipsis">
                <EBadge color="green" size="sm" badge-text="중요" />홈배송 결제오류 취소 지연 사과 안내
              </ETit>
              <div class="stext board-date">
                2024.06.29
              </div>
            </CtitleWrap>
          </div>
          <NuxtLink class="btn-link" to="/cs/notice/detail">
            <span class="offscreen">공지 상세 바로가기</span>
          </NuxtLink>
        </li>
        <li class="item-board">
          <div class="board-info-wrap">
            <CtitleWrap size="zero">
              <ETit type="board" class="ellipsis">
                <EBadge color="green" size="sm" badge-text="중요" />PUSH 메시지 오발송 사과 안내
              </ETit>
              <div class="stext board-date">
                2024.06.29
              </div>
            </CtitleWrap>
          </div>
          <NuxtLink class="btn-link" to="/cs/notice/detail">
            <span class="offscreen">공지 상세 바로가기</span>
          </NuxtLink>
        </li>
        <li class="item-board">
          <div class="board-info-wrap">
            <CtitleWrap size="zero">
              <ETit text="신한카드 시스템 작업 공지" type="board" class="ellipsis" />
              <div class="stext board-date">
                2024.06.29
              </div>
            </CtitleWrap>
          </div>
          <NuxtLink class="btn-link" to="/cs/notice/detail">
            <span class="offscreen">공지 상세 바로가기</span>
          </NuxtLink>
        </li>
      </RowListWrap>
    </ContBox>
  </ContWrap>
  <ContWrap type="divider" in-top="lg">
    <FlexGroup align="start">
      <div class="flex-left">
        <CtitleWrap size="zero">
          <ETit type="cont">
            세븐일레븐 회원만의 <br>다양한 혜택을 만나보세요!
          </ETit>
          <ETBtn tag="a" size="xs" to="/cs/grade-benefit">
            <span class="text">등급별 할인 혜택</span>
            <EIco name="arw-right" color="gray" size="xs" />
          </ETBtn>
        </CtitleWrap>
      </div>
      <div class="flex-right">
        <EIco name="grade-benefit-temp" />
      </div>
    </FlexGroup>
  </ContWrap>
  <ContWrap type="divider" in-top="lg">
    <ContBox>
      <CtitleWrap>
        <ETit type="cont">
          문의사항 있으신 경우<br>편하게 의견 남겨주세요!
        </ETit>
      </CtitleWrap>wks
      <ColorBox color="light-gray" size="lg">
        <div class="cs-contact-wrap">
          <CtitleWrap size="zero">
            <ETit size="xs" text="전화상담 운영안내" />
            <div class="stext">
              평일 09:00~18:00 주말 및 공휴일 휴무
            </div>
          </CtitleWrap>
        </div>
      </ColorBox>
      <BtnWrap size="sm">
        <EBtn tag="a" size="md" color="line-light-gray" target="_blank" to="https://m.7-eleven.co.kr:444/franchise/advice/cvmsForm.asp">
          <EIco name="edit" color="gray" size="sm" />
          <span class="text">고객의 소리</span>
        </EBtn>
        <EBtn tag="a" size="md" color="line-light-gray" to="tel:1577-0711">
          <EIco name="call" color="gray" size="sm" />
          <span class="text">전화문의</span>
        </EBtn>
      </BtnWrap>
    </ContBox>
  </ContWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: "고객센터",
});
</script>

<style lang="scss" scoped>
@import url("assets/css/pages/cs.scss");
</style>
