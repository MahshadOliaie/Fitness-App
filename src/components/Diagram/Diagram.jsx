import CSS from './index.module.css'

function Diagram() {
    return (
        <>
        <div className={CSS.diagramContainer}>
            <svg className={CSS.diagram} width="246" height="159" viewBox="0 0 246 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={CSS.baseline} d="M11.0032 157.484C11.003 110.997 11.0029 61.4971 27.001 41.9892C42.9992 22.4813 64.5007 11.487 120.001 11.487C175.501 11.487 201.5 21.5 215.501 42.4892C229.502 63.4784 235.003 102.996 235.003 158.442" />

                <path className={CSS.protein} d="M11.0032 157.484C11.003 110.997 11.0029 61.4971 27.001 41.9892C42.9992 22.4813 64.5007 11.487 120.001 11.487C175.501 11.487 201.5 21.5 215.501 42.4892C229.502 63.4784 235.003 102.996 235.003 158.442" />

                <path className={CSS.carbs} d="M11.0032 157.484C11.003 110.997 11.0029 61.4971 27.001 41.9892C42.9992 22.4813 64.5007 11.487 120.001 11.487C175.501 11.487 201.5 21.5 215.501 42.4892C229.502 63.4784 235.003 102.996 235.003 158.442" />

                <path className={CSS.fat} d="M11.0032 157.484C11.003 110.997 11.0029 61.4971 27.001 41.9892C42.9992 22.4813 64.5007 11.487 120.001 11.487C175.501 11.487 201.5 21.5 215.501 42.4892C229.502 63.4784 235.003 102.996 235.003 158.442" />

            </svg>
            <div className={CSS.calories}>
                <p className={CSS.caloryNum}>2334</p>
                <p>kcal</p>
            </div>
        </div>

        <div className={CSS.nutritionGuide}>
            <div className={CSS.nutrition}>
                <div className={CSS.protein}></div>
                <p className={CSS.grams}>120g</p>
                <p className={CSS.unit}>PROTEIN</p>
            </div>

            <div className={CSS.nutrition}>
                <div className={CSS.carbs}></div>
                <p className={CSS.grams}>70g</p>
                <p className={CSS.unit}>CARBS</p>
            </div>

            <div className={CSS.nutrition}>
                <div className={CSS.fat}></div>
                <p className={CSS.grams}>0g</p>
                <p className={CSS.unit}>FAT</p>
            </div>
        </div>
        </>
    )
}

export default Diagram