import React from 'react'
import ImageHome from '../../Assets/Phones.svg';
import Vector1 from '../../Assets/Vector1.png';
import Vector2 from '../../Assets/Vector2.png';
const WelcomeImages = () => {
    return (
        <div className='images__welcome'>
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={ImageHome} alt="" />
        </div>
    )
}

export default WelcomeImages