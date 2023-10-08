<script setup>
import { useItemsStore } from "~/store/items";

const store = useItemsStore();

onMounted(async () => {
  await store.fetchDataFromServer();
  // store.items = data;
  console.log(store.getItems);
  console.log(store.items);
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
