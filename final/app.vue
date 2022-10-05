<script setup>
  const { location, fetchLocation, errorString, checkLocation, getLocation} = useLocation()

  getLocation()
  console.log(location);
  onMounted(() => {
    console.log(window)
    console.log(navigator)

  })
</script>
<template>
  <div>
    <NuxtLayout>
          <NuxtPage />
    </NuxtLayout>
  </div>
</template>
