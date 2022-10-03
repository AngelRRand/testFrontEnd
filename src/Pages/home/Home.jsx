import React, { useEffect, useContext, useState } from 'react'
import '../../Styles/Home.css'
import ArticleContext from '../../Context/Article/ArticleContext.jsx';
import Welcome from './View/Welcome.jsx';
import Presentation from './View/Presentation.jsx';
import LastArticles from './View/LastArticles.jsx';
import Articles from './View/Articles';

const Home = () => {

  const [show, setShow] = useState(false);
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
      {
        show?(
          <Articles/>
        ):(
          <></>
        )
      }
      <LastArticles articles={articles} lastArticles={lastArticles} show={show} setShow={setShow}/>

    </main>
  )
}

export default Home