<template>
  <ContWrap v-if="isData">
    <ContBox>
      <div v-if="isData || isFilterNoData" class="list-header">
        <FlexGroup align="center">
          <div class="flex-left">
            <div class="goods-group">
              <EGoods val="8" unit="건" />
            </div>
          </div>
          <div class="flex-right">
            <!-- DESC :: 활성화시 is-active 클래스 추가 -->
            <button type="button" class="btn-filter is-active" @click="emitOpenFilter">
              <EIco name="filter" color="gray" size="xs" />
            </button>
          </div>
        </FlexGroup>
      </div>
      <RowListWrap v-if="isData">
        <!-- CASE 01 : 매장 찾기인 경우 -->
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
            <BadgeGroup>
              <EBadge color="light-gray" badge-text="24시간" />
              <EBadge color="light-gray" badge-text="무인점포 자판기" />
              <EBadge color="light-gray" badge-text="안전상비 의약품" />
              <EBadge color="light-gray" badge-text="+2" />
            </BadgeGroup>
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
            <BadgeGroup>
              <EBadge color="light-gray" badge-text="24시간" />
              <EBadge color="light-gray" badge-text="무인점포 자판기" />
              <EBadge color="light-gray" badge-text="안전상비 의약품" />
              <EBadge color="light-gray" badge-text="+2" />
            </BadgeGroup>
          </ColorBox>
        </li>
        <!-- // CASE 01 : 매장 찾기인 경우 -->
        <!-- CASE 02 : 매장 선택인 경우 -->
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
            <BadgeGroup>
              <EBadge color="light-gray" badge-text="24시간" />
              <EBadge color="light-gray" badge-text="무인점포 자판기" />
              <EBadge color="light-gray" badge-text="안전상비 의약품" />
              <EBadge color="light-gray" badge-text="+2" />
            </BadgeGroup>
            <BtnWrap size="md">
              <EBtn color="light-green" size="sm">
                <EIco name="check" size="xs" color="green" />
                <span class="text">매장 선택</span>
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
            <BadgeGroup>
              <EBadge color="light-gray" badge-text="24시간" />
              <EBadge color="light-gray" badge-text="무인점포 자판기" />
              <EBadge color="light-gray" badge-text="안전상비 의약품" />
              <EBadge color="light-gray" badge-text="+2" />
            </BadgeGroup>
            <BtnWrap size="md">
              <EBtn color="light-green" size="sm">
                <EIco name="check" size="xs" color="green" />
                <span class="text">매장 선택</span>
              </EBtn>
            </BtnWrap>
          </ColorBox>
        </li>
        <!-- // CASE 02 : 매장 선택인 경우 -->
      </RowListWrap>
      <InfoGuideWrap
        v-if="isFilterNoData"
        type="no-data"
        name="filter-result"
        desc="선택한 조건의 결과가 없습니다."
        sub-desc="조건을 다시 선택해 주세요."
      />
    </ContBox>
  </ContWrap>
  <ContWrap v-if="isNoData">
    <ContBox>
      <InfoGuideWrap
        type="no-data"
        name="search-result"
        desc="검색 결과가 없습니다."
        sub-desc="검색어를 다시 입력해 주세요."
      />
    </ContBox>
  </ContWrap>
</template>

<script setup lang="ts">
const emit = defineEmits(["openFilter"]);

const isData = ref(true);
const isFilterNoData = ref(false);
const isNoData = ref(false);

// 필터팝업 : open
const emitOpenFilter = () => {
  emit("openFilter");
};
</script>

<style lang="scss" scoped>

</style>
