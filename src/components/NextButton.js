import React from 'react'
import '../styles/component/NextButton.css'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
export default function NextButton({onClick, title, leftOrRight}) {
    return (
        <div onClick={onClick} className='next-button-wrapper'>
            <div>{leftOrRight === 'left'? <NavigateBeforeIcon /> : null}</div>
            <div>{title}</div>
            <div>{leftOrRight === 'right'? <NavigateNextIcon /> : null }</div>
        </div>
    )
}
