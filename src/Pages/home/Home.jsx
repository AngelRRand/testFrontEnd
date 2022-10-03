import React, { useEffect, useContext, useState } from 'react';
import '../../Styles/home/Home.css'
import ArticleContext from '../../Context/Article/ArticleContext.jsx';
import Welcome from './View/Welcome.jsx';
import Presentation from './View/Presentation.jsx';
import LastArticles from './View/LastArticles.jsx';
import Articles from './View/Articles';
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