import { useItemsStore } from './store/items.ts'
<script setup>
import {useItemsStore} from '~/store/items';
import { shoppingItems } from "~/data";

const store = useItemsStore()
store.items = shoppingItems

onMounted(async () => {
  const data = await store.fetchDataFromServer()
    console.log(data)
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
