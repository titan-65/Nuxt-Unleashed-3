<script setup lang="ts">
import { useItemsStore } from "~/store/items";

const { items, clearCart } = useItemsStore();
</script>
<template>
  <section class="flex items-center flex-1">
    <div class="flex flex-col w-full">
      <h1 class="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
        <span
          class="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500"
        >
          Personal
        </span>

        <span
          class="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500"
        >
          Shopping
        </span>

        <span
          class="text-transparent bg-gradient-to-tr bg-clip-text from-yellow-500 via-red-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500"
        >
          Target
        </span>
      </h1>

      <p
        class="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl"
      >
        Adding a new product to your shopping cart is easy.
      </p>

      <div
        class="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0"
      >
        <button
          @click="clearCart"
          class="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2"
        >
          Clear
        </button>
      </div>

      <div class="flex flex-row pt-10">
        <span
          class="inline-block w-6 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1 mx-auto"
          >{{ items.length }}</span
        >
      </div>
    </div>
  </section>
</template>
