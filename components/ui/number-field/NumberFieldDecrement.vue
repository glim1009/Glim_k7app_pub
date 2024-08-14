<template>
  <NumberFieldDecrement data-slot="decrement" v-bind="forwarded" :class="cn('btn-minus', props.class)" />
</template>

<script setup lang="ts">
import type { NumberFieldDecrementProps } from 'radix-vue';
import { NumberFieldDecrement, useForwardProps } from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps<NumberFieldDecrementProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardProps(delegatedProps);
</script>
