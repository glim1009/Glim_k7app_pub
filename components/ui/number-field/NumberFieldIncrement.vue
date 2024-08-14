<template>
  <NumberFieldIncrement data-slot="increment" v-bind="forwarded" :class="cn('btn-plus', props.class)" />
</template>

<script setup lang="ts">
import type { NumberFieldIncrementProps } from 'radix-vue';
import { NumberFieldIncrement, useForwardProps } from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps<NumberFieldIncrementProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardProps(delegatedProps);
</script>
