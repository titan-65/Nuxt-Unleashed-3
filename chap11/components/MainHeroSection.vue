<script setup lang="ts">
import { IItems } from "~/types";
import { useItemsStore } from "~/store/items";

let showModal: Ref<boolean> = ref(false);
const { items, getItems, addItemsToCart, fetchDataFromServer, clearCart } =
  useItemsStore();
</script>
<template>
  <div>
    <section class="w-full h-full bg-white dark:bg-gray-900">
      <div
        class="container relative flex flex-col min-h-screen px-6 py-8 mx-auto"
      >
        <UIHeroStatic />
        <div class="flex flex-col mt-6">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
            >
              <div
                class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"
              >
                <table
                  class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <UITableHead />
                  <UITableBody />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <NotificationModal :modalActive="showModal">
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen">
          <div class="bg-white rounded-lg p-8">
            <h2 class="text-2xl mb-4">Modal Title</h2>
            <p>Modal Content</p>

            <button @click="showModal = false">Close Modal</button>
          </div>
        </div>
      </div>
    </NotificationModal>
  </div>
</template>
