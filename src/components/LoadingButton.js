import React from 'react'
import {LoadingOutlined} from '@ant-design/icons'
import '../styles/component/LoadingButton.css'
export default function LoadingButton({title, isLoading, onClick}) {
    return (
        <div className='submit-button-wrapper' onClick={onClick}>
            {isLoading ? <LoadingOutlined className='icon' /> : null}
            <p>{title}</p>
        </div>
    )
}
