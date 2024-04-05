import { useState } from "react"
import Diagram from "../Diagram/Diagram"
import FoodList from "../FoodList/FoodList"
import Layout from "../Layout/Layout"
import Meals from "../Meals/Meals"


function Dashboard() {
    const [isFoodListOpen, setIsFoodListOpen] = useState(false)
    const [selectedMeal , setSelectedMeal] = useState("")

    return (
        <>
            <Layout setIsFoodListOpen={setIsFoodListOpen} setSelectedMeal={setSelectedMeal} >
                <Diagram />
                <Meals />
                {isFoodListOpen && <FoodList setIsFoodListOpen={setIsFoodListOpen} selectedMeal={selectedMeal}/>}
            </Layout>
        </>
    )
}

export default Dashboard