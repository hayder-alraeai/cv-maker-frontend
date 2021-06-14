import '../styles/Home.css'
import HomeImage from '../images/home-image.svg'
import {Link} from 'react-router-dom'
const Home = () => {
    return(
        <div className='home-wrapper'>
            <div className='home-left'>
                <img src={HomeImage} />
            </div>
            <div className='home-right'>Create your own CV and download it as PDF, 
            you can adjust it anytime and it is 100% free. Let's get start!
             <span><Link to='/signup'>Register here..</Link></span></div>
        </div>
    )
}
export default Home