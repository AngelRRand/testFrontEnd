import React from 'react'
import './Styles/Logo.css'
const Logo = ({colorTitle}) => {
    return (
        <section className='logoNav'>
            <div className='containerLogo'>
                <div className='paralelogramoLeft logo'></div>
                <div className='paralelogramoMid logo'></div>
                <div className='paralelogramoRight logo'></div>
            </div>
            <p className={colorTitle}>easybank</p>
        </section>
    )
}

export default Logo