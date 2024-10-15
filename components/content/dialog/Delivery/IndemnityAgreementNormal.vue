<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        일반택배 파손면책 동의
      </div>
    </template>
    <template #body>
      <ContBox class="dialog-inner">
        <ContWrap>
          <ContBox>
            <CtitleWrap size="zero">
              <ETit text="내용 확인 후 동의해주세요." type="cont" />
              <div class="stext-lg">
                유의사항 및 파손면책안내를<br />모두 읽으신 후 동의하실 수 있습니다.
              </div>
            </CtitleWrap>
          </ContBox>
          <ContBox size="lg">
            <CtitleWrap>
              <ETit text="1. 유의사항" type="cont" />
              <div class="stext-lg">
                택배예약 시 꼭 확인해주세요.
              </div>
            </CtitleWrap>
            <ColorBox color="white" size="lg">
              <RowListWrap gap="sm">
                <li class="dot-text-sm">
                  포장당 50만원 초과하는 운송물에 대하여 소정의 할증운임을 받습니다.
                </li>
                <li class="dot-text-sm">
                  포장당 100만원 초과하는 운송물은 취급하지 않습니다.
                </li>
                <li class="dot-text-sm">
                  물품가액은 배송 사고시 보상의 기준이 되며, 미기재시 최대 50만원 한도 내에서 배상해 드립니다.
                </li>
              </RowListWrap>
            </ColorBox>
          </ContBox>
          <ContBox size="lg">
            <CtitleWrap>
              <ETit text="2. 취급제한 품목" type="cont" />
            </CtitleWrap>
            <ColorBox color="white" size="lg">
              <CtitleWrap>
                <ETit text="현금화 가능 물품" type="sCont" />
                <div class="stext">
                  현금, 어음, 상품권, 수표 유가증권, 공연티켓 등 현금화 사용 가능 물품
                </div>
              </CtitleWrap>
              <CtitleWrap>
                <ETit text="변질 및 부패성 물품" type="sCont" />
                <div class="stext">
                  생선, 육류, 화훼류, 살아있는 동·식물 및 사체류, 기타 변질 및 부패가능 물품
                </div>
              </CtitleWrap>
              <CtitleWrap>
                <ETit text="파손 우려 물품" type="sCont" />
                <div class="stext">
                  그릇, 유리, 컵, 도자기 등 유리, 사기재질로 구성된 물품
                </div>
              </CtitleWrap>
              <CtitleWrap>
                <ETit text="전자제품" type="sCont" />
                <div class="stext">
                  노트북, 컴퓨터, 모니터, TV, 프린터 등
                </div>
              </CtitleWrap>
              <CtitleWrap>
                <ETit text="서신류" type="sCont" />
                <div class="stext">
                  우편법상의 제한물품<br />(예 : 편지, 긴급을 요하는 서류 화물 등)
                </div>
              </CtitleWrap>
              <CtitleWrap>
                <ETit text="재생불가 및 시한성 물품" type="sCont" />
                <div class="stext">
                  서류, 필름 등 원본재생불가 화물, 입학원서, 입사서류 등 시한 초과시 가치 상실물품
                </div>
              </CtitleWrap>
              <CtitleWrap>
                <ETit text="위험물품" type="sCont" />
                <div class="stext">
                  독극물, 농약류, 마약류, 화약류, 총포(도검류), 인화성 물질, 페인트류, 자동차 배터리
                </div>
              </CtitleWrap>
              <CtitleWrap size="zero">
                <ETit text="중량물" type="sCont" />
                <div class="stext">
                  중량 20kg 초과 (생물, 곡물류, 도서류, 이삿짐의 경우 20kg 이상) / <br />세변의합이 160cm 이상 / 한 변의 길이가 120cm를 초과하는 물품
                </div>
              </CtitleWrap>
            </ColorBox>
          </ContBox>
          <ContBox size="lg">
            <CtitleWrap>
              <ETit text="3. 할증운임 및 배상한도" type="cont" />
            </CtitleWrap>
            <ColorBox color="white" size="lg">
              <TableWrap type="col" table-name="할증운임 및 배상한도">
                <colgroup>
                  <col style="width: 56%;" />
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
                    <td class="fc-gray80">50만원 초과 ~ 100만원 초과</td>
                    <td class="fc-gray80">50%</td>
                    <td class="fc-gray80">100만원</td>
                  </tr>
                  <tr>
                    <td class="fc-gray80">100만원 초과 고가물품</td>
                    <td colspan="2" class="fc-gray80">
                      미취급
                    </td>
                  </tr>
                </tbody>
              </TableWrap>
            </ColorBox>
          </ContBox>
          <ContBox size="lg">
            <CtitleWrap>
              <ETit text="4. 무게 및 규격 안내" type="cont" />
            </CtitleWrap>
            <ColorBox color="white" size="lg">
              <TableWrap type="info" gap="md" size="md" table-name="무게 및 규격 안내">
                <colgroup>
                  <col style="width: 33px;" />
                  <col style="width: auto;" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>무게</th>
                    <td>20kg 이하</td>
                  </tr>
                  <tr>
                    <th class="va-top">
                      규격
                    </th>
                    <td>가로,세로,높이 합 160cm 이하(최장변 120cm 이하), 가액 100만원 이하(50~100만원 할증 50%)</td>
                  </tr>
                </tbody>
              </TableWrap>
            </ColorBox>
          </ContBox>
          <ContBox size="lg">
            <CtitleWrap>
              <ETit text="5. 포장상태" type="cont" />
              <div class="stext-lg">
                포장은 보내시는 분이 직접 해주셔야 하며, <span class="fw-md">포장상태가 불량</span>할 경우 물품훼손 및 이탈의 우려가 있어 <span class="fw-md">수거가 불가</span>합니다.
                <br />규격화된 박스에 물품을 안전하게 포장하여 주시기 바랍니다.
              </div>
            </CtitleWrap>
            <ColorBox color="white" size="lg">
              <CtitleWrap size="sm">
                <ETit text="*포장불량예시" type="sCont" class="fc-red" />
              </CtitleWrap>
              <GridListWrap gap="lg" col="4">
                <li class="item-grid-package">
                  <div class="thumb-box">
                    <img src="/assets/images/delivery/img_temp_package_condition_delivery.svg" alt="서류봉투 포장불량예시 이미지" />
                  </div>
                  <div class="info-box">
                    <div class="stext">
                      서류봉투
                    </div>
                  </div>
                </li>
                <li class="item-grid-package">
                  <div class="thumb-box">
                    <img src="/assets/images/delivery/img_temp_package_condition_delivery.svg" alt="마대자루 포장불량예시 이미지" />
                  </div>
                  <div class="info-box">
                    <div class="stext">
                      마대자루
                    </div>
                  </div>
                </li>
                <li class="item-grid-package">
                  <div class="thumb-box">
                    <img src="/assets/images/delivery/img_temp_package_condition_delivery.svg" alt="쇼핑백 포장불량예시 이미지" />
                  </div>
                  <div class="info-box">
                    <div class="stext">
                      쇼핑백
                    </div>
                  </div>
                </li>
                <li class="item-grid-package">
                  <div class="thumb-box">
                    <img src="/assets/images/delivery/img_temp_package_condition_delivery.svg" alt="나체품 포장불량예시 이미지" />
                  </div>
                  <div class="info-box">
                    <div class="stext">
                      나체품
                    </div>
                  </div>
                </li>
                <li class="item-grid-package">
                  <div class="thumb-box">
                    <img src="/assets/images/delivery/img_temp_package_condition_delivery.svg" alt="비닐포장 포장불량예시 이미지" />
                  </div>
                  <div class="info-box">
                    <div class="stext">
                      비닐포장
                    </div>
                  </div>
                </li>
                <li class="item-grid-package">
                  <div class="thumb-box">
                    <img src="/assets/images/delivery/img_temp_package_condition_delivery.svg" alt="결박화 포장불량예시 이미지" />
                  </div>
                  <div class="info-box">
                    <div class="stext">
                      결박화
                    </div>
                  </div>
                </li>
                <li class="item-grid-package">
                  <div class="thumb-box">
                    <img src="/assets/images/delivery/img_temp_package_condition_delivery.svg" alt="이형화물 포장불량예시 이미지" />
                  </div>
                  <div class="info-box">
                    <div class="stext">
                      이형화물
                    </div>
                  </div>
                </li>
              </GridListWrap>
            </ColorBox>
          </ContBox>
          <ContBox size="lg">
            <CtitleWrap>
              <ETit text="6. 품목별 접수 안내" type="cont" />
            </CtitleWrap>
            <ColorBox color="white" size="lg">
              <ContBox>
                <CtitleWrap size="sm">
                  <ETit text="전자제품류" type="sCont" />
                </CtitleWrap>
                <RowListWrap gap="sm">
                  <li class="dot-text-sm">
                    새제품 포장상태 혹은 에어패드/ 스티로폼 완충포장 건에 한해 접수 가능
                  </li>
                  <li class="dot-text-sm">
                    컴퓨터의 경우 모니터 받침대 분리, PC본체와 모니터 박스 분리 건에 한해 접수 가능
                  </li>
                </RowListWrap>
              </ContBox>
              <ContBox size="sm">
                <CtitleWrap size="sm">
                  <ETit text="냉동/냉장식품류" type="sCont" />
                </CtitleWrap>
                <RowListWrap gap="sm">
                  <li class="dot-text-sm">
                    비닐 포장 후 Ice Box 포장
                  </li>
                  <li class="dot-text-sm">
                    하절기 접수시 냉매(얼음,드라이아이스 등)와 함께 포장
                  </li>
                  <li class="dot-text-sm">
                    스트로폼 박스 포장시 외관에 매직으로 주소 및 운송장번호 기재 필요
                  </li>
                </RowListWrap>
              </ContBox>
              <ContBox size="sm">
                <CtitleWrap size="sm">
                  <ETit text="김치류" type="sCont" />
                </CtitleWrap>
                <RowListWrap gap="sm">
                  <li class="dot-text-sm">
                    접수 시 필히 “김치전용 비닐포장”으로 내포장
                    <br />(김치는 발효식품으로 자체적 발효 가스 발생으로 인한 다른 화물 오염 우려가 있어 내포장 후 (아이스박스)포장 필수)
                  </li>
                  <li class="dot-text-sm">
                    BOX당 중량이 20kg을 넘지 않도록 나누어 포장
                  </li>
                  <li class="dot-text-sm">
                    아이스박스 포장 후 외부에 “김치” 표시 필수
                  </li>
                  <li class="dot-text-sm">
                    물김치, 동치미 등은 접수 불가
                  </li>
                </RowListWrap>
              </ContBox>
              <ContBox size="sm">
                <CtitleWrap size="sm">
                  <ETit text="한약 및 과일즙류" type="sCont" />
                </CtitleWrap>
                <RowListWrap gap="sm">
                  <li class="dot-text-sm">
                    약은 한약박스, 엑기스는 건강원 박스 포장 원칙
                  </li>
                  <li class="dot-text-sm">
                    박스당 최대 중량 15kg
                  </li>
                </RowListWrap>
              </ContBox>
              <ContBox size="sm">
                <CtitleWrap size="sm">
                  <ETit text="과일류" type="sCont" />
                </CtitleWrap>
                <RowListWrap gap="sm">
                  <li class="dot-text-sm">
                    낱개 단위 및 층별로 내포장 되어있는 과일류에 국한
                  </li>
                  <li class="dot-text-sm">
                    연질과일(홍시, 딸기, 포도 등)및 참외, 수박류 접수 불가
                  </li>
                </RowListWrap>
              </ContBox>
              <ContBox size="sm">
                <CtitleWrap size="sm">
                  <ETit text="의류" type="sCont" />
                </CtitleWrap>
                <RowListWrap gap="sm">
                  <li class="dot-text-sm">
                    1차 비닐포장 후 2차 박스포장 필수
                  </li>
                </RowListWrap>
              </ContBox>
              <ContBox size="sm">
                <CtitleWrap size="sm">
                  <ETit text="가구류" type="sCont" />
                </CtitleWrap>
                <RowListWrap gap="sm">
                  <li class="dot-text-sm">
                    조립 및 접이식에 한함
                  </li>
                  <li class="dot-text-sm">
                    박스 및 스티로폼 내포장
                  </li>
                </RowListWrap>
              </ContBox>
            </ColorBox>
          </ContBox>
          <ContBox size="lg">
            <CtitleWrap size="zero">
              <ETit text="파손면책이란?" type="cont" />
              <div class="stext-lg">
                배송중 포장 부실로 인한 상품의 고장/파손에 대하여 택배사의 배상 책임을 묻지 않겠다는 고객의 확인
              </div>
            </CtitleWrap>
          </ContBox>
          <ContBox size="lg">
            <CtitleWrap size="zero">
              <ETit text="택배 이용불가 상품" type="cont" />
              <div class="stext-lg">
                유리류, 사기류, 아크릴제품, 현금, 신분증, 여권, 예술품, 살아있는 동물, 포장하지 않은 상품, 액체류 등
              </div>
            </CtitleWrap>
          </ContBox>
        </ContWrap>
      </ContBox>
    </template>
    <template #footer>
      <div class="dialog-btn-wrap">
        <EBtn color="line-light-gray" size="lg" @click="closeDialog">
          <span class="text">동의안함</span>
        </EBtn>
        <EBtn color="green" size="lg" disabled @click="closeDialog">
          <span class="text">파손면책 동의</span>
        </EBtn>
      </div>
    </template>
  </ContDialog>
</template>

<script setup lang="ts">
interface DialogState {
  open: boolean;
}

const props = defineProps<{
  sta: DialogState;
}>();

const emit = defineEmits(['update:sta']);

function openDialog() {
  isOpen.value = true;
}

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit('update:sta', { ...props.sta, open: value }),
});

function closeDialog() {
  isOpen.value = false;
}
</script>

