import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";
import { useJwt } from "react-jwt";
import { useContext, useEffect } from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Signup from "./screens/Signup";
import NavBar from "./components/NavBar"
import SideMenu from "./components/SideMenu"
import About from "./screens/About";
import Settings from "./screens/Settings";
import GeneralContext from "./context/GeneralContext";
import AuthRoute from "./helpers/AuthRoute";
import Verification from './screens/Verification'
import NotFound from "./screens/NotFound";
import AddCvInfo from "./screens/AddCvInfo";
const Router = () => {
    const {isAuthenticatedState, isAuthenticatedDispatcher, userInfoDispatcher} = useContext(GeneralContext) 
    const { isExpired, decodedToken } = useJwt(localStorage.getItem('token'));
    useEffect(() => {
        if(isExpired){
            isAuthenticatedDispatcher({type: 'notAuth'})
        }else{
            isAuthenticatedDispatcher({type: 'auth'})
        }
    },[isAuthenticatedDispatcher, isExpired])
    useEffect(() => {
        if(decodedToken) userInfoDispatcher({type: 'info', payload: {userId: decodedToken.userId, email: decodedToken.email, exp: decodedToken.exp}})
    }, [decodedToken, userInfoDispatcher])
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <NavBar />
                    <SideMenu />
                    <Home />
                </Route>
                <Route exact path='/login'>
                    <NavBar />
                    <SideMenu />
                    <Login />
                </Route>
                <Route exact path='/signup'>
                    <NavBar />
                    <SideMenu />
                    <Signup />
                </Route>
                <AuthRoute isAuthenticatedState={isAuthenticatedState}  path='/profile'>
                    <NavBar />
                    <SideMenu />
                    <Profile />
                </AuthRoute>
                <AuthRoute isAuthenticatedState={isAuthenticatedState}  path='/settings'>
                    <NavBar />
                    <SideMenu />
                    <Settings />
                </AuthRoute>
                <AuthRoute isAuthenticatedState={isAuthenticatedState}  exact path='/person-details/:id' >
                    <NavBar />
                    <SideMenu />
                    <AddCvInfo />
                </AuthRoute>
                <Route exact path='/about'>
                    <NavBar />
                    <SideMenu />
                    <About />
                </Route>
                <Route exact path='/verify/:id' >
                    <NavBar />
                    <Verification />
                </Route >
                <Route exact path='/404' >
                    <NavBar />
                    <NotFound />
                </Route >
            </Switch>
        </BrowserRouter>
    )
}
export default Router