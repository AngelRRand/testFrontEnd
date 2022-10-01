import React from 'react'

const Card = ({author, img}) => {
  return (
    <div>
        <h3>{author}</h3>
        <img src={img}/>
    </div>
  )
}

export default Card