<template>
  <CalendarCell
    v-bind="forwardedProps"
  >
    <slot></slot>
  </CalendarCell>
</template>

<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue';
import { CalendarCell, type CalendarCellProps, useForwardProps } from 'radix-vue';

const props = defineProps<CalendarCellProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
