<script setup lang="ts"></script>
<template>
  <main class="flex flex-col min-h-screen">
    <UiHomeHeader />
    <div class="flex-1 flex flex-row border">
      <UiSidebar />
      <div
        class="max-w-7xl px-5 py-20 flex space-x-5 w-full h-full items-center justify-center mx-auto"
      >
        <UiMainContent>
          <slot />
        </UiMainContent>
      </div>
      <!-- Post Component-->
      <UiPost />
    </div>
  </main>
</template>
