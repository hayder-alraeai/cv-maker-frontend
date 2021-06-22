import React from 'react'
import { useState } from 'react'
import '../styles/AddCvInfo.css'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
export default function AddCvInfo() {
    const [cvInfo, setCvInfo] = useState({})
    return (
        <div className='info-form-wrapper'>
            <div className='info-form-body'>
                <div className='info-form-title'>Personal details</div>
                <div className='info-form-body-form'>
                <form>
                    <div className='image-name-wrapper'>
                        <div className='add-image-wrapper'>
                            <CameraAltIcon className='image-icon' />
                            <div className='text'>Add profile image</div>
                        </div>
                        <div className='name-wrapper'>
                            <div className='first-name'>
                                <p>First name<span>*</span></p>
                                <input type='text' />
                            </div>
                            <div className='last-name'>
                                <p>Last name<span>*</span></p>
                                <input type='text' />
                            </div>
                            
                        </div>
                    </div>

                </form>
            </div>
            </div>
        </div>
    )
}
