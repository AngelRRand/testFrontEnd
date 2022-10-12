import React from 'react';
import ArticlesFrom from './ArticlesFrom';
import ArticlesList from './ArticlesList';
import './Articles.css'
const Articles = () => {



  return (
    <section className='containerArticles'>
        <div className='containerTitleArticle'>
          <h2>Add New Blog Article</h2>
          <span>Publish a new blog article to feature in the Easybank homepage.</span>
        </div>
        <div className='marginAddArticle formMargin'>
          <div className='centerForm'>
            <ArticlesFrom />
          </div>
        </div>

        <div className='marginAddArticle'>
          <div>
            <h2 className='articlesPreviusText'>Previous Articles</h2>
            <span className='articlesPreviusText'>Review and edit previous blog posts published on to the homepage.</span>
          </div>
          <div className='containerArticlesList'>
            <ArticlesList />
          </div>
        </div>
    </section>
  )
}

export default Articles