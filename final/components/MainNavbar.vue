<script setup lang="tsx">
const isOpen = ref(false)
const user = useSupabaseUser()

</script>
<template>
    <div>
        <!-- Navbar -->
    <nav
      x-data="{ isOpen: false }"
      class="relative bg-white border-b dark:bg-gray-800"
    >
      <div
        class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <!-- Mobile menu button -->
          <div class="flex lg:hidden">
            <button
              x-cloak
              @click="isOpen = !isOpen"
              type="button"
              class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg
                x-show="!isOpen"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>

              <svg
                x-show="isOpen"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          x-cloak
          :class="[
            isOpen
              ? 'translate-x-0 opacity-100 '
              : 'opacity-0 -translate-x-full',
          ]"
          class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center"
        >
          <div class="flex flex-col md:flex-row md:mx-6">
            <button
              class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Perks
            </button>
          </div>

          <div class="flex justify-center md:block" v-if="!user">
            <div>
              <button
              class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              <NuxtLink to="/account/register">
                Signin
              </NuxtLink>
              
            </button>
            </div>
          </div>
          <div class="flex justify-center md:block" v-else>
            <div>
              <button
              class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
            <NuxtLink to="/account">
              Account
            </NuxtLink>
        
            </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
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
            isOpen
              ? 'translate-x-0 opacity-100 '
              : 'opacity-0 -translate-x-full',
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
    </div>
</template>