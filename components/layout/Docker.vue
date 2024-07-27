<template>
  <div class="docker-wrapper">
    <!-- docker-list -->
    <ul class="docker-list">
      <!-- docker-item -->
      <li class="docker-item">
        <NuxtLink to="/" class="docker-link">
          <EIco name="home" />
          <span class="text">홈</span>
        </NuxtLink>
      </li>
      <!-- // docker-item -->
      <!-- docker-item -->
      <li class="docker-item">
        <NuxtLink to="javascript:" class="docker-link">
          <EIco name="box" />
          <span class="text">쏘옥보관</span>
        </NuxtLink>
      </li>
      <!-- // docker-item -->
      <!-- docker-item -->
      <li class="docker-item barcode">
        <NuxtLink to="javascript:" class="docker-link">
          <EIco name="barcode"><span class="offscreen">통합바코드로 이동</span></EIco>
        </NuxtLink>
      </li>
      <!-- // docker-item -->
      <!-- docker-item -->
      <li class="docker-item">
        <NuxtLink to="javascript:" class="docker-link">
          <EIco name="user" />
          <span class="text">마이</span>
        </NuxtLink>
      </li>
      <!-- // docker-item -->
      <!-- docker-item -->
      <li class="docker-item">
        <NuxtLink to="javascript:" class="docker-link">
          <EIco name="menu" />
          <span class="text">전체보기</span>
        </NuxtLink>
      </li>
      <!-- // docker-item -->
    </ul>
    <!-- // docker-list -->
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import url('@/assets/css/layout/docker.scss');
</style>
