
import Diagram from "../Diagram/Diagram"
import AddFoodWindow from "../AddFoodWindow/AddFoodWindow"
import Meals from "../Meals/Meals"
import { useEffect, useState } from "react"
import Layout from "../Layout/Layout"
import FoodContext from "../../context/FoodContext"
import LogHistory from "../../context/LogHistory"



function Dashboard({ setIsFoodListOpen, selectedMeal, isFoodListOpen, setSelectedMeal }) {
    const [breakfast, setBreakfast] = useState(JSON.parse(localStorage.getItem("breakfast")) || [])
    const [lunch, setLunch] = useState(JSON.parse(localStorage.getItem("lunch")) || [])
    const [dinner, setDinner] = useState(JSON.parse(localStorage.getItem("dinner")) || [])
    const [snack, setSnack] = useState(JSON.parse(localStorage.getItem("snack")) || [])
    const [water, setWater] = useState(JSON.parse(localStorage.getItem("water")) || 0)
    const [logHistory, setLogHistory] = useState(JSON.parse(localStorage.getItem("logHistory")) || [])

    useEffect(() => {
        localStorage.setItem("breakfast", JSON.stringify(breakfast))
        localStorage.setItem("lunch", JSON.stringify(lunch))
        localStorage.setItem("dinner", JSON.stringify(dinner))
        localStorage.setItem("snack", JSON.stringify(snack))
        localStorage.setItem("logHistory", JSON.stringify(logHistory))
        localStorage.setItem("water", JSON.stringify(water))

    }, [breakfast, lunch, dinner, logHistory, snack, water])


    return (
        <FoodContext.Provider value={{
            breakfast,
            lunch,
            dinner,
            snack,
            water,
            setWater,
            setBreakfast,
            setDinner,
            setLunch,
            setSnack
        }}>
            <LogHistory.Provider value={{
                logHistory,
                setLogHistory
            }}>
                <Layout setIsFoodListOpen={setIsFoodListOpen} setSelectedMeal={setSelectedMeal}>
                    <Diagram />
                    <Meals />
                    {isFoodListOpen && <AddFoodWindow setIsFoodListOpen={setIsFoodListOpen} selectedMeal={selectedMeal} />}
                </Layout>
            </LogHistory.Provider>
        </FoodContext.Provider >
    )
}

export default Dashboard