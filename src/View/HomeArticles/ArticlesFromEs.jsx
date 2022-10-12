import React from 'react'
import Buttom from '../../Component/Buttom'

const ArticlesFromEs = ({handleSubmit, handleChange, error, input, infoArticle}) => {
    return (
        <form onSubmit={(e) => handleSubmit(e)} className='containerFormArticles'>
            <div className='divForm'>
                <div className='labelSpanForm'>
                    <label htmlFor='author'>Author</label>
                    <span>{error.author}</span>
                </div>
                <input
                    type="text"
                    value={input.author}
                    name='author'
                    placeholder='Horacio'
                    id='author'
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className='divForm'>
                <div className='labelSpanForm'>
                    <label htmlFor='title'>Blog Title</label>
                    <span>{error.title}</span>
                </div>
                <input
                    type="text"
                    value={input.title}
                    name='title'
                    placeholder='Receta nueva'
                    id='title'
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className='divForm'>
                <div className='labelSpanForm'>
                    <label htmlFor='content'>Blog Content</label>
                    <span>{error.content}</span>
                </div>
                <textarea
                    type="text"
                    value={input.content}
                    name='content'
                    placeholder='Pan, huevo, pan , huevo'
                    id='content'
                    onChange={(e) => handleChange(e)}
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