import { useContext } from "react";
import NextBtn from "../NextBtn/NextBtn";
import Information from "/src/context/Information/Information";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CSS from './index.module.css'

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
            <h1 className={CSS.title}>Personal Info</h1>
            <form className={CSS.form}>

                <div>
                    <input {...register("name", {
                        required: "fill this input",
                    })} type="text" placeholder="name" className={CSS.input} />
                    {errors.name && <p className={CSS.error}>{errors.name.message}</p>}
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
                    })} type="email" placeholder="example@email.com" className={CSS.input} />
                    {errors.email && <p className={CSS.error}>{errors.email.message}</p>}
                </div>

                <div>
                    <input {...register("password", {
                        required: "password is required",
                        minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters"
                        }
                    })} type="password" placeholder="password (at least 8 characters)" className={CSS.input} />
                    {errors.password && <p className={CSS.error}>{errors.password.message}</p>}
                </div>
            </form>
            <NextBtn onClick={handleSubmit(submit)} />
        </>
    )
}


export default PersonalInfo;