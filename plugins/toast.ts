import { useToast } from "~/composables/useFrontPub";

export default defineNuxtPlugin(() => {
  const { showToast } = useToast();

  return {
    provide: {
      showToast,
    },
  };
});
