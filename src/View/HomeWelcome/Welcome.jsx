import React from 'react';
import WelcomeImages from './WelcomeImages.jsx'
import Title from '../../Component/Title.jsx';
import Container from '../../Component/Container.jsx';
import Buttom from '../../Component/Buttom.jsx';
import './Welcome.css'

const Welcome = () => {
    return (
        <section>
            <Container
                style={true}
            >
                <div className='center'>
                    <Title
                        title='Next generation digital banking'
                        text='Take your financial online. Your Easybank account will be a one-stop for spendin, saving budgeting, nvesting, and much more.'
                    />


                    <Buttom
                        text='Request Invite'
                    />

                </div>
                <WelcomeImages />
            </Container>
        </section>
    )
}

export default Welcome