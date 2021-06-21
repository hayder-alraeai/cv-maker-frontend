import {LoadingOutlined} from '@ant-design/icons'
import '../styles/component/LoadingIcon.css'
const LoadingIcon = ({text}) => {
    return(
        <div className="reload-icon">
            <LoadingOutlined />
            <p className='reload-icon-text'>{text}</p>
         </div>
    )
}
export default LoadingIcon