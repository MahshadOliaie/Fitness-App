import { useState } from 'react'
import useCalculator from '../../hooks/useCalculator'
import MealDetail from '../MealDetail/MealDetail'
import CSS from './index.module.css'


function Meals() {
    const { breakfastInfo, lunchInfo, dinnerInfo, snackInfo } = useCalculator()
    const [isDetailBoxOpen, setIsDetailBoxOpen] = useState(false)
    const [boxHeader, setBoxHeader] = useState("")

    function showDetail(meal) {
        setBoxHeader(meal);
        setIsDetailBoxOpen(true)
    }

    return (
        <>
            <div className={CSS.meals}>
                <div className={CSS.breakfast} onClick={()=> showDetail("breakfast")}>
                    <p className={CSS.mealName}>breakfast</p>
                    <p className={CSS.cal}>{(breakfastInfo.calories).reduce((acc, curr) => acc + curr, 0)}</p>
                </div>
                <div className={CSS.devider}></div>
                <div className={CSS.lunch} onClick={()=> showDetail("lunch")}>
                    <p className={CSS.mealName}>lunch</p>
                    <p className={CSS.cal}>{(lunchInfo.calories).reduce((acc, curr) => acc + curr, 0)}</p>
                </div>
                <div className={CSS.devider}></div>
                <div className={CSS.dinner} onClick={()=> showDetail("dinner")}>
                    <p className={CSS.mealName}>dinner</p>
                    <p className={CSS.cal}>{(dinnerInfo.calories).reduce((acc, curr) => acc + curr, 0)}</p>
                </div>
                <div className={CSS.devider}></div>
                <div className={CSS.snacks} onClick={()=> showDetail("snack")}>
                    <p className={CSS.mealName}>snacks</p>
                    <p className={CSS.cal}>{(snackInfo.calories).reduce((acc, curr) => acc + curr, 0)}</p>
                </div>
            </div>

            {isDetailBoxOpen && <MealDetail setIsDetailBoxOpen={setIsDetailBoxOpen} boxHeader={boxHeader} />}

        </>
    )
}

export default Meals