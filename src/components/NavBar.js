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
    const {generalState, generalDispatcher, isAuthenticatedState} = useContext(GeneralContext)
    return(
        <div className='nav-bar-wrapper'>
            <div className='nav-bar-left'>
                <MenuBars />
            </div>
            <div className='nav-bar-middle'>
                <img src={Logo} />
            </div>
            <div className='nav-bar-right'>
                    {isAuthenticatedState.isAuth ? 
                    <ul>
                        <Link className={generalState.active === 'home' ? 'active' : null} onClick={() => generalDispatcher({type: 'active', payload: 'home' })} to="/" ><HomeIcon /><span>Home</span></Link>
                        <Link className={generalState.active === 'login' ? 'active' : null} onClick={() => generalDispatcher({type: 'active', payload: 'login' })} to="/login" ><ExitToAppIcon /><span>Sign out</span></Link>
                    </ul>
                        :
                    <ul>
                        <Link className={generalState.active === 'home' ? 'active' : null} onClick={() => generalDispatcher({type: 'active', payload: 'home' })} to="/" ><HomeIcon /><span>Home</span></Link>
                        <Link className={generalState.active === 'login' ? 'active' : null} onClick={() => generalDispatcher({type: 'active', payload: 'login' })} to="/login" ><ExitToAppIcon /><span>Sign in</span></Link>
                        <Link className={generalState.active === 'signup' ? 'active' : null} onClick={() => generalDispatcher({type: 'active', payload: 'signup' })} to="/signup" ><AssignmentIndIcon /><span>Sign up</span></Link>
                    </ul>
                    }
            </div>
        </div>
    )
}
export default NavBar