<template>
  <ContWrap class="side-zero" in-top="sm">
    <TabWrap class="justify-tab">
      <template #tabs>
        <ul class="tab-list">
          <li class="tab-item">
            <NuxtLink class="tab-link" to="/keep/home/voucher" exact-active-class="is-active">
              <span class="tab-text">금액권 목록</span>
            </NuxtLink>
          </li>
          <li class="tab-item">
            <NuxtLink class="tab-link" to="/keep/home/voucher/register" exact-active-class="is-active">
              <span class="tab-text">이용등록</span>
            </NuxtLink>
          </li>
          <li class="tab-item">
            <NuxtLink class="tab-link" to="/keep/home/voucher/note" exact-active-class="is-active">
              <span class="tab-text">유의사항</span>
            </NuxtLink>
          </li>
        </ul>
      </template>
      <NuxtPage/>
    </TabWrap>
  </ContWrap>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>

</style>
