import '../styles/Home.css'
import HomeImage from '../images/home-image.svg'
import {Link} from 'react-router-dom'
import GeneralContext from '../context/GeneralContext'
import {useContext} from 'react'
const Home = () => {
    const {isAuthenticatedState} = useContext(GeneralContext)
    return(
        <div className='home-wrapper'>
            <div className='home-left'>
                <img src={HomeImage} />
            </div>
             
            <div className='home-right'>Create your own CV and download it as PDF, 
            you can adjust it anytime and it is 100% free. Let's get start!
            {isAuthenticatedState.isAuth === true ? null : <span><Link to='/signup'>Register here..</Link></span>}</div>
        </div>
    )
}
export default Home