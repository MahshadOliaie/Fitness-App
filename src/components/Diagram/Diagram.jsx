import useCalculator from '../../hooks/useCalculator'
import CSS from './index.module.css'

function Diagram() {
    const { breakfastInfo, lunchInfo, dinnerInfo, snackInfo } = useCalculator()

    const total = {
        calories: [...breakfastInfo.calories, ...lunchInfo.calories, ...dinnerInfo.calories, ...snackInfo.calories].reduce((acc, curr) => +acc + +curr, 0),
        protein: [...breakfastInfo.protein, ...lunchInfo.protein, ...dinnerInfo.protein, ...snackInfo.protein].reduce((acc, curr) => +acc + +curr, 0),
        carbs: [...breakfastInfo.carbs, ...lunchInfo.carbs, ...dinnerInfo.carbs, ...snackInfo.carbs].reduce((acc, curr) => +acc + +curr, 0),
        fat: [...breakfastInfo.fat, ...lunchInfo.fat, ...dinnerInfo.fat, ...snackInfo.fat].reduce((acc, curr) => +acc + +curr, 0),
    }

    const caloriesOf = {
        protein: total.protein * 4,
        carbs: total.carbs * 4,
        fat: total.fat * 9
    }

    const calc = (macro) => {
        return caloriesOf[macro] / (2500 / 100)
    }

    return (
        <>
            <div className={CSS.diagramContainer}>
                <svg viewBox="0 0 36 36" className={CSS.diagram}>
                    <path className={CSS.baseline} strokeDasharray="100" d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path className={CSS.othersPath} strokeDasharray={`${(total.calories / (2500 / 100))} 100`} d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                    />

                    <path className={CSS.fatPath} strokeDasharray={`${calc("carbs") + calc("protein") + calc("fat")} 100`} d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                    />

                    <path className={CSS.carbsPath} strokeDasharray={`${calc("carbs") + calc("protein")} 100`} d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                    />

                    <path className={CSS.proteinPath} strokeDasharray={`${calc("protein")} 100`} d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                    />

                </svg>
                <div className={CSS.calories}>
                    <p className={CSS.caloryNum}>{total.calories}</p>
                    {(total.calories <= 2500) ?
                        <>
                            <p className={CSS.budget}>{2500 - total.calories}</p>
                            <p className={CSS.left}>left</p>
                        </>
                        :
                        <>
                            <p className={CSS.budget}>{total.calories - 2500}</p>
                            <p className={CSS.left} style={{ color: "red" }}>over</p>
                        </>
                    }

                </div>
            </div>

            <div className={CSS.nutritionGuide}>
                <div className={CSS.nutrition}>
                    <div className={CSS.protein}></div>
                    <p className={CSS.grams}>{total.protein}g</p>
                    <p className={CSS.unit}>PROTEIN</p>
                </div>

                <div className={CSS.nutrition}>
                    <div className={CSS.carbs}></div>
                    <p className={CSS.grams}>{total.carbs}g</p>
                    <p className={CSS.unit}>CARBS</p>
                </div>

                <div className={CSS.nutrition}>
                    <div className={CSS.fat}></div>
                    <p className={CSS.grams}>{total.fat}g</p>
                    <p className={CSS.unit}>FAT</p>
                </div>

                <div className={CSS.nutrition}>
                    <div className={CSS.others}></div>
                    <p className={CSS.grams}>-</p>
                    <p className={CSS.unit}>OTHERS</p>
                </div>
            </div>
        </>
    )
}

export default Diagram