<template>
  <NumberField :default-value="value" :min="min" :max="max" :disabled="disabled">
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
  value?: number | undefined;
  min?: number | undefined;
  max?: number | undefined;
  disabled?: boolean;
}>(), {
  value: 1,
  min: 1,
});
</script>
