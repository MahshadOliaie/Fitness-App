import { useEffect, useState } from 'react'
import Food from '../Food/Food'
import FoodSearchBar from '../FoodSearchBar/FoodSearchBar'
import CSS from './index.module.css'

function FoodList({ setSelectedFoods }) {
    const [foodList, setFoodList] = useState([])
    const [filteredFoodList, setFilteredFoodList] = useState([])

    useEffect(() => {
        fetch('https://api.api-ninjas.com/v1/nutrition?query=egg and milk and rice and banana and bread and oats', {
            headers: { 'X-Api-Key': 'hYvUzuDQpZu/odwBI/6Abg==T3kgV51IrePL78hW' },
            contentType: 'application/json',
        })
            .then(res => res.json())
            .then(data => { setFoodList(data); setFilteredFoodList(data) })

        return () => { }
    }, [])

    return (
        <>
            <FoodSearchBar setFilteredFoodList={setFilteredFoodList} foodList={foodList} />

            <div className={CSS.foodList}>
                {filteredFoodList?.map(food => {
                    return <Food key={food.name} data={food} setSelectedFoods={setSelectedFoods} />
                })}
            </div>
        </>
    )
}

export default FoodList