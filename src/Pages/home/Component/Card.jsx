import React from 'react'
import '../../../Styles/HomeCard.css'
const Card = ({ title, author, content, img }) => {
  return (
    <div className='containerCard'>
      <img className='imageCard' src={img} />
      <div>
        <span>{author}</span>
        <h3 className='nameCard'>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Card