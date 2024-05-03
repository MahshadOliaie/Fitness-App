import { useContext } from "react"
import Information from "../context/Information/Information"


function usePersonalNutritions() {
    const activityLevelsNumber = {
        "one": 1.2,
        "two": 1.375,
        "three": 1.55,
        "four": 1.725,
        "five": 1.9
    }

    const { physicalInfo, activityLevel, goal } = useContext(Information)
    let formula = (10 * physicalInfo.weight) + (6.25 * physicalInfo.height) - (5 * physicalInfo.age)
    let BMR = (physicalInfo.gender == "male") ? formula + 5 : formula - 161
    let maintainCalory = Math.ceil(BMR * activityLevelsNumber[activityLevel.activityLevel])


    const goals = {
        "Muscle gain": maintainCalory + (maintainCalory / 10),
        "Maintain": maintainCalory,
        "Fat loss": maintainCalory - (maintainCalory / 10)
    }

    const maxCalories = Math.ceil(goals[goal.goal])

    const maxWater = 50 * physicalInfo.weight

    return { maxCalories, maxWater }
}

export default usePersonalNutritions