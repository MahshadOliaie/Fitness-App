
import CSS from './index.module.css'

function NextBtn({ onClick , state }) {
    

    return (
        <div className={CSS.btnContainer}>
            <p onClick={onClick} className={CSS.btn}>{state ? state : "Next Step"}</p>
        </div>
    )
}

export default NextBtn