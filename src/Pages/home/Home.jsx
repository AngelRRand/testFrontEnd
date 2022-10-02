import React, { useEffect, useContext } from 'react'
import '../../Styles/Home.css'
import ArticleContext from '../../Context/Article/ArticleContext.jsx';
import Welcome from './View/Welcome.jsx';
import Presentation from './View/Presentation.jsx';
import Articles from './View/Articles';

const Home = () => {

  const { articles, getArticles } = useContext(ArticleContext)

  useEffect(() => {
    getArticles()
  }, []);

  return (
    <main className='containerHome'>
      
      <Welcome/>

      <Presentation/>
      
      <Articles/>

    </main>
  )
}

export default Home