<template>
  <div class="app-container">
    <Sidebar />
    <div class="content-container">
      <MainHeader />
      <slot />
      <MainFooter />
    </div>
  </div>
</template>

<script setup></script>

<style>
.app-container {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.content-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

@media (max-width: 767px) {
  .app-container {
    flex-direction: column;
  }
}
</style>
