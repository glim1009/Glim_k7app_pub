<template>
  <ContWrap>
    <RowListWrap gap="2xl">
      <li class="item">
        <FoldToggleBox>
          <template #header>
            <div class="fold-title">
              <div class="ctitle-lg">
                물품
              </div>
            </div>
          </template>
          <template #content>
            <ColorBox color="white" size="lg">
              <RowListWrap gap="xl">
                <li class="item-form">
                  <div class="form-field">
                    <div class="form-title">
                      <div class="ctitle-xs">
                        배송상품선택<span class="required"><span class="offscreen">필수입력</span></span>
                      </div>
                      <div class="stext-sm">
                        배송할 상품의 종류를 선택해주세요.
                      </div>
                    </div>
                    <div class="form-cont">
                      <GridListWrap gap="sm">
                        <li class="item-grid is-active">
                          <EBtn color="light-gray" size="sm">
                            <span class="text">의류</span>
                          </EBtn>
                        </li>
                        <li class="item-grid">
                          <EBtn color="light-gray" size="sm">
                            <span class="text">서신/서류</span>
                          </EBtn>
                        </li>
                        <li class="item-grid">
                          <EBtn color="light-gray" size="sm">
                            <span class="text">가전제품류</span>
                          </EBtn>
                        </li>
                        <li class="item-grid">
                          <EBtn color="light-gray" size="sm">
                            <span class="text">과일류</span>
                          </EBtn>
                        </li>
                        <li class="item-grid">
                          <EBtn color="light-gray" size="sm">
                            <span class="text">곡물류</span>
                          </EBtn>
                        </li>
                        <li class="item-grid">
                          <EBtn color="light-gray" size="sm">
                            <span class="text">한약류</span>
                          </EBtn>
                        </li>
                        <li class="item-grid">
                          <EBtn color="light-gray" size="sm">
                            <span class="text">식물류</span>
                          </EBtn>
                        </li>
                        <li class="item-grid">
                          <EBtn color="light-gray" size="sm">
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
                      <div class="ctitle-xs">
                        물품금액<span class="required"><span class="offscreen">필수입력</span></span>
                      </div>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group valid-check">
                        <EInputBox title="물품금액 입력" type="number" placeholder="숫자만 입력해주세요. (ex.7)" maxlength="3">
                          <span class="unit">만원</span>
                        </EInputBox>
                        <div class="valid-desc">
                          물품금액을 입력해주세요.
                        </div>
                      </div>
                      <SwiperAutoWrap gap="6">
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
                      <div class="ctitle-xs">
                        물품명<span class="required"><span class="offscreen">필수입력</span></span>
                      </div>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group valid-check fail">
                        <EInputBox title="물품명 입력" type="text" placeholder="물품명을 입력해주세요.(ex.청바지)" />
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
        <FoldToggleBox>
          <template #header>
            <div class="fold-title">
              <div class="ctitle-lg">
                보내는 분
              </div>
            </div>
          </template>
          <template #content>
            <ColorBox color="white">
              <RowListWrap gap="xl">
                <li class="item-form">
                  <div class="form-field">
                    <div class="form-title">
                      <div class="ctitle-xs">
                        이름<span class="required"><span class="offscreen">필수입력</span></span>
                      </div>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group valid-check">
                        <EInputBox title="이름 입력" placeholder="이름을 입력해주세요." />
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
                      <div class="ctitle-xs">
                        휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                      </div>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group valid-check fail">
                        <EInputBox title="휴대폰번호 입력" type="number" inputmode="tel" placeholder="휴대폰번호를 입력해주세요." />
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
                          <div class="ctitle-xs">
                            주소(반송처)<span class="required"><span class="offscreen">필수입력</span></span>
                          </div>
                        </div>
                        <div class="flex-right">
                          <EBtn size="xs" color="line-light-gray">
                            <span class="text">주소록 불러오기</span>
                          </EBtn>
                        </div>
                      </FlexGroup>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group valid-check fail">
                        <EInputBox type="search" enterkeyhint="search" title="주소 검색" placeholder="주소를 검색해보세요." readonly>
                          <button type="button" class="btn-input-search">
                            <span class="offscreen">검색</span>
                          </button>
                        </EInputBox>
                        <EInputBox title="상세주소 입력" placeholder="상세주소 입력" />
                        <div class="valid-desc">
                          주소를 검색해주세요.
                        </div>
                      </div>
                      <RowListWrap gap="sm">
                        <span class="ui-chk">
                          <input id="demoChk01" type="checkbox" />
                          <label for="demoChk01"><span class="text-md">기본주소지와 동일</span></label>
                        </span>
                      </RowListWrap>
                    </div>
                  </div>
                </li>
              </RowListWrap>
            </ColorBox>
          </template>
        </FoldToggleBox>
      </li>
      <li v-if="isNonMember" class="item">
        <FoldToggleBox>
          <template #header>
            <div class="fold-title">
              <div class="ctitle-lg">
                보내는 분
              </div>
            </div>
          </template>
          <template #content>
            <ColorBox color="white">
              <RowListWrap gap="xl">
                <li class="item-form">
                  <div class="form-field">
                    <div class="form-title">
                      <div class="ctitle-xs">
                        이름<span class="required"><span class="offscreen">필수입력</span></span>
                      </div>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group valid-check fail">
                        <EInputBox title="이름 입력" placeholder="이름을 입력해주세요." />
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
                      <div class="ctitle-xs">
                        휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                      </div>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group">
                        <EInputBox title="휴대폰번호 입력" type="number" inputmode="tel" placeholder="휴대폰번호를 입력해주세요.">
                          <EBtn color="line-light-gray" size="xs">
                            <span class="text">인증번호 발송</span>
                          </EBtn>
                        </EInputBox>
                        <EInputBox title="인증번호 입력" type="number" placeholder="인증번호를 입력해주세요.">
                          <span class="unit">05:34</span>
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
                      <div class="ctitle-xs">
                        휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                      </div>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group">
                        <EInputBox title="휴대폰번호 입력" type="number" inputmode="tel" placeholder="휴대폰번호를 입력해주세요." value="01012345678" disabled>
                          <EBtn color="line-light-gray" size="xs">
                            <span class="text">재발송</span>
                          </EBtn>
                        </EInputBox>
                        <EInputBox title="인증번호 입력" type="number" placeholder="인증번호를 입력해주세요.">
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
                      <div class="ctitle-xs">
                        휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                      </div>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group">
                        <EInputBox title="휴대폰번호 입력" type="number" inputmode="tel" placeholder="휴대폰번호를 입력해주세요." value="01012345678" disabled>
                          <EBtn color="line-light-gray" size="xs">
                            <span class="text">재발송</span>
                          </EBtn>
                        </EInputBox>
                        <EInputBox title="인증번호 입력" type="number" placeholder="인증번호를 입력해주세요." value="12345">
                          <span class="unit">05:34</span>
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
                      <div class="ctitle-xs">
                        휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                      </div>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group">
                        <EInputBox title="휴대폰번호 입력" type="number" inputmode="tel" placeholder="휴대폰번호를 입력해주세요." value="01012341234">
                          <EBtn color="line-light-gray" size="xs">
                            <span class="text">재발송</span>
                          </EBtn>
                        </EInputBox>
                        <EInputBox title="인증번호 입력" type="number" placeholder="인증번호를 입력해주세요." value="12345">
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
                      <div class="ctitle-xs">
                        예약번호 수신 휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                      </div>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group valid-check fail">
                        <EInputBox title="휴대폰번호 입력" type="number" inputmode="tel" placeholder="휴대폰번호를 입력해주세요." />
                        <div class="input-guide">
                          공백 없이 숫자만 입력해 주세요.
                        </div>
                        <div class="valid-desc">
                          휴대폰번호를 입력해주세요.
                        </div>
                      </div>
                      <RowListWrap gap="sm">
                        <span class="ui-chk">
                          <input id="demoChk01" type="checkbox" />
                          <label for="demoChk01"><span class="text-md">휴대폰번호와 동일</span></label>
                        </span>
                      </RowListWrap>
                    </div>
                  </div>
                </li>
                <li class="item-form">
                  <div class="form-field">
                    <div class="form-title">
                      <div class="ctitle-xs">
                        예약 비밀번호<span class="required"><span class="offscreen">필수입력</span></span>
                      </div>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group valid-check fail">
                        <EInputBox title="예약 비밀번호 입력" type="number" placeholder="예약 비밀번호를 입력해주세요." />
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
                          <div class="ctitle-xs">
                            주소(반송처)<span class="required"><span class="offscreen">필수입력</span></span>
                          </div>
                        </div>
                        <div class="flex-right">
                          <EBtn size="xs" color="line-light-gray">
                            <span class="text">주소록 불러오기</span>
                          </EBtn>
                        </div>
                      </FlexGroup>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group valid-check fail">
                        <EInputBox type="search" enterkeyhint="search" title="주소 검색" placeholder="주소를 검색해보세요." readonly>
                          <button type="button" class="btn-input-search">
                            <span class="offscreen">검색</span>
                          </button>
                        </EInputBox>
                        <EInputBox title="상세주소 입력" placeholder="상세주소 입력" />
                        <div class="valid-desc">
                          주소를 입력해주세요.
                        </div>
                      </div>
                      <RowListWrap gap="sm">
                        <span class="ui-chk">
                          <input id="demoChk01" type="checkbox" />
                          <label for="demoChk01"><span class="text-md">기본주소지와 동일</span></label>
                        </span>
                      </RowListWrap>
                    </div>
                  </div>
                </li>
              </RowListWrap>
            </ColorBox>
          </template>
        </FoldToggleBox>
      </li>
      <li v-if="isMember" class="item">
        <FoldToggleBox>
          <template #header>
            <div class="fold-title">
              <div class="ctitle-lg">
                받는 분
              </div>
            </div>
          </template>
          <template #content>
            <ColorBox color="white" size="lg">
              <RowListWrap gap="xl">
                <li class="item-form">
                  <div class="form-field">
                    <div class="form-title">
                      <div class="ctitle-xs">
                        이름<span class="required"><span class="offscreen">필수입력</span></span>
                      </div>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group valid-check fail">
                        <EInputBox title="이름 입력" placeholder="이름을 입력해주세요." />
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
                      <div class="ctitle-xs">
                        휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                      </div>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group valid-check fail">
                        <EInputBox title="휴대폰번호 입력" type="number" placeholder="휴대폰번호를 입력해주세요." />
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
                          <div class="ctitle-xs">
                            주소(반송처)<span class="required"><span class="offscreen">필수입력</span></span>
                          </div>
                        </div>
                        <div class="flex-right">
                          <EBtn size="xs" color="line-light-gray">
                            <span class="text">주소록 불러오기</span>
                          </EBtn>
                        </div>
                      </FlexGroup>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group valid-check fail">
                        <EInputBox type="search" enterkeyhint="search" title="주소 검색" placeholder="주소를 검색해보세요." readonly>
                          <button type="button" class="btn-input-search">
                            <span class="offscreen">검색</span>
                          </button>
                        </EInputBox>
                        <EInputBox title="상세주소 입력" placeholder="상세주소 입력" />
                        <p class="valid-desc">
                          주소를 입력해주세요.
                        </p>
                      </div>
                      <RowListWrap gap="sm">
                        <span class="ui-chk">
                          <input id="demoChk02" type="checkbox" />
                          <label for="demoChk02"><span class="text-md">주소록에 추가</span></label>
                        </span>
                      </RowListWrap>
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
                          <div class="ctitle">
                            받는 분 <span class="fc-spot">(추가)</span>
                          </div>
                        </div>
                        <div class="flex-right">
                          <EBtn color="light-gray" size="xs">
                            <EIco name="delete" size="sm" />
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
                            <div class="ctitle-xs">
                              이름<span class="required"><span class="offscreen">필수입력</span></span>
                            </div>
                          </div>
                          <div class="form-cont">
                            <div class="form-input-group valid-check fail">
                              <EInputBox title="이름 입력" placeholder="이름을 입력해주세요." />
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
                            <div class="ctitle-xs">
                              휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                            </div>
                          </div>
                          <div class="form-cont">
                            <div class="form-input-group valid-check fail">
                              <EInputBox title="휴대폰번호 입력" type="number" inputmode="tel" placeholder="휴대폰번호를 입력해주세요." />
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
                                <div class="ctitle-xs">
                                  주소(반송처)<span class="required"><span class="offscreen">필수입력</span></span>
                                </div>
                              </div>
                              <div class="flex-right">
                                <EBtn size="xs" color="line-light-gray">
                                  <span class="text">주소록 불러오기</span>
                                </EBtn>
                              </div>
                            </FlexGroup>
                          </div>
                          <div class="form-cont">
                            <div class="form-input-group valid-check fail">
                              <EInputBox type="search" enterkeyhint="search" title="주소 검색" placeholder="주소를 검색해보세요." readonly>
                                <button type="button" class="btn-input-search">
                                  <span class="offscreen">검색</span>
                                </button>
                              </EInputBox>
                              <EInputBox title="상세주소 입력" placeholder="상세주소 입력" />
                              <p class="valid-desc">
                                주소를 입력해주세요.
                              </p>
                            </div>
                            <RowListWrap gap="sm">
                              <span class="ui-chk">
                                <input id="demoChk03" type="checkbox" />
                                <label for="demoChk03"><span class="text-md">기본주소지와 동일</span></label>
                              </span>
                            </RowListWrap>
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
                          <div class="ctitle">
                            받는 분 <span class="fc-spot">(추가)</span>
                          </div>
                        </div>
                        <div class="flex-right">
                          <EBtn color="light-gray" size="xs">
                            <EIco name="delete" size="sm" />
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
                            <div class="ctitle-xs">
                              이름<span class="required"><span class="offscreen">필수입력</span></span>
                            </div>
                          </div>
                          <div class="form-cont">
                            <div class="form-input-group valid-check fail">
                              <EInputBox title="이름 입력" placeholder="이름을 입력해주세요." />
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
                            <div class="ctitle-xs">
                              휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                            </div>
                          </div>
                          <div class="form-cont">
                            <div class="form-input-group valid-check fail">
                              <EInputBox title="휴대폰번호 입력" type="number" inputmode="tel" placeholder="휴대폰번호를 입력해주세요." />
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
                                <div class="ctitle-xs">
                                  주소(반송처)<span class="required"><span class="offscreen">필수입력</span></span>
                                </div>
                              </div>
                              <div class="flex-right">
                                <EBtn size="xs" color="line-light-gray">
                                  <span class="text">주소록 불러오기</span>
                                </EBtn>
                              </div>
                            </FlexGroup>
                          </div>
                          <div class="form-cont">
                            <div class="form-input-group valid-check fail">
                              <EInputBox type="search" enterkeyhint="search" title="주소 검색" placeholder="주소를 검색해보세요." readonly>
                                <button type="button" class="btn-input-search">
                                  <span class="offscreen">검색</span>
                                </button>
                              </EInputBox>
                              <EInputBox title="상세주소 입력" placeholder="상세주소 입력" />
                              <p class="valid-desc">
                                주소를 입력해주세요.
                              </p>
                            </div>
                            <RowListWrap gap="sm">
                              <span class="ui-chk">
                                <input id="demoChk04" type="checkbox" />
                                <label for="demoChk04"><span class="text-md">기본주소지와 동일</span></label>
                              </span>
                            </RowListWrap>
                          </div>
                        </div>
                      </li>
                    </RowListWrap>
                  </template>
                </FoldToggleBox>
              </li>
            </RowListWrap>
            <BtnWrap size="md">
              <EBtn color="line-light-gray" size="md">
                <EIco name="plus" size="sm" />
                <span class="text">받는분 추가</span>
              </EBtn>
            </BtnWrap>
          </template>
        </FoldToggleBox>
      </li>
      <li class="item">
        <FoldToggleBox>
          <template #header>
            <div class="fold-title">
              <div class="ctitle-lg">
                받는 분
              </div>
            </div>
          </template>
          <template #content>
            <ColorBox color="white">
              <RowListWrap gap="xl">
                <li class="item-form">
                  <div class="form-field">
                    <div class="form-title">
                      <div class="ctitle-xs">
                        이름<span class="required"><span class="offscreen">필수입력</span></span>
                      </div>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group valid-check fail">
                        <EInputBox title="이름 입력" placeholder="이름을 입력해주세요." />
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
                      <div class="ctitle-xs">
                        휴대폰번호<span class="required"><span class="offscreen">필수입력</span></span>
                      </div>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group valid-check fail">
                        <EInputBox title="휴대폰번호 입력" type="number" placeholder="휴대폰번호를 입력해주세요." />
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
                          <div class="ctitle-xs">
                            주소(반송처)<span class="required"><span class="offscreen">필수입력</span></span>
                          </div>
                        </div>
                        <div class="flex-right">
                          <EBtn size="xs" color="line-light-gray">
                            <span class="text">주소록 불러오기</span>
                          </EBtn>
                        </div>
                      </FlexGroup>
                    </div>
                    <div class="form-cont">
                      <div class="form-input-group valid-check fail">
                        <EInputBox type="search" enterkeyhint="search" title="주소 검색" placeholder="주소를 검색해보세요." readonly>
                          <button type="button" class="btn-input-search">
                            <span class="offscreen">검색</span>
                          </button>
                        </EInputBox>
                        <EInputBox title="상세주소 입력" placeholder="상세주소 입력" />
                        <p class="valid-desc">
                          주소를 입력해주세요.
                        </p>
                      </div>
                      <RowListWrap gap="sm">
                        <span class="ui-chk">
                          <input id="demoChk02" type="checkbox" />
                          <label for="demoChk02"><span class="text-md">주소록에 추가</span></label>
                        </span>
                      </RowListWrap>
                    </div>
                  </div>
                </li>
                <li class="item-form">
                  <p class="dot-text fc-spot">
                    로그인 하시면 [받는 분]을 최대 10명까지 추가하여 예약하실 수 있습니다.
                  </p>
                </li>
              </RowListWrap>
            </ColorBox>
          </template>
        </FoldToggleBox>
      </li>
      <li class="item">
        <FoldToggleBox>
          <template #header>
            <div class="fold-title">
              <div class="ctitle-lg">
                운임안내
              </div>
            </div>
          </template>
          <template #content>
            <ColorBox color="white">
              <TableWrap type="info" size="md" table-name="운임안내">
                <colgroup>
                  <col style="width: 96px;" />
                  <col style="width: auto;" />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      동일권역
                    </th>
                    <td class="ta-right">
                      <EGoods type="origin" val="3,200" unit="원" />
                      <EGoods val="3,000" unit="원" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      타권역
                    </th>
                    <td class="ta-right">
                      <EGoods type="origin" val="3,700" unit="원" />
                      <EGoods val="3,000" unit="원" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      제주도
                    </th>
                    <td class="ta-right">
                      <EGoods type="origin" val="6,200" unit="원" />
                      <EGoods val="3,000" unit="원" />
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
        <FoldToggleBox>
          <template #header>
            <div class="fold-title">
              <FlexGroup>
                <div class="flex-left">
                  <div class="ctitle-lg">
                    할인수단
                  </div>
                </div>
                <div class="flex-right">
                  <EGoods val="-0" unit="원" size="lg" class="fc-red" />
                </div>
              </FlexGroup>
            </div>
          </template>
          <template #content>
            <ColorBox color="white">
              <RowListWrap gap="line">
                <li class="item-pay-discount">
                  <FlexGroup>
                    <div class="flex-left">
                      <div class="ctitle-2xs">
                        구독할인
                      </div>
                    </div>
                    <div class="flex-right">
                      <span class="stext-sm"><span class="fc-black">가능 1개</span> / 전체 2개</span>
                      <EBtn color="line-light-gray" size="xs">
                        <span class="text">사용</span>
                      </EBtn>
                    </div>
                  </FlexGroup>
                  <div class="pay-discount-box">
                    <FlexGroup align="center">
                      <div class="flex-left">
                        <EGoods val="1,000" unit="원" />
                      </div>
                      <div class="flex-right">
                        <button type="button" class="btn-delete">
                          <EIco name="close" size="xs">
                            <span class="offscreen">할인 취소</span>
                          </EIco>
                        </button>
                      </div>
                    </FlexGroup>
                  </div>
                </li>
                <li class="item-pay-discount">
                  <FlexGroup>
                    <div class="flex-left">
                      <div class="ctitle-2xs">
                        쿠폰
                      </div>
                    </div>
                    <div class="flex-right">
                      <span class="stext-sm"><span class="fc-black">가능 1개</span> / 전체 7개</span>
                      <EBtn color="line-light-gray" size="xs">
                        <span class="text">사용</span>
                      </EBtn>
                    </div>
                  </FlexGroup>
                  <div class="pay-discount-box">
                    <FlexGroup align="center">
                      <div class="flex-left">
                        <EGoods val="1,000" unit="원" />
                      </div>
                      <div class="flex-right">
                        <button type="button" class="btn-delete">
                          <EIco name="close" size="xs">
                            <span class="offscreen">할인 취소</span>
                          </EIco>
                        </button>
                      </div>
                    </FlexGroup>
                  </div>
                </li>
                <li class="item-pay-discount">
                  <FlexGroup>
                    <div class="flex-left">
                      <div class="ctitle-2xs">
                        L.POINT
                      </div>
                    </div>
                    <div class="flex-right">
                      <span class="stext-sm">사용가능 <EGoods val="10,000" unit="P" /></span>
                      <EBtn color="line-light-gray" size="xs">
                        <span class="text">사용</span>
                      </EBtn>
                    </div>
                  </FlexGroup>
                  <div class="pay-discount-box">
                    <FlexGroup align="center">
                      <div class="flex-left">
                        <EGoods val="1,000" unit="원" />
                      </div>
                      <div class="flex-right">
                        <button type="button" class="btn-delete">
                          <EIco name="close" size="xs">
                            <span class="offscreen">할인 취소</span>
                          </EIco>
                        </button>
                      </div>
                    </FlexGroup>
                  </div>
                </li>
                <li class="item-pay-discount">
                  <FlexGroup>
                    <div class="flex-left">
                      <div class="ctitle-2xs">
                        금액권
                      </div>
                    </div>
                    <div class="flex-right">
                      <span class="stext-sm">사용가능 <EGoods val="17,500" unit="P" /></span>
                      <EBtn color="line-light-gray" size="xs">
                        <span class="text">사용</span>
                      </EBtn>
                    </div>
                  </FlexGroup>
                  <div class="pay-discount-box">
                    <FlexGroup align="center">
                      <div class="flex-left">
                        <EGoods val="1,000" unit="원" />
                      </div>
                      <div class="flex-right">
                        <button type="button" class="btn-delete">
                          <EIco name="close" size="xs">
                            <span class="offscreen">할인 취소</span>
                          </EIco>
                        </button>
                      </div>
                    </FlexGroup>
                  </div>
                </li>
              </RowListWrap>
            </ColorBox>
            <div class="cash-receipt-info-wrap">
              <div class="ctitle-lg">
                현금영수증
              </div>
              <ColorBox color="white">
                <CtitleWrap>
                  <FlexGroup>
                    <div class="flex-left">
                      <div class="ctitle-sm">
                        현금영수증
                      </div>
                    </div>
                    <div class="flex-right">
                      <GridListWrap col="2">
                        <li class="item-grid">
                          <span class="ui-rdo">
                            <input id="cashReceipt01" v-model="cashReceiptRadio" type="radio" name="cashReceipt01" value="receiptApply" />
                            <label for="cashReceipt01"><span class="text-md">신청</span></label>
                          </span>
                        </li>
                        <li class="item-grid">
                          <span class="ui-rdo">
                            <input id="cashReceipt02" v-model="cashReceiptRadio" type="radio" name="cashReceipt01" value="receiptNotApply" />
                            <label for="cashReceipt02"><span class="text-md">미신청</span></label>
                          </span>
                        </li>
                      </GridListWrap>
                    </div>
                  </FlexGroup>
                </CtitleWrap>
                <div v-show="cashReceiptRadio === 'receiptApply'">
                  <ColorBox color="light-gray" size="sm">
                    <FlexGroup>
                      <div class="flex-left">
                        <div class="stext fw-sb">
                          개인 소득공제
                        </div>
                      </div>
                      <div class="flex-right">
                        <GridListWrap col="2">
                          <li class="item-grid">
                            <div class="stext">
                              313-31-12345
                            </div>
                          </li>
                          <li class="item-grid">
                            <EBtn color="line-light-gray" size="xs">
                              <span class="text">변경</span>
                            </EBtn>
                          </li>
                        </GridListWrap>
                      </div>
                    </FlexGroup>
                  </ColorBox>
                  <ColorBox color="light-gray" size="sm">
                    <FlexGroup>
                      <div class="flex-left">
                        <div class="stext fw-sb">
                          사업자 소득공제
                        </div>
                      </div>
                      <div class="flex-right">
                        <GridListWrap col="2">
                          <li class="item-grid">
                            <div class="stext">
                              313-31-12345
                            </div>
                          </li>
                          <li class="item-grid">
                            <EBtn color="line-light-gray" size="xs">
                              <span class="text">변경</span>
                            </EBtn>
                          </li>
                        </GridListWrap>
                      </div>
                    </FlexGroup>
                  </ColorBox>
                  <ColorBox color="light-gray" size="sm">
                    <BtnWrap type="full">
                      <EBtn color="line-light-gray" size="xs">
                        <span class="text">현금영수증 발급정보 등록</span>
                      </EBtn>
                    </BtnWrap>
                  </ColorBox>
                </div>
                <div v-show="cashReceiptRadio === 'receiptNotApply'">
                  <ColorBox color="light-gray" size="sm">
                    <FlexGroup>
                      <div class="flex-left">
                        <div class="stext fw-sb">
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
      <li v-if="isNonMember" class="item">
        <FoldToggleBox>
          <template #header>
            <div class="fold-title">
              <div class="ctitle-lg">
                결제수단
              </div>
            </div>
          </template>
          <template #content>
            <ColorBox color="white">
              <RowListWrap gap="line">
                <li class="item-order-pay">
                  <span class="ui-rdo">
                    <input id="orderPayRdo01" v-model="orderPayRadio" type="radio" name="orderPayRdo01" value="payCard" />
                    <label for="orderPayRdo01"><span class="text-md">신용(체크)카드</span></label>
                  </span>
                  <div v-show="orderPayRadio === 'payCard'" class="order-pay-cont">
                    <div class="ui-select">
                      <select title="신용(체크)카드 선택">
                        <option>롯데카드</option>
                        <option>현대카드</option>
                        <option>국민카드</option>
                      </select>
                    </div>
                  </div>
                </li>
                <li class="item-order-pay">
                  <span class="ui-rdo">
                    <input id="orderPayRdo02" v-model="orderPayRadio" type="radio" name="orderPayRdo01" value="payLpay" />
                    <label for="orderPayRdo02"><span class="text-md">L.PAY</span></label>
                  </span>
                </li>
                <li class="item-order-pay">
                  <span class="ui-rdo">
                    <input id="orderPayRdo03" v-model="orderPayRadio" type="radio" name="orderPayRdo01" value="payNaver" />
                    <label for="orderPayRdo03"><span class="text-md">네이버 간편결제</span></label>
                  </span>
                  <div v-show="orderPayRadio === 'payNaver'" class="order-pay-cont">
                    <BtnWrap>
                      <EBtn color="line-light-gray" size="md">
                        <span class="text">네이버페이 카드 결제</span>
                      </EBtn>
                      <EBtn color="line-light-gray" size="md">
                        <span class="text">네이버페이 포인트 결제</span>
                      </EBtn>
                    </BtnWrap>
                  </div>
                </li>
                <li class="item-order-pay">
                  <span class="ui-rdo">
                    <input id="orderPayRdo04" v-model="orderPayRadio" type="radio" name="orderPayRdo01" value="payKakao" />
                    <label for="orderPayRdo04"><span class="text-md">카카오페이</span></label>
                  </span>
                </li>
                <li class="item-order-pay">
                  <span class="ui-chk">
                    <input id="orderPayChk01" type="checkbox" />
                    <label for="orderPayChk01"><span class="text-md">선택한 결제수단 다음에도 사용</span></label>
                  </span>
                </li>
              </RowListWrap>
              <RowListWrap size="sm">
                <ColorBox color="light-green" size="xs">
                  <p class="stext ta-center fc-spot">
                    삼성카드 결제 시 1,000원 캐시백
                  </p>
                </ColorBox>
              </RowListWrap>
            </ColorBox>
          </template>
        </FoldToggleBox>
      </li>
      <li class="item">
        <FoldToggleBox>
          <template #header>
            <div class="fold-title">
              <div class="ctitle-lg">
                결제금액
              </div>
            </div>
          </template>
          <template #content>
            <ColorBox color="white">
              <RowListWrap gap="lg">
                <li class="order-info-item">
                  <FlexGroup align="center">
                    <div class="flex-left">
                      <span class="stext-lg fw-sb">전체운임</span>
                    </div>
                    <div class="flex-right">
                      <span class="stext-lg fw-sb">
                        <EGoods val="3,000" unit="원" />
                      </span>
                    </div>
                  </FlexGroup>
                  <RowListWrap gap="sm" size="2xs">
                    <li class="order-info-sub-item">
                      <FlexGroup align="center">
                        <div class="flex-left">
                          <EIco name="bullet-order-list" />
                          <span class="stext">동일권역</span>
                        </div>
                        <div class="flex-right">
                          <span class="stext">
                            <EGoods val="3,300" unit="원" />
                          </span>
                        </div>
                      </FlexGroup>
                    </li>
                    <li class="order-info-sub-item">
                      <FlexGroup align="center">
                        <div class="flex-left">
                          <EIco name="bullet-order-list" />
                          <span class="stext">타권역</span>
                        </div>
                        <div class="flex-right">
                          <span class="stext">
                            <EGoods val="5,700" unit="원" />
                          </span>
                        </div>
                      </FlexGroup>
                    </li>
                  </RowListWrap>
                </li>
                <li class="order-info-item">
                  <FlexGroup align="center">
                    <div class="flex-left">
                      <span class="stext-lg fw-sb">운임할인</span>
                    </div>
                    <div class="flex-right">
                      <span class="stext-lg fc-red fw-sb">
                        <EGoods val="-600" unit="원" />
                      </span>
                    </div>
                  </FlexGroup>
                  <RowListWrap gap="sm" size="2xs">
                    <li class="order-info-sub-item">
                      <FlexGroup align="center">
                        <div class="flex-left">
                          <EIco name="bullet-order-list" />
                          <span class="stext">L.POINT</span>
                        </div>
                        <div class="flex-right">
                          <span class="stext">
                            <EGoods val="-150" unit="원" />
                          </span>
                        </div>
                      </FlexGroup>
                    </li>
                    <li class="order-info-sub-item">
                      <FlexGroup align="center">
                        <div class="flex-left">
                          <EIco name="bullet-order-list" />
                          <span class="stext">구독할인</span>
                        </div>
                        <div class="flex-right">
                          <span class="stext">
                            <EGoods val="-150" unit="원" />
                          </span>
                        </div>
                      </FlexGroup>
                    </li>
                    <li class="order-info-sub-item">
                      <FlexGroup align="center">
                        <div class="flex-left">
                          <EIco name="bullet-order-list" />
                          <span class="stext">쿠폰할인</span>
                        </div>
                        <div class="flex-right">
                          <span class="stext">
                            <EGoods val="-150" unit="원" />
                          </span>
                        </div>
                      </FlexGroup>
                    </li>
                    <li class="order-info-sub-item">
                      <FlexGroup align="center">
                        <div class="flex-left">
                          <EIco name="bullet-order-list" />
                          <span class="stext">금액권사용</span>
                        </div>
                        <div class="flex-right">
                          <span class="stext">
                            <EGoods val="-150" unit="원" />
                          </span>
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
    <RowListWrap gap="sm" size="lg">
      <li class="ui-col-item">
        <FlexGroup>
          <div class="flex-left">
            <span class="ui-chk">
              <input id="agreeChk01" type="checkbox" />
              <label for="agreeChk01"><span class="text-md">택배 이용약관<span class="required"><span class="offscreen">필수체크</span></span></span></label>
            </span>
          </div>
          <div class="flex-right">
            <ETBtn size="xs">
              <span class="text">상세보기</span>
              <EIco name="arwright" size="xs" />
            </ETBtn>
          </div>
        </FlexGroup>
      </li>
      <li class="ui-col-item">
        <FlexGroup>
          <div class="flex-left">
            <span class="ui-chk">
              <input id="agreeChk02" type="checkbox" />
              <label for="agreeChk02"><span class="text-md">개인정보 수집 및 이용동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
            </span>
          </div>
          <div class="flex-right">
            <ETBtn size="xs">
              <span class="text">상세보기</span>
              <EIco name="arwright" size="xs" />
            </ETBtn>
          </div>
        </FlexGroup>
      </li>
    </RowListWrap>
  </ContWrap>
  <ContDocker>
    <BtnWrap type="flex">
      <EBtn color="line-light-gray" size="lg">
        <span class="text">취소</span>
      </EBtn>
      <EBtn color="green" size="lg">
        <span class="text"><EGoods val="6,400" unit="원" /> 결제하기</span>
      </EBtn>
    </BtnWrap>
  </ContDocker>
</template>

<script setup lang="ts">
definePageMeta({
  title: '일반 택배예약',
  hideDocker: true,
});

const isMember = ref(true);
const isNonMember = ref(true);
const orderPayRadio = ref();
const cashReceiptRadio = ref();
</script>

<style lang="scss" scoped>
@import url("assets/css/pages/delivery/delivery.scss");
</style>
