<template>
  <ContDialog v-model="isOpen" content-class="ui-dialog-full">
    <template #title>
      <div class="dialog-title">
        택배 이용안내
      </div>
    </template>
    <template #body>
      <div class="dialog-inner">
        <TabWrap fir-active="normal">
          <template #tabs="{ activeTab, setActiveTab }">
            <SwiperAutoWrap type="line">
              <swiper-slide class="tab-item">
                <button
                  type="button" class="tab-link"
                  :class="{ 'is-active': activeTab === 'normal' }"
                  @click="setActiveTab('normal')"
                >
                  <span class="tab-text">일반택배</span>
                </button>
              </swiper-slide>
              <swiper-slide class="tab-item">
                <button
                  type="button" class="tab-link"
                  :class="{ 'is-active': activeTab === 'kind' }"
                  @click="setActiveTab('kind')"
                >
                  <span class="tab-text">착한택배</span>
                </button>
              </swiper-slide>
            </SwiperAutoWrap>
          </template>
          <template #default="{ activeTab }">
            <ContWrap v-if="activeTab === 'normal'" class="side-zero" in-top="sm" :type="contType">
              <PopDeliveryTabInfoNormal @tab-change="(tab) => handleTabChange('normal', tab)" />
            </ContWrap>
            <ContWrap v-if="activeTab === 'kind'" class="side-zero" in-top="sm" :type="contType">
              <PopDeliveryTabInfoKind @tab-change="(tab) => handleTabChange('kind', tab)" />
            </ContWrap>
          </template>
        </TabWrap>
      </div>
    </template>
  </ContDialog>
</template>

<script setup lang="ts">
interface DialogState {
  open: boolean;
}

const props = defineProps<{
  sta: DialogState;
}>();

const emit = defineEmits(["update:sta"]);

const isOpen = computed({
  get: () => props.sta.open,
  set: value => emit("update:sta", { ...props.sta, open: value }),
});

const contType = ref<string>("white");
const handleTabChange = (component: "normal" | "kind", value: string) => {
  if ((component === "normal" && value === "tab3") || (component === "kind" && value === "tab6")) {
    contType.value = "default";
  }
  else if (contType.value !== "white") {
    contType.value = "white";
  }
};
</script>
