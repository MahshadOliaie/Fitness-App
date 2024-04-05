import { useContext } from "react"
import FoodContext from "../context/FoodContext"


function useCalculator() {
    const { breakfast, lunch, dinner, snack } = useContext(FoodContext)

    const breakfastInfo = {
        calories: [],
        protein: [],
        carbs: [],
        fat: [],
        others: []
    }
    const lunchInfo = {
        calories: [],
        protein: [],
        carbs: [],
        fat: [],
        others: []
    }
    const dinnerInfo = {
        calories: [],
        protein: [],
        carbs: [],
        fat: [],
        others: []
    }
    const snackInfo = {
        calories: [],
        protein: [],
        carbs: [],
        fat: [],
        others: []
    }


    breakfast.map(item => {
        breakfastInfo.calories.push(Math.round(item.calories))
        breakfastInfo.protein.push(Math.round(item.protein_g))
        breakfastInfo.carbs.push(Math.round(item.carbohydrates_total_g))
        breakfastInfo.fat.push(Math.round(item.fat_total_g))
    })

    lunch.map(item => {
        lunchInfo.calories.push(Math.round(item.calories))
        lunchInfo.protein.push(Math.round(item.protein_g))
        lunchInfo.carbs.push(Math.round(item.carbohydrates_total_g))
        lunchInfo.fat.push(Math.round(item.fat_total_g))
    })

    dinner.map(item => {
        dinnerInfo.calories.push(Math.round(item.calories))
        dinnerInfo.protein.push(Math.round(item.protein_g))
        dinnerInfo.carbs.push(Math.round(item.carbohydrates_total_g))
        dinnerInfo.fat.push(Math.round(item.fat_total_g))
    })

    snack.map(item => {
        snackInfo.calories.push(Math.round(item.calories))
        snackInfo.protein.push(Math.round(item.protein_g))
        snackInfo.carbs.push(Math.round(item.carbohydrates_total_g))
        snackInfo.fat.push(Math.round(item.fat_total_g))
    })

    return { breakfastInfo, lunchInfo, dinnerInfo, snackInfo }

}

export default useCalculator