<template>
  <TabWrap fir-active="tab4" class="justify-tab" @tab-change="tabChangeCheck">
    <template #tabs="{ activeTab, setActiveTab }">
      <ul class="tab-list">
        <li class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'tab4' }"
            @click="setActiveTab('tab4')"
          >
            <span class="tab-text">이용안내</span>
          </button>
        </li>
        <li class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'tab5' }"
            @click="setActiveTab('tab5')"
          >
            <span class="tab-text">운임안내</span>
          </button>
        </li>
        <li class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'tab6' }"
            @click="setActiveTab('tab6')"
          >
            <span class="tab-text">배송과정</span>
          </button>
        </li>
      </ul>
    </template>
    <template #default="{ activeTab }">
      <ContWrap v-if="activeTab === 'tab4'" type="white" in-top="lg">
        <ContBox>
          <CtitleWrap>
            <ETit type="lgCont" text="세븐일레븐 택배 접수 안내" class="fw-bold" />
          </CtitleWrap>
          <RowListWrap gap="2xl" size="lg">
            <li class="item">
              <BadgeGroup size="lg">
                <EBadge color="green" badge-text="STEP 1" />
              </BadgeGroup>
              <CtitleWrap>
                <ETit type="cont" text="세븐 앱에서 택배를 예약해 주세요." />
              </CtitleWrap>
              <div class="thumb-box">
                <img src="/assets/images/delivery/delivery_step_guide_01.png" alt="착한택배 접수 안내 흐름도 이미지">
              </div>
            </li>
            <li class="item">
              <BadgeGroup size="lg">
                <EBadge color="green" badge-text="STEP 2" />
              </BadgeGroup>
              <CtitleWrap>
                <ETit type="cont" text="택배접수가 가능한 세븐일레븐 매장에 방문해주세요." />
              </CtitleWrap>
              <div class="thumb-box">
                <img src="/assets/images/delivery/delivery_step_guide_02.png" alt="착한택배 접수 안내 흐름도 이미지">
              </div>
              <RowListWrap size="xs" gap="md">
                <li class="item">
                  <ColorBox color="line-light-gray" size="lg">
                    <CtitleWrap>
                      <div class="ctitle-sm">
                        매장에 김펭구 무인택배기가 있을 경우
                      </div>
                      <div class="stext">
                        김펭구 택배기 사전접수 버튼 선택 후 예약 내역 바코드 스캔을 해주세요.
                      </div>
                    </CtitleWrap>
                  </ColorBox>
                </li>
                <li class="item">
                  <ColorBox color="line-light-gray" size="lg">
                    <SContLineBox>
                      <CtitleWrap>
                        <div class="ctitle-sm">
                          매장에 김펭구 무인택배기가 없을 경우
                        </div>
                        <div class="stext">
                          카운터에 택배물품을 전달해주시고, 매장 근무자에게 예약내역 바코드를 보여주세요.
                        </div>
                      </CtitleWrap>
                    </SContLineBox>
                    <SContLineBox>
                      <RowListWrap gap="sm">
                        <li class="dot-text">
                          점포에 운송장출력기(김펭구, 소형출력기)가 없을 경우 택배접수 (택배박스 부착용) 영수증을 반드시 택배물품에 부착 후 보관해주세요. 운송장 번호가 적혀 있어 운송장 스티커를 대신해요.
                        </li>
                        <li class="dot-text">
                          수거거부 시 1688-1211로 수거 요청 해주세요.
                        </li>
                      </RowListWrap>
                    </SContLineBox>
                  </ColorBox>
                </li>
              </RowListWrap>
            </li>
            <li class="item">
              <BadgeGroup size="lg">
                <EBadge color="green" badge-text="STEP 3" />
              </BadgeGroup>
              <CtitleWrap>
                <ETit type="cont" text="입력한 정보 확인 후 운송장을 출력해주세요." />
              </CtitleWrap>
              <div class="thumb-box">
                <img src="/assets/images/delivery/delivery_step_guide_03.png" alt="착한택배 접수 안내 흐름도 이미지">
              </div>
            </li>
            <li class="item">
              <BadgeGroup size="lg">
                <EBadge color="green" badge-text="STEP 4" />
              </BadgeGroup>
              <CtitleWrap>
                <ETit type="cont" text="좌측면 운송장을 택배물품에 부착해주세요." />
              </CtitleWrap>
              <div class="thumb-box">
                <img src="/assets/images/delivery/delivery_step_guide_04.png" alt="착한택배 접수 안내 흐름도 이미지">
              </div>
            </li>
            <li class="item">
              <BadgeGroup size="lg">
                <EBadge color="green" badge-text="STEP 5" />
              </BadgeGroup>
              <CtitleWrap>
                <ETit type="cont" text="택배물품과 우측면 운송장을 카운터에 전달해주세요." />
              </CtitleWrap>
              <div class="thumb-box">
                <img src="/assets/images/delivery/delivery_step_guide_05.png" alt="착한택배 접수 안내 흐름도 이미지">
              </div>
            </li>
            <li class="item">
              <BadgeGroup size="lg">
                <EBadge color="green" badge-text="STEP 6" />
              </BadgeGroup>
              <CtitleWrap>
                <ETit type="cont" text="매장에 택배접수가 완료되면 세븐일레븐 앱에서 배송조회를 하실 수 있어요." />
              </CtitleWrap>
              <div class="thumb-box">
                <img src="/assets/images/delivery/delivery_step_guide_06.png" alt="착한택배 접수 안내 흐름도 이미지">
              </div>
              <BtnWrap type="full" size="md">
                <EBtn tag="a" color="line-light-gray" size="md" to="/delivery/search">
                  <span class="text">배송조회 바로가기</span>
                </EBtn>
              </BtnWrap>
            </li>
          </RowListWrap>
        </ContBox>
      </ContWrap>
      <ContWrap v-if="activeTab === 'tab5'" type="white" in-top="lg">
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
                    <!-- 배송비 할인가 case -->
                    <EGoods type="origin" val="2,200" unit="원" />
                    <EGoods val="2,000" unit="원" />
                    <!-- // 배송비 할인가 case -->
                    <!-- 배송비 정상가 case -->
                    <!-- <EGoods val="2,000" unit="원" /> -->
                    <!-- // 배송비 정상가 case -->
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
      <ContWrap v-if="activeTab === 'tab6'">
        <ContBox>
          <div class="delivery-process-wrap">
            <div class="delivery-process-header">
              <img src="/assets/images/delivery/delivery_process_divide.png" alt="착한택배 배송 절차 안내 구분 이미지">
            </div>
            <div class="delivery-process-body">
              <img src="/assets/images/delivery/delivery_process_flow_kind.png" alt="착한택배 배송 절차 안내 이미지">
              <div class="offscreen">
                <ol>
                  <li>보내는분이 세븐일레븐 매장에서 택배물품을 접수합니다.</li>
                  <li>수거요원이 접수된 택배물품을 수거합니다.</li>
                  <li>수거된 택배물품은 물류센터에 집하된 후 구간에 도착합니다.</li>
                  <li>배송요원은 택배물품의 세븐일레븐 픽업 매장까지 택배를 배송합니다.</li>
                  <li>받는분이 세븐일레븐 매장에서 택배물품을 픽업합니다.</li>
                </ol>
                <p>매장에서 접수된 택배물품의 주문정보와 물류센터에서 세븐일레븐 픽업 매장까지의 배송정보는 세븐일레븐 APP 일반택배 운영에 저장되며, 이는 보내는 분이 조회할 수 있습니다.</p>
              </div>
            </div>
          </div>
        </ContBox>
      </ContWrap>
    </template>
  </TabWrap>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "tabChange", value: string): void;
}>();
const tabChangeCheck = (value: string) => {
  emit("tabChange", value);
};
</script>

<style lang="scss" scoped>

</style>
