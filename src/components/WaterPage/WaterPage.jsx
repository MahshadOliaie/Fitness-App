import { useContext } from 'react'
import WaterInput from './WaterInput/WaterInput'
import CSS from './index.module.css'
import Water from '../../context/Water'
import usePersonalNutritions from '../../hooks/usePersonalNutritions'

function WaterPage() {
    const { water } = useContext(Water)
    const { maxWater } = usePersonalNutritions()
    
    return (
        <>
            <div className={CSS.container}>
                <svg viewBox="0 0 36 36" className={CSS.diagram}>
                    <path className={CSS.baseline} strokeDasharray="100" d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path className={CSS.waterPath} strokeDasharray={`${water / (maxWater / 100)} 100`} d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                </svg>
                <div className={CSS.drop}>
                    <img src="/water.png" alt="" />
                    <p className={CSS.waterAmount}>{water}ml</p>
                    <div className={CSS.waterLeft}>
                        {(water <= maxWater) ?
                            <>
                                <p>{maxWater - water}ml</p>
                                <p>left</p>
                            </>
                            :
                            <>
                                <p style={{ color: "green" }}>{water - maxWater}ml</p>
                                <p style={{ color: "green" }}>over</p>
                            </>
                        }

                    </div>
                </div>
            </div>

            <WaterInput />
        </>
    )
}

export default WaterPage