<script setup lang="ts">
const { data } = await useFetch('/api/recipes')
</script>
<template>
  <section class="w-full bg-white overflow-y-auto max-h-screen">
    <div class="max-w-3xl pb-8 mx-auto font-serif md:py-12 lg:py-16 flex-1 flex flex-row overflow-y-auto" >

      <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 m-5" v-for="recipe in data.recipes" :key="recipe.id">
        <img class="object-cover w-full h-72" src="https://images.unsplash.com/photo-1500315331616-db4f707c24d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTM5fHxmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar">

        <div class="py-5 text-center bg-white">
          <a href="#" class="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">{{recipe.title}}</a>
          <span class="text-sm text-gray-700 dark:text-gray-200">#ilovecereals</span>
        </div>
      </div>


    </div>
  </section>
</template>
