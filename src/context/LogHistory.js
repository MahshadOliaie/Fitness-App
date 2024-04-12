import { createContext } from "react";


const LogHistory = createContext({
    logHistory: [],
    setLogHistory: () => { }
})

export default LogHistory