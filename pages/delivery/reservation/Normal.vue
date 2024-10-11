<template>
  <ContWrap in-top="lg">
    <ContBox>
      <RowListWrap gap="2xl">
        <li class="item">
          <FoldToggleBox open>
            <template #header>
              <div class="fold-title">
                <ETit text="물품" type="fold" />
              </div>
            </template>
            <template #content>
              <ColorBox color="white" size="lg">
                <RowListWrap gap="xl">
                  <li class="item-form">
                    <div class="form-field">
                      <div class="form-title">
                        <ETit type="form">
                          배송상품선택<span class="required"><span class="offscreen">필수입력</span></span>
                        </ETit>
                        <div class="stext">
                          배송할 상품의 종류를 선택해주세요.
                        </div>
                      </div>
                      <div class="form-cont">
                        <GridListWrap gap="sm">
                          <li class="item-grid-category is-active">
                            <EBtn color="light-gray" size="sm" @click="openIndemnityAgreementNormal">
                              <span class="text">의류</span>
                            </EBtn>
                          </li>
                          <li class="item-grid-category">
                            <EBtn color="light-gray" size="sm" @click="openIndemnityAgreementNormal">
                              <span class="text">서신/서류</span>
                            </EBtn>
                          </li>
                          <li class="item-grid-category">
                            <EBtn color="light-gray" size="sm" @click="openIndemnityAgreementNormal">
                              <span class="text">가전제품류</span>
                            </EBtn>
                          </li>
                          <li class="item-grid-category">
                            <EBtn color="light-gray" size="sm" @click="openIndemnityAgreementNormal">
                              <span class="text">과일류</span>
                            </EBtn>
                          </li>
                          <li class="item-grid-category">
                            <EBtn color="light-gray" size="sm" @click="openIndemnityAgreementNormal">
                              <span class="text">곡물류</span>
                            </EBtn>
                          </li>
                          <li class="item-grid-category">
                            <EBtn color="light-gray" size="sm" @click="openIndemnityAgreementNormal">
                              <span class="text">한약류</span>
                            </EBtn>
                          </li>
                          <li class="item-grid-category">
                            <EBtn color="light-gray" size="sm" @click="openIndemnityAgreementNormal">
                              <span class="text">식물류</span>
                            </EBtn>
                          </li>
                          <li class="item-grid-category">
                            <EBtn color="light-gray" size="sm" @click="openIndemnityAgreementNormal">
                              <span class="text">잡화/서적류</span>
                            </EBtn>
                          </li>
                        </GridListWrap>
                      </div>
                    </div>
                  </li>
                  <li class="item-form">
                    <div class="form-field">
                      <div class="form-title">
                        <ETit type="form">
                          물품금액<span class="required"><span class="offscreen">필수입력</span></span>
                        </ETit>
                      </div>
                      <div class="form-cont">
                        <div class="form-input-group valid-check">
                          <EInputBox title="물품금액 입력" type="number" placeholder="물품금액 입력" :max-length="3" is-byte-check>
                            <span class="unit">만원</span>
                          </EInputBox>
                          <div class="valid-desc">
                            물품금액을 입력해주세요.
                          </div>
                        </div>
                        <SwiperAutoWrap class="side-zero">
                          <swiper-slide>
                            <EBtn color="light-gray" size="xs">
                              <span class="text">1만원</span>
                            </EBtn>
                          </swiper-slide>
                          <swiper-slide>
                            <EBtn color="light-gray" size="xs">
                              <span class="text">3만원</span>
                            </EBtn>
                          </swiper-slide>
                          <swiper-slide>
                            <EBtn color="light-gray" size="xs">
                              <span class="text">5만원</span>
                            </EBtn>
                          </swiper-slide>
                          <swiper-slide>
                            <EBtn color="light-gray" size="xs">
                              <span class="text">10만원</span>
                            </EBtn>
                          </swiper-slide>
                          <swiper-slide>
                            <EBtn color="light-gray" size="xs">
                              <span class="text">50만원</span>
                            </EBtn>
                          </swiper-slide>
                        </SwiperAutoWrap>
                        <RowListWrap gap="sm">
                          <li class="dot-text-sm">
                            50만원 초과할 경우 소정의 할증운임을 받습니다.
                          </li>
                          <li class="dot-text-sm">
                            100만원을 초과하는 운송물은 취급하지 않습니다.
                          </li>
                          <li class="dot-text-sm">
                            물품가액은 배송 사고시 보상의 기준이 되며, 미개재시 최대 50만원 한도 내에서 배상해 드립니다
                          </li>
                        </RowListWrap>
                      </div>
                    </div>
                  </li>
                  <li class="item-form">
                    <div class="form-field">
                      <div class="form-title">
                        <ETit type="form">
                          물품명<span class="required"><span class="offscreen">필수입력</span></span>
                        </ETit>
                      </div>
                      <div class="form-cont">
                        <div class="form-input-group valid-check">
                          <EInputBox title="물품명 입력" placeholder="물품명 입력" :max-length="10" is-byte-check />
                          <div class="input-guide">
                            최대 10자만 입력하실 수 있습니다.
                          </div>
                          <div class="valid-desc">
                            물품명을 입력해주세요.
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </RowListWrap>
              </ColorBox>
            </template>
          </FoldToggleBox>
        </li>
        <li v-if="isMember" class="item">
          <FoldToggleBox open>
            <template #header>
              <div class="fold-title">
                <ETit text="보내는 분" type="fold" />
              </div>
            </template>
            <template #content>
              <ColorBox color="white" size="lg">
                <RowListWrap gap="xl">
                  <li class="item-form">
                    <div class="form-field">
                      <div class="form-title">
                        <ETit type="form">
                          이름<span class="required"><span class="offscreen">필수입력</span></span>
                        </ETit>
                      </div>
                      <div class="form-cont">
                        <div class="form-input-group valid-check">
                          <EInputBox title="이름 입력" placeholder="이름 입력" />
                          <div class="valid-desc">
                            이름을 입력해주세요.
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="item-form">
                    <div class="form-field">
                      <div class="form-title">
                        <ETit type="form">
                          휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                        </ETit>
                      </div>
                      <div class="form-cont">
                        <div class="form-input-group valid-check">
                          <EInputBox title="휴대폰번호 입력" type="number" inputmode="tel" placeholder="휴대폰번호 입력" :max-length="11" />
                          <div class="input-guide">
                            공백 없이 숫자만 입력해 주세요.
                          </div>
                          <div class="valid-desc">
                            휴대폰번호를 입력해주세요.
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="item-form">
                    <div class="form-field">
                      <div class="form-title">
                        <FlexGroup align="end">
                          <div class="flex-left">
                            <ETit type="form">
                              주소(반송처)<span class="required"><span class="offscreen">필수입력</span></span>
                            </ETit>
                          </div>
                          <div class="flex-right">
                            <EBtn size="xs" color="line-light-gray" @click="openAddressList">
                              <span class="text">주소록 불러오기</span>
                            </EBtn>
                          </div>
                        </FlexGroup>
                      </div>
                      <div class="form-cont">
                        <div class="form-input-group valid-check">
                          <EInputBox type="search" enterkeyhint="search" title="주소 검색" placeholder="주소 검색" readonly>
                            <button type="button" class="btn-input-search" @click="openSearchAddress">
                              <span class="offscreen">검색</span>
                            </button>
                          </EInputBox>
                          <EInputBox title="상세주소 입력" placeholder="상세주소 입력" />
                          <div class="valid-desc">
                            주소를 검색해주세요.
                          </div>
                        </div>
                        <span class="ui-chk">
                          <input id="formChk01" type="checkbox">
                          <label for="formChk01"><span class="text-md">기본주소지와 동일</span></label>
                        </span>
                      </div>
                    </div>
                  </li>
                </RowListWrap>
              </ColorBox>
            </template>
          </FoldToggleBox>
        </li>
        <li v-if="isNonMember" class="item">
          <FoldToggleBox open>
            <template #header>
              <div class="fold-title">
                <ETit text="보내는 분" type="fold" />
              </div>
            </template>
            <template #content>
              <ColorBox color="white" size="lg">
                <RowListWrap gap="xl">
                  <li class="item-form">
                    <div class="form-field">
                      <div class="form-title">
                        <ETit type="form">
                          이름<span class="required"><span class="offscreen">필수입력</span></span>
                        </ETit>
                      </div>
                      <div class="form-cont">
                        <div class="form-input-group valid-check">
                          <EInputBox title="이름 입력" placeholder="이름 입력" />
                          <div class="valid-desc">
                            이름을 검색해주세요.
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="item-form">
                    <div class="form-field">
                      <div class="form-title">
                        <ETit type="form">
                          휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                        </ETit>
                      </div>
                      <div class="form-cont">
                        <div class="form-input-group valid-check fail">
                          <EInputBox title="휴대폰번호 입력" type="number" inputmode="tel" placeholder="휴대폰번호 입력" :max-length="11">
                            <EBtn color="line-light-gray" size="xs">
                              <span class="text">인증번호 발송</span>
                            </EBtn>
                          </EInputBox>
                          <!-- 유효성 검사 CASE 01 : 휴대폰번호 인증 미입력한 경우 -->
                          <div class="valid-desc">
                            휴대폰번호를 입력해주세요.
                          </div>
                          <!-- // 유효성 검사 CASE 01 : 휴대폰번호 인증 미입력한 경우 -->
                          <!-- 유효성 검사 CASE 02 : 휴대폰번호 인증 9자 미만 입력한 경우 -->
                          <!-- <div class="valid-desc">
                            휴대폰번호는 9자 이상 등록해주세요.
                          </div> -->
                          <!-- // 유효성 검사 CASE 02 : 휴대폰번호 인증 9자 미만 입력한 경우 -->
                          <EInputBox title="인증번호 입력" type="number" placeholder="인증번호 입력" :max-length="6" is-byte-check />
                          <BtnWrap>
                            <EBtn color="line-green" size="md" disabled>
                              <span class="text">인증하기</span>
                            </EBtn>
                          </BtnWrap>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="item-form">
                    <div class="form-field">
                      <div class="form-title">
                        <ETit type="form">
                          휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                        </ETit>
                      </div>
                      <div class="form-cont">
                        <div class="form-input-group">
                          <EInputBox title="휴대폰번호 입력" type="number" inputmode="tel" placeholder="휴대폰번호 입력" :max-length="11" value="01012345678" disabled>
                            <EBtn color="line-light-gray" size="xs">
                              <span class="text">재발송</span>
                            </EBtn>
                          </EInputBox>
                          <EInputBox title="인증번호 입력" type="number" placeholder="인증번호 입력" :max-length="6" is-byte-check>
                            <span class="unit fc-red">05:34</span>
                          </EInputBox>
                          <BtnWrap>
                            <EBtn color="line-green" size="md" disabled>
                              <span class="text">인증하기</span>
                            </EBtn>
                          </BtnWrap>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="item-form">
                    <div class="form-field">
                      <div class="form-title">
                        <ETit type="form">
                          휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                        </ETit>
                      </div>
                      <div class="form-cont">
                        <div class="form-input-group">
                          <EInputBox title="휴대폰번호 입력" type="number" inputmode="tel" placeholder="휴대폰번호 입력" :max-length="11" value="01012345678" disabled>
                            <EBtn color="line-light-gray" size="xs">
                              <span class="text">재발송</span>
                            </EBtn>
                          </EInputBox>
                          <EInputBox title="인증번호 입력" type="number" placeholder="인증번호 입력" value="12345" :max-length="6" is-byte-check>
                            <span class="unit fc-red">05:34</span>
                          </EInputBox>
                          <BtnWrap>
                            <EBtn color="line-green" size="md">
                              <span class="text">인증하기</span>
                            </EBtn>
                          </BtnWrap>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="item-form">
                    <div class="form-field">
                      <div class="form-title">
                        <ETit type="form">
                          휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                        </ETit>
                      </div>
                      <div class="form-cont">
                        <div class="form-input-group">
                          <EInputBox title="휴대폰번호 입력" type="number" inputmode="tel" placeholder="휴대폰번호 입력" :max-length="11" value="01012341234">
                            <EBtn color="line-light-gray" size="xs">
                              <span class="text">재발송</span>
                            </EBtn>
                          </EInputBox>
                          <EInputBox title="인증번호 입력" type="number" placeholder="인증번호 입력" value="123456" :max-length="6" is-byte-check>
                            <span class="unit">00:00</span>
                          </EInputBox>
                          <BtnWrap>
                            <EBtn color="line-green" size="md" disabled>
                              <span class="text">인증하기</span>
                            </EBtn>
                          </BtnWrap>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="item-form">
                    <div class="form-field">
                      <div class="form-title">
                        <ETit type="form">
                          예약번호 수신 휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                        </ETit>
                      </div>
                      <div class="form-cont">
                        <div class="form-input-group valid-check">
                          <EInputBox title="휴대폰번호 입력" type="number" inputmode="tel" placeholder="휴대폰번호 입력" :max-length="11" />
                          <div class="input-guide">
                            공백 없이 숫자만 입력해 주세요.
                          </div>
                          <div class="valid-desc">
                            휴대폰번호를 입력해주세요.
                          </div>
                        </div>
                        <span class="ui-chk">
                          <input id="formChk02" type="checkbox">
                          <label for="formChk02"><span class="text-md">휴대폰번호와 동일</span></label>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li class="item-form">
                    <div class="form-field">
                      <div class="form-title">
                        <ETit type="form">
                          예약번호 비밀번호<span class="required"><span class="offscreen">필수입력</span></span>
                        </ETit>
                      </div>
                      <div class="form-cont">
                        <div class="form-input-group valid-check">
                          <EInputBox title="예약 비밀번호 입력" type="number" placeholder="예약 비밀번호 입력" :max-length="8" />
                          <div class="input-guide">
                            숫자 4-8자로 입력해주세요.
                          </div>
                          <div class="valid-desc">
                            예약 비밀번호를 입력해주세요.
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="item-form">
                    <div class="form-field">
                      <div class="form-title">
                        <FlexGroup align="end">
                          <div class="flex-left">
                            <ETit type="form">
                              주소(반송처)<span class="required"><span class="offscreen">필수입력</span></span>
                            </ETit>
                          </div>
                          <div class="flex-right">
                            <EBtn size="xs" color="line-light-gray" @click="openAddressList">
                              <span class="text">주소록 불러오기</span>
                            </EBtn>
                          </div>
                        </FlexGroup>
                      </div>
                      <div class="form-cont">
                        <div class="form-input-group valid-check">
                          <EInputBox type="search" enterkeyhint="search" title="주소 검색" placeholder="주소 검색" readonly>
                            <button type="button" class="btn-input-search" @click="openSearchAddress">
                              <span class="offscreen">검색</span>
                            </button>
                          </EInputBox>
                          <EInputBox title="상세주소 입력" placeholder="상세주소 입력" />
                          <div class="valid-desc">
                            주소를 입력해주세요.
                          </div>
                        </div>
                        <span class="ui-chk">
                          <input id="formChk03" type="checkbox" disabled>
                          <label for="formChk03"><span class="text-md">기본주소지와 동일</span></label>
                        </span>
                      </div>
                    </div>
                  </li>
                </RowListWrap>
              </ColorBox>
            </template>
          </FoldToggleBox>
        </li>
        <li v-if="isMember" class="item">
          <FoldToggleBox open>
            <template #header>
              <div class="fold-title">
                <ETit text="받는 분" type="fold" />
              </div>
            </template>
            <template #content>
              <ColorBox color="white" size="lg">
                <RowListWrap gap="xl">
                  <li class="item-form">
                    <div class="form-field">
                      <div class="form-title">
                        <ETit type="form">
                          이름<span class="required"><span class="offscreen">필수입력</span></span>
                        </ETit>
                      </div>
                      <div class="form-cont">
                        <div class="form-input-group valid-check">
                          <EInputBox title="이름 입력" placeholder="이름 입력" />
                          <p class="valid-desc">
                            이름을 입력해주세요
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="item-form">
                    <div class="form-field">
                      <div class="form-title">
                        <ETit type="form">
                          휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                        </ETit>
                      </div>
                      <div class="form-cont">
                        <div class="form-input-group valid-check">
                          <EInputBox title="휴대폰번호 입력" type="number" inputmode="tel" placeholder="휴대폰번호 입력" :max-length="11" />
                          <div class="input-guide">
                            공백 없이 숫자만 입력해 주세요.
                          </div>
                          <p class="valid-desc">
                            휴대폰번호를 입력해주세요
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="item-form">
                    <div class="form-field">
                      <div class="form-title">
                        <FlexGroup align="end">
                          <div class="flex-left">
                            <ETit type="form">
                              주소<span class="required"><span class="offscreen">필수입력</span></span>
                            </ETit>
                          </div>
                          <div class="flex-right">
                            <EBtn size="xs" color="line-light-gray" @click="openAddressList">
                              <span class="text">주소록 불러오기</span>
                            </EBtn>
                          </div>
                        </FlexGroup>
                      </div>
                      <div class="form-cont">
                        <div class="form-input-group valid-check">
                          <EInputBox type="search" enterkeyhint="search" title="주소 검색" placeholder="주소 검색" readonly>
                            <button type="button" class="btn-input-search" @click="openSearchAddress">
                              <span class="offscreen">검색</span>
                            </button>
                          </EInputBox>
                          <EInputBox title="상세주소 입력" placeholder="상세주소 입력" />
                          <p class="valid-desc">
                            주소를 입력해주세요.
                          </p>
                        </div>
                        <span class="ui-chk">
                          <input id="formChk04" type="checkbox">
                          <label for="formChk04"><span class="text-md">주소록에 추가</span></label>
                        </span>
                      </div>
                    </div>
                  </li>
                </RowListWrap>
              </ColorBox>
              <RowListWrap gap="lg" size="sm">
                <li class="item-fold">
                  <FoldToggleBox type="cont">
                    <template #header>
                      <div class="fold-title">
                        <FlexGroup align="center">
                          <div class="flex-left">
                            <ETit type="box">
                              <span class="text fw-sb">받는 분 </span>
                              <span class="fc-spot fw-sb">(추가)</span>
                            </ETit>
                          </div>
                          <div class="flex-right">
                            <EBtn color="light-gray" size="xs">
                              <EIco name="delete" color="gray" size="xs" />
                              <span class="text">삭제</span>
                            </EBtn>
                          </div>
                        </FlexGroup>
                      </div>
                    </template>
                    <template #content>
                      <RowListWrap gap="xl">
                        <li class="item-form">
                          <div class="form-field">
                            <div class="form-title">
                              <ETit type="form">
                                이름<span class="required"><span class="offscreen">필수입력</span></span>
                              </ETit>
                            </div>
                            <div class="form-cont">
                              <div class="form-input-group valid-check">
                                <EInputBox title="이름 입력" placeholder="이름 입력" />
                                <p class="valid-desc">
                                  이름을 입력해주세요.
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="item-form">
                          <div class="form-field">
                            <div class="form-title">
                              <ETit type="form">
                                휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                              </ETit>
                            </div>
                            <div class="form-cont">
                              <div class="form-input-group valid-check">
                                <EInputBox title="휴대폰번호 입력" type="number" inputmode="tel" placeholder="휴대폰번호 입력" :max-length="11" />
                                <div class="input-guide">
                                  공백 없이 숫자만 입력해 주세요.
                                </div>
                                <p class="valid-desc">
                                  휴대폰번호를 입력해주세요.
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="item-form">
                          <div class="form-field">
                            <div class="form-title">
                              <FlexGroup align="end">
                                <div class="flex-left">
                                  <ETit type="form">
                                    주소<span class="required"><span class="offscreen">필수입력</span></span>
                                  </ETit>
                                </div>
                                <div class="flex-right">
                                  <EBtn size="xs" color="line-light-gray" @click="openAddressList">
                                    <span class="text">주소록 불러오기</span>
                                  </EBtn>
                                </div>
                              </FlexGroup>
                            </div>
                            <div class="form-cont">
                              <div class="form-input-group valid-check">
                                <EInputBox type="search" enterkeyhint="search" title="주소 검색" placeholder="주소 검색" readonly>
                                  <button type="button" class="btn-input-search" @click="openSearchAddress">
                                    <span class="offscreen">검색</span>
                                  </button>
                                </EInputBox>
                                <EInputBox title="상세주소 입력" placeholder="상세주소 입력" />
                                <p class="valid-desc">
                                  주소를 입력해주세요.
                                </p>
                              </div>
                              <span class="ui-chk">
                                <input id="formChk05" type="checkbox">
                                <label for="formChk05"><span class="text-md">기본주소지와 동일</span></label>
                              </span>
                            </div>
                          </div>
                        </li>
                      </RowListWrap>
                    </template>
                  </FoldToggleBox>
                </li>
                <li class="item-fold">
                  <FoldToggleBox type="cont">
                    <template #header>
                      <div class="fold-title">
                        <FlexGroup align="center">
                          <div class="flex-left">
                            <ETit type="box">
                              <span class="text fw-sb">받는 분 </span>
                              <span class="fc-spot fw-sb">(추가)</span>
                            </ETit>
                          </div>
                          <div class="flex-right">
                            <EBtn color="light-gray" size="xs">
                              <EIco name="delete" color="gray" size="xs" />
                              <span class="text">삭제</span>
                            </EBtn>
                          </div>
                        </FlexGroup>
                      </div>
                    </template>
                    <template #content>
                      <RowListWrap gap="xl">
                        <li class="item-form">
                          <div class="form-field">
                            <div class="form-title">
                              <ETit type="form">
                                이름<span class="required"><span class="offscreen">필수입력</span></span>
                              </ETit>
                            </div>
                            <div class="form-cont">
                              <div class="form-input-group valid-check">
                                <EInputBox title="이름 입력" placeholder="이름 입력" />
                                <p class="valid-desc">
                                  주소를 입력해주세요.
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="item-form">
                          <div class="form-field">
                            <div class="form-title">
                              <ETit type="form">
                                휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                              </ETit>
                            </div>
                            <div class="form-cont">
                              <div class="form-input-group valid-check">
                                <EInputBox title="휴대폰번호 입력" type="number" inputmode="tel" placeholder="휴대폰번호 입력" :max-length="11" />
                                <div class="input-guide">
                                  공백 없이 숫자만 입력해 주세요.
                                </div>
                                <p class="valid-desc">
                                  주소를 입력해주세요.
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="item-form">
                          <div class="form-field">
                            <div class="form-title">
                              <FlexGroup align="end">
                                <div class="flex-left">
                                  <ETit type="form">
                                    주소<span class="required"><span class="offscreen">필수입력</span></span>
                                  </ETit>
                                </div>
                                <div class="flex-right">
                                  <EBtn size="xs" color="line-light-gray" @click="openAddressList">
                                    <span class="text">주소록 불러오기</span>
                                  </EBtn>
                                </div>
                              </FlexGroup>
                            </div>
                            <div class="form-cont">
                              <div class="form-input-group valid-check">
                                <EInputBox type="search" enterkeyhint="search" title="주소 검색" placeholder="주소 검색" readonly>
                                  <button type="button" class="btn-input-search" @click="openSearchAddress">
                                    <span class="offscreen">검색</span>
                                  </button>
                                </EInputBox>
                                <EInputBox title="상세주소 입력" placeholder="상세주소 입력" />
                                <p class="valid-desc">
                                  주소를 입력해주세요.
                                </p>
                              </div>
                              <span class="ui-chk">
                                <input id="formChk06" type="checkbox">
                                <label for="formChk06"><span class="text-md">기본주소지와 동일</span></label>
                              </span>
                            </div>
                          </div>
                        </li>
                      </RowListWrap>
                    </template>
                  </FoldToggleBox>
                </li>
              </RowListWrap>
              <BtnWrap size="md">
                <EBtn color="line-gray" size="md">
                  <EIco name="plus" color="gray" size="sm" />
                  <span class="text">받는분 추가</span>
                </EBtn>
              </BtnWrap>
            </template>
          </FoldToggleBox>
        </li>
        <li v-if="isNonMember" class="item">
          <FoldToggleBox open>
            <template #header>
              <div class="fold-title">
                <ETit text="받는 분" type="fold" />
              </div>
            </template>
            <template #content>
              <ColorBox color="white" size="lg">
                <RowListWrap gap="xl">
                  <li class="item-form">
                    <div class="form-field">
                      <div class="form-title">
                        <ETit type="form">
                          이름<span class="required"><span class="offscreen">필수입력</span></span>
                        </ETit>
                      </div>
                      <div class="form-cont">
                        <div class="form-input-group valid-check">
                          <EInputBox title="이름 입력" placeholder="이름 입력" />
                          <p class="valid-desc">
                            이름을 입력해주세요.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="item-form">
                    <div class="form-field">
                      <div class="form-title">
                        <ETit type="form">
                          휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                        </ETit>
                      </div>
                      <div class="form-cont">
                        <div class="form-input-group valid-check">
                          <EInputBox title="휴대폰번호 입력" type="number" inputmode="tel" placeholder="휴대폰번호 입력" :max-length="11" />
                          <div class="input-guide">
                            공백 없이 숫자만 입력해 주세요.
                          </div>
                          <p class="valid-desc">
                            휴대폰번호를 입력해주세요.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="item-form">
                    <div class="form-field">
                      <div class="form-title">
                        <FlexGroup align="end">
                          <div class="flex-left">
                            <ETit type="form">
                              주소<span class="required"><span class="offscreen">필수입력</span></span>
                            </ETit>
                          </div>
                          <div class="flex-right">
                            <EBtn size="xs" color="line-light-gray" @click="openAddressList">
                              <span class="text">주소록 불러오기</span>
                            </EBtn>
                          </div>
                        </FlexGroup>
                      </div>
                      <div class="form-cont">
                        <div class="form-input-group valid-check">
                          <EInputBox type="search" enterkeyhint="search" title="주소 검색" placeholder="주소 검색" readonly>
                            <button type="button" class="btn-input-search" @click="openSearchAddress">
                              <span class="offscreen">검색</span>
                            </button>
                          </EInputBox>
                          <EInputBox title="상세주소 입력" placeholder="상세주소 입력" />
                          <p class="valid-desc">
                            주소를 입력해주세요.
                          </p>
                        </div>
                        <span class="ui-chk">
                          <input id="formChk07" type="checkbox" disabled>
                          <label for="formChk07"><span class="text-md">주소록에 추가</span></label>
                        </span>
                      </div>
                    </div>
                  </li>
                </RowListWrap>
                <RowListWrap gap="xs" size="md">
                  <li class="dot-text-sm-green">
                    로그인 하시면 [받는 분]을 최대 10명까지 추가하여 예약하실 수 있습니다.
                  </li>
                </RowListWrap>
              </ColorBox>
            </template>
          </FoldToggleBox>
        </li>
        <li class="item">
          <FoldToggleBox open>
            <template #header>
              <div class="fold-title">
                <ETit text="운임안내" type="fold" />
              </div>
            </template>
            <template #content>
              <ColorBox color="white" size="lg">
                <TableWrap type="info" gap="lg" size="lg" table-name="운임안내">
                  <colgroup>
                    <col style="width: 96px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        동일권역
                      </th>
                      <td class="ta-right">
                        <div class="goods-group">
                          <EGoods type="origin" val="3,200" unit="원" />
                          <EGoods val="3,000" unit="원" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        타권역
                      </th>
                      <td class="ta-right">
                        <div class="goods-group">
                          <EGoods type="origin" val="3,700" unit="원" />
                          <EGoods val="3,000" unit="원" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        제주도
                      </th>
                      <td class="ta-right">
                        <div class="goods-group">
                          <EGoods type="origin" val="6,200" unit="원" />
                          <EGoods val="3,000" unit="원" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        도서산간
                      </th>
                      <td class="ta-right">
                        지역별 요금 상이
                      </td>
                    </tr>
                  </tbody>
                </TableWrap>
              </ColorBox>
            </template>
          </FoldToggleBox>
        </li>
        <li v-if="isMember" class="item">
          <FoldToggleBox open>
            <template #header>
              <div class="fold-title">
                <FlexGroup>
                  <div class="flex-left">
                    <ETit text="할인수단" type="fold" />
                  </div>
                  <div class="flex-right">
                    <EGoods size="md" val="-0" unit="원" class="fw-md fc-red" />
                  </div>
                </FlexGroup>
              </div>
            </template>
            <template #content>
              <ColorBox color="white" size="lg">
                <RowListWrap gap="line">
                  <li class="item-sm">
                    <FlexGroup>
                      <div class="flex-left">
                        <ETit text="쿠폰" type="form" />
                      </div>
                      <div class="flex-right">
                        <div class="align-group">
                          <span class="stext">가능 1개 / <span class="fc-gray60">전체 7개</span></span>
                          <EBtn color="line-light-gray" size="xs" @click="openSelectCoupon">
                            <span class="text">사용</span>
                          </EBtn>
                        </div>
                      </div>
                    </FlexGroup>
                    <div class="tag-full-box cont-discount-info">
                      <p class="stext fc-black fw-md">
                        1,000원
                      </p>
                      <button type="button" class="btn-delete">
                        <EIco name="close" color="gray" size="xs">
                          <span class="offscreen">할인 취소</span>
                        </EIco>
                      </button>
                    </div>
                  </li>
                  <li class="item-sm">
                    <FlexGroup>
                      <div class="flex-left">
                        <ETit text="L.POINT" type="form" />
                      </div>
                      <div class="flex-right">
                        <div class="align-group">
                          <span class="stext">사용가능 <EGoods val="10,000" unit="P" /></span>
                          <EBtn tag="a" color="line-light-gray" size="xs" to="/common/l-point">
                            <span class="text">사용</span>
                          </EBtn>
                        </div>
                      </div>
                    </FlexGroup>
                    <div class="tag-full-box cont-discount-info">
                      <p class="stext fc-black fw-md">
                        1,000원
                      </p>
                      <button type="button" class="btn-delete">
                        <EIco name="close" color="gray" size="xs">
                          <span class="offscreen">할인 취소</span>
                        </EIco>
                      </button>
                    </div>
                  </li>
                  <li class="item-sm">
                    <FlexGroup>
                      <div class="flex-left">
                        <ETit text="금액권" type="form" />
                      </div>
                      <div class="flex-right">
                        <div class="align-group">
                          <span class="stext">사용가능 <EGoods val="17,500" unit="P" /></span>
                          <EBtn color="line-light-gray" size="xs" @click="openSelectVoucher">
                            <span class="text">사용</span>
                          </EBtn>
                        </div>
                      </div>
                    </FlexGroup>
                    <div class="tag-full-box cont-discount-info">
                      <p class="stext fc-black fw-md">
                        1,000원
                      </p>
                      <button type="button" class="btn-delete">
                        <EIco name="close" color="gray" size="xs">
                          <span class="offscreen">할인 취소</span>
                        </EIco>
                      </button>
                    </div>
                  </li>
                </RowListWrap>
              </ColorBox>
              <div class="cash-receipt-info-wrap">
                <CtitleWrap>
                  <ETit text="현금영수증" type="xlCont" />
                </CtitleWrap>
                <ColorBox color="white" size="lg">
                  <CtitleWrap size="zero">
                    <FlexGroup>
                      <div class="flex-left">
                        <ETit text="현금영수증" type="form" />
                      </div>
                      <div class="flex-right">
                        <UiColGroup gap="lg">
                          <span class="ui-rdo">
                            <input id="cashReceiptRdo01" v-model="cashReceiptRadio" type="radio" name="cashReceiptRdo01" value="receiptApply">
                            <label for="cashReceiptRdo01"><span class="text-md">신청</span></label>
                          </span>
                          <span class="ui-rdo">
                            <input id="cashReceiptRdo02" v-model="cashReceiptRadio" type="radio" name="cashReceiptRdo01" value="receiptNotApply">
                            <label for="cashReceiptRdo02"><span class="text-md">미신청</span></label>
                          </span>
                        </UiColGroup>
                      </div>
                    </FlexGroup>
                  </CtitleWrap>
                  <div v-show="cashReceiptRadio === 'receiptApply'">
                    <ColorBox color="light-gray" size="sm">
                      <FlexGroup>
                        <div class="flex-left">
                          <div class="stext-gray90 fw-sb">
                            개인 소득공제
                          </div>
                        </div>
                        <div class="flex-right">
                          <div class="align-group">
                            <div class="stext">
                              313-31-12345
                            </div>
                            <EBtn color="line-light-gray" size="xs">
                              <span class="text">변경</span>
                            </EBtn>
                          </div>
                        </div>
                      </FlexGroup>
                    </ColorBox>
                    <ColorBox color="light-gray" size="sm">
                      <FlexGroup>
                        <div class="flex-left">
                          <div class="stext-gray90 fw-sb">
                            사업자 소득공제
                          </div>
                        </div>
                        <div class="flex-right">
                          <div class="align-group">
                            <div class="stext">
                              313-31-12345
                            </div>
                            <EBtn color="line-light-gray" size="xs">
                              <span class="text">변경</span>
                            </EBtn>
                          </div>
                        </div>
                      </FlexGroup>
                    </ColorBox>
                    <BtnWrap type="full" size="md">
                      <EBtn color="line-light-gray" size="sm">
                        <span class="text">현금영수증 발급정보 등록</span>
                      </EBtn>
                    </BtnWrap>
                  </div>
                  <div v-show="cashReceiptRadio === 'receiptNotApply'">
                    <ColorBox color="light-gray" size="sm">
                      <FlexGroup>
                        <div class="flex-left">
                          <div class="stext-gray90 fw-sb">
                            현금영수증 신청 안함
                          </div>
                        </div>
                        <div class="flex-right">
                          <EBtn color="line-light-gray" size="xs">
                            <span class="text">변경</span>
                          </EBtn>
                        </div>
                      </FlexGroup>
                    </ColorBox>
                  </div>
                </ColorBox>
              </div>
            </template>
          </FoldToggleBox>
        </li>
        <li class="item">
          <FoldToggleBox open>
            <template #header>
              <div class="fold-title">
                <ETit text="결제수단" type="fold" />
              </div>
            </template>
            <template #content>
              <ColorBox color="white" size="lg">
                <RowListWrap gap="line">
                  <li class="item-md">
                    <span class="ui-rdo">
                      <input id="orderPayRdo01" v-model="orderPayRadio" type="radio" name="orderPayRdo01" value="payCard">
                      <label for="orderPayRdo01"><span class="text-lg">신용(체크)카드</span></label>
                    </span>
                    <div v-show="orderPayRadio === 'payCard'" class="cont-pay-info">
                      <div class="ui-select">
                        <select title="신용(체크)카드 선택">
                          <option>롯데카드</option>
                          <option>현대카드</option>
                          <option>국민카드</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li class="item-md">
                    <span class="ui-rdo">
                      <input id="orderPayRdo02" v-model="orderPayRadio" type="radio" name="orderPayRdo01" value="payLpay">
                      <label for="orderPayRdo02"><span class="text-lg">L.PAY</span></label>
                    </span>
                  </li>
                  <li class="item-md">
                    <span class="ui-rdo">
                      <input id="orderPayRdo03" v-model="orderPayRadio" type="radio" name="orderPayRdo01" value="payNaver">
                      <label for="orderPayRdo03"><span class="text-lg">네이버 간편결제</span></label>
                    </span>
                    <div v-show="orderPayRadio === 'payNaver'" class="cont-pay-info">
                      <BtnWrap>
                        <EBtn color="line-light-gray" size="sm">
                          <span class="text">네이버 카드 결제</span>
                        </EBtn>
                        <EBtn color="line-light-gray" size="sm">
                          <span class="text">네이버 포인트 결제</span>
                        </EBtn>
                      </BtnWrap>
                    </div>
                  </li>
                  <li class="item-md">
                    <span class="ui-rdo">
                      <input id="orderPayRdo04" v-model="orderPayRadio" type="radio" name="orderPayRdo01" value="payKakao">
                      <label for="orderPayRdo04"><span class="text-lg">카카오페이</span></label>
                    </span>
                  </li>
                  <li class="item-md">
                    <span class="ui-chk">
                      <!-- DESC :: 비회원일 경우 [disabled] 속성 추가 -->
                      <input id="orderPayChk01" type="checkbox">
                      <label for="orderPayChk01"><span class="text-sm fc-gray70">선택한 결제수단 다음에도 사용</span></label>
                    </span>
                  </li>
                </RowListWrap>
                <div class="pay-benefit-info-wrap">
                  <ColorBox color="light-green" size="sm" class="ta-center">
                    <p class="stext fw-md fc-spot">
                      삼성카드 결제 시 1,000원 캐시백
                    </p>
                  </ColorBox>
                </div>
              </ColorBox>
            </template>
          </FoldToggleBox>
        </li>
        <li class="item">
          <FoldToggleBox open>
            <template #header>
              <div class="fold-title">
                <FlexGroup>
                  <div class="flex-left">
                    <ETit text="결제금액" type="fold" />
                  </div>
                  <div class="flex-right">
                    <EGoods size="xl" val="6,400" unit="원" class="fw-md fc-spot" />
                  </div>
                </FlexGroup>
              </div>
            </template>
            <template #content>
              <ColorBox color="white" size="lg">
                <RowListWrap gap="lg">
                  <li class="item-order-info">
                    <FlexGroup align="center">
                      <div class="flex-left">
                        <ETit text="전체운임" type="goods" />
                      </div>
                      <div class="flex-right">
                        <ETit type="goods">
                          <EGoods val="3,000" unit="원" />
                        </ETit>
                      </div>
                    </FlexGroup>
                    <RowListWrap gap="sm" size="2xs">
                      <li class="item-sub-order-info">
                        <FlexGroup align="center">
                          <div class="flex-left">
                            <EIco name="bullet-order-list" />
                            <ETit text="동일권역" type="sGoods" />
                          </div>
                          <div class="flex-right">
                            <EGoods val="3,300" unit="원" />
                          </div>
                        </FlexGroup>
                      </li>
                      <li class="item-sub-order-info">
                        <FlexGroup align="center">
                          <div class="flex-left">
                            <EIco name="bullet-order-list" />
                            <ETit text="타권역" type="sGoods" />
                          </div>
                          <div class="flex-right">
                            <EGoods val="5,700" unit="원" />
                          </div>
                        </FlexGroup>
                      </li>
                    </RowListWrap>
                  </li>
                  <li class="item-order-info">
                    <FlexGroup align="center">
                      <div class="flex-left">
                        <div class="flex-left">
                          <ETit text="운임할인" type="goods" />
                        </div>
                      </div>
                      <div class="flex-right">
                        <ETit type="goods">
                          <EGoods val="-600" unit="원" class="fc-red" />
                        </ETit>
                      </div>
                    </FlexGroup>
                    <RowListWrap gap="sm" size="2xs">
                      <li class="item-sub-order-info">
                        <FlexGroup align="center">
                          <div class="flex-left">
                            <EIco name="bullet-order-list" />
                            <ETit text="L.POINT" type="sGoods" />
                          </div>
                          <div class="flex-right">
                            <EGoods val="-150" unit="원" />
                          </div>
                        </FlexGroup>
                      </li>
                      <li class="item-sub-order-info">
                        <FlexGroup align="center">
                          <div class="flex-left">
                            <EIco name="bullet-order-list" />
                            <ETit text="구독할인" type="sGoods" />
                          </div>
                          <div class="flex-right">
                            <EGoods val="-150" unit="원" />
                          </div>
                        </FlexGroup>
                      </li>
                      <li class="item-sub-order-info">
                        <FlexGroup align="center">
                          <div class="flex-left">
                            <EIco name="bullet-order-list" />
                            <ETit text="쿠폰할인" type="sGoods" />
                          </div>
                          <div class="flex-right">
                            <EGoods val="-150" unit="원" />
                          </div>
                        </FlexGroup>
                      </li>
                      <li class="item-sub-order-info">
                        <FlexGroup align="center">
                          <div class="flex-left">
                            <EIco name="bullet-order-list" />
                            <ETit text="금액권사용" type="sGoods" />
                          </div>
                          <div class="flex-right">
                            <EGoods val="-150" unit="원" />
                          </div>
                        </FlexGroup>
                      </li>
                    </RowListWrap>
                  </li>
                </RowListWrap>
              </ColorBox>
            </template>
          </FoldToggleBox>
        </li>
      </RowListWrap>
    </ContBox>
    <ContBox size="lg">
      <AllAgreeWrap v-model:checkCount="checkCheckBox" :index="1" :total-count="totalCheckBox">
        <ColorBox color="white" size="md">
          <div ref="agreeListRef">
            <RowListWrap gap="md">
              <li class="ui-col-item">
                <FlexGroup>
                  <div class="flex-left">
                    <span class="ui-chk">
                      <input id="agreeChk01" type="checkbox">
                      <label for="agreeChk01"><span class="text-md">택배 이용약관<span class="required"><span class="offscreen">필수체크</span></span></span></label>
                    </span>
                  </div>
                  <div class="flex-right">
                    <ETBtn size="xs" @click="openTermsOfUseNormal">
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
                      <input id="agreeChk01" type="checkbox">
                      <label for="agreeChk01"><span class="text-md">PG사 전자금융거래 약관동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
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
              <li class="ui-col-item">
                <FlexGroup>
                  <div class="flex-left">
                    <span class="ui-chk">
                      <input id="agreeChk01" type="checkbox">
                      <label for="agreeChk01"><span class="text-md">PG사 개인정보 수집 및 이용동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
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
              <li class="ui-col-item">
                <FlexGroup>
                  <div class="flex-left">
                    <span class="ui-chk">
                      <input id="agreeChk01" type="checkbox">
                      <label for="agreeChk01"><span class="text-md">PG사 개인정보 제3자 제공동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
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
      <RowListWrap size="xs">
        <li class="dot-text-sm">
          결제 후 14일간 세븐일레븐 매장에 택배를 접수하지 않을 경우, 자동결제 취소됩니다.
        </li>
      </RowListWrap>
    </ContBox>
  </ContWrap>
  <ContDocker>
    <BtnWrap type="auto">
      <EBtn color="line-light-gray" size="lg">
        <span class="text">취소</span>
      </EBtn>
      <EBtn color="green" size="lg">
        <span class="text"><EGoods val="6,400" unit="원" /> 결제하기</span>
      </EBtn>
    </BtnWrap>
  </ContDocker>

  <!-- pop : 일반택배 파손면책 동의 -->
  <popDeliveryIndemnityAgreementNormal v-model:sta="popIndemnityAgreementNormal" />
  <!-- // pop : 일반택배 파손면책 동의 -->

  <!-- pop : 주소록 -->
  <PopDeliveryAddressList v-model:sta="popAddressList" />
  <!-- // pop : 주소록 -->

  <!-- pop : 일반택배 이용약관 -->
  <PopDeliveryTermsOfUseNormal v-model:sta="popTermsOfUseNormal" />
  <!-- // pop : 일반택배 이용약관 -->

  <!-- pop : 개인정보 수집 및 이용약관 -->
  <PopTermsPersonalInfoAgree v-model:sta="popPersonalInfoAgree" />
  <!-- // pop : 개인정보 수집 및 이용약관 -->

  <!-- pop : 주소검색 -->
  <PopMySearchAddress v-model:sta="popSearchAddress" />
  <!-- // pop : 주소검색 -->

  <!-- pop : 구독할인 -->
  <popCommSelectSubscribe v-model:sta="popSelectSubscribe" />
  <!-- // pop : 구독할인 -->

  <!-- pop : 쿠폰 -->
  <popCommSelectCoupon v-model:sta="popSelectCoupon" />
  <!-- // pop : 쿠폰 -->

  <!-- pop : 금액권선택 -->
  <popCommSelectVoucher v-model:sta="popSelectVoucher" />
  <!-- // pop : 금액권선택 -->
