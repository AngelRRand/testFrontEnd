import React, { useState, useEffect, useContext } from 'react'
import Spinner from './Component/Spinner.jsx';
import Card from './Component/Card';
import '../../Styles/Home.css'
import ArticleContext from '../../Context/Article/ArticleContext.jsx';
import ImageHome from '../../Assets/image.png'
import Vector1 from '../../Assets/Vector1.png'
import Vector2 from '../../Assets/Vector2.png'
const Home = () => {

  const { articles, getArticles } = useContext(ArticleContext)

  useEffect(() => {
    getArticles()
  }, []);

  return (
    <main className='containerHome'>

      <div className='textHome'>
        <h2>Next generation digital banking</h2>
        <span>Take your financial online. Your Easybank account will be a one-stop for spendin, saving budgeting, nvesting, and much more</span>
        <button className='btnNav'>
          Request Invite
        </button>
      </div>
      <div className='containerImages'>
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={ImageHome} alt="" />
      </div>

    </main>
  )
}

export default Home