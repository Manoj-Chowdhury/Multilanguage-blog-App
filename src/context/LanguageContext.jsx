import { createContext, useContext, useState } from "react";

export const LanguageContext = createContext()

export const LanguageContextProvider = (props)=>{
    const [language, setLanguage] = useState("english")
    const [menu, setMenu] = useState(false)
    const [theme,setTheme] = useState("light-theme")
    const [checked, setChecked] = useState(false)


    return(
    <LanguageContext.Provider value={{language,setLanguage,menu,setMenu,theme,setTheme,checked, setChecked}}>
        {props.children}
    </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    return useContext(LanguageContext)
}