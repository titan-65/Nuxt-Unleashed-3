<script setup>
import { fromJSON } from 'postcss';
import { useMenuStore } from '../store/menu'

const beveragesArray = ref(null)
const frozenDrinksArray = ref(null)
const icedCoffeeArray = ref(null) 
const teaArray = ref(null)


const { beverages, getBeverages, frozenDrinks, teaMenuItems, icedCoffeeItems } = useMenuStore()


beveragesArray.value = beverages
frozenDrinksArray.value = frozenDrinks

console.log(beverages)
console.log(frozenDrinksArray)
</script> 
<template>
    <div>
        <h1>Menu</h1>

    </div>
</template>