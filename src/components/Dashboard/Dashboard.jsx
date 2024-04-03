import { useState } from "react"
import Diagram from "../Diagram/Diagram"
import FoodList from "../FoodList/FoodList"
import Layout from "../Layout/Layout"
import Meals from "../Meals/Meals"


function Dashboard() {
    const [isFoodListOpen, setIsFoodListOpen] = useState(false)

    return (
        <>
            <Layout setIsFoodListOpen={setIsFoodListOpen} >
                <Diagram />
                <Meals />
                {isFoodListOpen && <FoodList setIsFoodListOpen={setIsFoodListOpen}/>}
            </Layout>
        </>
    )
}

export default Dashboard