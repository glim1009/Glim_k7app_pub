<template>
  <ContWrap class="not-navbar">
    <ContBox>
      <BtnWrap>
        <EBtn color="gray" @click="openAddAddress">
          <EIco name="plus" size="sm" color="white" />
          <span class="text">주소지 추가</span>
        </EBtn>
      </BtnWrap>
      <BtnWrap type="auto-center" size="md">
        <ETBtn tag="button" size="xs" @click="openCurrentAddress">
          <EIco name="current-location" color="gray" size="sm" />
          <span class="text">현재 위치 주소에 추가</span>
        </ETBtn>
      </BtnWrap>
    </ContBox>

    <!-- 데이터가 있는 경우 -->
    <ContBox v-if="isData" size="sm">
      <RowListWrap>
        <li class="item">
          <ColorBox color="white" size="lg">
            <div class="box-address-header">
              <FlexGroup align="start">
                <div class="info-flex-left">
                  <div class="box-rdo-group">
                    <span class="ui-rdo">
                      <input id="demoRdo01" type="radio" name="demoRdo01">
                      <label for="demoRdo01"><span class="text-lg fw-sb fw-sb">사무실</span></label>
                    </span>
                    <EBadge color="light-gray" size="md" badge-text="기본주소지" />
                  </div>
                  <div class="bar-group">
                    <span class="bar-text fc-black">홍*동</span>
                    <span class="bar-text fc-black">010-****-8785</span>
                  </div>
                </div>
                <div class="flex-right">
                  <BtnWrap>
                    <EBtn color="light-gray" size="xs">
                      <EIco name="delete" color="gray" size="xs">
                        <span class="offscreen">삭제</span>
                      </EIco>
                    </EBtn>
                    <EBtn color="light-green" size="xs" @click="openEditAddress">
                      <EIco name="write" color="green" size="xs">
                        <span class="offscreen">수정</span>
                      </EIco>
                    </EBtn>
                  </BtnWrap>
                </div>
              </FlexGroup>
            </div>
            <TableWrap type="info" gap="sm" size="md" table-name="주소정보">
              <colgroup>
                <col style="width: 57px;">
                <col style="width: auto;">
              </colgroup>
              <tbody>
              <tr>
                <th scope="row" class="">
                  085421
                </th>
                <td>서울 강동구 상암로 **길 ***호</td>
              </tr>
              </tbody>
            </TableWrap>
          </ColorBox>
        </li>
        <li class="item">
          <ColorBox color="white" size="lg">
            <div class="box-address-header">
              <FlexGroup align="start">
                <div class="info-flex-left">
                  <div class="box-rdo-group">
                    <span class="ui-rdo">
                      <input id="demoRdo02" type="radio" name="demoRdo01">
                      <label for="demoRdo02"><span class="text-lg fw-sb">엄마집</span></label>
                    </span>
                  </div>
                  <div class="bar-group">
                    <span class="bar-text fc-black">홍*동</span>
                    <span class="bar-text fc-black">010-****-8785</span>
                  </div>
                </div>
                <div class="flex-right">
                  <BtnWrap>
                    <EBtn color="light-gray" size="xs">
                      <EIco name="delete" color="gray" size="xs">
                        <span class="offscreen">삭제</span>
                      </EIco>
                    </EBtn>
                    <EBtn color="light-green" size="xs" @click="openEditAddress">
                      <EIco name="write" color="green" size="xs">
                        <span class="offscreen">수정</span>
                      </EIco>
                    </EBtn>
                  </BtnWrap>
                </div>
              </FlexGroup>
            </div>
            <TableWrap type="info" gap="sm" size="md" table-name="주소정보">
              <colgroup>
                <col style="width: 57px;">
                <col style="width: auto;">
              </colgroup>
              <tbody>
              <tr>
                <th scope="row" class="">
                  085421
                </th>
                <td>서울 강동구 상암로 **길 ***호</td>
              </tr>
              </tbody>
            </TableWrap>
          </ColorBox>
        </li>
        <li class="item">
          <ColorBox color="white" size="lg">
            <div class="box-address-header">
              <FlexGroup align="start">
                <div class="info-flex-left">
                  <div class="box-rdo-group">
                    <span class="ui-rdo">
                      <input id="demoRdo03" type="radio" name="demoRdo01">
                      <label for="demoRdo03"><span class="text-lg fw-sb">우리집</span></label>
                    </span>
                  </div>
                  <div class="bar-group">
                    <span class="bar-text fc-black">홍*동</span>
                    <span class="bar-text fc-black">010-****-8785</span>
                  </div>
                </div>
                <div class="flex-right">
                  <BtnWrap>
                    <EBtn color="light-gray" size="xs">
                      <EIco name="delete" color="gray" size="xs">
                        <span class="offscreen">삭제</span>
                      </EIco>
                    </EBtn>
                    <EBtn color="light-green" size="xs" @click="openEditAddress">
                      <EIco name="write" color="green" size="xs">
                        <span class="offscreen">수정</span>
                      </EIco>
                    </EBtn>
                  </BtnWrap>
                </div>
              </FlexGroup>
            </div>
            <TableWrap type="info" gap="sm" size="md" table-name="주소정보">
              <colgroup>
                <col style="width: 57px;">
                <col style="width: auto;">
              </colgroup>
              <tbody>
              <tr>
                <th scope="row" class="">
                  085421
                </th>
                <td>서울 강동구 상암로 **길 ***호</td>
              </tr>
              </tbody>
            </TableWrap>
          </ColorBox>
        </li>
      </RowListWrap>
    </ContBox>
    <!-- // 데이터가 있는 경우 -->

    <!-- 데이터가 없는 경우  -->
    <ContBox v-if="isNoData" size="zero">
      <InfoGuideWrap
        type="no-data"
        name="address"
        desc="추가된 주소지가 없습니다."
      />
    </ContBox>
    <!-- // 데이터가 없는 경우  -->
  </ContWrap>

  <!-- 데이터가 있는 경우 -->
  <ContDocker v-if="isData">
    <BtnWrap type="flex">
      <EBtn color="green" size="lg" disabled>
        <span class="text">기본 주소지로 설정</span>
      </EBtn>
    </BtnWrap>
  </ContDocker>
  <!-- // 데이터가 있는 경우 -->

  <!-- pop : 주소록 추가 -->
  <PopMyAddAddress v-model:sta="popAddAddress" />
  <!-- // pop : 주소록 추가 -->

  <!-- pop : 현재 위치 주소 추가 -->
  <PopMyCurrentAddress v-model:sta="popCurrentAddress" />
  <!-- // pop : 현재 위치 주소 추가 -->

  <!-- pop : 주소록 수정 -->
  <PopMyEditAddress v-model:sta="popEditAddress" />
  <!-- // pop : 주소록 수정 -->
</template>

<script setup lang="ts">
definePageMeta({
  title: "주소록 관리",
  hideRightHeader: ["chat", "search", "cart"],
});

const isData = ref(true);
const isNoData = ref(true);

// 주소록 추가
const popAddAddress = ref({ open: false });
const openAddAddress = () => popAddAddress.value.open = true;

// 현재 위치 주소 추가
const popCurrentAddress = ref({ open: false });
const openCurrentAddress = () => popCurrentAddress.value.open = true;

// 주소록 수정
const popEditAddress = ref({ open: false });
const openEditAddress = () => popEditAddress.value.open = true;
</script>

<style lang="scss" scoped>
@import url("assets/css/pages/my.scss");
</style>
