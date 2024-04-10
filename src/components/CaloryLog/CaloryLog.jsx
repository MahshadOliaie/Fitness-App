import { useContext, useState } from 'react'
import FoodContext from '../../context/FoodContext'
import CSS from './index.module.css'

function CaloryLog({ setIsFoodListOpen, selectedMeal }) {

    const { setBreakfast, setDinner, setLunch, setSnack } = useContext(FoodContext)

    const [foodData, setFoodData] = useState({
        "name": "Custom",
        "calories": 0,
        "protein_g": 0,
        "carbohydrates_total_g": 0,
        "fat_total_g": 0
    })

    function handleLog() {
        setIsFoodListOpen(false)
        switch (selectedMeal) {
            case "breakfast":
                setBreakfast(prev => [...prev, foodData])
                break;
            case "lunch":
                setLunch(prev => [...prev, foodData])
                break;
            case "dinner":
                setDinner(prev => [...prev, foodData])
                break;
            case "snack":
                setSnack(prev => [...prev, foodData])
                break;
            default:
        }
    }

    return (
        <>
            <div className={CSS.container}>
                <div className={CSS.inputs}>
                    <h3>Calories</h3>
                    <input type="number" name='calories' className={CSS.calory} placeholder='required' onChange={() => setFoodData({ ...foodData, "calories": event.target.value })} />
                </div>

                <div className={CSS.macros}>
                    <h3>Macros</h3>
                    <div className={CSS.macrosInput}>
                        <div className={CSS.inputs}>
                            <label htmlFor="carbs">Total Carbs, g</label>
                            <input type="number" name='carbs' placeholder='optional' onChange={() => setFoodData({ ...foodData, "carbohydrates_total_g": event.target.value })} />
                        </div>
                        <div className={CSS.inputs}>
                            <label htmlFor="protein">Total Protein, g</label>
                            <input type="number" name='protein' placeholder='optional' onChange={() => setFoodData({ ...foodData, "protein_g": event.target.value })} />
                        </div>
                        <div className={CSS.inputs}>
                            <label htmlFor="fat">Total Fat, g</label>
                            <input type="number" name='fat' placeholder='optional' onChange={() => setFoodData({ ...foodData, "fat_total_g": event.target.value })} />
                        </div>
                    </div>
                </div>

                <div className={CSS.log} onClick={handleLog}>LOG</div>
            </div>
        </>
    )
}
export default CaloryLog
