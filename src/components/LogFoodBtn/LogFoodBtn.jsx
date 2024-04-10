
import { useContext } from 'react';
import FoodContext from '../../context/FoodContext';
import CSS from './index.module.css'

function LogFoodBtn({ selectedFoods, setIsFoodListOpen, selectedMeal }) {

    const { setBreakfast, setDinner, setLunch, setSnack } = useContext(FoodContext)

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
            <div className={CSS.logBox} onClick={handleLog}>
                <p className={CSS.logCounter}>{selectedFoods.length}</p>
                LOG
            </div>
        </>
    )
}

export default LogFoodBtn