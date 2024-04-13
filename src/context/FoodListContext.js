import { createContext } from "react";


const FoodListContext = createContext({
    foodList: [],
    filteredFoodList: [],
    setFilteredFoodList: () => { }

})

export default FoodListContext