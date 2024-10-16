<template>
  <div class="datepicker-box">
    <Popover v-model:open="isOpen">
      <PopoverTrigger as-child>
        <button
          type="button"
          class="btn-date"
          :disabled="props.disabled"
        >
          {{ displayValue }}
          <EIco name="calendar" color="gray" size="sm" />
        </button>
      </PopoverTrigger>
      <PopoverContent class="ui-datepicker">
        <UiCalendar
          v-model="internalValue"
          is-form
          locale="ko"
          class="calendar-group"
          initial-focus
          :min-value="minValue"
          :max-value="maxValue"
          @update:model-value="handleDateSelect"
        />
      </PopoverContent>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import {
  CalendarDate,
  type DateValue,
  getLocalTimeZone,
} from "@internationalized/date";

import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";

const props = withDefaults(defineProps<{
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  minValue?: DateValue;
  maxValue?: DateValue;
}>(), {
  placeholder: "yyyy.mm.dd",
  disabled: false,
  value: "",
  minValue: undefined,
  maxValue: undefined,

});

const emit = defineEmits<{
  (e: "update:model-value", value: string): void;
}>();
const internalValue = ref<DateValue | undefined>();
const isOpen = ref(false);

const displayValue = computed((): string => {
  if (internalValue.value) {
    return df.format(internalValue.value.toDate(getLocalTimeZone()));
  }
  return props.placeholder;
});

const handleDateSelect = (value: DateValue | undefined): void => {
  internalValue.value = value;
  if (value) {
    emit("update:model-value", df.format(value.toDate(getLocalTimeZone())));
  }
  else {
    emit("update:model-value", "");
  }
  isOpen.value = false; // 날짜 선택 후 Popover 닫기
};

const updateInternalValue = (value: string | undefined): void => {
  if (value) {
    try {
      const [year, month, day] = value.split(".").map(Number);
      internalValue.value = new CalendarDate(year, month, day);
    }
    catch (error) {
      console.error("Invalid date format:", value);
      internalValue.value = undefined;
    }
  }
  else {
    internalValue.value = undefined;
  }
};

watch(() => props.value, updateInternalValue, { immediate: true });

onMounted(() => {
  updateInternalValue(props.value);
});
</script>
