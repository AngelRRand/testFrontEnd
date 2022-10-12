import React from 'react';
import ArticlesFrom from './ArticlesFrom';
import ArticlesList from './ArticlesList';
import Title from '../../Component/Title';
import Container from '../../Component/Container.jsx';
import './Articles.css'
const Articles = () => {

  return (
    <Container>

        <Title
          title='Add New Blog Article'
          text='Publish a new blog article to feature in the Easybank homepage.'
        />
        <div className='centerForm'>
          <ArticlesFrom />
        </div>


        <Title
          title='Previous Articles'
          text='Review and edit previous blog posts published on to the homepage. '
        />
        <div className='containerArticlesList'>
          <ArticlesList />
        </div>

    </Container>
  )
}

export default Articles