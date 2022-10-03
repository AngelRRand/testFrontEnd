import React, {useContext, useState} from 'react'
import ArticlesFrom from '../Component/ArticlesFrom'
import ArticlesList from '../Component/ArticlesList'
import ArticleContext from '../../../Context/Article/ArticleContext';
const Articles = () => {


  const { articles } = useContext(ArticleContext)
  const [article, setArticle] = useState();
    
  const getInfoArticle = (id) => {
    const info = articles.filter(a => a.id === id)
    setArticle(info)
  }

  return (
    <div className='containerArticles'>
      <div className='marginContainers'>
        <div>

          <div >
            <div className='containerTitleArticle'>
              <h2>Add New Blog Article</h2>
              <span>Publish a new blog article to feature in the Easybank homepage.</span>
            </div>
            <div className='marginAddArticle formMargin'>
              <div className='centerForm'>
                <ArticlesFrom getInfoArticle={getInfoArticle}/>
              </div>
            </div>
          </div>

          <div className='marginAddArticle'>
            <div>
              <h2 className='articlesPreviusText'>Previous Articles</h2>
              <span className='articlesPreviusText'>Review and edit previous blog posts published on to the homepage.</span>
            </div>
            <div className='containerArticlesList'>
              <ArticlesList article={article}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles