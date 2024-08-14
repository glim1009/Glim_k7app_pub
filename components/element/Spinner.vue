<template>
  <NumberField :default-value="props.value" :min="props.min" :max="props.max">
    <NumberFieldContent>
      <NumberFieldDecrement />
      <NumberFieldInput />
      <NumberFieldIncrement />
    </NumberFieldContent>
  </NumberField>
</template>

<script setup lang="ts">
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/components/ui/number-field';

const props = withDefaults(defineProps<{
  value?: string | number;
  min?: string | number;
  max?: string | number;
}>(), {
  value: 1,
  min: 1,
});
</script>
