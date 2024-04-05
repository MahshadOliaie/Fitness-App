import useCalculator from '../../hooks/useCalculator'
import CSS from './index.module.css'


function Meals() {
    const { breakfastInfo, lunchInfo, dinnerInfo, snackInfo } = useCalculator()
    return (
        <>
            <div className={CSS.meals}>
                <div className={CSS.breakfast}>
                    <p className={CSS.mealName}>breakfast</p>
                    <p className={CSS.cal}>{(breakfastInfo.calories).reduce((acc, curr) => acc + curr, 0)}</p>
                </div>
                <div className={CSS.lunch}>
                    <p className={CSS.mealName}>lunch</p>
                    <p className={CSS.cal}>{(lunchInfo.calories).reduce((acc, curr) => acc + curr, 0)}</p>
                </div>
                <div className={CSS.dinner}>
                    <p className={CSS.mealName}>dinner</p>
                    <p className={CSS.cal}>{(dinnerInfo.calories).reduce((acc, curr) => acc + curr, 0)}</p>
                </div>
                <div className={CSS.snacks}>
                    <p className={CSS.mealName}>snacks</p>
                    <p className={CSS.cal}>{(snackInfo.calories).reduce((acc, curr) => acc + curr, 0)}</p>
                </div>
            </div>
        </>
    )
}

export default Meals