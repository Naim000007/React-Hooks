import { createContext } from "react";
const AppContext = createContext();

const AppProvider = ({children})=>{
    const data = {
        name: 'naim',
        age: 22
    }
    return<AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>
}
export { AppContext, AppProvider };
