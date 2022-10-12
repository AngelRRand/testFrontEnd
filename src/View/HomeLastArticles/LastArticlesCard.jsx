import React from 'react';
const LastArticleCard = ({ title, author, content, img }) => {
  return (
    <div className='lastArticle__card '>
      <img src={img} alt='image' />
      <div className='lartArticle__text'>
          <span>{author}</span>
          <h4>{title}</h4>
          <p>{content}</p>
      </div>
    </div>
  )
}

export default LastArticleCard