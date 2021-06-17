import {createContext, useReducer} from 'react'
import GeneralReducer from './reducers/GeneralReducer'
import LoginReducer from './reducers/LoginReducer'
import RegisterReducer from './reducers/RegisterReducer'
import AuthReducer from './reducers/AuthReducer'
const GeneralContext = createContext()

export const GeneralContextProvider = ({children}) => {
    const [generalState, generalDispatcher] = useReducer(GeneralReducer, {
                                                    isMenuBarsOpen: false, 
                                                    active: 'home'
                                                })
    const [loginState, loginDispatcher] = useReducer(LoginReducer, {
                                                    token: '',
                                                    message: ''
                                                })
    const [registerState, registerDispatcher] = useReducer(RegisterReducer, {
                                                    firstName: '',
                                                    lastName: '',
                                                    email: '',
                                                    password: ''
                                                })
    const [isAuthenticatedState, isAuthenticatedDispatcher] = useReducer(AuthReducer, {isAuth: false})
    return(
        <GeneralContext.Provider value={{
                                          generalState,
                                          generalDispatcher,
                                          loginState,
                                          loginDispatcher,
                                          registerState,
                                          registerDispatcher,
                                          isAuthenticatedState,
                                          isAuthenticatedDispatcher
                                          }}>
            {children}
        </GeneralContext.Provider>
    )
}
export default GeneralContext;