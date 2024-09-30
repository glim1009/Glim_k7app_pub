<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        재고찾기
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <ContWrap in-top="sm" type="white">
          <ContBox size="sm">
            <div class="item-thumb-prod">
              <!-- thumb-prod-flex -->
              <div class="thumb-prod-flex">
                <EThumbProdBox size="md">
                  <template #thumb>
                    <img src="/assets/images/temp/temp_prod_5by5.png" alt="상품명 이미지" />
                  </template>
                </EThumbProdBox>
                <div class="info-box">
                  <FlexGroup>
                    <div class="flex-left">
                      <ETit type="prod">
                        바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml 바리스타 로슈거 250ml
                      </ETit>
                      <div class="goods-group">
                        <EGoods type="origin" size="sm" val="3,000" unit="원" />
                        <EGoods type="percent" size="md" val="10" unit="%" />
                        <EGoods size="md" val="2,700" unit="원" />
                      </div>
                    </div>
                    <div class="flex-right">
                      <EBtn tag="a" size="xs" color="line-light-gray" to="/stock/product/result">
                        <span class="text">상품 변경</span>
                      </EBtn>
                    </div>
                  </FlexGroup>
                </div>
              </div>
              <!-- // thumb-prod-flex -->
            </div>
          </ContBox>
          <ContBox size="sm">
            <EInputBox type="search" enterkeyhint="search" title="지역 및 매장명 검색" placeholder="지역 및 매장명 검색">
              <button type="button" class="btn-input-search">
                <span class="offscreen">검색</span>
              </button>
            </EInputBox>
          </ContBox>
        </ContWrap>
        <ContWrap>
          <ContBox>
            <div v-if="isData" class="list-header">
              <FlexGroup align="center">
                <div class="flex-left">
                  <div class="goods-group">
                    <EGoods val="8" unit="건" />
                  </div>
                </div>
                <div class="flex-right">
                  <div class="ui-select type-text">
                    <select title="매장 정렬">
                      <option selected>
                        재고 많은 순
                      </option>
                      <option>가까운 거리 순</option>
                    </select>
                  </div>
                </div>
              </FlexGroup>
            </div>
            <RowListWrap v-if="isData">
              <li class="item">
                <ColorBox color="white" size="lg">
                  <div class="box-info-header">
                    <FlexGroup align="start">
                      <div class="info-flex-left">
                        <ETBtn tag="a" size="lg" to="javascript:">
                          <span class="text">을지로 1가점</span>
                          <EIco name="arw-right" color="gray" size="sm" />
                        </ETBtn>
                        <div class="bar-group">
                          <span class="bar-text-sm fc-spot fw-md"><EGoods val="2" unit="개" />남음</span>
                          <span class="bar-text-sm fc-gray70">100M</span>
                          <span class="bar-text-sm fc-gray70">
                            <span class="rating">
                              <EIco name="rating" color="green" size="xs"><span class="offscreen">별점</span></EIco>
                              <span class="score-sm">4.0</span>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div class="flex-right">
                        <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                        <button type="button" class="btn-bookmark">
                          <EIco name="bookmark">
                            <span class="offscreen">관심 등록</span>
                          </EIco>
                        </button>
                        <button type="button" class="btn-share">
                          <EIco name="share">
                            <span class="offscreen">공유</span>
                          </EIco>
                        </button>
                      </div>
                    </FlexGroup>
                  </div>
                  <TableWrap type="info" gap="sm" size="md" table-name="매장 상세 정보">
                    <colgroup>
                      <col style="width: 55px;" />
                      <col style="width: auto;" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">
                          주소
                        </th>
                        <td>
                          <span class="multi-ellipsis">서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩)</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          전화번호
                        </th>
                        <td>
                          <ETBtn tag="a" size="xs" type="underline" to="tel:02-1234-0000">
                            <span class="text fw-rgl">02-1234-0000</span>
                          </ETBtn>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          영업시간
                        </th>
                        <td>24시간</td>
                      </tr>
                    </tbody>
                  </TableWrap>
                  <BtnWrap type="full" size="md">
                    <EBtn tag="a" color="green" size="sm" to="javascript:">
                      <span class="text">구매하기</span>
                    </EBtn>
                  </BtnWrap>
                </ColorBox>
              </li>
              <li class="item">
                <ColorBox color="white" size="lg">
                  <div class="box-info-header">
                    <FlexGroup align="start">
                      <div class="info-flex-left">
                        <ETBtn tag="a" size="lg" to="javascript:">
                          <span class="text">을지로 1가점</span>
                          <EIco name="arw-right" color="gray" size="sm" />
                        </ETBtn>
                        <div class="bar-group">
                          <span class="bar-text-sm fc-spot fw-md"><EGoods val="2" unit="개" />남음</span>
                          <span class="bar-text-sm fc-gray70">100M</span>
                          <span class="bar-text-sm fc-gray70">
                            <span class="rating">
                              <EIco name="rating" color="green" size="xs"><span class="offscreen">별점</span></EIco>
                              <span class="score-sm">4.0</span>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div class="flex-right">
                        <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                        <button type="button" class="btn-bookmark">
                          <EIco name="bookmark">
                            <span class="offscreen">관심 등록</span>
                          </EIco>
                        </button>
                        <button type="button" class="btn-share">
                          <EIco name="share">
                            <span class="offscreen">공유</span>
                          </EIco>
                        </button>
                      </div>
                    </FlexGroup>
                  </div>
                  <TableWrap type="info" gap="sm" size="md" table-name="매장 상세 정보">
                    <colgroup>
                      <col style="width: 55px;" />
                      <col style="width: auto;" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">
                          주소
                        </th>
                        <td>
                          <span class="multi-ellipsis">서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩)</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          전화번호
                        </th>
                        <td>
                          <ETBtn tag="a" size="xs" type="underline" to="tel:02-1234-0000">
                            <span class="text fw-rgl">02-1234-0000</span>
                          </ETBtn>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          영업시간
                        </th>
                        <td>24시간</td>
                      </tr>
                    </tbody>
                  </TableWrap>
                  <BtnWrap type="full" size="md">
                    <EBtn tag="a" color="green" size="sm" to="javascript:">
                      <span class="text">구매하기</span>
                    </EBtn>
                  </BtnWrap>
                </ColorBox>
              </li>
              <li class="item">
                <ColorBox color="white" size="lg">
                  <div class="box-info-header">
                    <FlexGroup align="start">
                      <div class="info-flex-left">
                        <ETBtn tag="a" size="lg" to="javascript:">
                          <span class="text">을지로 1가점</span>
                          <EIco name="arw-right" color="gray" size="sm" />
                        </ETBtn>
                        <div class="bar-group">
                          <span class="bar-text-sm fc-spot fw-md"><EGoods val="2" unit="개" />남음</span>
                          <span class="bar-text-sm fc-gray70">100M</span>
                          <span class="bar-text-sm fc-gray70">
                            <span class="rating">
                              <EIco name="rating" color="green" size="xs"><span class="offscreen">별점</span></EIco>
                              <span class="score-sm">4.0</span>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div class="flex-right">
                        <!-- DESC :: 활성화시 is-active 클래스 추가 -->
                        <button type="button" class="btn-bookmark">
                          <EIco name="bookmark">
                            <span class="offscreen">관심 등록</span>
                          </EIco>
                        </button>
                        <button type="button" class="btn-share">
                          <EIco name="share">
                            <span class="offscreen">공유</span>
                          </EIco>
                        </button>
                      </div>
                    </FlexGroup>
                  </div>
                  <TableWrap type="info" gap="sm" size="md" table-name="매장 상세 정보">
                    <colgroup>
                      <col style="width: 55px;" />
                      <col style="width: auto;" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">
                          주소
                        </th>
                        <td>
                          <span class="multi-ellipsis">서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩) 서울특별시 종로구 12길 (관철동, 종로코아 빌딩)</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          전화번호
                        </th>
                        <td>
                          <ETBtn tag="a" size="xs" type="underline" to="tel:02-1234-0000">
                            <span class="text fw-rgl">02-1234-0000</span>
                          </ETBtn>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          영업시간
                        </th>
                        <td>24시간</td>
                      </tr>
                    </tbody>
                  </TableWrap>
                  <BtnWrap type="full" size="md">
                    <EBtn tag="a" color="green" size="sm" to="javascript:">
                      <span class="text">구매하기</span>
                    </EBtn>
                  </BtnWrap>
                </ColorBox>
              </li>
            </RowListWrap>
            <InfoGuideWrap
              v-if="isNoData"
              type="no-data"
              name="search-result"
              desc="검색 결과가 없습니다."
              sub-desc="검색어를 다시 입력해 주세요."
            />
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

const isData = ref(true);
const isNoData = ref(false);
</script>
