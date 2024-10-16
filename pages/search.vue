<template>
  <NuxtLayout name="default">
    <template #header>
      <div class="header-wrapper">
        <div class="header-box">
          <div class="header-left">
            <button class="btn-header-back">
              <EIco name="back" />
            </button>
            <EInputBox type="search" enterkeyhint="search" title="검색" placeholder="검색어 입력" @input="handlerSearchInputValue" @class-change="handleChangeClass" @clear="valueClear">
              <button type="button" class="btn-input-search">
                <span class="offscreen">검색</span>
              </button>
            </EInputBox>
          </div>
          <div class="header-right">
            <NuxtLink to="/cart" class="btn-header-util cart">
              <EIco name="cart" />
              <span class="count">99</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div v-if="isAutoComplete" class="auto-complete-layer">
        <ContWrap type="white">
          <RowListWrap gap="line">
            <li class="item-md">
              <NuxtLink class="link-keyword" to="javascript:">
                <span class="keyword"><span class="fc-spot">만</span>두</span>
              </NuxtLink>
            </li>
            <li class="item-md">
              <NuxtLink class="link-keyword" to="javascript:">
                <span class="keyword">마늘</span>
              </NuxtLink>
            </li>
            <li class="item-md">
              <NuxtLink class="link-keyword" to="javascript:">
                <span class="keyword"><span class="fc-spot">만</span>두피</span>
              </NuxtLink>
            </li>
            <li class="item-md">
              <NuxtLink class="link-keyword" to="javascript:">
                <span class="keyword"><span class="fc-spot">만</span>쥬</span>
              </NuxtLink>
            </li>
            <li class="item-md">
              <NuxtLink class="link-keyword" to="javascript:">
                <span class="keyword">마늘바게트</span>
              </NuxtLink>
            </li>
            <li class="item-md">
              <NuxtLink class="link-keyword" to="javascript:">
                <span class="keyword">마늘빵</span>
              </NuxtLink>
            </li>
            <li class="item-md">
              <NuxtLink class="link-keyword" to="javascript:">
                <span class="text">칼호<span class="fc-spot">만</span></span>
              </NuxtLink>
            </li>
          </RowListWrap>
        </ContWrap>
      </div>
    </template>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

definePageMeta({
  layout: false,
});

const isClassValue = ref(false);

const handleChangeClass = (className: string, isActive: boolean) => {
  if (className === "value")
    isClassValue.value = isActive;
};

const handlerSearchInputValue = (value: any) => {
  if (value.length === 0)
    navigateTo("/search");
};

const isAutoComplete = computed(() => {
  return !!isClassValue.value;
});

const valueClear = async () => {
  try {
    if (route.path.includes("/search/result"))
      navigateTo("/search");
  }
  catch (err) {
    console.error(err);
  }
};
</script>

<style lang="scss" scoped>
@import url('@/assets/css/layout/header.scss');
</style>
