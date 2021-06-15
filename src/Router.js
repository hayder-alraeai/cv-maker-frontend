import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Signup from "./screens/Signup";
import NavBar from "./components/NavBar"
import SideMenu from "./components/SideMenu"
import About from "./screens/About";
import Settings from "./screens/Settings";

const Router = () => {
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
                <Route exact path='/profile'>
                    <NavBar />
                    <SideMenu />
                    <Profile />
                </Route>
                <Route exact path='/settings'>
                    <NavBar />
                    <SideMenu />
                    <Settings />
                </Route>
                <Route exact path='/about'>
                    <NavBar />
                    <SideMenu />
                    <About />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router