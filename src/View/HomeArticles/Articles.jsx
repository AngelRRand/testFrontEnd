import React from 'react';
import ArticlesFrom from './ArticlesFrom';
import ArticlesList from './ArticlesList';
import Title from '../../Component/Title';
import Container from '../../Component/Container.jsx';
import './Articles.css'
const Articles = () => {

  return (
    <section className='articles'>
      <Container>
        <Title
          title='Add New Blog Article'
          text='Publish a new blog article to feature in the Easybank homepage.'
        />
        <div className='articles__center'>
          <ArticlesFrom />
        </div>
        <Title
          title='Previous Articles'
          text='Review and edit previous blog posts published on to the homepage. '
        />
          <ArticlesList />
      </Container>
    </section>
  )
}

export default Articles