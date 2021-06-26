import {createContext, useReducer} from 'react'
import GeneralReducer from './reducers/GeneralReducer'
import LoginReducer from './reducers/LoginReducer'
import RegisterReducer from './reducers/RegisterReducer'
import AuthReducer from './reducers/AuthReducer'
import UserReducer from './reducers/UserReducer'
import UserDetailsReducer from './reducers/UserDetailsReducer'
const GeneralContext = createContext()

export const GeneralContextProvider = ({children}) => {
    const [userDetailsState, userDetailsDicpatcher] = useReducer(UserDetailsReducer, {
                                                    isLoading: false,
                                                    userId: '',
                                                    message: {text: '', style: ''},
                                                    userDetails: {}
                                                })
    const [userInfoState, userInfoDispatcher] = useReducer(UserReducer, {
                                                    userId: '',
                                                    email: '', 
                                                    exp: ''
                                                })
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
    const [isAuthenticatedState, isAuthenticatedDispatcher] = useReducer(AuthReducer, {isAuth: false})
    return(
        <GeneralContext.Provider value={{
                                          userDetailsState,
                                          userDetailsDicpatcher,
                                          userInfoState,
                                          userInfoDispatcher,
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