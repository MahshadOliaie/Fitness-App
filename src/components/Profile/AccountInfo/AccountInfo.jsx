import { useContext, useState } from 'react'
import CSS from './index.module.css'
import Information from '../../../context/Information/Information'
import { useForm } from 'react-hook-form'

function AccountInfo() {
    const { personalInfo, setPersonalInfo } = useContext(Information)
    const [edit, setEdit] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    async function submit(data) {
        setPersonalInfo({ ...personalInfo, "email": data.email })
        await setEdit(false)
    }

    return (
        <>
            <div className={CSS.accountInfo}>
                <h2 className={CSS.title}>Account</h2>
                <div className={CSS.info}>
                    <div className={CSS.email}>
                        <p>
                            {(edit) ?
                                <input {...register("email", {
                                    required: "email is required",
                                    validate: (value) => {
                                        if (!value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
                                            return "invalid email!"
                                        }
                                        return true
                                    }
                                })} type="email" className={CSS.input} defaultValue={personalInfo.email} style={(errors.email) ? { borderColor: "red" } : { borderColor: "black" }} />
                                :
                                personalInfo.email
                            }
                        </p>
                        {(edit) ?
                            <p className={CSS.submitBtn} onClick={handleSubmit(submit)}>done</p>
                            :
                            <svg className={CSS.editSvg} onClick={() => setEdit(true)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" /></svg>
                        }
                    </div>
                    <div className={CSS.password}>
                        <p>Change password</p>
                        <svg className={CSS.angleSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountInfo