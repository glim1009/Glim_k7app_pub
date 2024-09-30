<template>
  <CalendarHeader :class="cn(props.class)" v-bind="forwardedProps">
    <slot></slot>
  </CalendarHeader>
</template>

<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue';
import { CalendarHeader, type CalendarHeaderProps, useForwardProps } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps<CalendarHeaderProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
