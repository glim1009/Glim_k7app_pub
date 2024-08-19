<template>
  <div class="input-box" :class="[{ 'is-disabled': disabled || readonly }, { 'has-value': isValue }, { 'is-focus': isFocused }]">
    <input
      v-model="inputValue"
      class="ui-input"
      :type="props.type"
      :title="props.title"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :readonly="props.readonly"
      :inputmode="props.inputmode"
      :maxlength="props.maxlength"
      :enterkeyhint="props.enterkeyhint"
      @focus="inputFocus"
      @blur="inputFocusout"
    />
    <button type="button" class="btn-input-del" @click="clearInput">
      <span class="offscreen">초기화</span>
    </button>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

interface ClassStates {
  value: boolean;
  focused: boolean;
  disabled: boolean;
}

const props = withDefaults(defineProps<{
  type?: 'text' | 'number' | 'search' | 'password';
  title?: string;
  placeholder?: string;
  value?: string;
  inputmode?: 'enterkey' | 'numeric' | 'tel';
  maxlength?: number;
  enterkeyhint?: 'search';
  disabled?: boolean;
  readonly?: boolean;
  initialStates?: Partial<ClassStates>;
}>(), {
  type: 'text',
});


const emit = defineEmits<{
  (e: 'input', value: string): void;
  (e: 'clear'): void;
  (e: 'classChange', className: keyof ClassStates, isActive: boolean): void;
}>();

const inputValue = ref(props.value || '');
const isValue = ref(props.initialStates?.value || false);
const isFocused = ref(props.initialStates?.focused || false);

const changeClass = (className: keyof ClassStates) => {
  switch (className) {
    case 'value':
      emit('classChange', 'value', isValue.value);
      break;
    case 'focused':
      emit('classChange', 'focused', isFocused.value);
      break;
    case 'disabled':
      emit('classChange', 'disabled', props.disabled || props.readonly);
      break;
  }
};

function inputFocus() { isFocused.value = true; changeClass('focused');}
function inputFocusout() { isFocused.value = false; changeClass('focused');}

function clearInput() {
  inputValue.value = '';
  isValue.value = false;
  emit('clear');
  changeClass('value');
}

function setInputStatus(value = inputValue.value) {
  const newVal = (typeof value === 'string') ? value : JSON.stringify(value);
  isValue.value = newVal.length > 0;
  changeClass('value');
}

watch(inputValue, (newValue) => {
  setInputStatus(newValue);
  emit('input', newValue);
});

onMounted(() => {
  setInputStatus();
  changeClass('disabled');
});
</script>

<style lang="scss" scoped>
@import url('/assets/css/components/inputBox.scss');
</style>
