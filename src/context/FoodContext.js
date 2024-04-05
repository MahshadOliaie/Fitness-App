import { createContext } from "react";


const FoodContext = createContext({
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: [],
    setBreakfast: () => { },
    setLunch: () => { },
    setDinner: () => { },
    setSnack: () => { },

})

export default FoodContext