<template>
  <div class="all-agree-wrap">
    <div class="all-check">
      <span class="ui-chk">
        <input :id="'allAgreeChk'+index" type="checkbox" v-model="allChecked" @change="handleAllCheck" />
        <label :for="'allAgreeChk'+index">
          <span class="text-lg">전체동의</span>
        </label>
      </span>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';

const props = defineProps<{
  index: number | string;
  totalCount: number;
  checkCount: number;
}>();

const emit = defineEmits(['update:checkCount']);

const allChecked = ref(false);
// 전체 동의 체크박스 핸들러
const handleAllCheck = () => {
  emit('update:checkCount', allChecked.value ? props.totalCount : 0);
};

// props.checkCount가 변경될 때마다 allChecked 상태 업데이트
watch(() => props.checkCount, (newCount) => {
  allChecked.value = newCount === props.totalCount;
});

// 모든 항목이 체크되었는지 계산
const isAllChecked = computed(() => {
  return props.checkCount === props.totalCount;
});

// isAllChecked가 변경될 때마다 allChecked 상태 업데이트
watch(isAllChecked, (newValue) => {
  allChecked.value = newValue;
});
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/agree.scss');
</style>
