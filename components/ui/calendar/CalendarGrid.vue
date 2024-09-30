<template>
  <CalendarGrid
    v-bind="forwardedProps"
  >
    <slot></slot>
  </CalendarGrid>
</template>

<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue';
import { CalendarGrid, type CalendarGridProps, useForwardProps } from 'radix-vue';

const props = defineProps<CalendarGridProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
