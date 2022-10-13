import React from 'react'
import './Styles/Logo.css'
const Logo = ({colorTitle}) => {
    return (
        <section className='logo__center'>
            <div className='containerLogo logo__center'>
                <div className='paralelogramoLeft logo'></div>
                <div className='paralelogramoMid logo'></div>
                <div className='paralelogramoRight logo'></div>
            </div>
            <p className={colorTitle}>easybank</p>
        </section>
    )
}

export default Logo