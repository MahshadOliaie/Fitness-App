
import { useState } from "react"
import Dashboard from "./components/Dashboard/Dashboard"
import FoodContext from "./context/FoodContext"
import Layout from "./components/Layout/Layout"

function App() {
  const [breakfast, setBreakfast] = useState([])
  const [lunch, setLunch] = useState([])
  const [dinner, setDinner] = useState([])
  const [snack, setSnack] = useState([])

  const [isFoodListOpen, setIsFoodListOpen] = useState(false)
  const [selectedMeal, setSelectedMeal] = useState("")

  return (
    <>
      <FoodContext.Provider value={{
        breakfast,
        lunch,
        dinner,
        snack,
        setBreakfast,
        setDinner,
        setLunch,
        setSnack
      }}>

        <Layout setIsFoodListOpen={setIsFoodListOpen} setSelectedMeal={setSelectedMeal}>
          <Dashboard setIsFoodListOpen={setIsFoodListOpen} selectedMeal={selectedMeal} isFoodListOpen={isFoodListOpen} />
        </Layout>

      </FoodContext.Provider>
    </>
  )
}

export default App


// hYvUzuDQpZu/odwBI/6Abg==T3kgV51IrePL78hW