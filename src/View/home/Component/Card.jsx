import React from 'react'
import '../../../Styles/HomeCard.css'
const Card = ({author, img}) => {
  return (
    <div className='containerCard'>
        <h3 className='nameCard'>{author}</h3>
        <img className='imageCard' src={img}/>
    </div>
  )
}

export default Card