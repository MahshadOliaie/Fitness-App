import { useState } from "react"
import ActivityLevel from "./ActivityLevel/ActivityLevel"
import GoalSelector from "./GoalSelector/GoalSelector"
import PersonalInfo from "./PersonalInfo/PersonalInfo"
import PhysicalInfo from "./PhysicalInfo/PhysicalInfo"
import ShowCalory from "./ShowCalory/ShowCalory"
import StepBar from "./StepBar/StepBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CSS from './index.module.css'


function WizardForm({logSetter}) {
    const [step, setStep] = useState("/")

    return (
        <>
            <div className={CSS.container}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<> <StepBar step={step} /> <PersonalInfo /></>} />
                        <Route path="/2" element={<> <StepBar step={step} /> <PhysicalInfo setStep={setStep} /></>} />
                        <Route path="/3" element={<> <StepBar step={step} /> <ActivityLevel setStep={setStep} /></>} />
                        <Route path="/4" element={<> <StepBar step={step} /> <GoalSelector setStep={setStep} logSetter={logSetter} /></>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default WizardForm