</template>

<script setup lang="ts">
definePageMeta({
  title: "일반 택배예약",
  hideRightHeader: false,
});

const isMember = ref(true);
const isNonMember = ref(true);
const orderPayRadio = ref();
const cashReceiptRadio = ref();

// 일반택배 파손면책 동의 팝업
const popIndemnityAgreementNormal = ref({ open: false });
const openIndemnityAgreementNormal = () => popIndemnityAgreementNormal.value.open = true;

// 주소록 팝업
const popAddressList = ref({ open: false });
const openAddressList = () => popAddressList.value.open = true;

// 일반택배 이용약관 팝업
const popTermsOfUseNormal = ref({ open: false });
const openTermsOfUseNormal = () => popTermsOfUseNormal.value.open = true;

// 개인정보 수집 및 이용약관 팝업
const popPersonalInfoAgree = ref({ open: false });
const openPersonalInfoAgree = () => popPersonalInfoAgree.value.open = true;

// 주소검색 팝업
const popSearchAddress = ref({ open: false });
const openSearchAddress = () => popSearchAddress.value.open = true;

// 증정품선택 팝업
const popSelectSubscribe = ref({ open: false });
const openSelectSubscribe = () => popSelectSubscribe.value.open = true;

// 쿠폰 팝업
const popSelectCoupon = ref({ open: false });
const openSelectCoupon = () => popSelectCoupon.value.open = true;

// 금액권 선택 팝업
const popSelectVoucher = ref({ open: false });
const openSelectVoucher = () => popSelectVoucher.value.open = true;

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
@import url("assets/css/pages/delivery.scss");
</style>
