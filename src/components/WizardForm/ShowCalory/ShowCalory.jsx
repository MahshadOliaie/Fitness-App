import { useContext } from "react"
import Information from "/src/context/Information/Information"
import CSS from './index.module.css'


function ShowCalory() {
    const activityLevelsNumber = {
        "one": 1.2,
        "two": 1.375,
        "three": 1.55,
        "four": 1.725,
        "five": 1.9
    }

    const { personalInfo, physicalInfo, goal, activityLevel } = useContext(Information)
    let formula = (10 * physicalInfo.weight) + (6.25 * physicalInfo.height) - (5 * physicalInfo.age)
    let BMR = (physicalInfo.gender == "male") ? formula + 5 : formula - 161
    let maintainCalory = Math.ceil(BMR * activityLevelsNumber[activityLevel.activityLevel])


    const goals = {
        "gain": maintainCalory + (maintainCalory / 10),
        "cut": maintainCalory - (maintainCalory / 10),
        "maintain": maintainCalory
    }

    return (
        <div className="flex flex-col items-center pt-20">
            <h1 className="text-2xl font-medium my-10">Welcome {personalInfo.name}</h1>
            <p className="text-xl font-medium my-5">this is your Calorie Budget:</p>
            <div className="text-3xl bg-blue-200 mt-10 w-44 h-44 rounded-full shadow-lg flex items-center justify-center">{Math.ceil(goals[goal.goal])}</div>
        </div>
    )
}

export default ShowCalory