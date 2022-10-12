import React from 'react'
import Buttom from '../../Component/Buttom'

const ArticlesFromEs = ({ handleSubmit, handleChange, error, input, infoArticle }) => {
    return (
        <form onSubmit={(e) => handleSubmit(e)} className='formArticles'>
            <div className='formArticles__div'>
                <label htmlFor='author'>Author</label>
                <span>{error.author}</span>
                <input
                    type="text"
                    value={input.author}
                    name='author'
                    placeholder='Horacio'
                    id='author'
                    onChange={(e) => handleChange(e)}
                    className='formArticles__bg'
                />
            </div>
            <div className='formArticles__div'>
                <label htmlFor='title'>Blog Title</label>
                <span>{error.title}</span>
                <input
                    type="text"
                    value={input.title}
                    name='title'
                    placeholder='Receta nueva'
                    id='title'
                    onChange={(e) => handleChange(e)}
                    className='formArticles__bg'
                />
            </div>
            <div className='formArticles__div'>
                <label htmlFor='content'>Blog Content</label>
                <span>{error.content}</span>
                <textarea
                    type="text"
                    value={input.content}
                    name='content'
                    placeholder='Pan, huevo, pan , huevo'
                    id='content'
                    onChange={(e) => handleChange(e)}
                    maxLength={60}
                    className='formArticles__bg'
                />
            </div>
            <Buttom
                form={true}
                infoArticle={infoArticle}
            />
        </form>
    )
}

export default ArticlesFromEs