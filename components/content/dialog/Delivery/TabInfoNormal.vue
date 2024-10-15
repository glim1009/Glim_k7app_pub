<template>
  <TabWrap fir-active="tab1">
    <template #tabs="{ activeTab, setActiveTab }">
      <SwiperAutoWrap type="tab">
        <swiper-slide class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'tab1' }"
            @click="setActiveTab('tab1')"
          >
            <span class="tab-text">이용안내</span>
          </button>
        </swiper-slide>
        <swiper-slide class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'tab2' }"
            @click="setActiveTab('tab2')"
          >
            <span class="tab-text">운임안내</span>
          </button>
        </swiper-slide>
        <swiper-slide class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'tab3' }"
            @click="setActiveTab('tab3')"
          >
            <span class="tab-text">배송과정</span>
          </button>
        </swiper-slide>
      </SwiperAutoWrap>
    </template>
    <template #default="{ activeTab }">
      <ContWrap v-if="activeTab === 'tab1'" type="white" in-top="lg">
        <div style="height: 100dvh; background: #D9DCE1; color: white; font-weight: 600; padding: 20px;">
          TBD
        </div>
      </ContWrap>
      <ContWrap v-if="activeTab === 'tab2'" type="white" in-top="lg">
        <ContBox>
          <CtitleWrap>
            <ETit text="접수 기준 및 배송비 안내" type="cont" />
          </CtitleWrap>
          <TableWrap type="row" table-name="접수 기준">
            <colgroup>
              <col style="width: 54px;" />
              <col style="width: auto;" />
            </colgroup>
            <tbody>
            <tr>
              <th>무게</th>
              <td class="fc-gray90">20kg 이하</td>
            </tr>
            <tr>
              <th class="va-top">
                규격
              </th>
              <td class="fc-gray90">가로,세로,높이 합 160cm 이하(최장변 120cm 이하), 가액 100만원 이하(50~100만원 할증 50%)</td>
            </tr>
            </tbody>
          </TableWrap>
          <TableWrap type="row" table-name="배송비 안내">
            <colgroup>
              <col style="width: 85px;" />
              <col style="width: auto;" />
            </colgroup>
            <thead>
            <tr>
              <th scope="row" colspan="2">
                운임안내
              </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th>동일권역</th>
              <td class="ta-right">
                <div class="goods-group">
                  <EGoods type="origin" val="3,200" unit="원" />
                  <EGoods val="3,000" unit="원" />
                </div>
              </td>
            </tr>
            <tr>
              <th>타권역</th>
              <td class="ta-right">
                <div class="goods-group">
                  <EGoods type="origin" val="3,700" unit="원" />
                  <EGoods val="3,300" unit="원" />
                </div>
              </td>
            </tr>
            <tr>
              <th>제주도</th>
              <td class="ta-right">
                <div class="goods-group">
                  <EGoods type="origin" val="6,200" unit="원" />
                  <EGoods val="5,700" unit="원" />
                </div>
              </td>
            </tr>
            <tr>
              <th>도서산간</th>
              <td class="ta-right">
                지역별 요금 상이
              </td>
            </tr>
            </tbody>
          </TableWrap>
          <RowListWrap size="sm">
            <li class="dot-text-sm">
              해당 운임은 프로모션이 적용된 할인 운임으로 사전 고지없이 변경 될 수 있습니다.
            </li>
          </RowListWrap>
        </ContBox>
        <ContBox size="lg">
          <CtitleWrap>
            <ETit text="할증운임 및 배상한도" type="cont" />
          </CtitleWrap>
          <TableWrap type="col" table-name="할증운임 및 배상한도">
            <colgroup>
              <col style="width: 54%;" />
              <col style="width: auto;" />
              <col style="width: auto;" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">
                  중량물
                </th>
                <th scope="col">
                  할증률
                </th>
                <th scope="col">
                  배상한도
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  50만원 초과 ~ 100만원 초과
                </td>
                <td>
                  50%
                </td>
                <td>
                  100만원
                </td>
              </tr>
              <tr>
                <td>
                  100만원 초과 고가물품
                </td>
                <td colspan="2">
                  미취급
                </td>
              </tr>
            </tbody>
          </TableWrap>
        </ContBox>
      </ContWrap>
      <ContWrap v-if="activeTab === 'tab3'" type="white" in-top="lg">
        <div style="height: 100dvh; background: #D9DCE1; color: white; font-weight: 600; padding: 20px;">
          TBD
        </div>
      </ContWrap>
    </template>
  </TabWrap>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>
