import React, {useContext} from 'react';
import GeneralContext from '../context/GeneralContext'
import { Link } from 'react-router-dom'
import MenuBars from './MenuBars'
import '../styles/component/NavBar.css';
import Logo from '../images/cv-maker.logo.svg'
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
const NavBar = () => {
    const {active, activeToggleHandler} = useContext(GeneralContext)
    return(
        <div className='nav-bar-wrapper'>
            <div className='nav-bar-left'>
                <MenuBars />
            </div>
            <div className='nav-bar-middle'>
                <img src={Logo} />
            </div>
            <div className='nav-bar-right'>
                <ul>
                    <Link className={active === 'home' ? 'active' : null} onClick={() => activeToggleHandler('home')} to="/" ><HomeIcon /><span>Home</span></Link>
                    <Link className={active === 'login' ? 'active' : null} onClick={() => activeToggleHandler('login')} to="/login" ><ExitToAppIcon /><span>Sign in</span></Link>
                    <Link className={active === 'signup' ? 'active' : null} onClick={() => activeToggleHandler('signup')} to="/signup" ><AssignmentIndIcon /><span>Sign up</span></Link>
                </ul>
            </div>
        </div>
    )
}
export default NavBar