import {DateFormatter} from "@internationalized/date";

export const getScrollPosition = (): number => {
  return window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
}

export const df = new DateFormatter('ko-KR', {
  dateFormat: "yyyy.MM.dd",
} as any);
