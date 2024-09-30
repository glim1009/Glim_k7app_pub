<template>
  <ContWrap>
    <ContBox size="lg">
      <CtitleWrap size="md">
        <ETit type="cont">
          회사 사번과 이메일을 통해
          <br>임직원 인증을 진행해 주세요.
        </ETit>
      </CtitleWrap>
      <ColorBox color="white" size="lg">
        <RowListWrap gap="xl">
          <li class="item-form">
            <div class="form-field">
              <div class="form-title">
                <ETit type="form">계열사<span class="required"><span class="offscreen">필수입력</span></span></ETit>
              </div>
              <div class="form-cont">
                <div class="ui-select">
                  <select title="계열사 목록" disabled>
                    <option selected>exmaple</option>
                    <option>선택</option>
                    <option>선택</option>
                    <option>선택</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
          <li class="item-form">
            <div class="form-field">
              <div class="form-title">
                <ETit type="form">
                  <span class="text">이메일</span><span class="required"><span class="offscreen">필수입력</span></span>
                </ETit>
              </div>
              <div class="form-cont">
                <div class="form-input-group">
                  <FlexGroup>
                    <div class="flex-left">
                      <EInputBox title="이메일 입력" placeholder="이메일 입력"/>
                    </div>
                    <span class="gap">@</span>
                    <div class="flex-right">
                      <div class="input-info-box">
                        <div class="unit">lotte.net</div>
                      </div>
                    </div>
                  </FlexGroup>
                </div>
              </div>
            </div>
          </li>
          <li class="item-form" v-if="isCompCertify">
            <div class="form-field">
              <div class="form-title">
                <ETit type="form">인증번호<span class="required"><span class="offscreen">필수입력</span></span></ETit>
              </div>
              <div class="form-cont">
                <div class="form-input-group">
                  <EInputBox title="인증번호 입력" type="number" placeholder="인증번호 입력">
                    <span class="unit fc-red">05:34</span>
                    <EBtn color="line-light-gray" size="xs">
                      <span class="text">재발송</span>
                    </EBtn>
                  </EInputBox>
                </div>
              </div>
            </div>
          </li>
        </RowListWrap>
      </ColorBox>
    </ContBox>
    <ContBox size="lg">
      <CtitleWrap size="sm">
        <FlexGroup>
          <div class="flex-left">
            <span class="ui-chk">
              <input id="agreeChk" type="checkbox" />
              <label for="agreeChk"><span class="text-md">개인정보 수집 및 이용동의<span class="required"><span class="offscreen">필수체크</span></span></span></label>
            </span>
          </div>
        </FlexGroup>
      </CtitleWrap>
      <ColorBox color="white" size="lg" v-if="isCertify">
        <div class="scroll-agree-box">
          <TableWrap type="col" table-name="수집 및 이용동의 내용">
            <colgroup>
              <col style="width: auto;" />
              <col style="width: auto;" />
              <col style="width: auto;" />
            </colgroup>
            <thead>
            <tr>
              <th scope="col">목적</th>
              <th scope="col">항목</th>
              <th scope="col">보유기간</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                임직원
                <br>회원등록
              </td>
              <td>
                계열사명, 사내 이메일주소
              </td>
              <td>
                등록 후 6개월
              </td>
            </tr>
            </tbody>
          </TableWrap>
          <RowListWrap gap="sm" size="xs">
            <li class="dot-text-sm">
              계열사 임직원 등록을 위해서 필요한 최소한의 개인정보이므로 동의 후 인증이 가능합니다.
            </li>
          </RowListWrap>
        </div>
      </ColorBox>
    </ContBox>
    <BtnWrap size="md" v-if="isCertify">
      <EBtn color="green" size="md">
        <span class="text">이메일 인증하기</span>
      </EBtn>
    </BtnWrap>
    <BtnWrap size="md" v-if="isCompCertify">
      <EBtn color="green" size="md">
        <span class="text">인증번호 확인</span>
      </EBtn>
    </BtnWrap>
  </ContWrap>
</template>

<script setup lang="ts">
const isCertify = ref(true); // 임시 : 이메일 인증 전 컨텐츠 확인을 위해 추가
const isCompCertify = ref(true); // 임시 : 이메일 인증 후 컨텐츠 확인을 위해 추가
</script>

<style lang="scss" scoped>

</style>

