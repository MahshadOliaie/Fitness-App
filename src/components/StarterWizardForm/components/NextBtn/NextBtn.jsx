import { useNavigate } from "react-router-dom"

function NextBtn({ onClick , state }) {
    

    return (
        <div className="mt-10 self-end">
            <p onClick={onClick} className="px-5 py-2 w-max rounded-lg bg-blue-300 hover:bg-blue-400">{state ? state : "Next Step"}</p>
        </div>
    )
}

export default NextBtn