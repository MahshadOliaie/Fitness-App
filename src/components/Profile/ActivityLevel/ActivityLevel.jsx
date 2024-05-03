
import { useContext, useState } from 'react';
import CSS from './index.module.css'
import Information from '../../../context/Information/Information';
import { useForm } from 'react-hook-form';


function ActivityLevel() {
    const { activityLevel, setActivityLevel } = useContext(Information)
    const [edit, setEdit] = useState(false)
    const { register, handleSubmit} = useForm()

    const activityLevelsList = {
        "one": 'Sedentary',
        "two": 'Lightly active',
        "three": 'Moderately active',
        "four": 'Very active',
        "five": 'Extremely active'
    }

    async function submit(data) {
        setActivityLevel(data)
        await setEdit(false)
    }


    return (
        <>
            <div className={CSS.activityInfo}>
                <div className={CSS.titleContainer}>
                    <h2 className={CSS.title}>Activity level</h2>
                    {(edit) ?
                        <p className={CSS.submitBtn} onClick={handleSubmit(submit)}>done</p>
                        :
                        <svg className={CSS.editSvg} onClick={() => setEdit(true)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" /></svg>
                    }
                </div>
                <div className={CSS.info}>
                    <div className={CSS.activity}>
                        <p>activity level</p>
                        {(edit) ?
                            <select {...register("activityLevel", {
                                required: "fill this input"
                            })} className={CSS.selector} name="activityLevel" id="activityLevel" defaultValue={activityLevelsList[activityLevel.activityLevel]}>
                                <option value="one">Sedentary</option>
                                <option value="two">Lightly active</option>
                                <option value="three">Moderately active</option>
                                <option value="four">Very active</option>
                                <option value="five">Extremely active</option>
                            </select>
                            :
                            <p>{activityLevelsList[activityLevel.activityLevel]}</p>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivityLevel;