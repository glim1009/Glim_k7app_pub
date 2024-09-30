<template>
  <div class="rating-group">
    <div v-for="n in total" :key="n" class="rating">
      <div
          class="rating-label"
          :class="[{ 'is-active': n <= activeNum }, {'is-click' : n === activeNum }]"
          @click="handleRatingActive(n)"
      >
        <i class="ico-rating-lg"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  total?: number;
  modelValue?: number;
}

const props = withDefaults(defineProps<Props>(), {
  total: 5,
  modelValue: 0,
});

const activeNum = ref<number>(props.modelValue);

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void;
}>();

const handleRatingActive = (index: number): void => {
  emit('update:modelValue', index);
  activeNum.value = index;
};

watch(() => props.modelValue, (newValue) => {
  activeNum.value = newValue;
});
</script>