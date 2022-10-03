import React from 'react'
import ArticlesList from '../Component/ArticlesList'

const Articles = () => {
  return (
    <div className='containerArticles'>
      <div className='marginContainers'>
        <div>

          <div>
            <div>
              <h2>Add New Blog Article</h2>
              <span>Publish a new blog article to feature in the Easybank homepage.</span>
            </div>
            <div>
              <p>Form</p>
            </div>
          </div>

          <div className='containerArticlesPrevius'>
            <div>
              <h2 className='articlesPreviusText'>Previous Articles</h2>
              <span className='articlesPreviusText'>Review and edit previous blog posts published on to the homepage.</span>
            </div>
            <div className='containerArticlesList'>
              <ArticlesList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles