import EachMeal from './EachMeal';
import CSS from './index.module.css'

function MealSelector({ setIsFoodListOpen, setIsMealSelectorOpen , setSelectedMeal}) {

    function handleClick() {
        setIsFoodListOpen(true);
        setIsMealSelectorOpen(false)
        setSelectedMeal(event.target.textContent)
    }

    return (
        <div className={CSS.meals}>
            <EachMeal meal={"breakfast"} onClick={handleClick} />
            <EachMeal meal={"lunch"} onClick={handleClick} />
            <EachMeal meal={"dinner"} onClick={handleClick} />
            <EachMeal meal={"snack"} onClick={handleClick} />
        </div>
    )
}

export default MealSelector