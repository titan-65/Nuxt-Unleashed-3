<script setup lang="ts">
// const switchNavigation = () => {
//   const currentPath = window.location.pathname;
//   const links = document.querySelectorAll(".flex a");
//   links.forEach((link) => {
//     if (link.getAttribute("href") === currentPath) {
//       link.classList.add("border-b-2", "dark:border-blue-400", "dark:text-white");
//     }
//   });
// };
const route = useRoute();
const isActive = computed(() => {
  return (path: string) => {
    return route.path === path;
  };
});
</script>
<template>
  <div>
    <div class="flex items-center justify-center mt-6">
      <NuxtLink
        to="/account/signin"
        :class="{
          'border-b-2 border-blue-400 dark:text-white':
            isActive('/account/signin'),
        }"
        class="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300"
      >
        sign in
      </NuxtLink>

      <NuxtLink
        to="/account/register"
        :class="{
          'border-b-2 border-blue-400 dark:text-white':
            isActive('/account/register'),
        }"
        class="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 dark:border-blue-400 dark:text-white"
      >
        sign up
      </NuxtLink>
    </div>
  </div>
</template>
