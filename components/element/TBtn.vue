<template>
  <NuxtLink v-if="tag === 'a'" :to="to" :class="className" @click="$emit('click')">
    <slot />
  </NuxtLink>
  <component :is="tag" v-else :class="className" :disabled="props.disabled" @click="$emit('click')">
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: "underline" | "right-arw";
  size?: "lg" | "md" | "sm" | "xs"; // xs - 13px, sm - 14px, md - 15px, lg - 16px
  tag?: "button" | "a";
  name?: string;
  to?: string;
  disabled?: boolean;
}>(), {
  size: "md",
  tag: "button",
});

const emit = defineEmits(["click"]);

const className = computed(() => {
  let cNm = "tbtn";
  if (props.name)
    cNm += `-${props.name}`;
  cNm += `-${props.size}`;
  if (props.type === "underline")
    cNm += "-udl";
  if (props.type === "right-arw")
    cNm += "-right-arw";
  return cNm;
});
</script>
