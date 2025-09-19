import { createContext } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {
   
    const currency = '₹'
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const value = {
         currency,
         backendUrl
    }
    return (
        <AppContext.Provider value={value}> 
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider