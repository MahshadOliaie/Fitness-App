import { useContext } from "react";
import NextBtn from "../NextBtn/NextBtn";
import Information from "../../context/Information/Information";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function PersonalInfo() {
    const nav = useNavigate()
    const { setPersonalInfo } = useContext(Information)
    const { register, handleSubmit, formState: { errors } } = useForm()


    async function submit(data) {
        setPersonalInfo(data)
        await nav('/2')
    }



    return (
        <>
            <h1 className="text-2xl font-medium my-5">Personal Info</h1>
            <form className="flex flex-col gap-7">

                <div>
                    <input {...register("name", {
                        required: "fill this input",
                    })} type="text" placeholder="name" className="bg-gray-50 w-full p-3 shadow-inner rounded-xl" />
                    {errors.name && <p className="text-red-300">{errors.name.message}</p>}
                </div>


                <div>
                    <input {...register("email", {
                        required: "email is required",
                        validate: (value) => {
                            if (!value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
                                return "invalid email!"
                            }
                            return true
                        }
                    })} type="email" placeholder="example@email.com" className="bg-gray-50 w-full p-3 shadow-inner rounded-xl" />
                    {errors.email && <p className="text-red-300">{errors.email.message}</p>}
                </div>

                <div>
                    <input {...register("password", {
                        required: "password is required",
                        minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters"
                        }
                    })} type="password" placeholder="password (at least 8 characters)" className="bg-gray-50 w-full p-3 shadow-inner rounded-xl" />
                    {errors.password && <p className="text-red-300">{errors.password.message}</p>}
                </div>
            </form>
            <NextBtn onClick={handleSubmit(submit)} />
        </>
    )
}


export default PersonalInfo;