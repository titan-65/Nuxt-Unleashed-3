<script setup>
import { useMenuStore } from './store/menu'

const { location, fetchLocation, errorString, checkLocation, getLocation } = useLocation()
const { beverages, getBeverages, frozenDrinks, teaMenuItems, icedCoffeeItems } = useMenuStore()

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

store.beverages = beverageItemServer


getLocation()

onMounted(() => {})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
