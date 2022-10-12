import React from 'react'

const PresentationCard = ({item}) => {
    return (
        <article className='cardPresent__container cardPresent__center'>
            <div className='cardPresent__icon cardPresent__center'>
                <img src={item.image} alt="logo" />
            </div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
        </article>
    )
}

export default PresentationCard