<template>
  <ContWrap type="white" in-top="zero">
    <InfoGuideWrap
      type="info-guide"
      name="temp"
      desc="주문(결제)이 완료되었습니다."
      sub-desc="선물한 상품은 문자로 전달되며<br />전달된 선물내역은 주문내역에서 확인 하실 수 있습니다."
    />
  </ContWrap>
  <ContWrap>
    <RowListWrap gap="2xl">
      <li class="item">
        <CtitleWrap>
          <ETit text="받는사람" type="cont" />
        </CtitleWrap>
        <ColorBox color="white" size="lg">
          <RowListWrap>
            <li class="item">
              <span class="stext fw-md fc-gray90">
                010-2345-6789
              </span>
            </li>
            <li class="item">
              <span class="stext fw-md fc-gray90">
                010-5678-9012
              </span>
            </li>
          </RowListWrap>
        </ColorBox>
      </li>
      <li class="item">
        <CtitleWrap>
          <ETit text="상품정보" type="cont" />
        </CtitleWrap>
        <ColorBox color="white" size="lg">
          <TableWrap type="info" gap="sm" size="md" table-name="상품정보 테이블">
            <colgroup>
              <col style="width: 55px;" />
              <col style="width: auto;" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">
                  주문상품
                </th>
                <td>모바일 상품권 10,000원</td>
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
              <col style="width: 70px;" />
              <col style="width: auto;" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">
                  주문일
                </th>
                <td>모바일 상품권 10,000원</td>
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
                  <span class="fw-md">
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
      <EBtn tag="a" color="line-light-gray" size="md" to="to">
        <span class="text">쏘옥보관</span>
      </EBtn>
      <EBtn tag="a" color="line-green" size="md" to="to">
        <span class="text">주문내역</span>
      </EBtn>
    </BtnWrap>
  </ContWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: '주문완료',
});
</script>

<style lang="scss" scoped>
</style>
