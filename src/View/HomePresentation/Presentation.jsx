import React from 'react';
import PresentationCard from './PresentationCard';
import Title from '../../Component/Title';
import { Content } from './PresentationHelper';
import './Presentation.css'

const Presentation = () => {
    return (
        <section className='containerPresentation'>
            
            <Title 
                title='Why choose Easybank?'
                text='We leverage Open Banking to turn your bank acount into your financial hub. Control your finances like never before.'
            />

            <div className='containerCardsPresentation'>

                {
                    Content.map((c, index) => {
                        return (
                            <PresentationCard item={c} key={index} />
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Presentation