<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">제휴문의</div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap type="white">
          <ContBox>
            <CtitleWrap size="lg">
              <ETit type="lgCont" text="세븐일레븐 택배 서비스를 활용한 사업 제휴 제안은 언제든지 열려있습니다." />
              <div class="stext-lg">다양한 제휴 사항을 제안 주시면, 검토 후 담당자가 직접 연락 드리도록 하겠습니다.</div>
            </CtitleWrap>
            <div class="thumb-box">
              <img src="/assets/images/delivery/delivery_partnership.png" alt="세븐일레븐 택배 서비스 제휴 제안 이미지" />
            </div>
          </ContBox>
          <ContBox gap="sm">
            <CtitleWrap>
              <ETit type="lgCont" text="일반택배(국내)" />
            </CtitleWrap>
            <ColorBox color="line-light-gray">
              <TableWrap type="info" gap="sm" size="lg" table-name="일반택배(국내) 담당자 정보">
                <colgroup>
                  <col style="width: 53px;" />
                  <col style="width: auto;" />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row" class="fc-black">
                      담당자
                    </th>
                    <td>손경언</td>
                  </tr>
                  <tr>
                    <th scope="row" class="fc-black">
                      연락처
                    </th>
                    <td>02) 3442-8825</td>
                  </tr>
                  <tr>
                    <th scope="row" class="fc-black">
                      이메일
                    </th>
                    <td>gyenguhn.son@lotte.net</td>
                  </tr>
                </tbody>
              </TableWrap>
            </ColorBox>
            <ColorBox color="line-light-gray">
              <TableWrap type="info" gap="sm" size="lg" table-name="일반택배(국내) 담당자 정보">
                <colgroup>
                  <col style="width: 53px;" />
                  <col style="width: auto;" />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row" class="fc-black">
                      담당자
                    </th>
                    <td>정민호</td>
                  </tr>
                  <tr>
                    <th scope="row" class="fc-black">
                      연락처
                    </th>
                    <td>02) 3442-8775</td>
                  </tr>
                  <tr>
                    <th scope="row" class="fc-black">
                      이메일
                    </th>
                    <td>minho_chung@lotte.net</td>
                  </tr>
                </tbody>
              </TableWrap>
            </ColorBox>
          </ContBox>
          <ContBox>
            <CtitleWrap>
              <ETit type="lgCont" text="착한택배" />
            </CtitleWrap>
            <ColorBox color="line-light-gray">
              <TableWrap type="info" gap="sm" size="lg" table-name="착한택배 담당자 정보">
                <colgroup>
                  <col style="width: 53px;" />
                  <col style="width: auto;" />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row" class="fc-black">
                      담당자
                    </th>
                    <td>김용원</td>
                  </tr>
                  <tr>
                    <th scope="row" class="fc-black">
                      연락처
                    </th>
                    <td>02) 3442-8827</td>
                  </tr>
                  <tr>
                    <th scope="row" class="fc-black">
                      이메일
                    </th>
                    <td>yongwon.kim@lotte.net</td>
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

const openDialog = () => {
  isOpen.value = true;
};

const emit = defineEmits(['update:sta']);

const isOpen = computed({
  get: () => props.sta.open,
  set: (value) => emit('update:sta', { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};
</script>
