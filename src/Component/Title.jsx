import React from 'react'
import './Styles/Title.css'
const Title = ({title, text}) => {
    return (
        <div className='containerTitle'>
            <h2 className='title'>{title}</h2>
            <p >{text}</p>
        </div>
    )
}

export default Title