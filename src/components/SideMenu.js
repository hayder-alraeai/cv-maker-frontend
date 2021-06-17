import '../styles/component/SideMenu.css'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import GeneralContext from '../context/GeneralContext'
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
const SideMenu = () => {
    const {generalState, generalDispatcher, isAuthenticatedState} = useContext(GeneralContext)
    return(
        <div className={generalState.isMenuBarsOpen ? 'side-menu-wrapper active' : 'side-menu-wrapper'}>
                {isAuthenticatedState.isAuth ?
                <ul>
                <Link to='/profile' className={generalState.active === 'profile' ? 'active' : null} onClick={() => {
                    generalDispatcher({type: 'isMenuBarsOpen'})
                    generalDispatcher({type: 'active', payload: 'profile' })}}><PersonIcon /><span>Profile</span></Link>
                <Link to='/settings' className={generalState.active === 'settings' ? 'active' : null} onClick={() => {
                    generalDispatcher({type: 'isMenuBarsOpen'})
                    generalDispatcher({type: 'active', payload: 'settings' })}}><SettingsIcon /><span>Settings</span></Link>
                </ul>
                :
                <ul>
                <Link to='/about' className={generalState.active === 'about' ? 'active' : null} onClick={() => {
                    generalDispatcher({type: 'isMenuBarsOpen'})
                    generalDispatcher({type: 'active', payload: 'about' })}}><InfoIcon /><span>About</span></Link>
                </ul>
                }
        </div>
    )
}
export default SideMenu