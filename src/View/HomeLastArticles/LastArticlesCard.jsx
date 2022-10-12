import React from 'react';
const LastArticleCard = ({ title, author, content, img }) => {
  return (
    <div className='containerCard'>
      <img className='imageCard' src={img} />
      <div className='containerTextCard'>
        <div className='textCard'>
          <span>{author}</span>
          <h4 className='nameCard'>{title}</h4>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default LastArticleCard