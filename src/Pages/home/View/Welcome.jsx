import React from 'react'
import ImageHome from '../../../Assets/Phones.svg'
import Vector1 from '../../../Assets/Vector1.png'
import Vector2 from '../../../Assets/Vector2.png'
const Welcome = () => {
    return (
        <section className='containerWelcome'>
            <div className='containertextWelcome marginContainers'>
                <div className='centertextWelcome'>

                    <h2 className='text'>Next generation digital banking</h2>
                    <p className='text'>Take your financial online. Your Easybank account will be a one-stop for spendin, saving budgeting, nvesting, and much more</p>
                    <button className='btnNav text'>
                        Request Invite
                    </button>

                </div>
            </div>
            <div className='containerImages'>
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={ImageHome} alt="" />
            </div>
        </section>
    )
}

export default Welcome