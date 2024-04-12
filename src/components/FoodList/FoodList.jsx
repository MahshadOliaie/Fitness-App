import { useContext, useEffect, useState } from 'react'
import Food from '../Food/Food'
import FoodSearchBar from '../FoodSearchBar/FoodSearchBar'
import CSS from './index.module.css'
import useFetch from '../../hooks/useFetch'
import LogHistory from '../../context/LogHistory'

function FoodList({ setSelectedFoods }) {
    const [foodList, setFoodList] = useState([])
    const [filteredFoodList, setFilteredFoodList] = useState([])
    const { logHistory } = useContext(LogHistory)
    const data = useFetch('https://api.api-ninjas.com/v1/nutrition?query=egg and milk and rice and banana and bread and oats')

    useEffect(() => {
        setFoodList(data);
        setFilteredFoodList(data)
    }, [data])

    return (
        <>
            <FoodSearchBar setFilteredFoodList={setFilteredFoodList} foodList={foodList} />

            <div className={CSS.foodList}>
                <div className={CSS.recentList}>
                    {(filteredFoodList.length > 1) && logHistory.map(food => {
                        return <Food key={food.name} data={food} setSelectedFoods={setSelectedFoods} />
                    })}
                </div>
                {filteredFoodList?.map(food => {
                    return <Food key={food.name} data={food} setSelectedFoods={setSelectedFoods} />
                })}
            </div>
        </>
    )
}

export default FoodList