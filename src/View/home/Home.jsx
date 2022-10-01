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

    console.log(articles, 'desdehome')
  return (
    <main className='containerHome'>

      <div className='centerHome'>
        <div className='containerCards'>
        {!articles ?
            (<Spinner />)
            :
            articles.map(c => {
              return <Card author={c.author} key={c.id} img={c.image_url} />
            })
          }
        </div>
      </div>

    </main>
  )
}

export default Home