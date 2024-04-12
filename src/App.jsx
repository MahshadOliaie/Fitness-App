
import { useEffect, useState } from "react"
import Dashboard from "./components/Dashboard/Dashboard"
import FoodContext from "./context/FoodContext"
import Layout from "./components/Layout/Layout"
import LogHistory from "./context/LogHistory"

function App() {
  const [breakfast, setBreakfast] = useState(JSON.parse(localStorage.getItem("breakfast")) || [])
  const [lunch, setLunch] = useState(JSON.parse(localStorage.getItem("lunch")) || [])
  const [dinner, setDinner] = useState(JSON.parse(localStorage.getItem("dinner")) || [])
  const [snack, setSnack] = useState(JSON.parse(localStorage.getItem("snack")) || [])

  const [isFoodListOpen, setIsFoodListOpen] = useState(false)
  const [selectedMeal, setSelectedMeal] = useState("")
  const [logHistory, setLogHistory] = useState(JSON.parse(localStorage.getItem("logHistory")) || [])

  useEffect(() => {
    localStorage.setItem("breakfast", JSON.stringify(breakfast))
    localStorage.setItem("lunch", JSON.stringify(lunch))
    localStorage.setItem("dinner", JSON.stringify(dinner))
    localStorage.setItem("snack", JSON.stringify(snack))
    localStorage.setItem("logHistory", JSON.stringify(logHistory))

  }, [breakfast, lunch, dinner, snack, logHistory])

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
        <LogHistory.Provider value={{
          logHistory,
          setLogHistory
        }}>

          <Layout setIsFoodListOpen={setIsFoodListOpen} setSelectedMeal={setSelectedMeal}>
            <Dashboard setIsFoodListOpen={setIsFoodListOpen} selectedMeal={selectedMeal} isFoodListOpen={isFoodListOpen} />
          </Layout>

        </LogHistory.Provider>
      </FoodContext.Provider>
    </>
  )
}

export default App


// hYvUzuDQpZu/odwBI/6Abg==T3kgV51IrePL78hW