<script setup>
const { data } = await useFetch('/api/fetch-questions')

console.log(data)
</script>
<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
