<template>
  <CalendarHeadCell v-bind="forwardedProps">
    <slot></slot>
  </CalendarHeadCell>
</template>

<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue';
import { CalendarHeadCell, type CalendarHeadCellProps, useForwardProps } from 'radix-vue';

const props = defineProps<CalendarHeadCellProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
