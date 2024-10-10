<template>
  <ContWrap v-if="isData">
    <div class="list-header">
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
    <RowListWrap>
      <li class="item">
        <ColorBox color="white" size="lg">
          <div class="box-info-header">
            <FlexGroup align="start">
              <div class="info-flex-left">
                <ETBtn tag="a" size="lg" to="/store/detail">
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
                <button type="button" class="btn-share" @click="openSnsShare">
                  <EIco name="share">
                    <span class="offscreen">공유</span>
                  </EIco>
                </button>
              </div>
            </FlexGroup>
          </div>
          <TableWrap type="info" gap="sm" size="md" table-name="매장 상세 정보">
            <colgroup>
              <col style="width: 55px;">
              <col style="width: auto;">
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
            <EBtn tag="a" color="green" size="sm" to="/product/[...slug]">
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
                <ETBtn tag="a" size="lg" to="/store/detail">
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
                <button type="button" class="btn-share" @click="openSnsShare">
                  <EIco name="share">
                    <span class="offscreen">공유</span>
                  </EIco>
                </button>
              </div>
            </FlexGroup>
          </div>
          <TableWrap type="info" gap="sm" size="md" table-name="매장 상세 정보">
            <colgroup>
              <col style="width: 55px;">
              <col style="width: auto;">
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
            <EBtn tag="a" color="green" size="sm" to="/product/[...slug]">
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
                <ETBtn tag="a" size="lg" to="/store/detail">
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
                <button type="button" class="btn-share" @click="openSnsShare">
                  <EIco name="share">
                    <span class="offscreen">공유</span>
                  </EIco>
                </button>
              </div>
            </FlexGroup>
          </div>
          <TableWrap type="info" gap="sm" size="md" table-name="매장 상세 정보">
            <colgroup>
              <col style="width: 55px;">
              <col style="width: auto;">
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
            <EBtn tag="a" color="green" size="sm" to="/product/[...slug]">
              <span class="text">구매하기</span>
            </EBtn>
          </BtnWrap>
        </ColorBox>
      </li>
    </RowListWrap>
  </ContWrap>
  <ContWrap v-if="isNoData">
    <InfoGuideWrap
      type="no-data"
      name="store"
      desc="주변에 구매 가능한 매장이 없습니다."
      sub-desc="구매 가능한 매장을 검색해 보세요."
    />
  </ContWrap>

  <!-- pop : (공통) SNS 공유 -->
  <PopCommSnsShare v-model:sta="popSnsShare" />
  <!-- // pop : (공통) SNS 공유 -->
</template>

<script setup lang="ts">
const isData = ref(true);
const isNoData = ref(false);
const { $showToast } = useNuxtApp();

// 즐겨찾기 등록한 경우 토스트 노출
/* $showToast({ msg: '단골매장이 등록되었습니다.' }); */
// 즐겨찾기 등록 해지한 경우 토스트 노출
/* $showToast({ msg: '단골매장 등록이 해지되었습니다.' }); */

// sns 공유 팝업
const popSnsShare = ref({ open: false });
const openSnsShare = () => popSnsShare.value.open = true;
</script>

<style lang="scss" scoped>

</style>
