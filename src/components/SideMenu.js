import '../styles/component/SideMenu.css'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import GeneralContext from '../context/GeneralContext'
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
const SideMenu = () => {
    const {isMenuBarsOpen, menuBarsToggleHandler,active, activeToggleHandler} = useContext(GeneralContext)
    return(
        <div className={isMenuBarsOpen ? 'side-menu-wrapper active' : 'side-menu-wrapper'}>
            <ul>
                <Link to='/profile' className={active === 'profile' ? 'active' : null} onClick={() => {
                    menuBarsToggleHandler()
                    activeToggleHandler('profile')}}><PersonIcon /><span>Profile</span></Link>
                <Link to='/settings' className={active === 'settings' ? 'active' : null} onClick={() => {
                    menuBarsToggleHandler()
                    activeToggleHandler('settings')}}><SettingsIcon /><span>Settings</span></Link>
                <Link to='/about' className={active === 'about' ? 'active' : null} onClick={() => {
                    menuBarsToggleHandler()
                    activeToggleHandler('about')}}><InfoIcon /><span>About</span></Link>
            </ul>
        </div>
    )
}
export default SideMenu