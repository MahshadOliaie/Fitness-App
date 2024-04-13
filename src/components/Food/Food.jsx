import { useEffect, useState } from 'react'
import CSS from './index.module.css'

function Food({ data, setSelectedFoods, selectedFoods }) {
    const [selectState, setSelectState] = useState(false)

    useEffect(() => {
        if (selectState)
            setSelectedFoods(prev => [...prev, data])
        else
            setSelectedFoods(prev => prev.filter(item => item != data))

    }, [selectState])

    return (
        <>
            <div className={CSS.food}>
                <div className={CSS.name}>{data.name}</div>
                <div className={CSS.rightBox}>
                    <div className={CSS.info}>
                        <p className={CSS.cals}>{Math.round(data.calories)} cals</p>
                        <p className={CSS.serving}>{Math.round(data.serving_size_g)} gr</p>
                    </div>

                    <div className={CSS.selectBox} onClick={() => setSelectState(prev => !prev)} style={(selectedFoods.includes(data)) ? { backgroundColor: "green" } : {}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Food