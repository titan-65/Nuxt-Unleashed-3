<template>
  <i-layout vertical>
    <i-layout-aside>
      Left Aside
    </i-layout-aside>

    <i-layout>
      <i-layout-header>
        <MainNavbar />
      </i-layout-header>

      <i-layout-content>
        <slot/>
      </i-layout-content>

      <i-layout-footer>
        Footer
      </i-layout-footer>
    </i-layout>
  </i-layout>
</template>
<script setup lang="ts">
</script>
