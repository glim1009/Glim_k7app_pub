<template>
  <DeliveryHomeTab>
    <ContWrap>
      <ContBox>
        <GridListHeader list-value="8" select-title="이용내역 정렬">
          <option selected>배송완료 순</option>
          <option>택배명 순</option>
        </GridListHeader>
      </ContBox>
      <!-- 데이터가 있는 경우 -->
      <ContBox size="sm" v-if="isData">
        <RowListWrap gap="md">
          <li class="item">
            <ColorBox color="white" size="lg">
              <div class="box-info-header">
                <CtitleWrap size="zero">
                  <div class="ctitle-sub-lg">
                    <EBadge color="gray" badge-text="일반택배"/>
                  </div>
                  <div class="ctitle">의류 청바지</div>
                </CtitleWrap>
                <TableWrap type="info" size="xs" table-name="배송정보">
                  <colgroup>
                    <col style="width: 62px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                  <tr>
                    <th scope="row">배송완료</th>
                    <td>2024.06.30. 15:00</td>
                  </tr>
                  <tr>
                    <th scope="row">송장번호</th>
                    <td>1234567890987</td>
                  </tr>
                  </tbody>
                </TableWrap>
              </div>
              <div class="box-info-cont">
                <CtitleWrap>
                  <FlexGroup align="center">
                    <div class="flex-left">
                      <div class="ctitle-xs">택배비</div>
                    </div>
                    <div class="flex-right">
                      <EGoods size="lg" class="fw-md" val="3,200" unit="원" />
                    </div>
                  </FlexGroup>
                </CtitleWrap>
                <FoldOverflowBox>
                  <ColorBox color="light-gray">
                    <RowListWrap gap="line">
                      <li class="item-gap-lg">
                        <TableWrap type="info" size="md" table-name="결제금액">
                          <colgroup>
                            <col style="width: 78px;">
                            <col style="width: auto;">
                          </colgroup>
                          <tbody>
                          <tr>
                            <th scope="row">결제금액</th>
                            <td>3,400원</td>
                          </tr>
                          <tr>
                            <th scope="row">예약일시</th>
                            <td>2024.06.15 15:32</td>
                          </tr>
                          <tr>
                            <th scope="row">물품금액</th>
                            <td>5만원</td>
                          </tr>
                          <tr>
                            <th scope="row">배송상품</th>
                            <td>의류</td>
                          </tr>
                          </tbody>
                        </TableWrap>
                      </li>
                      <li class="item-gap-lg">
                        <TableWrap type="info" size="md" table-name="보내는 분">
                          <colgroup>
                            <col style="width: 78px;">
                            <col style="width: auto;">
                          </colgroup>
                          <tbody>
                          <tr>
                            <th scope="row">보내는 분</th>
                            <td>홍*동</td>
                          </tr>
                          <tr>
                            <th scope="row">휴대폰번호</th>
                            <td>010-6548-7742</td>
                          </tr>
                          <tr>
                            <th scope="row">주소(반송처)</th>
                            <td>서울시 중구 충무로 23가길 ***<br>***동 ****호</td>
                          </tr>
                          <tr>
                            <th scope="row">접수매장</th>
                            <td>세븐일레븐 을지로점</td>
                          </tr>
                          </tbody>
                        </TableWrap>
                      </li>
                      <li class="item-gap-lg">
                        <TableWrap type="info" size="md" table-name="받는 분">
                          <colgroup>
                            <col style="width: 78px;">
                            <col style="width: auto;">
                          </colgroup>
                          <tbody>
                          <tr>
                            <th scope="row">받는 분</th>
                            <td>김*븐</td>
                          </tr>
                          <tr>
                            <th scope="row">휴대폰번호</th>
                            <td>010-1234-5678</td>
                          </tr>
                          <tr>
                            <th scope="row">주소(반송처)</th>
                            <td>서울시 중구 충무로 23가길 234<br>127동 2301호</td>
                          </tr>
                          <tr>
                            <th scope="row">수령매장</th>
                            <td>세븐일레븐 광화문점</td>
                          </tr>
                          </tbody>
                        </TableWrap>
                      </li>
                    </RowListWrap>
                  </ColorBox>
                </FoldOverflowBox>
              </div>
            </ColorBox>
          </li>
          <li class="item">
            <ColorBox color="white" size="lg">
              <div class="box-info-header">
                <CtitleWrap size="zero">
                  <div class="ctitle-sub-lg">
                    <BadgeGroup>
                      <EBadge color="gray" badge-text="일반택배" />
                      <EBadge color="light-gray" badge-text="반송" />
                    </BadgeGroup>
                  </div>
                  <div class="ctitle">의류 청바지</div>
                </CtitleWrap>
                <TableWrap type="info" size="xs" table-name="배송정보">
                  <colgroup>
                    <col style="width: 62px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                  <tr>
                    <th scope="row">배송완료</th>
                    <td>2024.06.30. 15:00</td>
                  </tr>
                  <tr>
                    <th scope="row">송장번호</th>
                    <td>1234567890987</td>
                  </tr>
                  </tbody>
                </TableWrap>
              </div>
              <div class="box-info-cont">
                <CtitleWrap>
                  <FlexGroup align="center">
                    <div class="flex-left">
                      <div class="ctitle-xs">택배비</div>
                    </div>
                    <div class="flex-right">
                      <EGoods size="lg" class="fw-md" val="3,200" unit="원" />
                    </div>
                  </FlexGroup>
                </CtitleWrap>
                <FoldOverflowBox>
                  <ColorBox color="light-gray">
                    <RowListWrap gap="line">
                      <li class="item-gap-lg">
                        <TableWrap type="info" size="md" table-name="결제금액">
                          <colgroup>
                            <col style="width: 78px;">
                            <col style="width: auto;">
                          </colgroup>
                          <tbody>
                          <tr>
                            <th scope="row">결제금액</th>
                            <td>3,400원</td>
                          </tr>
                          <tr>
                            <th scope="row">예약일시</th>
                            <td>2024.06.15 15:32</td>
                          </tr>
                          <tr>
                            <th scope="row">물품금액</th>
                            <td>5만원</td>
                          </tr>
                          <tr>
                            <th scope="row">배송상품</th>
                            <td>의류</td>
                          </tr>
                          </tbody>
                        </TableWrap>
                      </li>
                      <li class="item-gap-lg">
                        <TableWrap type="info" size="md" table-name="보내는 분">
                          <colgroup>
                            <col style="width: 78px;">
                            <col style="width: auto;">
                          </colgroup>
                          <tbody>
                          <tr>
                            <th scope="row">보내는 분</th>
                            <td>홍*동</td>
                          </tr>
                          <tr>
                            <th scope="row">휴대폰번호</th>
                            <td>010-6548-7742</td>
                          </tr>
                          <tr>
                            <th scope="row">주소(반송처)</th>
                            <td>서울시 중구 충무로 23가길 ***<br>***동 ****호</td>
                          </tr>
                          <tr>
                            <th scope="row">접수매장</th>
                            <td>세븐일레븐 을지로점</td>
                          </tr>
                          </tbody>
                        </TableWrap>
                      </li>
                      <li class="item-gap-lg">
                        <TableWrap type="info" size="md" table-name="받는 분">
                          <colgroup>
                            <col style="width: 78px;">
                            <col style="width: auto;">
                          </colgroup>
                          <tbody>
                          <tr>
                            <th scope="row">받는 분</th>
                            <td>김*븐</td>
                          </tr>
                          <tr>
                            <th scope="row">휴대폰번호</th>
                            <td>010-1234-5678</td>
                          </tr>
                          <tr>
                            <th scope="row">주소(반송처)</th>
                            <td>서울시 중구 충무로 23가길 234<br>127동 2301호</td>
                          </tr>
                          <tr>
                            <th scope="row">수령매장</th>
                            <td>세븐일레븐 광화문점</td>
                          </tr>
                          </tbody>
                        </TableWrap>
                      </li>
                    </RowListWrap>
                  </ColorBox>
                </FoldOverflowBox>
              </div>
            </ColorBox>
          </li>
          <li class="item">
            <ColorBox color="white" size="lg">
              <div class="box-info-header">
                <CtitleWrap size="zero">
                  <div class="ctitle-sub-lg">
                    <BadgeGroup>
                      <EBadge color="green" badge-text="착한택배" />
                      <EBadge color="light-gray" badge-text="매장접수취소" />
                    </BadgeGroup>
                  </div>
                  <div class="ctitle">의류 청바지</div>
                </CtitleWrap>
                <TableWrap type="info" size="xs" table-name="배송정보">
                  <colgroup>
                    <col style="width: 62px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                  <tr>
                    <th scope="row">배송완료</th>
                    <td>2024.06.30. 15:00</td>
                  </tr>
                  <tr>
                    <th scope="row">송장번호</th>
                    <td>1234567890987</td>
                  </tr>
                  </tbody>
                </TableWrap>
              </div>
              <div class="box-info-cont">
                <CtitleWrap>
                  <FlexGroup align="center">
                    <div class="flex-left">
                      <div class="ctitle-xs">택배비</div>
                    </div>
                    <div class="flex-right">
                      <EGoods size="lg" class="fw-md" val="3,200" unit="원" />
                    </div>
                  </FlexGroup>
                </CtitleWrap>
                <FoldOverflowBox>
                  <ColorBox color="light-gray">
                    <RowListWrap gap="line">
                      <li class="item-gap-lg">
                        <TableWrap type="info" size="md" table-name="결제금액">
                          <colgroup>
                            <col style="width: 78px;">
                            <col style="width: auto;">
                          </colgroup>
                          <tbody>
                          <tr>
                            <th scope="row">결제금액</th>
                            <td>3,400원</td>
                          </tr>
                          <tr>
                            <th scope="row">예약일시</th>
                            <td>2024.06.15 15:32</td>
                          </tr>
                          <tr>
                            <th scope="row">물품금액</th>
                            <td>5만원</td>
                          </tr>
                          <tr>
                            <th scope="row">배송상품</th>
                            <td>의류</td>
                          </tr>
                          </tbody>
                        </TableWrap>
                      </li>
                      <li class="item-gap-lg">
                        <TableWrap type="info" size="md" table-name="보내는 분">
                          <colgroup>
                            <col style="width: 78px;">
                            <col style="width: auto;">
                          </colgroup>
                          <tbody>
                          <tr>
                            <th scope="row">보내는 분</th>
                            <td>홍*동</td>
                          </tr>
                          <tr>
                            <th scope="row">휴대폰번호</th>
                            <td>010-6548-7742</td>
                          </tr>
                          <tr>
                            <th scope="row">주소(반송처)</th>
                            <td>서울시 중구 충무로 23가길 ***<br>***동 ****호</td>
                          </tr>
                          <tr>
                            <th scope="row">접수매장</th>
                            <td>세븐일레븐 을지로점</td>
                          </tr>
                          </tbody>
                        </TableWrap>
                      </li>
                      <li class="item-gap-lg">
                        <TableWrap type="info" size="md" table-name="받는 분">
                          <colgroup>
                            <col style="width: 78px;">
                            <col style="width: auto;">
                          </colgroup>
                          <tbody>
                          <tr>
                            <th scope="row">받는 분</th>
                            <td>김*븐</td>
                          </tr>
                          <tr>
                            <th scope="row">휴대폰번호</th>
                            <td>010-1234-5678</td>
                          </tr>
                          <tr>
                            <th scope="row">주소(반송처)</th>
                            <td>서울시 중구 충무로 23가길 234<br>127동 2301호</td>
                          </tr>
                          <tr>
                            <th scope="row">수령매장</th>
                            <td>세븐일레븐 광화문점</td>
                          </tr>
                          </tbody>
                        </TableWrap>
                      </li>
                    </RowListWrap>
                  </ColorBox>
                </FoldOverflowBox>
              </div>
            </ColorBox>
          </li>
          <li class="item">
            <ColorBox color="white" size="lg">
              <div class="box-info-header">
                <CtitleWrap size="zero">
                  <div class="ctitle-sub-lg">
                    <EBadge color="green" badge-text="착한택배" />
                  </div>
                  <div class="ctitle">의류 청바지</div>
                </CtitleWrap>
                <TableWrap type="info" size="xs" table-name="배송정보">
                  <colgroup>
                    <col style="width: 62px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tbody>
                  <tr>
                    <th scope="row">배송완료</th>
                    <td>2024.06.30. 15:00</td>
                  </tr>
                  <tr>
                    <th scope="row">송장번호</th>
                    <td>1234567890987</td>
                  </tr>
                  </tbody>
                </TableWrap>
              </div>
              <div class="box-info-cont">
                <CtitleWrap>
                  <FlexGroup align="center">
                    <div class="flex-left">
                      <div class="ctitle-xs">택배비</div>
                    </div>
                    <div class="flex-right">
                      <EGoods size="lg" class="fw-md" val="3,200" unit="원" />
                    </div>
                  </FlexGroup>
                </CtitleWrap>
                <FoldOverflowBox>
                  <ColorBox color="light-gray">
                    <RowListWrap gap="line">
                      <li class="item-gap-lg">
                        <TableWrap type="info" size="md" table-name="결제금액">
                          <colgroup>
                            <col style="width: 78px;">
                            <col style="width: auto;">
                          </colgroup>
                          <tbody>
                          <tr>
                            <th scope="row">결제금액</th>
                            <td>3,400원</td>
                          </tr>
                          <tr>
                            <th scope="row">예약일시</th>
                            <td>2024.06.15 15:32</td>
                          </tr>
                          <tr>
                            <th scope="row">물품금액</th>
                            <td>5만원</td>
                          </tr>
                          <tr>
                            <th scope="row">배송상품</th>
                            <td>의류</td>
                          </tr>
                          </tbody>
                        </TableWrap>
                      </li>
                      <li class="item-gap-lg">
                        <TableWrap type="info" size="md" table-name="보내는 분">
                          <colgroup>
                            <col style="width: 78px;">
                            <col style="width: auto;">
                          </colgroup>
                          <tbody>
                          <tr>
                            <th scope="row">보내는 분</th>
                            <td>홍*동</td>
                          </tr>
                          <tr>
                            <th scope="row">휴대폰번호</th>
                            <td>010-6548-7742</td>
                          </tr>
                          <tr>
                            <th scope="row">주소(반송처)</th>
                            <td>서울시 중구 충무로 23가길 ***<br>***동 ****호</td>
                          </tr>
                          <tr>
                            <th scope="row">접수매장</th>
                            <td>세븐일레븐 을지로점</td>
                          </tr>
                          </tbody>
                        </TableWrap>
                      </li>
                      <li class="item-gap-lg">
                        <TableWrap type="info" size="md" table-name="받는 분">
                          <colgroup>
                            <col style="width: 78px;">
                            <col style="width: auto;">
                          </colgroup>
                          <tbody>
                          <tr>
                            <th scope="row">받는 분</th>
                            <td>김*븐</td>
                          </tr>
                          <tr>
                            <th scope="row">휴대폰번호</th>
                            <td>010-1234-5678</td>
                          </tr>
                          <tr>
                            <th scope="row">주소(반송처)</th>
                            <td>서울시 중구 충무로 23가길 234<br>127동 2301호</td>
                          </tr>
                          <tr>
                            <th scope="row">수령매장</th>
                            <td>세븐일레븐 광화문점</td>
                          </tr>
                          </tbody>
                        </TableWrap>
                      </li>
                    </RowListWrap>
                  </ColorBox>
                </FoldOverflowBox>
              </div>
            </ColorBox>
          </li>
        </RowListWrap>
      </ContBox>
      <!--// 데이터가 있는 경우 -->

      <!-- 데이터가 없는 경우  -->
      <ContBox size="sm" v-if="isNoData">
        <InfoGuideWrap
          type="no-data"
          name="temp"
          sub-desc="추가된 주소지가 없습니다."
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
