import React, { useEffect, useContext, useState } from 'react';
import '../../Styles/home/Home.css'
import ArticleContext from '../Context/Article/ArticleContext.jsx';
import Welcome from './HomeWelcome/Welcome.jsx';
import Presentation from './HomePresentation/Presentation.jsx';
import LastArticles from './HomeLastArticles/LastArticles.jsx';
import Articles from './HomeArticles/Articles';
const Home = () => {

  const [show, setShow] = useState(false);
  const { articles, getArticles, infoArticle } = useContext(ArticleContext);

  useEffect(() => {
    
    getArticles()

  }, [articles, infoArticle]);

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
      <LastArticles articles={articles} show={show} setShow={setShow}/>

    </main>
  )
}

export default Home