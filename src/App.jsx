
import { useState } from "react"
import Dashboard from "./components/Dashboard/Dashboard"
import FoodContext from "./context/FoodContext"

function App() {
  const [breakfast , setBreakfast] = useState([])
  const [lunch , setLunch] = useState([])
  const [dinner , setDinner] = useState([])
  const [snack , setSnack] = useState([])

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

        <Dashboard />

      </FoodContext.Provider>
    </>
  )
}

export default App


// hYvUzuDQpZu/odwBI/6Abg==T3kgV51IrePL78hW