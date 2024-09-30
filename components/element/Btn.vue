<template>
  <NuxtLink v-if="tag === 'a'" :to="to" :class="className">
    <slot />
  </NuxtLink>
  <component :is="tag" v-else :class="className" :disabled="props.disabled">
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  color?: "green" | "gray" | "light-green" | "light-gray" | "line-green" | "line-orange" | "line-gray" | "line-light-gray";
  size?: "lg" | "md" | "sm" | "xs"; // height | lg - 54px , md - 44px , sm - 36px , xs - 30px
  tag?: "button" | "a";
  to?: string;
  disabled?: boolean;
}>(), {
  size: "md",
  color: "green",
  tag: "button",
});

const className = computed(() => {
  let cNm = "btn";
  cNm += `-${props.color}`;
  cNm += `-${props.size}`;
  return cNm;
});
</script>
