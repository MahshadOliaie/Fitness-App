import useCalculator from '../../hooks/useCalculator'
import CSS from './index.module.css'

function Diagram() {
    const { breakfastInfo, lunchInfo, dinnerInfo, snackInfo } = useCalculator()
    return (
        <>
            <div className={CSS.diagramContainer}>
                <svg viewBox="0 0 36 36" className={CSS.diagram}>
                    <path className={CSS.baseline} strokeDasharray="100" d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path className={CSS.othersPath} strokeDasharray="100" d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                    />

                    <path className={CSS.fatPath} strokeDasharray="100" d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                    />

                    <path className={CSS.carbsPath} strokeDasharray="100" d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                    />

                    <path className={CSS.proteinPath} strokeDasharray="100" d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                    />

                </svg>
                <div className={CSS.calories}>
                    <p className={CSS.caloryNum}>{2500 - [...breakfastInfo.calories, ...lunchInfo.calories, ...dinnerInfo.calories, snackInfo.calories].reduce((acc, curr) => +acc + +curr, 0)}</p>
                    <p className={CSS.left}>left</p>
                </div>
            </div>

            <div className={CSS.nutritionGuide}>
                <div className={CSS.nutrition}>
                    <div className={CSS.protein}></div>
                    <p className={CSS.grams}>{[...breakfastInfo.protein, ...lunchInfo.protein, ...dinnerInfo.protein, snackInfo.protein].reduce((acc, curr) => +acc + +curr, 0)}g</p>
                    <p className={CSS.unit}>PROTEIN</p>
                </div>

                <div className={CSS.nutrition}>
                    <div className={CSS.carbs}></div>
                    <p className={CSS.grams}>{[...breakfastInfo.carbs, ...lunchInfo.carbs, ...dinnerInfo.carbs, snackInfo.carbs].reduce((acc, curr) => +acc + +curr, 0)}g</p>
                    <p className={CSS.unit}>CARBS</p>
                </div>

                <div className={CSS.nutrition}>
                    <div className={CSS.fat}></div>
                    <p className={CSS.grams}>{[...breakfastInfo.fat, ...lunchInfo.fat, ...dinnerInfo.fat, snackInfo.fat].reduce((acc, curr) => +acc + +curr, 0)}g</p>
                    <p className={CSS.unit}>FAT</p>
                </div>

                <div className={CSS.nutrition}>
                    <div className={CSS.others}></div>
                    <p className={CSS.grams}>{[...breakfastInfo.others, ...lunchInfo.others, ...dinnerInfo.others, snackInfo.others].reduce((acc, curr) => +acc + +curr, 0)}g</p>
                    <p className={CSS.unit}>OTHERS</p>
                </div>
            </div>
        </>
    )
}

export default Diagram