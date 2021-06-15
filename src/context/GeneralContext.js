import {createContext, useReducer} from 'react'
import GeneralReducer from './reducers/GeneralReducer'
import LoginReducer from './reducers/LoginReducer'
import RegisterReducer from './reducers/RegisterReducer'
const GeneralContext = createContext()

export const GeneralContextProvider = ({children}) => {
    const [generalState, generalDispatcher] = useReducer(GeneralReducer, {
                                                    isMenuBarsOpen: false, 
                                                    active: 'home'
                                                })
    const [loginState, loginDispatcher] = useReducer(LoginReducer, {
                                                    email: '',
                                                    password: ''
                                                })
    const [registerState, registerDispatcher] = useReducer(RegisterReducer, {
                                                    firstName: '',
                                                    lastName: '',
                                                    email: '',
                                                    password: ''
                                                })
    return(
        <GeneralContext.Provider value={{
                                          generalState,
                                          generalDispatcher,
                                          loginState,
                                          loginDispatcher,
                                          registerState,
                                          registerDispatcher
                                          }}>
            {children}
        </GeneralContext.Provider>
    )
}
export default GeneralContext;