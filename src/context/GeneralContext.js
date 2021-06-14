import {createContext, useState} from 'react'
const GeneralContext = createContext()

export const GeneralContextProvider = ({children}) => {
    const [isMenuBarsOpen, setIsMenuBarsOpen] = useState(false)
    const menuBarsToggleHandler = () => {
        setIsMenuBarsOpen(!isMenuBarsOpen)
    }
    return(
        <GeneralContext.Provider value={{isMenuBarsOpen, menuBarsToggleHandler}}>
            {children}
        </GeneralContext.Provider>
    )
}
export default GeneralContext;