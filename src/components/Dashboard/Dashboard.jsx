
import Diagram from "../Diagram/Diagram"
import FoodList from "../FoodList/FoodList"
import Meals from "../Meals/Meals"



function Dashboard({setIsFoodListOpen , selectedMeal , isFoodListOpen}) {


    return (
        <>
                <Diagram />
                <Meals />
                {isFoodListOpen && <FoodList setIsFoodListOpen={setIsFoodListOpen} selectedMeal={selectedMeal} />}
                <Diagram />
        </>
    )
}

export default Dashboard