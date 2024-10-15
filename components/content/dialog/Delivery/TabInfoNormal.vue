<template>
  <TabWrap fir-active="tab1" class="justify-tab" @tab-change="tabChangeCheck">
    <template #tabs="{ activeTab, setActiveTab }">
      <ul class="tab-list">
        <li class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'tab1' }"
            @click="setActiveTab('tab1')"
          >
            <span class="tab-text">이용안내</span>
          </button>
        </li>
        <li class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'tab2' }"
            @click="setActiveTab('tab2')"
          >
            <span class="tab-text">운임안내</span>
          </button>
        </li>
        <li class="tab-item">
          <button
            type="button" class="tab-link"
            :class="{ 'is-active': activeTab === 'tab3' }"
            @click="setActiveTab('tab3')"
          >
            <span class="tab-text">배송과정</span>
          </button>
        </li>
      </ul>
    </template>
    <template #default="{ activeTab }">
      <ContWrap v-if="activeTab === 'tab1'" type="white" in-top="lg">
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
                <img src="/assets/images/delivery/delivery_step_guide_01.png" alt="일반택배 접수 안내 흐름도 이미지">
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
                <img src="/assets/images/delivery/delivery_step_guide_02.png" alt="일반택배 접수 안내 흐름도 이미지">
              </div>
              <RowListWrap size="xs" gap="md">
                <li class="item">
                  <ColorBox color="line-light-gray" size="lg">
                    <CtitleWrap size="zero">
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
                      <CtitleWrap size="zero">
                        <div class="ctitle-sm">
                          매장에 김펭구 무인 택배기가 없을 경우
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
                <img src="/assets/images/delivery/delivery_step_guide_03.png" alt="일반택배 접수 안내 흐름도 이미지">
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
                <img src="/assets/images/delivery/delivery_step_guide_04.png" alt="일반택배 접수 안내 흐름도 이미지">
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
                <img src="/assets/images/delivery/delivery_step_guide_05.png" alt="일반택배 접수 안내 흐름도 이미지">
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
                <img src="/assets/images/delivery/delivery_step_guide_06.png" alt="일반택배 접수 안내 흐름도 이미지">
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
                  20kg 이하
                </td>
              </tr>
              <tr>
                <th class="va-top">
                  규격
                </th>
                <td class="fc-gray90">
                  가로,세로,높이 합 160cm 이하(최장변 120cm 이하), 가액 100만원 이하(50~100만원 할증 50%)
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
                <th>동일권역</th>
                <td class="ta-right">
                  <div class="goods-group">
                    <!-- 배송비 할인가 case -->
                    <EGoods type="origin" val="3,500" unit="원" />
                    <EGoods val="3,200" unit="원" />
                    <!-- // 배송비 할인가 case -->
                  </div>
                </td>
              </tr>
              <tr>
                <th>타권역</th>
                <td class="ta-right">
                  <div class="goods-group">
                    <!-- 배송비 정상가 case -->
                    <EGoods val="3,700" unit="원" />
                    <!-- // 배송비 할인가 case -->
                  </div>
                </td>
              </tr>
              <tr>
                <th>제주도</th>
                <td class="ta-right">
                  <div class="goods-group">
                    <!-- 배송비 할인가 case -->
                    <EGoods type="origin" val="6,500" unit="원" />
                    <EGoods val="6,200" unit="원" />
                    <!-- // 배송비 할인가 case -->
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
          <RowListWrap size="sm" gap="sm">
            <li class="dot-text-sm">
              제주지역 +3,000원, 도서산간지역 별도운임 적용
            </li>
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
              <col style="width: 54%;">
              <col style="width: auto;">
              <col style="width: auto;">
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
      <ContWrap v-if="activeTab === 'tab3'">
        <ContBox>
          <div class="delivery-process-wrap">
            <div class="delivery-process-header">
              <img src="/assets/images/delivery/delivery_process_divide.png" alt="일반택배 배송 절차 안내 구분 이미지">
            </div>
            <div class="delivery-process-body">
              <img src="/assets/images/delivery/delivery_process_flow_normal.png" alt="일반택배 배송 절차 안내 이미지">
              <div class="offscreen">
                <ol>
                  <li>보내는분이 세븐일레븐 매장에서 택배물품을 접수합니다.</li>
                  <li>수거요원이 접수된 택배물품을 수거합니다.</li>
                  <li>수거된 택배물품은 물류센터에 집하된 후 구간에 도착합니다.</li>
                  <li>배송요원은 택배물품의 배송지까지 택배를 배송합니다.</li>
                  <li>받는분이 배송지에서 택배물품을 수령합니다.</li>
                </ol>
                <p>매장에서 접수된 택배물품의 주문정보와 물류센터에서 배송지까지의 배송정보는 세븐일레븐 APP 일반택배 운영에 저장되며, 이는 보내는 분이 조회할 수 있습니다.</p>
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
