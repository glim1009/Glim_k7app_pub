<template>
  <DeliveryHomeTab>
    <ContWrap>
      <div class="list-header">
        <FlexGroup align="center">
          <div class="flex-left">
            <div class="goods-group">
              <span class="label">총 </span>
              <EGoods val="8" unit="건" />
            </div>
          </div>
          <div class="flex-right">
            <div class="ui-select type-text">
              <select title="배송상태 정렬">
                <option selected>
                  예약일시 순
                </option>
                <option>택배명 순</option>
              </select>
            </div>
            <button type="button" class="btn-filter is-active">
              <EIco name="filter" color="gray" size="xs" />
            </button>
          </div>
        </FlexGroup>
      </div>

      <!-- 데이터가 있는 경우 -->
      <RowListWrap v-if="isData">
        <li class="item">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <BadgeGroup size="xl">
                <EBadge color="gray" size="md" badge-text="일반택배" />
                <EBadge color="light-gray" size="md" badge-text="반송" />
              </BadgeGroup>
              <CtitleWrap size="sm">
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
              <li class="delivery-step-item">
                <span class="status">배송완료</span>
                <span class="sub-status">배송완료</span>
              </li>
            </ul>
            <FoldOverflowBox>
              <ColorBox color="light-gray">
                <div class="scroll-box">
                  <ul class="delivery-step-row-list">
                    <li class="delivery-step-item is-incomplete">
                      <FlexGroup align="start">
                        <div class="flex-left">
                          <div class="status">
                            반송 되었습니다.
                          </div>
                          <span class="date">2024.06.25 15:34</span>
                          <span class="location">반송처</span>
                        </div>
                        <div class="flex-right">
                          <span class="sub-status">반송</span>
                        </div>
                      </FlexGroup>
                    </li>
                    <li class="delivery-step-item">
                      <FlexGroup align="start">
                        <div class="flex-left">
                          <div class="stext">
                            배송완료 되었습니다.
                          </div>
                          <span class="date">2024.06.24 23:58</span>
                        </div>
                        <div class="flex-right">
                          <span class="status">배송완료</span>
                        </div>
                      </FlexGroup>
                    </li>
                    <li class="delivery-step-item">
                      <FlexGroup align="start">
                        <div class="flex-left">
                          <div class="status">
                            배송지로 출발하였습니다.
                          </div>
                          <span class="date">2024.06.23 09:22</span>
                        </div>
                        <div class="flex-right">
                          <span class="sub-status">배송중</span>
                        </div>
                      </FlexGroup>
                    </li>
                    <li class="delivery-step-item">
                      <FlexGroup align="start">
                        <div class="flex-left">
                          <div class="stext">
                            구간 도착했습니다.
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
                            구간 출발했습니다.
                          </div>
                          <span class="date">2024.06.24 15:34</span>
                        </div>
                        <div class="flex-right">
                          <span class="sub-status">배송시작</span>
                        </div>
                      </FlexGroup>
                    </li>
                  </ul>
                </div>
              </ColorBox>
            </FoldOverflowBox>
          </ColorBox>
        </li>
        <li class="item">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <CtitleWrap size="sm">
                <badge-group>
                  <EBadge color="gray" size="md" badge-text="일반택배" />
                  <EBadge color="light-gray" size="md" badge-text="취소" />
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
              <li class="delivery-step-item">
                <span class="status">배송완료</span>
                <span class="sub-status">배송완료</span>
              </li>
            </ul>
            <FoldOverflowBox>
              <ColorBox color="light-gray">
                <ul class="delivery-step-row-list">
                  <li class="delivery-step-item is-incomplete">
                    <FlexGroup align="start">
                      <div class="flex-left">
                        <div class="status">
                          CS 처리 되었습니다.
                        </div>
                        <span class="date">2024.06.25 15:34</span>
                      </div>
                      <div class="flex-right">
                        <span class="sub-status">취소</span>
                      </div>
                    </FlexGroup>
                  </li>
                </ul>
              </ColorBox>
            </FoldOverflowBox>
          </ColorBox>
        </li>
        <li class="item">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <CtitleWrap size="sm">
                <badge-group>
                  <EBadge color="gray" size="md" badge-text="일반택배" />
                  <EBadge color="light-gray" size="md" badge-text="취소" />
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
              <li class="delivery-step-item">
                <span class="status">배송완료</span>
                <span class="sub-status">배송완료</span>
              </li>
            </ul>
            <FoldOverflowBox>
              <ColorBox color="light-gray">
                <ul class="delivery-step-row-list">
                  <li class="delivery-step-item is-incomplete">
                    <FlexGroup align="start">
                      <div class="flex-left">
                        <div class="status">
                          점포 접수 취소되었습니다.
                        </div>
                        <span class="date">2024.06.25 15:34</span>
                        <span class="location">세븐일레븐 부산본점</span>
                      </div>
                      <div class="flex-right">
                        <span class="sub-status">취소</span>
                      </div>
                    </FlexGroup>
                  </li>
                </ul>
              </ColorBox>
            </FoldOverflowBox>
          </ColorBox>
        </li>
        <li class="item">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <CtitleWrap size="sm">
                <badge-group>
                  <EBadge color="green" size="md" badge-text="착한택배" />
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
              <li class="delivery-step-item is-active">
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
              <li class="delivery-step-item">
                <span class="status">배송완료</span>
                <span class="sub-status">배송완료</span>
              </li>
            </ul>
            <FoldOverflowBox>
              <ColorBox color="light-gray">
                <div class="scroll-box">
                  <ul class="delivery-step-row-list">
                    <li class="delivery-step-item is-completed">
                      <FlexGroup align="start">
                        <div class="flex-left">
                          <div class="status">
                            고객수령 완료 되었습니다.
                          </div>
                          <span class="date">2024.06.25 15:34</span>
                          <span class="location">세븐일레븐 부산본점</span>
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
                          <span class="location">세븐일레븐 부산본점</span>
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
                          <span class="location">세븐일레븐 부산본점</span>
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
                          <span class="location">부산 저온센터</span>
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
                          <span class="location">부산 저온센터</span>
                        </div>
                        <div class="flex-right">
                          <span class="sub-status">배송시작</span>
                        </div>
                      </FlexGroup>
                    </li>
                  </ul>
                </div>
              </ColorBox>
            </FoldOverflowBox>
          </ColorBox>
        </li>
        <li class="item">
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
              <li class="delivery-step-item is-active">
                <span class="status">배송시작</span>
                <span class="sub-status">집하완료</span>
              </li>
              <li class="delivery-step-item">
                <span class="status">배송중</span>
                <span class="sub-status">배송중</span>
              </li>
              <li class="delivery-step-item">
                <span class="status">배송완료</span>
                <span class="sub-status">배송완료</span>
              </li>
            </ul>
            <FoldOverflowBox>
              <ColorBox color="light-gray">
                <div class="scroll-box">
                  <ul class="delivery-step-row-list">
                    <li class="delivery-step-item is-completed">
                      <FlexGroup align="start">
                        <div class="flex-left">
                          <div class="status">
                            고객수령 완료 되었습니다.
                          </div>
                          <span class="date">2024.06.25 15:34</span>
                          <span class="location">세븐일레븐 부산본점</span>
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
                          <span class="location">세븐일레븐 부산본점</span>
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
                          <span class="location">세븐일레븐 부산본점</span>
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
                          <span class="location">부산 저온센터</span>
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
                          <span class="location">부산 저온센터</span>
                        </div>
                        <div class="flex-right">
                          <span class="sub-status">배송시작</span>
                        </div>
                      </FlexGroup>
                    </li>
                  </ul>
                </div>
              </ColorBox>
            </FoldOverflowBox>
          </ColorBox>
        </li>
        <li class="item">
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
              <li class="delivery-step-item is-active">
                <span class="status">배송중</span>
                <span class="sub-status">배송중</span>
              </li>
              <li class="delivery-step-item">
                <span class="status">배송완료</span>
                <span class="sub-status">배송완료</span>
              </li>
            </ul>
            <FoldOverflowBox>
              <ColorBox color="light-gray">
                <div class="scroll-box">
                  <ul class="delivery-step-row-list">
                    <li class="delivery-step-item is-completed">
                      <FlexGroup align="start">
                        <div class="flex-left">
                          <div class="status">
                            고객수령 완료 되었습니다.
                          </div>
                          <span class="date">2024.06.25 15:34</span>
                          <span class="location">세븐일레븐 부산본점</span>
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
                          <span class="location">세븐일레븐 부산본점</span>
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
                          <span class="location">세븐일레븐 부산본점</span>
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
                          <span class="location">부산 저온센터</span>
                        </div>
                        <div class="flex-right">
                          <span class="status">배송시작</span>
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
                          <span class="location">부산 저온센터</span>
                        </div>
                        <div class="flex-right">
                          <span class="sub-status">배송시작</span>
                        </div>
                      </FlexGroup>
                    </li>
                  </ul>
                </div>
              </ColorBox>
            </FoldOverflowBox>
          </ColorBox>
        </li>
        <li class="item">
          <ColorBox color="white" size="lg">
            <div class="box-info-header">
              <CtitleWrap size="sm">
                <badge-group>
                  <EBadge color="gray" size="md" badge-text="일반택배" />
                  <EBadge color="light-gray" size="md" badge-text="반송" />
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
            <FoldOverflowBox>
              <ColorBox color="light-gray">
                <div class="scroll-box">
                  <ul class="delivery-step-row-list">
                    <li class="delivery-step-item is-incomplete">
                      <FlexGroup align="start">
                        <div class="flex-left">
                          <div class="stext">
                            반송되었습니다.
                          </div>
                          <span class="date">2024.06.25 15:34</span>
                          <span class="location">세븐일레븐 부산본점</span>
                        </div>
                        <div class="flex-right">
                          <span class="sub-status">반송</span>
                        </div>
                      </FlexGroup>
                    </li>
                  </ul>
                </div>
              </ColorBox>
            </FoldOverflowBox>
          </ColorBox>
        </li>
      </RowListWrap>
      <!-- // 데이터가 있는 경우 -->

      <!-- 데이터가 없는 경우  -->
      <InfoGuideWrap
        v-if="isNoData"
        type="no-data"
        name="temp"
        desc="배송조회 내역이 없습니다."
      />
      <!-- // 데이터가 없는 경우  -->
    </ContWrap>
  </DeliveryHomeTab>
</template>

<script setup lang="ts">
definePageMeta({
  title: '택배',
  hideRightHeader: ['home'],
});
const isData = ref(true);
const isNoData = ref(true);
</script>

<style lang="scss" scoped>
@import url("assets/css/pages/delivery.scss");
</style>
