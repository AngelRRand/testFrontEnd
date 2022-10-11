import React from 'react'

const PresentationCard = ({item}) => {
    return (
        <article className='cardsPresentation'>
            <div className='iconPresentation'>
                <img src={item.image} alt="logo" />
            </div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
        </article>
    )
}

export default PresentationCard