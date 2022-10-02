import React from 'react'
import Spinner from '../Component/Spinner'
import Card from '../Component/Card'
const Articles = ({ articles, lastArticles }) => {
    return (
        <section className='containerLastArticles'>
            <div className='containerTextLastArticles'>
                <div className='containerTitleLastArticle'>
                    <div>
                        <h2>Latest Articles</h2>
                    </div>
                    <button className='btnNav text'>
                        + Add New Article
                    </button>
                </div>
                <div>
                    <div className='containerCards'>
                        {
                            !lastArticles ?
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

export default Articles