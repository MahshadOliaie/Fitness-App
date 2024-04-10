import { useContext, useEffect, useState } from 'react'
import Food from '../Food/Food'
import FoodSearchBar from '../FoodSearchBar/FoodSearchBar'
import CSS from './index.module.css'
import FoodContext from '../../context/FoodContext'

function FoodList({ setIsFoodListOpen, selectedMeal }) {
    const [foodList, setFoodList] = useState([])
    const [filteredFoodList, setFilteredFoodList] = useState([])
    const [selectedFoods, setSelectedFoods] = useState([])
    const { setBreakfast, setDinner, setLunch, setSnack } = useContext(FoodContext)
    const [selectingWay , setSelectingWay] = useState("search")

    useEffect(() => {
        fetch('https://api.api-ninjas.com/v1/nutrition?query=egg and milk and rice and banana and bread and oats', {
            headers: { 'X-Api-Key': 'hYvUzuDQpZu/odwBI/6Abg==T3kgV51IrePL78hW' },
            contentType: 'application/json',
        })
            .then(res => res.json())
            .then(data => { setFoodList(data); setFilteredFoodList(data) })

        return () => { }
    }, [])

    function handleLog() {
        setIsFoodListOpen(false)
        switch (selectedMeal) {
            case "breakfast":
                setBreakfast(prev => [...prev, ...selectedFoods])
                break;
            case "lunch":
                setLunch(prev => [...prev, ...selectedFoods])
                break;
            case "dinner":
                setDinner(prev => [...prev, ...selectedFoods])
                break;
            case "snack":
                setSnack(prev => [...prev, ...selectedFoods])
                break;
            default:
        }
    }

    return (
        <>
            <div className={CSS.container}>
                <div className={CSS.header}>
                    <svg className={CSS.close} onClick={() => setIsFoodListOpen(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                    <h2 className={CSS.title}>Food Search</h2>
                    <div className={CSS.space}>
                        {selectedFoods.length > 0 && <><div className={CSS.logBox} onClick={handleLog}><p className={CSS.logCounter}>{selectedFoods.length}</p>LOG</div></>}
                    </div>
                </div>
                <div className={CSS.selectWay}>
                    <div className={(selectingWay == "search") ? `${CSS.search} ${CSS.current}` : `${CSS.search}`} onClick={() => setSelectingWay("search")}>
                        <svg className={CSS.searchIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                        <p>SEARCH</p>
                    </div>

                    <div className={(selectingWay == "calories") ? `${CSS.calories} ${CSS.current}` : `${CSS.calories}`} onClick={() => setSelectingWay("calories")}>
                        <svg className={CSS.fire} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z" /></svg>                        <p>CALORIES</p>
                    </div>
                </div>

                <FoodSearchBar setFilteredFoodList={setFilteredFoodList} foodList={foodList} />
                <div className={CSS.foodList}>
                    {filteredFoodList?.map(food => {
                        return <Food key={food.name} data={food} setSelectedFoods={setSelectedFoods} />
                    })}
                </div>
            </div>
        </>
    )
}

export default FoodList





fetch('https://api.api-ninjas.com/v1/dogs?name=[pomer, golden retriever]', {
    headers: { 'X-Api-Key': 'hYvUzuDQpZu/odwBI/6Abg==T3kgV51IrePL78hW' },
    contentType: 'application/json',
},
10
)
    .then(res => res.json())
    .then(data => console.log(data))