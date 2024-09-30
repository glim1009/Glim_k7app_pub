<template>
  <div class="input-box" :class="[{ 'is-disabled': disabled || readonly }, { 'has-value': hasValue }, { 'is-focus': isFocused }]">
    <input
      v-if="!maxLength"
      class="ui-input"
      :type="type"
      :title="title"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :inputmode="inputModeValue"
      :enterkeyhint="enterkeyhint"
      :value="inputValue"
      @input="updateValue"
      @focus="inputFocus"
      @blur="inputFocusout"
    >

    <input
      v-else
      class="ui-input"
      :type="type"
      :title="title"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :inputmode="inputModeValue"
      :maxlength="maxLength"
      :enterkeyhint="enterkeyhint"
      :value="inputValue"
      oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
      @input="updateValue"
      @focus="inputFocus"
      @blur="inputFocusout"
    >

    <button type="button" class="btn-input-del" @click="clearInput">
      <span class="offscreen">초기화</span>
    </button>
    <div v-if="maxLength && isByteCheck" class="byte-check">
      <span class="count">{{ inputValue.length }}</span>
      <span class="total">{{ maxLength }}</span>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface ClassStates {
  value: boolean;
  focused: boolean;
  disabled: boolean;
}

const props = withDefaults(defineProps<{
  type?: "text" | "number" | "search" | "password";
  title?: string;
  placeholder?: string;
  value?: string;
  maxLength?: number;
  enterkeyhint?: "search";
  disabled?: boolean;
  readonly?: boolean;
  modelValue?: string;
  inputmode?: "text" | "search" | "numeric" | "email" | "tel" | "url" | "none" | "decimal" | undefined;
  initialStates?: Partial<ClassStates>;
  isByteCheck: boolean;
}>(), {
  type: "text",
  modelValue: "",
  isByteCheck: false,
});

const emit = defineEmits<{
  (e: "input", value: string | number): void;
  (e: "update:modelValue", value: string | number): void;
  (e: "clear"): void;
  (e: "classChange", className: keyof ClassStates, isActive: boolean): void;
}>();

const inputModeValue = computed(() => {
  if (props.type === "number")
    return "numeric";
  if (props.type === "search")
    return "search";
  return props.inputmode;
});

const inputValue = ref(props.value || props.modelValue || "");
const isFocused = ref(props.initialStates?.focused || false);
const hasValue = ref(inputValue.value.length > 0);

const changeClass = (className: keyof ClassStates) => {
  switch (className) {
    case "value":
      emit("classChange", "value", hasValue.value);
      break;
    case "focused":
      emit("classChange", "focused", isFocused.value);
      break;
    case "disabled":
      emit("classChange", "disabled", props.disabled || props.readonly);
      break;
  }
};

function inputFocus() {
  isFocused.value = true;
  changeClass("focused");
}

function inputFocusout() {
  isFocused.value = false;
  changeClass("focused");
}

function clearInput() {
  inputValue.value = "";
  hasValue.value = false;
  emit("clear");
  emit("update:modelValue", "");
  changeClass("value");
}

const setInputStatus = (value: string) => {
  hasValue.value = value.length > 0;
  changeClass("value");
};

const inputMaxLength = (value: string | undefined) => {
  if (props.type !== "number")
    return value;
  return props.maxLength ? value?.replace(/\D/g, "").slice(0, props.maxLength) : value?.replace(/\D/g, "");
};

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  let value = target.value;

  if (props.type === "number") {
    value = inputMaxLength(value);
  }

  setInputStatus(value);
  emit("input", value);
  emit("update:modelValue", value);
  inputValue.value = value;
};

watch(() => props.modelValue, (newValue) => {
  if (newValue !== inputValue.value) {
    inputValue.value = newValue || "";
    setInputStatus(inputValue.value);
  }
});

watch(() => props.value, (newValue) => {
  if (newValue !== inputValue.value) {
    let value = newValue;
    if (props.type === "number")
      value = inputMaxLength(String(newValue));
    inputValue.value = value || "";
    setInputStatus(inputValue.value);
  }
});

onMounted(() => {
  if (props.type === "number")
    inputValue.value = inputMaxLength(String(inputValue.value));
  setInputStatus(inputValue.value);
});
</script>

<style lang="scss" scoped>
@import url("/assets/css/components/inputBox.scss");
</style>
