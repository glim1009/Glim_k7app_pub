<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        쿠폰선택
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap>
          <ContBox size="lg">
            <CtitleWrap>
              <ETit text="상품할인 쿠폰" type="cont" />
            </CtitleWrap>
            <RowListWrap>
              <!-- 상품할인 쿠폰 CASE 01 : 적용가능 상품 1종일 경우 -->
              <li class="item">
                <div class="coupon-box">
                  <div class="coupon-header">
                    <div class="ui-chk-prod">
                      <input id="couponChk01" type="checkbox" />
                      <label for="couponChk01" class="align-top"></label>
                      <!-- thumb-prod-flex -->
                      <div class="thumb-prod-flex">
                        <EThumbProdBox size="lg">
                          <template #thumb>
                            <img src="/assets/images/temp/temp_prod_5by5.png" alt="쿠폰명 이미지" />
                          </template>
                        </EThumbProdBox>
                        <div class="info-box">
                          <div class="coupon-code">
                            3,000원 할인
                          </div>
                          <ETit type="prod">
                            참치마요 삼각김밥
                          </ETit>
                        </div>
                      </div>
                      <!-- // thumb-prod-flex -->
                    </div>
                  </div>
                  <div class="coupon-cont">
                    <TableWrap type="info" gap="sm" size="md" table-name="쿠폰 정보">
                      <colgroup>
                        <col style="width: 55px;" />
                        <col style="width: auto;" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            유효기간
                          </th>
                          <td>2024.06.10 ~ 2024.06.30</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            당첨일
                          </th>
                          <td>2024.06.10</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </div>
                </div>
              </li>
              <!-- // 상품할인 쿠폰 CASE 01 : 적용가능 상품 1종일 경우 -->
              <!-- 상품할인 쿠폰 CASE 02 : 적용가능 상품 2종일 경우 -->
              <li class="item">
                <div class="coupon-box">
                  <div class="coupon-header">
                    <div class="ui-chk-prod">
                      <input id="couponChk02" type="checkbox" />
                      <label for="couponChk02" class="align-top"></label>
                      <!-- thumb-prod-flex -->
                      <div class="thumb-prod-flex">
                        <EThumbProdBox size="lg">
                          <template #thumb>
                            <img src="/assets/images/temp/temp_prod_5by5.png" alt="쿠폰명 이미지" />
                          </template>
                        </EThumbProdBox>
                        <div class="info-box">
                          <div class="coupon-code">
                            3,000원 할인
                          </div>
                          <ETit type="prod">
                            참치마요 삼각김밥
                          </ETit>
                        </div>
                      </div>
                      <!-- // thumb-prod-flex -->
                    </div>
                  </div>
                  <div class="coupon-cont">
                    <TableWrap type="info" gap="sm" size="md" table-name="쿠폰 정보">
                      <colgroup>
                        <col style="width: 55px;" />
                        <col style="width: auto;" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            유효기간
                          </th>
                          <td>2024.06.10 ~ 2024.06.30</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            당첨일
                          </th>
                          <td>2024.06.10</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                    <BtnWrap type="full" size="sm">
                      <EBtn color="line-light-gray" size="sm">
                        <span class="text">사용하기</span>
                      </EBtn>
                    </BtnWrap>
                    <ColorBox color="light-gray" size="sm">
                      <div class="stext-gray70">쿠폰 설명 최대 50까지 노출됩니다. 쿠폰 설명 최대 50까지 노출되는 영역 입니다.</div>
                    </ColorBox>
                    <ColorBox color="light-gray" size="sm" class="prod-sel-before">
                      <RowListWrap>
                        <li class="item-md">
                          <span class="ui-rdo">
                            <input id="discountRdo01" type="radio" name="discountRdo01" />
                            <label for="discountRdo01"><span class="text-sm">하림 닭고기 도시락 모닝세트</span></label>
                          </span>
                        </li>
                        <li class="item-md">
                          <span class="ui-rdo">
                            <input id="discountRdo02" type="radio" name="discountRdo01" disabled />
                            <label for="discountRdo02"><span class="text-sm">(적용중)하림 닭고기 도시락 모닝세트</span></label>
                          </span>
                        </li>
                        <li class="item-md">
                          <span class="ui-rdo">
                            <input id="discountRdo03" type="radio" name="discountRdo01" />
                            <label for="discountRdo03"><span class="text-sm">하림 닭고기 도시락 모닝세트2</span></label>
                          </span>
                        </li>
                      </RowListWrap>
                      <BtnWrap type="full" size="sm">
                        <EBtn color="line-light-gray" size="sm" @click="addProdSel">
                          <span class="text">상품 선택</span>
                        </EBtn>
                      </BtnWrap>
                    </ColorBox>
                    <div class="tag-full-box">
                      <div class="stext-black">하림 닭고기 도시락 모닝 세트</div>
                      <button type="button" class="btn-delete" @click="removeProdSel">
                        <EIco name="close" color="gray" size="xs">
                          <span class="offscreen">삭제</span>
                        </EIco>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <!-- // 상품할인 쿠폰 CASE 02 : 적용가능 상품 2종일 경우 -->
            </RowListWrap>
          </ContBox>
          <ContBox size="lg">
            <CtitleWrap>
              <ETit text="장바구니할인 쿠폰" type="cont" />
            </CtitleWrap>
            <RowListWrap>
              <li class="item">
                <div class="coupon-box">
                  <div class="coupon-header">
                    <div class="ui-rdo-prod">
                      <input id="couponRdo01" type="radio" name="couponRdo01" />
                      <label for="couponRdo01" class="align-top"></label>
                      <!-- thumb-prod-flex -->
                      <div class="thumb-prod-flex">
                        <EThumbProdBox size="lg">
                          <template #thumb>
                            <img src="/assets/images/temp/temp_prod_5by5.png" alt="쿠폰명 이미지" />
                          </template>
                        </EThumbProdBox>
                        <div class="info-box">
                          <div class="coupon-code">
                            3,000원 할인
                          </div>
                          <ETit type="prod">
                            참치마요 삼각김밥
                          </ETit>
                        </div>
                      </div>
                      <!-- // thumb-prod-flex -->
                    </div>
                  </div>
                  <div class="coupon-cont">
                    <TableWrap type="info" gap="sm" size="md" table-name="쿠폰 정보">
                      <colgroup>
                        <col style="width: 55px;" />
                        <col style="width: auto;" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            유효기간
                          </th>
                          <td>2024.06.10 ~ 2024.06.30</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            당첨일
                          </th>
                          <td>2024.06.10</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </div>
                </div>
              </li>
            </RowListWrap>
          </ContBox>
          <ContBox size="lg">
            <CtitleWrap>
              <ETit text="카드사할인 쿠폰" type="cont" />
              <div class="stext">
                선택하신 쿠폰의 결제수단으로 자동 변경됩니다.
              </div>
            </CtitleWrap>
            <RowListWrap>
              <li class="item">
                <div class="coupon-box">
                  <div class="coupon-header">
                    <div class="ui-rdo-prod">
                      <input id="couponRdo02" type="radio" name="couponRdo02" />
                      <label for="couponRdo02" class="align-top"></label>
                      <!-- thumb-prod-flex -->
                      <div class="thumb-prod-flex">
                        <EThumbProdBox size="lg">
                          <template #thumb>
                            <img src="/assets/images/common/comm_card_bc.png" alt="쿠폰명 이미지" />
                          </template>
                        </EThumbProdBox>
                        <div class="info-box">
                          <div class="coupon-code">
                            3,000원 할인
                          </div>
                          <ETit type="prod">
                            참치마요 삼각김밥
                          </ETit>
                        </div>
                      </div>
                      <!-- // thumb-prod-flex -->
                    </div>
                  </div>
                  <div class="coupon-cont">
                    <TableWrap type="info" gap="sm" size="md" table-name="쿠폰 정보">
                      <colgroup>
                        <col style="width: 55px;" />
                        <col style="width: auto;" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            유효기간
                          </th>
                          <td>2024.06.10 ~ 2024.06.30</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            당첨일
                          </th>
                          <td>2024.06.10</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </div>
                </div>
              </li>
              <li class="item">
                <div class="coupon-box">
                  <div class="coupon-header">
                    <div class="ui-rdo-prod">
                      <input id="couponRdo03" type="radio" name="couponRdo02" />
                      <label for="couponRdo03" class="align-top"></label>
                      <!-- thumb-prod-flex -->
                      <div class="thumb-prod-flex">
                        <EThumbProdBox size="lg">
                          <template #thumb>
                            <img src="/assets/images/common/comm_card_samsung.png" alt="쿠폰명 이미지" />
                          </template>
                        </EThumbProdBox>
                        <div class="info-box">
                          <div class="coupon-code">
                            3,000원 할인
                          </div>
                          <ETit type="prod">
                            참치마요 삼각김밥
                          </ETit>
                        </div>
                      </div>
                      <!-- // thumb-prod-flex -->
                    </div>
                  </div>
                  <div class="coupon-cont">
                    <TableWrap type="info" gap="sm" size="md" table-name="쿠폰 정보">
                      <colgroup>
                        <col style="width: 55px;" />
                        <col style="width: auto;" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            유효기간
                          </th>
                          <td>2024.06.10 ~ 2024.06.30</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            당첨일
                          </th>
                          <td>2024.06.10</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </div>
                </div>
              </li>
            </RowListWrap>
          </ContBox>
        </ContWrap>
      </div>
    </template>
    <template #footer>
      <!-- DESC :: 쿠폰 한 건이라도 선택 시 [disabled] 속성 제거 -->
      <div class="dialog-btn-wrap">
        <EBtn color="line-light-gray" size="lg" disabled>
          <span class="text">초기화</span>
        </EBtn>
        <EBtn color="green" size="lg" disabled @click="closeDialog">
          <span class="text">쿠폰적용</span>
        </EBtn>
      </div>
    </template>
  </ContDialog>
</template>

<script setup lang="ts">
interface DialogState {
  open: boolean;
}

const props = defineProps<{
  sta: DialogState;
}>();

const emit = defineEmits(['update:sta']);

function openDialog() {
  isOpen.value = true;
}

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit('update:sta', { ...props.sta, open: value }),
});

function closeDialog() {
  isOpen.value = false;
}


// 컨텐츠 확인을 위한 임시 함수 ( 개발시 v-if로 처리 후 삭제 )
const removeProdSel = (event:any) => {
  event.target.closest('.coupon-cont').classList.remove('is-prod-sel');
}

// 컨텐츠 확인을 위한 임시 함수 ( 개발시 v-if로 처리 후 삭제 )
const addProdSel = (event:any) => {
  event.target.closest('.coupon-cont').classList.add('is-prod-sel');
}
</script>
