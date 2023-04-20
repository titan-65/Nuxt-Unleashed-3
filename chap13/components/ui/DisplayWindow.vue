<script setup lang="ts">
// Array of objects
const displayWindowItems = [
  {
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    title: "ceodev",
    subtitle: "John Doe",
    status: "online",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    title: "ceodev",
    subtitle: "John Doe",
    status: "online",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    title: "ceodev",
    subtitle: "John Doe",
    status: "online",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    title: "ceodev",
    subtitle: "John Doe",
    status: "online",
  },
];
</script>
<template>
  <div
    class="h-auto mx-auto w-full max-w-3xl xl:max-w-4xl border-2 border-b-0 border-gray-300 md:rounded-lg md:rounded-b-none"
  >
    <div
      class="h-10 flex items-center pl-3.5 justify-start border-b bg-gray-200 border-gray-200 w-full"
    >
      <div class="flex space-x-1.5">
        <div class="w-3 h-3 bg-red-400 rounded-full"></div>
        <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div class="w-3 h-3 bg-green-400 rounded-full"></div>
      </div>
    </div>

    <div class="flex items-start space-x-5 w-full p-5">
      <div
        class="rounded-lg border-2 border-gray-900 w-1/2 md:w-1/3 xl:w-1/4 overflow-hidden"
        v-for="item in displayWindowItems"
        ß
        :key="item.title"
      >
        <img :src="item.image" class="w-full" />
        <div class="px-4 py-3 flex">
          <div
            class="rounded-full relative w-10 h-10 mr-3 hidden md:flex overflow-hidden items-center justify-center bg-gray-200"
          >
            <div class="rounded-full bg-gray-400 w-4 h-4 absolute"></div>
            <div
              class="rounded-full bg-gray-400 w-10 h-20 translate-y-12 absolute"
            ></div>
          </div>
          <div class="relative">
            <h4 class="font-semibold leading-tight">{{ item.title }}</h4>
            <p class="text-sm text-blue-500 medium">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
