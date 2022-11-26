<script setup>
definePageMeta({
  title: 'Nuxtin',
  middleware: ["user", "token"]
})
</script>
<template>
  <div>
    <MainRibbon />
    <section>
      <div class="flex justify-between items-center">
        <div class="item">
          <nuxt-img
            src="https://images.unsplash.com/photo-1553787499-6f9133860278?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            sizes="sm:100vw md:50vw lg:200px"
          />
        </div>
        <div class="item mx-auto">
          <h1 class="leading-7 font-extrabold">Nuxtin Coffees</h1>
        </div>
        <div class="item">
          <nuxt-img
            src="https://images.unsplash.com/photo-1576021220401-9f1453159c62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            sizes="sm:100vw md:50vw lg:200px"
          />
        </div>
      </div>
      <div class="mx-52">
        <div class="flex justify-between items-center">
          <div class="item">
            <nuxt-img src="https://images.unsplash.com/photo-1514066558159-fc8c737ef259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
            <h1>
              Earn points any way you want to payibmalienware1
            </h1>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
