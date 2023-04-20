<script setup>
import { useItemsStore } from '~/store/items';

const { items, addItemsToCart, fetchDataFromServer } = useItemsStore()


</script>
<template>
  <div class="h-screen w-screen">
    <MainHeroSection />
    <Form />
  </div>
</template>
