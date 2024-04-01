import CSS from './index.module.css'

function MealSelector() {
    return (
        <div className={CSS.meals}>
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