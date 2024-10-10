<template>
  <DeliveryHomeTab>
    <ContWrap>
      <div class="list-header">
        <FlexGroup align="center">
          <div class="flex-left">
            <div class="goods-group">
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
            <!-- DESC :: 활성화시 is-active 클래스 추가 -->
            <button type="button" class="btn-filter is-active" @click="openDeliveryFilterOption">
              <EIco name="filter" color="gray" size="xs" />
              <span class="offscreen">필터옵션</span>
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
                  <col style="width: 55px;">
                  <col style="width: auto;">
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
            <div class="step-list-wrap">
              <ul class="step-col-list">
                <li class="step-item">
                  <span class="status">접수완료</span>
                  <span class="sub-status">점포입고</span>
                </li>
                <li class="step-item">
                  <span class="status">배송시작</span>
                  <span class="sub-status">집하완료</span>
                </li>
                <li class="step-item">
                  <span class="status">배송중</span>
                  <span class="sub-status">배송중</span>
                </li>
                <li class="step-item">
                  <span class="status">배송완료</span>
                  <span class="sub-status">배송완료</span>
                </li>
              </ul>
            </div>
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
              <BadgeGroup size="xl">
                <EBadge color="gray" size="md" badge-text="일반택배" />
                <EBadge color="light-gray" size="md" badge-text="취소" />
              </BadgeGroup>
              <CtitleWrap size="sm">
                <ETit text="의류 청바지" type="box" />
              </CtitleWrap>
              <TableWrap type="info" gap="sm" size="md" table-name="배송정보">
                <colgroup>
                  <col style="width: 55px;">
                  <col style="width: auto;">
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
            <div class="step-list-wrap">
              <ul class="step-col-list">
                <li class="step-item">
                  <span class="status">접수완료</span>
                  <span class="sub-status">점포입고</span>
                </li>
                <li class="step-item">
                  <span class="status">배송시작</span>
                  <span class="sub-status">집하완료</span>
                </li>
                <li class="step-item">
                  <span class="status">배송중</span>
                  <span class="sub-status">배송중</span>
                </li>
                <li class="step-item">
                  <span class="status">배송완료</span>
                  <span class="sub-status">배송완료</span>
                </li>
              </ul>
            </div>
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
              <BadgeGroup size="xl">
                <EBadge color="gray" size="md" badge-text="일반택배" />
                <EBadge color="light-gray" size="md" badge-text="취소" />
              </BadgeGroup>
              <CtitleWrap size="sm">
                <ETit text="의류 청바지" type="box" />
              </CtitleWrap>
              <TableWrap type="info" gap="sm" size="md" table-name="배송정보">
                <colgroup>
                  <col style="width: 55px;">
                  <col style="width: auto;">
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
            <div class="step-list-wrap">
              <ul class="step-col-list">
                <li class="step-item">
                  <span class="status">접수완료</span>
                  <span class="sub-status">점포입고</span>
                </li>
                <li class="step-item">
                  <span class="status">배송시작</span>
                  <span class="sub-status">집하완료</span>
                </li>
                <li class="step-item">
                  <span class="status">배송중</span>
                  <span class="sub-status">배송중</span>
                </li>
                <li class="step-item">
                  <span class="status">배송완료</span>
                  <span class="sub-status">배송완료</span>
                </li>
              </ul>
            </div>
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
              <BadgeGroup size="xl">
                <EBadge color="green" size="md" badge-text="착한택배" />
              </BadgeGroup>
              <CtitleWrap size="sm">
                <ETit text="의류 청바지" type="box" />
              </CtitleWrap>
              <TableWrap type="info" gap="sm" size="md" table-name="배송정보">
                <colgroup>
                  <col style="width: 55px;">
                  <col style="width: auto;">
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
            <div class="step-list-wrap">
              <ul class="step-col-list">
                <li class="step-item">
                  <span class="status">접수완료</span>
                  <span class="sub-status">점포입고</span>
                </li>
                <li class="step-item">
                  <span class="status">배송시작</span>
                  <span class="sub-status">집하완료</span>
                </li>
                <li class="step-item">
                  <span class="status">배송중</span>
                  <span class="sub-status">배송중</span>
                </li>
                <li class="step-item">
                  <span class="status">배송완료</span>
                  <span class="sub-status">배송완료</span>
                </li>
              </ul>
            </div>
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
              <BadgeGroup size="xl">
                <EBadge color="gray" size="md" badge-text="일반택배" />
              </BadgeGroup>
              <CtitleWrap size="sm">
                <ETit text="의류 청바지" type="box" />
              </CtitleWrap>
              <TableWrap type="info" gap="sm" size="md" table-name="배송정보">
                <colgroup>
                  <col style="width: 55px;">
                  <col style="width: auto;">
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
            <div class="step-list-wrap">
              <ul class="step-col-list">
                <li class="step-item">
                  <span class="status">접수완료</span>
                  <span class="sub-status">점포입고</span>
                </li>
                <li class="step-item is-active">
                  <span class="status">배송시작</span>
                  <span class="sub-status">집하완료</span>
                </li>
                <li class="step-item">
                  <span class="status">배송중</span>
                  <span class="sub-status">배송중</span>
                </li>
                <li class="step-item">
                  <span class="status">배송완료</span>
                  <span class="sub-status">배송완료</span>
                </li>
              </ul>
            </div>
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
              <BadgeGroup size="xl">
                <EBadge color="gray" size="md" badge-text="일반택배" />
              </BadgeGroup>
              <CtitleWrap size="sm">
                <ETit text="의류 청바지" type="box" />
              </CtitleWrap>
              <TableWrap type="info" gap="sm" size="md" table-name="배송정보">
                <colgroup>
                  <col style="width: 55px;">
                  <col style="width: auto;">
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
            <div class="step-list-wrap">
              <ul class="step-col-list">
                <li class="step-item">
                  <span class="status">접수완료</span>
                  <span class="sub-status">점포입고</span>
                </li>
                <li class="step-item">
                  <span class="status">배송시작</span>
                  <span class="sub-status">집하완료</span>
                </li>
                <li class="step-item is-active">
                  <span class="status">배송중</span>
                  <span class="sub-status">배송중</span>
                </li>
                <li class="step-item">
                  <span class="status">배송완료</span>
                  <span class="sub-status">배송완료</span>
                </li>
              </ul>
            </div>
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
              <BadgeGroup size="xl">
                <EBadge color="gray" size="md" badge-text="일반택배" />
                <EBadge color="light-gray" size="md" badge-text="반송" />
              </BadgeGroup>
              <CtitleWrap size="sm">
                <ETit text="의류 청바지" type="box" />
              </CtitleWrap>
              <TableWrap type="info" gap="sm" size="md" table-name="배송정보">
                <colgroup>
                  <col style="width: 55px;">
                  <col style="width: auto;">
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
            <div class="step-list-wrap">
              <ul class="step-col-list">
                <li class="step-item">
                  <span class="status">접수완료</span>
                  <span class="sub-status">점포입고</span>
                </li>
                <li class="step-item">
                  <span class="status">배송시작</span>
                  <span class="sub-status">집하완료</span>
                </li>
                <li class="step-item">
                  <span class="status">배송중</span>
                  <span class="sub-status">배송중</span>
                </li>
                <li class="step-item is-active">
                  <span class="status">배송완료</span>
                  <span class="sub-status">배송완료</span>
                </li>
              </ul>
            </div>
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
        name="history"
        desc="배송조회 내역이 없습니다."
      />
      <!-- // 데이터가 없는 경우  -->
    </ContWrap>
  </DeliveryHomeTab>

  <!-- pop : 택배 - 필터 옵션 -->
  <PopCommFilterOption v-model:sta="popDeliveryFilterOption">
    <!-- 필터옵션목록 -->
    <template #option>
      <li class="item-xl">
        <div class="form-field">
          <div class="form-cont">
            <UiColGroup gap="sm">
              <span class="ui-rdo-button">
                <input id="filterProdType01" type="radio" name="filterStatus01">
                <label for="filterProdType01"><span class="text-sm">전체</span></label>
              </span>
              <span class="ui-rdo-button">
                <input id="filterProdType02" type="radio" name="filterStatus01">
                <label for="filterProdType02"><span class="text-sm">사용가능</span></label>
              </span>
              <span class="ui-rdo-button">
                <input id="filterProdType03" type="radio" name="filterStatus01">
                <label for="filterProdType03"><span class="text-sm">사용완료</span></label>
              </span>
              <span class="ui-rdo-button">
                <input id="filterProdType04" type="radio" name="filterStatus01">
                <label for="filterProdType04"><span class="text-sm">기간만료</span></label>
              </span>
            </UiColGroup>
          </div>
        </div>
      </li>
      <li class="item-xl">
        <div class="form-field">
          <div class="form-title">
            <ETit text="조회기간" type="cont" />
          </div>
          <div class="form-cont">
            <UiColGroup gap="sm">
              <span class="ui-rdo-button">
                <input id="filterOptionDate01" v-model="periodPicked" value="periodDate01" type="radio">
                <label for="filterOptionDate01"><span class="text-sm">최근3개월</span></label>
              </span>
              <span class="ui-rdo-button">
                <input id="filterOptionDate02" v-model="periodPicked" value="periodDate02" type="radio">
                <label for="filterOptionDate02"><span class="text-sm">6개월</span></label>
              </span>
              <span class="ui-rdo-button">
                <input id="filterOptionDate03" v-model="periodPicked" value="periodDate03" type="radio">
                <label for="filterOptionDate03"><span class="text-sm">1년</span></label>
              </span>
              <span class="ui-rdo-button">
                <input id="filterOptionDate04" v-model="periodPicked" value="periodDateInput" type="radio">
                <label for="filterOptionDate04"><span class="text-sm">직접입력</span></label>
              </span>
            </UiColGroup>
            <FlexGroup>
              <div class="flex-left">
                <EDatePicker :disabled="isDateInputDisabled" placeholder="시작일" />
              </div>
              <span class="gap">~</span>
              <div class="flex-right">
                <EDatePicker :disabled="isDateInputDisabled" placeholder="종료일" />
              </div>
            </FlexGroup>
          </div>
        </div>
      </li>
    </template>
    <!-- // 필터옵션목록 -->
    <template #footer>
      <div class="dialog-btn-auto-wrap">
        <EBtn color="line-light-gray" size="lg">
          <span class="text">초기화</span>
        </EBtn>
        <EBtn color="green" size="lg" @click="popDeliveryFilterOption.open = false">
          <span class="text">적용</span>
        </EBtn>
      </div>
    </template>
  </PopCommFilterOption>
  <!-- // pop : 택배 - 필터 옵션 -->
</template>

<script setup lang="ts">
definePageMeta({
  title: "택배",
  hideRightHeader: ["home"],
});
const isData = ref(true);
const isNoData = ref(true);

// 상품필터옵션 팝업
const popDeliveryFilterOption = ref({ open: false });
const openDeliveryFilterOption = () => popDeliveryFilterOption.value.open = true;

// 기간 날짜 조회
const periodPicked = ref();
const isDateInputDisabled = ref<boolean>(true);

watch(periodPicked, (value) => {
  isDateInputDisabled.value = value !== "periodDateInput";
});
</script>

<style lang="scss" scoped>
@import url("assets/css/pages/delivery.scss");
</style>
