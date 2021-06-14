import React from 'react';
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
                <div>Login</div>
                <div>Signup</div>
            </div>
        </div>
    )
}
export default NavBar