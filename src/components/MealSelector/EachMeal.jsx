import './meal.css'

function EachMeal({meal , onClick}) {
    return (
        <div className={meal} onClick={onClick}>
            <p>{meal}</p>
        </div>
    )
}

export default EachMeal