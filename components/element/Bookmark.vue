<template>
  <button type="button"
          :class="['btn-bookmark', {'is-active': isActive} ]"
          @click="toggleClick"
  >
    <EIco name="bookmark">
      <span v-if="isActive" class="offscreen">즐겨찾기 해지</span>
      <span v-else class="offscreen">즐겨찾기 등록</span>
    </EIco>
  </button>
</template>

<script setup lang="ts">
const { $showToast } = useNuxtApp();

const props = withDefaults(defineProps<{
  added?: boolean;
}>(), {
  added: false,
});

const isActive = ref(false);

const toggleClick = () => {
  isActive.value  = !isActive.value;

  if (isActive.value) {
    $showToast({ msg: '단골매장이 등록되었습니다.' });
  } else {
    $showToast({ msg: '단골매장 등록이 해지되었습니다.' });
  }
}

onMounted(() => {
  if (props.added)
    isActive.value = props.added;
});
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/bookmark.scss');
</style>