import '../styles/component/MenuBars.css'
import {useContext} from 'react'
import GeneralContext from '../context/GeneralContext'
const MenuBars = () => {
    const {isMenuBarsOpen, menuBarsToggleHandler} = useContext(GeneralContext)
    return(
        <div className="menu-bars-wrapper" onClick={menuBarsToggleHandler}>
            <div className={isMenuBarsOpen ? "bars close" : "bars"}></div>
        </div>
    )
}
export default MenuBars