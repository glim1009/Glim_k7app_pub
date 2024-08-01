<template>
  <DeliveryHomeTab>
    <ContWrap>
      <ContBox>
        <GridListHeader list-value="8" select-title="배송상태 정렬">
          <option selected>
            배송상태 순
          </option>
          <option>예약일시 순</option>
          <option>택배명</option>
        </GridListHeader>
      </ContBox>

      <!-- 데이터가 있는 경우 -->
      <ContBox v-if="isData" size="sm">
        <RowListWrap>
          <li class="item">
            <ColorBox color="white" size="lg">
              <div class="box-info-header">
                <CtitleWrap size="sm">
                  <div class="ctitle-sub-lg">
                    <badge-group>
                      <EBadge color="gray" size="md" badge-text="일반택배" />
                      <EBadge color="light-gray" size="md" badge-text="반송" />
                    </badge-group>
                  </div>
                  <div class="ctitle">
                    의류 청바지
                  </div>
                </CtitleWrap>
                <TableWrap type="info" size="xs" table-name="배송정보">
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
                <li class="delivery-item">
                  <span class="status">접수완료</span>
                  <span class="sub-status">점포입고</span>
                </li>
                <li class="delivery-item">
                  <span class="status">배송시작</span>
                  <span class="sub-status">집하완료</span>
                </li>
                <li class="delivery-item">
                  <span class="status">배송중</span>
                  <span class="sub-status">배송중</span>
                </li>
                <li class="delivery-item">
                  <span class="status">배송완료</span>
                  <span class="sub-status">배송완료</span>
                </li>
              </ul>
              <FoldOverflowBox>
                <ColorBox color="light-gray">
                  <div class="scroll-box">
                    <ul class="delivery-step-row-list">
                      <li class="delivery-item is-incomplete">
                        <FlexGroup align="start">
                          <div class="flex-left">
                            <div class="stext">
                              반송 되었습니다.
                            </div>
                            <span class="date">2024.06.25 15:34</span>
                            <span class="sub-status">반송처</span>
                          </div>
                          <div class="flex-right">
                            <span class="status">반송</span>
                          </div>
                        </FlexGroup>
                      </li>
                      <li class="delivery-item">
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
                      <li class="delivery-item">
                        <FlexGroup align="start">
                          <div class="flex-left">
                            <div class="stext">
                              배송지로 출발하였습니다.
                            </div>
                            <span class="date">2024.06.23 09:22</span>
                          </div>
                          <div class="flex-right">
                            <span class="status">배송중</span>
                          </div>
                        </FlexGroup>
                      </li>
                      <li class="delivery-item">
                        <FlexGroup align="start">
                          <div class="flex-left">
                            <div class="stext">
                              구간 도착했습니다.
                            </div>
                            <span class="date">2024.06.24 15:34</span>
                          </div>
                          <div class="flex-right">
                            <span class="status">배송시작</span>
                          </div>
                        </FlexGroup>
                      </li>
                      <li class="delivery-item">
                        <FlexGroup align="start">
                          <div class="flex-left">
                            <div class="stext">
                              구간 출발했습니다.
                            </div>
                            <span class="date">2024.06.24 15:34</span>
                          </div>
                          <div class="flex-right">
                            <span class="status">배송시작</span>
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
                  <div class="ctitle-sub-lg">
                    <badge-group>
                      <EBadge color="gray" size="md" badge-text="일반택배" />
                      <EBadge color="light-gray" size="md" badge-text="취소" />
                    </badge-group>
                  </div>
                  <div class="ctitle-sm">
                    의류 청바지
                  </div>
                </CtitleWrap>
                <TableWrap type="info" size="xs" table-name="배송정보">
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
                <li class="delivery-item">
                  <span class="status">접수완료</span>
                  <span class="sub-status">점포입고</span>
                </li>
                <li class="delivery-item">
                  <span class="status">배송시작</span>
                  <span class="sub-status">집하완료</span>
                </li>
                <li class="delivery-item">
                  <span class="status">배송중</span>
                  <span class="sub-status">배송중</span>
                </li>
                <li class="delivery-item">
                  <span class="status">배송완료</span>
                  <span class="sub-status">배송완료</span>
                </li>
              </ul>
              <FoldOverflowBox>
                <ColorBox color="light-gray">
                  <ul class="delivery-step-row-list">
                    <li class="delivery-item is-incomplete">
                      <FlexGroup align="start">
                        <div class="flex-left">
                          <div class="stext">
                            CS 처리 되었습니다.
                          </div>
                          <span class="date">2024.06.25 15:34</span>
                        </div>
                        <div class="flex-right">
                          <span class="status">취소</span>
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
                  <div class="ctitle-sub-lg">
                    <badge-group>
                      <EBadge color="gray" size="md" badge-text="일반택배" />
                      <EBadge color="light-gray" size="md" badge-text="취소" />
                    </badge-group>
                  </div>
                  <div class="ctitle-sm">
                    의류 청바지
                  </div>
                </CtitleWrap>
                <TableWrap type="info" size="xs" table-name="배송정보">
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
                <li class="delivery-item">
                  <span class="status">접수완료</span>
                  <span class="sub-status">점포입고</span>
                </li>
                <li class="delivery-item">
                  <span class="status">배송시작</span>
                  <span class="sub-status">집하완료</span>
                </li>
                <li class="delivery-item">
                  <span class="status">배송중</span>
                  <span class="sub-status">배송중</span>
                </li>
                <li class="delivery-item">
                  <span class="status">배송완료</span>
                  <span class="sub-status">배송완료</span>
                </li>
              </ul>
              <FoldOverflowBox>
                <ColorBox color="light-gray">
                  <ul class="delivery-step-row-list">
                    <li class="delivery-item is-incomplete">
                      <FlexGroup align="start">
                        <div class="flex-left">
                          <div class="stext">
                            점포 접수 취소되었습니다.
                          </div>
                          <span class="date">2024.06.25 15:34</span>
                          <span class="sub-status">세븐일레븐 부산본점</span>
                        </div>
                        <div class="flex-right">
                          <span class="status">취소</span>
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
                  <div class="ctitle-sub-lg">
                    <badge-group>
                      <EBadge color="green" size="md" badge-text="착한택배" />
                    </badge-group>
                  </div>
                  <div class="ctitle-sm">
                    의류 청바지
                  </div>
                </CtitleWrap>
                <TableWrap type="info" size="xs" table-name="배송정보">
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
                <li class="delivery-item is-active">
                  <span class="status">접수완료</span>
                  <span class="sub-status">점포입고</span>
                </li>
                <li class="delivery-item">
                  <span class="status">배송시작</span>
                  <span class="sub-status">집하완료</span>
                </li>
                <li class="delivery-item">
                  <span class="status">배송중</span>
                  <span class="sub-status">배송중</span>
                </li>
                <li class="delivery-item">
                  <span class="status">배송완료</span>
                  <span class="sub-status">배송완료</span>
                </li>
              </ul>
              <FoldOverflowBox>
                <ColorBox color="light-gray">
                  <div class="scroll-box">
                    <ul class="delivery-step-row-list">
                      <li class="delivery-item is-completed">
                        <FlexGroup align="start">
                          <div class="flex-left">
                            <div class="stext">
                              고객수령 완료 되었습니다.
                            </div>
                            <span class="date">2024.06.25 15:34</span>
                            <span class="sub-status">세븐일레븐 부산본점</span>
                          </div>
                          <div class="flex-right">
                            <span class="status">배송완료</span>
                          </div>
                        </FlexGroup>
                      </li>
                      <li class="delivery-item">
                        <FlexGroup align="start">
                          <div class="flex-left">
                            <div class="stext">
                              점포 도착 하였습니다.
                            </div>
                            <span class="date">2024.06.24 23:58</span>
                            <span class="sub-status">세븐일레븐 부산본점</span>
                          </div>
                          <div class="flex-right">
                            <span class="status">배송중</span>
                          </div>
                        </FlexGroup>
                      </li>
                      <li class="delivery-item">
                        <FlexGroup align="start">
                          <div class="flex-left">
                            <div class="stext">
                              점포로 출고 되었습니다.
                            </div>
                            <span class="date">2024.06.23 09:22</span>
                            <span class="sub-status">세븐일레븐 부산본점</span>
                          </div>
                          <div class="flex-right">
                            <span class="status">배송시작</span>
                          </div>
                        </FlexGroup>
                      </li>
                      <li class="delivery-item">
                        <FlexGroup align="start">
                          <div class="flex-left">
                            <div class="stext">
                              배송센터 입고 되었습니다.
                            </div>
                            <span class="date">2024.06.24 15:34</span>
                            <span class="sub-status">부산 저온센터</span>
                          </div>
                          <div class="flex-right">
                            <span class="status">배송시작</span>
                          </div>
                        </FlexGroup>
                      </li>
                      <li class="delivery-item">
                        <FlexGroup align="start">
                          <div class="flex-left">
                            <div class="stext">
                              배송센터 입고 되었습니다.
                            </div>
                            <span class="date">2024.06.24 15:34</span>
                            <span class="sub-status">부산 저온센터</span>
                          </div>
                          <div class="flex-right">
                            <span class="status">배송시작</span>
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
                  <div class="ctitle-sub-lg">
                    <badge-group>
                      <EBadge color="gray" size="md" badge-text="일반택배" />
                    </badge-group>
                  </div>
                  <div class="ctitle-sm">
                    김치 한박스
                  </div>
                </CtitleWrap>
                <TableWrap type="info" size="xs" table-name="배송정보">
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
                <li class="delivery-item">
                  <span class="status">접수완료</span>
                  <span class="sub-status">점포입고</span>
                </li>
                <li class="delivery-item is-active">
                  <span class="status">배송시작</span>
                  <span class="sub-status">집하완료</span>
                </li>
                <li class="delivery-item">
                  <span class="status">배송중</span>
                  <span class="sub-status">배송중</span>
                </li>
                <li class="delivery-item">
                  <span class="status">배송완료</span>
                  <span class="sub-status">배송완료</span>
                </li>
              </ul>
              <FoldOverflowBox>
                <ColorBox color="light-gray">
                  <div class="scroll-box">
                    <ul class="delivery-step-row-list">
                      <li class="delivery-item is-completed">
                        <FlexGroup align="start">
                          <div class="flex-left">
                            <div class="stext">
                              고객수령 완료 되었습니다.
                            </div>
                            <span class="date">2024.06.25 15:34</span>
                            <span class="sub-status">세븐일레븐 부산본점</span>
                          </div>
                          <div class="flex-right">
                            <span class="status">배송완료</span>
                          </div>
                        </FlexGroup>
                      </li>
                      <li class="delivery-item">
                        <FlexGroup align="start">
                          <div class="flex-left">
                            <div class="stext">
                              점포 도착 하였습니다.
                            </div>
                            <span class="date">2024.06.24 23:58</span>
                            <span class="sub-status">세븐일레븐 부산본점</span>
                          </div>
                          <div class="flex-right">
                            <span class="status">배송중</span>
                          </div>
                        </FlexGroup>
                      </li>
                      <li class="delivery-item">
                        <FlexGroup align="start">
                          <div class="flex-left">
                            <div class="stext">
                              점포로 출고 되었습니다.
                            </div>
                            <span class="date">2024.06.23 09:22</span>
                            <span class="sub-status">세븐일레븐 부산본점</span>
                          </div>
                          <div class="flex-right">
                            <span class="status">배송시작</span>
                          </div>
                        </FlexGroup>
                      </li>
                      <li class="delivery-item">
                        <FlexGroup align="start">
                          <div class="flex-left">
                            <div class="stext">
                              배송센터 입고 되었습니다.
                            </div>
                            <span class="date">2024.06.24 15:34</span>
                            <span class="sub-status">부산 저온센터</span>
                          </div>
                          <div class="flex-right">
                            <span class="status">배송시작</span>
                          </div>
                        </FlexGroup>
                      </li>
                      <li class="delivery-item">
                        <FlexGroup align="start">
                          <div class="flex-left">
                            <div class="stext">
                              배송센터 입고 되었습니다.
                            </div>
                            <span class="date">2024.06.24 15:34</span>
                            <span class="sub-status">부산 저온센터</span>
                          </div>
                          <div class="flex-right">
                            <span class="status">배송시작</span>
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
                  <div class="ctitle-sub-lg">
                    <badge-group>
                      <EBadge color="gray" size="md" badge-text="일반택배" />
                    </badge-group>
                  </div>
                  <div class="ctitle-sm">
                    배추 한박스
                  </div>
                </CtitleWrap>
                <TableWrap type="info" size="xs" table-name="배송정보">
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
                <li class="delivery-item">
                  <span class="status">접수완료</span>
                  <span class="sub-status">점포입고</span>
                </li>
                <li class="delivery-item">
                  <span class="status">배송시작</span>
                  <span class="sub-status">집하완료</span>
                </li>
                <li class="delivery-item is-active">
                  <span class="status">배송중</span>
                  <span class="sub-status">배송중</span>
                </li>
                <li class="delivery-item">
                  <span class="status">배송완료</span>
                  <span class="sub-status">배송완료</span>
                </li>
              </ul>
              <FoldOverflowBox>
                <ColorBox color="light-gray">
                  <div class="scroll-box">
                    <ul class="delivery-step-row-list">
                      <li class="delivery-item is-completed">
                        <FlexGroup align="start">
                          <div class="flex-left">
                            <div class="stext">
                              고객수령 완료 되었습니다.
                            </div>
                            <span class="date">2024.06.25 15:34</span>
                            <span class="sub-status">세븐일레븐 부산본점</span>
                          </div>
                          <div class="flex-right">
                            <span class="status">배송완료</span>
                          </div>
                        </FlexGroup>
                      </li>
                      <li class="delivery-item">
                        <FlexGroup align="start">
                          <div class="flex-left">
                            <div class="stext">
                              점포 도착 하였습니다.
                            </div>
                            <span class="date">2024.06.24 23:58</span>
                            <span class="sub-status">세븐일레븐 부산본점</span>
                          </div>
                          <div class="flex-right">
                            <span class="status">배송중</span>
                          </div>
                        </FlexGroup>
                      </li>
                      <li class="delivery-item">
                        <FlexGroup align="start">
                          <div class="flex-left">
                            <div class="stext">
                              점포로 출고 되었습니다.
                            </div>
                            <span class="date">2024.06.23 09:22</span>
                            <span class="sub-status">세븐일레븐 부산본점</span>
                          </div>
                          <div class="flex-right">
                            <span class="status">배송시작</span>
                          </div>
                        </FlexGroup>
                      </li>
                      <li class="delivery-item">
                        <FlexGroup align="start">
                          <div class="flex-left">
                            <div class="stext">
                              배송센터 입고 되었습니다.
                            </div>
                            <span class="date">2024.06.24 15:34</span>
                            <span class="sub-status">부산 저온센터</span>
                          </div>
                          <div class="flex-right">
                            <span class="status">배송시작</span>
                          </div>
                        </FlexGroup>
                      </li>
                      <li class="delivery-item">
                        <FlexGroup align="start">
                          <div class="flex-left">
                            <div class="stext">
                              배송센터 입고 되었습니다.
                            </div>
                            <span class="date">2024.06.24 15:34</span>
                            <span class="sub-status">부산 저온센터</span>
                          </div>
                          <div class="flex-right">
                            <span class="status">배송시작</span>
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
                  <div class="ctitle-sub-lg">
                    <badge-group>
                      <EBadge color="gray" size="md" badge-text="일반택배" />
                      <EBadge color="light-gray" size="md" badge-text="반송" />
                    </badge-group>
                  </div>
                  <div class="ctitle-sm">
                    배추 한박스
                  </div>
                </CtitleWrap>
                <TableWrap type="info" size="xs" table-name="배송정보">
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
                <li class="delivery-item">
                  <span class="status">접수완료</span>
                  <span class="sub-status">점포입고</span>
                </li>
                <li class="delivery-item">
                  <span class="status">배송시작</span>
                  <span class="sub-status">집하완료</span>
                </li>
                <li class="delivery-item">
                  <span class="status">배송중</span>
                  <span class="sub-status">배송중</span>
                </li>
                <li class="delivery-item is-active">
                  <span class="status">배송완료</span>
                  <span class="sub-status">배송완료</span>
                </li>
              </ul>
              <FoldOverflowBox>
                <ColorBox color="light-gray">
                  <div class="scroll-box">
                    <ul class="delivery-step-row-list">
                      <li class="delivery-item is-incomplete">
                        <FlexGroup align="start">
                          <div class="flex-left">
                            <div class="stext">
                              반송되었습니다.
                            </div>
                            <span class="date">2024.06.25 15:34</span>
                            <span class="sub-status">세븐일레븐 부산본점</span>
                          </div>
                          <div class="flex-right">
                            <span class="status">반송</span>
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
      </ContBox>
      <!-- // 데이터가 있는 경우 -->

      <!-- 데이터가 없는 경우  -->
      <ContBox v-if="isNoData" size="zero">
        <InfoGuideWrap
          type="no-data"
          name="temp"
          sub-desc="배송조회 내역이 없습니다."
        />
      </ContBox>
      <!-- // 데이터가 없는 경우  -->
    </ContWrap>
  </DeliveryHomeTab>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'no-docker',
  title: '택배',
  hideRightHeader: ['home'],
});
const isData = ref(true);
const isNoData = ref(true);
</script>

<style lang="scss" scoped>
@import url("assets/css/pages/delivery/delivery.scss");
</style>
