<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        구독할인 결제내역
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap type="white" in-top="sm">
          <!-- thumb-prod-flex -->
          <div class="thumb-prod-flex">
            <EThumbProdBox size="lg">
              <template #thumb>
                <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지"/>
              </template>
            </EThumbProdBox>
            <div class="info-box">
              <BadgeGroup gap="md">
                <EBadge color="line-gray" size="sm" badge-text="정기구독" />
              </BadgeGroup>
              <ETit text="7월 세븐카페 구독" type="prod" />
              <div class="stext">
                (30일간, 일 1회 / 총 10회)
              </div>
            </div>
          </div>
          <!-- // thumb-prod-flex -->
        </ContWrap>
        <ContWrap type="divider" in-top="zero" class="side-zero">
          <!-- 결제내역 있음 -->
          <RowListWrap v-if="isDataHistory" gap="bline">
            <li class="item-lg-full">
              <TableWrap type="info" gap="sm" size="lg" table-name="결제내역 상세">
                <colgroup>
                  <col style="width: 60px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      결제일
                    </th>
                    <td class="ta-right">2024.06.29(수) 15:00</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      결제회차
                    </th>
                    <td class="ta-right">5회차</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      결제금액
                    </th>
                    <td class="ta-right">3,900원</td>
                  </tr>
                </tbody>
              </TableWrap>
            </li>
            <li class="item-lg-full">
              <TableWrap type="info" gap="sm" size="lg" table-name="결제내역 상세">
                <colgroup>
                  <col style="width: 60px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      결제일
                    </th>
                    <td class="ta-right">2024.06.29(수) 15:00</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      결제회차
                    </th>
                    <td class="ta-right">4회차</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      결제금액
                    </th>
                    <td class="ta-right">3,900원</td>
                  </tr>
                </tbody>
              </TableWrap>
            </li>
            <li class="item-lg-full">
              <TableWrap type="info" gap="sm" size="lg" table-name="결제내역 상세">
                <colgroup>
                  <col style="width: 60px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      결제일
                    </th>
                    <td class="ta-right">2024.06.29(수) 15:00</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      결제회차
                    </th>
                    <td class="ta-right">5회차</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      결제금액
                    </th>
                    <td class="ta-right">3,900원</td>
                  </tr>
                </tbody>
              </TableWrap>
            </li>
            <li class="item-lg-full">
              <TableWrap type="info" gap="sm" size="lg" table-name="결제내역 상세">
                <colgroup>
                  <col style="width: 60px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      결제일
                    </th>
                    <td class="ta-right">2024.06.29(수) 15:00</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      결제회차
                    </th>
                    <td class="ta-right">2회차</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      결제금액
                    </th>
                    <td class="ta-right">3,900원</td>
                  </tr>
                </tbody>
              </TableWrap>
            </li>
            <li class="item-lg-full">
              <TableWrap type="info" gap="sm" size="lg" table-name="결제내역 상세">
                <colgroup>
                  <col style="width: 60px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      결제일
                    </th>
                    <td class="ta-right">2024.06.29(수) 15:00</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      결제회차
                    </th>
                    <td class="ta-right">1회차</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      결제금액
                    </th>
                    <td class="ta-right">3,900원</td>
                  </tr>
                </tbody>
              </TableWrap>
            </li>
          </RowListWrap>
          <!-- // 결제내역 있음 -->
          <!-- 결제내역 없음 -->
          <InfoGuideWrap
            v-if="isNoDataHistory"
            type="no-data"
            name="history"
            desc="결제하신 내역이 없습니다."
          />
          <!-- // 결제내역 없음 -->
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

const isDataHistory = ref(true); // 임시 : 결제내역 컨텐츠 확인을 위해 추가
const isNoDataHistory = ref(true); // 임시 : 결제내역 없음 컨텐츠 확인을 위해 추가
</script>
