import { useContext } from "react"
import { useForm } from "react-hook-form"
import Information from "/src/context/Information/Information"
import NextBtn from "../NextBtn/NextBtn"
import PreviousBtn from "../PreviousBtn/PreviousBtn"
import { useNavigate } from "react-router-dom"
import CSS from './index.module.css'


function ActivityLevel({ setStep }) {
    const nav = useNavigate()
    const { setError, handleSubmit, getValues, clearErrors, setValue, formState: { errors } } = useForm({
        shouldUnregister: false,
    })
    const { setActivityLevel } = useContext(Information)

    async function submitActivity(data) {
        if (getValues("activityLevel")) {
            setActivityLevel(data)
            await nav('/4')
        } else {
            setError("activityLevel", {
                message: "select one item"
            })
        }
    }

    function handleChange() {
        setValue("activityLevel", event.target.value)
        clearErrors("activityLevel")
    }

    return (
        <>
            <h1 className={CSS.title}>select your activity level</h1>
            <form className={CSS.form}>
                <div className={CSS.eachSelect} >
                    <input onChange={handleChange} type="radio" name="rate" id="one" value={"one"} />
                    <label htmlFor="one">Sedentary <span className={CSS.span}>(Little or no Exercise/ desk job)</span></label>
                </div>

                <div className={CSS.eachSelect}>
                    <input onChange={handleChange} type="radio" name="rate" id="two" value={"two"} />
                    <label htmlFor="two">Lightly active <span className={CSS.span}>(1-3 days Exercise per week)</span></label>
                </div>

                <div className={CSS.eachSelect}>
                    <input onChange={handleChange} type="radio" name="rate" id="three" value={"three"} />
                    <label htmlFor="three">Moderately active <span className={CSS.span}>(3-5 days Exercise/ desk job)</span></label>
                </div>

                <div className={CSS.eachSelect}>
                    <input onChange={handleChange} type="radio" name="rate" id="four" value={"four"} />
                    <label htmlFor="four">Very active <span className={CSS.span}>(4-5 days Exercise/ Physical job)</span></label>
                </div>

                <div className={CSS.eachSelect}>
                    <input onChange={handleChange} type="radio" name="rate" id="five" value={"five"} />
                    <label htmlFor="five">Extremely active <span className={CSS.span}>(7 days Exercise/ Physical job)</span></label>
                </div>

                {errors.activityLevel && <p className={CSS.error}>{errors.activityLevel.message}</p>}
            </form>

            <div className={CSS.btns}>
                <PreviousBtn step={2} setStep={setStep} />
                <NextBtn onClick={handleSubmit(submitActivity)} />
            </div>
        </>
    )
}

export default ActivityLevel