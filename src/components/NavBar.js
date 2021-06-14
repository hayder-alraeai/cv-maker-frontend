import React from 'react';
import {  BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom'
import MenuBars from './MenuBars'
import '../styles/component/NavBar.css';
import Logo from '../images/cv-maker.logo.svg'
const NavBar = () => {

    return(
        <div className='nav-bar-wrapper'>
            <div className='nav-bar-left'>
                <MenuBars />
            </div>
            <div className='nav-bar-middle'>
                <img src={Logo} />
            </div>
            <div className='nav-bar-right'>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/login">Login</Link></div>
                <div><Link to="/signup">Signup</Link></div>
            </div>
        </div>
    )
}
export default NavBar