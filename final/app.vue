<script setup>
const nuxtApp = useNuxtApp()

import { useMenuStore } from './store/menu'
import { usePointStore } from './store/points'




const { location, fetchLocation, errorString, checkLocation, getLocation } = useLocation()
const { beverages, getBeverages, frozenDrinks, teaMenuItems, icedCoffeeItems } = useMenuStore()
const { calculatePoints } = usePointStore()



// console.log(store.frozenDrinks)


// const { data: todos } = await useFetch('https://jsonplaceholder.typicode.com/todos')
// console.log(todos)

// const { data: todosList } = await useAsyncData('count', () => $fetch('https://jsonplaceholder.typicode.com/todos'))
// console.log(todosList)

const client = useSupabaseClient()

let { data: beverageItem, error } = await client.from('beverageItem').select('*')

console.log("Client: ",beverageItem)

/* -------------------------------------------------------------------------- */
/*                            Retrieve data Server                            */
/* -------------------------------------------------------------------------- */

const { data: beverageItemServer } = await useAsyncData('beverages', () => $fetch('/api/supabaseItems'))

// beverages.push(beverageItemServer)


getLocation()

onMounted(() => {
  calculatePoints()
 })

</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
