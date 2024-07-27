<template>
  <div class="header-wrapper">
    <div class="header-box">
      <div class="header-left">
        <button @click="$router.back()">Back</button>
        <div v-if="isTitleHidden" class="ptitle">페이지 타이틀 페이지 타이틀 페이지 타이틀 페이지 타이틀 페이지 타이틀</div>
      </div>
      <div class="header-right" v-if="isRightHidden">
        <NuxtLink v-if="isTitleHidden" class="btn-home" v-slot="{ navigate }" custom to="/">
          <i class="ico-header-home" @click="navigate"><span class="offscreen">홈</span></i>
        </NuxtLink>
        <NuxtLink v-if="!isTitleHidden"  class="btn-home" v-slot="{ navigate }" custom to="/">
          <i class="ico-header-home" @click="navigate"><span class="offscreen">버튼1</span></i>
        </NuxtLink>
        <NuxtLink class="btn-home" v-slot="{ navigate }" custom to="/">
          <i class="ico-header-home" @click="navigate"><span class="offscreen">버튼2</span></i>
        </NuxtLink>
        <NuxtLink class="btn-home" v-slot="{ navigate }" custom to="/">
          <i class="ico-header-home" @click="navigate"><span class="offscreen">버튼3</span></i>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//const router = useRouter();
const props = withDefaults(defineProps<{
  headerType?: 'default' | 'hide-right' | 'hide-title';
}>(), {
  headerType: 'default',
});

const isRightHidden = computed(() => !(props.headerType === 'hide-right'));
const isTitleHidden = computed(() => !(props.headerType === 'hide-title'));

</script>

<style lang="scss" scoped>
@import url('@/assets/css/layout/header.scss');
</style>
