<template>
  <ContWrap v-if="isData">
    <ContBox>
      <div class="list-header">
        <FlexGroup>
          <div class="flex-left">
            <span class="ui-chk">
              <input id="prdAllChk01" type="checkbox" />
              <label for="prdAllChk01"><span class="text-md">전체선택</span></label>
            </span>
          </div>
          <div class="flex-right">
            <EBtn color="line-light-gray" size="xs">
              <EIco name="delete" color="gray" size="xs" />
              <span class="text">선택삭제</span>
            </EBtn>
          </div>
        </FlexGroup>
      </div>
      <ColorBox color="white" size="lg">
        <RowListWrap gap="line">
          <li class="item-thumb-prod">
            <span class="ui-chk">
              <input id="prodChk01" type="checkbox" />
              <label for="prodChk01"><span class="offscreen">상품 선택</span></label>
            </span>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지"/>
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">7월 모닝 구독</ETit>
                <div class="stext">(31일간, 월1회 / 총 20회)</div>
                <div class="goods-group">
                  <!-- TODO : 라벨 작업 필요 (월 N,NNN원) -->
                  <EGoods size="md" val="2,700" unit="원" />
                </div>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
            <button type="button" class="btn-delete">
              <EIco name="close" color="gray" size="xs">
                <span class="offscreen">상품 삭제</span>
              </EIco>
            </button>
          </li>
          <li class="item-thumb-prod">
            <span class="ui-chk">
              <input id="prodChk01" type="checkbox" />
              <label for="prodChk01"><span class="offscreen">상품 선택</span></label>
            </span>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지"/>
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">7월 모닝 구독</ETit>
                <div class="stext">(31일간, 월1회 / 총 20회)</div>
                <div class="goods-group">
                  <!-- TODO : 라벨 작업 필요 (월 N,NNN원) -->
                  <EGoods size="md" val="2,700" unit="원" />
                </div>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
            <button type="button" class="btn-delete">
              <EIco name="close" color="gray" size="xs">
                <span class="offscreen">상품 삭제</span>
              </EIco>
            </button>
          </li>
          <li class="item-thumb-prod">
            <span class="ui-chk">
              <input id="prodChk01" type="checkbox" />
              <label for="prodChk01"><span class="offscreen">상품 선택</span></label>
            </span>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지"/>
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">7월 모닝 구독</ETit>
                <div class="stext">(31일간, 월1회 / 총 20회)</div>
                <div class="goods-group">
                  <!-- TODO : 라벨 작업 필요 (월 N,NNN원) -->
                  <EGoods size="md" val="2,700" unit="원" />
                </div>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
            <button type="button" class="btn-delete">
              <EIco name="close" color="gray" size="xs">
                <span class="offscreen">상품 삭제</span>
              </EIco>
            </button>
          </li>
          <!-- 품절 상품 -->
          <li class="item-thumb-prod">
            <span class="ui-chk">
              <input id="prodChk01" type="checkbox" />
              <label for="prodChk01"><span class="offscreen">상품 선택</span></label>
            </span>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md" dim="soldOut">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지"/>
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">7월 모닝 구독</ETit>
                <div class="stext">(31일간, 월1회 / 총 20회)</div>
                <div class="goods-group">
                  <!-- TODO : 라벨 작업 필요 (월 N,NNN원) -->
                  <EGoods size="md" val="2,700" unit="원" />
                </div>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
            <button type="button" class="btn-delete">
              <EIco name="close" color="gray" size="xs">
                <span class="offscreen">상품 삭제</span>
              </EIco>
            </button>
          </li>
          <!-- // 품절 상품 -->
          <!-- 구매불가 상품 -->
          <li class="item-thumb-prod">
            <span class="ui-chk">
              <input id="prodChk01" type="checkbox" />
              <label for="prodChk01"><span class="offscreen">상품 선택</span></label>
            </span>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md" dim="구매불가">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지"/>
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">7월 모닝 구독</ETit>
                <div class="stext">(31일간, 월1회 / 총 20회)</div>
                <div class="goods-group">
                  <!-- TODO : 라벨 작업 필요 (월 N,NNN원) -->
                  <EGoods size="md" val="2,700" unit="원" />
                </div>
              </div>
            </div>
            <!-- // thumb-prod-flex -->
            <button type="button" class="btn-delete">
              <EIco name="close" color="gray" size="xs">
                <span class="offscreen">상품 삭제</span>
              </EIco>
            </button>
          </li>
          <!-- // 구매불가 상품 -->
        </RowListWrap>
      </ColorBox>
      <BtnWrap size="md">
        <EBtn color="line-light-gray" size="md">
          <EIco name="plus" color="gray" size="sm" />
          <span class="text">상품 더 담기</span>
        </EBtn>
      </BtnWrap>
    </ContBox>
    <ContBox size="lg">
      <ColorBox color="white" size="lg">
        <FlexGroup>
          <div class="flex-left">
            <ETit text="결제예정금액" type="fold" />
          </div>
          <div class="flex-right">
            <EGoods size="xl" val="39,200" unit="원" class="fw-md fc-spot" />
          </div>
        </FlexGroup>
      </ColorBox>
    </ContBox>
    <ContBox size="lg">
      <CtitleWrap size="md">
        <ETit text="알려드립니다." type="cont" />
      </CtitleWrap>
      <RowListWrap size="sm" gap="sm">
        <li class="dot-text-sm">
          구독권은 온라인 및 오프라인 매장에서 사용이 가능합니다.
        </li>
        <li class="dot-text-sm">
          구독할인권은 환불이 불가합니다.
        </li>
        <li class="dot-text-sm">
          구독할인권은 구매후 7일이내 환불이 가능합니다.
        </li>
        <li class="dot-text-sm">
          구독할인권으로 주류(위스키/와인) 등 미성년자 구매 불가 품목이 포함된 주문은 수령시 신분증을 제시해야 합니다. 신분증을 미 지참하실 경우 상품수령이 불가합니다.
        </li>
      </RowListWrap>
    </ContBox>
  </ContWrap>
  <ContDocker v-if="isData">
    <BtnWrap>
      <EBtn color="green" size="lg">
        <span class="text"><EGoods val="133,500" unit="원" /> 주문하기</span>
      </EBtn>
    </BtnWrap>
  </ContDocker>

  <!-- 데이터가 없는 경우  -->
  <ContBox v-if="isNoData" size="sm">
    <InfoGuideWrap
      type="no-data"
      name="cart"
      desc="장바구니에 담긴 상품이 없습니다."
    />
    <BtnWrap type="auto-center" size="xl">
      <EBtn tag="a" color="line-light-gray" size="md" to="to">
        <span class="text">구독할인 상품 둘러보기</span>
      </EBtn>
    </BtnWrap>
  </ContBox>
  <!-- // 데이터가 없는 경우  -->
</template>

<script setup lang="ts">
definePageMeta({
  title: '장바구니',
  hideRightHeader: false,
});

const isData = ref(true);
const isNoData = ref(true);
</script>

<style lang="scss" scoped>

</style>
