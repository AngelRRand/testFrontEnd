import React, { useState, useEffect, useContext } from 'react'
import Spinner from './Component/Spinner.jsx';
import Card from './Component/Card';
import '../../Styles/Home.css'
import ArticleContext from '../../Context/Article/ArticleContext.jsx';
const Home = () => {

  const {articles, getArticles} = useContext(ArticleContext)

    useEffect(() => {
      getArticles()
    }, []);

  return (
    <main className='containerHome'>

      <div>

      </div>
      <div>
        <img src="" alt="" />
      </div>

    </main>
  )
}

export default Home