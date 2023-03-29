import { useItemsStore } from './store/items.ts'
<script setup>
import { useItemsStore } from './store/items';

const { items, addItemsToCart, fetchDataFromServer } = useItemsStore()


</script>
<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
