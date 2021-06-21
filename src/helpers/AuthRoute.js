import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const AuthRoute = ({component, isAuthenticatedState, ...rest}) => {
    if(isAuthenticatedState.isAuth){
        return (
            <Route {...rest} component={component} />
        )
    }else{
        return(
            <Redirect path="/" />
        )
    }
    
}
export default AuthRoute