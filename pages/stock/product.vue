<template>
  <NuxtLayout name="default">
    <template #header>
      <div class="header-wrapper">
        <div class="header-box">
          <div class="header-left">
            <button class="btn-header-back">
              <EIco name="back" />
            </button>
            <EInputBox type="search" enterkeyhint="search" title="상품 명 검색" placeholder="상품 명 입력" @class-change="handleChangeClass" @clear="valueClear">
              <EBadge color="gray" badge-text="재고찾기" />
              <NuxtLink to="javascript:" class="btn-input-search">
                <span class="offscreen">검색</span>
              </NuxtLink>
            </EInputBox>
          </div>
          <div class="header-right">
            <NuxtLink to="/cart" class="btn-header-util cart">
              <EIco name="cart" />
              <span class="count">1</span>
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

function handleChangeClass(className: string, isActive: boolean) {
  if (className === "value")
    isClassValue.value = isActive;
}

const isAutoComplete = computed(() => {
  return !!isClassValue.value;
});

async function valueClear() {
  try {
    if (route.path.includes("/stock/product/result")) {
      router.push("/stock/product");
    }
  }
  catch (err) {
    console.error(err);
  }
}
</script>

<style lang="scss" scoped>
@import url('assets/css/layout/header.scss');
</style>
