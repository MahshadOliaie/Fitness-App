
import { useEffect, useState } from "react"
import Dashboard from "./components/Dashboard/Dashboard"
import Layout from "./components/Layout/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import WaterPage from "./components/WaterPage/WaterPage"
import RecipePage from "./components/RecipePage/RecipePage"
import Profile from "./components/Profile/Profile"
import Water from "./context/Water"

function App() {
  const [isFoodListOpen, setIsFoodListOpen] = useState(false)
  const [selectedMeal, setSelectedMeal] = useState("")
  const [water, setWater] = useState(JSON.parse(localStorage.getItem("water")) || 0)

  useEffect(() => {
    localStorage.setItem("water", JSON.stringify(water))
  }, [water])

  return (
      <Water.Provider value={{
        water,
        setWater
      }}>
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
      </Water.Provider>
  )
}

export default App
