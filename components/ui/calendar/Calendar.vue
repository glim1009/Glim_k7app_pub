<template>
  <CalendarRoot
    v-slot="{ grid, date, weekDays }"
    :placeholder="internalDate"
    :class="cn(props.class)"
    v-bind="forwarded"
    :is-date-unavailable="isDateUnavailable"
    @update:model-value="handleDateSelect"
  >
    <CalendarHeader v-if="!notHeader" class="calendar-header">
      <CalendarPrevButton class="btn-calendar-prev" @click="updateInternalDate(-1)" />
      <CalendarHeading v-if="!isForm" class="calendar-heading" />
      <CalendarHeading v-if="isForm" class="calendar-heading">
        <div class="ui-select type-text">
          <select
            title="년 선택"
            :value="internalDate.year"
            @change="(e:any) => updateInternalYear(Number(e.target.value))"
          >
            <option
              v-for="yearValue in createDecade({ dateObj: date, startIndex: -10, endIndex: 10 })"
              :key="yearValue.toString()"
              :value="yearValue.year.toString()"
              :selected="yearValue.year.toString() === internalDate.year.toString()"
            >
              {{ yearValue.year }}년
            </option>
          </select>
        </div>
        <div class="ui-select type-text">
          <select
            title="월 선택"
            :value="internalDate.month"
            @change="(e:any) => updateInternalMonth(Number(e.target.value))"
          >
            <option
              v-for="month in createYear({ dateObj: date })"
              :key="month.toString()"
              :value="month.month.toString()"
              :selected="month.month.toString() === internalDate.month.toString()"
            >
              {{ formatter.custom(toDate(month), { month: 'long' }) }}
            </option>
          </select>
        </div>
      </CalendarHeading>
      <CalendarNextButton class="btn-calendar-next" @click="updateInternalDate(1)" />
    </CalendarHeader>

    <CalendarGrid v-for="month in grid" :key="month.value.toString()">
      <CalendarGridHead>
        <CalendarGridRow>
          <CalendarHeadCell
            v-for="day in weekDays"
            :key="day"
          >
            {{ day }}
          </CalendarHeadCell>
        </CalendarGridRow>
      </CalendarGridHead>
      <CalendarGridBody>
        <CalendarGridRow v-for="(weekDates, index) in month.rows" :key="`weekDate-${index}`">
          <CalendarCell
            v-for="weekDate in weekDates"
            :key="weekDate.toString()"
            :date="weekDate"
          >
            <CalendarCellTrigger
              :day="weekDate"
              :month="month.value"
            />
          </CalendarCell>
        </CalendarGridRow>
      </CalendarGridBody>
    </CalendarGrid>
  </CalendarRoot>
</template>

<script lang="ts" setup>
import { type HTMLAttributes, computed } from "vue";
import { CalendarRoot, type CalendarRootEmits, type CalendarRootProps, useDateFormatter, useForwardPropsEmits } from "radix-vue";
import { createDecade, createYear, toDate } from "radix-vue/date";
import { type DateValue, getLocalTimeZone, today } from "@internationalized/date";
import { CalendarCell, CalendarCellTrigger, CalendarGrid, CalendarGridBody, CalendarGridHead, CalendarGridRow, CalendarHeadCell, CalendarHeader, CalendarHeading, CalendarNextButton, CalendarPrevButton } from ".";
import { cn } from "@/lib/utils";

interface CustomProps {
  isForm?: boolean;
  notHeader?: boolean;
  minValue?: DateValue;
  maxValue?: DateValue;
  unavailableDates?: string[];
  availableDates?: string[];
}

const props = withDefaults(defineProps<CalendarRootProps & CustomProps & { class?: HTMLAttributes["class"] }>(), {
  modelValue: undefined,
  placeholder: () => today(getLocalTimeZone()),
  weekdayFormat: "short",
  isForm: false,
  notHeader: false,
  minValue: undefined,
  maxValue: undefined,
  unavailableDates: () => [],
  availableDates: () => [],
});

const emits = defineEmits<CalendarRootEmits>();

const modelValue = computed(() => props.modelValue);

const delegatedProps = computed(() => {
  const { class: _, placeholder: __, ...delegated } = props;
  return delegated;
});

// internalDate를 modelValue나 placeholder로 초기화
const internalDate = ref<DateValue>(modelValue.value || props.placeholder || today(getLocalTimeZone()));

const updateInternalYear = (year: number) => {
  internalDate.value = internalDate.value.set({ year });
};

const updateInternalMonth = (month: number) => {
  internalDate.value = internalDate.value.set({ month });
};

const updateInternalDate = (change: number) => {
  internalDate.value = internalDate.value.add({ months: change });
};

watch(() => props.modelValue, (newValue) => {
  if (newValue)
    internalDate.value = newValue;
});

const compareDates = (date1: DateValue, date2: DateValue): number => {
  if (date1.year !== date2.year)
    return date1.year - date2.year;
  if (date1.month !== date2.month)
    return date1.month - date2.month;
  return date1.day - date2.day;
};

// 날짜 문자열을 정규화하는 함수 추가 ( YYYY.MM.DD 형식으로 변환 )
const normalizeDate = (dateString: string): string => {
  const [year, month, day] = dateString.split(".");
  return `${year}.${month.padStart(2, "0")}.${day.padStart(2, "0")}`;
};
// 날짜를 문자열로 변환
const dateToString = (date: DateValue): string => {
  return `${date.year}.${String(date.month).padStart(2, "0")}.${String(date.day).padStart(2, "0")}`;
};

const normalizedUnavailableDates = computed(() =>
  props.unavailableDates.map(normalizeDate),
);

const normalizedAvailableDates = computed(() =>
  props.availableDates.map(normalizeDate),
);

// isDateUnavailable 함수 수정
const isDateUnavailable = (date: DateValue): boolean => {
  const dateString = dateToString(date);

  if (normalizedAvailableDates.value.length > 0) {
    return !normalizedAvailableDates.value.includes(dateString);
  }

  if (normalizedUnavailableDates.value.length > 0) {
    return normalizedUnavailableDates.value.includes(dateString);
  }

  if (props.minValue && date < props.minValue) {
    return true;
  }

  if (props.maxValue && date > props.maxValue) {
    return true;
  }

  return false;
};

const handleDateSelect = (date: DateValue | undefined) => {
  if (date && isDateUnavailable(date)) {
    emits("update:modelValue", date);
    internalDate.value = date;
  }
};

const forwarded = useForwardPropsEmits(delegatedProps, emits);
const formatter = useDateFormatter("ko");
</script>
