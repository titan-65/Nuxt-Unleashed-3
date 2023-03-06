<script setup>
import "@picocss/pico"

const coffee = {
  name: "Coffee 1",
  selected: true
}
</script>
<template>
  <div class="container">
    <CoffeeDrinks :coffee={coffee} />
  </div>
</template>
