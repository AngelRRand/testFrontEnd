import React from 'react';
import WelcomeImages from './WelcomeImages.jsx'
import './Welcome.css'

const Welcome = () => {
    return (
        <section className='containerWelcome'>
            <div className='containertextWelcome'>
                <div className='centertextWelcome'>
                    <h2 className='text'>Next generation digital banking</h2>
                    <p className='text'>Take your financial online. Your Easybank account will be a one-stop for spendin, saving budgeting, nvesting, and much more</p>
                    
                    <button className='btnNav text'>
                        Request Invite
                    </button>

                </div>
            </div>

            <WelcomeImages/>
        </section>
    )
}

export default Welcome