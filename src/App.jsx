
import { useState } from "react"
import Dashboard from "./components/Dashboard/Dashboard"
import Layout from "./components/Layout/Layout"
import LogHistory from "./context/LogHistory"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import WaterPage from "./components/WaterPage/WaterPage"
import RecipePage from "./components/RecipePage/RecipePage"
import Profile from "./components/Profile/Profile"
import StarterWizardForm from "./components/StarterWizardForm/StarterWizardForm"

function App() {
  const [isFoodListOpen, setIsFoodListOpen] = useState(false)
  const [selectedMeal, setSelectedMeal] = useState("")

  return (
    <>
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
     
      {/* <StarterWizardForm /> */}
    </>
  )
}

export default App
