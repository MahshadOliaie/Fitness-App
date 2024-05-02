import { useNavigate } from "react-router-dom"


function PreviousBtn({ step , setStep }) {
    const nav = useNavigate()

    function rerender(){
        setStep(step)
    }

    return (
        <>
            <div className="mt-10 self-start" onClick={() => nav(`/${step}`)}>
                <p onClick={rerender} className="px-5 py-2 w-max rounded-lg bg-blue-100 hover:bg-blue-200">Previous Step</p>
            </div>
        </>
    )
}

export default PreviousBtn