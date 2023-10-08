import { defineStore } from "pinia";
import { IItems } from "~/types";

export const useItemsStore = defineStore("items", () => {
  // State

  const baseURL = "http://localhost:3004";
  // @ts-ignore
  let items: Ref<IItems[]> = ref(null);
  const rewardPoints: Ref<number> = ref(0);
  const rewardPointsHistory: Ref<number[]> = ref([]);

  const category: Ref<string> = ref("");
  const status: Ref<boolean> = ref(false);
  const description: Ref<string> = ref("");
  const cost: Ref<number> = ref(0);
  const progress: Ref<number> = ref(0);

  const currentPage: Ref<number> = ref(1);
  const totalPages: Ref<number> = ref(0);
  const itemsPerPage: Ref<number> = ref(10);

  // Getters
  const getItems = computed(() => items.value);
  const getCategory = computed(() => category.value);
  const getStatus = computed(() => status.value);
  const getDescription = computed(() => description.value);
  const getCost = computed(() => cost.value);
  const getProgress = computed(() => progress.value);
  const getItemsPerPage = computed(() => itemsPerPage.value);

  const getCurrentPage = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    return items.value.slice(startIndex, endIndex);
  });
  const getTotalPages = computed(() => {
    return Math.ceil(items.value.length / itemsPerPage.value);
  });

  // Actions
  function addItemsToCart(itemsA: IItems): void {
    const {
      category,
      category_tag,
      status,
      description,
      description_head,
      cost,
      progress,
    } = itemsA;
    const newCartItems: IItems = {
      category,
      category_tag,
      status,
      description,
      description_head,
      cost,
      progress,
    };
    items.value.push(newCartItems);
  }

  function removeItemsFromCart(index: number): void {
    items.value.splice(index, 1);
  }

  function editItemsFromCart(index: number, itemsA: IItems): void {
    const {
      category,
      category_tag,
      status,
      description,
      description_head,
      cost,
      progress,
    } = itemsA;
    const newCartItems: IItems = {
      category,
      category_tag,
      status,
      description,
      description_head,
      cost,
      progress,
    };
    items.value.splice(index, 1, newCartItems);
  }

  function clearCart(): void {
    items.value.splice(0, items.value.length);
    console.log("clearCart");
  }

  function setItems(itemsA: IItems[]): void {
    items.value = itemsA;
  }

  function setCategory(categoryA: string): void {
    category.value = categoryA;
  }

  async function fetchDataFromServer() {
    // @ts-ignore
    items.value = await $fetch("/items", {
      method: "GET",
      baseURL: baseURL,
    });
    // @ts-ignore
  }

  function setCurrentPage(page) {
    currentPage.value = page;
  }

  function setItemsPerPage(itemsPerPage) {
    itemsPerPage.value = itemsPerPage;
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
    removeItemsFromCart,
    editItemsFromCart,
    clearCart,
  };
});
