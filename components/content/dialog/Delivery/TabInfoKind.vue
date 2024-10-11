<template>
  <TabWrap fir-active="tab1" class="justify-tab">
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
              <col style="width: 54px;">
              <col style="width: auto;">
            </colgroup>
            <tbody>
              <tr>
                <th>무게</th>
                <td class="fc-gray90">
                  5kg 이하
                </td>
              </tr>
              <tr>
                <th class="va-top">
                  규격
                </th>
                <td class="fc-gray90">
                  가로, 세로, 높이 합 80cm 이하, 물품가액 50만원 이하
                </td>
              </tr>
            </tbody>
          </TableWrap>
          <TableWrap type="row" table-name="배송비 안내">
            <colgroup>
              <col style="width: 85px;">
              <col style="width: auto;">
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
                <th>기본운임</th>
                <td class="ta-right">
                  <div class="goods-group">
                    <EGoods type="origin" val="2,200" unit="원" />
                    <EGoods val="2,000" unit="원" class="fc-red" />
                  </div>
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
