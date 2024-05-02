import { createContext } from "react";


const FoodContext = createContext({
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: [],
    water: 0,
    setBreakfast: () => { },
    setLunch: () => { },
    setDinner: () => { },
    setSnack: () => { },
    setWater: () => { }
})

export default FoodContext