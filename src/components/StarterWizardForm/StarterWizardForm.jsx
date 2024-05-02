import { useState } from "react"
import ActivityLevel from "./components/ActivityLevel/ActivityLevel"
import GoalSelector from "./components/GoalSelector/GoalSelector"
import PersonalInfo from "./components/PersonalInfo/PersonalInfo"
import PhysicalInfo from "./components/PhysicalInfo/PhysicalInfo"
import StepBar from "./components/StepBar/StepBar"
import Information from "./context/Information/Information"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ShowCalory from "./components/ShowCalory/ShowCalory"
import './output.css'

function StarterWizardForm() {
  const [personalInfo, setPersonalInfo] = useState({})
  const [physicalInfo, setPhysicalInfo] = useState({})
  const [activityLevel, setActivityLevel] = useState("")
  const [goal, setGoal] = useState("")
  const [step, setStep] = useState("/")

  return (
    <>
      <Information.Provider value={{
        personalInfo,
        setPersonalInfo,
        physicalInfo,
        setPhysicalInfo,
        activityLevel,
        setActivityLevel,
        goal,
        setGoal
      }}>

        <div className="flex flex-col mx-auto w-4/5 ps-5" >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<> <StepBar step={step} /> <PersonalInfo /></>} />
              <Route path="/2" element={<> <StepBar step={step} /> <PhysicalInfo setStep={setStep} /></>} />
              <Route path="/3" element={<> <StepBar step={step} /> <ActivityLevel setStep={setStep} /></>} />
              <Route path="/4" element={<> <StepBar step={step} /> <GoalSelector setStep={setStep} /></>} />
              <Route path="/result" element={<ShowCalory />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Information.Provider>
    </>
  )
}

export default StarterWizardForm