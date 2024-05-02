import { useContext } from "react";
import { useForm } from "react-hook-form";
import Information from "../../context/Information/Information";
import NextBtn from "../NextBtn/NextBtn";
import PreviousBtn from "../PreviousBtn/PreviousBtn";
import { useNavigate } from "react-router-dom";


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
            <h1 className="text-2xl font-medium my-5">Physical Info</h1>
            <form className="flex flex-col gap-7">
                <div>
                    <input {...register("age", {
                        required: "fill this input"
                    })} type="number" placeholder="age" className="bg-gray-50 w-full p-3 shadow-inner rounded-xl" />
                    {errors.age && <p className="text-red-300">{errors.age.message}</p>}
                </div>

                <div>
                    <input {...register("weight", {
                        required: "fill this input"
                    })} type="number" placeholder="weight (kg)" className="bg-gray-50 w-full  p-3 shadow-inner rounded-xl" />
                    {errors.weight && <p className="text-red-300">{errors.weight.message}</p>}
                </div>

                <div>
                    <input {...register("height", {
                        required: "fill this input"
                    })} type="number" placeholder="height (cm)" className="bg-gray-50 w-full p-3 shadow-inner rounded-xl" />
                    {errors.height && <p className="text-red-300">{errors.height.message}</p>}
                </div>

                <div className="flex gap-10 justify-center">
                    <div className="gap-2 flex"><input {...register("gender", {
                        required: "select one gender"
                    })} type="radio" name="gender" id="male" value={"male"} />
                        <label htmlFor="male">male</label></div>
                    <div className="gap-2 flex"><input {...register("gender", {
                        required: "select one gender"
                    })} type="radio" name="gender" id="female" value={"female"} />
                        <label htmlFor="female">female</label></div>
                </div>
                {errors.gender && <p className="text-red-300 self-center">{errors.gender.message}</p>}
            </form>
            <div className="flex w-full justify-between">
                <PreviousBtn step={" "} setStep={setStep} />
                <NextBtn onClick={handleSubmit(submit)} />
            </div>
        </>
    )
}

export default PhysicalInfo;