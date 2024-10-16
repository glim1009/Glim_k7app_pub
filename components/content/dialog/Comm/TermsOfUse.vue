<template>
  <ContDialog v-model="isOpen">
    <template #title>
      <div class="dialog-title">이용약관</div>
    </template>
    <template #body>
      <ContWrap type="white" in-top="zero" in-bottom="zero" class="side-zero">
        <TabWrap class="justify-tab" :fir-active="activeTab ? activeTab : 'service'">
          <template #tabs="{ activeTab, setActiveTab }">
            <ul class="tab-line-list">
              <li class="tab-item">
                <button type="button" class="tab-link"
                        :class="{ 'is-active': activeTab === 'service' }"
                        @click="setActiveTab('service')">
                  <span class="tab-text">서비스 이용약관</span>
                </button>
              </li>
              <li class="tab-item">
                <button type="button" class="tab-link"
                        :class="{ 'is-active': activeTab === 'privacy' }"
                        @click="setActiveTab('privacy')">
                  <span class="tab-text">개인정보 처리방침</span>
                </button>
              </li>
            </ul>
          </template>
          <template #default="{ activeTab }">
            <ContWrap type="white" in-top="md" v-if="activeTab === 'service'">
              <ContBox size="sm">
                <div class="ui-select">
                  <select title="서비스 이용약관 버전 선택">
                    <option selected>YYYY.MM.DD</option>
                    <option>2024.08.01</option>
                    <option>2024.07.01</option>
                    <option>2024.06.01</option>
                  </select>
                </div>
              </ContBox>
              <ContBox size="sm">
                <div class="editor-wrap">
                  <!-- 개발 시 삭제 영역 -->
                  <div style="height: 300px; background: rgba(255, 0, 0, .2);">
                    서비스 이용약관 내용은 에디터로 입력됩니다.
                    <br>
                    에디터영역 확인을 위한 임시 div입니다.<br>
                    개발시 해당 div 삭제 후 작업해 주세요.
                  </div>
                  <!-- // 개발 시 삭제 영역 -->
                </div>
              </ContBox>
            </ContWrap>
            <ContWrap type="white" in-top="md" v-if="activeTab === 'privacy'">
              <ContBox size="sm">
                <div class="ui-select">
                  <select title="개인정보 처리방침 버전 선택">
                    <option selected>YYYY.MM.DD</option>
                    <option>2024.08.01</option>
                    <option>2024.07.01</option>
                    <option>2024.06.01</option>
                  </select>
                </div>
              </ContBox>
              <ContBox size="sm">
                <div class="editor-wrap">
                  <!-- 개발 시 삭제 영역 -->
                  <div style="height: 300px; background: rgba(255, 0, 0, .2);">
                    개인정보 처리방침 내용은 에디터로 입력됩니다.
                    <br>
                    에디터영역 확인을 위한 임시 div입니다.<br>
                    개발시 해당 div 삭제 후 작업해 주세요.
                  </div>
                  <!-- // 개발 시 삭제 영역 -->
                </div>
              </ContBox>
            </ContWrap>
          </template>
        </TabWrap>
      </ContWrap>
    </template>
  </ContDialog>
</template>

<script setup lang="ts">
interface DialogState {
  open: boolean;
}

const props = defineProps<{
  sta: DialogState;
  activeTab?: string | undefined;
}>();

const emit = defineEmits(["update:sta"]);

const isOpen = computed({
  get: () => props.sta.open,
  set: (value) => emit("update:sta", { ...props.sta, open: value }),
});

const closeDialog = () => {
  isOpen.value = false;
};
</script>
