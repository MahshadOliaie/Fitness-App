import { useContext } from "react";
import { useForm } from "react-hook-form";
import Information from "/src/context/Information/Information";
import NextBtn from "../NextBtn/NextBtn";
import PreviousBtn from "../PreviousBtn/PreviousBtn";
import { useNavigate } from "react-router-dom";
import CSS from './index.module.css'


function PhysicalInfo({ setStep }) {
    const nav = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { setPhysicalInfo } = useContext(Information)

    async function submit(data) {
        setPhysicalInfo(data)
        await nav('/3')
    }

    return (
        <>
            <h1 className={CSS.title}>Physical Info</h1>
            <form className={CSS.form}>
                <div>
                    <input {...register("age", {
                        required: "fill this input"
                    })} type="number" placeholder="age" className={CSS.input} />
                    {errors.age && <p className={CSS.error}>{errors.age.message}</p>}
                </div>

                <div>
                    <input {...register("weight", {
                        required: "fill this input"
                    })} type="number" placeholder="weight (kg)" className={CSS.input} />
                    {errors.weight && <p className={CSS.error}>{errors.weight.message}</p>}
                </div>

                <div>
                    <input {...register("height", {
                        required: "fill this input"
                    })} type="number" placeholder="height (cm)" className={CSS.input} />
                    {errors.height && <p className={CSS.error}>{errors.height.message}</p>}
                </div>

                <div className={CSS.genders}>
                    <div className={CSS.gender}><input {...register("gender", {
                        required: "select one gender"
                    })} type="radio" name="gender" id="male" value={"male"} />
                        <label htmlFor="male">male</label></div>
                    <div className={CSS.gender}><input {...register("gender", {
                        required: "select one gender"
                    })} type="radio" name="gender" id="female" value={"female"} />
                        <label htmlFor="female">female</label></div>
                </div>
                {errors.gender && <p className={CSS.error} style={{ alignSelf: "center" }}>{errors.gender.message}</p>}
            </form>
            <div className={CSS.btns}>
                <PreviousBtn step={" "} setStep={setStep} />
                <NextBtn onClick={handleSubmit(submit)} />
            </div>
        </>
    )
}

export default PhysicalInfo;