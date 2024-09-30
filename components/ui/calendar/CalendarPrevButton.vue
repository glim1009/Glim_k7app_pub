<template>
  <CalendarPrev
    :class="cn(props.class)"
    v-bind="forwardedProps"
  >
    <slot></slot>
  </CalendarPrev>
</template>

<script lang="ts" setup>
import { type HTMLAttributes, computed } from 'vue';
import { CalendarPrev, type CalendarPrevProps, useForwardProps } from 'radix-vue';
import { cn } from '@/lib/utils';

const props = defineProps<CalendarPrevProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>
