<script setup>
import { fromJSON } from 'postcss';
import { useMenuStore } from '../store/menu'

const beveragesArray = ref(null)
const frozenDrinksArray = ref(null)
const icedCoffeeArray = ref(null) 
const teaArray = ref(null)


const { beverages, getBeverages, getFrozenDrinks, getIcedCoffee, frozenDrinks, teaMenuItems, icedCoffeeItems } = useMenuStore()


beveragesArray.value = beverages
frozenDrinksArray.value = frozenDrinks


console.log("frozen-drinks", getFrozenDrinks)
</script> 
<template>
    <div>
        <h1>Menu</h1>
        <div v-for="(items, i) in getFrozenDrinks">
             <h1>
                {{ items.title }}
             </h1>
        </div>
    </div>
</template>