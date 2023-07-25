<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style lang="scss">
:root {
  --color--primary--h: 195deg;
  --color--primary--s: 77%;
  --color--primary--l: 39%;
}

.page-enter-active,
.page-leave-active {
  // Example One of using transition
  transition: all 0.4s;

  // Example Two of using transition
  // transform: scale(1);
}
.page-enter-from,
.page-leave-to {
  // Example Three of using transition
  opacity: 0;
  filter: blur(1rem);

  // Example Four of using transition
  //transform: scale(0.5);
  //transition: transform 0.4s;
}
/* ... */
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>
