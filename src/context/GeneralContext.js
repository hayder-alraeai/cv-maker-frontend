import {createContext, useState} from 'react'
const GeneralContext = createContext()

export const GeneralContextProvider = ({children}) => {
    const [isMenuBarsOpen, setIsMenuBarsOpen] = useState(false)
    const [active, setActive] = useState('home')
    const [sideBarActive, setSideBarActive] = useState('')
    const activeToggleHandler = value => {
        setActive(value)
    }
    const menuBarsToggleHandler = () => {
        setIsMenuBarsOpen(!isMenuBarsOpen)
    }
    const sideBarActiveToggleHandler = value => {
        setSideBarActive(value)
    }
    return(
        <GeneralContext.Provider value={{isMenuBarsOpen,
                                         menuBarsToggleHandler,
                                          active, 
                                          activeToggleHandler,
                                          }}>
            {children}
        </GeneralContext.Provider>
    )
}
export default GeneralContext;