<script setup lang="ts">
let isOpen = ref(false)
let showModal = ref(false)
</script>
<template>
    <div class="relative inline-block ">
        <!-- Dropdown toggle button -->
        <button @click="isOpen = !isOpen" class="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
        </button>

        <!-- Dropdown menu -->
        <div
            v-show="isOpen"
             class="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 modal-animation-enter-active modal-animation-leave-active"
        >
            <a href="#"
               @click="showModal = !showModal"
               class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                Edit
            </a>

            <NotificationModal :modal-active="showModal">

                            <h2 class="text-2xl mb-4">Modal Title</h2>
                            <p>Modal Content</p>

                            <button @click="showModal = false">Close Modal</button>

            </NotificationModal>
        </div>
    </div>
</template>
<style>
    .modal-animation-enter-active, .modal-animation-leave-active {
        transition: opacity 0.5s;
    }
    .modal-animation-enter, .modal-animation-leave-to {
        opacity: 0;
    }

</style>

<!--x-transition:enter="transition ease-out duration-100"-->
<!--x-transition:enter-start="opacity-0 scale-90"-->
<!--x-transition:enter-end="opacity-100 scale-100"-->
<!--x-transition:leave="transition ease-in duration-100"-->
<!--x-transition:leave-start="opacity-100 scale-100"-->
<!--x-transition:leave-end="opacity-0 scale-90"-->