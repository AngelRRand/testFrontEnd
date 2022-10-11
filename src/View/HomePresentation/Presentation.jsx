import React from 'react';
import Icon1 from '../../Assets/Icon1.svg';
import Icon2 from '../../Assets/Icon2.svg';
import Icon3 from '../../Assets/Icon3.svg';
import Icon4 from '../../Assets/Icon4.svg';


const Presentation = () => {
    return (
        <section className='containerPresentation'>
            <div className='marginContainers'>
                <div className='textPresentation'>
                    <h2>Why choose Easybank?</h2>
                </div>
                <div className='textPresentation'>
                    <div className='spanPresentation'>
                        <span>
                            We leverage Open Banking to turn your bank acount into your financial hub. Control your finances like never before.
                        </span>
                    </div>
                </div>
                <div className='containerCardsPresentation'> 
                    <div className='cardsPresentation'>
                        <div className='iconPresentation'>
                            <img src={Icon1} alt="icon" />
                        </div>
                        <h4>Fast Onboarding</h4>
                        <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world. </p>
                    </div>
                    <div className='cardsPresentation'>
                        <div className='iconPresentation'>
                            <img src={Icon2} alt="icon" />
                        </div>
                        <h4>Fast Onboarding</h4>
                        <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits. </p>
                    </div>
                    <div className='cardsPresentation'>
                        <div className='iconPresentation'>
                            <img src={Icon3} alt="icon" />
                        </div>
                        <h4>Fast Onboarding</h4>
                        <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.  </p>
                    </div>
                    <div className='cardsPresentation'>
                        <div className='iconPresentation'>
                            <img src={Icon4} alt="icon" />
                        </div>
                        <h4>Open API</h4>
                        <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.  </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Presentation