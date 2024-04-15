
import { useContext } from 'react';
import FoodContext from '../../context/FoodContext';
import CSS from './index.module.css'
import LogHistory from '../../context/LogHistory';

function LogFoodBtn({ selectedFoods, setIsFoodListOpen, selectedMeal }) {

    const { setBreakfast, setDinner, setLunch, setSnack } = useContext(FoodContext)
    const { setLogHistory, logHistory } = useContext(LogHistory)

    function handleLog() {
        setIsFoodListOpen(false)
        let newHistory = selectedFoods.filter(item => !logHistory.includes(item))
        setLogHistory(prev => [...prev, ...newHistory])
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