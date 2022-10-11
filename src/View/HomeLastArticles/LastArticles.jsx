import React from 'react';
import Spinner from '../../Component/Spinner';
import Card from './Card';
const LastArticles = ({ articles, show, setShow }) => {

    const lastArticles = articles.slice(0, 4);
    return (
        <section className='containerLastArticles'>
            <div className='marginContainers'>
                <div className='containerTitleLastArticle'>
                    <div>
                        <h2>Latest Articles</h2>
                    </div>
                    <button className='btnNav text' onClick={()=>setShow(!show)}>
                        + Add New Article
                    </button>
                </div>
                <div>
                    <div className='containerCards'>
                        {
                            lastArticles.length === 0 ?
                                (<Spinner />)
                                :
                                lastArticles.map(a => {
                                    return <Card
                                        key={a.id}
                                        title={a.title}
                                        author={a.author}
                                        img={a.image_url}
                                        content={a.content}
                                    />
                                })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LastArticles