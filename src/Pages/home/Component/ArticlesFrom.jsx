import React, { useState } from 'react'
import './../../../Styles/home/FormStyles.css'

function validateForm(input) {
    let errors = {};


    if (!input.author) {
        errors.author = "You must type a author";
    } else if (!input.author.match(/^[A-Za-z\s]+$/)) {
        errors.author = "The author does not admit numbers";
    } else if (input.author.length < 3 || input.author.length > 50) {
        errors.author = "Required, Length between 3 and 50";
    }
    else {
        errors.author = "";
    }

    if (!input.title) {
        errors.title = "You must type a title";
    } else if (input.title.length < 3 || input.title.length > 50) {
        errors.title = "Required, Length between 3 and 50";
    }
    else {
        errors.title = "";
    }

    if (!input.content) {
        errors.content = "You must type a content";
    } else if (input.content.length < 3 || input.content.length > 50) {
        errors.content = "Required, Length between 3 and 50";
    }
    else {
        errors.content = "";
    }
    return errors;
}



const ArticlesFrom = () => {

    const [error, setErrors] = useState('');
    const [input, setInput] = useState({
        author: '',
        title: '',
        content: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault();

    };
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(
            validateForm({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    };

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
                    placeholder='Receta nueva'
                    id='content'
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <input
                type="submit"
                className='btnNav btnfrom'
                value='Request Invite'
            />
        </form>
    )
}

export default ArticlesFrom