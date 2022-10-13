import React from 'react';
import './Styles/SpinnerStyles.css';
const Spinner = () => {
    return (
        <div className='spinner__container'>

            <div className="spinner__cube">
                <div className="cube1 cube"></div>
                <div className="cube2 cube"></div>
                <div className="cube4 cube"></div>
                <div className="cube3 cube"></div>
            </div>
        </div>
    )
}

export default Spinner