import { defineStore } from "pinia";
import { IItems } from "~/types";

export const useItemsStore = defineStore('items', () => {
    // State

    const items: Ref<IItems[]> = ref([])
    const category: Ref<string> = ref('')
    const status: Ref<boolean> = ref(false)
    const description: Ref<string> = ref('')
    const cost: Ref<number> = ref(0)
    const progress: Ref<number> = ref(0)

    const currentPage: Ref<number> = ref(1)
    const totalPages: Ref<number> = ref(0)
    const itemsPerPage: Ref<number> = ref(10)


    // Getters
    const getItems = computed(() => items.value)
    const getCategory = computed(() => category.value)
    const getStatus = computed(() => status.value)
    const getDescription = computed(() => description.value)
    const getCost = computed(() => cost.value)
    const getProgress = computed(() => progress.value)

    const getCurrentPage = computed(() => {
        const startIndex = (currentPage.value - 1) * itemsPerPage.value
        const endIndex = startIndex + itemsPerPage.value
        return items.value.slice(startIndex, endIndex)
    })
    const getTotalPages = computed(() => {
        return Math.ceil(items.value.length / itemsPerPage.value)
    })


    // Actions
    function addItemsToCart(itemsA: IItems): void {
        const { category, status, description, cost, progress } = itemsA
        const newCartItems: IItems = {
            category,
            status,
            description,
            cost,
            progress
        }
       items.value.push(newCartItems)
    }
    async function fetchDataFromServer() {
        const response = await $fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "GET"
        });
        const data = await response.json();
        items.value = data
        console.log(data)
    }

    function setCurrentPage(page) {
        currentPage.value = page
    }

    function setItemsPerPage(itemsPerPage) {
        itemsPerPage.value = itemsPerPage
    }


    return {
        items,
        category,
        status,
        description,
        cost,
        progress,
        totalPages,
        getItems,
        getCategory,
        getStatus,
        getDescription,
        getCost,
        getProgress,
        getCurrentPage,
        getTotalPages,
        addItemsToCart,
        fetchDataFromServer,
        setCurrentPage,
        setItemsPerPage,

    }
})
