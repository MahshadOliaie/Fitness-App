import { useNavigate } from "react-router-dom"
import CSS from './index.module.css'


function PreviousBtn({ step , setStep }) {
    const nav = useNavigate()

    function rerender(){
        setStep(step)
    }

    return (
        <>
            <div className={CSS.btnContainer} onClick={() => nav(`/${step}`)}>
                <p onClick={rerender} className={CSS.btn}>Previous Step</p>
            </div>
        </>
    )
}

export default PreviousBtn