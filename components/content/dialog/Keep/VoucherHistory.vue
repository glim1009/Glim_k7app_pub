<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        금액권 이용내역
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap type="white" in-top="sm">
          <!-- thumb-prod-flex -->
          <div class="thumb-prod-flex">
            <EThumbProdBox size="lg" dim="사용완료">
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지"/>
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <ETit text="모바일 금액권 5,000원" type="prod" />
              <div class="goods-group">
                <span class="label">잔액</span>
                <EGoods size="md" val="2,000" unit="원" class="fw-sb" />
              </div>
            </div>
          </div>
          <!-- // thumb-prod-flex -->
        </ContWrap>
        <ContWrap type="divider" in-top="zero" class="side-zero">
          <!-- 이용내역 있음 -->
          <RowListWrap v-if="isDataHistory" gap="bline">
            <li class="item-lg-full">
              <TableWrap type="info" gap="sm" size="lg" table-name="이용내역 상세">
                <colgroup>
                  <col style="width: 102px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      금액권사용
                    </th>
                    <td class="ta-right">2024.06.29(수) 15:00</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      금액
                    </th>
                    <td class="ta-right"><span class="fc-red">3,000원</span></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      사용매장
                    </th>
                    <td class="ta-right">세븐일레븐 강남점</td>
                  </tr>
                </tbody>
              </TableWrap>
            </li>
            <li class="item-lg-full">
              <TableWrap type="info" gap="sm" size="lg" table-name="이용내역 상세">
                <colgroup>
                  <col style="width: 102px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      금액권사용취소
                    </th>
                    <td class="ta-right">2024.06.29(수) 15:00</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      금액
                    </th>
                    <td class="ta-right">1,000원</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      사용매장
                    </th>
                    <td class="ta-right">세븐일레븐 강남점</td>
                  </tr>
                </tbody>
              </TableWrap>
            </li>
          </RowListWrap>
          <!-- // 이용내역 있음 -->
          <!-- 이용내역 없음 -->
          <InfoGuideWrap
            v-if="isNoDataHistory"
            type="no-data"
            name="history"
            desc="이용 내역이 없습니다."
          />
          <!-- // 이용내역 없음 -->
        </ContWrap>
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

const isDataHistory = ref(true); // 임시 : 이용내역 컨텐츠 확인을 위해 추가
const isNoDataHistory = ref(true); // 임시 : 이용내역 없음 컨텐츠 확인을 위해 추가
</script>
