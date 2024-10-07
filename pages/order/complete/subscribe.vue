<template>
  <ContWrap type="white" in-top="zero">
    <InfoGuideWrap
      type="info-guide"
      name="order"
      desc="주문(결제)이 완료되었습니다."
      sub-desc="주문내역을 확인해주세요."
    />
  </ContWrap>
  <ContWrap class="not-navbar">
    <RowListWrap gap="2xl">
      <li class="item">
        <CtitleWrap>
          <ETit text="상품정보" type="cont" />
        </CtitleWrap>
        <ColorBox color="white" size="lg">
          <TableWrap type="info" gap="sm" size="md" table-name="상품정보 테이블">
            <colgroup>
              <col style="width: 70px;">
              <col style="width: auto;">
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">
                  주문상품
                </th>
                <td>(정기) 도시락 구독권</td>
              </tr>
              <tr>
                <th scope="row">
                  매월결제일
                </th>
                <td>매월 1일</td>
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
          <TableWrap type="info" gap="sm" size="md" table-name="결제정보 테이블">
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
</script>

<style lang="scss" scoped>
</style>
