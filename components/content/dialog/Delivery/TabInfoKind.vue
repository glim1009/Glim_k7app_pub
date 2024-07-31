<template>
  <TabWrap  fir-active="tab1">
    <template #tabs="{ activeTab, setActiveTab }">
      <SwiperAutoWrap>
        <swiper-slide class="tab-item">
          <button type="button" class="tab-link"
                  :class="{ 'is-active': activeTab === 'tab1' }"
                  @click="setActiveTab('tab1')">
            <span class="tab-text">이용안내</span>
          </button>
        </swiper-slide>
        <swiper-slide class="tab-item">
          <button type="button" class="tab-link"
                  :class="{ 'is-active': activeTab === 'tab2' }"
                  @click="setActiveTab('tab2')">
            <span class="tab-text">운임안내</span>
          </button>
        </swiper-slide>
        <swiper-slide class="tab-item">
          <button type="button" class="tab-link"
                  :class="{ 'is-active': activeTab === 'tab3' }"
                  @click="setActiveTab('tab3')">
            <span class="tab-text">배송과정</span>
          </button>
        </swiper-slide>
      </SwiperAutoWrap>
    </template>
    <template #default="{ activeTab }">
      <ContWrap type="white" in-top="lg" v-if="activeTab === 'tab1'">
        <div style="height: 100dvh; background: #D9DCE1; color: white; font-weight: 600; padding: 20px;">TBD</div>
      </ContWrap>
      <ContWrap type="white" in-top="lg" v-if="activeTab === 'tab2'">
        <ContBox>
          <CtitleWrap>
            <div class="ctitle">접수 기준 및 배송비 안내</div>
          </CtitleWrap>
          <RowListWrap gap="lg">
            <li class="item">
              <TableWrap type="row" table-name="접수 기준">
                <colgroup>
                  <col style="width: 85px;" />
                  <col style="width: auto;" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>무게</th>
                    <td>20kg 이하</td>
                  </tr>
                  <tr>
                    <th class="va-top">규격</th>
                    <td>가로,세로,높이 합 160cm 이하(최장변 120cm 이하), 가액 100만원 이하(50~100만원 할증 50%)</td>
                  </tr>
                </tbody>
              </TableWrap>
            </li>
            <li class="item">
              <TableWrap type="row" table-name="배송비 안내">
                <colgroup>
                  <col style="width: 85px;" />
                  <col style="width: auto;" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="row" colspan="2">운임안내</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>기본운임</th>
                    <td class="ta-right">
                      <EGoods type="origin" val="2,200" unit="원"/>
                      <EGoods val="2,000" unit="원"/>
                    </td>
                  </tr>
                </tbody>
              </TableWrap>
              <p class="dot-text-sm">해당 운임은 프로모션이 적용된 할인 운임으로 사전 고지없이 변경 될 수 있습니다.</p>
            </li>
          </RowListWrap>
        </ContBox>
        <ContBox size="lg">
          <CtitleWrap>
            <div class="ctitle">할증운임 및 배상한도</div>
          </CtitleWrap>
          <TableWrap type="col" table-name="할증운임 및 배상한도">
            <colgroup>
              <col style="width: 56%;" />
              <col style="width: auto;" />
              <col style="width: auto;" />
            </colgroup>
            <thead>
            <tr>
              <th scope="col">중량물</th>
              <th scope="col">할증률</th>
              <th scope="col">배상한도</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>50만원 초과 ~ 100만원 초과</td>
              <td>50%</td>
              <td>100만원</td>
            </tr>
            <tr>
              <td>100만원 초과 고가물품</td>
              <td colspan="2">미취급</td>
            </tr>
            </tbody>
          </TableWrap>
        </ContBox>
      </ContWrap>
      <ContWrap type="white" in-top="lg" v-if="activeTab === 'tab3'">
        <div style="height: 100dvh; background: #D9DCE1; color: white; font-weight: 600; padding: 20px;">TBD</div>
      </ContWrap>
    </template>
  </TabWrap>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>
