import React from 'react'
import '../styles/component/AlertMessage.css'
export default function AlertMessage({message, style}) {
    return (
        <div className={style}>
            <p>{message}</p>
        </div>
    )
}
