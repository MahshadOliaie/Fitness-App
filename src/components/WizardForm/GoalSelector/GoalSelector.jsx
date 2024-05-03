import { useForm } from "react-hook-form"
import NextBtn from "../NextBtn/NextBtn"
import { useContext } from "react"
import Information from "/src/context/Information/Information"
import PreviousBtn from "../PreviousBtn/PreviousBtn"
import CSS from './index.module.css'
import { useNavigate } from "react-router-dom"


function GoalSelector({ setStep, logSetter }) {
    const nav = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { setGoal } = useContext(Information)

    function setter(){
        logSetter()
        nav("/")
    }

    async function submit(data) {
        setGoal(data)
        await setter()
    }

    return (
        <>
            <h1 className={CSS.title}>select your goal</h1>
            <form className={CSS.form}>
                <div className={CSS.eachSelect} >
                    <input {...register("goal", {
                        required: "select one item"
                    })} type="radio" name="goal" id="gain" value={"gain"} />
                    <label htmlFor="gain">Muscle gain</label>
                </div>

                <div className={CSS.eachSelect}>
                    <input {...register("goal", {
                        required: "select one item"
                    })} type="radio" name="goal" id="maintain" value={"maintain"} />
                    <label htmlFor="maintain">Maintain</label>
                </div>

                <div className={CSS.eachSelect}>
                    <input {...register("goal", {
                        required: "select one item"
                    })} type="radio" name="goal" id="cut" value={"cut"} />
                    <label htmlFor="cut">Fat loss</label>
                </div>

                {errors.goal && <p className={CSS.error}>{errors.goal.message}</p>}
            </form>

            <div className={CSS.btns}>
                <PreviousBtn step={3} setStep={setStep} />
                <NextBtn onClick={handleSubmit(submit)} state={"Done"} />
            </div>


        </>
    )
}

export default GoalSelector