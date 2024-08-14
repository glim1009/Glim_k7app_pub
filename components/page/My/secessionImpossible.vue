<template>
  <ContBox>
    <CtitleWrap>
      <ETit text="배송완료 전인 택배" type="cont" />
      <div class="stext">배송완료 전인 택배가 있을 경우 회원탈퇴가 불가능합니다.</div>
    </CtitleWrap>
    <TableWrap type="col" table-name="배송완료 전인 택배">
      <colgroup>
        <col style="width: auto;" />
        <col style="width: 91px;" />
      </colgroup>
      <thead>
      <tr>
        <th scope="col" class="ta-left">항목</th>
        <th scope="col">배송완료전</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="ta-left">일반택배</td>
        <td>3건</td>
      </tr>
      <tr>
        <td class="ta-left">착한택배</td>
        <td>2건</td>
      </tr>
      </tbody>
    </TableWrap>
  </ContBox>
  <ContBox>
    <CtitleWrap>
      <ETit text="사용 전인 쏘옥보관" type="cont" />
      <div class="stext">상품 픽업 전인 경우 혹은 보관 상품 사용 전인 경우, 회원탈퇴가 불가능합니다.</div>
    </CtitleWrap>
    <TableWrap type="col" table-name="사용 전인 쏘옥보관">
      <colgroup>
        <col style="width: auto;" />
        <col style="width: 93px;" />
      </colgroup>
      <thead>
      <tr>
        <th scope="col" class="ta-left">항목</th>
        <th scope="col">픽업/사용 전</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="ta-left">사전예약</td>
        <td>3건</td>
      </tr>
      <tr>
        <td class="ta-left">교환권</td>
        <td>2건</td>
      </tr>
      <tr>
        <td class="ta-left">구독할인</td>
        <td>2건</td>
      </tr>
      <tr>
        <td class="ta-left">+1 증정</td>
        <td>2건</td>
      </tr>
      <tr>
        <td class="ta-left">당일픽업</td>
        <td>2건</td>
      </tr>
      </tbody>
    </TableWrap>
  </ContBox>
  <ContBox>
    <CtitleWrap>
      <ETit text="보유 중인 금액권" type="cont" />
      <div class="stext">80(60)% 이상 사용되지 않은 금액권이 있어, 회원탈퇴가 불가능합니다.</div>
    </CtitleWrap>
    <TableWrap type="col" table-name="보유 중인 금액권">
      <colgroup>
        <col style="width: auto;" />
        <col style="width: 93px;" />
      </colgroup>
      <thead>
      <tr>
        <th scope="col" class="ta-left">항목</th>
        <th scope="col">잔여금액</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="ta-left">세븐카페 금액권 20,000원</td>
        <td>7,210원</td>
      </tr>
      <tr>
        <td class="ta-left">세븐카페 금액권 10,000원</td>
        <td>9,100원</td>
      </tr>
      <tr>
        <td class="ta-left">세븐카페 금액권 5,000원</td>
        <td>2,310원</td>
      </tr>
      <tr>
        <td class="ta-left">금액권 7,000원</td>
        <td>2,215원</td>
      </tr>
      <tr>
        <td class="ta-left">금액권 5,000원</td>
        <td>3,210원</td>
      </tr>
      <tr>
        <td class="ta-left">푸드전용 금액권 10,000원</td>
        <td>7,000원</td>
      </tr>
      </tbody>
    </TableWrap>
  </ContBox>
  <RowListWrap gap="xs" size="sm">
    <li class="dot-text-sm">회원탈퇴 시 고객님의 참여 중인 이벤트, 쿠폰 등 모두 소멸되어 복구하실 수 없습니다.</li>
    <li class="dot-text-sm">탈퇴 즉시 회원 정보가 삭제되면, 어떠한 방법으로도 복구하실 수 없습니다.</li>
    <li class="dot-text-sm">탈퇴 후 48시간 이후부터 재가입이 가능합니다.</li>
  </RowListWrap>
  <BtnWrap size="lg">
    <EBtn tag="a" color="line-light-gray" size="md" to="/my/my-info/change">
      <span class="text">취소</span>
    </EBtn>
    <EBtn tag="a" color="gray" size="md" to="javascript:">
      <span class="text">쏘옥보관으로 이동</span>
    </EBtn>
  </BtnWrap>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import url('/assets/css/pages/my.scss');
</style>

