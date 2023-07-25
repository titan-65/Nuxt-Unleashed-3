<script setup lang="ts">
import { ref } from "vue";
import { store, useCoffeeComposable } from "./store/store";
import { useCoffeeMenuStore, useCoffeeStore } from "~/store/coffee";

// state
const coffeeCount = ref(0);

// State using useState Composable

const coffeeCountVariableUseState = useState("coffeeCountCom", () => 0);

const { globalCoffeePoints, coffeePerkPoints } = useCoffeeComposable();
// actions
function increment() {
  coffeeCount.value++;
}

function incrementUseState() {
  coffeeCountVariableUseState.value++;
}

/**
 * From the store.ts file
 */

const coffeeStore = useCoffeeStore();
const coffeeMenu = useCoffeeMenuStore();
</script>
<template>
  <div class="main-container">
    <h1>Local State</h1>
    <p>You have had {{ coffeeCount }} cups of coffee today.</p>
    <button @click="increment">Add a cup of coffee</button>
    <section class="">
      <h1>useState</h1>
      <p>You have had {{ coffeeCountVariableUseState }} cups today.</p>
      <button @click="incrementUseState">Add Cup</button>
    </section>
    <section class="state-container">
      <h1>Store State</h1>
      <p>You have {{ store.coffeePoints }} points.</p>
      <button class="store-button" @click="store.incrementCoffeePoints">
        Add a point
      </button>
    </section>
    <section>
      <h1>Composable State</h1>
      <p>You have {{ globalCoffeePoints }} points.</p>
      <p>You have {{ coffeePerkPoints }} points.</p>
      <button class="store-button" @click="increment">Add a point</button>
    </section>
    <section>
      <h1>Pinia State</h1>
      <p>You have {{ coffeeStore.getCoffeeAmount }} coffees.</p>
      <p>
        Current Coffee Refill:
        {{
          coffeeStore.getCoffeeRefill
            ? "Needs Refilling"
            : "All good with coffee!"
        }}
      </p>
    </section>
  </div>
</template>
<style scoped>
.main-container {
  align-content: center;
  text-align: center;
}
h1 {
  color: red;
  align-content: center;
}
button {
  color: black;
  background-color: white;
  border: 1px solid black;
}
.store-button {
  color: white;
  background-color: black;
  border: 1px solid black;
}
.state-container {
  margin-top: 20px;
}
</style>
