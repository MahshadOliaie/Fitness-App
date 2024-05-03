import { useContext, useState } from 'react';
import CSS from './index.module.css'
import Information from '../../../context/Information/Information';
import { useForm } from 'react-hook-form';

function PhysicalInfo() {
    const { physicalInfo, setPhysicalInfo } = useContext(Information)
    const [edit, setEdit] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    async function submit(data) {
        setPhysicalInfo(data)
        await setEdit(false)
    }

    return (
        <>
            <div className={CSS.physicalInfo}>
                <div className={CSS.titleContainer}>
                    <h2 className={CSS.title}>Physical info</h2>
                    {(edit) ?
                        <p className={CSS.submitBtn} onClick={handleSubmit(submit)}>done</p>
                        :
                        <svg className={CSS.editSvg} onClick={() => setEdit(true)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" /></svg>
                    }
                </div>
                <div className={CSS.info}>
                    <div className={CSS.age}>
                        <p>age</p>
                        {(edit) ?
                            <input {...register("age", {
                                required: "fill this input"
                            })} className={CSS.input} type="number" defaultValue={physicalInfo.age} style={(errors.age) ? { borderColor: "red" } : { borderColor: "black" }} />
                            :
                            <p>{physicalInfo.age}</p>
                        }
                    </div>
                    <div className={CSS.weight}>
                        <p>weight</p>
                        <p>{(edit) ? <input {...register("weight", {
                            required: "fill this input"
                        })} className={CSS.input} type='number' defaultValue={physicalInfo.weight} style={(errors.weight) ? { borderColor: "red" } : { borderColor: "black" }} /> : physicalInfo.weight} kg</p>
                    </div>
                    <div className={CSS.height}>
                        <p>height</p>
                        <p>{(edit) ? <input {...register("height", {
                            required: "fill this input"
                        })} className={CSS.input} type='number' defaultValue={physicalInfo.height} style={(errors.height) ? { borderColor: "red" } : { borderColor: "black" }} /> : physicalInfo.height} cm</p>
                    </div>
                    <div className={CSS.gender}>
                        <p>gender</p>
                        <p>
                            {(edit) ?
                                <select {...register("gender", {
                                    required: "fill this input"
                                })} className={CSS.selector} name="gender" id="gender" defaultValue={physicalInfo.gender}>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                </select>
                                :
                                physicalInfo.gender
                            }
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhysicalInfo;