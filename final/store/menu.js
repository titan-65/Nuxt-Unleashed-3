import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
    
    /* -------------------------------------------------------------------------- */
    /*                                    State                                   */
    /* -------------------------------------------------------------------------- */
    const loading = ref(false)
    const data = ref([])
    const dataLimit = ref(null)
    // const [pages] = ref(Math.round(data.length / dataLimit))
    const beverages = ref([])
    const drinksOnMe = ref(false)
    const teaMenuItems = [
      {
            id: 'ce032074-15b8-4049-84f3-09013b661411',
            title: 'Iced Tea',
            customizationAndNutrition: {
                size: ['S', 'M', "L"],
                variety: [],
                blend: ['Sweet Tea', 'Unsweetned Ice Tea', 'Sweetned Ice Tea', 'Unsweetned Iced Green Tea', 'Sweetned Green Tea'],
                flavor: [
                    'Raspberry',
                    'Blueberry'
                ]
            }
      },
    ]
    const icedCoffeeItems = [
      {
            id: 'ce032074-15b8-4049-84f3-09013b661411',
            title: 'Iced Tea',
            customizationAndNutrition: {
                size: ['S', 'M', "L"],
                variety: [
                    'none',
                    'coconut milk',
                    'oatmilk',
                    'whole milk',
                    'skim milk',
                    'almond milk',
                    'cream'
                ],
                dairy: ['peanut butter swirl', 'pumpkin swirl','caramel swirl', 'french vanilla swirl', 'mocha swirl'],
                sweetner: [
                    'none', 'sugar'
                ]
            }
      },
    ]
    const frozenDrinks = ref([
        {
            id: '6029f20f-44f6-4112-a134-17ffdaeb6f36',
            title: 'Frozen Chocolate',
            customizationAndNutrition: {
                size: ['S', 'M', "L"],
                variety: [
                    'frozen chocolate',
                    
                ],
                flavor: ['peanut butter swirl', 'pumpkin swirl','caramel swirl', 'french vanilla swirl', 'mocha swirl'],
                
            },
            allergens: [
                'milk',
                'soy'
            ],
            ingredients: [
                "Water; Milk; Liquid Cane Sugar: Sugar, Water, Potassium Sorbate (Preservative), Malic Acid; Peanut Butter Cup Flavored Swirl Syrup: Sweetened Condensed Nonfat Milk (Nonfat Milk, Sugar), High Fructose Corn Syrup, Sugar, Water, Paprika Extract (Color), Natural Flavors, Potassium Sorbate (Preservative), Salt; Hot Chocolate Powder: Sugar, Non-Dairy Creamer [Refined Coconut Oil, Corn Syrup Solids, Sodium Caseinate (a milk derivative), Mono and Diglycerides, Dipotassium Phosphate, Sugar, Sodium Stearoyl Lactylate, Soy Lecithin, Annatto and Turmeric (Colors), Artificial Flavor], Cocoa Powder processed with alkali, Corn Syrup Solids, Nonfat Dry Milk, Cellulose Gum, Salt, Xanthan Gum, Natural and Artificial Flavor, Sodium Citrate; Whipped Light Cream: Cream, Skim Milk, Corn Syrup, High Fructose Corn Syrup, Mono and Diglycerides, Carrageenan, Dextrose, Natural and Artificial Flavor; Mocha Flavored Swirl Syrup: High Fructose Corn Syrup, Sugar, Water, Cocoa processed with alkali, Natural Flavors, Potassium Sorbate (Preservative), Citric Acid, Salt"
            ]
        },
        {
            id: 'ccfc7353-58c5-400b-80fe-7624f857681a',
            title: 'Nuxtinla',
            customizationAndNutrition: {
                size: ['S', 'M', "L"],
                variety: [
                    'nuxtinla',
                    
                ],
                flavor: ['blueberry', 'strawberry', 'vanilla bean'],
                
            },
            allergens: [
                'soy'
            ],
            ingredients: [
                'Water; Blue Raspberry Flavored Coolatta Concentrate: Water, High Fructose Corn Syrup, Sugar, Citric Acid, Natural and Artificial Flavors, Xanthan Gum, Sodium Benzoate and Potassium Sorbate (Preservatives), Blue 1; Liquid Cane Sugar: Pure Cane Sugar, Water, Potassium Sorbate (Preservative).'
            ]
      },
    ])
    /* --------------------------------- Getters -------------------------------- */
    
    const getBeverages = computed(() => {
        return beverages.value
    })

    const getTeaItems = computed(() => teaMenuItems.value)
    const getIcedCoffee = computed(() => icedCoffeeItems.value)
    const getFrozenDrinks = computed(() => frozenDrinks.value)

    /* --------------------------------- Actions -------------------------------- */
    const loadingItems = () => {
        loading.value = true
        beverages.value = []
        teaMenuItems.value = []

    }
   
    const addItems = () => {
        
    }

    return {
        beverages,
        getBeverages,
        getTeaItems,
        getIcedCoffee,
        getFrozenDrinks,
        teaMenuItems,
        icedCoffeeItems,
        frozenDrinks,
        loadingItems
    }
})