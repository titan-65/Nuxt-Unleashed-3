<template>
  <div class="relative z-10 flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl tails-selected-element">
    <h4 class="w-full font-serif text-4xl font-medium leading-snug">What is the latest recipe</h4>
    <div class="relative w-full mt-6 space-y-8">

      <div>
        <label for="email" class="block text-sm text-gray-500 dark:text-gray-300">Title</label>

        <div class="relative flex items-center mt-2">
        <span class="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        </span>

          <input type="text" placeholder="e.g. Frenzy Shake" class="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
        </div>
      </div>

      <div>
        <label for="Description" class="block text-sm text-gray-500 dark:text-gray-300">Description</label>

        <textarea placeholder="Enter you description" class="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>

        <p class="mt-3 text-xs text-gray-400 dark:text-gray-600">Add anything you want out this!</p>
      </div>
    </div>
    <!--    Image Upload Component-->
    <UiUploadComponent />
  </div>
</template>
