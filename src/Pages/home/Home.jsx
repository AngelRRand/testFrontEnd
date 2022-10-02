import React, { useEffect, useContext } from 'react'
import '../../Styles/Home.css'
import ArticleContext from '../../Context/Article/ArticleContext.jsx';
import Welcome from './View/Welcome.jsx';
import Presentation from './View/Presentation.jsx';
import Articles from './View/Articles';

const Home = () => {

  const { articles, lastArticles, getArticles, getLastArticles } = useContext(ArticleContext)

  useEffect(() => {
    getArticles()
    getLastArticles()
  }, []);
  //console.log(articles)
  return (
    <main className='containerHome'>
      
      <Welcome/>

      <Presentation/>

      <Articles articles={articles} lastArticles={lastArticles}/>

    </main>
  )
}

export default Home