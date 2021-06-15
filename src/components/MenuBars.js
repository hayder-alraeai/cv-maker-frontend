import '../styles/component/MenuBars.css'
import {useContext} from 'react'
import GeneralContext from '../context/GeneralContext'
const MenuBars = () => {
    const {generalState, generalDispatcher} = useContext(GeneralContext)
    return(
        <div className="menu-bars-wrapper" onClick={() => generalDispatcher({type: 'isMenuBarsOpen'})}>
            <div className={generalState.isMenuBarsOpen ? "bars close" : "bars"}></div>
        </div>
    )
}
export default MenuBars