<template>
  <ContWrap type="white" in-top="zero">
    <InfoGuideWrap
      type="info-guide"
      name="order"
      desc="주문(결제)이 완료되었습니다."
      sub-desc="<span class='fc-spot'>이벤트로 지급된 리워드가 있습니다.</span><br />주문내역을 확인해주세요."
    />
  </ContWrap>
  <ContWrap in-top="lg" class="not-navbar">
    <RowListWrap gap="2xl">
      <li v-if="isReservation" class="item">
        <FoldToggleBox open>
          <template #header>
            <div class="fold-title">
              <ETit text="상품정보" type="cont" />
            </div>
          </template>
          <template #content>
            <RowListWrap>
              <li class="item">
                <ColorBox color="white" size="lg">
                  <TableWrap type="info" gap="lg" size="md" table-name="상품정보 테이블">
                    <colgroup>
                      <col style="width: 55px;">
                      <col style="width: auto;">
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">
                          주문상품
                        </th>
                        <td>비비고 미역국</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          픽업매장
                        </th>
                        <td><span class="fw-md fc-gray90">세븐일레븐 강남점</span></td>
                      </tr>
                      <tr>
                        <th scope="row">
                          픽업일시
                        </th>
                        <td>2024.07.02 14:30</td>
                      </tr>
                    </tbody>
                  </TableWrap>
                </ColorBox>
              </li>
              <li class="item">
                <ColorBox color="white" size="lg">
                  <TableWrap type="info" gap="lg" size="md" table-name="상품정보 테이블">
                    <colgroup>
                      <col style="width: 55px;">
                      <col style="width: auto;">
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">
                          주문상품
                        </th>
                        <td>비비고 사골컵만둣국 외 3건</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          픽업매장
                        </th>
                        <td><span class="fw-md fc-gray90">세븐일레븐 강남점</span></td>
                      </tr>
                      <tr>
                        <th scope="row">
                          픽업일시
                        </th>
                        <td>2024.07.02 14:30</td>
                      </tr>
                    </tbody>
                  </TableWrap>
                </ColorBox>
              </li>
            </RowListWrap>
          </template>
        </FoldToggleBox>
      </li>
      <li class="item">
        <CtitleWrap>
          <ETit text="상품정보" type="cont" />
        </CtitleWrap>
        <ColorBox color="white" size="lg">
          <TableWrap type="info" gap="lg" size="md" table-name="상품정보 테이블">
            <colgroup>
              <col style="width: 55px;">
              <col style="width: auto;">
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">
                  주문상품
                </th>
                <td>7월 도시락 구독할인 외 1건</td>
              </tr>
              <tr>
                <th scope="row">
                  픽업매장
                </th>
                <td>세븐일레븐 강남점</td>
              </tr>
              <tr>
                <th scope="row">
                  결제수단
                </th>
                <td>신용카드 (롯데)</td>
              </tr>
            </tbody>
          </TableWrap>
        </ColorBox>
      </li>
      <li class="item">
        <CtitleWrap>
          <ETit text="결제정보" type="cont" />
        </CtitleWrap>
        <ColorBox color="white" size="lg">
          <TableWrap type="info" gap="lg" size="md" table-name="결제정보 테이블">
            <colgroup>
              <col style="width: 70px;">
              <col style="width: auto;">
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">
                  주문일
                </th>
                <td>2024.07.02</td>
              </tr>
              <tr>
                <th scope="row">
                  주문번호
                </th>
                <td>2131876349</td>
              </tr>
              <tr>
                <th scope="row">
                  결제수단
                </th>
                <td>신용카드 (롯데)</td>
              </tr>
              <tr>
                <th scope="row">
                  총 결제금액
                </th>
                <td>
                  <span class="fw-md fc-gray90">
                    9,500원
                  </span>
                </td>
              </tr>
            </tbody>
          </TableWrap>
        </ColorBox>
      </li>
    </RowListWrap>
    <BtnWrap type="flex" size="xl">
      <EBtn tag="a" color="gray" size="md" to="/keep/home">
        <span class="text">쏘옥보관</span>
      </EBtn>
      <EBtn tag="a" color="line-light-gray" size="md" to="javascript:">
        <span class="text">주문내역</span>
      </EBtn>
    </BtnWrap>
  </ContWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: "주문완료",
});

const isReservation = ref(true); // 사전 예약 content 상태
</script>

<style lang="scss" scoped>
</style>
