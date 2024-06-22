import { useContext, useEffect, useState } from 'react'
import Food from '../Food/Food'
import FoodSearchBar from '../FoodSearchBar/FoodSearchBar'
import CSS from './index.module.css'
import useFetch from '../../hooks/useFetch'
import LogHistory from '../../context/LogHistory'
import FoodListContext from '../../context/FoodListContext'

function FoodList({ setSelectedFoods, selectedFoods , onClick }) {
    const [foodList, setFoodList] = useState([])
    const [filteredFoodList, setFilteredFoodList] = useState([])
    const { logHistory } = useContext(LogHistory)

    const data = useFetch('https://api.calorieninjas.com/v1/nutrition?query=egg and milk and rice and banana and bread and oats')

    useEffect(() => {
        setFoodList(data);
        setFilteredFoodList(data)
    }, [data])

    return (
        <>
            <FoodListContext.Provider value={{
                foodList,
                filteredFoodList,
                setFilteredFoodList
            }}>
                <FoodSearchBar />

                <div className={CSS.foodList}>
                    <div className={CSS.recentList}>
                        {(filteredFoodList.length > 1) && logHistory.map(food => {
                            return <Food key={food.name} data={food} setSelectedFoods={setSelectedFoods} selectedFoods={selectedFoods} onClick={(data) => onClick(data)} />
                        })}
                    </div>
                    {filteredFoodList?.map(food => {
                        return <Food key={food.name} data={food} setSelectedFoods={setSelectedFoods} selectedFoods={selectedFoods} onClick={(data) => onClick(data)} />
                    })}
                </div>
            </FoodListContext.Provider>
        </>
    )
}

export default FoodList