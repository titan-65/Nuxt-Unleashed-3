import { ref } from "vue";
import { reactive } from "vue";

export const store = reactive({
  coffeePoints: 0,
  incrementCoffeePoints() {
    this.coffeePoints++;
  },
});

// global state, created in the store

const globalCoffeePoints = ref(340);

export function useCoffeeComposable() {
  // local state, for component scope
  const coffeePerkPoints = ref(250);

  return {
    globalCoffeePoints,
    coffeePerkPoints,
  };
}
