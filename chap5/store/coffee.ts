import { defineStore } from "pinia";

export const useCoffeeStore = defineStore("coffee", () => {
  // State for Pinia Store
  const coffeeAmount = ref(30);
  const coffeeRefill = ref(false);

  // Getters for Pinia Store
  const getCoffeeAmount = computed(() => coffeeAmount.value);
  const getCoffeeRefill = computed(() => coffeeRefill.value);

  // Actions for Pinia Store

  function setCoffeeAmount(amount: number) {
    // @ts-ignore
    coffeeAmount.value = amount;
  }

  function setCoffeeRefill(refill: boolean) {
    // @ts-ignore
    coffeeRefill.value = refill;
  }

  return {
    getCoffeeAmount,
    getCoffeeRefill,
    setCoffeeAmount,
    setCoffeeRefill,
  };
});

export const useCoffeeMenuStore = defineStore("coffeeMenu", () => {
  // Accessing coffee store
  const coffeeStore = useCoffeeStore();

  // local state, for useCoffeeMenu scope
  const coffeeMenu = ref(null);

  const getCoffeeMenu = computed(() => coffeeMenu.value);

  // Actions for Pinia Store

  function setCoffeeMenu(menu: any) {
    // @ts-ignore
    coffeeMenu.value = menu;

    if (coffeeStore.getCoffeeAmount.value < 100) {
      coffeeStore.setCoffeeRefill(true);
      coffeeStore.setCoffeeAmount(300);
    }
  }

  return {
    coffeeMenu,
    getCoffeeMenu,
    setCoffeeMenu,
  };
});
