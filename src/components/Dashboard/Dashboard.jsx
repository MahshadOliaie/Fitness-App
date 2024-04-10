
import Diagram from "../Diagram/Diagram"
import AddFoodWindow from "../AddFoodWindow/AddFoodWindow"
import Meals from "../Meals/Meals"



function Dashboard({setIsFoodListOpen , selectedMeal , isFoodListOpen}) {


    return (
        <>
                <Diagram />
                <Meals />
                {isFoodListOpen && <AddFoodWindow setIsFoodListOpen={setIsFoodListOpen} selectedMeal={selectedMeal} />}
        </>
    )
}

export default Dashboard