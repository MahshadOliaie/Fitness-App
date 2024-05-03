
import { useEffect, useState } from "react"
import Dashboard from "./components/Dashboard/Dashboard"
import Layout from "./components/Layout/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import WaterPage from "./components/WaterPage/WaterPage"
import RecipePage from "./components/RecipePage/RecipePage"
import Profile from "./components/Profile/Profile"
import Water from "./context/Water"
import WizardForm from "./components/WizardForm/WizardForm"
import Information from "./context/Information/Information"

function App() {
  const [isFoodListOpen, setIsFoodListOpen] = useState(false)
  const [selectedMeal, setSelectedMeal] = useState("")
  const [water, setWater] = useState(JSON.parse(localStorage.getItem("water")) || 0)
  const [personalInfo, setPersonalInfo] = useState(JSON.parse(localStorage.getItem("personalInfo")) || {})
  const [physicalInfo, setPhysicalInfo] = useState(JSON.parse(localStorage.getItem("physicalInfo")) || {})
  const [activityLevel, setActivityLevel] = useState(JSON.parse(localStorage.getItem("activityLevel")) || "")
  const [goal, setGoal] = useState(JSON.parse(localStorage.getItem("goal")) || '')
  const [firstTimeLog, setFirstTimeLog] = useState(JSON.parse(localStorage.getItem("firstTimeLog")) || 'true')

  useEffect(() => {
    localStorage.setItem("water", JSON.stringify(water))
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo))
    localStorage.setItem("physicalInfo", JSON.stringify(physicalInfo))
    localStorage.setItem("activityLevel", JSON.stringify(activityLevel))
    localStorage.setItem("goal", JSON.stringify(goal))
    localStorage.setItem("firstTimeLog", JSON.stringify(firstTimeLog))

  }, [water, activityLevel, personalInfo, physicalInfo, goal, firstTimeLog])


  function logSetter() {
    setFirstTimeLog(false)
  }

  return (
    <Water.Provider value={{
      water,
      setWater
    }}>
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
        {(firstTimeLog == 'true') ?
          <WizardForm logSetter={logSetter} />
          :
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard setSelectedMeal={setSelectedMeal} setIsFoodListOpen={setIsFoodListOpen} selectedMeal={selectedMeal} isFoodListOpen={isFoodListOpen} />}></Route>
              <Route path="/WaterPage" element={<Layout setIsFoodListOpen={setIsFoodListOpen} setSelectedMeal={setSelectedMeal}>
                <WaterPage /></Layout>}></Route>
              <Route path="/Recipes" element={<Layout setIsFoodListOpen={setIsFoodListOpen} setSelectedMeal={setSelectedMeal}>
                <RecipePage /></Layout>}></Route>
              <Route path="/Profile" element={<Layout setIsFoodListOpen={setIsFoodListOpen} setSelectedMeal={setSelectedMeal}><Profile /></Layout>}></Route>
            </Routes>
          </BrowserRouter>

        }
      </Information.Provider>
    </Water.Provider>
  )
}

export default App
