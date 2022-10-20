<script setup>
import { useMenuStore } from '../store/menu'

const beveragesArray = ref(null)
const frozenDrinksArray = ref(null)
const icedCoffeeArray = ref(null) 
const teaArray = ref(null)


const { beverages, getBeverages, frozenDrinks, teaMenuItems, icedCoffeeItems } = useMenuStore()



</script> 