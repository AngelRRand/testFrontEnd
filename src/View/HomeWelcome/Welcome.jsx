import React from 'react';
import WelcomeImages from './WelcomeImages.jsx'
import Title from '../../Component/Title.jsx';
import Container from '../../Component/Container.jsx';
import './Welcome.css'

const Welcome = () => {
    return (
        <Container>
                <div className='centertextWelcome'>
                    <Title
                        title='Next generation digital banking'
                        text='Take your financial online. Your Easybank account will be a one-stop for spendin, saving budgeting, nvesting, and much more.'
                    />
                    

                    <button className='btnNav text'>
                        Request Invite
                    </button>

                </div>

            <WelcomeImages />
        </Container>
    )
}

export default Welcome