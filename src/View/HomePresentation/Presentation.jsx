import React from 'react';
import PresentationCard from './PresentationCard';
import Title from '../../Component/Title';
import Container from '../../Component/Container.jsx';
import { Content } from './PresentationHelper';
import './Presentation.css'

const Presentation = () => {
    return (
        <section className='presentation'>

            <Container>

                <Title
                    title='Why choose Easybank?'
                    text='We leverage Open Banking to turn your bank acount into your financial hub. Control your finances like never before.'
                />

                <div className='cards__container'>

                    {
                        Content.map((c, index) => {
                            return (
                                <PresentationCard item={c} key={index} />
                            )
                        })
                    }

                </div>
            </Container>

        </section>
    )
}

export default Presentation