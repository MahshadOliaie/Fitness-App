import { createContext } from "react";



const Information = createContext({
    personalInfo: {},
    setPersonalInfo: () => { },

    physicalInfo: {},
    setPhysicalInfo: () => { },

    activityLevel: "",
    setActivityLevel: () => { },

    goal: "",
    setGoal: () => { }
})


export default Information