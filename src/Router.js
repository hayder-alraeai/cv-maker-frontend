import {
    BrowserRouter,
    Switch,
    Route
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
const Router = () => {
    const {isAuthenticatedState, isAuthenticatedDispatcher} = useContext(GeneralContext) 
    const { isExpired } = useJwt(localStorage.getItem('token'));
    useEffect(() => {
        if(isExpired){
            isAuthenticatedDispatcher({type: 'notAuth'})
        }else{
            isAuthenticatedDispatcher({type: 'auth'})
        }
    },[isAuthenticatedDispatcher, isExpired])
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
                <Route exact path='/about'>
                    <NavBar />
                    <SideMenu />
                    <About />
                </Route>
                <Route exact path='/verify/:id' >
                    <NavBar />
                    <Verification />
                </Route >
            </Switch>
        </BrowserRouter>
    )
}
export default Router