<script setup>

import { useMenuStore } from './store/menu'
import { usePointStore } from './store/points';
import { useUserStore } from './store/user';


const nuxtApp = useNuxtApp()
const client = useSupabaseClient()
const route = useRoute()

console.log(route.path)

const { api, currentSession, currentUser } = client.auth

const { location, fetchLocation, errorString, checkLocation, getLocation } = useLocation()
const { beverages, getBeverages, frozenDrinks, teaMenuItems, icedCoffeeItems } = useMenuStore()
const { calculatePoints, earnedRewardPoint } = usePointStore()

const { trackUser, nuxtinUser, cookiesOptions, sessionTracking, getTrackUser, addNuxtinUser, addSession, addTrackUser } = useUserStore()

const user = useSupabaseUser() 
console.log(user)

// const { data: todos } = await useFetch('https://jsonplaceholder.typicode.com/todos')
// console.log(todos)

// const { data: todosList } = await useAsyncData('count', () => $fetch('https://jsonplaceholder.typicode.com/todos'))
// console.log(todosList)

console.log(client)

let { data: beverageItem, error } = await client.from('beverageItem').select('*')

// console.log("Client: ",beverageItem)

/* -------------------------------------------------------------------------- */
/*                            Retrieve data Server                            */
/* -------------------------------------------------------------------------- */

const { data: beverageItemServer } = await useAsyncData('beverages', () => $fetch('/api/supabaseItems'))

// beverages.push(beverageItemServer)


getLocation()

onMounted(() => {
  calculatePoints()
  addSession(currentSession)
  addNuxtinUser(currentUser)
  addNuxtinUser(route.path)
 })

</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
