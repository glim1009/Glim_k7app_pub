<template>
  <ContWrap class="faq-fix-wrap" type="white" in-top="zero" in-bottom="zero">
    <ContBox class="faq-fix-search">
      <EInputBox type="search" enterkeyhint="search" title="검색" placeholder="궁금하신 내용을 입력해 보세요.">
        <button type="button" class="btn-input-search">
          <span class="offscreen">검색</span>
        </button>
      </EInputBox>
      <!--  검색후  -->
      <div v-if="isSearch" class="list-header faq-search-info">
        <div class="search-result-tit">
          <span class="fc-spot fw-sb">'반품'</span>에 대한
          <EGoods unit="개">
            <span class="val fc-spot">0</span>
          </EGoods>의 검색결과
        </div>
      </div>
      <!--  //검색후  -->
    </ContBox>
  </ContWrap>
  <ContWrap type="white" in-top="zero" class="faq-fix-wrap side-zero">
    <TabWrap class="faq-fix-tab" fir-active="tabOften">
      <!--  검색전  -->
      <template v-if="!isSearch" #tabs="{ activeTab, setActiveTab }">
        <SwiperAutoWrap type="line" class="in-top-xs">
          <swiper-slide class="tab-item">
            <button
              type="button" class="tab-link"
              :class="{ 'is-active': activeTab === 'tabOften' }"
              @click="setActiveTab('tabOften')"
            >
              <span class="tab-text">자주 찾는 질문 10</span>
            </button>
          </swiper-slide>
          <swiper-slide class="tab-item">
            <button
              type="button" class="tab-link"
              :class="{ 'is-active': activeTab === 'tabAll' }"
              @click="setActiveTab('tabAll')"
            >
              <span class="tab-text">전체</span>
            </button>
          </swiper-slide>
          <swiper-slide class="tab-item">
            <button
              type="button" class="tab-link"
              :class="{ 'is-active': activeTab === 'tabCategory01' }"
              @click="setActiveTab('tabCategory01')"
            >
              <span class="tab-text">하위 카테고리01</span>
            </button>
          </swiper-slide>
          <swiper-slide class="tab-item">
            <button
              type="button" class="tab-link"
              :class="{ 'is-active': activeTab === 'tabCategory02' }"
              @click="setActiveTab('tabCategory02')"
            >
              <span class="tab-text">하위 카테고리02</span>
            </button>
          </swiper-slide>
        </SwiperAutoWrap>
      </template>
      <!--  // 검색전  -->
      <!--  DESC :: {activeTab} 개발시 사용 -->
      <template #default="{ activeTab }">
        <!--  검색전/후  -->
        <ContWrap type="white" in-top="zero" in-bottom="zero" class="side-zero">
          <RowListWrap gap="bline">
            <li class="item">
              <FoldToggleBox>
                <template #header>
                  <div class="fold-title">
                    <CtitleWrap size="zero">
                      <div class="title-sub-gray">
                        사전예약
                      </div>
                      <ETit text="선택한 수령 시간이 지나도 수령할 수 있나요?" type="board" />
                    </CtitleWrap>
                  </div>
                </template>
                <template #content>
                  <ContWrap in-bottom="sm">
                    <!-- 개발 시 삭제 영역 -->
                    <div style="height: 100px; background: rgba(255, 0, 0, .1);">
                      에디터영역 확인을 위한 임시 div입니다.
                      <br>개발시 해당 div 삭제 후 작업해 주세요.
                    </div>
                    <!-- // 개발 시 삭제 영역 -->
                  </ContWrap>
                </template>
              </FoldToggleBox>
            </li>
            <li class="item">
              <FoldToggleBox>
                <template #header>
                  <div class="fold-title">
                    <CtitleWrap size="zero">
                      <div class="title-sub-gray">
                        사전예약
                      </div>
                      <ETit text="세븐리워드 / 세븐 APP 이벤트의 당첨자 발표는 어디서 확인할 수 있나요?" type="board" />
                    </CtitleWrap>
                  </div>
                </template>
                <template #content>
                  <ContWrap in-bottom="sm">
                    <!-- 개발 시 삭제 영역 -->
                    <div style="height: 100px; background: rgba(255, 0, 0, .1);">
                      에디터영역 확인을 위한 임시 div입니다.
                      <br>개발시 해당 div 삭제 후 작업해 주세요.
                    </div>
                    <!-- // 개발 시 삭제 영역 -->
                  </ContWrap>
                </template>
              </FoldToggleBox>
            </li>
            <li class="item">
              <FoldToggleBox>
                <template #header>
                  <div class="fold-title">
                    <CtitleWrap size="zero">
                      <div class="title-sub-gray">
                        하위 카테고리명
                      </div>
                      <ETit text="세븐 APP 포인트 카드는 어떻게 사용하나요?" type="board" />
                    </CtitleWrap>
                  </div>
                </template>
                <template #content>
                  <ContWrap in-bottom="sm">
                    <!-- 개발 시 삭제 영역 -->
                    <div style="height: 100px; background: rgba(255, 0, 0, .1);">
                      에디터영역 확인을 위한 임시 div입니다.
                      <br>개발시 해당 div 삭제 후 작업해 주세요.
                    </div>
                    <!-- // 개발 시 삭제 영역 -->
                  </ContWrap>
                </template>
              </FoldToggleBox>
            </li>
            <li class="item">
              <FoldToggleBox>
                <template #header>
                  <div class="fold-title">
                    <CtitleWrap size="zero">
                      <div class="title-sub-gray">
                        하위 카테고리명
                      </div>
                      <ETit text="개인정보를 수정하고 싶어요." type="board" />
                    </CtitleWrap>
                  </div>
                </template>
                <template #content>
                  <ContWrap in-bottom="sm">
                    <!-- 개발 시 삭제 영역 -->
                    <div style="height: 100px; background: rgba(255, 0, 0, .1);">
                      에디터영역 확인을 위한 임시 div입니다.
                      <br>개발시 해당 div 삭제 후 작업해 주세요.
                    </div>
                    <!-- // 개발 시 삭제 영역 -->
                  </ContWrap>
                </template>
              </FoldToggleBox>
            </li>
            <li class="item">
              <FoldToggleBox>
                <template #header>
                  <div class="fold-title">
                    <CtitleWrap size="zero">
                      <div class="title-sub-gray">
                        하위 카테고리명
                      </div>
                      <ETit text="6/3(월) ~ 6/7(금) 까지의 기간에 세븐 홈배송 서비스 결제오류건에 대한 자동 취소 접수 완료 안내 및 일부 고객님들의 주문내역 오류 발생과 미취소처리건 접수 지연 사과 안내" type="board" />
                    </CtitleWrap>
                  </div>
                </template>
                <template #content>
                  <ContWrap in-bottom="sm">
                    <!-- 개발 시 삭제 영역 -->
                    <div style="height: 100px; background: rgba(255, 0, 0, .1);">
                      에디터영역 확인을 위한 임시 div입니다.
                      <br>개발시 해당 div 삭제 후 작업해 주세요.
                    </div>
                    <!-- // 개발 시 삭제 영역 -->
                  </ContWrap>
                </template>
              </FoldToggleBox>
            </li>
            <li class="item">
              <FoldToggleBox>
                <template #header>
                  <div class="fold-title">
                    <CtitleWrap size="zero">
                      <div class="title-sub-gray">
                        회원
                      </div>
                      <ETit text="로그인이 안될 때는 어떻게 하나요?" type="board" />
                    </CtitleWrap>
                  </div>
                </template>
                <template #content>
                  <ContWrap in-bottom="sm">
                    <!-- 개발 시 삭제 영역 -->
                    <div style="height: 100px; background: rgba(255, 0, 0, .1);">
                      에디터영역 확인을 위한 임시 div입니다.
                      <br>개발시 해당 div 삭제 후 작업해 주세요.
                    </div>
                    <!-- // 개발 시 삭제 영역 -->
                  </ContWrap>
                </template>
              </FoldToggleBox>
            </li>
          </RowListWrap>
        </ContWrap>
        <!--  //검색전/후  -->
      </template>
    </TabWrap>
  </ContWrap>

  <!-- 검색후 : 검색 결과 없는 경우  -->
  <ContWrap v-if="isNoDataSearch && isSearch" type="white" size="sm" in-top="zero">
    <InfoGuideWrap
      type="no-data"
      name="search-result"
      desc="`<span class='fc-spot'>‘반품’</span>`에 대한 검색 결과가 없습니다."
    />
    <BtnWrap type="flex" size="xl">
      <EBtn tag="a" size="md" color="line-light-gray" to="https://m.7-eleven.co.kr:444/franchise/advice/cvmsForm.asp">
        <EIco name="edit" color="gray" size="sm" />
        <span class="text">고객의 소리</span>
      </EBtn>
      <EBtn tag="a" size="md" color="line-light-gray" to="tel:1577-0711">
        <EIco name="call" color="gray" size="sm" />
        <span class="text">전화문의</span>
      </EBtn>
    </BtnWrap>
  </ContWrap>
  <!-- // 검색후 : 검색 결과 없는 경우  -->
</template>

<script setup lang="ts">
definePageMeta({
  title: "FAQ",
});

const isSearch = ref(false); // 임시 : 검색 전/후 컨텐츠 확인을 위해 추가
const isDataSearch = ref(true); // 임시 : 컨텐츠 확인을 위해 추가
const isNoDataSearch = ref(true); // 임시 : 컨텐츠 확인을 위해 추가
</script>

<style lang="scss" scoped>
@import url("/assets/css/pages/cs.scss");
</style>
