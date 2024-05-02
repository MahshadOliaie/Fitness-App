
import { useContext, useRef } from 'react'
import CSS from './index.module.css'
import Water from '../../../context/Water'

function WaterInput() {
    const ref = useRef()
    const { setWater } = useContext(Water)

    function handleClick(action) {
        let value = +ref.current.value
        ref.current.value = ""
        if (value) {
            (action == "delete") ?
                setWater(prev => prev - value)
                :
                setWater(prev => prev + value)
        }
    }

    return (
        <div className={CSS.container}>
            <div className={CSS.inputs}>
                <input ref={ref} type="number" name='water' className={CSS.water} placeholder='water' />
                <p className={CSS.unit}>ml</p>
            </div>
            <div className={CSS.btns}>
                <p className={CSS.delete} onClick={() => handleClick("delete")}>delete</p>
                <p className={CSS.log} onClick={handleClick}>add</p>
            </div>
        </div>
    )
}

export default WaterInput