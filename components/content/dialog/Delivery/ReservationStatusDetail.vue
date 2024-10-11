<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        예약현황
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap type="white">
          <ContBox>
            <BadgeGroup size="xl">
              <EBadge color="gray" badge-text="일반택배" />
              <EBadge color="green" badge-text="착한택배" />
            </BadgeGroup>
            <CtitleWrap>
              <ETit text="반팔티 3팩" type="prod-detail" />
              <div class="stext-lg">
                매장의 택배접수기에 바코드를 스캔하여<br>택배를 접수해주세요.
              </div>
            </CtitleWrap>
            <ColorBox color="line-light-gray" size="lg">
              <div class="barcode-box">
                <img src="/assets/images/temp/temp_img_barcode_delivery.svg" alt="일반택배 예약정보 바코드 이미지">
                <!-- <img src="/assets/images/temp/temp_img_barcode_qr_delivery.svg" alt="착한택배 예약정보 QR코드 이미지"> -->
              </div>
            </ColorBox>
            <BtnWrap size="md">
              <EBtn color="light-gray">
                <span class="text">예약취소</span>
              </EBtn>
            </BtnWrap>
          </ContBox>
        </ContWrap>
        <ContWrap in-top="lg">
          <ContBox gap="sm">
            <CtitleWrap size="md">
              <ETit text="예약정보" type="cont" />
            </CtitleWrap>
            <ColorBox color="white" size="lg">
              <TableWrap type="info" gap="lg" size="lg" table-name="결제금액">
                <colgroup>
                  <col style="width: 81px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      결제금액
                    </th>
                    <td class="ta-right">
                      3,400원
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      예약일시
                    </th>
                    <td class="ta-right">
                      2024.06.15 15:32
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      물품금액
                    </th>
                    <td class="ta-right">
                      5만원
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      배송상품
                    </th>
                    <td class="ta-right">
                      의류
                    </td>
                  </tr>
                </tbody>
              </TableWrap>
            </ColorBox>
            <ColorBox color="white" size="lg">
              <TableWrap type="info" gap="lg" size="lg" table-name="보내는 분">
                <colgroup>
                  <col style="width: 81px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      보내는 분
                    </th>
                    <td class="ta-right">
                      홍*동
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      휴대폰번호
                    </th>
                    <td class="ta-right">
                      010-6548-7742
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      주소(반송처)
                    </th>
                    <td class="ta-right">
                      서울시 중구 충무로 23가길 ***<br>***동 ****호
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      접수매장
                    </th>
                    <td class="ta-right">
                      세븐일레븐 을지로점
                    </td>
                  </tr>
                </tbody>
              </TableWrap>
            </ColorBox>
            <ColorBox color="white" size="lg">
              <TableWrap type="info" gap="lg" size="lg" table-name="받는 분">
                <colgroup>
                  <col style="width: 81px;">
                  <col style="width: auto;">
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      받는 분
                    </th>
                    <td class="ta-right">
                      김*븐
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      휴대폰번호
                    </th>
                    <td class="ta-right">
                      010-1234-5678
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      주소
                    </th>
                    <td class="ta-right">
                      서울시 중구 충무로 23가길 234<br>127동 2301호
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      수령매장
                    </th>
                    <td class="ta-right">
                      세븐일레븐 광화문점
                    </td>
                  </tr>
                </tbody>
              </TableWrap>
            </ColorBox>
          </ContBox>
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

const emit = defineEmits(["update:sta"]);

function openDialog() {
  isOpen.value = true;
}

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit("update:sta", { ...props.sta, open: value }),
});

function closeDialog() {
  isOpen.value = false;
}
</script>
