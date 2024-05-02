import { useForm } from "react-hook-form"
import NextBtn from "../NextBtn/NextBtn"
import { useContext } from "react"
import Information from "../../context/Information/Information"
import PreviousBtn from "../PreviousBtn/PreviousBtn"
import { useNavigate } from "react-router-dom"


function GoalSelector({ setStep }) {
    const nav = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { setGoal } = useContext(Information)

    async function submit(data) {
        setGoal(data)
        await nav('/result')
    }

    return (
        <>
            <h1 className="text-2xl font-medium my-5">select your goal</h1>
            <form className="flex flex-col w-2/5 gap-7">
                <div className="gap-2 flex" >
                    <input {...register("goal", {
                        required: "select one item"
                    })} type="radio" name="goal" id="gain" value={"gain"} />
                    <label htmlFor="gain">Muscle gain</label>
                </div>

                <div className="gap-2 flex">
                    <input {...register("goal", {
                        required: "select one item"
                    })} type="radio" name="goal" id="maintain" value={"maintain"} />
                    <label htmlFor="maintain">Maintain</label>
                </div>

                <div className="gap-2 flex">
                    <input {...register("goal", {
                        required: "select one item"
                    })} type="radio" name="goal" id="cut" value={"cut"} />
                    <label htmlFor="cut">Fat loss</label>
                </div>

                {errors.goal && <p className="text-red-300">{errors.goal.message}</p>}
            </form>

            <div className="flex justify-between">
                <PreviousBtn step={3} setStep={setStep} />
                <NextBtn onClick={handleSubmit(submit)} state={"Done"} />
            </div>


        </>
    )
}

export default GoalSelector