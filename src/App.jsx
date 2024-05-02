
import { useEffect, useState } from "react"
import Dashboard from "./components/Dashboard/Dashboard"
import FoodContext from "./context/FoodContext"
import Layout from "./components/Layout/Layout"
import LogHistory from "./context/LogHistory"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import WaterPage from "./components/WaterPage/WaterPage"
import RecipePage from "./components/RecipePage/RecipePage"
import Profile from "./components/Profile/Profile"
import StarterWizardForm from "./components/StarterWizardForm/StarterWizardForm"

function App() {
  const [breakfast, setBreakfast] = useState(JSON.parse(localStorage.getItem("breakfast")) || [])
  const [lunch, setLunch] = useState(JSON.parse(localStorage.getItem("lunch")) || [])
  const [dinner, setDinner] = useState(JSON.parse(localStorage.getItem("dinner")) || [])
  const [snack, setSnack] = useState(JSON.parse(localStorage.getItem("snack")) || [])
  const [water, setWater] = useState(JSON.parse(localStorage.getItem("water")) || 0)


  const [isFoodListOpen, setIsFoodListOpen] = useState(false)
  const [selectedMeal, setSelectedMeal] = useState("")
  const [logHistory, setLogHistory] = useState(JSON.parse(localStorage.getItem("logHistory")) || [])

  useEffect(() => {
    localStorage.setItem("breakfast", JSON.stringify(breakfast))
    localStorage.setItem("lunch", JSON.stringify(lunch))
    localStorage.setItem("dinner", JSON.stringify(dinner))
    localStorage.setItem("snack", JSON.stringify(snack))
    localStorage.setItem("logHistory", JSON.stringify(logHistory))
    localStorage.setItem("water", JSON.stringify(water))

  }, [breakfast, lunch, dinner, snack, logHistory, water])

  return (
    <>
      <FoodContext.Provider value={{
        breakfast,
        lunch,
        dinner,
        snack,
        water,
        setWater,
        setBreakfast,
        setDinner,
        setLunch,
        setSnack
      }}>
        <LogHistory.Provider value={{
          logHistory,
          setLogHistory
        }}>


          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout setIsFoodListOpen={setIsFoodListOpen} setSelectedMeal={setSelectedMeal}>
                <Dashboard setIsFoodListOpen={setIsFoodListOpen} selectedMeal={selectedMeal} isFoodListOpen={isFoodListOpen} /></Layout>}></Route>
              <Route path="/WaterPage" element={<Layout setIsFoodListOpen={setIsFoodListOpen} setSelectedMeal={setSelectedMeal}>
                <WaterPage /></Layout>}></Route>
              <Route path="/Recipes" element={<Layout setIsFoodListOpen={setIsFoodListOpen} setSelectedMeal={setSelectedMeal}>
                <RecipePage /></Layout>}></Route>
              <Route path="/Profile" element={<Layout setIsFoodListOpen={setIsFoodListOpen} setSelectedMeal={setSelectedMeal}><Profile /></Layout>}></Route>
            </Routes>
          </BrowserRouter>


        </LogHistory.Provider>
      </FoodContext.Provider >
      <StarterWizardForm />
    </>
  )
}

export default App
