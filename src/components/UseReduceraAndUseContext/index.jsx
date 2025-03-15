import { createContext } from "react"

export const initialState = {
    theme: {
        backgroundColor: 'white' ,
        color : 'black' ,
        border : 'black'
    },
    card: {
        btnText: '',
        short: ''
    }
}

export const AppContext = createContext(initialState)