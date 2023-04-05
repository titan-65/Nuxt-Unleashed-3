<script setup lang="ts">
    import {IItems} from "~/types";
    import { useItemsStore } from "~/store/items";

    const store = useItemsStore()


    const category = ref('')
    const category_tag = ref('')
    const status = ref('pending')
    const description_head = ref('')
    const description = ref('')
    const cost = ref(0)
    const progress = ref(0)

    const itemsInStorage = JSON.parse(localStorage.getItem('shoppingList') || '[]')

    const addItem = () => {
        if (!category.value || !category_tag.value || !status || !description_head || !description || !cost || !progress) {
            alert('Please fill in all required fields')
        }

        if (isNaN(cost.value) || isNaN(progress.value)) {
            alert('Cost and progress must be valid numbers.')
            return
        }

        if (progress.value < 0 || progress.value > 100) {
            alert('Progress must be between 0 and 100.')
            return
        }


        const newItem: Ref<IItems> = {
            category,
            category_tag,
            status,
            description_head,
            description,
            cost,
            progress
        }

        console.log(newItem)

        store.addItemsToCart(newItem)
    }
</script>
<template>
    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md dark:bg-gray-800">
        <form class="w-full max-w-sm mx-auto" @submit.prevent="addItem">
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="category">
                    Category
                </label>
                <input
                    v-model="category"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="category" type="text" placeholder="Enter category" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="category_tag">
                    Category Tag
                </label>
                <input
                    v-model="category_tag"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="category_tag" type="text" placeholder="Enter category tag" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="status">
                    Status
                </label>
                <select
                        v-model="status"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="status">
                    <option value="pending">Available</option>
                    <option value="in_progress">In Transit</option>
                    <option value="complete">Finished</option>
                </select>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="description_head">
                    Description Head
                </label>
                <input
                    v-model="description_head"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description_head" type="text" placeholder="Enter description head" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="description">
                    Description
                </label>
                <textarea
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description" placeholder="Enter description"></textarea>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="cost">
                    Cost
                </label>
                <input
                    v-model="description"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="cost" type="number" step="0.01" placeholder="Enter cost" min="0" required />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="progress">
                    Progress
                </label>
                <input
                    v-model="progress"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="progress" type="number" step="1" min="0" max="100" placeholder="Enter progress" required />
            </div>
            <div class="flex items-center justify-center">
                <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-underline" type="submit">Submit</button>
            </div>
        </form>

    </section>
</template>
