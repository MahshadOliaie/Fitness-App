import CSS from './index.module.css'


function Meals() {
    return (
        <>
            <div className={CSS.meals}>
                <div className={CSS.breakfast}>
                    <p className={CSS.mealName}>breakfast</p>
                    <p className={CSS.cal}>445</p>
                </div>
                <div className={CSS.lunch}>
                    <p className={CSS.mealName}>lunch</p>
                    <p className={CSS.cal}>655</p>
                </div>
                <div className={CSS.dinner}>
                    <p className={CSS.mealName}>dinner</p>
                    <p className={CSS.cal}>785</p>
                </div>
                <div className={CSS.snacks}>
                    <p className={CSS.mealName}>snacks</p>
                    <p className={CSS.cal}>445</p>
                </div>
            </div>
        </>
    )
}

export default Meals