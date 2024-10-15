<template>
  <ContWrap in-top="lg">
    <ContBox>
      <CtitleWrap size="md">
        <ETit type="cont">
          사업자회원으로 인증되시면 <br>전용 운임 혜택을 받으실 수 있습니다.
        </ETit>
      </CtitleWrap>
      <RowListWrap gap="sm">
        <li class="dot-text">
          개인사업자만 사업자회원 증빙이 가능합니다.
        </li>
        <li class="dot-text">
          사업자회원 인증은 영업일 기준 약 3~5일이 소요됩니다.
        </li>
        <li class="dot-text">
          일정기간 이용내역이 없거나 부적절한 방식으로 인증된 사실이 발견된 경우 예고 없이 인증이 취소될 수 있습니다
        </li>
      </RowListWrap>
    </ContBox>
    <ContBox size="md">
      <ColorBox color="white" size="lg">
        <RowListWrap gap="xl">
          <li class="item-form">
            <div class="form-field">
              <div class="form-title">
                <ETit type="form">
                  사업자등록번호<span class="required"><span class="offscreen">필수입력</span></span>
                </ETit>
              </div>
              <div class="form-cont">
                <div class="form-input-group valid-check">
                  <EInputBox type="number" title="사업자등록번호 입력" placeholder="사업자등록번호 입력" />
                  <p class="input-guide">
                    숫자 8~12자 공백 없이 등록
                  </p>
                  <p class="valid-desc">
                    사업자등록번호를 입력해주세요.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="item-form">
            <div class="form-field">
              <div class="form-title">
                <ETit type="form">
                  사업자등록증 이미지<span class="required"><span class="offscreen">필수입력</span></span>
                </ETit>
              </div>
              <div class="form-cont">
                <div class="form-input-group valid-check">
                  <SwiperAutoWrap class="side-zero">
                    <!-- 첨부파일 등록되지 않은 경우 -->
                    <swiper-slide>
                      <div class="attach-box">
                        <input id="attach01" type="file">
                        <label for="attach01"><span class="offscreen">첨부파일 추가</span></label>
                      </div>
                    </swiper-slide>
                    <!-- // 첨부파일 등록되지 않은 경우 -->
                    <!-- 첨부파일 등록된 경우 -->
                    <swiper-slide>
                      <div class="attach-box">
                        <input id="attach02" type="file">
                        <label for="attach02"><span class="offscreen">첨부파일 추가</span></label>
                        <div class="attach-img-wrap">
                          <div class="attach-img">
                            <img src="/assets/images/temp/temp_attach_img_01.png" alt="첨부파일 이미지">
                          </div>
                          <button type="button" class="btn-remove">
                            <EIco name="clear" color="black" size="sm">
                              <span class="offscreen">첨부파일 삭제</span>
                            </EIco>
                          </button>
                        </div>
                      </div>
                    </swiper-slide>
                    <!-- // 첨부파일 등록된 경우 -->
                    <!-- 첨부파일 등록된 경우 -->
                    <swiper-slide>
                      <div class="attach-box">
                        <input id="attach03" type="file">
                        <label for="attach03"><span class="offscreen">첨부파일 추가</span></label>
                        <div class="attach-img-wrap">
                          <div class="attach-img">
                            <img src="/assets/images/temp/temp_attach_img_01.png" alt="첨부파일 이미지">
                          </div>
                          <button type="button" class="btn-remove">
                            <EIco name="clear" color="black" size="sm">
                              <span class="offscreen">첨부파일 삭제</span>
                            </EIco>
                          </button>
                        </div>
                      </div>
                    </swiper-slide>
                    <!-- 첨부파일 등록된 경우 -->
                    <!-- // 첨부파일 등록된 경우 -->
                    <swiper-slide>
                      <div class="attach-box">
                        <input id="attach03" type="file">
                        <label for="attach03"><span class="offscreen">첨부파일 추가</span></label>
                        <div class="attach-img-wrap">
                          <div class="attach-img">
                            <img src="/assets/images/temp/temp_attach_img_01.png" alt="첨부파일 이미지">
                          </div>
                          <button type="button" class="btn-remove">
                            <EIco name="clear" color="black" size="sm">
                              <span class="offscreen">첨부파일 삭제</span>
                            </EIco>
                          </button>
                        </div>
                      </div>
                    </swiper-slide>
                    <!-- // 첨부파일 등록된 경우 -->
                    <!-- 첨부파일 등록된 경우 -->
                    <swiper-slide>
                      <div class="attach-box">
                        <input id="attach03" type="file">
                        <label for="attach03"><span class="offscreen">첨부파일 추가</span></label>
                        <div class="attach-img-wrap">
                          <div class="attach-img">
                            <img src="/assets/images/temp/temp_attach_img_01.png" alt="첨부파일 이미지">
                          </div>
                          <button type="button" class="btn-remove">
                            <EIco name="clear" color="black" size="sm">
                              <span class="offscreen">첨부파일 삭제</span>
                            </EIco>
                          </button>
                        </div>
                      </div>
                    </swiper-slide>
                    <!-- // 첨부파일 등록된 경우 -->
                  </SwiperAutoWrap>
                  <RowListWrap>
                    <li class="dot-text-sm">
                      총 10MB 이하로 jpg, jpeg, png 파일만 업로드 가능합니다.
                    </li>
                  </RowListWrap>
                  <p class="valid-desc">
                    사업자등록증 이미지를 입력해주세요.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </RowListWrap>
      </ColorBox>
    </ContBox>
    <BtnWrap type="flex" size="md">
      <EBtn color="line-light-gray" size="lg">
        <span class="text">취소</span>
      </EBtn>
      <EBtn color="green" size="lg">
        <span class="text">증빙하기</span>
      </EBtn>
    </BtnWrap>
  </ContWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: "사업자회원 증빙",
  hideRightHeader: ["home"],
});
</script>

<style lang="scss" scoped>
@import url("assets/css/pages/delivery.scss");
</style>
