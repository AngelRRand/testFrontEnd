import React, { useEffect, useContext } from 'react'
import '../../Styles/Home.css'
import ArticleContext from '../../Context/Article/ArticleContext.jsx';

import Presentation from './View/Presentation';
const Home = () => {

  const { articles, getArticles } = useContext(ArticleContext)

  useEffect(() => {
    getArticles()
  }, []);

  return (
    <main >

      <Presentation/>

    </main>
  )
}

export default Home