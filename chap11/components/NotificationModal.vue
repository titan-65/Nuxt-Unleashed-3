<script setup lang="ts">
defineProps({
    modalActive: {
        type: Boolean,
        required: true
    }
})
</script>
<template>
  <teleport to="body">
      <div v-show="modalActive">
        <div class="fixed inset-0 bg-gray-900 bg-opacity-50">
            <div class="fixed inset-0 bg-gray-900 bg-opacity-50"></div>
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="bg-white p-6 rounded-lg">
                   <slot />
                </div>
            </div>
        </div>

      </div>
  </teleport>
</template>