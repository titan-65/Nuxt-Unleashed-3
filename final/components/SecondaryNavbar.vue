<template>
  <!-- Second Nav -->
  <nav
    x-data="{ isOpen: false }"
    class="relative bg-white shadow dark:bg-gray-800"
  >
    <div
      class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <div>
          <NuxtLink
            class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            to="menu"
            >Menu</NuxtLink
          >
          <NuxtLink
            class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            to="locations"
            >Location</NuxtLink
          >
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div>
          <NuxtLink
            class="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
            to="/"
            >Nuxtin</NuxtLink
          >
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div
        x-cloak
        :class="[
          isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full',
        ]"
        class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
      >
        <div class="flex flex-col md:flex-row md:mx-6">
          <NuxtLink
            class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            to="n-perk"
            >NPerks</NuxtLink
          >
          <NuxtLink
            class="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
            to="delivery"
            >Delivery</NuxtLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>
