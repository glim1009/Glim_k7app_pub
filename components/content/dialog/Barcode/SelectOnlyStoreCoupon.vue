<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">매장쿠폰 선택</div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap in-top="lg">
          <ContBox v-if="isData">
            <CtitleWrap size="lg">
              <ETit type="cont" text="매장전용 쿠폰안내" />
              <p class="stext-lg">바코드 적용 및 오프라인 구매는 매장 쿠폰만 사용 가능하며, APP 쿠폰은 마이페이지 쿠폰함에서 확인 가능합니다.</p>
            </CtitleWrap>
            <RowListWrap>
              <!-- repeat -->
              <li class="item">
                <div class="coupon-box">
                  <div class="coupon-header">
                    <div class="ui-rdo-prod">
                      <input id="storeCouponRdo01" type="radio" name="storeCouponRdo01" />
                      <label for="storeCouponRdo01" class="align-top"></label>
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
                            도시락 장바구니 할인
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
                            사용조건
                          </th>
                          <td>30,000원 이상 구매 시 사용</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </div>
                </div>
              </li>
              <!-- // repeat -->
              <!-- repeat -->
              <li class="item">
                <div class="coupon-box">
                  <div class="coupon-header">
                    <div class="ui-rdo-prod">
                      <input id="storeCouponRdo02" type="radio" name="storeCouponRdo01" />
                      <label for="storeCouponRdo02" class="align-top"></label>
                      <!-- thumb-prod-flex -->
                      <div class="thumb-prod-flex">
                        <EThumbProdBox size="lg">
                          <template #thumb>
                            <img src="/assets/images/temp/temp_prod_5by5.png" alt="쿠폰명 이미지" />
                          </template>
                        </EThumbProdBox>
                        <div class="info-box">
                          <div class="coupon-code">
                            2,000원 할인
                          </div>
                          <ETit type="prod">
                            도시락 장바구니 할인
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
                            사용조건
                          </th>
                          <td>30,000원 이상 구매 시 사용</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            최대할인
                          </th>
                          <td>1,000원</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </div>
                </div>
              </li>
              <!-- // repeat -->
              <!-- repeat -->
              <li class="item">
                <div class="coupon-box">
                  <div class="coupon-header">
                    <div class="ui-rdo-prod">
                      <input id="storeCouponRdo03" type="radio" name="storeCouponRdo01" />
                      <label for="storeCouponRdo03" class="align-top"></label>
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
                            도시락 장바구니 할인
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
                            사용조건
                          </th>
                          <td>30,000원 이상 구매 시 사용</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            최대할인
                          </th>
                          <td>1,000원</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </div>
                </div>
              </li>
              <!-- // repeat -->
              <!-- repeat -->
              <li class="item">
                <div class="coupon-box">
                  <div class="coupon-header">
                    <div class="ui-rdo-prod">
                      <input id="storeCouponRdo04" type="radio" name="storeCouponRdo01" />
                      <label for="storeCouponRdo04" class="align-top"></label>
                      <!-- thumb-prod-flex -->
                      <div class="thumb-prod-flex">
                        <EThumbProdBox size="lg">
                          <template #thumb>
                            <img src="/assets/images/temp/temp_prod_5by5.png" alt="쿠폰명 이미지" />
                          </template>
                        </EThumbProdBox>
                        <div class="info-box">
                          <div class="coupon-code">
                            2,000원 할인
                          </div>
                          <ETit type="prod">
                            도시락 장바구니 할인
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
                            사용조건
                          </th>
                          <td>30,000원 이상 구매 시 사용</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            최대할인
                          </th>
                          <td>1,000원</td>
                        </tr>
                      </tbody>
                    </TableWrap>
                  </div>
                </div>
              </li>
              <!-- // repeat -->
            </RowListWrap>
          </ContBox>
          <ContBox v-if="isNoData">
            <InfoGuideWrap
              type="no-data"
              name="coupon"
              desc="사용 가능한 쿠폰이 없습니다."
            />
          </ContBox>
        </ContWrap>
      </div>
    </template>
    <template #footer>
      <div class="dialog-btn-wrap">
        <!-- DESC :: 쿠폰 선택 시 [disabled] 속성 삭제 -->
        <EBtn color="line-light-gray" size="lg" disabled><span class="text">초기화</span></EBtn>
        <EBtn color="green" size="lg" @click="closeDialog" disabled><span class="text">적용</span></EBtn>
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

const openDialog = () => {
  isOpen.value = true;
};

const emit = defineEmits(["update:sta"]);

const isOpen = computed({
  get: () => props.sta.open,
  set: (value) => emit("update:sta", { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};

const isData = ref(true); // 임시 : 데이터 있음 컨텐츠 확인을 위해 추가
const isNoData = ref(true); // 임시 : 데이터 없음 컨텐츠 확인을 위해 추가
</script>
