import React from 'react';
import Spinner from '../../Component/Spinner';
import LastArticleCard from './LastArticlesCard.jsx';
import Title from '../../Component/Title';
import Container from '../../Component/Container.jsx';
import './LastArticles.css'
import Buttom from '../../Component/Buttom';
const LastArticles = ({ lastArticles, show, setShow }) => {


    return (
        <section>

            <Container >
                <div className='lastArticle__title lastArticle__center'>
                    <Title
                        title='Latest Articles'
                    />
                    <Buttom
                        text={!show ? 'Add New Article' : 'Close'}
                        action={show}
                        setAction={setShow}
                    />
                </div>
                <div className='lastArticle__cards lastArticle__center'>
                    {
                        lastArticles.length === 0 ?
                            (<Spinner />)
                            :
                            lastArticles.map(a => {
                                return (
                                    <LastArticleCard
                                        key={a.id}
                                        title={a.title}
                                        author={a.author}
                                        img={a.image_url}
                                        content={a.content}
                                    />)
                            })
                    }
                </div>
            </Container>

        </section>
    )
}

export default LastArticles