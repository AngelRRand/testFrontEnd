import React from 'react';
import ArticlesFrom from './ArticlesFrom';
import ArticlesList from './ArticlesList';
import Title from '../../Component/Title';
import './Articles.css'
const Articles = () => {

  return (
    <section className='containerArticles'>
      <div className='marginAddArticle formMargin'>

        <Title
          title='Add New Blog Article'
          text='Publish a new blog article to feature in the Easybank homepage.'
        />
        <div className='centerForm'>
          <ArticlesFrom />
        </div>

      </div>

      <div className='marginAddArticle'>

        <Title
          title='Previous Articles'
          text='Review and edit previous blog posts published on to the homepage. '
        />
        <div className='containerArticlesList'>
          <ArticlesList />
        </div>

      </div>
    </section>
  )
}

export default Articles