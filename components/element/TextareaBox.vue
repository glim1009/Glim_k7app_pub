<template>
  <div class="textarea-box" :class="[{ 'is-disabled': disabled || readonly }, { 'is-focus': isFocused }]">
    <textarea
      class="ui-textarea"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :readonly="props.readonly"
      :value="inputValue"
      :maxlength="maxLength"
      @input="updateValue"
      @focus="areaFocus"
      @blur="areaFocusout"
    />
    <div v-if="maxLength" class="byte-check">
      <span class="count">{{ inputValue.length }}</span>
      <span class="total">{{ maxLength }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  readonly?: boolean;
  maxLength?: number;
  modelValue?: string;
}>(), {
  modelValue: "",
});

const emit = defineEmits<{
  (e: "input", value: string | number): void;
  (e: "update:modelValue", value: string | number): void;
}>();
const isFocused = ref(false);
const isValue = ref(false);
const inputValue = ref(props.value || props.modelValue || "");

// eslint-disable-next-line style/max-statements-per-line
function areaFocus() { isFocused.value = true; }

// eslint-disable-next-line style/max-statements-per-line
function areaFocusout() { isFocused.value = false; }

function setTextareaStatus(value = inputValue.value) {
  isValue.value = value.length > 0;
}

function inputMaxLength(value: number | string): string {
  return props.maxLength ? String(value).slice(0, props.maxLength) : String(value);
}

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.value;
  setTextareaStatus(value);
  emit("input", value);
  emit("update:modelValue", value);
  inputValue.value = value;
};

watch(() => props.modelValue, (newValue) => {
  if (newValue !== inputValue.value) {
    inputValue.value = newValue || "";
    setTextareaStatus(inputValue.value);
  }
});

watch(() => props.value, (newValue) => {
  if (newValue !== inputValue.value) {
    inputValue.value = newValue || "";
    setTextareaStatus(inputValue.value);
  }
});

onMounted(() => {
  setTextareaStatus(inputValue.value);
});
</script>

<style lang="scss" scoped>
@import url("/assets/css/components/textareaBox.scss");
</style>
