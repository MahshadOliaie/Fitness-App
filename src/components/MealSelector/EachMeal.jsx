import './meal.css'

function EachMeal({meal , onClick}) {
    return (
        <div className={meal} onClick={onClick}>
            {meal}
        </div>
    )
}

export default EachMeal