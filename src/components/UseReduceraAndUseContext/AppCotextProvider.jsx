import { useReducer } from "react"
import { AppContext, initialState } from "."
import AppReducer from "./reducer"

export const AppContextProvider= (props) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)
   
    return (
        <AppContext.Provider value={{state, dispatch}}>
        {props.children}
        </AppContext.Provider>
    )
}