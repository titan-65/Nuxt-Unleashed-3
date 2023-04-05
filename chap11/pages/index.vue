<script setup>
import { useItemsStore } from '~/store/items';

const { items, addItemsToCart, fetchDataFromServer } = useItemsStore()

console.log("ITEMS: ",items)

</script>
<template>
  <div>
    <MainHeroSection />
    <Form />
  </div>
</template>
