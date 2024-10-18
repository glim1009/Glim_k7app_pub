<template>
  <ContWrap>
    <div class="map-wrap">
      <div class="map-area">
        <!-- 지도 임시 영역 -->
        <div style="height: 100%; background: rgba(255, 0, 0, .1);">
          <br><br><br>지도 API 영역 확인을 위한 임시 div입니다.

          <div class="map-content">
            <!-- DESC :: 매장 정보 숨김 기능 처리 예시를 위한 임시 버튼입니다. 개발시 해당 EBtn 삭제 후 작업해 주세요. -->
            <EBtn color="gray" size="xs" style="position: absolute; left: 0; top: 0" @click="hiddenStoreInfo">
              <span class="text">매장 정보 숨김</span>
            </EBtn>

            <!-- 이 지역 재검색 버튼 -->
            <EBtn color="line-light-gray" size="sm" class="btn-reset">
              <EIco name="reset" color="gray" size="sm" />
              <span class="text">이 지역 재검색</span>
            </EBtn>
            <!-- // 이 지역 재검색 버튼 -->

            <!-- 재고정보 pin 버튼 repeat -->
            <button
              :class="{ 'is-active': activeButton === 1 }"
              class="btn-store-pin"
              style="right: 218px; top: 235px"
              @click="ActivePin(1)"
            >
              <span class="text">1개</span>
            </button>
            <!-- // 재고정보 pin repeat -->
            <!-- 재고정보 pin 버튼 repeat || disabled -->
            <button
              :class="{ 'is-active': activeButton === 2 }"
              class="btn-store-pin"
              style="right: 163px; top: 88px"
              disabled
              @click="ActivePin(2)"
            >
              <span class="text">0개</span>
            </button>
            <!-- // 재고정보 pin repeat || disabled -->
            <!-- 재고정보 pin 버튼 repeat -->
            <button
              :class="{ 'is-active': activeButton === 3 }"
              class="btn-store-pin"
              style="right: 44px; top: 234px"
              @click="ActivePin(3)"
            >
              <span class="text">2개</span>
            </button>
            <!-- 재고정보 pin repeat -->
            <!-- // 재고정보 pin 버튼 repeat -->
            <button
              :class="{ 'is-active': activeButton === 4 }"
              class="btn-store-pin"
              style="right: 165px; top: 498px"
              @click="ActivePin(4)"
            >
              <span class="text">5개</span>
            </button>
            <!-- // 재고정보 pin repeat -->
            <!-- 재고정보 pin 버튼 repeat -->
            <button
              :class="{ 'is-active': activeButton === 5 }"
              class="btn-store-pin"
              style="right: 44px; top: 234px"
              @click="ActivePin(5)"
            >
              <span class="text">2개</span>
            </button>
            <!-- // 재고정보 pin repeat -->
            <!-- 재고정보 pin 버튼 repeat || disabled -->
            <button
              :class="{ 'is-active': activeButton === 6 }"
              class="btn-store-pin"
              style="right: 273px; top: 398px"
              disabled
              @click="ActivePin(6)"
            >
              <span class="text">0개</span>
            </button>
            <!-- // 재고정보 pin 버튼 repeat || disabled -->

            <!-- 현 위치 이동 버튼 -->
            <button type="button" class="btn-access-location">
              <EIco name="access-location" color="gray" />
              <span class="offscreen">현 위치로 이동</span>
            </button>
            <!-- // 현 위치 이동 버튼 -->

            <!-- 매장 세부 정보 컨텐츠 -->
            <ColorBox color="white" size="lg" :class="{ 'is-visible': activeButton }">
              <div class="box-info-header address-info">
                <FlexGroup align="start">
                  <div class="info-flex-left">
                    <ETBtn tag="a" size="lg" to="/store/detail">
                      <span class="text">을지로 1가점</span>
                      <EIco name="arw-right" color="gray" size="sm" />
                    </ETBtn>
                    <div class="bar-group">
                      <span class="bar-text-sm fc-spot fw-md"><EGoods val="2" unit="개" />남음</span>
                      <span class="bar-text-sm fc-gray70">100M</span>
                      <span class="bar-text-sm fc-gray70">
                        <span class="rating">
                          <EIco name="rating" color="green" size="xs"><span class="offscreen">별점</span></EIco>
                          <span class="score-sm">4.0</span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div class="flex-right">
                    <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                    <button type="button" class="btn-bookmark">
                      <EIco name="bookmark">
                        <span class="offscreen">관심 등록</span>
                      </EIco>
                    </button>
                    <button type="button" class="btn-share" @click="openSnsShare">
                      <EIco name="share">
                        <span class="offscreen">공유</span>
                      </EIco>
                    </button>
                  </div>
                </FlexGroup>
              </div>
              <div class="address-info-group">
                <div class="address">서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩)</div>
              </div>
              <BtnWrap type="full" size="md">
                <EBtn tag="a" color="green" size="sm" to="/product/[...slug]">
                  <span class="text">구매하기</span>
                </EBtn>
              </BtnWrap>
            </ColorBox>
            <!-- // 매장 세부 정보 컨텐츠 -->
          </div>
        </div>
      </div>
      <!-- // 지도 임시 영역 -->
    </div>
  </ContWrap>

  <!-- pop : (공통) SNS 공유 -->
  <PopCommSnsShare v-model:sta="popSnsShare" />
  <!-- // pop : (공통) SNS 공유 -->
</template>

<script setup lang="ts">
const activeButton = ref<number | null>(null);

function ActivePin(buttonIndex: number) {
  activeButton.value = buttonIndex;
}

function hiddenStoreInfo() {
  activeButton.value = false;
}

// sns 공유 팝업
const popSnsShare = ref({ open: false });
const openSnsShare = () => popSnsShare.value.open = true;
</script>
