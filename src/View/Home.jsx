import React, { useEffect, useContext, useState } from 'react';
import ArticleContext from '../Context/Article/ArticleContext.jsx';
import Welcome from './HomeWelcome/Welcome.jsx';
import Presentation from './HomePresentation/Presentation.jsx';
import LastArticles from './HomeLastArticles/LastArticles.jsx';
import Articles from './HomeArticles/Articles';
import './Home.css'
const Home = () => {

  const [show, setShow] = useState(false);
  const { articles, getArticles, infoArticle } = useContext(ArticleContext);

  useEffect(() => {
    
    getArticles()

  }, [articles, infoArticle]);
  const lastArticles = articles.slice(0, 4);
  return (
    <main className='containerHome'>
      
      <Welcome/>
      
      <Presentation/>
      {
        show?(
          <Articles/>
        ):(
          <></>
        )
      }
      <LastArticles lastArticles={lastArticles} show={show} setShow={setShow}/>

    </main>
  )
}

export default Home