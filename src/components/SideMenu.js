import '../styles/component/SideMenu.css'
import {useContext} from 'react'
import GeneralContext from '../context/GeneralContext'
const SideMenu = () => {
    const {isMenuBarsOpen, menuBarsToggleHandler} = useContext(GeneralContext)
    return(
        <div className={isMenuBarsOpen ? 'side-menu-wrapper active' : 'side-menu-wrapper'}>
            side menu
        </div>
    )
}
export default SideMenu