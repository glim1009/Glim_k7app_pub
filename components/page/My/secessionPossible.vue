<template>
  <ContBox>
    <CtitleWrap>
      <ETit text="보유 중인 금액권" type="cont" />
      <div class="stext">보유 중인 금액권은 회원탈퇴 시 환불 처리 됩니다.</div>
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
    <ColorBox size="lg" color="light-gray">
      <FlexGroup>
        <div class="flex-left">
          <div class="ctitle-xs">환불예상금액</div>
        </div>
        <div class="flex-right">
          <EGoods size="md" unit="원" class="fw-sb">
            <span class="val fc-spot">445</span>
          </EGoods>
        </div>
      </FlexGroup>
    </ColorBox>
    <RowListWrap gap="xs" size="sm">
      <li class="dot-text-sm">환불금은 L.POINT로 지급됨으로 현금영수증 발행이 어렵습니다.</li>
      <li class="dot-text-sm">회원탈퇴 시 고객님의 참여 중인 이벤트, 쿠폰 등 모두 소멸되어 복구하실 수 없습니다.</li>
      <li class="dot-text-sm">탈퇴 즉시 회원 정보가 삭제되면, 어떠한 방법으로도 복구하실 수 없습니다.</li>
      <li class="dot-text-sm">탈퇴 후 48시간 이후부터 재가입이 가능합니다.</li>
    </RowListWrap>
  </ContBox>
  <div class="all-agree-wrap">
    <span class="ui-chk">
      <input type="checkbox" id="refundAgreeChk">
      <label for="refundAgreeChk"><span class="text-lg fw-md">위 유의사항을 모두 확인하였으며, 이에 동의합니다.</span></label>
    </span>
  </div>
  <BtnWrap size="lg">
    <EBtn tag="a" color="line-light-gray" size="md" to="/my/my-info/change">
      <span class="text">취소</span>
    </EBtn>
    <EBtn tag="a" color="line-light-gray" size="md" to="javascript:">
      <span class="text">회원탈퇴</span>
    </EBtn>
  </BtnWrap>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import url('/assets/css/pages/my.scss');
</style>

