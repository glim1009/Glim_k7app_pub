<template>
  <ContWrap>
    <ContBox size="lg">
      <div class="list-header">
        <FlexGroup>
          <div class="flex-left">
            <span class="ui-chk">
              <input id="prodAllChk" type="checkbox" />
              <label for="prodAllChk"><span class="text-md">전체선택</span></label>
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
                <BadgeGroup gap="md">
                  <EBadge color="gray" size="sm" badge-text="할인" />
                </BadgeGroup>
                <ETit type="prod">모바일 상품권 7,000원</ETit>
              </div>
              <FlexGroup align="end">
                <div class="flex-left">
                  <ESpinner />
                </div>
                <div class="flex-right">
                  <div class="goods-group">
                    <EGoods type="origin" size="sm" val="3,000" unit="원" />
                    <EGoods type="percent" size="md" val="10" unit="%" />
                    <EGoods size="md" val="2,700" unit="원" />
                  </div>
                </div>
              </FlexGroup>
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
              <input id="prodChk02" type="checkbox" />
              <label for="prodChk02"><span class="offscreen">상품 선택</span></label>
            </span>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지"/>
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">모바일 상품권 10,000원</ETit>
              </div>
              <FlexGroup align="end">
                <div class="flex-left">
                  <ESpinner />
                </div>
                <div class="flex-right">
                  <div class="goods-group">
                    <EGoods size="md" val="2,700" unit="원" />
                  </div>
                </div>
              </FlexGroup>
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
              <input id="prodChk03" type="checkbox" />
              <label for="prodChk03"><span class="offscreen">상품 선택</span></label>
            </span>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지"/>
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">모바일 전용 금액권 3,000원</ETit>
              </div>
              <FlexGroup align="end">
                <div class="flex-left">
                  <ESpinner />
                </div>
                <div class="flex-right">
                  <div class="goods-group">
                    <EGoods size="md" val="2,700" unit="원" />
                  </div>
                </div>
              </FlexGroup>
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
              <input id="prodChk04" type="checkbox" />
              <label for="prodChk04"><span class="offscreen">상품 선택</span></label>
            </span>
            <!-- thumb-prod-flex -->
            <div class="thumb-prod-flex">
              <EThumbProdBox size="md">
                <template #thumb>
                  <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지"/>
                </template>
              </EThumbProdBox>
              <div class="info-box">
                <ETit type="prod">푸드 전용 금액권 50,000원</ETit>
              </div>
              <FlexGroup align="end">
                <div class="flex-left">
                  <ESpinner />
                </div>
                <div class="flex-right">
                  <div class="goods-group">
                    <EGoods size="md" val="2,700" unit="원" />
                  </div>
                </div>
              </FlexGroup>
            </div>
            <!-- // thumb-prod-flex -->
            <button type="button" class="btn-delete">
              <EIco name="close" color="gray" size="xs">
                <span class="offscreen">상품 삭제</span>
              </EIco>
            </button>
          </li>
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
      <FoldToggleBox open>
        <template #header>
          <div class="fold-title">
            <FlexGroup>
              <div class="flex-left">
                <ETit text="결제예정금액" type="fold" />
              </div>
              <div class="flex-right">
                <EGoods size="xl" val="38,200" unit="원" class="fw-md fc-spot" />
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
                    <ETit text="주문금액" type="goods" />
                  </div>
                  <div class="flex-right">
                    <ETit type="goods">
                      <EGoods val="133,300" unit="원" />
                    </ETit>
                  </div>
                </FlexGroup>
              </li>
              <li class="item-order-info">
                <FlexGroup align="center">
                  <div class="flex-left">
                    <ETit text="할인금액" type="goods" />
                  </div>
                  <div class="flex-right">
                    <ETit type="goods">
                      <EGoods val="3,000" unit="원" class="fc-red" />
                    </ETit>
                  </div>
                </FlexGroup>
              </li>
            </RowListWrap>
          </ColorBox>
        </template>
      </FoldToggleBox>
    </ContBox>
    <ContBox size="lg">
      <CtitleWrap size="md">
        <ETit text="알려드립니다." type="cont" />
      </CtitleWrap>
      <RowListWrap size="sm" gap="sm">
        <li class="dot-text-sm">
          구매하신 상품권은 온/오프라인에서 사용이 가능합니다.<br />(일부 매장에서는 모바일 쿠폰 사용이 불가할 수 있습니다.)
        </li>
        <li class="dot-text-sm">
          결제금액이 100만원 이상일 경우 본인인증 절차를 진행합니다. (1회 결제한도 150만원)
        </li>
        <li class="dot-text-sm">
          상품권은 유효기간이 있으며 5년 내 3개월 단위로 연장신청을 하실 수 있습니다.
        </li>
        <li class="dot-text-sm">
          유효기간이 만료되어 환불을 요청하시는 경우 결제금액의 90%를 환불해 드립니다.
        </li>
      </RowListWrap>
    </ContBox>
  </ContWrap>
  <ContDocker>
    <BtnWrap>
      <EBtn color="green" size="lg">
        <span class="text"><EGoods val="133,500" unit="원" /> 주문하기</span>
      </EBtn>
    </BtnWrap>
  </ContDocker>

  <!-- 데이터가 없는 경우  -->
  <ContWrap v-if="isNoData" in-top="zero">
    <InfoGuideWrap
      type="no-data"
      name="cart"
      desc="장바구니에 담긴 상품이 없습니다."
    />
    <BtnWrap type="auto-center" size="xl">
      <EBtn tag="a" color="line-light-gray" size="md" to="to">
        <span class="text">상품권 둘러보기</span>
      </EBtn>
    </BtnWrap>
  </ContWrap>
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
