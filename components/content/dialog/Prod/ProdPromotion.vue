<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        행사 적용 상품
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap type="white" in-top="sm">
          <ContBox size="sm">
            <ColorBox color="light-green" size="sm">
              <p class="stext-lg fc-spot fw-sb">함께 혜택받을 수 있는 상품을 준비했어요!</p>
            </ColorBox>
          </ContBox>
          <ContBox size="sm">
            <div class="list-header">
              <FlexGroup align="center">
                <div class="flex-left">
                  <div class="goods-group">
                    <EGoods val="8" unit="건" class="fw-sb" />
                  </div>
                </div>
                <div class="flex-right">
                  <span class="ui-chk">
                    <input type="checkbox" id="soldOutChk">
                    <label for="soldOutChk"><span class="text-lg">품절제외</span></label>
                  </span>
                </div>
              </FlexGroup>
            </div>
            <!-- 행사 적용 상품 있음 -->
            <GridListWrap gap="prod" v-if="isDataProd">
              <li class="item-grid">
                <!-- thumb-prod -->
                <div class="thumb-prod">
                  <EThumbProdBox dim="SOLD OUT">
                    <div class="right-group">
                      <EBadge color="red" size="sm" badge-text="19" />
                    </div>
                    <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                    <button type="button" class="btn-wish">
                      <EIco name="wish" size="sm">
                        <span class="offscreen">관심 등록</span>
                      </EIco>
                    </button>
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
                    </template>
                  </EThumbProdBox>
                  <div class="info-box">
                    <BadgeGroup gap="md">
                      <EBadge color="light-gray" size="sm" badge-text="BEST" />
                      <EBadge color="light-gray" size="sm" badge-text="NEW" />
                    </BadgeGroup>
                    <ETit type="prod">
                      바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                    </ETit>
                    <div class="stext">
                      (31일간, 월 1회 30% / 총 20회)
                    </div>
                    <div class="stock">
                      <EGoods size="sm" val="N" unit="개" /> 남음
                    </div>
                    <div class="goods-group">
                      <EGoods type="origin" size="sm" val="3,000" unit="원" />
                      <EGoods type="percent" size="md" val="10" unit="%" />
                      <EGoods size="md" val="2,700" unit="원" />
                    </div>
                    <div class="rating">
                      <EIco name="rating" color="gray50" size="xs">
                        <span class="offscreen">별점</span>
                      </EIco>
                      <span class="score-sm">4.0 (10)</span>
                    </div>
                  </div>
                </div>
                <!-- // thumb-prod -->
                <NuxtLink class="btn-link" to="javascript:">
                  <span class="offscreen">바로가기</span>
                </NuxtLink>
              </li>
              <li class="item-grid">
                <!-- thumb-prod -->
                <div class="thumb-prod">
                  <EThumbProdBox>
                    <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                    <button type="button" class="btn-wish">
                      <EIco name="wish" size="sm">
                        <span class="offscreen">관심 등록</span>
                      </EIco>
                    </button>
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
                    </template>
                  </EThumbProdBox>
                  <div class="info-box">
                    <BadgeGroup gap="md">
                      <EBadge color="light-gray" size="sm" badge-text="한정수량" />
                    </BadgeGroup>
                    <ETit type="prod">
                      바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                    </ETit>
                    <div class="goods-group">
                      <EGoods type="origin" size="sm" val="3,000" unit="원" />
                      <EGoods type="percent" size="md" val="10" unit="%" />
                      <EGoods size="md" val="2,700" unit="원" />
                    </div>
                    <div class="rating">
                      <EIco name="rating" color="gray50" size="xs">
                        <span class="offscreen">별점</span>
                      </EIco>
                      <span class="score-sm">4.0 (10)</span>
                    </div>
                  </div>
                </div>
                <!-- // thumb-prod -->
                <NuxtLink class="btn-link" to="javascript:">
                  <span class="offscreen">바로가기</span>
                </NuxtLink>
              </li>
              <li class="item-grid">
                <!-- thumb-prod -->
                <div class="thumb-prod">
                  <EThumbProdBox>
                    <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                    <button type="button" class="btn-wish">
                      <EIco name="wish" size="sm">
                        <span class="offscreen">관심 등록</span>
                      </EIco>
                    </button>
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
                    </template>
                  </EThumbProdBox>
                  <div class="info-box">
                    <BadgeGroup gap="md">
                      <EBadge color="light-gray" size="sm" badge-text="BEST" />
                      <EBadge color="light-gray" size="sm" badge-text="NEW" />
                    </BadgeGroup>
                    <ETit type="prod">
                      바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                    </ETit>
                    <div class="goods-group">
                      <EGoods type="origin" size="sm" val="3,000" unit="원" />
                      <EGoods type="percent" size="md" val="10" unit="%" />
                      <EGoods size="md" val="2,700" unit="원" />
                    </div>
                    <div class="rating">
                      <EIco name="rating" color="gray50" size="xs">
                        <span class="offscreen">별점</span>
                      </EIco>
                      <span class="score-sm">4.0 (10)</span>
                    </div>
                  </div>
                </div>
                <!-- // thumb-prod -->
                <NuxtLink class="btn-link" to="javascript:">
                  <span class="offscreen">바로가기</span>
                </NuxtLink>
              </li>
              <li class="item-grid">
                <!-- thumb-prod -->
                <div class="thumb-prod">
                  <EThumbProdBox>
                    <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                    <button type="button" class="btn-wish">
                      <EIco name="wish" size="sm">
                        <span class="offscreen">관심 등록</span>
                      </EIco>
                    </button>
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
                    </template>
                  </EThumbProdBox>
                  <div class="info-box">
                    <BadgeGroup gap="md">
                      <EBadge color="light-gray" size="sm" badge-text="BEST" />
                      <EBadge color="light-gray" size="sm" badge-text="NEW" />
                    </BadgeGroup>
                    <ETit type="prod">
                      바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                    </ETit>
                    <div class="goods-group">
                      <EGoods size="md" val="2,700" unit="원" />
                    </div>
                    <div class="rating">
                      <EIco name="rating" color="gray50" size="xs">
                        <span class="offscreen">별점</span>
                      </EIco>
                      <span class="score-sm">4.0 (10)</span>
                    </div>
                  </div>
                </div>
                <!-- // thumb-prod -->
                <NuxtLink class="btn-link" to="javascript:">
                  <span class="offscreen">바로가기</span>
                </NuxtLink>
              </li>
              <li class="item-grid">
                <!-- thumb-prod -->
                <div class="thumb-prod">
                  <EThumbProdBox>
                    <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                    <button type="button" class="btn-wish">
                      <EIco name="wish" size="sm">
                        <span class="offscreen">관심 등록</span>
                      </EIco>
                    </button>
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
                    </template>
                  </EThumbProdBox>
                  <div class="info-box">
                    <BadgeGroup gap="md">
                      <EBadge color="light-gray" size="sm" badge-text="BEST" />
                      <EBadge color="light-gray" size="sm" badge-text="NEW" />
                    </BadgeGroup>
                    <ETit type="prod">
                      바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                    </ETit>
                    <div class="goods-group">
                      <EGoods type="origin" size="sm" val="3,000" unit="원" />
                      <EGoods type="percent" size="md" val="10" unit="%" />
                      <EGoods size="md" val="2,700" unit="원" />
                    </div>
                    <div class="rating">
                      <EIco name="rating" color="gray50" size="xs">
                        <span class="offscreen">별점</span>
                      </EIco>
                      <span class="score-sm">4.0 (10)</span>
                    </div>
                  </div>
                </div>
                <!-- // thumb-prod -->
                <NuxtLink class="btn-link" to="javascript:">
                  <span class="offscreen">바로가기</span>
                </NuxtLink>
              </li>
              <li class="item-grid">
                <!-- thumb-prod -->
                <div class="thumb-prod">
                  <EThumbProdBox>
                    <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                    <button type="button" class="btn-wish">
                      <EIco name="wish" size="sm">
                        <span class="offscreen">관심 등록</span>
                      </EIco>
                    </button>
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
                    </template>
                  </EThumbProdBox>
                  <div class="info-box">
                    <BadgeGroup gap="md">
                      <EBadge color="light-gray" size="sm" badge-text="BEST" />
                      <EBadge color="light-gray" size="sm" badge-text="NEW" />
                    </BadgeGroup>
                    <ETit type="prod">
                      바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                    </ETit>
                    <div class="goods-group">
                      <EGoods type="origin" size="sm" val="3,000" unit="원" />
                      <EGoods type="percent" size="md" val="10" unit="%" />
                      <EGoods size="md" val="2,700" unit="원" />
                    </div>
                    <div class="rating">
                      <EIco name="rating" color="gray50" size="xs">
                        <span class="offscreen">별점</span>
                      </EIco>
                      <span class="score-sm">4.0 (10)</span>
                    </div>
                  </div>
                </div>
                <!-- // thumb-prod -->
                <NuxtLink class="btn-link" to="javascript:">
                  <span class="offscreen">바로가기</span>
                </NuxtLink>
              </li>
              <li class="item-grid">
                <!-- thumb-prod -->
                <div class="thumb-prod">
                  <EThumbProdBox>
                    <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                    <button type="button" class="btn-wish">
                      <EIco name="wish" size="sm">
                        <span class="offscreen">관심 등록</span>
                      </EIco>
                    </button>
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
                    </template>
                  </EThumbProdBox>
                  <div class="info-box">
                    <ETit type="prod">
                      바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                    </ETit>
                    <div class="goods-group">
                      <EGoods type="origin" size="sm" val="3,000" unit="원" />
                      <EGoods type="percent" size="md" val="10" unit="%" />
                      <EGoods size="md" val="2,700" unit="원" />
                    </div>
                    <div class="rating">
                      <EIco name="rating" color="gray50" size="xs">
                        <span class="offscreen">별점</span>
                      </EIco>
                      <span class="score-sm">4.0 (10)</span>
                    </div>
                  </div>
                </div>
                <!-- // thumb-prod -->
                <NuxtLink class="btn-link" to="javascript:">
                  <span class="offscreen">바로가기</span>
                </NuxtLink>
              </li>
              <li class="item-grid">
                <!-- thumb-prod -->
                <div class="thumb-prod">
                  <EThumbProdBox>
                    <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                    <button type="button" class="btn-wish">
                      <EIco name="wish" size="sm">
                        <span class="offscreen">관심 등록</span>
                      </EIco>
                    </button>
                    <template #thumb>
                      <img src="/assets/images/temp/temp_prod_5by5.png" alt="임시 이미지" />
                    </template>
                  </EThumbProdBox>
                  <div class="info-box">
                    <BadgeGroup gap="md">
                      <EBadge color="light-gray" size="sm" badge-text="BEST" />
                      <EBadge color="light-gray" size="sm" badge-text="NEW" />
                    </BadgeGroup>
                    <ETit type="prod">
                      바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                    </ETit>
                    <div class="goods-group">
                      <EGoods type="origin" size="sm" val="3,000" unit="원" />
                      <EGoods type="percent" size="md" val="10" unit="%" />
                      <EGoods size="md" val="2,700" unit="원" />
                    </div>
                    <div class="rating">
                      <EIco name="rating" color="gray50" size="xs">
                        <span class="offscreen">별점</span>
                      </EIco>
                      <span class="score-sm">4.0 (10)</span>
                    </div>
                  </div>
                </div>
                <!-- // thumb-prod -->
                <NuxtLink class="btn-link" to="javascript:">
                  <span class="offscreen">바로가기</span>
                </NuxtLink>
              </li>
            </GridListWrap>
            <!-- // 행사 적용 상품 있음 -->
            <!-- 행사 적용 상품 없음 -->
            <InfoGuideWrap v-if="isNoDataProd"
                           type="no-data"
                           name="search-result"
                           desc="적용 상품이 없습니다."
            />
            <!-- // 행사 적용 상품 없음 -->
          </ContBox>
        </ContWrap>
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

const isDataProd = ref(true); // 임시 : 상품 컨텐츠 있음 확인을 위해 추가
const isNoDataProd = ref(true); // 임시 : 상품 컨텐츠 없음 확인을 위해 추가
</script>
