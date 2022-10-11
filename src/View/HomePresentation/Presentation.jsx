import React from 'react';
import PresentationCard from './PresentationCard';
import { Content } from './PresentationHelper';


const Presentation = () => {
    return (
        <section className='containerPresentation'>
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

                {
                    Content.map((c, index) => {
                        return (
                            <PresentationCard item={c} key={index}/>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Presentation