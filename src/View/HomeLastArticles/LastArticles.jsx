import React from 'react';
import Spinner from '../../Component/Spinner';
import LastArticleCard from './LastArticlesCard.jsx';
import './LastArticles.css'
const LastArticles = ({ lastArticles, show, setShow }) => {

   
    return (
        <section className='containerLastArticles'>
                <div className='containerTitleLastArticle'>
                    <div>
                        <h2>Latest Articles</h2>
                    </div>
                    <button className='btnNav text' onClick={()=>setShow(!show)}>
                        {
                            !show ? 'Add New Article' : 'Close'
                        }
                    </button>
                </div>
                <div>
                    <div className='containerCards'>
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
                </div>
        </section>
    )
}

export default LastArticles