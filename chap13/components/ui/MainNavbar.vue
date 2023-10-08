<template>
  <div class="w-full px-8 text-gray-700 body-font">
    <div
      class="container flex flex-col items-center justify-between py-5 mx-auto max-w-7xl md:flex-row"
    >
      <NuxtLink
        to="/"
        class="inline-block font-sans text-2xl font-extrabold text-left text-black no-underline bg-transparent cursor-pointer focus:no-underline"
      >
        NuxtBook
      </NuxtLink>
      <div
        class="inline-flex items-center md:ml-5 lg:mt-0 mt-6 space-x-6 lg:w-2/5 lg:justify-end lg:ml-0"
      >
        <NuxtLink
          to="/account/profile"
          class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-gray-900 border border-transparent shadow-sm rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >Book Up</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
