<template>
  <ContWrap>
    <ColorBox color="white" size="lg">
      <div class="box-info-header">
        <CtitleWrap size="sm">
          <badge-group>
            <EBadge color="gray" size="md" badge-text="일반택배" />
          </badge-group>
          <ETit text="의류 청바지" type="box" />
        </CtitleWrap>
        <TableWrap type="info" gap="sm" size="md" table-name="배송정보">
          <colgroup>
            <col style="width: 55px;" />
            <col style="width: auto;" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">
                송장번호
              </th>
              <td>1234567890987</td>
            </tr>
          </tbody>
        </TableWrap>
      </div>
      <ul class="delivery-step-col-list">
        <li class="delivery-step-item">
          <span class="status">접수완료</span>
          <span class="sub-status">점포입고</span>
        </li>
        <li class="delivery-step-item">
          <span class="status">배송시작</span>
          <span class="sub-status">집하완료</span>
        </li>
        <li class="delivery-step-item">
          <span class="status">배송중</span>
          <span class="sub-status">배송중</span>
        </li>
        <li class="delivery-step-item is-active">
          <span class="status">배송완료</span>
          <span class="sub-status">배송완료</span>
        </li>
      </ul>
      <ColorBox color="light-gray">
        <ul class="delivery-step-row-list">
          <li class="delivery-step-item is-completed">
            <FlexGroup align="start">
              <div class="flex-left">
                <div class="status">
                  고객수령 완료 되었습니다.
                </div>
                <span class="date">2024.06.25 15:34</span>
              </div>
              <div class="flex-right">
                <span class="sub-status">배송완료</span>
              </div>
            </FlexGroup>
          </li>
          <li class="delivery-step-item">
            <FlexGroup align="start">
              <div class="flex-left">
                <div class="status">
                  점포 도착 하였습니다.
                </div>
                <span class="date">2024.06.24 23:58</span>
              </div>
              <div class="flex-right">
                <span class="sub-status">배송중</span>
              </div>
            </FlexGroup>
          </li>
          <li class="delivery-step-item">
            <FlexGroup align="start">
              <div class="flex-left">
                <div class="status">
                  점포로 출고 되었습니다.
                </div>
                <span class="date">2024.06.23 09:22</span>
              </div>
              <div class="flex-right">
                <span class="sub-status">배송시작</span>
              </div>
            </FlexGroup>
          </li>
          <li class="delivery-step-item">
            <FlexGroup align="start">
              <div class="flex-left">
                <div class="status">
                  배송센터 입고 되었습니다.
                </div>
                <span class="date">2024.06.24 15:34</span>
              </div>
              <div class="flex-right">
                <span class="sub-status">배송시작</span>
              </div>
            </FlexGroup>
          </li>
          <li class="delivery-step-item">
            <FlexGroup align="start">
              <div class="flex-left">
                <div class="status">
                  배송센터 입고 되었습니다.
                </div>
                <span class="date">2024.06.24 15:34</span>
              </div>
              <div class="flex-right">
                <span class="sub-status">배송시작</span>
              </div>
            </FlexGroup>
          </li>
        </ul>
      </ColorBox>
    </ColorBox>
  </ContWrap>
</template>

<script setup lang="ts">
definePageMeta({
  title: '비회원 배송조회',
  hideRightHeader: ['home'],
});
</script>

<style lang="scss" scoped>
@import url("assets/css/pages/delivery.scss");
</style>
