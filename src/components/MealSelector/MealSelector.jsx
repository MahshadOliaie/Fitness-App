import CSS from './index.module.css'

function MealSelector({ setIsFoodListOpen, setIsListOpen }) {
    return (
        <div className={CSS.meals} onClick={() => { setIsFoodListOpen(true); setIsListOpen(false) }}>
            <div className={CSS.breakfast}>
                <p>breakfast</p>
            </div>
            <div className={CSS.lunch}>
                <p>lunch</p>
            </div>
            <div className={CSS.dinner}>
                <p>dinner</p>
            </div>
            <div className={CSS.snack}>
                <p>snack</p>
            </div>
        </div>
    )
}

export default MealSelector